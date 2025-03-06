import { BaseModel } from "./base_model";

export default class OwnerModel extends BaseModel {
  name: string;
  avatarUrl: string;
  url: string;

  constructor(
    ID: number,
    nodeID: number,
    name: string,
    avatarUrl: string,
    url: string
  ) {
    super(ID, nodeID);
    this.name = name;
    this.avatarUrl = avatarUrl;
    this.url = url;
  }

  public static fromJson(data: any): any | OwnerModel {
    try {
      return new OwnerModel(
        data.id,
        data.node_id,
        data.login,
        data.avatar_url,
        data.url
      );
    } catch {
      return null;
    }
  }

  public static fromJsonList(data: any): OwnerModel[] | any {
    try {
      const list = [];

      for (let x = 0; x < data.length; x++) {
        list.push(OwnerModel.fromJson(data[x]));
      }

      return list;
    } catch {
      return [];
    }
  }
}
