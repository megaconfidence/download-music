/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import SongItem from './SongItem';

const SongList = () => {
  return (
    <div
      css={{
        width: '50%',
        padding: ' 0 1rem',
        borderRadius: '24px',
        border: '10px solid #192734',
      }}
    >
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
    </div>
  );
};

export default SongList;
