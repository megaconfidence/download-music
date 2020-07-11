import gql from 'graphql-tag';

export const GET_ALBUMS = gql`
  query GetAlbums($input: PageInput!) {
    albums(input: $input) {
      id
      url
      name
      year
      cover
      artist {
        name
      }
      genre {
        name
      }
    }
  }
`;

export const GET_ALBUM = gql`
  query GetAlbum($id: ID!) {
    album(id: $id) {
      id
      url
      name
      year
      cover
      artist {
        name
      }
      genre {
        name
      }
      song {
        id
        name
        playId
        duration
      }
    }
  }
`;

export const SEARCH = gql`
  query Search($input: SearchInput!) {
    searchSong(input: $input) {
      id
      name
    }
    searchAlbum(input: $input) {
      id
      name
    }
    searchArtist(input: $input) {
      id
      name
    }
  }
`;
