import BLoading from "@/components/atoms/loading";
import BAccordion from "@/components/molecules/accordion";
import BSearch from "@/components/molecules/search";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import githubImage from "@public/github.png";
import repositoryListStore from "@/domains/use_case/repository_list_context";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import formatNumber from "@/utils/helper/formatNumber";
import Routing from "@/utils/constanta/page_route";
import LimitCharacter from "@/utils/helper/limitCharacter";

const RepositoryPage = () => {
  const [pageLoading, setPageLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(false);
  const repositoryListContext = useContext(repositoryListStore.Context);

  const { searchRepository, dataRepositories, dataRepositoryPagination } =
    repositoryListContext!;

  const nav = useNavigate();
  const [qParams, _] = useSearchParams();
  const query = qParams.get("q");

  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    setDataLoading(true);
    searchRepository({
      q: query || "",
      per_page: perPage,
    }).finally(() => {
      setDataLoading(false);
      setPageLoading(false);
    });
  }, [query, perPage]);

  const repositories = dataRepositories;
  const pagination = dataRepositoryPagination;

  return (
    <div>
      {pageLoading && (
        <div className="flex flex-col w-full justify-center items-center h-screen">
          <BLoading />
        </div>
      )}

      <div>
        {!pageLoading && (
          <div className="py-16 w-full lg:w-1/2 mx-auto">
            <BSearch
              placeholder="Search for repositories..."
              value={query || ""}
              onClick={(value) => {
                value && nav(`${Routing.REPOSITORY}?q=${value}`);
              }}
            />
            <div className="flex flex-col items-center py-3">
              <div className=" flex w-full justify-center text-sm lg:text-xl text-gray-600 gap-2">
                Showing results for:
                <span className="font-semibold text-black"> "{query}"</span>
              </div>
              <span className="text-xs">
                <b>{formatNumber(pagination?.total || 0)}</b> repositories
                found.
              </span>
            </div>
            {repositories.data.length > 0 && (
              <div className="">
                <BAccordion
                  data={repositories.data.map((git) => ({
                    title: (
                      <div className="flex gap-2 items-center">
                        <img
                          src={git.owner.avatarUrl}
                          alt="owner"
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-lg">{git.owner.name}</span>
                      </div>
                    ),
                    content: (
                      <div className="space-y-1">
                        {git.repositories.map((rep) => (
                          <div className="flex flex-col space-y-2 bg-black text-white p-4 rounded-lg relative">
                            <div className="flex flex-col space-y-2">
                              <div className="flex justify-between gap-2">
                                <div className="flex gap-1 items-center">
                                  <span className="text-sm lg:text-xl font-semibold">
                                    {LimitCharacter(rep.name, 35)}
                                  </span>
                                  <div className="px-2 bg-muted-foreground rounded-full">
                                    <span className="text-[10px]">
                                      {rep.language}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex gap-1 items-center text-sm">
                                  <span>{rep.score}</span>
                                  <FaStar className="w-3 h-3" />
                                </div>
                              </div>
                              <div>
                                <span className="text-[10px] lg:text-xs">
                                  {LimitCharacter(rep.description, 100)}
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col space-y-2 ">
                              <span className="gap-1 flex flex-wrap">
                                {rep.topics.map((topic) => (
                                  <span className="bg-white text-black px-2 rounded-sm text-[10px]">
                                    #{topic}
                                  </span>
                                ))}
                              </span>
                            </div>

                            <div className="flex justify-between text-xs lg:text-sm pt-2 items-center">
                              <div className="flex items-center space-x-4">
                                <span className="text-sm flex items-center gap-1">
                                  <b>{rep.watchersCount || 0}</b> Views
                                  {/* <FaEye className="" /> */}
                                </span>
                                <span className="text-sm flex items-center gap-1">
                                  <b>{rep.forksCount || 0}</b> Forks
                                  {/* <FaCodeFork className="w-3 h-3" /> */}
                                </span>
                              </div>
                              <Link to={rep.url} target="_blank">
                                <div className="flex items-center gap-1 text-white">
                                  <span>See Repository</span>
                                  <div>
                                    <FaArrowRight className="w-3 h-3" />
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    ),
                  }))}
                />
                {(pagination?.total || 0) > repositories.count ? (
                  <div className="flex justify-center mt-4">
                    <Button
                      onClick={() => setPerPage(perPage + 10)}
                      isLoading={dataLoading}
                    >
                      Load More
                    </Button>
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-center my-4">
                      <span className="text-sm text-gray-600">
                        You have reached the end of the list.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
            {repositories.data.length === 0 && (
              <div className="flex flex-col items-center space-y-2 py-32 justify-center">
                <img
                  src={githubImage}
                  alt="github"
                  className="w-[200px] h-[200px]"
                />
                <div className="flex flex-col items-center py-3">
                  <span className="text-base lg:text-xl font-semibold text-center">
                    Sorry your search did not match any repositories.
                  </span>
                  <span className="text-sm lg:text-base">
                    Please try again.
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RepositoryPage;
