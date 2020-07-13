/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import mq from './MediaQuery';

const DownloadBtn = ({ callback }) => (
  <span
    onClick={callback}
    className='single_download_btn'
    css={{
      cursor: 'pointer',
      margin: '-10px 0 0 10px',
    }}
  >
    <svg
      viewBox='0 0 24 20'
      css={{
        pointerEvents: 'none',
        fill: 'rgb(29, 161, 242)',
      }}
    >
      <g>
        <path
          d='M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z'
          transform='scale (1, -1)'
          transform-origin='center'
        ></path>
        <path d='M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z'></path>
      </g>
    </svg>
  </span>
);

const SongItem = ({
  name,
  url,
  playId,
  duration,
  getLinks,
  downloadOne,
  highlight = false,
}) => {
  return (
    <div
      css={{
        height: '3rem',
        margin: '1rem 0',
        fontSize: '1rem',
        display: 'flex',
        padding: '0 10px',
        borderRadius: '14px',
        alignItems: 'center',
        backgroundColor: `${highlight ? 'rgba(29, 161, 242, .85)' : '#192734'}`,
        justifyContent: 'space-between',

        '&:hover': {
          backgroundColor: `${
            highlight ? 'rgba(29, 161, 242, .65)' : 'rgba(255, 255, 255, 0.1)'
          }`,
        },
      }}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          css={{
            maxWidth: '300px',
            marginLeft: '10px',
            [mq[1]]: {
              maxWidth: '300px',
            },
            [mq[2]]: {
              maxWidth: '400px',
            },
            '@media ( min-width :  400px) and  ( max-width :  440px )': {
              maxWidth: '200px',
            },
            '@media  ( max-width :  400px )': {
              maxWidth: '150px',
            },
            '@media  ( max-width :  320px )': {
              maxWidth: '120px',
            },
            '@media  ( min-width :  770px) and (max-width :  970px )': {
              maxWidth: '120px',
            },
            '@media  ( min-width :  970px) and (max-width :  1150px )': {
              maxWidth: '150px',
            },
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            textTransform: 'capitalize',
          }}
        >
          {name}
        </div>
      </div>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <time>{duration}</time>
        </div>
        {url ? (
          <DownloadBtn
            callback={() => {
              downloadOne(url);
            }}
          />
        ) : (
          <DownloadBtn
            callback={() => {
              getLinks(downloadOne, playId);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SongItem;
