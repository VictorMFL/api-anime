import React from 'react'
import styles from "./Header.module.css"
import {HiOutlineSearch, HiMenu} from 'react-icons/hi'

const Header = () => {
  return (
    <header className={styles.header}>
      <menu>
        <HiMenu size={24} />
        <h2>Animes</h2>
      </menu>
      <nav>
        <input type='text' />
        <HiOutlineSearch size={24} />
      </nav>
    </header>
  )
}

export default Header
