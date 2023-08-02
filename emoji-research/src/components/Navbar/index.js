import React from 'react'
import styles from "./Navbar.module.css"
import searchIcon from '../../assets/search-icon.svg'
import emojiIcon from '../../assets/emoji-icon.svg'

function Navbar() {
  return (
    <nav>
        <img style={{marginRight: 8}} className={styles.navIcon} src={emojiIcon} alt='emoji Icon' />
        <img style={{marginTop: 8}} className={styles.navIcon} src={searchIcon} alt='search Icon' />
        <span className={styles.navTitle}>er</span>
    </nav>
  )
}

export default Navbar