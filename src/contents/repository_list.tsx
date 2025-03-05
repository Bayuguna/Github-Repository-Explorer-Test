import BLoading from "@/components/atoms/loading";
import BAccordion from "@/components/molecules/accordion";
import BSearch from "@/components/molecules/search";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import githubImage from "@public/github.png";

const RepositoryPage = () => {
  const [dataLoading, setDataLoading] = useState(true);

  const nav = useNavigate();
  const [qParams, _] = useSearchParams();
  const query = qParams.get("q");

  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container-wrapper">
      {dataLoading && (
        <div className="flex flex-col w-full justify-center items-center h-screen">
          <BLoading />{" "}
        </div>
      )}

      <div>
        {!dataLoading && (
          <div className="py-12">
            <BSearch
              placeholder="Search for repositories..."
              value={query || ""}
              onClick={(value) => {
                value && nav(`/repository?q=${value}`);
              }}
            />
            <div className="py-3 flex w-full justify-center text-xl text-gray-600 gap-2">
              Showing results for:
              <span className="font-semibold text-black"> "{query}"</span>
            </div>
            <div className="">
              <BAccordion
                data={[
                  {
                    title: "Repository 1",
                    content: (
                      <div className="bg-black text-white p-3">
                        "This is the content of repository 1"
                      </div>
                    ),
                  },
                  {
                    title: "Repository 2",
                    content: "This is the content of repository 2",
                  },
                ]}
              />
            </div>
            <div className="flex flex-col items-center space-y-2 py-32 justify-center">
              <img
                src={githubImage}
                alt="github"
                className="w-[200px] h-[200px]"
              />
              <div className="flex flex-col items-center py-3">
                <span className="text-xl font-semibold">
                  Sorry your search did not match any repositories.
                </span>
                <span>Please try again.</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RepositoryPage;
