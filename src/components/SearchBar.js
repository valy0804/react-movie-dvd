import React from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';




function SearchBar(props) {


    return(
        <div className="search-bar">
            <form>
                <input onChange={(e) => props.searchMovie(e.target.value)} className="search-text" type="text" placeholder="Movie search" value={props.search} /> 
            </form>

        </div>
    )
}


export default SearchBar;