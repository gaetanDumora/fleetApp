import { FastifyInstance } from "fastify";
import { registerVehiculeHandler } from "./vehiculeController";

async function vehiculeRoutes(server: FastifyInstance) {
  server.post(
    "/generate-vehicules",
    {
      schema: {
        body: {
          type: "object",
          properties: {
            fleet: { type: "number" },
            vehiculeIds: { type: "array", default: [] },
          },
        },
      },
    },
    registerVehiculeHandler
  );
}

export default vehiculeRoutes;
