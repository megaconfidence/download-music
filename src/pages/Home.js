/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import AlbumCard from '../components/AlbumCard';
import mq from '../components/MediaQuery';

const Home = () => {
  return (
    <div>
      <div css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, auto)',
        [mq[1]]: {
          gridTemplateColumns: 'repeat(auto-fill, 15rem)',
        },
        gridGap: '1rem',
        justifyContent: 'center'
      }}>
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
      </div>
    </div>
  );
};

export default Home;
