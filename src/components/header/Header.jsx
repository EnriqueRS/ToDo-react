import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'

function Header () {
  return (
    <header>
        <div>ToDo App</div>
        <ul className={styles.menu}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/private'>Private</Link></li>
        </ul>
    </header>
  )
}

export default Header
