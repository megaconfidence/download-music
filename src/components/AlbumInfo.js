/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import mq from './MediaQuery';

const DownloadAll = ({ callback }) => {
  const blue = 'rgb(29, 161, 242)';

  return (
    <div
      css={{
        color: blue,
        padding: '0.8rem',
        margin: '1rem 0',
        fontSize: '0.8rem',
        [mq[1]]: {
          padding: '1rem',
          fontSize: '1rem',
        },
        cursor: 'pointer',
        textAlign: 'center',
        borderRadius: '9999px',
        border: `2px solid ${blue}`,
      }}
      className='multi_download_btn'
      onClick={callback}
    >
      Download All
    </div>
  );
};

const AlbumInfo = ({
  name,
  year,
  cover,
  artist,
  genre,
  getLinks,
  hasGottenLinks,
  downloadAll,
}) => {
  return (
    <div
      css={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem',
        [mq[1]]: {
          width: '15rem',
          margin: '0 2rem 2rem',
          display: 'block',
        },
      }}
    >
      <div
        css={{
          width: '220px',
          height: '220px',
          backgroundSize: 'cover',
          marginRight: '1rem',
          [mq[1]]: {
            width: '15rem',
            height: '15rem',
            marginRight: '0',
            borderRadius: '14px',
          },
          borderRadius: '4px',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${cover.replace(
            'http://cdn-41.myzcloud.pro',
            'https://cdn-41-a.myzcloud.me'
          )})`,
        }}
      />
      <div>
        <table
          css={{
            fontSize: '0.9rem',
            [mq[1]]: {
              margin: '1rem 0 0',
            },
            td: {
              padding: '5px 0 ',
              '&:first-of-type': {
                color: '#80919e',
              },
              '&:last-of-type': {
                paddingLeft: '5px',
                textTransform: 'capitalize',
              },
            },
          }}
        >
          <tbody>
            <tr>
              <td>Artist</td>
              <td> {artist.map((a) => a.name).join(' / ')}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Year</td>
              <td>
                <time>{year}</time>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Genre</td>
              <td> {genre.map((a) => a.name).join(' / ')}</td>
            </tr>
          </tbody>
        </table>
        {hasGottenLinks ? (
          <DownloadAll callback={downloadAll} />
        ) : (
          <DownloadAll
            callback={() => {
              getLinks(downloadAll);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default AlbumInfo;
