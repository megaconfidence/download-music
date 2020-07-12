/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import SongList from '../components/SongList';
import AlbumInfo from '../components/AlbumInfo';
import mq from '../components/MediaQuery';
import { GET_ALBUM } from '../query';
import { useQuery } from '@apollo/react-hooks';

const Album = ({ location: { pathname } }) => {
  const { data, loading, error } = useQuery(GET_ALBUM, {
    variables: {
      id: pathname.replace('/album/', ''),
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
      <AlbumInfo {...data.album} />
      <SongList song={data.album.song} />
    </div>
  );
};

export default Album;
