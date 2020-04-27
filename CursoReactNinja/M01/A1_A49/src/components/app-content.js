'use strict'

import React from 'react'
import Search from './search' 
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userinfo, repos, starred, isFatching, handleSearch, handleRepos, handleStarred }) => (
    <div className='app'>
        <Search isDisabled={isFatching} handleSearch={handleSearch} />
        {isFatching && <div>Carregando...</div>}
        {!!userinfo  && <UserInfo userinfo={userinfo} />}
        {!!userinfo  && <Actions handleRepos={handleRepos} handleStarred={handleStarred} />}
        
        {!!repos.visible && 
            <Repos 
                className='repos' 
                title='Repositórios' 
                repos={repos.data}
            />
        }

        {!!starred.visible && 
            <Repos 
                className='starred' 
                title='Favoritos' 
                repos={starred.data}
            />
        }
  
    </div>
)

AppContent.propTypes = {
    repos: React.PropTypes.object.isRequired,
    starred: React.PropTypes.object.isRequired,
    isFatching: React.PropTypes.bool.isRequired,
    handleSearch: React.PropTypes.func.isRequired,
    handleRepos: React.PropTypes.func.isRequired,
    handleStarred: React.PropTypes.func.isRequired,
}

export default AppContent