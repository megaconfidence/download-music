/**  @jsx jsx  */
import { useState, useRef } from 'react';
import { jsx } from '@emotion/core';
import mq from './MediaQuery';

const SearchBar = () => {
  const inputElement = useRef(null);
  const focusColor = 'rgb(29, 161, 242)';
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div
      css={{
        position: 'relative',
        alignItems: 'center',
        background: '#253341',
        display: 'inline-flex',
        borderRadius: '9999px',
        width: 'calc(100% - 0)',
        // width: 'calc(100% - 50px)',
        justifyContent: 'space-between',
        [mq[1]]: {
          width: '30rem',
        },
        border: `2px solid ${isFocused ? focusColor : 'transparent'}`,
      }}
    >
      <div css={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <svg
          onClick={() => {
            inputElement.current.focus();
          }}
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

            height: '3rem',
            border: 'unset',
            background: 'unset',
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          value={inputValue}
          onChange={({ target }) => {
            setInputValue(target.value);
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
          backgroundColor: 'rgb(29, 161, 242)',
          visibility: isFocused ? 'visable' : 'hidden',
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
      <div
        css={{
          width: '100%',
          bottom: '-5px',
          position: 'absolute',
          display: isFocused ? 'block' : 'none',
        }}
      >
        <div
          css={{
            top: '0',
            width: '100%',
            position: 'absolute',
            borderRadius: '14px',
            backgroundColor: '#15202b',
          }}
        >
          <ul
            css={{
              all: 'unset',
              display: 'block',
              li: {
                all: 'unset',
                padding: '1rem',
                display: 'flex',
                fontSize: '1rem',
                cursor: 'pointer',
                borderBottom: '1px solid #38444d',

                '&:last-of-type': {
                  borderBottom: 'none',
                  borderBottomLeftRadius: '14px',
                  borderBottomRightRadius: '14px',
                },
                '&:first-of-type': {
                  borderTopLeftRadius: '14px',
                  borderTopRightRadius: '14px',
                },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },

                'div:last-child': {
                  marginLeft: '1rem',
                  fontSize: '0.7rem',
                  borderRadius: '10px',
                  padding: '0.2rem 0.3rem',
                  backgroundColor: '#1da1f23b',
                },
              },
            }}
          >
            <li>
              <div>album result</div>
              <div>album</div>
            </li>
            <li>
              <div>song result</div>
              <div>song</div>
            </li>
            <li>
              <div>artist result</div>
              <div>artist</div>
            </li>
            <li>
              <div>genre result</div>
              <div>genre</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
