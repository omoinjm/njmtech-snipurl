
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model lu_short_url
 * 
 */
export type lu_short_url = $Result.DefaultSelection<Prisma.$lu_short_urlPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Lu_short_urls
 * const lu_short_urls = await prisma.lu_short_url.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Lu_short_urls
   * const lu_short_urls = await prisma.lu_short_url.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.lu_short_url`: Exposes CRUD operations for the **lu_short_url** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lu_short_urls
    * const lu_short_urls = await prisma.lu_short_url.findMany()
    * ```
    */
  get lu_short_url(): Prisma.lu_short_urlDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    lu_short_url: 'lu_short_url'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "lu_short_url"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      lu_short_url: {
        payload: Prisma.$lu_short_urlPayload<ExtArgs>
        fields: Prisma.lu_short_urlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lu_short_urlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lu_short_urlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lu_short_urlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lu_short_urlPayload>
          }
          findFirst: {
            args: Prisma.lu_short_urlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lu_short_urlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lu_short_urlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lu_short_urlPayload>
          }
          findMany: {
            args: Prisma.lu_short_urlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lu_short_urlPayload>[]
          }
          create: {
            args: Prisma.lu_short_urlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lu_short_urlPayload>
          }
          createMany: {
            args: Prisma.lu_short_urlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.lu_short_urlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lu_short_urlPayload>[]
          }
          delete: {
            args: Prisma.lu_short_urlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lu_short_urlPayload>
          }
          update: {
            args: Prisma.lu_short_urlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lu_short_urlPayload>
          }
          deleteMany: {
            args: Prisma.lu_short_urlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lu_short_urlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.lu_short_urlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lu_short_urlPayload>[]
          }
          upsert: {
            args: Prisma.lu_short_urlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lu_short_urlPayload>
          }
          aggregate: {
            args: Prisma.Lu_short_urlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLu_short_url>
          }
          groupBy: {
            args: Prisma.lu_short_urlGroupByArgs<ExtArgs>
            result: $Utils.Optional<Lu_short_urlGroupByOutputType>[]
          }
          count: {
            args: Prisma.lu_short_urlCountArgs<ExtArgs>
            result: $Utils.Optional<Lu_short_urlCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    lu_short_url?: lu_short_urlOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model lu_short_url
   */

  export type AggregateLu_short_url = {
    _count: Lu_short_urlCountAggregateOutputType | null
    _avg: Lu_short_urlAvgAggregateOutputType | null
    _sum: Lu_short_urlSumAggregateOutputType | null
    _min: Lu_short_urlMinAggregateOutputType | null
    _max: Lu_short_urlMaxAggregateOutputType | null
  }

  export type Lu_short_urlAvgAggregateOutputType = {
    clicks: number | null
  }

  export type Lu_short_urlSumAggregateOutputType = {
    clicks: number | null
  }

  export type Lu_short_urlMinAggregateOutputType = {
    id: string | null
    original: string | null
    slug: string | null
    created_at: Date | null
    clicks: number | null
  }

  export type Lu_short_urlMaxAggregateOutputType = {
    id: string | null
    original: string | null
    slug: string | null
    created_at: Date | null
    clicks: number | null
  }

  export type Lu_short_urlCountAggregateOutputType = {
    id: number
    original: number
    slug: number
    created_at: number
    clicks: number
    _all: number
  }


  export type Lu_short_urlAvgAggregateInputType = {
    clicks?: true
  }

  export type Lu_short_urlSumAggregateInputType = {
    clicks?: true
  }

  export type Lu_short_urlMinAggregateInputType = {
    id?: true
    original?: true
    slug?: true
    created_at?: true
    clicks?: true
  }

  export type Lu_short_urlMaxAggregateInputType = {
    id?: true
    original?: true
    slug?: true
    created_at?: true
    clicks?: true
  }

  export type Lu_short_urlCountAggregateInputType = {
    id?: true
    original?: true
    slug?: true
    created_at?: true
    clicks?: true
    _all?: true
  }

  export type Lu_short_urlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lu_short_url to aggregate.
     */
    where?: lu_short_urlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lu_short_urls to fetch.
     */
    orderBy?: lu_short_urlOrderByWithRelationInput | lu_short_urlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lu_short_urlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lu_short_urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lu_short_urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lu_short_urls
    **/
    _count?: true | Lu_short_urlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Lu_short_urlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Lu_short_urlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lu_short_urlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lu_short_urlMaxAggregateInputType
  }

  export type GetLu_short_urlAggregateType<T extends Lu_short_urlAggregateArgs> = {
        [P in keyof T & keyof AggregateLu_short_url]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLu_short_url[P]>
      : GetScalarType<T[P], AggregateLu_short_url[P]>
  }




  export type lu_short_urlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lu_short_urlWhereInput
    orderBy?: lu_short_urlOrderByWithAggregationInput | lu_short_urlOrderByWithAggregationInput[]
    by: Lu_short_urlScalarFieldEnum[] | Lu_short_urlScalarFieldEnum
    having?: lu_short_urlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lu_short_urlCountAggregateInputType | true
    _avg?: Lu_short_urlAvgAggregateInputType
    _sum?: Lu_short_urlSumAggregateInputType
    _min?: Lu_short_urlMinAggregateInputType
    _max?: Lu_short_urlMaxAggregateInputType
  }

  export type Lu_short_urlGroupByOutputType = {
    id: string
    original: string
    slug: string
    created_at: Date
    clicks: number
    _count: Lu_short_urlCountAggregateOutputType | null
    _avg: Lu_short_urlAvgAggregateOutputType | null
    _sum: Lu_short_urlSumAggregateOutputType | null
    _min: Lu_short_urlMinAggregateOutputType | null
    _max: Lu_short_urlMaxAggregateOutputType | null
  }

  type GetLu_short_urlGroupByPayload<T extends lu_short_urlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lu_short_urlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lu_short_urlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lu_short_urlGroupByOutputType[P]>
            : GetScalarType<T[P], Lu_short_urlGroupByOutputType[P]>
        }
      >
    >


  export type lu_short_urlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    original?: boolean
    slug?: boolean
    created_at?: boolean
    clicks?: boolean
  }, ExtArgs["result"]["lu_short_url"]>

  export type lu_short_urlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    original?: boolean
    slug?: boolean
    created_at?: boolean
    clicks?: boolean
  }, ExtArgs["result"]["lu_short_url"]>

  export type lu_short_urlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    original?: boolean
    slug?: boolean
    created_at?: boolean
    clicks?: boolean
  }, ExtArgs["result"]["lu_short_url"]>

  export type lu_short_urlSelectScalar = {
    id?: boolean
    original?: boolean
    slug?: boolean
    created_at?: boolean
    clicks?: boolean
  }

  export type lu_short_urlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "original" | "slug" | "created_at" | "clicks", ExtArgs["result"]["lu_short_url"]>

  export type $lu_short_urlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lu_short_url"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      original: string
      slug: string
      created_at: Date
      clicks: number
    }, ExtArgs["result"]["lu_short_url"]>
    composites: {}
  }

  type lu_short_urlGetPayload<S extends boolean | null | undefined | lu_short_urlDefaultArgs> = $Result.GetResult<Prisma.$lu_short_urlPayload, S>

  type lu_short_urlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lu_short_urlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Lu_short_urlCountAggregateInputType | true
    }

  export interface lu_short_urlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lu_short_url'], meta: { name: 'lu_short_url' } }
    /**
     * Find zero or one Lu_short_url that matches the filter.
     * @param {lu_short_urlFindUniqueArgs} args - Arguments to find a Lu_short_url
     * @example
     * // Get one Lu_short_url
     * const lu_short_url = await prisma.lu_short_url.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lu_short_urlFindUniqueArgs>(args: SelectSubset<T, lu_short_urlFindUniqueArgs<ExtArgs>>): Prisma__lu_short_urlClient<$Result.GetResult<Prisma.$lu_short_urlPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lu_short_url that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lu_short_urlFindUniqueOrThrowArgs} args - Arguments to find a Lu_short_url
     * @example
     * // Get one Lu_short_url
     * const lu_short_url = await prisma.lu_short_url.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lu_short_urlFindUniqueOrThrowArgs>(args: SelectSubset<T, lu_short_urlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lu_short_urlClient<$Result.GetResult<Prisma.$lu_short_urlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lu_short_url that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lu_short_urlFindFirstArgs} args - Arguments to find a Lu_short_url
     * @example
     * // Get one Lu_short_url
     * const lu_short_url = await prisma.lu_short_url.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lu_short_urlFindFirstArgs>(args?: SelectSubset<T, lu_short_urlFindFirstArgs<ExtArgs>>): Prisma__lu_short_urlClient<$Result.GetResult<Prisma.$lu_short_urlPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lu_short_url that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lu_short_urlFindFirstOrThrowArgs} args - Arguments to find a Lu_short_url
     * @example
     * // Get one Lu_short_url
     * const lu_short_url = await prisma.lu_short_url.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lu_short_urlFindFirstOrThrowArgs>(args?: SelectSubset<T, lu_short_urlFindFirstOrThrowArgs<ExtArgs>>): Prisma__lu_short_urlClient<$Result.GetResult<Prisma.$lu_short_urlPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lu_short_urls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lu_short_urlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lu_short_urls
     * const lu_short_urls = await prisma.lu_short_url.findMany()
     * 
     * // Get first 10 Lu_short_urls
     * const lu_short_urls = await prisma.lu_short_url.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lu_short_urlWithIdOnly = await prisma.lu_short_url.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lu_short_urlFindManyArgs>(args?: SelectSubset<T, lu_short_urlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lu_short_urlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lu_short_url.
     * @param {lu_short_urlCreateArgs} args - Arguments to create a Lu_short_url.
     * @example
     * // Create one Lu_short_url
     * const Lu_short_url = await prisma.lu_short_url.create({
     *   data: {
     *     // ... data to create a Lu_short_url
     *   }
     * })
     * 
     */
    create<T extends lu_short_urlCreateArgs>(args: SelectSubset<T, lu_short_urlCreateArgs<ExtArgs>>): Prisma__lu_short_urlClient<$Result.GetResult<Prisma.$lu_short_urlPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lu_short_urls.
     * @param {lu_short_urlCreateManyArgs} args - Arguments to create many Lu_short_urls.
     * @example
     * // Create many Lu_short_urls
     * const lu_short_url = await prisma.lu_short_url.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lu_short_urlCreateManyArgs>(args?: SelectSubset<T, lu_short_urlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lu_short_urls and returns the data saved in the database.
     * @param {lu_short_urlCreateManyAndReturnArgs} args - Arguments to create many Lu_short_urls.
     * @example
     * // Create many Lu_short_urls
     * const lu_short_url = await prisma.lu_short_url.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lu_short_urls and only return the `id`
     * const lu_short_urlWithIdOnly = await prisma.lu_short_url.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends lu_short_urlCreateManyAndReturnArgs>(args?: SelectSubset<T, lu_short_urlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lu_short_urlPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lu_short_url.
     * @param {lu_short_urlDeleteArgs} args - Arguments to delete one Lu_short_url.
     * @example
     * // Delete one Lu_short_url
     * const Lu_short_url = await prisma.lu_short_url.delete({
     *   where: {
     *     // ... filter to delete one Lu_short_url
     *   }
     * })
     * 
     */
    delete<T extends lu_short_urlDeleteArgs>(args: SelectSubset<T, lu_short_urlDeleteArgs<ExtArgs>>): Prisma__lu_short_urlClient<$Result.GetResult<Prisma.$lu_short_urlPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lu_short_url.
     * @param {lu_short_urlUpdateArgs} args - Arguments to update one Lu_short_url.
     * @example
     * // Update one Lu_short_url
     * const lu_short_url = await prisma.lu_short_url.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lu_short_urlUpdateArgs>(args: SelectSubset<T, lu_short_urlUpdateArgs<ExtArgs>>): Prisma__lu_short_urlClient<$Result.GetResult<Prisma.$lu_short_urlPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lu_short_urls.
     * @param {lu_short_urlDeleteManyArgs} args - Arguments to filter Lu_short_urls to delete.
     * @example
     * // Delete a few Lu_short_urls
     * const { count } = await prisma.lu_short_url.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lu_short_urlDeleteManyArgs>(args?: SelectSubset<T, lu_short_urlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lu_short_urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lu_short_urlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lu_short_urls
     * const lu_short_url = await prisma.lu_short_url.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lu_short_urlUpdateManyArgs>(args: SelectSubset<T, lu_short_urlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lu_short_urls and returns the data updated in the database.
     * @param {lu_short_urlUpdateManyAndReturnArgs} args - Arguments to update many Lu_short_urls.
     * @example
     * // Update many Lu_short_urls
     * const lu_short_url = await prisma.lu_short_url.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lu_short_urls and only return the `id`
     * const lu_short_urlWithIdOnly = await prisma.lu_short_url.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends lu_short_urlUpdateManyAndReturnArgs>(args: SelectSubset<T, lu_short_urlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lu_short_urlPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lu_short_url.
     * @param {lu_short_urlUpsertArgs} args - Arguments to update or create a Lu_short_url.
     * @example
     * // Update or create a Lu_short_url
     * const lu_short_url = await prisma.lu_short_url.upsert({
     *   create: {
     *     // ... data to create a Lu_short_url
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lu_short_url we want to update
     *   }
     * })
     */
    upsert<T extends lu_short_urlUpsertArgs>(args: SelectSubset<T, lu_short_urlUpsertArgs<ExtArgs>>): Prisma__lu_short_urlClient<$Result.GetResult<Prisma.$lu_short_urlPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lu_short_urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lu_short_urlCountArgs} args - Arguments to filter Lu_short_urls to count.
     * @example
     * // Count the number of Lu_short_urls
     * const count = await prisma.lu_short_url.count({
     *   where: {
     *     // ... the filter for the Lu_short_urls we want to count
     *   }
     * })
    **/
    count<T extends lu_short_urlCountArgs>(
      args?: Subset<T, lu_short_urlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lu_short_urlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lu_short_url.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lu_short_urlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Lu_short_urlAggregateArgs>(args: Subset<T, Lu_short_urlAggregateArgs>): Prisma.PrismaPromise<GetLu_short_urlAggregateType<T>>

    /**
     * Group by Lu_short_url.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lu_short_urlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends lu_short_urlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lu_short_urlGroupByArgs['orderBy'] }
        : { orderBy?: lu_short_urlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, lu_short_urlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLu_short_urlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lu_short_url model
   */
  readonly fields: lu_short_urlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lu_short_url.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lu_short_urlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the lu_short_url model
   */
  interface lu_short_urlFieldRefs {
    readonly id: FieldRef<"lu_short_url", 'String'>
    readonly original: FieldRef<"lu_short_url", 'String'>
    readonly slug: FieldRef<"lu_short_url", 'String'>
    readonly created_at: FieldRef<"lu_short_url", 'DateTime'>
    readonly clicks: FieldRef<"lu_short_url", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * lu_short_url findUnique
   */
  export type lu_short_urlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lu_short_url
     */
    select?: lu_short_urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lu_short_url
     */
    omit?: lu_short_urlOmit<ExtArgs> | null
    /**
     * Filter, which lu_short_url to fetch.
     */
    where: lu_short_urlWhereUniqueInput
  }

  /**
   * lu_short_url findUniqueOrThrow
   */
  export type lu_short_urlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lu_short_url
     */
    select?: lu_short_urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lu_short_url
     */
    omit?: lu_short_urlOmit<ExtArgs> | null
    /**
     * Filter, which lu_short_url to fetch.
     */
    where: lu_short_urlWhereUniqueInput
  }

  /**
   * lu_short_url findFirst
   */
  export type lu_short_urlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lu_short_url
     */
    select?: lu_short_urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lu_short_url
     */
    omit?: lu_short_urlOmit<ExtArgs> | null
    /**
     * Filter, which lu_short_url to fetch.
     */
    where?: lu_short_urlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lu_short_urls to fetch.
     */
    orderBy?: lu_short_urlOrderByWithRelationInput | lu_short_urlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lu_short_urls.
     */
    cursor?: lu_short_urlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lu_short_urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lu_short_urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lu_short_urls.
     */
    distinct?: Lu_short_urlScalarFieldEnum | Lu_short_urlScalarFieldEnum[]
  }

  /**
   * lu_short_url findFirstOrThrow
   */
  export type lu_short_urlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lu_short_url
     */
    select?: lu_short_urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lu_short_url
     */
    omit?: lu_short_urlOmit<ExtArgs> | null
    /**
     * Filter, which lu_short_url to fetch.
     */
    where?: lu_short_urlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lu_short_urls to fetch.
     */
    orderBy?: lu_short_urlOrderByWithRelationInput | lu_short_urlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lu_short_urls.
     */
    cursor?: lu_short_urlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lu_short_urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lu_short_urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lu_short_urls.
     */
    distinct?: Lu_short_urlScalarFieldEnum | Lu_short_urlScalarFieldEnum[]
  }

  /**
   * lu_short_url findMany
   */
  export type lu_short_urlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lu_short_url
     */
    select?: lu_short_urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lu_short_url
     */
    omit?: lu_short_urlOmit<ExtArgs> | null
    /**
     * Filter, which lu_short_urls to fetch.
     */
    where?: lu_short_urlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lu_short_urls to fetch.
     */
    orderBy?: lu_short_urlOrderByWithRelationInput | lu_short_urlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lu_short_urls.
     */
    cursor?: lu_short_urlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lu_short_urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lu_short_urls.
     */
    skip?: number
    distinct?: Lu_short_urlScalarFieldEnum | Lu_short_urlScalarFieldEnum[]
  }

  /**
   * lu_short_url create
   */
  export type lu_short_urlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lu_short_url
     */
    select?: lu_short_urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lu_short_url
     */
    omit?: lu_short_urlOmit<ExtArgs> | null
    /**
     * The data needed to create a lu_short_url.
     */
    data: XOR<lu_short_urlCreateInput, lu_short_urlUncheckedCreateInput>
  }

  /**
   * lu_short_url createMany
   */
  export type lu_short_urlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lu_short_urls.
     */
    data: lu_short_urlCreateManyInput | lu_short_urlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lu_short_url createManyAndReturn
   */
  export type lu_short_urlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lu_short_url
     */
    select?: lu_short_urlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lu_short_url
     */
    omit?: lu_short_urlOmit<ExtArgs> | null
    /**
     * The data used to create many lu_short_urls.
     */
    data: lu_short_urlCreateManyInput | lu_short_urlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lu_short_url update
   */
  export type lu_short_urlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lu_short_url
     */
    select?: lu_short_urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lu_short_url
     */
    omit?: lu_short_urlOmit<ExtArgs> | null
    /**
     * The data needed to update a lu_short_url.
     */
    data: XOR<lu_short_urlUpdateInput, lu_short_urlUncheckedUpdateInput>
    /**
     * Choose, which lu_short_url to update.
     */
    where: lu_short_urlWhereUniqueInput
  }

  /**
   * lu_short_url updateMany
   */
  export type lu_short_urlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lu_short_urls.
     */
    data: XOR<lu_short_urlUpdateManyMutationInput, lu_short_urlUncheckedUpdateManyInput>
    /**
     * Filter which lu_short_urls to update
     */
    where?: lu_short_urlWhereInput
    /**
     * Limit how many lu_short_urls to update.
     */
    limit?: number
  }

  /**
   * lu_short_url updateManyAndReturn
   */
  export type lu_short_urlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lu_short_url
     */
    select?: lu_short_urlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lu_short_url
     */
    omit?: lu_short_urlOmit<ExtArgs> | null
    /**
     * The data used to update lu_short_urls.
     */
    data: XOR<lu_short_urlUpdateManyMutationInput, lu_short_urlUncheckedUpdateManyInput>
    /**
     * Filter which lu_short_urls to update
     */
    where?: lu_short_urlWhereInput
    /**
     * Limit how many lu_short_urls to update.
     */
    limit?: number
  }

  /**
   * lu_short_url upsert
   */
  export type lu_short_urlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lu_short_url
     */
    select?: lu_short_urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lu_short_url
     */
    omit?: lu_short_urlOmit<ExtArgs> | null
    /**
     * The filter to search for the lu_short_url to update in case it exists.
     */
    where: lu_short_urlWhereUniqueInput
    /**
     * In case the lu_short_url found by the `where` argument doesn't exist, create a new lu_short_url with this data.
     */
    create: XOR<lu_short_urlCreateInput, lu_short_urlUncheckedCreateInput>
    /**
     * In case the lu_short_url was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lu_short_urlUpdateInput, lu_short_urlUncheckedUpdateInput>
  }

  /**
   * lu_short_url delete
   */
  export type lu_short_urlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lu_short_url
     */
    select?: lu_short_urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lu_short_url
     */
    omit?: lu_short_urlOmit<ExtArgs> | null
    /**
     * Filter which lu_short_url to delete.
     */
    where: lu_short_urlWhereUniqueInput
  }

  /**
   * lu_short_url deleteMany
   */
  export type lu_short_urlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lu_short_urls to delete
     */
    where?: lu_short_urlWhereInput
    /**
     * Limit how many lu_short_urls to delete.
     */
    limit?: number
  }

  /**
   * lu_short_url without action
   */
  export type lu_short_urlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lu_short_url
     */
    select?: lu_short_urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lu_short_url
     */
    omit?: lu_short_urlOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Lu_short_urlScalarFieldEnum: {
    id: 'id',
    original: 'original',
    slug: 'slug',
    created_at: 'created_at',
    clicks: 'clicks'
  };

  export type Lu_short_urlScalarFieldEnum = (typeof Lu_short_urlScalarFieldEnum)[keyof typeof Lu_short_urlScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type lu_short_urlWhereInput = {
    AND?: lu_short_urlWhereInput | lu_short_urlWhereInput[]
    OR?: lu_short_urlWhereInput[]
    NOT?: lu_short_urlWhereInput | lu_short_urlWhereInput[]
    id?: StringFilter<"lu_short_url"> | string
    original?: StringFilter<"lu_short_url"> | string
    slug?: StringFilter<"lu_short_url"> | string
    created_at?: DateTimeFilter<"lu_short_url"> | Date | string
    clicks?: IntFilter<"lu_short_url"> | number
  }

  export type lu_short_urlOrderByWithRelationInput = {
    id?: SortOrder
    original?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    clicks?: SortOrder
  }

  export type lu_short_urlWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: lu_short_urlWhereInput | lu_short_urlWhereInput[]
    OR?: lu_short_urlWhereInput[]
    NOT?: lu_short_urlWhereInput | lu_short_urlWhereInput[]
    original?: StringFilter<"lu_short_url"> | string
    created_at?: DateTimeFilter<"lu_short_url"> | Date | string
    clicks?: IntFilter<"lu_short_url"> | number
  }, "id" | "slug">

  export type lu_short_urlOrderByWithAggregationInput = {
    id?: SortOrder
    original?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    clicks?: SortOrder
    _count?: lu_short_urlCountOrderByAggregateInput
    _avg?: lu_short_urlAvgOrderByAggregateInput
    _max?: lu_short_urlMaxOrderByAggregateInput
    _min?: lu_short_urlMinOrderByAggregateInput
    _sum?: lu_short_urlSumOrderByAggregateInput
  }

  export type lu_short_urlScalarWhereWithAggregatesInput = {
    AND?: lu_short_urlScalarWhereWithAggregatesInput | lu_short_urlScalarWhereWithAggregatesInput[]
    OR?: lu_short_urlScalarWhereWithAggregatesInput[]
    NOT?: lu_short_urlScalarWhereWithAggregatesInput | lu_short_urlScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"lu_short_url"> | string
    original?: StringWithAggregatesFilter<"lu_short_url"> | string
    slug?: StringWithAggregatesFilter<"lu_short_url"> | string
    created_at?: DateTimeWithAggregatesFilter<"lu_short_url"> | Date | string
    clicks?: IntWithAggregatesFilter<"lu_short_url"> | number
  }

  export type lu_short_urlCreateInput = {
    id?: string
    original: string
    slug: string
    created_at?: Date | string
    clicks?: number
  }

  export type lu_short_urlUncheckedCreateInput = {
    id?: string
    original: string
    slug: string
    created_at?: Date | string
    clicks?: number
  }

  export type lu_short_urlUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    original?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clicks?: IntFieldUpdateOperationsInput | number
  }

  export type lu_short_urlUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    original?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clicks?: IntFieldUpdateOperationsInput | number
  }

  export type lu_short_urlCreateManyInput = {
    id?: string
    original: string
    slug: string
    created_at?: Date | string
    clicks?: number
  }

  export type lu_short_urlUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    original?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clicks?: IntFieldUpdateOperationsInput | number
  }

  export type lu_short_urlUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    original?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clicks?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type lu_short_urlCountOrderByAggregateInput = {
    id?: SortOrder
    original?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    clicks?: SortOrder
  }

  export type lu_short_urlAvgOrderByAggregateInput = {
    clicks?: SortOrder
  }

  export type lu_short_urlMaxOrderByAggregateInput = {
    id?: SortOrder
    original?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    clicks?: SortOrder
  }

  export type lu_short_urlMinOrderByAggregateInput = {
    id?: SortOrder
    original?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    clicks?: SortOrder
  }

  export type lu_short_urlSumOrderByAggregateInput = {
    clicks?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}