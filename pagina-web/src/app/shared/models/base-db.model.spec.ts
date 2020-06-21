import { BaseDbModel } from "./base-db.model";

describe("BaseDbModel", () => {
  it("should create an instance", () => {
    expect(new BaseDbModel()).toBeTruthy();
  });
});
