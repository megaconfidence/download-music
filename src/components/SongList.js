/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import SongItem from './SongItem';

const SongList = ({song}) => {
  return (
    <div
      css={{
        minWidth: '50%',
        maxWidth: '700px',
        padding: ' 0 1rem',
        height: 'min-content',
        borderRadius: '24px',
        border: '10px solid #192734',
      }}
    >
      {song.map((s, k) => <SongItem key={k} {...s} />)}
    </div>
  );
};

export default SongList;
