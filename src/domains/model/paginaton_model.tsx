export class PaginateModel {
  total: number;
  incompleteResults: boolean;

  constructor(total: number, incompleteResults: boolean) {
    this.total = total;
    this.incompleteResults = incompleteResults;
  }

  public static fromJson(data: any): any | PaginateModel {
    try {
      return new PaginateModel(data.total_count, data.incomplete_results);
    } catch {
      return null;
    }
  }
}
