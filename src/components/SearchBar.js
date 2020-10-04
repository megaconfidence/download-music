/**  @jsx jsx  */
import { useState, useRef, useEffect } from 'react';
import { jsx } from '@emotion/core';
import mq from './mq';
import queryString from 'query-string';

const SearchBar = ({ history }) => {
  const inputElement = useRef(null);
  const focusColor = 'rgb(29, 161, 242)';
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const goToSearchPage = () => {
    history.push(`/search?${queryString.stringify({ q: inputValue })}`);
  };
  useEffect(() => {
    history.listen(() => {
      setInputValue('');
      setIsFocused(false);
      window.document.activeElement.blur();
    });
  }, [history]);

  return (
    <div
      tabIndex='1'
      onFocus={() => {
        setIsFocused(true);
        inputElement.current.focus();
      }}
      onBlur={() => {
        setIsFocused(false);
      }}
      css={{
        position: 'relative',
        alignItems: 'center',
        background: '#253341',
        display: 'inline-flex',
        borderRadius: '9999px',
        justifyContent: 'space-between',
        width: '20rem',
        [mq[1]]: {
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
        <svg
          viewBox='0 0 24 24'
          css={{ margin: '0 10px', fill: isFocused ? focusColor : '#a6a5a5' }}
        >
          <g>
            <path d='M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z'></path>
          </g>
        </svg>

        <input
          ref={inputElement}
          css={{
            color: '#fff',
            height: '40px',
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
          onKeyUp={({ keyCode }) => {
            if (keyCode === 13) {
              goToSearchPage();
            }
          }}
          onChange={({ target: { value } }) => {
            setInputValue(value);
          }}
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
          visibility: isFocused ? 'visable' : 'hidden',
        }}
        onClick={goToSearchPage}
      >
        <svg
          viewBox='0 0 24 24'
          fill='rgb(29, 161, 242)'
          transform='rotate(180)'
        >
          <g>
            <path d='M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z'></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
