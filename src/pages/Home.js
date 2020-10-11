/**  @jsx jsx  */
import mq from '../components/mq';
import { jsx } from '@emotion/core';
import { GET_HOME } from '../query';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import AlbumCard from '../components/AlbumCard';
import Title from '../components/Title';

const Home = () => {
  // 173
  const [page, setPage] = useState(1);

  useEffect(() => {
    const p = Math.floor(Math.random() * 20000) + 1;
    setPage(p);
  }, []);

  const { data, loading, error } = useQuery(GET_HOME, {
    variables: {
      input: { page, limit: 8 },
    },
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div>
      <div
        css={{
          display: 'flex',
          fontSize: '1rem',
          fontStyle: 'italic',
          margin: '0 -10px 20px',
          padding: '0 0 10px 10px',
          justifyContent: 'space-evenly',
          borderBottom: '1px solid #38444d',
          [mq[2]]: {
            margin: '0 -20px 20px',
            padding: '0 0 20px 20px',
          },
        }}
      >
        <div>
          <div
            css={{
              color: '#9cabb7',
              marginRight: '10px',
              display: 'inline-block',
            }}
          >
            Songs:
          </div>
          {data.size.song.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </div>
        <div>
          <div
            css={{
              color: '#9cabb7',
              marginRight: '10px',
              display: 'inline-block',
            }}
          >
            Albums:
          </div>
          {data.size.album.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </div>
        <div>
          <div
            css={{
              color: '#9cabb7',
              marginRight: '10px',
              display: 'inline-block',
            }}
          >
            Artist:
          </div>
          {data.size.artist.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </div>
        <div>
          <div
            css={{
              color: '#9cabb7',
              marginRight: '10px',
              display: 'inline-block',
            }}
          >
            Genre:
          </div>
          {data.size.genre.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </div>
      </div>
      <Title title='home / random albums' />
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
        {data.albums.map((album, k) => (
          <AlbumCard key={k} {...album} />
        ))}
      </div>
    </div>
  );
};

export default Home;
