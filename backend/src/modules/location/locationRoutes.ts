import { FastifyInstance } from "fastify";
import {
  registerLocationHandler,
  findVehiculesAtLocations,
} from "./locationController";

async function locationRoutes(server: FastifyInstance) {
  server.post(
    "/find",
    {
      schema: {
        body: {
          type: "object",
          properties: {
            coordinates: { type: "array" },
          },
        },
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
            vehiculeIds: { type: "array" },
          },
        },
      },
    },
    registerLocationHandler
  );
}

export default locationRoutes;
