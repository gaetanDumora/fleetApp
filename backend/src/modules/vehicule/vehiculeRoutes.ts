import { FastifyInstance } from "fastify";
import { registerVehiculeHandler } from "./vehiculeController";

async function vehiculeRoutes(server: FastifyInstance) {
  server.post(
    "/register-vehicules",
    {
      schema: {
        body: {
          type: "object",
          properties: {
            fleet: { type: "number" },
            vehiculeIds: { type: "array" },
          },
        },
      },
    },
    registerVehiculeHandler
  );
}

export default vehiculeRoutes;
