import React  from 'react'
import PropTypes from "prop-types";
import styles from "./Container.module.css"

function Container({ children }) {
  return (
    <section className={styles.container}> 
        {children}
    </section>
  )
}

Container.prototype = {
    children: PropTypes.node
}

export default Container