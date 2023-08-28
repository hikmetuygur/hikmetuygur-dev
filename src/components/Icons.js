import * as React from 'react';

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 512 512'
    {...rest}
    className={`h-auto w-full ${className}`}
  >
    <path fill='none' d='M0 0h512v512H0z' />
    <path
      fill='currentColor'
      d='M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z'
    />
  </svg>
);

export const XIcon = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 128 128'
    {...rest}
    className={`h-auto w-full ${className}`}
  >
    <path
      fill='#000'
      d='M91.301 0h17.643L70.4 44.053 115.744 104H80.24L52.432 67.643 20.613 104H2.96l41.227-47.12L.688 0h36.405L62.23 33.232 91.301 0ZM85.11 93.44h9.776L31.781 10.005h-10.49L85.109 93.44Z'
    />
  </svg>
);
// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 256 256'
    {...rest}
    className={`h-auto w-full ${className}`}
  >
    <path fill='none' d='M0 0h256v256H0z' />
    <g fill='none'>
      <rect width={256} height={256} fill='#fff' rx={60} />
      <rect width={256} height={256} fill='#0A66C2' rx={60} />
      <path
        fill='#fff'
        d='M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z'
      />
    </g>
  </svg>
);

export const PinterestIcon = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 256 256'
    {...rest}
    className={`h-auto w-full ${className}`}
  >
    <path fill='none' d='M0 0h256v256H0z' />
    <path
      fill='#CB1F27'
      d='M0 128.002c0 52.414 31.518 97.442 76.619 117.239-.36-8.938-.064-19.668 2.228-29.393 2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136 11.643 0 17.268 8.745 17.268 19.217 0 11.704-7.465 29.211-11.304 45.426-3.207 13.578 6.808 24.653 20.203 24.653 24.252 0 40.586-31.149 40.586-68.055 0-28.054-18.895-49.052-53.262-49.052-38.828 0-63.017 28.956-63.017 61.3 0 11.152 3.288 19.016 8.438 25.106 2.368 2.797 2.697 3.922 1.84 7.134-.614 2.355-2.024 8.025-2.608 10.272-.852 3.242-3.479 4.401-6.409 3.204-17.884-7.301-26.213-26.886-26.213-48.902 0-36.361 30.666-79.961 91.482-79.961 48.87 0 81.035 35.364 81.035 73.325 0 50.213-27.916 87.726-69.066 87.726-13.819 0-26.818-7.47-31.271-15.955 0 0-7.431 29.492-9.005 35.187-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0 57.314 0 0 57.309 0 128.002Z'
    />
  </svg>
);

