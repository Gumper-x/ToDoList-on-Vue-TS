import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

@Module({ name: "test" })
export default class User extends VuexModule {
  private name = "d";
  @Mutation
  public setName(newName: string): void {
    this.name = newName;
  }
  @Action
  public updateName(newName: string): void {
    this.context.commit("setName", newName);
  }
  public get getName(): string {
    return this.name;
  }
}
