import React from 'react'

import Button from '../button'

import starIcon from '../../assets/img/svg/star.svg'
import styles from './post.module.scss'

const Post = ({ data }) => {
  const { _id: postId, country, text, city, recommend, rating, user } = data
  const { firstName, lastName, avatar, _id: userId } = user

  return (
    <article className={styles.post}>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <img
            src={`${process.env.REACT_APP_API_URL}/static/${avatar}`}
            alt={firstName + ' ' + lastName}
          />
        </div>
        <div className={styles.name}>
          <a
            href='#dsds'
            className={styles.name_link}
          >
            {`${firstName} ${lastName}`}
          </a>
          <div className={styles.status}>
            online <span></span>
          </div>
        </div>
        <div className={styles.recommend}>
          <img
            src={`${process.env.REACT_APP_API_URL}/static/${recommend}.png`}
            alt={recommend}
          />
        </div>
        <div className={styles.actions}>
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
        </div>
      </div>
      <div className={styles.title}>
        <h4>
          {country}, {city}
        </h4>
        <div className={styles.stars}>
          {[...new Array(5)].map((_, i) => (
            <img
              key={i}
              src={starIcon}
              alt='star'
            />
          ))}
          <span>{!rating.length ? '' : `(${rating.length})`}</span>
        </div>
      </div>
      <div className={styles.text}>
        <p>{text}</p>
      </div>
      <div className={styles.more}>
        <Button>Подробнее</Button>
      </div>
    </article>
  )
}

export default Post
