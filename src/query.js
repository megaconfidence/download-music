import gql from 'graphql-tag';

export const GET_ALBUMS = gql`
  query GetAlbums($input: PageInput!) {
    albums(input: $input) {
      id
      url
      name
      year
      image
      artist {
        name
      }
      genre {
        name
      }
    }
  }
`;
export const ALBUMS_BY_GENRE = gql`
  query AlbumsByGenre($input: PageByIdInput!) {
    albumByGenre(input: $input) {
      id
      url
      name
      year
      image
      artist {
        name
      }
      genre {
        name
      }
    }
  }
`;

export const ALPHA_ALBUMS = gql`
  query albumsByAlpha($input: AlphaInput!) {
    albumsByAlpha(input: $input) {
      id
      url
      name
      year
      image
      artist {
        name
      }
      genre {
        name
      }
    }
  }
`;

export const ALPHA_ARTISTS = gql`
  query artistsByAlpha($input: AlphaInput!) {
    artistsByAlpha(input: $input) {
      id
      name
      image
    }
  }
`;

export const GET_ARTIST = gql`
  query GetArtist($id: ID!) {
    artist(id: $id) {
      id
      name
      album {
        id
        url
        name
        year
        image
        artist {
          name
        }
        genre {
          name
        }
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
      image
      artist {
        name
      }
      genre {
        name
      }
      song {
        id
        url
        name
        playId
        duration
      }
    }
  }
`;

export const GET_LINKS = gql`
  query GetLinks($url: String!) {
    songLinks(url: $url) {
      url
      playId
    }
  }
`;

export const GET_SONG = gql`
  query GetSong($id: ID!) {
    song(id: $id) {
      id
      album {
        id
        url
        name
        year
        image
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
  }
`;

export const SEARCH = gql`
  query Search($input: SearchInput!) {
    searchSong(input: $input) {
      id
      name
      artist {
        name
      }
    }
    searchAlbum(input: $input) {
      id
      name
      image
      artist {
        name
      }
    }
    searchArtist(input: $input) {
      id
      name
      image
    }
  }
`;

export const GET_GENRES = gql`
  query GetGenres($input: PageInput!) {
    genres(input: $input) {
      id
      name
    }
  }
`;
