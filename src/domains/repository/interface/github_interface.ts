import { PaginateModel } from "@/domains/model/paginaton_model";
import RepositoryModel from "@/domains/model/repository_model";

export interface IGithubParams {
  q?: string;
  sort?: string;
  order?: string;
  per_page?: number;
}

export default interface IGithubInterface {
  searchRepository: (data: IGithubParams) => Promise<{
    data: RepositoryModel[];
    pagination: PaginateModel;
  }>;
}
