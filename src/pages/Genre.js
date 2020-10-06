import { useQuery } from '@apollo/react-hooks';
/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Error from '../components/Error';
import Loading from '../components/Loading';
import mq from '../components/mq';
import NextPage from '../components/NextPage';
import { GET_GENRES } from '../query';
import queryString from 'query-string';
import Title from '../components/Title';

const Genre = ({ history, location: { search } }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    const p = Number(queryString.parse(search)['page']) || 1;

    setPage(p);
  }, [search]);

  const { data, loading, error } = useQuery(GET_GENRES, {
    variables: {
      input: { page, limit: 24 },
    },
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div>
      <Title title='genre' />
      <div
        css={{
          display: 'grid',
          gridGap: '2rem',
          justifyContent: 'center',
          gridTemplateColumns: 'repeat(2, calc(50% - 2rem))',
          [mq[1]]: {
            gridGap: '4rem 2rem',
            gridTemplateColumns: 'repeat(4, calc(25% - 2rem))',
          },
        }}
      >
        {data.genres.map((i, k) => (
          <Link
            css={{
              all: 'unset',
              cursor: 'pointer',
              fontSize: '1.5rem',
              textAlign: 'center',
              textTransform: 'capitalize',
              textDecoration: 'underline',
              ':hover': {
                color: 'rgb(29, 161, 242)',
              },
              ':visited': {
                color: '#fff',
              },
            }}
            key={k}
            to={`genre/${i.id}`}
          >
            <div>{i.name}</div>
          </Link>
        ))}
      </div>
      <NextPage {...history} />
    </div>
  );
};

export default Genre;
