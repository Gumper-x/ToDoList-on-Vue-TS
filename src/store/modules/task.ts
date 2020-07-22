import { VuexModule, Module, Mutation } from "vuex-module-decorators";
import { taskModule } from "../typings/task";

@Module({ name: "Task" })
export default class Task extends VuexModule {
  private tasks: taskModule[] = [];
  @Mutation
  public addTask(newTask: string): void {
    if (this.tasks.length > 0) {
      this.tasks.push({ id: this.tasks[this.tasks.length - 1].id + 1, title: newTask });
    } else {
      this.tasks.push({ id: 1, title: newTask });
    }
  }
  @Mutation
  public removeTask(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
  public get getTasks(): taskModule[] {
    return this.tasks;
  }
}
