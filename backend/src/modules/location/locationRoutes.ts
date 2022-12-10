import { FastifyInstance } from "fastify";
import {
  registerLocationHandler,
  findVehiculesAtLocations,
} from "./locationController";

async function locationRoutes(server: FastifyInstance) {
  server.get(
    "/vehicules-at",
    {
      schema: {
        querystring: {},
      },
    },
    findVehiculesAtLocations
  );
  server.post(
    "/park-vehicules",
    {
      schema: {
        body: {
          type: "object",
          properties: {
            fleet: { type: "number" },
            vehiculeIds: { type: "string" },
          },
        },
      },
    },
    registerLocationHandler
  );
}

export default locationRoutes;
