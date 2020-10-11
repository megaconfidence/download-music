/**  @jsx jsx  */
import { jsx } from '@emotion/core';

const DownloadBtn = ({ callback, highlight }) => (
  <span
    onClick={callback}
    className='single_download_btn'
    css={{
      cursor: 'pointer',
      margin: '0 0 0 10px',
    }}
  >
    <svg
      height='512'
      viewBox='0 0 512 512'
      width='512'
      xmlns='http://www.w3.org/2000/svg'
      css={{
        pointerEvents: 'none',
        fill: highlight ? '#15202b' : 'rgb(29, 161, 242)',
      }}
    >
      <g id='Solid'>
        <path d='m239.029 384.97a24 24 0 0 0 33.942 0l90.509-90.509a24 24 0 0 0 0-33.941 24 24 0 0 0 -33.941 0l-49.539 49.539v-262.059a24 24 0 0 0 -48 0v262.059l-49.539-49.539a24 24 0 0 0 -33.941 0 24 24 0 0 0 0 33.941z' />
        <path d='m464 232a24 24 0 0 0 -24 24v184h-368v-184a24 24 0 0 0 -48 0v192a40 40 0 0 0 40 40h384a40 40 0 0 0 40-40v-192a24 24 0 0 0 -24-24z' />
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
          <div css={{ display: 'flex', alignItems: 'center' }}>
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
