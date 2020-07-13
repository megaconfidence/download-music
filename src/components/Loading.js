/**  @jsx jsx  */
import { jsx } from '@emotion/core';

const Loading = ({background='transparent'}) => {
  return (
    <div
      css={{
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        backgroundColor: background
      }}
    >
      <div
        css={{
          top: '50%',
          left: '50%',
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <svg
          width='100%'
          height='100%'
          viewBox='0 0 32 32'
          css={{
            margin: '0 15rem',
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
    </div>
  );
};

export default Loading;
