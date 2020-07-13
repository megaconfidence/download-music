/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { GET_ARTIST } from '../query';
import mq from '../components/MediaQuery';
import { useQuery } from '@apollo/react-hooks';
import AlbumCard from '../components/AlbumCard';
import Loading from '../components/Loading';

const Home = ({ history, location: { pathname, search } }) => {
  const { data, loading, error } = useQuery(GET_ARTIST, {
    variables: {
      id: pathname.replace('/artist/', ''),
    },
  });

  if (loading) return <Loading />;
  if (error) {
    console.log(error)
    return <p css={{ fontSize: '1rem' }}>An error occured!</p>;
  }
  return (
    <div>
      <div
        css={{
          fontSize: '2rem',
          marginBottom: '2rem',
          textTransform: 'capitalize',
        }}
      >
       albums by {data.artist.name}
      </div>
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
        {data.artist.album.map((album, k) => (
          <AlbumCard key={k} {...album} />
        ))}
      </div>
    </div>
  );
};

export default Home;
