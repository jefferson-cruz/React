'use strict'

import React from 'react'

const Search = ({ isDisabled, handleSearch }) => (
    <div className='search'>
        <input 
            type='search' 
            disabled={isDisabled}
            placeholder='Digite o nome do usuário no Github' 
            onKeyUp={handleSearch}
        />
    </div>
)

Search.propTypes = {
    isDisabled: React.PropTypes.bool.isRequired,
    handleSearch: React.PropTypes.func.isRequired
}

export default Search