export const DribbbleIcon = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 256 256'
    {...rest}
    className={`h-auto w-full ${className}`}
  >
    <path fill='none' d='M0 0h256v256H0z' />
    <path
      fill='#E74D89'
      d='M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z'
    />
    <path
      fill='#B2215A'
      d='M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z'
    />
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    {...rest}
    className={`h-auto w-full ${className}`}
  >
    <g
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <g strokeDasharray='2'>
        <path d='M12 21v1M21 12h1M12 3v-1M3 12h-1'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            dur='0.2s'
            values='4;2'
          />
        </path>
        <path d='M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='0.2s'
            dur='0.2s'
            values='4;2'
          />
        </path>
      </g>
      <path
        fill='currentColor'
        d='M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z'
        opacity='0'
      >
        <set attributeName='opacity' begin='0.5s' to='1' />
      </path>
    </g>
    <g fill='currentColor' fillOpacity='0'>
      <path d='m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z'>
        <animate
          id='lineMdSunnyFilledLoopToMoonFilledLoopTransition0'
          fill='freeze'
          attributeName='fill-opacity'
          begin='0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s'
          dur='0.4s'
          values='0;1'
        />
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s'
          dur='0.4s'
          values='1;0'
        />
      </path>
      <path d='M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s'
          dur='0.4s'
          values='0;1'
        />
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s'
          dur='0.4s'
          values='1;0'
        />
      </path>
      <path d='M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s'
          dur='0.4s'
          values='0;1'
        />
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s'
          dur='0.4s'
          values='1;0'
        />
      </path>
      <path d='m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s'
          dur='0.4s'
          values='0;1'
        />
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s'
          dur='0.4s'
          values='1;0'
        />
      </path>
    </g>
    <mask id='lineMdSunnyFilledLoopToMoonFilledLoopTransition1'>
      <circle cx='12' cy='12' r='12' fill='#fff' />
      <circle cx='22' cy='2' r='3' fill='#fff'>
        <animate
          fill='freeze'
          attributeName='cx'
          begin='0.1s'
          dur='0.4s'
          values='22;18'
        />
        <animate
          fill='freeze'
          attributeName='cy'
          begin='0.1s'
          dur='0.4s'
          values='2;6'
        />
        <animate
          fill='freeze'
          attributeName='r'
          begin='0.1s'
          dur='0.4s'
          values='3;12'
        />
      </circle>
      <circle cx='22' cy='2' r='1'>
        <animate
          fill='freeze'
          attributeName='cx'
          begin='0.1s'
          dur='0.4s'
          values='22;18'
        />
        <animate
          fill='freeze'
          attributeName='cy'
          begin='0.1s'
          dur='0.4s'
          values='2;6'
        />
        <animate
          fill='freeze'
          attributeName='r'
          begin='0.1s'
          dur='0.4s'
          values='1;10'
        />
      </circle>
    </mask>
    <circle
      cx='12'
      cy='12'
      r='6'
      fill='currentColor'
      mask='url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)'
    >
      <set attributeName='opacity' begin='0.5s' to='0' />
      <animate
        fill='freeze'
        attributeName='r'
        begin='0.1s'
        dur='0.4s'
        values='6;10'
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    {...rest}
    className={`h-auto w-full ${className}`}
  >
    <rect x='0' y='0' width='24' height='24' fill='rgba(255, 255, 255, 0)' />
    <g
      fill='none'
      stroke='currentColor'
      strokeDasharray='2'
      strokeDashoffset='2'
      strokeLinecap='round'
      strokeWidth='2'
    >
      <path d='M0 0'>
        <animate
          fill='freeze'
          attributeName='d'
          begin='1.2s'
          dur='0.2s'
          values='M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1'
        />
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          begin='1.2s'
          dur='0.2s'
          values='2;0'
        />
      </path>
      <path d='M0 0'>
        <animate
          fill='freeze'
          attributeName='d'
          begin='1.5s'
          dur='0.2s'
          values='M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5'
        />
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          begin='1.5s'
          dur='1.2s'
          values='2;0'
        />
      </path>
      <animateTransform
        attributeName='transform'
        dur='30s'
        repeatCount='indefinite'
        type='rotate'
        values='0 12 12;360 12 12'
      />
    </g>
    <g fill='currentColor'>
      <path d='M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          dur='0.4s'
          values='1;0'
        />
      </path>
      <path d='M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='0.2s'
          dur='0.4s'
          values='1;0'
        />
      </path>
    </g>
    <g
      fill='currentColor'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <path d='M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z' />
      <set attributeName='opacity' begin='0.6s' to='0' />
    </g>
    <mask id='lineMdMoonFilledToSunnyFilledLoopTransition0'>
      <circle cx='12' cy='12' r='12' fill='#fff' />
      <circle cx='18' cy='6' r='12' fill='#fff'>
        <animate
          fill='freeze'
          attributeName='cx'
          begin='0.6s'
          dur='0.4s'
          values='18;22'
        />
        <animate
          fill='freeze'
          attributeName='cy'
          begin='0.6s'
          dur='0.4s'
          values='6;2'
        />
        <animate
          fill='freeze'
          attributeName='r'
          begin='0.6s'
          dur='0.4s'
          values='12;3'
        />
      </circle>
      <circle cx='18' cy='6' r='10'>
        <animate
          fill='freeze'
          attributeName='cx'
          begin='0.6s'
          dur='0.4s'
          values='18;22'
        />
        <animate
          fill='freeze'
          attributeName='cy'
          begin='0.6s'
          dur='0.4s'
          values='6;2'
        />
        <animate
          fill='freeze'
          attributeName='r'
          begin='0.6s'
          dur='0.4s'
          values='10;1'
        />
      </circle>
    </mask>
    <circle
      cx='12'
      cy='12'
      r='10'
      fill='currentColor'
      mask='url(#lineMdMoonFilledToSunnyFilledLoopTransition0)'
      opacity='0'
    >
      <set attributeName='opacity' begin='0.6s' to='1' />
      <animate
        fill='freeze'
        attributeName='r'
        begin='0.6s'
        dur='0.4s'
        values='10;6'
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='337'
    height='332'
    fill='none'
    viewBox='0 0 337 332'
  >
    <path
      fill='#000'
      d='M158.23 321.192l-10.707-.974.376-4.142 10.708.973-.377 4.143zm.734-12.304l5.163.47-2.029 22.307-16.859-1.533.377-4.142 11.696 1.063 1.652-18.165zM132.365 304.18c1.378.378 2.539.983 3.483 1.817.923.829 1.534 1.87 1.831 3.124.292 1.274.204 2.765-.264 4.473l-2.572 9.382-4.814-1.32 2.377-8.672c.378-1.379.369-2.476-.026-3.292-.422-.802-1.168-1.349-2.238-1.642-.74-.203-1.441-.23-2.102-.079-.666.171-1.254.541-1.764 1.109-.515.589-.911 1.387-1.187 2.395l-2.251 8.209-4.814-1.32 4.552-16.603 4.567 1.252-1.252 4.568-.469-1.556c.871-.999 1.934-1.648 3.188-1.946 1.228-.283 2.479-.249 3.755.101zM114.082 298.337l-9.416 21.797-4.583-1.98 9.417-21.797 4.582 1.98zM100.846 292.115l-11.549 20.746-4.361-2.428 11.548-20.746 4.362 2.428zM71.123 270.599a18.658 18.658 0 013.31 4.01c.875 1.474 1.42 2.834 1.637 4.078l-3.94 1.677c-.243-1.153-.691-2.335-1.344-3.547a12.962 12.962 0 00-2.507-3.182c-.752-.694-1.421-1.18-2.006-1.458-.615-.277-1.156-.384-1.621-.32a1.907 1.907 0 00-1.175.614c-.405.439-.551.943-.438 1.512.1.585.36 1.216.78 1.894a28.12 28.12 0 001.447 2.206c.53.778 1.039 1.596 1.526 2.452.472.841.831 1.695 1.078 2.56.246.866.29 1.747.13 2.645-.176.882-.669 1.763-1.479 2.641a6.246 6.246 0 01-3.117 1.87c-1.24.307-2.58.218-4.02-.268-1.468-.484-2.98-1.441-4.532-2.873a17.093 17.093 0 01-2.71-3.197c-.788-1.161-1.341-2.338-1.661-3.533l3.844-1.809a13.074 13.074 0 001.416 3.09 11.115 11.115 0 001.955 2.412c.737.68 1.42 1.151 2.05 1.412.63.261 1.176.345 1.64.251.45-.079.842-.299 1.174-.659.39-.424.536-.928.437-1.513-.113-.569-.38-1.192-.8-1.87a62.43 62.43 0 00-1.425-2.184 41.236 41.236 0 01-1.547-2.428 10.704 10.704 0 01-1.123-2.559 5.518 5.518 0 01-.106-2.623c.16-.897.637-1.777 1.433-2.639a6.05 6.05 0 013.119-1.825c1.226-.291 2.574-.195 4.043.289 1.453.47 2.964 1.428 4.532 2.874zM54.285 252.534c1.267 1.581 1.855 3.133 1.763 4.656-.109 1.536-.962 2.944-2.56 4.225l-11.786 9.447-3.122-3.896 11.736-9.406c.566-.454.887-.957.963-1.51.06-.54-.117-1.068-.531-1.584-.494-.616-1.08-1.007-1.76-1.173l1.906-3.25c.603.173 1.206.482 1.81.928.573.443 1.1.964 1.58 1.563zm-4.654 15.377l-2.996 2.401-7.465-9.313 2.996-2.402 7.465 9.314zM41.962 234.384l-2.901 1.695-.474.648-5.194 3.035c-.921.538-1.473 1.243-1.655 2.116-.193.853.05 1.861.728 3.021.462.792 1.049 1.5 1.759 2.123.68.615 1.389 1.066 2.124 1.352l-2.107 3.307c-1.045-.476-2.057-1.194-3.037-2.153a15.177 15.177 0 01-2.504-3.207c-1.324-2.266-1.818-4.337-1.481-6.214.336-1.877 1.637-3.477 3.903-4.801l8.482-4.956 2.357 4.034zm2.869 4.402c.678 1.161 1.066 2.268 1.163 3.323.08 1.066-.093 2.019-.516 2.859-.424.84-1.059 1.508-1.906 2.003-.884.517-1.782.757-2.692.721-.922-.055-1.84-.444-2.758-1.168-.936-.714-1.845-1.826-2.727-3.336l-2.31-3.951 2.515-1.469 2.034 3.481c.592 1.013 1.167 1.616 1.724 1.809a1.858 1.858 0 001.567-.173c.552-.323.87-.793.955-1.411.054-.625-.139-1.315-.58-2.07-.42-.719-.962-1.266-1.627-1.644-.684-.366-1.433-.485-2.246-.355l1.601-1.826c1.141-.246 2.202-.1 3.184.438.982.538 1.855 1.461 2.619 2.769zM32.927 214.193c.663 1.733.905 3.411.726 5.033-.2 1.629-.778 3.072-1.736 4.329-.966 1.237-2.246 2.161-3.84 2.77-1.614.618-3.184.784-4.709.499-1.552-.297-2.936-.99-4.152-2.078-1.235-1.081-2.185-2.488-2.848-4.222-.647-1.693-.852-3.305-.615-4.835a6.844 6.844 0 011.956-3.934l3.326 2.874c-.598.708-.954 1.449-1.068 2.224a4.254 4.254 0 00.239 2.238c.305.797.758 1.446 1.36 1.947.603.5 1.306.814 2.108.941.795.107 1.66-.018 2.597-.376.936-.358 1.665-.842 2.185-1.452a4.289 4.289 0 00.942-2.108c.114-.775.02-1.56-.285-2.357a4.455 4.455 0 00-1.285-1.839c-.603-.5-1.373-.811-2.31-.932l.59-4.371c1.524.102 2.884.644 4.082 1.625 1.177.989 2.09 2.33 2.737 4.024zM23.654 196.625l-5.99 1.053-9.027-6.404-1.154-5.839 9.186 6.046 2.574 2.134 4.411 3.01zm4.253 3.368l-23.294 4.601-.967-4.898 23.294-4.6.967 4.897zm-2.486-12.589l-5.967 7.115-4.406-2.326 9.201-10.722 1.172 5.933zM23.11 159.055L.825 156.772l1.037-10.123c.248-2.419.933-4.504 2.056-6.255 1.102-1.753 2.534-3.064 4.295-3.935 1.762-.87 3.779-1.189 6.05-.956 2.249.23 4.159.951 5.729 2.163 1.549 1.209 2.695 2.785 3.44 4.727.723 1.94.961 4.119.713 6.539l-1.037 10.123zm-3.706-5.591l.482-4.711c.153-1.486.008-2.798-.433-3.937-.46-1.162-1.18-2.094-2.158-2.794-.977-.722-2.166-1.155-3.566-1.299-1.422-.145-2.674.037-3.756.548-1.1.488-1.983 1.256-2.648 2.303-.684 1.023-1.102 2.278-1.254 3.763l-.483 4.712 13.816 1.415zM30.14 120.326c-.572 1.878-1.442 3.419-2.612 4.623-1.164 1.185-2.496 1.972-3.998 2.362-1.522.384-3.1.327-4.732-.17-1.653-.504-2.997-1.326-4.032-2.466a8.471 8.471 0 01-2.04-4.067c-.33-1.55-.24-3.162.27-4.836.49-1.612 1.279-2.955 2.364-4.029a7.866 7.866 0 013.88-2.197c1.496-.37 3.131-.284 4.907.257.183.056.395.131.633.226l.624.257-4.075 13.377-2.785-.848 3.31-10.867.267 2.088c-.857-.261-1.655-.314-2.393-.16a3.863 3.863 0 00-1.908.991c-.553.501-.955 1.159-1.203 1.975-.249.816-.286 1.597-.111 2.341.16.718.514 1.35 1.061 1.896.527.54 1.23.943 2.107 1.21l.735.224c.898.274 1.753.322 2.565.146a4.334 4.334 0 002.074-1.208c.57-.629 1.005-1.433 1.303-2.413.268-.877.368-1.683.302-2.417a5.834 5.834 0 00-.635-2.2l3.53-1.702c.626 1.016 1 2.167 1.122 3.453.1 1.28-.076 2.664-.53 4.154zM37.668 100.225l-18.63-1.273 2.315-4.603 15.939 1.282-1.15 2.287-10.433-12.231 2.156-4.288 12.118 14.224-2.315 4.602zM52.445 76.233c-1.166 1.578-2.502 2.74-4.007 3.485-1.492.728-3.01 1.025-4.556.891-1.563-.146-3.03-.726-4.404-1.74-1.39-1.027-2.382-2.25-2.977-3.671a8.47 8.47 0 01-.564-4.515c.206-1.571.828-3.06 1.868-4.468 1-1.356 2.193-2.358 3.574-3.009a7.861 7.861 0 014.392-.774c1.532.15 3.045.777 4.538 1.88.155.114.329.256.522.425l.502.45-8.308 11.25-2.342-1.73 6.75-9.138-.447 2.057c-.72-.532-1.454-.849-2.202-.95a3.86 3.86 0 00-2.129.297c-.689.287-1.287.773-1.794 1.46-.507.686-.802 1.41-.887 2.17a3.81 3.81 0 00.368 2.14c.317.686.844 1.3 1.582 1.845l.617.457c.756.557 1.545.889 2.37.993a4.33 4.33 0 002.358-.446c.748-.402 1.426-1.015 2.034-1.839.545-.737.91-1.463 1.092-2.177.195-.731.24-1.493.136-2.286l3.895-.426c.252 1.168.22 2.378-.095 3.63-.332 1.24-.96 2.486-1.886 3.739zM63.09 63.07L46.094 46.49l3.486-3.574 16.996 16.58-3.486 3.574zM80.022 48.031c-1.448 1.127-2.972 1.825-4.572 2.096a8.968 8.968 0 01-4.577-.413c-1.465-.563-2.722-1.518-3.77-2.866-1.06-1.364-1.676-2.817-1.848-4.359a8.642 8.642 0 01.727-4.538c.657-1.483 1.71-2.788 3.158-3.915 1.432-1.113 2.947-1.805 4.547-2.076 1.587-.288 3.106-.159 4.558.388s2.715 1.51 3.788 2.891c1.048 1.348 1.664 2.8 1.85 4.36.171 1.54-.071 3.054-.728 4.537-.657 1.484-1.701 2.782-3.133 3.895zm-2.514-3.233c.657-.51 1.128-1.12 1.415-1.83.286-.709.365-1.46.236-2.25-.142-.809-.515-1.6-1.117-2.375-.615-.792-1.29-1.348-2.026-1.668a4.128 4.128 0 00-2.24-.325c-.757.102-1.465.41-2.122.92-.656.51-1.128 1.12-1.414 1.83a4.356 4.356 0 00-.262 2.27c.13.792.502 1.583 1.117 2.375.602.774 1.278 1.33 2.026 1.667a4.356 4.356 0 002.265.306c.758-.103 1.465-.41 2.122-.92zM102.984 33.392c-1.286.671-2.56.974-3.82.91-1.26-.065-2.466-.53-3.617-1.399-1.14-.896-2.175-2.234-3.102-4.012-.937-1.797-1.451-3.405-1.542-4.825-.091-1.42.198-2.666.866-3.737.67-1.07 1.675-1.956 3.018-2.656 1.438-.75 2.897-1.09 4.377-1.02a7.873 7.873 0 014.144 1.304c1.293.818 2.353 2.021 3.182 3.61.838 1.608 1.223 3.176 1.153 4.704a7.876 7.876 0 01-1.303 4.144c-.8 1.235-1.918 2.228-3.356 2.977zm-6.27 9.983l-10.831-20.77 4.227-2.204 1.628 3.12 2.282 4.585 2.636 4.363 4.484 8.598-4.427 2.308zm3.61-13.215c.738-.385 1.302-.895 1.692-1.532.409-.646.62-1.37.635-2.172.024-.83-.19-1.68-.644-2.55-.464-.89-1.038-1.553-1.723-1.99a4.126 4.126 0 00-2.145-.722c-.745-.044-1.486.126-2.224.51-.738.385-1.311.9-1.72 1.547a4.126 4.126 0 00-.635 2.172c-.016.802.209 1.647.672 2.536.454.87 1.019 1.538 1.695 2.004a4.127 4.127 0 002.145.722c.764.035 1.514-.14 2.252-.525zM126.722 23.749c-1.874.58-3.639.725-5.292.433-1.634-.298-3.033-.958-4.199-1.982-1.172-1.044-2.011-2.38-2.516-4.011-.511-1.65-.585-3.225-.223-4.722a8.471 8.471 0 012.221-3.97c1.097-1.144 2.481-1.975 4.152-2.493 1.61-.499 3.164-.6 4.662-.305a7.863 7.863 0 013.997 1.978c1.145 1.03 1.992 2.43 2.542 4.204.056.183.113.4.168.651.049.23.095.45.138.661l-13.358 4.138-.862-2.781 10.851-3.362-1.578 1.393c-.265-.855-.669-1.546-1.211-2.07a3.857 3.857 0 00-1.891-1.022c-.725-.178-1.495-.14-2.31.112-.815.253-1.482.66-2 1.223a3.816 3.816 0 00-.973 1.943c-.15.739-.09 1.547.182 2.423l.227.733c.278.897.717 1.632 1.319 2.205a4.331 4.331 0 002.164 1.038c.841.119 1.751.027 2.729-.276.876-.271 1.599-.64 2.169-1.108a5.83 5.83 0 001.465-1.76l3.389 1.965c-.488 1.09-1.231 2.046-2.227 2.868-1.002.802-2.247 1.433-3.735 1.894zM143.041 19.412L140.464 2.39l4.715-.714.727 4.81-.875-1.292c.325-1.279.999-2.309 2.025-3.09 1.022-.802 2.335-1.324 3.938-1.567l.689 4.556c-.214.011-.405.03-.574.055a4.399 4.399 0 00-.543.05c-1.35.204-2.388.76-3.113 1.668-.708.884-.939 2.138-.693 3.762l1.216 8.037-4.935.747zM192.508 19.139a3.129 3.129 0 01-2.042-1.205c-.495-.685-.669-1.48-.522-2.386.146-.906.558-1.585 1.237-2.037a3.128 3.128 0 012.317-.5c.864.139 1.544.54 2.042 1.205.501.643.679 1.417.532 2.322-.146.906-.562 1.606-1.247 2.1-.681.474-1.454.64-2.317.5zM240.425 35.85c-2.773-1.555-4.509-3.542-5.207-5.962-.697-2.421-.243-5.064 1.362-7.93l6.132-10.944 4.522 2.534-6.037 10.776c-1.043 1.861-1.412 3.415-1.108 4.661.304 1.247 1.145 2.256 2.522 3.027 1.377.772 2.677.962 3.899.57 1.222-.39 2.354-1.517 3.397-3.378l6.037-10.776 4.467 2.503-6.131 10.943c-1.606 2.866-3.624 4.634-6.052 5.302-2.429.67-5.03.227-7.803-1.327zM257.757 46.667l13.868-17.59 4.071 3.209-13.868 17.59-4.071-3.209zM264.782 56.361l28.723-13.971 3.158 3.131-28.722 13.972-3.159-3.132zM287.381 77.45c-1.863-2.576-2.602-5.11-2.217-7.599.384-2.49 1.908-4.697 4.57-6.622l10.164-7.352 3.038 4.201-10.009 7.239c-1.728 1.25-2.717 2.504-2.965 3.763-.248 1.259.091 2.528 1.016 3.807.925 1.28 2.024 1.998 3.298 2.157 1.273.159 2.774-.387 4.502-1.638l10.009-7.238 3 4.149-10.164 7.35c-2.662 1.926-5.235 2.681-7.72 2.267-2.485-.414-4.659-1.91-6.522-4.485zM297.64 91.99l16.084 3.232-3.434 1.57 7.891-13.746 2.451 5.354-5.527 9.532-1.054-2.227 10.815 1.948 2.344 5.121-15.331-3.048 3.375-1.545-8.186 14.41-2.49-5.442 5.899-9.949.985 2.153-11.345-1.951-2.477-5.412zM313.034 133.638l22.215-2.877 1.307 10.092c.312 2.412.122 4.598-.57 6.559-.672 1.959-1.765 3.563-3.281 4.814-1.516 1.25-3.406 2.022-5.67 2.315-2.243.29-4.267.025-6.072-.795-1.785-.823-3.262-2.094-4.431-3.814-1.148-1.723-1.878-3.79-2.191-6.202l-1.307-10.092zm4.887 4.594l.608 4.697c.192 1.481.633 2.725 1.323 3.733.713 1.026 1.627 1.769 2.74 2.227 1.116.479 2.373.628 3.769.447 1.417-.183 2.594-.648 3.53-1.393.96-.726 1.644-1.675 2.052-2.847.431-1.153.551-2.47.359-3.951l-.608-4.696-13.773 1.783zM315.052 172.948c.128-1.959.623-3.658 1.486-5.099.861-1.419 1.979-2.49 3.351-3.213 1.394-.722 2.942-1.028 4.645-.917 1.724.112 3.221.604 4.49 1.477a8.484 8.484 0 012.916 3.493c.676 1.433.958 3.023.845 4.768-.11 1.682-.57 3.17-1.38 4.464a7.867 7.867 0 01-3.275 3.027c-1.371.702-2.983.993-4.835.872a7.969 7.969 0 01-.668-.075l-.667-.107.906-13.955 2.906.188-.736 11.337-.738-1.972c.894.058 1.683-.073 2.366-.392a3.863 3.863 0 001.631-1.401c.424-.614.664-1.347.72-2.198.055-.852-.088-1.62-.428-2.305a3.817 3.817 0 00-1.467-1.602c-.637-.405-1.413-.637-2.328-.696l-.767-.05c-.936-.061-1.78.087-2.53.445-.73.38-1.311.93-1.742 1.651-.412.742-.651 1.625-.717 2.647-.06.915.027 1.722.259 2.422a5.85 5.85 0 001.121 1.996l-3.046 2.464c-.843-.845-1.47-1.88-1.882-3.104-.391-1.223-.536-2.611-.436-4.165zM311.794 195.303a17.526 17.526 0 011.449-4.034c.653-1.229 1.328-2.169 2.024-2.82l3.123 2.422c-.655.66-1.257 1.474-1.807 2.443-.534.994-.917 2-1.151 3.019-.257 1.123-.303 1.944-.137 2.464.161.54.481.865.959.974.395.091.729-.03 1.002-.361.289-.306.554-.749.796-1.328.242-.58.498-1.221.769-1.925.266-.683.565-1.37.898-2.06a7.949 7.949 0 011.268-1.81 4.31 4.31 0 011.771-1.138c.684-.216 1.504-.214 2.461.005 1.06.243 1.927.759 2.6 1.547.668.81 1.098 1.849 1.289 3.119.211 1.274.132 2.722-.24 4.344a17.406 17.406 0 01-1.174 3.408c-.521 1.128-1.111 2.032-1.77 2.713l-3.091-2.415a8.096 8.096 0 001.531-2.242 10.79 10.79 0 00.823-2.307c.248-1.081.283-1.905.106-2.47-.176-.566-.494-.901-.951-1.006-.416-.095-.768.01-1.057.316-.294.327-.572.777-.835 1.352a35.297 35.297 0 00-.793 1.886c-.25.709-.552 1.406-.905 2.091a7.437 7.437 0 01-1.261 1.78 4.062 4.062 0 01-1.739 1.144c-.668.241-1.481.252-2.437.033a4.542 4.542 0 01-2.562-1.571c-.648-.805-1.064-1.852-1.251-3.142-.191-1.269-.093-2.746.292-4.431zM307.774 210.516l16.181 5.879-1.705 4.692-16.181-5.88 1.705-4.691zm17.584 9.045c.313-.862.819-1.473 1.517-1.832a2.594 2.594 0 012.16-.135c.742.27 1.265.766 1.569 1.49.305.723.301 1.516-.013 2.378-.313.863-.809 1.477-1.487 1.843-.657.374-1.357.426-2.099.157-.782-.284-1.335-.792-1.66-1.523-.312-.703-.308-1.496.013-2.378zM293.127 228.153a18.095 18.095 0 012.758-3.858c1.044-1.135 2.151-1.958 3.32-2.468l2.222 3.441c-.869.357-1.716.944-2.541 1.761a10.85 10.85 0 00-2.052 2.676c-.837 1.56-1.094 2.875-.771 3.944.313 1.087 1.156 1.999 2.528 2.734l2.285 1.225 3.656 2.323 3.866 2 3.271 1.753-2.237 4.175-12.635-6.774c-2.821-1.511-4.505-3.358-5.054-5.541-.549-2.182-.088-4.645 1.384-7.391zm6.793 2.771c.756-1.411 1.742-2.528 2.959-3.352a8.46 8.46 0 014.033-1.36c1.472-.082 2.941.269 4.408 1.056 1.485.796 2.592 1.825 3.32 3.086a8.138 8.138 0 011.1 4.112c-.014 1.469-.398 2.909-1.154 4.319-.685 1.279-1.553 2.266-2.604 2.961-1.032.706-2.239 1.039-3.622 1-1.364-.03-2.892-.498-4.584-1.405-1.674-.897-2.909-1.91-3.708-3.04-.779-1.12-1.17-2.31-1.172-3.57-.003-1.26.339-2.529 1.024-3.807zm3.142 2.809c-.414.771-.631 1.538-.653 2.301-.003.773.187 1.48.57 2.121.383.64.94 1.157 1.674 1.55.752.404 1.491.582 2.218.536a3.807 3.807 0 002.053-.715c.642-.43 1.17-1.031 1.583-1.802.414-.771.622-1.543.625-2.316a4.028 4.028 0 00-.527-2.133c-.364-.631-.922-1.148-1.674-1.551-.733-.393-1.472-.572-2.218-.536a4.274 4.274 0 00-2.097.728c-.623.441-1.141 1.046-1.554 1.817zM296.035 266.862c-.857 1.063-1.837 1.835-2.938 2.317-1.099.512-2.282.653-3.55.425-1.252-.216-2.559-.873-3.92-1.971l-7.67-6.19 3.135-3.885 7.072 5.708c1.079.87 2.07 1.273 2.974 1.207.889-.05 1.683-.506 2.379-1.369.496-.615.812-1.278.948-1.991.14-.682.058-1.379-.246-2.09-.317-.694-.89-1.376-1.72-2.046l-6.624-5.346 3.135-3.884 13.397 10.812-2.994 3.71-3.71-2.994 1.683.207a6.377 6.377 0 01.399 3.735c-.242 1.285-.825 2.5-1.75 3.645zM264.514 273.832c1.486-1.282 3.046-2.119 4.678-2.513 1.617-.38 3.164-.333 4.641.139 1.492.489 2.795 1.379 3.909 2.672 1.129 1.308 1.826 2.721 2.092 4.238a8.465 8.465 0 01-.449 4.528c-.548 1.487-1.485 2.802-2.81 3.944-1.276 1.101-2.66 1.815-4.152 2.143a7.853 7.853 0 01-4.454-.216c-1.461-.486-2.798-1.432-4.01-2.838a8.44 8.44 0 01-.414-.529 96.293 96.293 0 01-.391-.551l10.591-9.132 1.902 2.206-8.604 7.418.89-1.908c.585.678 1.231 1.15 1.937 1.414a3.866 3.866 0 002.143.181c.735-.127 1.426-.47 2.072-1.027.646-.557 1.095-1.197 1.345-1.92a3.808 3.808 0 00.115-2.169c-.157-.738-.535-1.454-1.134-2.149l-.502-.582c-.613-.71-1.31-1.208-2.09-1.493a4.345 4.345 0 00-2.399-.087c-.818.227-1.615.675-2.391 1.344-.695.599-1.21 1.226-1.546 1.882a5.841 5.841 0 00-.639 2.199l-3.892-.447c.012-1.194.311-2.367.895-3.518.599-1.136 1.487-2.212 2.667-3.229zM251.289 284.329l9.164 14.574-4.036 2.538-2.589-4.118 1.318.835c.214 1.301.007 2.515-.621 3.641-.616 1.143-1.611 2.147-2.983 3.01l-2.453-3.901c.192-.095.36-.189.504-.279.156-.073.315-.161.478-.263 1.156-.727 1.885-1.651 2.187-2.774.295-1.093.006-2.335-.868-3.725l-4.327-6.881 4.226-2.657zM206.053 304.348a3.135 3.135 0 012.353.289c.727.43 1.205 1.09 1.432 1.979.228.888.121 1.675-.319 2.361a3.134 3.134 0 01-1.925 1.385c-.847.217-1.632.121-2.353-.289-.717-.389-1.189-1.027-1.416-1.916-.228-.889-.127-1.696.304-2.423.435-.707 1.077-1.168 1.924-1.386z'
    ></path>
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    className={`h-auto w-full ${className}`}
    {...rest}
  >
    <path fill='none' d='M0 0h24v24H0z' />
    <path
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5'
    />
  </svg>
);
