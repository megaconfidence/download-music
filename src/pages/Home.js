/**  @jsx jsx  */
import mq from '../components/mq';
import { jsx } from '@emotion/core';
import { GET_HOME } from '../query';
import Error from '../components/Error';
import Title from '../components/Title';
import Starts from '../components/Starts';
import Loading from '../components/Loading';
import { useQuery } from '@apollo/react-hooks';
import AlbumCard from '../components/AlbumCard';

const Home = () => {
  const { data, loading, error } = useQuery(GET_HOME);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div>
      <Starts data={data.size} />
      <Title title='home / top downloads' />
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
        {data.topDownloads.map((album, k) => (
          <AlbumCard key={k} {...album} />
        ))}
      </div>
    </div>
  );
};

export default Home;
