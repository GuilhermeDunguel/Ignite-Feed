import { ThumbsUp } from 'phosphor-react'
import React from 'react'

import {Trash} from 'phosphor-react'

import styles from './Comment.module.css'
import Avatar from '../Avatar/Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <span>Diego Fernandes</span>
              <time title="11 de Maio às 08:13h" dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Clarisse, Parabéns!!</p>

        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudis <span>20</span>
          </button>
        </footer>
      </div>


    </div>
  )
}
