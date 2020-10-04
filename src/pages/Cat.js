/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import mq from '../components/mq';
import Title from '../components/Title';

const Cat = ({ location: { pathname } }) => {
  let i;
  return (
    <div>
      <Title title={pathname.split('/').slice(-1)[0]} />
      <div
        css={{
          display: 'grid',
          gridGap: '2rem',
          justifyContent: 'center',
          gridTemplateColumns: 'repeat(2, calc(50% - 2rem))',
          [mq[1]]: {
            gridTemplateColumns: 'repeat(4, calc(25% - 2rem))',
          },
        }}
      >
        {[...Array(26)]
          .map((_) => String.fromCharCode(i++), (i = 97))
          .map((i) => (
            <Link
              css={{
                all: 'unset',
                cursor: 'pointer',
                fontSize: '1.5rem',
                textAlign: 'center',
                textTransform: 'uppercase',
                textDecoration: 'underline',
                ':hover': {
                  color: 'rgb(29, 161, 242)',
                },
              }}
              key={i}
              to={`${pathname}/${i}`}
            >
              <div>{i}</div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Cat;
