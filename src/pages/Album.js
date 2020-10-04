/**  @jsx jsx  */
import client from '../client';
import { useState } from 'react';
import { Fragment } from 'react';
import { useEffect } from 'react';
import mq from '../components/mq';
import { jsx } from '@emotion/core';
import Error from '../components/Error';
import multiDownload from 'multi-download';
import Loading from '../components/Loading';
import SongList from '../components/SongList';
import { useQuery } from '@apollo/react-hooks';
import AlbumInfo from '../components/AlbumInfo';
import { GET_ALBUM, GET_LINKS, GET_SONG } from '../query';
import Title from '../components/Title';

const Album = ({ location: { pathname } }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [multiLinks, setMultiLinks] = useState([]);
  const [gqlQuery, setGqlQuery] = useState(GET_ALBUM);
  const id = pathname.replace('/album/', '').replace('/song/', '');

  const { data, loading, error } = useQuery(gqlQuery, {
    variables: {
      id,
    },
  });

  useEffect(() => {
    if (pathname.includes('/song/')) {
      setGqlQuery(GET_SONG);
    }
  }, [pathname]);

  const getLinks = async (callback = () => {}, playId = '') => {
    setIsLoading(true);
    const info = data.album ? data.album : data.song.album;

    try {
      const links = await client.query({
        query: GET_LINKS,
        variables: {
          url: info.url,
        },
      });

      const newSong = [];

      for (const s of info.song) {
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
          id,
        },
        data: {
          album: { ...info, song: newSong },
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
    <div>
      <Title title={data.album.name} />
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
        {data.album ? (
          <Fragment>
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
          </Fragment>
        ) : (
          <Fragment>
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
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Album;
