/**  @jsx jsx  */
import { jsx } from '@emotion/core';

const AlbumInfo = () => {
  return (
    <div css={{ width: '15rem', margin: '0 2rem 2rem' }}>
      <div
        css={{
          width: '15rem',
          height: '15rem',
          borderRadius: '14px',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'url(https://cdn-39.myzcloud.me/img/69/673337/13015037.jpg)',
        }}
      />
      <table
        css={{
          fontSize: '1rem',
          margin: '1rem 0 0',
          td: {
            padding: '5px 0 ',
            '&:first-child': {
              color: '#80919e',
            },
            '&:last-child': {
              paddingLeft: '5px',
            },
          },
        }}
      >
        <tr>
          <td>Artist</td>
          <td>Muse</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>Origin of Symmetry</td>
        </tr>
        <tr>
          <td>Year</td>
          <td>2010</td>
        </tr>
        <tr>
          <td>Genre</td>
          <td>Alternative Rock / Hard Rock / Space Rock</td>
        </tr>
      </table>
    </div>
  );
};

export default AlbumInfo;
