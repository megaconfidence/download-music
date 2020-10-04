/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { GET_ARTIST } from '../query';
import mq from '../components/mq';
import { useQuery } from '@apollo/react-hooks';
import AlbumCard from '../components/AlbumCard';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Title from '../components/Title';

const Home = ({ history, location: { pathname, search } }) => {
  const { data, loading, error } = useQuery(GET_ARTIST, {
    variables: {
      id: pathname.replace('/artist/', ''),
    },
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div>
      <Title title={`albums by ${data.artist.name}`} />
      <div
        css={{
          display: 'grid',
          gridGap: '1rem',
          '@media  ( max-width :  549px )': {
            gridGap: '0.65rem',
          },
          justifyContent: 'center',
          gridTemplateColumns: 'repeat(2, calc(50% - 1rem))',
          [mq[1]]: {
            gridTemplateColumns: 'repeat(4, calc(25% - 1rem))',
          },
        }}
      >
        {data.artist.album.map((album, k) => (
          <AlbumCard key={k} {...album} />
        ))}
      </div>
    </div>
  );
};

export default Home;
