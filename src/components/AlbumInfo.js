/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import mq from './MediaQuery';

const AlbumInfo = ({ name, year, cover, artist, genre }) => {
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
          width: '16rem',
          height: '9rem',
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
          backgroundImage:
            `url(${cover})`,
        }}
      />
      <table
        css={{
          fontSize: '0.7rem',
          [mq[1]]: {
            fontSize: '1rem',
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
    </div>
  );
};

export default AlbumInfo;
