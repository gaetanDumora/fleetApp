# Fleet App

Manage your fleet to never lost vehicules.

## Usage

### Serving the app

```sh
$ npm start
```

This will install dependencies, compile the TypeScript code in ./build folder and start a web server.

### Running the tests

Start here if you want to understand what modules does.
Hope you like Star Wars.

Here

```sh
$ npm test
```

## API

I made the choice to use a web server witn endpoints, rather than cli interface.

### Create a fleet /fleet

Create a new fleet and attach to it the given ID.

```sh
$ curl -d '{"id":"YOUR_FLEET_ID"}' -H "Content-Type: application/json" -X POST http://localhost:3000/fleet
```

### Register vehicules to a fleet /register-vehicules

Once a fleet is created, we can register vehicules to it.
We can't register twice a vehicule in a fleet, but, a vehicule can belong to several fleets.

```sh
$ curl -d '{"fleet":"YOUR_FLEET_ID", "vehiculeIds":[...YOUR_VHL_IDS]}' -H "Content-Type: application/json" -X POST http://localhost:3000/register-vehicules

```

### Park vehicules /park-vehicules

Now we can park our new created vehicules.
When you want to park, just give your fleet ID and the vehicule IDs and the GPS will be in charge of tracking where you parked.

```sh
$ curl -d '{"fleet":"YOUR_FLEET_ID", "vehiculeIds":[...YOUR_VHL_IDS]}' -H "Content-Type: application/json" -X POST http://localhost:3000/park-vehicules

```

### Find parked vehicules /find

A vehicule ask us if he can park at coordinates X.
Query the /find endpoint with the given coordinates to see if the place is taken or not.

```sh
$ curl -d '{"coordinates":[ [LAT, LONG], [LAT, LONG]...]}' -H "Content-Type: application/json" -X POST http://localhost:3000/find

```
