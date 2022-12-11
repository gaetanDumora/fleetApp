# Fleet App

Manage your fleet to never lost vehicules

## Usage

### Serving the app

```sh
$ npm start
```

this will install dependencies, compile the TypeScript code in ./build folder and start a web server

### Running the tests

```sh
$ npm test
```

## API

### Create a fleet

```sh
$ curl -d '{"id":"YOUR_FLEET_ID"}' -H "Content-Type: application/json" -X POST http://localhost:3000/fleet
```

### Register vehicules to a fleet

```sh
$ curl -d '{"fleet":"YOUR_FLEET_ID", "vehiculeIds":[...YOUR_VHL_IDS]}' -H "Content-Type: application/json" -X POST http://localhost:3000/register-vehicules

```

### Park vehicules

```sh
$ curl -d '{"fleet":"YOUR_FLEET_ID", "vehiculeIds":[...YOUR_VHL_IDS]}' -H "Content-Type: application/json" -X POST http://localhost:3000/park-vehicules

```

### Find parked vehicules

```sh
$ curl -d '{"coordinates":[ [LAT, LONG], [LAT, LONG]...]}' -H "Content-Type: application/json" -X POST http://localhost:3000/find

```
