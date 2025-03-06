import OwnerModel from "./owner_model";
import RepositoryModel from "./repository_model";

export default class OwnerRepositoryModel {
  owner: OwnerModel;
  repositories: RepositoryModel[];

  constructor(owner: OwnerModel, repositories: RepositoryModel[]) {
    this.owner = owner;
    this.repositories = repositories;
  }

  public static fromJson(data: any): any | OwnerRepositoryModel {
    try {
      return new OwnerRepositoryModel(
        data.owner && OwnerModel.fromJson(data.owner),
        data.repositories && RepositoryModel.fromJsonList(data.repositories)
      );
    } catch {
      return null;
    }
  }

  public static fromJsonList(data: any): OwnerRepositoryModel[] | any {
    try {
      const list = [];

      for (let x = 0; x < data.length; x++) {
        list.push(OwnerRepositoryModel.fromJson(data[x]));
      }

      return list;
    } catch {
      return [];
    }
  }
}
