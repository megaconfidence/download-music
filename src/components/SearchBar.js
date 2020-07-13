/**  @jsx jsx  */
import { useState, useRef, useEffect } from 'react';
import { jsx } from '@emotion/core';
import mq from './MediaQuery';
import client from '../client';
import { SEARCH } from '../query';
import SearchResult from './SearchResult';

const SearchBar = ({ history }) => {
  const inputElement = useRef(null);
  const focusColor = 'rgb(29, 161, 242)';
  const [result, setResult] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const resetSearch = () => {
    setResult({});
    setInputValue('');
    setIsLoading(false);
    setIsFocused(false);
  };

  const inputHandler = ({ target }) => {
    setInputValue(target.value);

    const duration = 500;
    clearTimeout(target._timer);
    target._timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const { data } = await client.query({
          query: SEARCH,
          variables: {
            input: { query: target.value.toLowerCase(), limit: 3 },
          },
        });
        setResult(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }, duration);
  };

  useEffect(() => {
    history.listen(() => {
      setTimeout(() => {
        resetSearch();
        window.document.activeElement.blur();
      }, 700);
    });
  }, [history]);

  return (
    <div
      tabIndex='1'
      onFocus={() => {
        setTimeout(() => {
          setIsFocused(true);
          inputElement.current.focus();
        }, 300);
      }}
      onBlur={() => {
        setTimeout(() => {
          setIsFocused(false);
        }, 300);
      }}
      css={{
        position: 'relative',
        alignItems: 'center',
        background: '#253341',
        display: 'inline-flex',
        borderRadius: '9999px',
        width: 'calc(100% - 0)',
        justifyContent: 'space-between',
        [mq[1]]: {
          width: '30rem',
        },
        '@media  ( max-width :  780px )': {
          width: '40rem',
        },
        border: `2px solid ${isFocused ? focusColor : 'transparent'}`,
      }}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {isLoading ? (
          <div css={{ margin: '0 10px' }}>
            <svg
              viewBox='0 0 32 32'
              css={{
                animationName: 'rotate',
                animationDuration: '0.75s',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',

                '@keyframes rotate': {
                  '0%': {
                    transform: 'rotate(0deg)',
                  },
                  '100%': {
                    transform: 'rotate(360deg)',
                  },
                },
              }}
            >
              <circle
                cx='16'
                cy='16'
                fill='none'
                r='14'
                strokeWidth='4'
                style={{ stroke: 'rgb(29, 161, 242)', opacity: '0.2' }}
              ></circle>
              <circle
                cx='16'
                cy='16'
                fill='none'
                r='14'
                strokeWidth='4'
                style={{
                  strokeDasharray: '80px',
                  strokeDashoffset: '60px',
                  stroke: 'rgb(29, 161, 242)',
                }}
              ></circle>
            </svg>
          </div>
        ) : (
          <svg
            viewBox='0 0 24 24'
            css={{ margin: '0 10px', fill: isFocused ? focusColor : '#a6a5a5' }}
          >
            <g>
              <path d='M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z'></path>
            </g>
          </svg>
        )}
        <input
          ref={inputElement}
          css={{
            color: '#fff',
            height: '3rem',
            border: 'unset',
            background: 'unset',
            '@media  ( max-width :  420px )': {
              width: '200px',
            },
            '@media  ( max-width :  320px )': {
              width: '150px',
            },
          }}
          value={inputValue}
          onChange={inputHandler}
          type='text'
          placeholder='Search'
        />
      </div>
      <div
        css={{
          width: '24px',
          height: '24px',
          display: 'flex',
          cursor: 'pointer',
          marginRight: '10px',
          borderRadius: '9999px',
          justifyContent: 'center',
          backgroundColor: 'rgb(29, 161, 242)',
          visibility: isFocused ? 'visable' : 'hidden',
        }}
        onClick={() => {
          resetSearch();
          inputElement.current.focus();
        }}
      >
        <svg
          viewBox='0 0 15 15'
          css={{
            fill: '#fff',
            width: '12px',
          }}
        >
          <g>
            <path d='M8.914 7.5l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L7.5 6.086 1.707.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L6.086 7.5.293 13.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L7.5 8.914l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L8.914 7.5z'></path>
          </g>
        </svg>
      </div>

      {!isLoading && isFocused && inputValue ? (
        <SearchResult {...result} />
      ) : null}
    </div>
  );
};

export default SearchBar;
