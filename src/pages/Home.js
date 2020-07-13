/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { GET_ALBUMS } from '../query';
import mq from '../components/MediaQuery';
import NextPage from '../components/NextPage';
import { useQuery } from '@apollo/react-hooks';
import AlbumCard from '../components/AlbumCard';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';

const Home = ({ history, location: { pathname, search } }) => {
  // 173
  const [page, setPage] = useState(1);

  useEffect(() => {
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
        : Math.floor(Math.random() * 200) + 1;
    setPage(p);
  }, [search]);

  const { data, loading, error } = useQuery(GET_ALBUMS, {
    variables: {
      input: { page, limit: 8 },
    },
  });

  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <p css={{ fontSize: '1rem' }}>...something went wrong</p>;
  }
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
          gridTemplateColumns: 'repeat(2, auto)',
          [mq[1]]: {
            gridTemplateColumns: 'repeat(auto-fill, 15rem)',
          },
        }}
      >
        {data.albums.map((album, k) => (
          <AlbumCard key={k} {...album} />
        ))}
      </div>
      <NextPage {...history} />
    </div>
  );
};

export default Home;
