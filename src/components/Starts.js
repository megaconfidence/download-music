/**  @jsx jsx  */
import mq from './mq';
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

const StartsItem = ({ title, data, link }) => (
  <div>
    <Link to={link}>
      <div
        css={{
          color: '#9cabb7',
          marginRight: '10px',
          display: 'inline-block',
          textTransform: 'capitalize',
        }}
      >
        {title}:
      </div>
      {data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    </Link>
  </div>
);

const Starts = ({ data }) => (
  <div
    css={{
      display: 'flex',
      fontSize: '1rem',
      fontStyle: 'italic',
      margin: '0 -10px 20px',
      padding: '0 0 10px 10px',
      justifyContent: 'space-evenly',
      borderBottom: '1px solid #38444d',
      [mq[2]]: {
        margin: '0 -20px 20px',
        padding: '0 0 20px 20px',
      },
      a: {
        all: 'unset',
        cursor: 'pointer',
      },
    }}
  >
    <StartsItem title='songs' data={data.song} link='/' />
    <StartsItem title='albums' data={data.album} link='/cat/album' />
    <StartsItem title='artists' data={data.artist} link='/cat/artist' />
    <StartsItem title='genres' data={data.genre} link='/genre' />
  </div>
);

export default Starts;
