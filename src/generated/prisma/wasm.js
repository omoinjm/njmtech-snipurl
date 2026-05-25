
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.Lu_short_urlScalarFieldEnum = {
  id: 'id',
  original: 'original',
  slug: 'slug',
  created_at: 'created_at',
  clicks: 'clicks'
};

exports.Prisma.Au_visitorScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Ma_visitor_mapScalarFieldEnum = {
  id: 'id',
  visitor_id: 'visitor_id',
  short_url_id: 'short_url_id',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};


exports.Prisma.ModelName = {
  lu_short_url: 'lu_short_url',
  au_visitor: 'au_visitor',
  ma_visitor_map: 'ma_visitor_map'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/omoinjm/Documents/dev/github/projects/njmtech-snipurl/src/generated/prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "/home/omoinjm/Documents/dev/github/projects/njmtech-snipurl/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlite",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": null,
        "value": "file:./dev.db"
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../src/generated/prisma\"\n  previewFeatures = [\"driverAdapters\"]\n}\n\ndatasource db {\n  provider = \"sqlite\"\n  url      = \"file:./dev.db\"\n}\n\nmodel lu_short_url {\n  id           String           @id @default(cuid())\n  original     String\n  slug         String           @unique\n  created_at   DateTime         @default(now())\n  clicks       Int              @default(0)\n  visitor_maps ma_visitor_map[]\n}\n\nmodel au_visitor {\n  id         String           @id\n  created_at DateTime         @default(now())\n  updated_at DateTime         @updatedAt\n  short_urls ma_visitor_map[]\n}\n\nmodel ma_visitor_map {\n  id           String       @id @default(cuid())\n  visitor_id   String\n  short_url_id String\n  created_at   DateTime     @default(now())\n  short_url    lu_short_url @relation(fields: [short_url_id], references: [id], onDelete: Cascade)\n  visitor      au_visitor   @relation(fields: [visitor_id], references: [id], onDelete: Cascade)\n\n  @@unique([visitor_id, short_url_id])\n  @@index([visitor_id, created_at])\n  @@index([short_url_id])\n}\n",
  "inlineSchemaHash": "4b851a863051f153d36c8958e924e00cbf9e384fbeb5b5e8ecb948a53d024909",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"lu_short_url\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"original\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"clicks\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"visitor_maps\",\"kind\":\"object\",\"type\":\"ma_visitor_map\",\"relationName\":\"lu_short_urlToma_visitor_map\"}],\"dbName\":null},\"au_visitor\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"short_urls\",\"kind\":\"object\",\"type\":\"ma_visitor_map\",\"relationName\":\"au_visitorToma_visitor_map\"}],\"dbName\":null},\"ma_visitor_map\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"visitor_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"short_url_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"short_url\",\"kind\":\"object\",\"type\":\"lu_short_url\",\"relationName\":\"lu_short_urlToma_visitor_map\"},{\"name\":\"visitor\",\"kind\":\"object\",\"type\":\"au_visitor\",\"relationName\":\"au_visitorToma_visitor_map\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: async () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine
  }
}
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {}
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

