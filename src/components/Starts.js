/**  @jsx jsx  */
import mq from './mq';
import { jsx } from '@emotion/core';

const StartsItem = ({ title, data }) => (
  <div>
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
  </div>
);

const Starts = ({data}) => (
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
    }}
  >
    <StartsItem title='songs' data={data.song} />
    <StartsItem title='albums' data={data.album} />
    <StartsItem title='artist' data={data.artist} />
    <StartsItem title='genre' data={data.genre} />
  </div>
);

export default Starts;
