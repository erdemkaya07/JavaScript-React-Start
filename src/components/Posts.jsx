import React, { useState } from 'react'
import Post from './Post'

function Posts() {

const [posts, setPosts] = useState([
  {
    id: 1,
    title: 'Post 1',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam magnam praesentium porro quas et id temporibus voluptates? Et, nam illum.'
  },
  {
    id: 2,
    title: 'Post 2',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam magnam praesentium porro quas et id temporibus voluptates? Et, nam illum.'
  },
  {
    id: 3,
    title: 'Post 3',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam magnam praesentium porro quas et id temporibus voluptates? Et, nam illum.'
  },
])

const[isDarkTheme, setIsDarkTheme] = useState('true')
const toggleTheme = () => {
  setIsDarkTheme(theme => !theme)
}


  return (
    <div className='posts'>
      {
        posts.length > 0 && posts.map(post => (
          <Post key={post.id} post={post} isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        ))
      }

      {
        posts.length <= 0 && <p>No posts available</p>
      }

    </div>
  )
}

export default Posts