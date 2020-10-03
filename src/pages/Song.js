/**  @jsx jsx  */
import client from '../client';
import { useState } from 'react';
import mq from '../components/mq';
import { jsx } from '@emotion/core';
import { GET_SONG } from '../query';
import Error from '../components/Error';
import multiDownload from 'multi-download';
import Loading from '../components/Loading';
import SongList from '../components/SongList';
import { useQuery } from '@apollo/react-hooks';
import AlbumInfo from '../components/AlbumInfo';
import { GET_ALBUM, GET_LINKS } from '../query';

const Song = ({ location: { pathname } }) => {
  const [multiLinks, setMultiLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { data, loading, error } = useQuery(GET_SONG, {
    variables: {
      id: pathname.replace('/song/', ''),
    },
  });

  const getLinks = async (callback = () => {}, playId = '') => {
    setIsLoading(true);
    try {
      const links = await client.query({
        query: GET_LINKS,
        variables: {
          url: data.song.album.url,
        },
      });

      const newSong = [];

      for (const s of data.album.song) {
        for (const i of links.data.songLinks) {
          if (s.playId === i.playId) {
            newSong.push({ ...s, url: i.url });
          }
        }
      }

      const mLinks = newSong.map((s) => s.url);
      setMultiLinks(mLinks);
      if (!playId) {
        callback(mLinks);
      } else {
        const [obj] = newSong.filter((s) => s.playId === playId);
        callback(obj.url);
      }

      client.writeQuery({
        query: GET_ALBUM,
        variables: {
          id: data.song.album.song,
        },
        data: {
          album: { ...data.album, song: newSong },
        },
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  
  const downloadAll = (links = []) => {
    if (links.length) {
      multiDownload(links);
    } else {
      multiDownload(multiLinks);
    }
  };
  const downloadOne = (link) => {
    multiDownload([link]);
  };

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div
      css={{
        display: 'block',
        [mq[2]]: {
          display: 'flex',
          justifyContent: 'center',
        },
      }}
    >
      {isLoading ? <Loading background={'#0f2f40a3'} /> : null}
      <AlbumInfo
        {...data.song.album}
        getLinks={getLinks}
        downloadAll={downloadAll}
        hasGottenLinks={data.song.album.song[0].url ? true : false}
      />
      <SongList
        getLinks={getLinks}
        downloadOne={downloadOne}
        highlightID={data.song.id}
        song={data.song.album.song}
      />
    </div>
  );
};

export default Song;
