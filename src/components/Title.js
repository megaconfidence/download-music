/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import mq from './mq';

const Title = ({ title = '' }) => {
  return (
    <div
      css={{
        fontSize: '1.5rem',
        fontStyle: 'italic',
        padding: '0 0 10px 10px',
        textTransform: 'capitalize',
        borderBottom: '1px solid #38444d',
        margin: '0 -10px 20px',
        [mq[2]]: {
          padding: '0 0 20px 20px',
          margin: '0 -20px 20px',
        },
      }}
    >
      {title}
    </div>
  );
};
export default Title;
