/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import mq from './mq';

const DownloadBtn = ({ callback, highlight }) => (
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
        fill: highlight ? '#15202b' : 'rgb(29, 161, 242)',
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
  simple = false,
  getLinks = () => {},
  downloadOne = () => {},
  highlight = false,
}) => {
  return (
    <div
      css={{
        margin: '1rem 0',
        fontSize: '1rem',
        padding: '0 10px',
        borderRadius: '14px',
        backgroundColor: `${highlight ? 'rgba(29, 161, 242, .85)' : '#192734'}`,
        '&:hover': {
          backgroundColor: `${
            highlight ? 'rgba(29, 161, 242, .65)' : 'rgba(255, 255, 255, 0.1)'
          }`,
        },
      }}
    >
      <div
        css={{
          height: '3rem',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          css={{
            flex: 1,
            marginLeft: '10px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            textTransform: 'capitalize',
          }}
        >
          {name}
        </div>
        {!simple ? (
          <div
           css={{ display: 'flex', alignItems: 'center' }}
          >
            <div>
              <time>{duration}</time>
            </div>
            {url ? (
              <DownloadBtn
                highlight={highlight}
                callback={() => {
                  downloadOne(url);
                }}
              />
            ) : (
              <DownloadBtn
                highlight={highlight}
                callback={() => {
                  getLinks(downloadOne, playId);
                }}
              />
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SongItem;
