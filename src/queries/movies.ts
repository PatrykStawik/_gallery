import { gql } from '../__generated__/gql';

export const movies = gql(`
query galleryMovies(
  $first: Int
  $skip: Int
  $where: MoviesWhereInput
  $orderBy: MoviesOrderByInput
) {
  page: movies_idConnection(
    first: $first
    skip: $skip
    where: $where
    orderBy: $orderBy
  ) {
    edges {
      node {
        id
        createdAt
        id
        images {
          id
          fileName
          url
        }
        title
      }
    }
    aggregate {
      count
    }
  }
}
`)

export const moviesTitles = gql(`
query galleryMoviesTitles(
  $where: MoviesWhereInput
) {
  page: movies_idConnection(
    where: $where
    orderBy: title_ASC
  ) {
    edges {
      node {
        id
        createdAt
        title
      }
    }
  }
}
`)

export const movieById = gql(`
query getMovieById($id: ID!) {
  movies(where: { id: $id }) {
    id
    createdAt
    images {
      id
      fileName
      url
    }
    title
  }
}
`)

export const movieByTitle = gql(`
query getMovieByTitle($title: String!) {
  movies(where: { title: $title }) {
    id
    createdAt
    images {
      id
      fileName
      url
    }
    title
  }
}
`)