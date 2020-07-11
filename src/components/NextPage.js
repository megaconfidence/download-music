/**  @jsx jsx  */
import { jsx } from '@emotion/core';

const NextPage = ({ replace, location: { pathname, search } }) => {
  const page =
    search && search.includes('page=')
      ? Number(
          search
            .replace('?', '')
            .split('&')
            .filter((q) => q.includes('page='))
            .join()
            .replace('page=', '')
        )
      : 1;

  const navigate = (type) => {
    if (type === 'next') {
      replace(`${pathname}?page=${page + 1}`);
    } else {
      if (page !== 1) {
        replace(`${pathname}?page=${page - 1}`);
      }
    }
  };
  return (
    <div
      css={{
        display: 'flex',
        marginTop: '2rem',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        css={{
          padding: '5px',
          cursor: 'pointer',
          marginRight: '1rem',
          borderRadius: '9999px',
          '&:hover': {
            backgroundColor: 'rgba(29, 161, 242, 0.1)',
          },
        }}
        onClick={() => {
          navigate('prev');
        }}
      >
        <svg
          fill='#fff'
          viewBox='0 0 24 24'
          css={{ transform: 'rotate(90deg)' }}
        >
          <g>
            <path d='M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z'></path>
          </g>
        </svg>
      </div>
      <div
        css={{
          fontSize: '1rem',
        }}
      >
        {page}
      </div>
      <div
        css={{
          padding: '5px',
          cursor: 'pointer',
          marginLeft: '1rem',
          borderRadius: '9999px',
          '&:hover': {
            backgroundColor: 'rgba(29, 161, 242, 0.1)',
          },
        }}
        onClick={() => {
          navigate('next');
        }}
      >
        <svg
          fill='#fff'
          viewBox='0 0 24 24'
          css={{ transform: 'rotate(270deg)' }}
        >
          <g>
            <path d='M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z'></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default NextPage;
