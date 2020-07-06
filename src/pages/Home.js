/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import SearchBar from '../components/SearchBar';
import AlbumCard from '../components/AlbumCard';

const Home = () => {
  return (
    <div css={{ margin: '0 15rem' }}>
      <div
        css={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}
      >
        <SearchBar />
      </div>
      <div css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 15rem)',
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
      </div>
    </div>
  );
};

export default Home;
