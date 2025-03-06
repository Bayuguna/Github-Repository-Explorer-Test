import { BaseModel } from "./base_model";
import OwnerModel from "./owner_model";

export default class RepositoryModel extends BaseModel {
  name: string;
  fullName: string;
  url: string;
  description: string;
  watchersCount: number;
  language: string;
  topics: string[];
  forksCount: number;
  score: string;
  owner: OwnerModel;

  constructor(
    ID: number,
    nodeID: number,
    name: string,
    fullName: string,
    url: string,
    description: string,
    watchersCount: number,
    language: string,
    topics: string[],
    forksCount: number,
    score: string,
    owner: OwnerModel
  ) {
    super(ID, nodeID);
    this.name = name;
    this.fullName = fullName;
    this.url = url;
    this.description = description;
    this.watchersCount = watchersCount;
    this.language = language;
    this.topics = topics;
    this.forksCount = forksCount;
    this.score = score;
    this.owner = owner;
  }

  public static fromJson(data: any): any | RepositoryModel {
    try {
      return new RepositoryModel(
        data.id,
        data.node_id,
        data.name,
        data.full_name,
        data.html_url,
        data.description,
        data.watchers,
        data.language,
        data.topics,
        data.forks,
        data.score,
        data.owner && OwnerModel.fromJson(data.owner)
      );
    } catch {
      return null;
    }
  }

  public static fromJsonList(data: any): RepositoryModel[] | any {
    try {
      const list = [];

      for (let x = 0; x < data.length; x++) {
        list.push(RepositoryModel.fromJson(data[x]));
      }

      return list;
    } catch {
      return [];
    }
  }
}
