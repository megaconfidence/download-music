/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import SongList from '../components/SongList';

const Album = () => {
  return <div css={{ margin: '0 15rem' }}><SongList /> </div>;
};

export default Album;
