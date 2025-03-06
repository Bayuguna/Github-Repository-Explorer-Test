import OwnerRepositoryModel from "@/domains/model/owner_repository_model";
import { PaginateModel } from "@/domains/model/paginaton_model";
import { IGithubParams } from "@/domains/repository/interface/github_interface";

export default interface CRepositoryListProviderInterface {
  dataRepositories: {
    data: OwnerRepositoryModel[];
    count: number;
  };
  dataRepositoryPagination: PaginateModel | null;
  searchRepository: (data: IGithubParams) => Promise<any>;
}
