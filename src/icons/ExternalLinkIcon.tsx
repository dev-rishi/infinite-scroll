import React from 'react'

function ExternalLinkIcon({
  height,
  color,
  className,
  onClick,
}: {
  height?: number
  color?: string
  className?: string
  onClick?: () => void
}) {
  return (
    <svg
      className={className}
      height={height || 16}
      width={height || 16}
      viewBox='0 0 24 24'
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : '' }}
    >
      <path
        fill={color || '#5D7EBE'}
        d='M18,10.82a1,1,0,0,0-1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7h7.18a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V11.82A1,1,0,0,0,18,10.82Zm3.92-8.2a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L8.29,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z'
      />
    </svg>
  )
}

export default ExternalLinkIcon
