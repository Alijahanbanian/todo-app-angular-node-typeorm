import "reflect-metadata";
import { DataSource } from "typeorm";
import { Todo } from "./entity/Todo";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "todo.sqlite",
  synchronize: true,
  logging: false,
  entities: [Todo],
});
