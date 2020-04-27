'use strict'

import React from 'react'

const Actions = ({handleRepos, handleStarred}) => (
    <div className='actions'>
        <button onClick={handleRepos}>Ver repositórios</button>
        <button onClick={handleStarred}>Ver favoritos</button>
    </div>
)

Actions.propTypes = {
    handleRepos: React.PropTypes.func.isRequired,
    handleStarred: React.PropTypes.func.isRequired
}

export default Actions