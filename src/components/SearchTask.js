import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const SearchTask = ({dispatch}) => {
    const [search, setSearch] =useState('');

    function HandleSearch(event) {
        setSearch(event.target.value);
    }

    function HandleReset(event) {
        event.preventDefault()
        document.getElementById('search').value='';
        setSearch('');
    }

    useEffect(()=>{
        dispatch({
            type: 'SEARCH_TASK',
            search
        })
    },[search])

    return <div>
        <input type='search' name = 'search' id='search' onChange={HandleSearch}></input>
        <button onClick={HandleReset}>Reset</button>
    </div>
}

export default connect()(SearchTask);