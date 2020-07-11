/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { GET_ALBUMS } from '../query';
import mq from '../components/MediaQuery';
import NextPage from '../components/NextPage';
import { useQuery } from '@apollo/react-hooks';
import AlbumCard from '../components/AlbumCard';

const Home = ({ history, location: { pathname, search } }) => {
  const page =
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

  const { data, loading, error } = useQuery(GET_ALBUMS, {
    variables: {
      input: { page, limit: 5 },
    },
  });

  if (loading) return null;
  if (error) return <p css={{ fontSize: '1rem' }}>An error occured!</p>;
  return (
    <div>
      <div
        css={{
          display: 'grid',
          gridGap: '1rem',
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
