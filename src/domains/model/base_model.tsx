export class BaseModel {
  ID: number;
  nodeID: number;

  constructor(ID: number, nodeID: number) {
    this.ID = ID;
    this.nodeID = nodeID;
  }
}
