import { createContext, useState } from "react";
import CRepositoryListProviderInterface from "./interface/repository_list_interface";
import { GithubRepository } from "../repository/github_repository";
import { IGithubParams } from "../repository/interface/github_interface";
import OwnerRepositoryModel from "../model/owner_repository_model";
import { PaginateModel } from "../model/paginaton_model";
import useAlertToast from "@/utils/hook/useAlertToastify";

function repositoryListStore() {
  const Context = createContext<CRepositoryListProviderInterface | null>(null);

  /* -------------------------------------------------------------------------- */
  /*                                 Repository                                 */
  /* -------------------------------------------------------------------------- */
  const githubRepository = new GithubRepository();

  const Provider = (props: any) => {
    const alertToast = useAlertToast();
    /* -------------------------------------------------------------------------- */
    /*                                  Form Data                                 */
    /* -------------------------------------------------------------------------- */

    /* -------------------------------------------------------------------------- */
    /*                                 Hook State                                 */
    /* -------------------------------------------------------------------------- */
    const [dataRepositories, setDataRepositories] = useState<{
      data: OwnerRepositoryModel[];
      count: number;
    }>({
      data: [],
      count: 0,
    });
    const [dataRepositoryPagination, setDataRepositoryPagination] =
      useState<PaginateModel | null>(null);
    /* -------------------------------------------------------------------------- */
    /*                                 Validation                                 */
    /* -------------------------------------------------------------------------- */

    /* -------------------------------------------------------------------------- */
    /*                                    Modal                                   */
    /* -------------------------------------------------------------------------- */

    /* -------------------------------------------------------------------------- */
    /*                                 Reset Data                                 */
    /* -------------------------------------------------------------------------- */

    /* -------------------------------------------------------------------------- */
    /*                              Begin Main Logic                              */
    /* -------------------------------------------------------------------------- */

    /* -------------------------------------------------------------------------- */
    /*                               End Main Logic                               */
    /* -------------------------------------------------------------------------- */

    /* -------------------------------------------------------------------------- */
    /*                                    Main                                    */
    /* -------------------------------------------------------------------------- */

    // Searh Repository
    const searchRepository = async (params: IGithubParams) => {
      return await githubRepository
        .searchRepository({
          ...params,
          sort: "stars",
          order: "desc",
          per_page: params.per_page || 10,
        })
        .then((res) => {
          const ownerReps: OwnerRepositoryModel[] = [];
          res.data.map((item) => {
            console.log("item repos", item);
            if (ownerReps.find((owner) => owner.owner.ID === item.owner.ID)) {
              const owner = ownerReps.find(
                (owner) => owner.owner.ID === item.owner.ID
              );
              owner && owner.repositories.push(item);
            } else {
              ownerReps.push(new OwnerRepositoryModel(item.owner, [item]));
            }
          });
          setDataRepositories({
            data: ownerReps,
            count: res.data.length,
          });
          console.log("res", res);
          setDataRepositoryPagination(res.pagination);
          console.log("pagination", res.pagination);
        })
        .catch((err) => {
          alertToast.errorAlert(err.message);
        });
    };

    /* -------------------------------------------------------------------------- */
    /*                                  End Main                                  */
    /* -------------------------------------------------------------------------- */

    /* -------------------------------------------------------------------------- */
    /*                        Begin Initial Provider Value                        */
    /* -------------------------------------------------------------------------- */
    const state: CRepositoryListProviderInterface = {
      dataRepositories,
      dataRepositoryPagination,
      searchRepository,
    };

    return <Context.Provider value={state}>{props.children}</Context.Provider>;
  };
  /* -------------------------------------------------------------------------- */
  /*                         End Initial Provider Value                         */
  /* -------------------------------------------------------------------------- */

  return {
    Context,
    Provider,
  };
}

export default repositoryListStore();
