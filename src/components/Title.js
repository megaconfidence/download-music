/**  @jsx jsx  */
import { jsx } from '@emotion/core';

const Title = ({title = ''}) => {
  return (
    <div
      css={{
        fontSize: '1.5rem',
        fontStyle: 'italic',
        marginLeft: '-20px',
        marginRight: '-20px',
        marginBottom: '20px',
        padding: '0 20px 20px',
        textTransform: 'capitalize',
        borderBottom: '1px solid #38444d',
      }}
    >
      {title}
    </div>
  );
};
export default Title;
