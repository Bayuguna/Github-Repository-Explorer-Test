import API_ROUTE from "@/utils/constanta/api_route";
import RepositoryModel from "../model/repository_model";
import IGithubInterface, { IGithubParams } from "./interface/github_interface";
import { ApiClient } from "@/utils/connector/api_client";
import { PaginateModel } from "../model/paginaton_model";

export class GithubRepository implements IGithubInterface {
  api = new ApiClient();
  async searchRepository(data?: IGithubParams): Promise<{
    data: RepositoryModel[];
    pagination: PaginateModel;
  }> {
    return new Promise((resolve, reject) => {
      this.api
        .get(API_ROUTE.GITHUB.SEARCH, {
          params: data,
        })
        .then((result) => {
          console.log("result", result);
          const data = RepositoryModel.fromJsonList(result.data.items);
          const pagination = PaginateModel.fromJson(result.data);
          resolve({
            data,
            pagination,
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
