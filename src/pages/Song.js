/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import SongList from '../components/SongList';
import AlbumInfo from '../components/AlbumInfo';
import mq from '../components/MediaQuery';
import { GET_SONG } from '../query';
import { useQuery } from '@apollo/react-hooks';

const Song = ({ location: { pathname } }) => {
  const { data, loading, error } = useQuery(GET_SONG, {
    variables: {
      id: pathname.replace('/song/', ''),
    },
  });
  if (loading) return null;
  if (error) {
    console.log(error)
    return <p css={{ fontSize: '1rem' }}>An error occured!</p>;
  }
  return (
    <div
      css={{
        display: 'block',
        justifyContent: 'center',
        [mq[1]]: {
          display: 'flex',
        },
      }}
    >
      <AlbumInfo {...data.song.album} />
      <SongList song={data.song.album.song} highlightID={data.song.id}/>
    </div>
  );
};

export default Song;
