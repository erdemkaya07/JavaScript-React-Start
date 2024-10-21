import {useState} from 'react'

function Post({post, isDarkTheme, toggleTheme}) {

/*   const[isDarkTheme, setIsDarkTheme] = useState('false')
  const toggleTheme = () => {
    setIsDarkTheme(theme => !theme)
  } */

  return (
    <div onClick={toggleTheme} className={`post ${isDarkTheme ? 'dark' : ''}`}>
      <p className="title">{post.title}</p>
      <p>{post.body}</p>
    </div>
  )
}

export default Post