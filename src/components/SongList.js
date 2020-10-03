/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import mq from './mq';
import SongItem from './SongItem';

const SongList = ({ song, highlightID, getLinks, downloadOne }) => {
  return (
    <div
      css={{
        [mq[2]]: {
          width: '50%',
        },
        padding: ' 0 1rem',
        height: 'min-content',
        borderRadius: '24px',
        border: '10px solid #192734',
      }}
    >
      {song
        .sort((a, b) =>
          a.id === highlightID ? -1 : b.id === highlightID ? 1 : 0
        )
        .map((s, k) => (
          <SongItem
            {...s}
            key={k}
            getLinks={getLinks}
            downloadOne={downloadOne}
            highlight={s.id === highlightID ? true : false}
          />
        ))}
    </div>
  );
};

export default SongList;
