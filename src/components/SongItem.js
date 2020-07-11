/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import mq from './MediaQuery';

const SongItem = ({ name, duration, artist=[] }) => {
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
        backgroundColor: '#192734',
        justifyContent: 'space-between',

        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
        <div>
          <svg
            viewBox='0 0 24 24'
            css={{ fill: '#fff', width: '20px', cursor: 'pointer' }}
          >
            <g>
              <path d='M20.436 11.37L5.904 2.116c-.23-.147-.523-.158-.762-.024-.24.132-.39.384-.39.657v18.5c0 .273.15.525.39.657.112.063.236.093.36.093.14 0 .28-.04.402-.117l14.53-9.248c.218-.138.35-.376.35-.633 0-.256-.132-.495-.348-.633z'></path>
            </g>
          </svg>
        </div>
        <div
          css={{
            maxWidth: '200px',
            marginLeft: '10px',
            [mq[1]]: {
              maxWidth: '300px',
            },
            [mq[2]]: {
              maxWidth: '400px',
            },
          }}
        >
          <div
            css={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              textTransform: 'capitalize',
            }}
          >
            {name}
          </div>
          <div css={{ fontSize: '0.8rem', textTransform: 'capitalize' }}>
            {artist.map((a) => a.name).join(' / ')}
          </div>
        </div>
      </div>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <time>{duration}</time>
        </div>
        <svg
          viewBox='0 0 24 20'
          css={{ fill: '#fff', margin: '-10px 0 0 10px', cursor: 'pointer' }}
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
      </div>
    </div>
  );
};

export default SongItem;
