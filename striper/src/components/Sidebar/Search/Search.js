import React, {useState} from 'react';
import './Search.css';

function Search() {
    const [search, setSearch] = useState('');

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }
    return (
        <div className={`side-section search`}>
            <input 
            value = {search}
            type="search"
            name="search"
            placeholder='Search'
            onChange={handleSearchChange}
            />
        </div>
    );
}


export default Search;