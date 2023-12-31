import PropTypes from "prop-types";

import styles from "./SearchInput.module.css";

const SearchInput = ({onSubmit, onChange, value}) =>{
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <input
            className={styles.input}
            onChange={onChange}
            value={value}
            type="text"
            placeholder="List"
            />
            <button className={styles.addButton} > add</button>
        </form>
    )
}

SearchInput.prototype = {
    onsubmit: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default SearchInput;