
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
 * Model au_visitor
 * 
 */
export type au_visitor = $Result.DefaultSelection<Prisma.$au_visitorPayload>
/**
 * Model ma_visitor_map
 * 
 */
export type ma_visitor_map = $Result.DefaultSelection<Prisma.$ma_visitor_mapPayload>

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

  /**
   * `prisma.au_visitor`: Exposes CRUD operations for the **au_visitor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Au_visitors
    * const au_visitors = await prisma.au_visitor.findMany()
    * ```
    */
  get au_visitor(): Prisma.au_visitorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ma_visitor_map`: Exposes CRUD operations for the **ma_visitor_map** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ma_visitor_maps
    * const ma_visitor_maps = await prisma.ma_visitor_map.findMany()
    * ```
    */
  get ma_visitor_map(): Prisma.ma_visitor_mapDelegate<ExtArgs, ClientOptions>;
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
    lu_short_url: 'lu_short_url',
    au_visitor: 'au_visitor',
    ma_visitor_map: 'ma_visitor_map'
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
      modelProps: "lu_short_url" | "au_visitor" | "ma_visitor_map"
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
      au_visitor: {
        payload: Prisma.$au_visitorPayload<ExtArgs>
        fields: Prisma.au_visitorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.au_visitorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$au_visitorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.au_visitorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$au_visitorPayload>
          }
          findFirst: {
            args: Prisma.au_visitorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$au_visitorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.au_visitorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$au_visitorPayload>
          }
          findMany: {
            args: Prisma.au_visitorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$au_visitorPayload>[]
          }
          create: {
            args: Prisma.au_visitorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$au_visitorPayload>
          }
          createMany: {
            args: Prisma.au_visitorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.au_visitorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$au_visitorPayload>[]
          }
          delete: {
            args: Prisma.au_visitorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$au_visitorPayload>
          }
          update: {
            args: Prisma.au_visitorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$au_visitorPayload>
          }
          deleteMany: {
            args: Prisma.au_visitorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.au_visitorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.au_visitorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$au_visitorPayload>[]
          }
          upsert: {
            args: Prisma.au_visitorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$au_visitorPayload>
          }
          aggregate: {
            args: Prisma.Au_visitorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAu_visitor>
          }
          groupBy: {
            args: Prisma.au_visitorGroupByArgs<ExtArgs>
            result: $Utils.Optional<Au_visitorGroupByOutputType>[]
          }
          count: {
            args: Prisma.au_visitorCountArgs<ExtArgs>
            result: $Utils.Optional<Au_visitorCountAggregateOutputType> | number
          }
        }
      }
      ma_visitor_map: {
        payload: Prisma.$ma_visitor_mapPayload<ExtArgs>
        fields: Prisma.ma_visitor_mapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ma_visitor_mapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ma_visitor_mapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ma_visitor_mapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ma_visitor_mapPayload>
          }
          findFirst: {
            args: Prisma.ma_visitor_mapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ma_visitor_mapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ma_visitor_mapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ma_visitor_mapPayload>
          }
          findMany: {
            args: Prisma.ma_visitor_mapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ma_visitor_mapPayload>[]
          }
          create: {
            args: Prisma.ma_visitor_mapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ma_visitor_mapPayload>
          }
          createMany: {
            args: Prisma.ma_visitor_mapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ma_visitor_mapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ma_visitor_mapPayload>[]
          }
          delete: {
            args: Prisma.ma_visitor_mapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ma_visitor_mapPayload>
          }
          update: {
            args: Prisma.ma_visitor_mapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ma_visitor_mapPayload>
          }
          deleteMany: {
            args: Prisma.ma_visitor_mapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ma_visitor_mapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ma_visitor_mapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ma_visitor_mapPayload>[]
          }
          upsert: {
            args: Prisma.ma_visitor_mapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ma_visitor_mapPayload>
          }
          aggregate: {
            args: Prisma.Ma_visitor_mapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMa_visitor_map>
          }
          groupBy: {
            args: Prisma.ma_visitor_mapGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ma_visitor_mapGroupByOutputType>[]
          }
          count: {
            args: Prisma.ma_visitor_mapCountArgs<ExtArgs>
            result: $Utils.Optional<Ma_visitor_mapCountAggregateOutputType> | number
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
    au_visitor?: au_visitorOmit
    ma_visitor_map?: ma_visitor_mapOmit
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
   * Count Type Lu_short_urlCountOutputType
   */

  export type Lu_short_urlCountOutputType = {
    visitor_maps: number
  }

  export type Lu_short_urlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor_maps?: boolean | Lu_short_urlCountOutputTypeCountVisitor_mapsArgs
  }

  // Custom InputTypes
  /**
   * Lu_short_urlCountOutputType without action
   */
  export type Lu_short_urlCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lu_short_urlCountOutputType
     */
    select?: Lu_short_urlCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Lu_short_urlCountOutputType without action
   */
  export type Lu_short_urlCountOutputTypeCountVisitor_mapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ma_visitor_mapWhereInput
  }


  /**
   * Count Type Au_visitorCountOutputType
   */

  export type Au_visitorCountOutputType = {
    short_urls: number
  }

  export type Au_visitorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    short_urls?: boolean | Au_visitorCountOutputTypeCountShort_urlsArgs
  }

  // Custom InputTypes
  /**
   * Au_visitorCountOutputType without action
   */
  export type Au_visitorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Au_visitorCountOutputType
     */
    select?: Au_visitorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Au_visitorCountOutputType without action
   */
  export type Au_visitorCountOutputTypeCountShort_urlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ma_visitor_mapWhereInput
  }


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
    visitor_maps?: boolean | lu_short_url$visitor_mapsArgs<ExtArgs>
    _count?: boolean | Lu_short_urlCountOutputTypeDefaultArgs<ExtArgs>
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
  export type lu_short_urlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor_maps?: boolean | lu_short_url$visitor_mapsArgs<ExtArgs>
    _count?: boolean | Lu_short_urlCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type lu_short_urlIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type lu_short_urlIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $lu_short_urlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lu_short_url"
    objects: {
      visitor_maps: Prisma.$ma_visitor_mapPayload<ExtArgs>[]
    }
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
    visitor_maps<T extends lu_short_url$visitor_mapsArgs<ExtArgs> = {}>(args?: Subset<T, lu_short_url$visitor_mapsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ma_visitor_mapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
     * Choose, which related nodes to fetch as well
     */
    include?: lu_short_urlInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: lu_short_urlInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: lu_short_urlInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: lu_short_urlInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: lu_short_urlInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: lu_short_urlInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: lu_short_urlInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: lu_short_urlInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: lu_short_urlInclude<ExtArgs> | null
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
   * lu_short_url.visitor_maps
   */
  export type lu_short_url$visitor_mapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ma_visitor_map
     */
    select?: ma_visitor_mapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ma_visitor_map
     */
    omit?: ma_visitor_mapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ma_visitor_mapInclude<ExtArgs> | null
    where?: ma_visitor_mapWhereInput
    orderBy?: ma_visitor_mapOrderByWithRelationInput | ma_visitor_mapOrderByWithRelationInput[]
    cursor?: ma_visitor_mapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ma_visitor_mapScalarFieldEnum | Ma_visitor_mapScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lu_short_urlInclude<ExtArgs> | null
  }


  /**
   * Model au_visitor
   */

  export type AggregateAu_visitor = {
    _count: Au_visitorCountAggregateOutputType | null
    _min: Au_visitorMinAggregateOutputType | null
    _max: Au_visitorMaxAggregateOutputType | null
  }

  export type Au_visitorMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Au_visitorMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Au_visitorCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Au_visitorMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
  }

  export type Au_visitorMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
  }

  export type Au_visitorCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Au_visitorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which au_visitor to aggregate.
     */
    where?: au_visitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of au_visitors to fetch.
     */
    orderBy?: au_visitorOrderByWithRelationInput | au_visitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: au_visitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` au_visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` au_visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned au_visitors
    **/
    _count?: true | Au_visitorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Au_visitorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Au_visitorMaxAggregateInputType
  }

  export type GetAu_visitorAggregateType<T extends Au_visitorAggregateArgs> = {
        [P in keyof T & keyof AggregateAu_visitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAu_visitor[P]>
      : GetScalarType<T[P], AggregateAu_visitor[P]>
  }




  export type au_visitorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: au_visitorWhereInput
    orderBy?: au_visitorOrderByWithAggregationInput | au_visitorOrderByWithAggregationInput[]
    by: Au_visitorScalarFieldEnum[] | Au_visitorScalarFieldEnum
    having?: au_visitorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Au_visitorCountAggregateInputType | true
    _min?: Au_visitorMinAggregateInputType
    _max?: Au_visitorMaxAggregateInputType
  }

  export type Au_visitorGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    _count: Au_visitorCountAggregateOutputType | null
    _min: Au_visitorMinAggregateOutputType | null
    _max: Au_visitorMaxAggregateOutputType | null
  }

  type GetAu_visitorGroupByPayload<T extends au_visitorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Au_visitorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Au_visitorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Au_visitorGroupByOutputType[P]>
            : GetScalarType<T[P], Au_visitorGroupByOutputType[P]>
        }
      >
    >


  export type au_visitorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    short_urls?: boolean | au_visitor$short_urlsArgs<ExtArgs>
    _count?: boolean | Au_visitorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["au_visitor"]>

  export type au_visitorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["au_visitor"]>

  export type au_visitorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["au_visitor"]>

  export type au_visitorSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type au_visitorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "updated_at", ExtArgs["result"]["au_visitor"]>
  export type au_visitorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    short_urls?: boolean | au_visitor$short_urlsArgs<ExtArgs>
    _count?: boolean | Au_visitorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type au_visitorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type au_visitorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $au_visitorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "au_visitor"
    objects: {
      short_urls: Prisma.$ma_visitor_mapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["au_visitor"]>
    composites: {}
  }

  type au_visitorGetPayload<S extends boolean | null | undefined | au_visitorDefaultArgs> = $Result.GetResult<Prisma.$au_visitorPayload, S>

  type au_visitorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<au_visitorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Au_visitorCountAggregateInputType | true
    }

  export interface au_visitorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['au_visitor'], meta: { name: 'au_visitor' } }
    /**
     * Find zero or one Au_visitor that matches the filter.
     * @param {au_visitorFindUniqueArgs} args - Arguments to find a Au_visitor
     * @example
     * // Get one Au_visitor
     * const au_visitor = await prisma.au_visitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends au_visitorFindUniqueArgs>(args: SelectSubset<T, au_visitorFindUniqueArgs<ExtArgs>>): Prisma__au_visitorClient<$Result.GetResult<Prisma.$au_visitorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Au_visitor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {au_visitorFindUniqueOrThrowArgs} args - Arguments to find a Au_visitor
     * @example
     * // Get one Au_visitor
     * const au_visitor = await prisma.au_visitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends au_visitorFindUniqueOrThrowArgs>(args: SelectSubset<T, au_visitorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__au_visitorClient<$Result.GetResult<Prisma.$au_visitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Au_visitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {au_visitorFindFirstArgs} args - Arguments to find a Au_visitor
     * @example
     * // Get one Au_visitor
     * const au_visitor = await prisma.au_visitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends au_visitorFindFirstArgs>(args?: SelectSubset<T, au_visitorFindFirstArgs<ExtArgs>>): Prisma__au_visitorClient<$Result.GetResult<Prisma.$au_visitorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Au_visitor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {au_visitorFindFirstOrThrowArgs} args - Arguments to find a Au_visitor
     * @example
     * // Get one Au_visitor
     * const au_visitor = await prisma.au_visitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends au_visitorFindFirstOrThrowArgs>(args?: SelectSubset<T, au_visitorFindFirstOrThrowArgs<ExtArgs>>): Prisma__au_visitorClient<$Result.GetResult<Prisma.$au_visitorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Au_visitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {au_visitorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Au_visitors
     * const au_visitors = await prisma.au_visitor.findMany()
     * 
     * // Get first 10 Au_visitors
     * const au_visitors = await prisma.au_visitor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const au_visitorWithIdOnly = await prisma.au_visitor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends au_visitorFindManyArgs>(args?: SelectSubset<T, au_visitorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$au_visitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Au_visitor.
     * @param {au_visitorCreateArgs} args - Arguments to create a Au_visitor.
     * @example
     * // Create one Au_visitor
     * const Au_visitor = await prisma.au_visitor.create({
     *   data: {
     *     // ... data to create a Au_visitor
     *   }
     * })
     * 
     */
    create<T extends au_visitorCreateArgs>(args: SelectSubset<T, au_visitorCreateArgs<ExtArgs>>): Prisma__au_visitorClient<$Result.GetResult<Prisma.$au_visitorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Au_visitors.
     * @param {au_visitorCreateManyArgs} args - Arguments to create many Au_visitors.
     * @example
     * // Create many Au_visitors
     * const au_visitor = await prisma.au_visitor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends au_visitorCreateManyArgs>(args?: SelectSubset<T, au_visitorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Au_visitors and returns the data saved in the database.
     * @param {au_visitorCreateManyAndReturnArgs} args - Arguments to create many Au_visitors.
     * @example
     * // Create many Au_visitors
     * const au_visitor = await prisma.au_visitor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Au_visitors and only return the `id`
     * const au_visitorWithIdOnly = await prisma.au_visitor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends au_visitorCreateManyAndReturnArgs>(args?: SelectSubset<T, au_visitorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$au_visitorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Au_visitor.
     * @param {au_visitorDeleteArgs} args - Arguments to delete one Au_visitor.
     * @example
     * // Delete one Au_visitor
     * const Au_visitor = await prisma.au_visitor.delete({
     *   where: {
     *     // ... filter to delete one Au_visitor
     *   }
     * })
     * 
     */
    delete<T extends au_visitorDeleteArgs>(args: SelectSubset<T, au_visitorDeleteArgs<ExtArgs>>): Prisma__au_visitorClient<$Result.GetResult<Prisma.$au_visitorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Au_visitor.
     * @param {au_visitorUpdateArgs} args - Arguments to update one Au_visitor.
     * @example
     * // Update one Au_visitor
     * const au_visitor = await prisma.au_visitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends au_visitorUpdateArgs>(args: SelectSubset<T, au_visitorUpdateArgs<ExtArgs>>): Prisma__au_visitorClient<$Result.GetResult<Prisma.$au_visitorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Au_visitors.
     * @param {au_visitorDeleteManyArgs} args - Arguments to filter Au_visitors to delete.
     * @example
     * // Delete a few Au_visitors
     * const { count } = await prisma.au_visitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends au_visitorDeleteManyArgs>(args?: SelectSubset<T, au_visitorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Au_visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {au_visitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Au_visitors
     * const au_visitor = await prisma.au_visitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends au_visitorUpdateManyArgs>(args: SelectSubset<T, au_visitorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Au_visitors and returns the data updated in the database.
     * @param {au_visitorUpdateManyAndReturnArgs} args - Arguments to update many Au_visitors.
     * @example
     * // Update many Au_visitors
     * const au_visitor = await prisma.au_visitor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Au_visitors and only return the `id`
     * const au_visitorWithIdOnly = await prisma.au_visitor.updateManyAndReturn({
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
    updateManyAndReturn<T extends au_visitorUpdateManyAndReturnArgs>(args: SelectSubset<T, au_visitorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$au_visitorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Au_visitor.
     * @param {au_visitorUpsertArgs} args - Arguments to update or create a Au_visitor.
     * @example
     * // Update or create a Au_visitor
     * const au_visitor = await prisma.au_visitor.upsert({
     *   create: {
     *     // ... data to create a Au_visitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Au_visitor we want to update
     *   }
     * })
     */
    upsert<T extends au_visitorUpsertArgs>(args: SelectSubset<T, au_visitorUpsertArgs<ExtArgs>>): Prisma__au_visitorClient<$Result.GetResult<Prisma.$au_visitorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Au_visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {au_visitorCountArgs} args - Arguments to filter Au_visitors to count.
     * @example
     * // Count the number of Au_visitors
     * const count = await prisma.au_visitor.count({
     *   where: {
     *     // ... the filter for the Au_visitors we want to count
     *   }
     * })
    **/
    count<T extends au_visitorCountArgs>(
      args?: Subset<T, au_visitorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Au_visitorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Au_visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Au_visitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Au_visitorAggregateArgs>(args: Subset<T, Au_visitorAggregateArgs>): Prisma.PrismaPromise<GetAu_visitorAggregateType<T>>

    /**
     * Group by Au_visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {au_visitorGroupByArgs} args - Group by arguments.
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
      T extends au_visitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: au_visitorGroupByArgs['orderBy'] }
        : { orderBy?: au_visitorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, au_visitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAu_visitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the au_visitor model
   */
  readonly fields: au_visitorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for au_visitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__au_visitorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    short_urls<T extends au_visitor$short_urlsArgs<ExtArgs> = {}>(args?: Subset<T, au_visitor$short_urlsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ma_visitor_mapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the au_visitor model
   */
  interface au_visitorFieldRefs {
    readonly id: FieldRef<"au_visitor", 'String'>
    readonly created_at: FieldRef<"au_visitor", 'DateTime'>
    readonly updated_at: FieldRef<"au_visitor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * au_visitor findUnique
   */
  export type au_visitorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the au_visitor
     */
    select?: au_visitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the au_visitor
     */
    omit?: au_visitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: au_visitorInclude<ExtArgs> | null
    /**
     * Filter, which au_visitor to fetch.
     */
    where: au_visitorWhereUniqueInput
  }

  /**
   * au_visitor findUniqueOrThrow
   */
  export type au_visitorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the au_visitor
     */
    select?: au_visitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the au_visitor
     */
    omit?: au_visitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: au_visitorInclude<ExtArgs> | null
    /**
     * Filter, which au_visitor to fetch.
     */
    where: au_visitorWhereUniqueInput
  }

  /**
   * au_visitor findFirst
   */
  export type au_visitorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the au_visitor
     */
    select?: au_visitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the au_visitor
     */
    omit?: au_visitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: au_visitorInclude<ExtArgs> | null
    /**
     * Filter, which au_visitor to fetch.
     */
    where?: au_visitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of au_visitors to fetch.
     */
    orderBy?: au_visitorOrderByWithRelationInput | au_visitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for au_visitors.
     */
    cursor?: au_visitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` au_visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` au_visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of au_visitors.
     */
    distinct?: Au_visitorScalarFieldEnum | Au_visitorScalarFieldEnum[]
  }

  /**
   * au_visitor findFirstOrThrow
   */
  export type au_visitorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the au_visitor
     */
    select?: au_visitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the au_visitor
     */
    omit?: au_visitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: au_visitorInclude<ExtArgs> | null
    /**
     * Filter, which au_visitor to fetch.
     */
    where?: au_visitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of au_visitors to fetch.
     */
    orderBy?: au_visitorOrderByWithRelationInput | au_visitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for au_visitors.
     */
    cursor?: au_visitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` au_visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` au_visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of au_visitors.
     */
    distinct?: Au_visitorScalarFieldEnum | Au_visitorScalarFieldEnum[]
  }

  /**
   * au_visitor findMany
   */
  export type au_visitorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the au_visitor
     */
    select?: au_visitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the au_visitor
     */
    omit?: au_visitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: au_visitorInclude<ExtArgs> | null
    /**
     * Filter, which au_visitors to fetch.
     */
    where?: au_visitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of au_visitors to fetch.
     */
    orderBy?: au_visitorOrderByWithRelationInput | au_visitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing au_visitors.
     */
    cursor?: au_visitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` au_visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` au_visitors.
     */
    skip?: number
    distinct?: Au_visitorScalarFieldEnum | Au_visitorScalarFieldEnum[]
  }

  /**
   * au_visitor create
   */
  export type au_visitorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the au_visitor
     */
    select?: au_visitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the au_visitor
     */
    omit?: au_visitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: au_visitorInclude<ExtArgs> | null
    /**
     * The data needed to create a au_visitor.
     */
    data: XOR<au_visitorCreateInput, au_visitorUncheckedCreateInput>
  }

  /**
   * au_visitor createMany
   */
  export type au_visitorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many au_visitors.
     */
    data: au_visitorCreateManyInput | au_visitorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * au_visitor createManyAndReturn
   */
  export type au_visitorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the au_visitor
     */
    select?: au_visitorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the au_visitor
     */
    omit?: au_visitorOmit<ExtArgs> | null
    /**
     * The data used to create many au_visitors.
     */
    data: au_visitorCreateManyInput | au_visitorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * au_visitor update
   */
  export type au_visitorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the au_visitor
     */
    select?: au_visitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the au_visitor
     */
    omit?: au_visitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: au_visitorInclude<ExtArgs> | null
    /**
     * The data needed to update a au_visitor.
     */
    data: XOR<au_visitorUpdateInput, au_visitorUncheckedUpdateInput>
    /**
     * Choose, which au_visitor to update.
     */
    where: au_visitorWhereUniqueInput
  }

  /**
   * au_visitor updateMany
   */
  export type au_visitorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update au_visitors.
     */
    data: XOR<au_visitorUpdateManyMutationInput, au_visitorUncheckedUpdateManyInput>
    /**
     * Filter which au_visitors to update
     */
    where?: au_visitorWhereInput
    /**
     * Limit how many au_visitors to update.
     */
    limit?: number
  }

  /**
   * au_visitor updateManyAndReturn
   */
  export type au_visitorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the au_visitor
     */
    select?: au_visitorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the au_visitor
     */
    omit?: au_visitorOmit<ExtArgs> | null
    /**
     * The data used to update au_visitors.
     */
    data: XOR<au_visitorUpdateManyMutationInput, au_visitorUncheckedUpdateManyInput>
    /**
     * Filter which au_visitors to update
     */
    where?: au_visitorWhereInput
    /**
     * Limit how many au_visitors to update.
     */
    limit?: number
  }

  /**
   * au_visitor upsert
   */
  export type au_visitorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the au_visitor
     */
    select?: au_visitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the au_visitor
     */
    omit?: au_visitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: au_visitorInclude<ExtArgs> | null
    /**
     * The filter to search for the au_visitor to update in case it exists.
     */
    where: au_visitorWhereUniqueInput
    /**
     * In case the au_visitor found by the `where` argument doesn't exist, create a new au_visitor with this data.
     */
    create: XOR<au_visitorCreateInput, au_visitorUncheckedCreateInput>
    /**
     * In case the au_visitor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<au_visitorUpdateInput, au_visitorUncheckedUpdateInput>
  }

  /**
   * au_visitor delete
   */
  export type au_visitorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the au_visitor
     */
    select?: au_visitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the au_visitor
     */
    omit?: au_visitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: au_visitorInclude<ExtArgs> | null
    /**
     * Filter which au_visitor to delete.
     */
    where: au_visitorWhereUniqueInput
  }

  /**
   * au_visitor deleteMany
   */
  export type au_visitorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which au_visitors to delete
     */
    where?: au_visitorWhereInput
    /**
     * Limit how many au_visitors to delete.
     */
    limit?: number
  }

  /**
   * au_visitor.short_urls
   */
  export type au_visitor$short_urlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ma_visitor_map
     */
    select?: ma_visitor_mapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ma_visitor_map
     */
    omit?: ma_visitor_mapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ma_visitor_mapInclude<ExtArgs> | null
    where?: ma_visitor_mapWhereInput
    orderBy?: ma_visitor_mapOrderByWithRelationInput | ma_visitor_mapOrderByWithRelationInput[]
    cursor?: ma_visitor_mapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ma_visitor_mapScalarFieldEnum | Ma_visitor_mapScalarFieldEnum[]
  }

  /**
   * au_visitor without action
   */
  export type au_visitorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the au_visitor
     */
    select?: au_visitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the au_visitor
     */
    omit?: au_visitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: au_visitorInclude<ExtArgs> | null
  }


  /**
   * Model ma_visitor_map
   */

  export type AggregateMa_visitor_map = {
    _count: Ma_visitor_mapCountAggregateOutputType | null
    _min: Ma_visitor_mapMinAggregateOutputType | null
    _max: Ma_visitor_mapMaxAggregateOutputType | null
  }

  export type Ma_visitor_mapMinAggregateOutputType = {
    id: string | null
    visitor_id: string | null
    short_url_id: string | null
    created_at: Date | null
  }

  export type Ma_visitor_mapMaxAggregateOutputType = {
    id: string | null
    visitor_id: string | null
    short_url_id: string | null
    created_at: Date | null
  }

  export type Ma_visitor_mapCountAggregateOutputType = {
    id: number
    visitor_id: number
    short_url_id: number
    created_at: number
    _all: number
  }


  export type Ma_visitor_mapMinAggregateInputType = {
    id?: true
    visitor_id?: true
    short_url_id?: true
    created_at?: true
  }

  export type Ma_visitor_mapMaxAggregateInputType = {
    id?: true
    visitor_id?: true
    short_url_id?: true
    created_at?: true
  }

  export type Ma_visitor_mapCountAggregateInputType = {
    id?: true
    visitor_id?: true
    short_url_id?: true
    created_at?: true
    _all?: true
  }

  export type Ma_visitor_mapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ma_visitor_map to aggregate.
     */
    where?: ma_visitor_mapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ma_visitor_maps to fetch.
     */
    orderBy?: ma_visitor_mapOrderByWithRelationInput | ma_visitor_mapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ma_visitor_mapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ma_visitor_maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ma_visitor_maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ma_visitor_maps
    **/
    _count?: true | Ma_visitor_mapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ma_visitor_mapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ma_visitor_mapMaxAggregateInputType
  }

  export type GetMa_visitor_mapAggregateType<T extends Ma_visitor_mapAggregateArgs> = {
        [P in keyof T & keyof AggregateMa_visitor_map]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMa_visitor_map[P]>
      : GetScalarType<T[P], AggregateMa_visitor_map[P]>
  }




  export type ma_visitor_mapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ma_visitor_mapWhereInput
    orderBy?: ma_visitor_mapOrderByWithAggregationInput | ma_visitor_mapOrderByWithAggregationInput[]
    by: Ma_visitor_mapScalarFieldEnum[] | Ma_visitor_mapScalarFieldEnum
    having?: ma_visitor_mapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ma_visitor_mapCountAggregateInputType | true
    _min?: Ma_visitor_mapMinAggregateInputType
    _max?: Ma_visitor_mapMaxAggregateInputType
  }

  export type Ma_visitor_mapGroupByOutputType = {
    id: string
    visitor_id: string
    short_url_id: string
    created_at: Date
    _count: Ma_visitor_mapCountAggregateOutputType | null
    _min: Ma_visitor_mapMinAggregateOutputType | null
    _max: Ma_visitor_mapMaxAggregateOutputType | null
  }

  type GetMa_visitor_mapGroupByPayload<T extends ma_visitor_mapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ma_visitor_mapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ma_visitor_mapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ma_visitor_mapGroupByOutputType[P]>
            : GetScalarType<T[P], Ma_visitor_mapGroupByOutputType[P]>
        }
      >
    >


  export type ma_visitor_mapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitor_id?: boolean
    short_url_id?: boolean
    created_at?: boolean
    short_url?: boolean | lu_short_urlDefaultArgs<ExtArgs>
    visitor?: boolean | au_visitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ma_visitor_map"]>

  export type ma_visitor_mapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitor_id?: boolean
    short_url_id?: boolean
    created_at?: boolean
    short_url?: boolean | lu_short_urlDefaultArgs<ExtArgs>
    visitor?: boolean | au_visitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ma_visitor_map"]>

  export type ma_visitor_mapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitor_id?: boolean
    short_url_id?: boolean
    created_at?: boolean
    short_url?: boolean | lu_short_urlDefaultArgs<ExtArgs>
    visitor?: boolean | au_visitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ma_visitor_map"]>

  export type ma_visitor_mapSelectScalar = {
    id?: boolean
    visitor_id?: boolean
    short_url_id?: boolean
    created_at?: boolean
  }

  export type ma_visitor_mapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "visitor_id" | "short_url_id" | "created_at", ExtArgs["result"]["ma_visitor_map"]>
  export type ma_visitor_mapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    short_url?: boolean | lu_short_urlDefaultArgs<ExtArgs>
    visitor?: boolean | au_visitorDefaultArgs<ExtArgs>
  }
  export type ma_visitor_mapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    short_url?: boolean | lu_short_urlDefaultArgs<ExtArgs>
    visitor?: boolean | au_visitorDefaultArgs<ExtArgs>
  }
  export type ma_visitor_mapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    short_url?: boolean | lu_short_urlDefaultArgs<ExtArgs>
    visitor?: boolean | au_visitorDefaultArgs<ExtArgs>
  }

  export type $ma_visitor_mapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ma_visitor_map"
    objects: {
      short_url: Prisma.$lu_short_urlPayload<ExtArgs>
      visitor: Prisma.$au_visitorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      visitor_id: string
      short_url_id: string
      created_at: Date
    }, ExtArgs["result"]["ma_visitor_map"]>
    composites: {}
  }

  type ma_visitor_mapGetPayload<S extends boolean | null | undefined | ma_visitor_mapDefaultArgs> = $Result.GetResult<Prisma.$ma_visitor_mapPayload, S>

  type ma_visitor_mapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ma_visitor_mapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ma_visitor_mapCountAggregateInputType | true
    }

  export interface ma_visitor_mapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ma_visitor_map'], meta: { name: 'ma_visitor_map' } }
    /**
     * Find zero or one Ma_visitor_map that matches the filter.
     * @param {ma_visitor_mapFindUniqueArgs} args - Arguments to find a Ma_visitor_map
     * @example
     * // Get one Ma_visitor_map
     * const ma_visitor_map = await prisma.ma_visitor_map.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ma_visitor_mapFindUniqueArgs>(args: SelectSubset<T, ma_visitor_mapFindUniqueArgs<ExtArgs>>): Prisma__ma_visitor_mapClient<$Result.GetResult<Prisma.$ma_visitor_mapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ma_visitor_map that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ma_visitor_mapFindUniqueOrThrowArgs} args - Arguments to find a Ma_visitor_map
     * @example
     * // Get one Ma_visitor_map
     * const ma_visitor_map = await prisma.ma_visitor_map.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ma_visitor_mapFindUniqueOrThrowArgs>(args: SelectSubset<T, ma_visitor_mapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ma_visitor_mapClient<$Result.GetResult<Prisma.$ma_visitor_mapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ma_visitor_map that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ma_visitor_mapFindFirstArgs} args - Arguments to find a Ma_visitor_map
     * @example
     * // Get one Ma_visitor_map
     * const ma_visitor_map = await prisma.ma_visitor_map.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ma_visitor_mapFindFirstArgs>(args?: SelectSubset<T, ma_visitor_mapFindFirstArgs<ExtArgs>>): Prisma__ma_visitor_mapClient<$Result.GetResult<Prisma.$ma_visitor_mapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ma_visitor_map that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ma_visitor_mapFindFirstOrThrowArgs} args - Arguments to find a Ma_visitor_map
     * @example
     * // Get one Ma_visitor_map
     * const ma_visitor_map = await prisma.ma_visitor_map.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ma_visitor_mapFindFirstOrThrowArgs>(args?: SelectSubset<T, ma_visitor_mapFindFirstOrThrowArgs<ExtArgs>>): Prisma__ma_visitor_mapClient<$Result.GetResult<Prisma.$ma_visitor_mapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ma_visitor_maps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ma_visitor_mapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ma_visitor_maps
     * const ma_visitor_maps = await prisma.ma_visitor_map.findMany()
     * 
     * // Get first 10 Ma_visitor_maps
     * const ma_visitor_maps = await prisma.ma_visitor_map.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ma_visitor_mapWithIdOnly = await prisma.ma_visitor_map.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ma_visitor_mapFindManyArgs>(args?: SelectSubset<T, ma_visitor_mapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ma_visitor_mapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ma_visitor_map.
     * @param {ma_visitor_mapCreateArgs} args - Arguments to create a Ma_visitor_map.
     * @example
     * // Create one Ma_visitor_map
     * const Ma_visitor_map = await prisma.ma_visitor_map.create({
     *   data: {
     *     // ... data to create a Ma_visitor_map
     *   }
     * })
     * 
     */
    create<T extends ma_visitor_mapCreateArgs>(args: SelectSubset<T, ma_visitor_mapCreateArgs<ExtArgs>>): Prisma__ma_visitor_mapClient<$Result.GetResult<Prisma.$ma_visitor_mapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ma_visitor_maps.
     * @param {ma_visitor_mapCreateManyArgs} args - Arguments to create many Ma_visitor_maps.
     * @example
     * // Create many Ma_visitor_maps
     * const ma_visitor_map = await prisma.ma_visitor_map.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ma_visitor_mapCreateManyArgs>(args?: SelectSubset<T, ma_visitor_mapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ma_visitor_maps and returns the data saved in the database.
     * @param {ma_visitor_mapCreateManyAndReturnArgs} args - Arguments to create many Ma_visitor_maps.
     * @example
     * // Create many Ma_visitor_maps
     * const ma_visitor_map = await prisma.ma_visitor_map.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ma_visitor_maps and only return the `id`
     * const ma_visitor_mapWithIdOnly = await prisma.ma_visitor_map.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ma_visitor_mapCreateManyAndReturnArgs>(args?: SelectSubset<T, ma_visitor_mapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ma_visitor_mapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ma_visitor_map.
     * @param {ma_visitor_mapDeleteArgs} args - Arguments to delete one Ma_visitor_map.
     * @example
     * // Delete one Ma_visitor_map
     * const Ma_visitor_map = await prisma.ma_visitor_map.delete({
     *   where: {
     *     // ... filter to delete one Ma_visitor_map
     *   }
     * })
     * 
     */
    delete<T extends ma_visitor_mapDeleteArgs>(args: SelectSubset<T, ma_visitor_mapDeleteArgs<ExtArgs>>): Prisma__ma_visitor_mapClient<$Result.GetResult<Prisma.$ma_visitor_mapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ma_visitor_map.
     * @param {ma_visitor_mapUpdateArgs} args - Arguments to update one Ma_visitor_map.
     * @example
     * // Update one Ma_visitor_map
     * const ma_visitor_map = await prisma.ma_visitor_map.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ma_visitor_mapUpdateArgs>(args: SelectSubset<T, ma_visitor_mapUpdateArgs<ExtArgs>>): Prisma__ma_visitor_mapClient<$Result.GetResult<Prisma.$ma_visitor_mapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ma_visitor_maps.
     * @param {ma_visitor_mapDeleteManyArgs} args - Arguments to filter Ma_visitor_maps to delete.
     * @example
     * // Delete a few Ma_visitor_maps
     * const { count } = await prisma.ma_visitor_map.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ma_visitor_mapDeleteManyArgs>(args?: SelectSubset<T, ma_visitor_mapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ma_visitor_maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ma_visitor_mapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ma_visitor_maps
     * const ma_visitor_map = await prisma.ma_visitor_map.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ma_visitor_mapUpdateManyArgs>(args: SelectSubset<T, ma_visitor_mapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ma_visitor_maps and returns the data updated in the database.
     * @param {ma_visitor_mapUpdateManyAndReturnArgs} args - Arguments to update many Ma_visitor_maps.
     * @example
     * // Update many Ma_visitor_maps
     * const ma_visitor_map = await prisma.ma_visitor_map.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ma_visitor_maps and only return the `id`
     * const ma_visitor_mapWithIdOnly = await prisma.ma_visitor_map.updateManyAndReturn({
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
    updateManyAndReturn<T extends ma_visitor_mapUpdateManyAndReturnArgs>(args: SelectSubset<T, ma_visitor_mapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ma_visitor_mapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ma_visitor_map.
     * @param {ma_visitor_mapUpsertArgs} args - Arguments to update or create a Ma_visitor_map.
     * @example
     * // Update or create a Ma_visitor_map
     * const ma_visitor_map = await prisma.ma_visitor_map.upsert({
     *   create: {
     *     // ... data to create a Ma_visitor_map
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ma_visitor_map we want to update
     *   }
     * })
     */
    upsert<T extends ma_visitor_mapUpsertArgs>(args: SelectSubset<T, ma_visitor_mapUpsertArgs<ExtArgs>>): Prisma__ma_visitor_mapClient<$Result.GetResult<Prisma.$ma_visitor_mapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ma_visitor_maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ma_visitor_mapCountArgs} args - Arguments to filter Ma_visitor_maps to count.
     * @example
     * // Count the number of Ma_visitor_maps
     * const count = await prisma.ma_visitor_map.count({
     *   where: {
     *     // ... the filter for the Ma_visitor_maps we want to count
     *   }
     * })
    **/
    count<T extends ma_visitor_mapCountArgs>(
      args?: Subset<T, ma_visitor_mapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ma_visitor_mapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ma_visitor_map.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ma_visitor_mapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ma_visitor_mapAggregateArgs>(args: Subset<T, Ma_visitor_mapAggregateArgs>): Prisma.PrismaPromise<GetMa_visitor_mapAggregateType<T>>

    /**
     * Group by Ma_visitor_map.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ma_visitor_mapGroupByArgs} args - Group by arguments.
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
      T extends ma_visitor_mapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ma_visitor_mapGroupByArgs['orderBy'] }
        : { orderBy?: ma_visitor_mapGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ma_visitor_mapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMa_visitor_mapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ma_visitor_map model
   */
  readonly fields: ma_visitor_mapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ma_visitor_map.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ma_visitor_mapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    short_url<T extends lu_short_urlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lu_short_urlDefaultArgs<ExtArgs>>): Prisma__lu_short_urlClient<$Result.GetResult<Prisma.$lu_short_urlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    visitor<T extends au_visitorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, au_visitorDefaultArgs<ExtArgs>>): Prisma__au_visitorClient<$Result.GetResult<Prisma.$au_visitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ma_visitor_map model
   */
  interface ma_visitor_mapFieldRefs {
    readonly id: FieldRef<"ma_visitor_map", 'String'>
    readonly visitor_id: FieldRef<"ma_visitor_map", 'String'>
    readonly short_url_id: FieldRef<"ma_visitor_map", 'String'>
    readonly created_at: FieldRef<"ma_visitor_map", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ma_visitor_map findUnique
   */
  export type ma_visitor_mapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ma_visitor_map
     */
    select?: ma_visitor_mapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ma_visitor_map
     */
    omit?: ma_visitor_mapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ma_visitor_mapInclude<ExtArgs> | null
    /**
     * Filter, which ma_visitor_map to fetch.
     */
    where: ma_visitor_mapWhereUniqueInput
  }

  /**
   * ma_visitor_map findUniqueOrThrow
   */
  export type ma_visitor_mapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ma_visitor_map
     */
    select?: ma_visitor_mapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ma_visitor_map
     */
    omit?: ma_visitor_mapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ma_visitor_mapInclude<ExtArgs> | null
    /**
     * Filter, which ma_visitor_map to fetch.
     */
    where: ma_visitor_mapWhereUniqueInput
  }

  /**
   * ma_visitor_map findFirst
   */
  export type ma_visitor_mapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ma_visitor_map
     */
    select?: ma_visitor_mapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ma_visitor_map
     */
    omit?: ma_visitor_mapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ma_visitor_mapInclude<ExtArgs> | null
    /**
     * Filter, which ma_visitor_map to fetch.
     */
    where?: ma_visitor_mapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ma_visitor_maps to fetch.
     */
    orderBy?: ma_visitor_mapOrderByWithRelationInput | ma_visitor_mapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ma_visitor_maps.
     */
    cursor?: ma_visitor_mapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ma_visitor_maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ma_visitor_maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ma_visitor_maps.
     */
    distinct?: Ma_visitor_mapScalarFieldEnum | Ma_visitor_mapScalarFieldEnum[]
  }

  /**
   * ma_visitor_map findFirstOrThrow
   */
  export type ma_visitor_mapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ma_visitor_map
     */
    select?: ma_visitor_mapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ma_visitor_map
     */
    omit?: ma_visitor_mapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ma_visitor_mapInclude<ExtArgs> | null
    /**
     * Filter, which ma_visitor_map to fetch.
     */
    where?: ma_visitor_mapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ma_visitor_maps to fetch.
     */
    orderBy?: ma_visitor_mapOrderByWithRelationInput | ma_visitor_mapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ma_visitor_maps.
     */
    cursor?: ma_visitor_mapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ma_visitor_maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ma_visitor_maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ma_visitor_maps.
     */
    distinct?: Ma_visitor_mapScalarFieldEnum | Ma_visitor_mapScalarFieldEnum[]
  }

  /**
   * ma_visitor_map findMany
   */
  export type ma_visitor_mapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ma_visitor_map
     */
    select?: ma_visitor_mapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ma_visitor_map
     */
    omit?: ma_visitor_mapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ma_visitor_mapInclude<ExtArgs> | null
    /**
     * Filter, which ma_visitor_maps to fetch.
     */
    where?: ma_visitor_mapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ma_visitor_maps to fetch.
     */
    orderBy?: ma_visitor_mapOrderByWithRelationInput | ma_visitor_mapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ma_visitor_maps.
     */
    cursor?: ma_visitor_mapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ma_visitor_maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ma_visitor_maps.
     */
    skip?: number
    distinct?: Ma_visitor_mapScalarFieldEnum | Ma_visitor_mapScalarFieldEnum[]
  }

  /**
   * ma_visitor_map create
   */
  export type ma_visitor_mapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ma_visitor_map
     */
    select?: ma_visitor_mapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ma_visitor_map
     */
    omit?: ma_visitor_mapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ma_visitor_mapInclude<ExtArgs> | null
    /**
     * The data needed to create a ma_visitor_map.
     */
    data: XOR<ma_visitor_mapCreateInput, ma_visitor_mapUncheckedCreateInput>
  }

  /**
   * ma_visitor_map createMany
   */
  export type ma_visitor_mapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ma_visitor_maps.
     */
    data: ma_visitor_mapCreateManyInput | ma_visitor_mapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ma_visitor_map createManyAndReturn
   */
  export type ma_visitor_mapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ma_visitor_map
     */
    select?: ma_visitor_mapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ma_visitor_map
     */
    omit?: ma_visitor_mapOmit<ExtArgs> | null
    /**
     * The data used to create many ma_visitor_maps.
     */
    data: ma_visitor_mapCreateManyInput | ma_visitor_mapCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ma_visitor_mapIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ma_visitor_map update
   */
  export type ma_visitor_mapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ma_visitor_map
     */
    select?: ma_visitor_mapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ma_visitor_map
     */
    omit?: ma_visitor_mapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ma_visitor_mapInclude<ExtArgs> | null
    /**
     * The data needed to update a ma_visitor_map.
     */
    data: XOR<ma_visitor_mapUpdateInput, ma_visitor_mapUncheckedUpdateInput>
    /**
     * Choose, which ma_visitor_map to update.
     */
    where: ma_visitor_mapWhereUniqueInput
  }

  /**
   * ma_visitor_map updateMany
   */
  export type ma_visitor_mapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ma_visitor_maps.
     */
    data: XOR<ma_visitor_mapUpdateManyMutationInput, ma_visitor_mapUncheckedUpdateManyInput>
    /**
     * Filter which ma_visitor_maps to update
     */
    where?: ma_visitor_mapWhereInput
    /**
     * Limit how many ma_visitor_maps to update.
     */
    limit?: number
  }

  /**
   * ma_visitor_map updateManyAndReturn
   */
  export type ma_visitor_mapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ma_visitor_map
     */
    select?: ma_visitor_mapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ma_visitor_map
     */
    omit?: ma_visitor_mapOmit<ExtArgs> | null
    /**
     * The data used to update ma_visitor_maps.
     */
    data: XOR<ma_visitor_mapUpdateManyMutationInput, ma_visitor_mapUncheckedUpdateManyInput>
    /**
     * Filter which ma_visitor_maps to update
     */
    where?: ma_visitor_mapWhereInput
    /**
     * Limit how many ma_visitor_maps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ma_visitor_mapIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ma_visitor_map upsert
   */
  export type ma_visitor_mapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ma_visitor_map
     */
    select?: ma_visitor_mapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ma_visitor_map
     */
    omit?: ma_visitor_mapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ma_visitor_mapInclude<ExtArgs> | null
    /**
     * The filter to search for the ma_visitor_map to update in case it exists.
     */
    where: ma_visitor_mapWhereUniqueInput
    /**
     * In case the ma_visitor_map found by the `where` argument doesn't exist, create a new ma_visitor_map with this data.
     */
    create: XOR<ma_visitor_mapCreateInput, ma_visitor_mapUncheckedCreateInput>
    /**
     * In case the ma_visitor_map was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ma_visitor_mapUpdateInput, ma_visitor_mapUncheckedUpdateInput>
  }

  /**
   * ma_visitor_map delete
   */
  export type ma_visitor_mapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ma_visitor_map
     */
    select?: ma_visitor_mapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ma_visitor_map
     */
    omit?: ma_visitor_mapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ma_visitor_mapInclude<ExtArgs> | null
    /**
     * Filter which ma_visitor_map to delete.
     */
    where: ma_visitor_mapWhereUniqueInput
  }

  /**
   * ma_visitor_map deleteMany
   */
  export type ma_visitor_mapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ma_visitor_maps to delete
     */
    where?: ma_visitor_mapWhereInput
    /**
     * Limit how many ma_visitor_maps to delete.
     */
    limit?: number
  }

  /**
   * ma_visitor_map without action
   */
  export type ma_visitor_mapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ma_visitor_map
     */
    select?: ma_visitor_mapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ma_visitor_map
     */
    omit?: ma_visitor_mapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ma_visitor_mapInclude<ExtArgs> | null
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


  export const Au_visitorScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Au_visitorScalarFieldEnum = (typeof Au_visitorScalarFieldEnum)[keyof typeof Au_visitorScalarFieldEnum]


  export const Ma_visitor_mapScalarFieldEnum: {
    id: 'id',
    visitor_id: 'visitor_id',
    short_url_id: 'short_url_id',
    created_at: 'created_at'
  };

  export type Ma_visitor_mapScalarFieldEnum = (typeof Ma_visitor_mapScalarFieldEnum)[keyof typeof Ma_visitor_mapScalarFieldEnum]


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
    visitor_maps?: Ma_visitor_mapListRelationFilter
  }

  export type lu_short_urlOrderByWithRelationInput = {
    id?: SortOrder
    original?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    clicks?: SortOrder
    visitor_maps?: ma_visitor_mapOrderByRelationAggregateInput
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
    visitor_maps?: Ma_visitor_mapListRelationFilter
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

  export type au_visitorWhereInput = {
    AND?: au_visitorWhereInput | au_visitorWhereInput[]
    OR?: au_visitorWhereInput[]
    NOT?: au_visitorWhereInput | au_visitorWhereInput[]
    id?: StringFilter<"au_visitor"> | string
    created_at?: DateTimeFilter<"au_visitor"> | Date | string
    updated_at?: DateTimeFilter<"au_visitor"> | Date | string
    short_urls?: Ma_visitor_mapListRelationFilter
  }

  export type au_visitorOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    short_urls?: ma_visitor_mapOrderByRelationAggregateInput
  }

  export type au_visitorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: au_visitorWhereInput | au_visitorWhereInput[]
    OR?: au_visitorWhereInput[]
    NOT?: au_visitorWhereInput | au_visitorWhereInput[]
    created_at?: DateTimeFilter<"au_visitor"> | Date | string
    updated_at?: DateTimeFilter<"au_visitor"> | Date | string
    short_urls?: Ma_visitor_mapListRelationFilter
  }, "id">

  export type au_visitorOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: au_visitorCountOrderByAggregateInput
    _max?: au_visitorMaxOrderByAggregateInput
    _min?: au_visitorMinOrderByAggregateInput
  }

  export type au_visitorScalarWhereWithAggregatesInput = {
    AND?: au_visitorScalarWhereWithAggregatesInput | au_visitorScalarWhereWithAggregatesInput[]
    OR?: au_visitorScalarWhereWithAggregatesInput[]
    NOT?: au_visitorScalarWhereWithAggregatesInput | au_visitorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"au_visitor"> | string
    created_at?: DateTimeWithAggregatesFilter<"au_visitor"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"au_visitor"> | Date | string
  }

  export type ma_visitor_mapWhereInput = {
    AND?: ma_visitor_mapWhereInput | ma_visitor_mapWhereInput[]
    OR?: ma_visitor_mapWhereInput[]
    NOT?: ma_visitor_mapWhereInput | ma_visitor_mapWhereInput[]
    id?: StringFilter<"ma_visitor_map"> | string
    visitor_id?: StringFilter<"ma_visitor_map"> | string
    short_url_id?: StringFilter<"ma_visitor_map"> | string
    created_at?: DateTimeFilter<"ma_visitor_map"> | Date | string
    short_url?: XOR<Lu_short_urlScalarRelationFilter, lu_short_urlWhereInput>
    visitor?: XOR<Au_visitorScalarRelationFilter, au_visitorWhereInput>
  }

  export type ma_visitor_mapOrderByWithRelationInput = {
    id?: SortOrder
    visitor_id?: SortOrder
    short_url_id?: SortOrder
    created_at?: SortOrder
    short_url?: lu_short_urlOrderByWithRelationInput
    visitor?: au_visitorOrderByWithRelationInput
  }

  export type ma_visitor_mapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    visitor_id_short_url_id?: ma_visitor_mapVisitor_idShort_url_idCompoundUniqueInput
    AND?: ma_visitor_mapWhereInput | ma_visitor_mapWhereInput[]
    OR?: ma_visitor_mapWhereInput[]
    NOT?: ma_visitor_mapWhereInput | ma_visitor_mapWhereInput[]
    visitor_id?: StringFilter<"ma_visitor_map"> | string
    short_url_id?: StringFilter<"ma_visitor_map"> | string
    created_at?: DateTimeFilter<"ma_visitor_map"> | Date | string
    short_url?: XOR<Lu_short_urlScalarRelationFilter, lu_short_urlWhereInput>
    visitor?: XOR<Au_visitorScalarRelationFilter, au_visitorWhereInput>
  }, "id" | "visitor_id_short_url_id">

  export type ma_visitor_mapOrderByWithAggregationInput = {
    id?: SortOrder
    visitor_id?: SortOrder
    short_url_id?: SortOrder
    created_at?: SortOrder
    _count?: ma_visitor_mapCountOrderByAggregateInput
    _max?: ma_visitor_mapMaxOrderByAggregateInput
    _min?: ma_visitor_mapMinOrderByAggregateInput
  }

  export type ma_visitor_mapScalarWhereWithAggregatesInput = {
    AND?: ma_visitor_mapScalarWhereWithAggregatesInput | ma_visitor_mapScalarWhereWithAggregatesInput[]
    OR?: ma_visitor_mapScalarWhereWithAggregatesInput[]
    NOT?: ma_visitor_mapScalarWhereWithAggregatesInput | ma_visitor_mapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ma_visitor_map"> | string
    visitor_id?: StringWithAggregatesFilter<"ma_visitor_map"> | string
    short_url_id?: StringWithAggregatesFilter<"ma_visitor_map"> | string
    created_at?: DateTimeWithAggregatesFilter<"ma_visitor_map"> | Date | string
  }

  export type lu_short_urlCreateInput = {
    id?: string
    original: string
    slug: string
    created_at?: Date | string
    clicks?: number
    visitor_maps?: ma_visitor_mapCreateNestedManyWithoutShort_urlInput
  }

  export type lu_short_urlUncheckedCreateInput = {
    id?: string
    original: string
    slug: string
    created_at?: Date | string
    clicks?: number
    visitor_maps?: ma_visitor_mapUncheckedCreateNestedManyWithoutShort_urlInput
  }

  export type lu_short_urlUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    original?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clicks?: IntFieldUpdateOperationsInput | number
    visitor_maps?: ma_visitor_mapUpdateManyWithoutShort_urlNestedInput
  }

  export type lu_short_urlUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    original?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clicks?: IntFieldUpdateOperationsInput | number
    visitor_maps?: ma_visitor_mapUncheckedUpdateManyWithoutShort_urlNestedInput
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

  export type au_visitorCreateInput = {
    id: string
    created_at?: Date | string
    updated_at?: Date | string
    short_urls?: ma_visitor_mapCreateNestedManyWithoutVisitorInput
  }

  export type au_visitorUncheckedCreateInput = {
    id: string
    created_at?: Date | string
    updated_at?: Date | string
    short_urls?: ma_visitor_mapUncheckedCreateNestedManyWithoutVisitorInput
  }

  export type au_visitorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    short_urls?: ma_visitor_mapUpdateManyWithoutVisitorNestedInput
  }

  export type au_visitorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    short_urls?: ma_visitor_mapUncheckedUpdateManyWithoutVisitorNestedInput
  }

  export type au_visitorCreateManyInput = {
    id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type au_visitorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type au_visitorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ma_visitor_mapCreateInput = {
    id?: string
    created_at?: Date | string
    short_url: lu_short_urlCreateNestedOneWithoutVisitor_mapsInput
    visitor: au_visitorCreateNestedOneWithoutShort_urlsInput
  }

  export type ma_visitor_mapUncheckedCreateInput = {
    id?: string
    visitor_id: string
    short_url_id: string
    created_at?: Date | string
  }

  export type ma_visitor_mapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    short_url?: lu_short_urlUpdateOneRequiredWithoutVisitor_mapsNestedInput
    visitor?: au_visitorUpdateOneRequiredWithoutShort_urlsNestedInput
  }

  export type ma_visitor_mapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitor_id?: StringFieldUpdateOperationsInput | string
    short_url_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ma_visitor_mapCreateManyInput = {
    id?: string
    visitor_id: string
    short_url_id: string
    created_at?: Date | string
  }

  export type ma_visitor_mapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ma_visitor_mapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitor_id?: StringFieldUpdateOperationsInput | string
    short_url_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type Ma_visitor_mapListRelationFilter = {
    every?: ma_visitor_mapWhereInput
    some?: ma_visitor_mapWhereInput
    none?: ma_visitor_mapWhereInput
  }

  export type ma_visitor_mapOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type au_visitorCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type au_visitorMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type au_visitorMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Lu_short_urlScalarRelationFilter = {
    is?: lu_short_urlWhereInput
    isNot?: lu_short_urlWhereInput
  }

  export type Au_visitorScalarRelationFilter = {
    is?: au_visitorWhereInput
    isNot?: au_visitorWhereInput
  }

  export type ma_visitor_mapVisitor_idShort_url_idCompoundUniqueInput = {
    visitor_id: string
    short_url_id: string
  }

  export type ma_visitor_mapCountOrderByAggregateInput = {
    id?: SortOrder
    visitor_id?: SortOrder
    short_url_id?: SortOrder
    created_at?: SortOrder
  }

  export type ma_visitor_mapMaxOrderByAggregateInput = {
    id?: SortOrder
    visitor_id?: SortOrder
    short_url_id?: SortOrder
    created_at?: SortOrder
  }

  export type ma_visitor_mapMinOrderByAggregateInput = {
    id?: SortOrder
    visitor_id?: SortOrder
    short_url_id?: SortOrder
    created_at?: SortOrder
  }

  export type ma_visitor_mapCreateNestedManyWithoutShort_urlInput = {
    create?: XOR<ma_visitor_mapCreateWithoutShort_urlInput, ma_visitor_mapUncheckedCreateWithoutShort_urlInput> | ma_visitor_mapCreateWithoutShort_urlInput[] | ma_visitor_mapUncheckedCreateWithoutShort_urlInput[]
    connectOrCreate?: ma_visitor_mapCreateOrConnectWithoutShort_urlInput | ma_visitor_mapCreateOrConnectWithoutShort_urlInput[]
    createMany?: ma_visitor_mapCreateManyShort_urlInputEnvelope
    connect?: ma_visitor_mapWhereUniqueInput | ma_visitor_mapWhereUniqueInput[]
  }

  export type ma_visitor_mapUncheckedCreateNestedManyWithoutShort_urlInput = {
    create?: XOR<ma_visitor_mapCreateWithoutShort_urlInput, ma_visitor_mapUncheckedCreateWithoutShort_urlInput> | ma_visitor_mapCreateWithoutShort_urlInput[] | ma_visitor_mapUncheckedCreateWithoutShort_urlInput[]
    connectOrCreate?: ma_visitor_mapCreateOrConnectWithoutShort_urlInput | ma_visitor_mapCreateOrConnectWithoutShort_urlInput[]
    createMany?: ma_visitor_mapCreateManyShort_urlInputEnvelope
    connect?: ma_visitor_mapWhereUniqueInput | ma_visitor_mapWhereUniqueInput[]
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

  export type ma_visitor_mapUpdateManyWithoutShort_urlNestedInput = {
    create?: XOR<ma_visitor_mapCreateWithoutShort_urlInput, ma_visitor_mapUncheckedCreateWithoutShort_urlInput> | ma_visitor_mapCreateWithoutShort_urlInput[] | ma_visitor_mapUncheckedCreateWithoutShort_urlInput[]
    connectOrCreate?: ma_visitor_mapCreateOrConnectWithoutShort_urlInput | ma_visitor_mapCreateOrConnectWithoutShort_urlInput[]
    upsert?: ma_visitor_mapUpsertWithWhereUniqueWithoutShort_urlInput | ma_visitor_mapUpsertWithWhereUniqueWithoutShort_urlInput[]
    createMany?: ma_visitor_mapCreateManyShort_urlInputEnvelope
    set?: ma_visitor_mapWhereUniqueInput | ma_visitor_mapWhereUniqueInput[]
    disconnect?: ma_visitor_mapWhereUniqueInput | ma_visitor_mapWhereUniqueInput[]
    delete?: ma_visitor_mapWhereUniqueInput | ma_visitor_mapWhereUniqueInput[]
    connect?: ma_visitor_mapWhereUniqueInput | ma_visitor_mapWhereUniqueInput[]
    update?: ma_visitor_mapUpdateWithWhereUniqueWithoutShort_urlInput | ma_visitor_mapUpdateWithWhereUniqueWithoutShort_urlInput[]
    updateMany?: ma_visitor_mapUpdateManyWithWhereWithoutShort_urlInput | ma_visitor_mapUpdateManyWithWhereWithoutShort_urlInput[]
    deleteMany?: ma_visitor_mapScalarWhereInput | ma_visitor_mapScalarWhereInput[]
  }

  export type ma_visitor_mapUncheckedUpdateManyWithoutShort_urlNestedInput = {
    create?: XOR<ma_visitor_mapCreateWithoutShort_urlInput, ma_visitor_mapUncheckedCreateWithoutShort_urlInput> | ma_visitor_mapCreateWithoutShort_urlInput[] | ma_visitor_mapUncheckedCreateWithoutShort_urlInput[]
    connectOrCreate?: ma_visitor_mapCreateOrConnectWithoutShort_urlInput | ma_visitor_mapCreateOrConnectWithoutShort_urlInput[]
    upsert?: ma_visitor_mapUpsertWithWhereUniqueWithoutShort_urlInput | ma_visitor_mapUpsertWithWhereUniqueWithoutShort_urlInput[]
    createMany?: ma_visitor_mapCreateManyShort_urlInputEnvelope
    set?: ma_visitor_mapWhereUniqueInput | ma_visitor_mapWhereUniqueInput[]
    disconnect?: ma_visitor_mapWhereUniqueInput | ma_visitor_mapWhereUniqueInput[]
    delete?: ma_visitor_mapWhereUniqueInput | ma_visitor_mapWhereUniqueInput[]
    connect?: ma_visitor_mapWhereUniqueInput | ma_visitor_mapWhereUniqueInput[]
    update?: ma_visitor_mapUpdateWithWhereUniqueWithoutShort_urlInput | ma_visitor_mapUpdateWithWhereUniqueWithoutShort_urlInput[]
    updateMany?: ma_visitor_mapUpdateManyWithWhereWithoutShort_urlInput | ma_visitor_mapUpdateManyWithWhereWithoutShort_urlInput[]
    deleteMany?: ma_visitor_mapScalarWhereInput | ma_visitor_mapScalarWhereInput[]
  }

  export type ma_visitor_mapCreateNestedManyWithoutVisitorInput = {
    create?: XOR<ma_visitor_mapCreateWithoutVisitorInput, ma_visitor_mapUncheckedCreateWithoutVisitorInput> | ma_visitor_mapCreateWithoutVisitorInput[] | ma_visitor_mapUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: ma_visitor_mapCreateOrConnectWithoutVisitorInput | ma_visitor_mapCreateOrConnectWithoutVisitorInput[]
    createMany?: ma_visitor_mapCreateManyVisitorInputEnvelope
    connect?: ma_visitor_mapWhereUniqueInput | ma_visitor_mapWhereUniqueInput[]
  }

  export type ma_visitor_mapUncheckedCreateNestedManyWithoutVisitorInput = {
    create?: XOR<ma_visitor_mapCreateWithoutVisitorInput, ma_visitor_mapUncheckedCreateWithoutVisitorInput> | ma_visitor_mapCreateWithoutVisitorInput[] | ma_visitor_mapUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: ma_visitor_mapCreateOrConnectWithoutVisitorInput | ma_visitor_mapCreateOrConnectWithoutVisitorInput[]
    createMany?: ma_visitor_mapCreateManyVisitorInputEnvelope
    connect?: ma_visitor_mapWhereUniqueInput | ma_visitor_mapWhereUniqueInput[]
  }

  export type ma_visitor_mapUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<ma_visitor_mapCreateWithoutVisitorInput, ma_visitor_mapUncheckedCreateWithoutVisitorInput> | ma_visitor_mapCreateWithoutVisitorInput[] | ma_visitor_mapUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: ma_visitor_mapCreateOrConnectWithoutVisitorInput | ma_visitor_mapCreateOrConnectWithoutVisitorInput[]
    upsert?: ma_visitor_mapUpsertWithWhereUniqueWithoutVisitorInput | ma_visitor_mapUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: ma_visitor_mapCreateManyVisitorInputEnvelope
    set?: ma_visitor_mapWhereUniqueInput | ma_visitor_mapWhereUniqueInput[]
    disconnect?: ma_visitor_mapWhereUniqueInput | ma_visitor_mapWhereUniqueInput[]
    delete?: ma_visitor_mapWhereUniqueInput | ma_visitor_mapWhereUniqueInput[]
    connect?: ma_visitor_mapWhereUniqueInput | ma_visitor_mapWhereUniqueInput[]
    update?: ma_visitor_mapUpdateWithWhereUniqueWithoutVisitorInput | ma_visitor_mapUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: ma_visitor_mapUpdateManyWithWhereWithoutVisitorInput | ma_visitor_mapUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: ma_visitor_mapScalarWhereInput | ma_visitor_mapScalarWhereInput[]
  }

  export type ma_visitor_mapUncheckedUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<ma_visitor_mapCreateWithoutVisitorInput, ma_visitor_mapUncheckedCreateWithoutVisitorInput> | ma_visitor_mapCreateWithoutVisitorInput[] | ma_visitor_mapUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: ma_visitor_mapCreateOrConnectWithoutVisitorInput | ma_visitor_mapCreateOrConnectWithoutVisitorInput[]
    upsert?: ma_visitor_mapUpsertWithWhereUniqueWithoutVisitorInput | ma_visitor_mapUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: ma_visitor_mapCreateManyVisitorInputEnvelope
    set?: ma_visitor_mapWhereUniqueInput | ma_visitor_mapWhereUniqueInput[]
    disconnect?: ma_visitor_mapWhereUniqueInput | ma_visitor_mapWhereUniqueInput[]
    delete?: ma_visitor_mapWhereUniqueInput | ma_visitor_mapWhereUniqueInput[]
    connect?: ma_visitor_mapWhereUniqueInput | ma_visitor_mapWhereUniqueInput[]
    update?: ma_visitor_mapUpdateWithWhereUniqueWithoutVisitorInput | ma_visitor_mapUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: ma_visitor_mapUpdateManyWithWhereWithoutVisitorInput | ma_visitor_mapUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: ma_visitor_mapScalarWhereInput | ma_visitor_mapScalarWhereInput[]
  }

  export type lu_short_urlCreateNestedOneWithoutVisitor_mapsInput = {
    create?: XOR<lu_short_urlCreateWithoutVisitor_mapsInput, lu_short_urlUncheckedCreateWithoutVisitor_mapsInput>
    connectOrCreate?: lu_short_urlCreateOrConnectWithoutVisitor_mapsInput
    connect?: lu_short_urlWhereUniqueInput
  }

  export type au_visitorCreateNestedOneWithoutShort_urlsInput = {
    create?: XOR<au_visitorCreateWithoutShort_urlsInput, au_visitorUncheckedCreateWithoutShort_urlsInput>
    connectOrCreate?: au_visitorCreateOrConnectWithoutShort_urlsInput
    connect?: au_visitorWhereUniqueInput
  }

  export type lu_short_urlUpdateOneRequiredWithoutVisitor_mapsNestedInput = {
    create?: XOR<lu_short_urlCreateWithoutVisitor_mapsInput, lu_short_urlUncheckedCreateWithoutVisitor_mapsInput>
    connectOrCreate?: lu_short_urlCreateOrConnectWithoutVisitor_mapsInput
    upsert?: lu_short_urlUpsertWithoutVisitor_mapsInput
    connect?: lu_short_urlWhereUniqueInput
    update?: XOR<XOR<lu_short_urlUpdateToOneWithWhereWithoutVisitor_mapsInput, lu_short_urlUpdateWithoutVisitor_mapsInput>, lu_short_urlUncheckedUpdateWithoutVisitor_mapsInput>
  }

  export type au_visitorUpdateOneRequiredWithoutShort_urlsNestedInput = {
    create?: XOR<au_visitorCreateWithoutShort_urlsInput, au_visitorUncheckedCreateWithoutShort_urlsInput>
    connectOrCreate?: au_visitorCreateOrConnectWithoutShort_urlsInput
    upsert?: au_visitorUpsertWithoutShort_urlsInput
    connect?: au_visitorWhereUniqueInput
    update?: XOR<XOR<au_visitorUpdateToOneWithWhereWithoutShort_urlsInput, au_visitorUpdateWithoutShort_urlsInput>, au_visitorUncheckedUpdateWithoutShort_urlsInput>
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

  export type ma_visitor_mapCreateWithoutShort_urlInput = {
    id?: string
    created_at?: Date | string
    visitor: au_visitorCreateNestedOneWithoutShort_urlsInput
  }

  export type ma_visitor_mapUncheckedCreateWithoutShort_urlInput = {
    id?: string
    visitor_id: string
    created_at?: Date | string
  }

  export type ma_visitor_mapCreateOrConnectWithoutShort_urlInput = {
    where: ma_visitor_mapWhereUniqueInput
    create: XOR<ma_visitor_mapCreateWithoutShort_urlInput, ma_visitor_mapUncheckedCreateWithoutShort_urlInput>
  }

  export type ma_visitor_mapCreateManyShort_urlInputEnvelope = {
    data: ma_visitor_mapCreateManyShort_urlInput | ma_visitor_mapCreateManyShort_urlInput[]
    skipDuplicates?: boolean
  }

  export type ma_visitor_mapUpsertWithWhereUniqueWithoutShort_urlInput = {
    where: ma_visitor_mapWhereUniqueInput
    update: XOR<ma_visitor_mapUpdateWithoutShort_urlInput, ma_visitor_mapUncheckedUpdateWithoutShort_urlInput>
    create: XOR<ma_visitor_mapCreateWithoutShort_urlInput, ma_visitor_mapUncheckedCreateWithoutShort_urlInput>
  }

  export type ma_visitor_mapUpdateWithWhereUniqueWithoutShort_urlInput = {
    where: ma_visitor_mapWhereUniqueInput
    data: XOR<ma_visitor_mapUpdateWithoutShort_urlInput, ma_visitor_mapUncheckedUpdateWithoutShort_urlInput>
  }

  export type ma_visitor_mapUpdateManyWithWhereWithoutShort_urlInput = {
    where: ma_visitor_mapScalarWhereInput
    data: XOR<ma_visitor_mapUpdateManyMutationInput, ma_visitor_mapUncheckedUpdateManyWithoutShort_urlInput>
  }

  export type ma_visitor_mapScalarWhereInput = {
    AND?: ma_visitor_mapScalarWhereInput | ma_visitor_mapScalarWhereInput[]
    OR?: ma_visitor_mapScalarWhereInput[]
    NOT?: ma_visitor_mapScalarWhereInput | ma_visitor_mapScalarWhereInput[]
    id?: StringFilter<"ma_visitor_map"> | string
    visitor_id?: StringFilter<"ma_visitor_map"> | string
    short_url_id?: StringFilter<"ma_visitor_map"> | string
    created_at?: DateTimeFilter<"ma_visitor_map"> | Date | string
  }

  export type ma_visitor_mapCreateWithoutVisitorInput = {
    id?: string
    created_at?: Date | string
    short_url: lu_short_urlCreateNestedOneWithoutVisitor_mapsInput
  }

  export type ma_visitor_mapUncheckedCreateWithoutVisitorInput = {
    id?: string
    short_url_id: string
    created_at?: Date | string
  }

  export type ma_visitor_mapCreateOrConnectWithoutVisitorInput = {
    where: ma_visitor_mapWhereUniqueInput
    create: XOR<ma_visitor_mapCreateWithoutVisitorInput, ma_visitor_mapUncheckedCreateWithoutVisitorInput>
  }

  export type ma_visitor_mapCreateManyVisitorInputEnvelope = {
    data: ma_visitor_mapCreateManyVisitorInput | ma_visitor_mapCreateManyVisitorInput[]
    skipDuplicates?: boolean
  }

  export type ma_visitor_mapUpsertWithWhereUniqueWithoutVisitorInput = {
    where: ma_visitor_mapWhereUniqueInput
    update: XOR<ma_visitor_mapUpdateWithoutVisitorInput, ma_visitor_mapUncheckedUpdateWithoutVisitorInput>
    create: XOR<ma_visitor_mapCreateWithoutVisitorInput, ma_visitor_mapUncheckedCreateWithoutVisitorInput>
  }

  export type ma_visitor_mapUpdateWithWhereUniqueWithoutVisitorInput = {
    where: ma_visitor_mapWhereUniqueInput
    data: XOR<ma_visitor_mapUpdateWithoutVisitorInput, ma_visitor_mapUncheckedUpdateWithoutVisitorInput>
  }

  export type ma_visitor_mapUpdateManyWithWhereWithoutVisitorInput = {
    where: ma_visitor_mapScalarWhereInput
    data: XOR<ma_visitor_mapUpdateManyMutationInput, ma_visitor_mapUncheckedUpdateManyWithoutVisitorInput>
  }

  export type lu_short_urlCreateWithoutVisitor_mapsInput = {
    id?: string
    original: string
    slug: string
    created_at?: Date | string
    clicks?: number
  }

  export type lu_short_urlUncheckedCreateWithoutVisitor_mapsInput = {
    id?: string
    original: string
    slug: string
    created_at?: Date | string
    clicks?: number
  }

  export type lu_short_urlCreateOrConnectWithoutVisitor_mapsInput = {
    where: lu_short_urlWhereUniqueInput
    create: XOR<lu_short_urlCreateWithoutVisitor_mapsInput, lu_short_urlUncheckedCreateWithoutVisitor_mapsInput>
  }

  export type au_visitorCreateWithoutShort_urlsInput = {
    id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type au_visitorUncheckedCreateWithoutShort_urlsInput = {
    id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type au_visitorCreateOrConnectWithoutShort_urlsInput = {
    where: au_visitorWhereUniqueInput
    create: XOR<au_visitorCreateWithoutShort_urlsInput, au_visitorUncheckedCreateWithoutShort_urlsInput>
  }

  export type lu_short_urlUpsertWithoutVisitor_mapsInput = {
    update: XOR<lu_short_urlUpdateWithoutVisitor_mapsInput, lu_short_urlUncheckedUpdateWithoutVisitor_mapsInput>
    create: XOR<lu_short_urlCreateWithoutVisitor_mapsInput, lu_short_urlUncheckedCreateWithoutVisitor_mapsInput>
    where?: lu_short_urlWhereInput
  }

  export type lu_short_urlUpdateToOneWithWhereWithoutVisitor_mapsInput = {
    where?: lu_short_urlWhereInput
    data: XOR<lu_short_urlUpdateWithoutVisitor_mapsInput, lu_short_urlUncheckedUpdateWithoutVisitor_mapsInput>
  }

  export type lu_short_urlUpdateWithoutVisitor_mapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    original?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clicks?: IntFieldUpdateOperationsInput | number
  }

  export type lu_short_urlUncheckedUpdateWithoutVisitor_mapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    original?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clicks?: IntFieldUpdateOperationsInput | number
  }

  export type au_visitorUpsertWithoutShort_urlsInput = {
    update: XOR<au_visitorUpdateWithoutShort_urlsInput, au_visitorUncheckedUpdateWithoutShort_urlsInput>
    create: XOR<au_visitorCreateWithoutShort_urlsInput, au_visitorUncheckedCreateWithoutShort_urlsInput>
    where?: au_visitorWhereInput
  }

  export type au_visitorUpdateToOneWithWhereWithoutShort_urlsInput = {
    where?: au_visitorWhereInput
    data: XOR<au_visitorUpdateWithoutShort_urlsInput, au_visitorUncheckedUpdateWithoutShort_urlsInput>
  }

  export type au_visitorUpdateWithoutShort_urlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type au_visitorUncheckedUpdateWithoutShort_urlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ma_visitor_mapCreateManyShort_urlInput = {
    id?: string
    visitor_id: string
    created_at?: Date | string
  }

  export type ma_visitor_mapUpdateWithoutShort_urlInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    visitor?: au_visitorUpdateOneRequiredWithoutShort_urlsNestedInput
  }

  export type ma_visitor_mapUncheckedUpdateWithoutShort_urlInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitor_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ma_visitor_mapUncheckedUpdateManyWithoutShort_urlInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitor_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ma_visitor_mapCreateManyVisitorInput = {
    id?: string
    short_url_id: string
    created_at?: Date | string
  }

  export type ma_visitor_mapUpdateWithoutVisitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    short_url?: lu_short_urlUpdateOneRequiredWithoutVisitor_mapsNestedInput
  }

  export type ma_visitor_mapUncheckedUpdateWithoutVisitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    short_url_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ma_visitor_mapUncheckedUpdateManyWithoutVisitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    short_url_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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