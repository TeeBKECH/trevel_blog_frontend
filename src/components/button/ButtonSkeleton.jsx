import React from 'react'
import ContentLoader from 'react-content-loader'

const ButtonSkeleton = ({ width = 160, height = 60, ...props }) => {
  return (
    <ContentLoader
      speed={4}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
      {...props}
    >
      <rect
        x='0'
        y='0'
        rx='5'
        ry='5'
        width={width}
        height={height}
      />
    </ContentLoader>
  )
}

export default ButtonSkeleton
