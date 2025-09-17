import Fastify from "fastify";
import cors from "@fastify/cors";
import { AppDataSource } from "./data-source";
import { todoRoutes } from "./routes/todoRoutes";



const app = Fastify();
app.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
});

AppDataSource.initialize().then(() => {
  app.register(todoRoutes);

  app.listen({ port: 3000 }, () => {
    console.log("Server running on http://localhost:3000");
  });
});
