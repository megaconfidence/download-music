/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import SongList from '../components/SongList';
import AlbumInfo from '../components/AlbumInfo';
import mq from '../components/MediaQuery';
import { GET_ALBUM, GET_LINKS } from '../query';
import client from '../client';
import { useQuery } from '@apollo/react-hooks';
import Loading from '../components/Loading';
import { useState } from 'react';
import multiDownload from 'multi-download';

const Album = ({ location: { pathname } }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [multiLinks, setMultiLinks] = useState([]);
  const id = pathname.replace('/album/', '');
  const { data, loading, error } = useQuery(GET_ALBUM, {
    variables: {
      id,
    },
  });
  const getLinks = async (callback = () => {}, playId = '') => {
    setIsLoading(true);
    try {
      const links = await client.query({
        query: GET_LINKS,
        variables: {
          url: data.album.url,
        },
      });

      const newSong = data.album.song.map((s, k) => {
        for (const i in links.data.songLinks) {
          if (s.playId === links.data.songLinks[i].playId) {
            return { ...s, url: links.data.songLinks[i].url };
          }
        }
      });

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
          id,
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
  if (error) {
    console.log(error);
    return <p css={{ fontSize: '1rem' }}>...something went wrong</p>;
  }

  return (
    <div
      css={{
        display: 'block',
        marginBottom: '3rem',
        justifyContent: 'center',
        [mq[1]]: {
          display: 'flex',
        },
      }}
    >
      {isLoading ? <Loading background={'#0f2f40a3'} /> : null}
      <AlbumInfo
        {...data.album}
        getLinks={getLinks}
        downloadAll={downloadAll}
        hasGottenLinks={data.album.song[0].url ? true : false}
      />
      <SongList
        getLinks={getLinks}
        song={data.album.song}
        downloadOne={downloadOne}
      />
    </div>
  );
};

export default Album;
