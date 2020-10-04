/**  @jsx jsx  */
import mq from '../components/mq';
import { jsx } from '@emotion/core';
import { ALPHA_ALBUMS, ALPHA_ARTISTS } from '../query';
import Error from '../components/Error';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import NextPage from '../components/NextPage';
import { useQuery } from '@apollo/react-hooks';
import AlbumCard from '../components/AlbumCard';
import ArtistCard from '../components/ArtistCard';

const CatPage = ({ history, location: { pathname, search } }) => {
  const [page, setPage] = useState(1);
  const [gqlQuery, setGqlQuery] = useState(ALPHA_ARTISTS);

  const { data, loading, error } = useQuery(gqlQuery, {
    variables: {
      input: {
        limit: 8,
        page: String(page),
        alpha: pathname.split('/').slice(-1)[0],
      },
    },
  });

  useEffect(() => {
    if (pathname.includes('/cat/album')) {
      setGqlQuery(ALPHA_ALBUMS);
    }
    const p =
      search && search.includes('page=')
        ? Number(
            search
              .replace('?', '')
              .split('&')
              .filter((q) => q.includes('page='))
              .join()
              .replace('page=', '')
          )
        : 1;
    setPage(p);
  }, [pathname, search]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div>
      <div
        css={{
          display: 'grid',
          gridGap: '1rem',
          '@media  ( max-width :  549px )': {
            gridGap: '0.5rem',
          },
          justifyContent: 'center',
          gridTemplateColumns: 'repeat(2, calc(50% - 1rem))',
          [mq[1]]: {
            gridTemplateColumns: 'repeat(4, calc(25% - 1rem))',
          },
        }}
      >
        {data.alphaArtists
          ? data.alphaArtists.map((a, k) => <ArtistCard key={k} {...a} />)
          : data.alphaAlbums.map((a, k) => <AlbumCard key={k} {...a} />)}
      </div>
      <NextPage {...history} />
    </div>
  );
};

export default CatPage;
