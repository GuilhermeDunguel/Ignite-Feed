import { Header } from './Components/Header/Header' 
import { Sidebar } from './Components/Sidebar/Sidebar'
import { Post } from './Components/Posts/Post'

import './global.css'
import styles from './App.module.css'

export function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/maykbrito.png",
        name: "Mayk Brito",
        role: "Educator @Rocketseat",
      },
      content: [
        {type: 'paragraph', content: 'Fala galeraa 👋',},
        {type: 'paragraph', content: 'Vocês já estão por dentro da Maratona Explorer? Fiquem ligados que ela vai acontecer logo logo e o link tá aqui em baixo pra você se inscrever! ',},
        {type: 'link', content: 'rocketseat.com.br/maratona-explorer'}, 
      ],
      publishedAt: new Date('2022-06-07 15:43:23'),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50",
        name: "Clarisse Bevennuti",
        role: "UI Designer",
      },
      content: [
        {type: 'paragraph', content: 'Eai pessoal! 👋',},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
        {type: 'link', content: 'jane.design/doctorcare'}, 
      ],
      publishedAt: new Date('2022-06-07 13:56:52'),
    },
  ]

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt} 
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
