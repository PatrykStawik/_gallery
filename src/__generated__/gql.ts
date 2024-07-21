/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery galleryMovies(\n  $first: Int\n  $skip: Int\n  $where: MoviesWhereInput\n  $orderBy: MoviesOrderByInput\n) {\n  page: movies_idConnection(\n    first: $first\n    skip: $skip\n    where: $where\n    orderBy: $orderBy\n  ) {\n    edges {\n      node {\n        id\n        createdAt\n        id\n        images {\n          id\n          fileName\n          url\n        }\n        title\n      }\n    }\n    aggregate {\n      count\n    }\n  }\n}\n": types.GalleryMoviesDocument,
    "\nquery galleryMoviesTitles(\n  $first: Int\n  $skip: Int\n  $where: MoviesWhereInput\n  $orderBy: MoviesOrderByInput\n) {\n  page: movies_idConnection(\n    first: $first\n    skip: $skip\n    where: $where\n    orderBy: $orderBy\n  ) {\n    edges {\n      node {\n        id\n        createdAt\n        title\n      }\n    }\n  }\n}\n": types.GalleryMoviesTitlesDocument,
    "\nquery getMovieById($id: ID!) {\n  movies(where: { id: $id }) {\n    id\n    createdAt\n    images {\n      id\n      fileName\n      url\n    }\n    title\n  }\n}\n": types.GetMovieByIdDocument,
    "\nquery getMovieByTitle($title: String!) {\n  movies(where: { title: $title }) {\n    id\n    createdAt\n    images {\n      id\n      fileName\n      url\n    }\n    title\n  }\n}\n": types.GetMovieByTitleDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery galleryMovies(\n  $first: Int\n  $skip: Int\n  $where: MoviesWhereInput\n  $orderBy: MoviesOrderByInput\n) {\n  page: movies_idConnection(\n    first: $first\n    skip: $skip\n    where: $where\n    orderBy: $orderBy\n  ) {\n    edges {\n      node {\n        id\n        createdAt\n        id\n        images {\n          id\n          fileName\n          url\n        }\n        title\n      }\n    }\n    aggregate {\n      count\n    }\n  }\n}\n"): (typeof documents)["\nquery galleryMovies(\n  $first: Int\n  $skip: Int\n  $where: MoviesWhereInput\n  $orderBy: MoviesOrderByInput\n) {\n  page: movies_idConnection(\n    first: $first\n    skip: $skip\n    where: $where\n    orderBy: $orderBy\n  ) {\n    edges {\n      node {\n        id\n        createdAt\n        id\n        images {\n          id\n          fileName\n          url\n        }\n        title\n      }\n    }\n    aggregate {\n      count\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery galleryMoviesTitles(\n  $first: Int\n  $skip: Int\n  $where: MoviesWhereInput\n  $orderBy: MoviesOrderByInput\n) {\n  page: movies_idConnection(\n    first: $first\n    skip: $skip\n    where: $where\n    orderBy: $orderBy\n  ) {\n    edges {\n      node {\n        id\n        createdAt\n        title\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery galleryMoviesTitles(\n  $first: Int\n  $skip: Int\n  $where: MoviesWhereInput\n  $orderBy: MoviesOrderByInput\n) {\n  page: movies_idConnection(\n    first: $first\n    skip: $skip\n    where: $where\n    orderBy: $orderBy\n  ) {\n    edges {\n      node {\n        id\n        createdAt\n        title\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getMovieById($id: ID!) {\n  movies(where: { id: $id }) {\n    id\n    createdAt\n    images {\n      id\n      fileName\n      url\n    }\n    title\n  }\n}\n"): (typeof documents)["\nquery getMovieById($id: ID!) {\n  movies(where: { id: $id }) {\n    id\n    createdAt\n    images {\n      id\n      fileName\n      url\n    }\n    title\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getMovieByTitle($title: String!) {\n  movies(where: { title: $title }) {\n    id\n    createdAt\n    images {\n      id\n      fileName\n      url\n    }\n    title\n  }\n}\n"): (typeof documents)["\nquery getMovieByTitle($title: String!) {\n  movies(where: { title: $title }) {\n    id\n    createdAt\n    images {\n      id\n      fileName\n      url\n    }\n    title\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;