import React from 'react'
import ContentLoader from 'react-content-loader'

const PostSkeleton = (props) => {
  return (
    <ContentLoader
      speed={4}
      width={565}
      height={200}
      viewBox='0 0 565 200'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
      {...props}
    >
      <rect
        x='0'
        y='0'
        rx='0'
        ry='0'
        width='190'
        height='200'
      />
      <rect
        x='203'
        y='19'
        rx='0'
        ry='0'
        width='271'
        height='32'
      />
      <rect
        x='203'
        y='64'
        rx='0'
        ry='0'
        width='62'
        height='15'
      />
      <rect
        x='203'
        y='110'
        rx='0'
        ry='0'
        width='292'
        height='87'
      />
    </ContentLoader>
  )
}

export default PostSkeleton
