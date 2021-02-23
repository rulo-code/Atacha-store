import React from "react"
import styles from "./SearchBar.module.scss"

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchBar}>
      <input placeholder="Busca lo que deseas ..." type="text" />
      <button>
        <i className="fas fa-search"></i>
      </button>
    </div>
  )
}

export default SearchBar
