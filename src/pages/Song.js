/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import SongList from '../components/SongList';
import mq from '../components/MediaQuery';

const Song = () => {
  return (
    <div
      css={{
        display: 'block',
        [mq[1]]: { display: 'flex', justifyContent: 'center' },
      }}
    >
      <SongList />
    </div>
  );
};

export default Song;
