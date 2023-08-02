import React,{useState} from 'react'
import {Link} from "react-router-dom"
import styles from "./Navbar.module.css"

import classnames from 'classnames';

import { CATEGORIES } from "../../constants/categories"
import newsIcon from "../../assets/news-icon.svg"

function Navbar() {
  const [selected, setSelected] = useState("");

  return (
    <nav className={styles.nav} >
      <div className={styles.navIconWrapper}>
        <img className={styles.navIcon} src={newsIcon} alt="Navbar Icon" />
        <h1 className={styles.navTitle}>NEWS</h1>
      </div>

      <div>
        {CATEGORIES.map((category,index) =>(
          <Link
            key={index}
            onClick={() => setSelected(category.name)}
            to={`/${category.slug}`}
            className={classnames(styles.category, {
              [styles.selected]: selected === category.name
            })}
          >
          {category.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar