import React from 'react'

export const ErrorIcon = (props) => {
  return (
    <svg
      width={84}
      height={84}
      viewBox={'0 0 84 84'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <path
        d={'M37.833 54.5h8.334v8.333h-8.334V54.5zm0-33.333h8.334v25h-8.334v-25zM41.958.333C18.958.333.333 19 .333 42s18.625 41.667 41.625 41.667C65 83.667 83.667 65 83.667 42S65 .333 41.958.333zm.042 75C23.583 75.333 8.667 60.417 8.667 42 8.667 23.583 23.583 8.667 42 8.667c18.417 0 33.333 14.916 33.333 33.333 0 18.417-14.916 33.333-33.333 33.333z'}
        fill={'#000'}
        fillOpacity={0.87}
      />
    </svg>
  )
}

export default ErrorIcon
