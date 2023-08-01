import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../button'

import starIcon from '../../assets/img/svg/star.svg'
import viewsIcon from '../../assets/img/svg/eye.svg'
import likeIcon from '../../assets/img/svg/like.svg'
import likedIcon from '../../assets/img/svg/liked.svg'

import styles from './post.module.scss'

const Post = ({ _id: postId, title, text, user, imageUrl, views }) => {
  const { firstName, lastName, avatar, _id: userId, nickName } = user
  const [like, setLike] = useState(false)

  return (
    <article className={styles.post}>
      <div className={styles.profile}>
        <div className={styles.profile_avatar}>
          <img
            src={`${process.env.REACT_APP_API_URL}/static/ZxgAARFkQ2M.jpg`}
            alt={nickName}
          />
        </div>
        <div className={styles.profile_name}>
          <Link
            to={`/users/${userId}`}
            className={styles.profile_link}
          >
            {nickName}
          </Link>
          {/* <div className={styles.profile_status}>
            online <span></span>
          </div> */}
        </div>
        <div
          onClick={() => setLike((prev) => !prev)}
          className={styles.profile_like}
        >
          {like ? (
            <img
              src={likedIcon}
              alt='liked icon'
            />
          ) : (
            <img
              src={likeIcon}
              alt='like icon'
            />
          )}
        </div>
        {/* <div className={styles.actions}>
          <Button variant={2}>
            <img
              src={`${process.env.REACT_APP_API_URL}/static/subscribe_user.png`}
              alt=''
            />
          </Button>
          <span>
            <img
              src={`${process.env.REACT_APP_API_URL}/static/favourite.png`}
              alt='favourite'
            />
          </span>
          <span>
            <img
              src={`${process.env.REACT_APP_API_URL}/static/warning.png`}
              alt='warning'
            />
          </span>
        </div> */}
      </div>
      <div className={styles.img}>
        <img
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <h4>{title}</h4>
          <div className={styles.views}>
            <img
              src={viewsIcon}
              alt='views Icon'
            />
            <span>{views}</span>
          </div>
          {/* <div className={styles.stars}>
            {[...new Array(5)].map((_, i) => (
              <img
                key={i}
                src={starIcon}
                alt='star'
              />
            ))}
            <span>{!rating.length ? '' : `(${rating.length})`}</span>
          </div> */}
        </div>
        <div className={styles.text}>
          <p>{text.length > 170 ? `${text.substr(0, 169)}...` : text}</p>
        </div>
        <div className={styles.more}>
          <Link
            className={styles.more_link}
            to={`/posts/${postId}`}
          >
            Подробнее
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Post
