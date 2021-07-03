import React from 'react'

function Loader({
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
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : '' }}
      version='1.1'
      id='L3'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      enableBackground='new 0 0 0 0'
    >
      <circle
        fill='none'
        stroke={color || '#fff'}
        strokeWidth='4'
        cx='50'
        cy='50'
        r='44'
        style={{ opacity: '0.5' }}
      />
      <circle fill={color || '#fff'} stroke={color || '#fff'} strokeWidth='3' cx='8' cy='54' r='6'>
        <animateTransform
          attributeName='transform'
          dur='2s'
          type='rotate'
          from='0 50 48'
          to='360 50 52'
          repeatCount='indefinite'
        />
      </circle>
    </svg>
  )
}

export default Loader
