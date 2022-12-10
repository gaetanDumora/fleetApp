import Fastify from "fastify";
import fleetRoutes from "./modules/fleet/fleetRoutes";
import locationRoutes from "./modules/location/locationRoutes";
import vehiculeRoutes from "./modules/vehicule/vehiculeRoutes";

const main = async () => {
  process.on("unhandledRejection", (err) => {
    console.error(err);
    process.exit(1);
  });

  const server = Fastify({
    logger: true,
  });

  for (const route of [fleetRoutes, vehiculeRoutes, locationRoutes]) {
    await server.register(route);
  }

  await server.listen({
    port: 3000,
    host: "127.0.0.1",
  });
};

main();
