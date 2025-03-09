import { Dispatch, FC, SetStateAction } from "react";
import styles from "./search-bar.module.css";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

interface SearchBarProps {
  onChange: Dispatch<SetStateAction<string>>;
  placeholder?: string;
}

const SearchBar: FC<SearchBarProps> = ({ onChange, placeholder }) => {
  return (
    <div className={styles["search-container"]}>
      <label htmlFor="search" className={styles["search-icon"]}>
        <MagnifyingGlassIcon height={24} />
      </label>
      <input
        autoComplete="off"
        type="search"
        id="search"
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
