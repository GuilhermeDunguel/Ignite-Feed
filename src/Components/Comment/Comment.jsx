import { ThumbsUp } from 'phosphor-react'
import React from 'react'

import {Trash} from 'phosphor-react'

import styles from './Comment.module.css'
import Avatar from '../Avatar/Avatar'
import { useState } from 'react'

export function Comment(props) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    props.onDeleteComment(props.content)
  }

  function handleLikeComment() {
    setLikeCount(() => {
      return likeCount + 1;
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/guilhermedunguel.png" alt="" />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <span>Guilherme Dunguel</span>
              <time title="11 de Maio às 08:13h" dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{props.content}</p>

        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudis <span>{likeCount}</span>
          </button>
        </footer>
      </div>


    </div>
  )
}
