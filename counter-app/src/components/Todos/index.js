import React from 'react'
import PropTypes from "prop-types"

import styles from "./Todos.module.css"

import plusIcon from "../../assets/plus-icon.svg"
import minusIcon from "../../assets/minus-icon.svg"


function Todos({ todos, onSubstraction, onAdditon }) {
  return (
    <div>
        {todos.map((todo, index, arr) => (
            <div key={index} className="">
                {todo.title}

                <div className={styles.todoIconWrapper}>
                    <div className={styles.todoCount}>{todo.count}</div>
                    <button onClick={() => onSubstraction(index)} className={styles.todoActionButton} >
                        <img src={minusIcon} alt='Minus Icon' />
                    </button>
                    <button onClick={() => onAdditon(index)} className={styles.todoActionButton} >
                        <img src={plusIcon} alt='Plus Icon' />
                    </button>
                </div>
            </div>
        ))}
    </div>
  )
}

Todos.prototype = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        count: PropTypes.number
    })),
    onSubstraction: PropTypes.func,
    onAdditon: PropTypes.func
}

export default Todos;