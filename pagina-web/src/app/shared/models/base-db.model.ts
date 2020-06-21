export class BaseDbModel {
  constructor(
    public id?: number,
    public create_at?: Date,
    public update_at?: Date,
    public delete_at?: Date
  ) {}
}
