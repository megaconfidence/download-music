/**  @jsx jsx  */
import mq from '../components/mq';
import { jsx } from '@emotion/core';
import { ALPHA_ALBUMS, ALPHA_ARTISTS } from '../query';
import Error from '../components/Error';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import NextPage from '../components/NextPage';
import { useQuery } from '@apollo/react-hooks';
import AlbumCard from '../components/AlbumCard';
import ArtistCard from '../components/ArtistCard';
import Title from '../components/Title';

const CatPage = ({ history, location: { pathname, search } }) => {
  const cat = pathname.split('/')[2];
  const [page, setPage] = useState(1);
  const alpha = pathname.split('/').slice(-1)[0];
  const [gqlQuery, setGqlQuery] = useState(ALPHA_ARTISTS);
  
  const { data, loading, error } = useQuery(gqlQuery, {
    variables: {
      input: {
        alpha,
        limit: 8,
        page: String(page),
      },
    },
  });

  useEffect(() => {
    if (pathname.includes('/cat/album')) {
      setGqlQuery(ALPHA_ALBUMS);
    }
    const p = String(queryString.parse(search)['page']) || 1;
    setPage(p);
  }, [pathname, search]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div>
      <Title title={`${cat} / ${alpha}`} />
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
        {data.artistsByAlpha
          ? data.artistsByAlpha.map((a, k) => <ArtistCard key={k} {...a} />)
          : data.albumsByAlpha.map((a, k) => <AlbumCard key={k} {...a} />)}
      </div>
      <NextPage {...history} />
    </div>
  );
};

export default CatPage;
