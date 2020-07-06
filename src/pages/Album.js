/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import SongList from '../components/SongList';
import AlbumInfo from '../components/AlbumInfo';

const Album = () => {
  return (
    <div css={{ margin: '5rem 15rem 0', display: 'flex' }}>
      <AlbumInfo />
      <SongList />{' '}
    </div>
  );
};

export default Album;
