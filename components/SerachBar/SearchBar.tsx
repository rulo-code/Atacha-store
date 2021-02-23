import React from "react"
import styles from "./SearchBar.module.scss"

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchBar}>
      <input placeholder="Haz tu deseo realidad ..." type="text" />
      <button>
        <i className="fas fa-search"></i>
      </button>
    </div>
  )
}

export default SearchBar
