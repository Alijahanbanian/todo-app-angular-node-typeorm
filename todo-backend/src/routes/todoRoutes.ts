import { FastifyInstance } from "fastify";
import { AppDataSource } from "../data-source";
import { Todo } from "../entity/Todo";

export async function todoRoutes(server: FastifyInstance) {
  const repo = AppDataSource.getRepository(Todo);

  server.get("/todos", async () => {
    return repo.find();
  });

  server.post("/todos", async (req, reply) => {
    const todo = repo.create(req.body as Partial<Todo>);
    const result = await repo.save(todo);
    reply.code(201).send(result);
  });

  server.put("/todos/:id", async (req, reply) => {
    console.log("data: ", req)
    const id = Number(req.params['id']);
    console.log("id: ", req.params['id'])
    const data = req.body as Partial<Todo>;
    await repo.update(id, data);
    reply.send(await repo.findOneBy({ id }));
  });

  server.delete("/todos/:id", async (req, reply) => {
    const id = Number(req.params['id']);
    await repo.delete(id);
    reply.code(204).send();
  });
}
