'use strict'

import React from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            userinfo: null,
            repos: {
                visible: false,
                data: []
            },
            starred:  {
                visible: false,
                data: []
            },
            isFatching: false
        }

        this.handleSearch = this.handleSearch.bind(this)
    }

    getGithubApiUrl(username, type) {
        const internalUser = username ? `/${username}` : ''
        const internalType = type ? `/${type}` : ''

        return `https://api.github.com/users${internalUser}${internalType}`
    }

    handleSearch(e) {
        const key = e.which || e.keyCode
        const ENTER = 13

        if(key === ENTER) {
            this.clearState()

            this.setState({ isFatching: true })

            ajax()
            .get(this.getGithubApiUrl(e.target.value))
            .then((result) => {
                this.setState({
                    userinfo: {
                        username: result.name,
                        photo: result.avatar_url,
                        login: result.login,
                        repos: result.public_repos,
                        followers: result.followers,
                        following: result.following
                    },
                    repos: {
                        visible: false,
                        data: []
                    },
                    starred:  {
                        visible: false,
                        data: []
                    }
                })
            }) 
            .always(() => this.setState({ isFatching: false }))
        }
    }

    clearState() {
        this.setState({
            userinfo: null,
            repos: {
                visible: false,
                data: []
            },
            starred:  {
                visible: false,
                data: []
            },
            isFatching: false
        })
    }

    getRepos(type) {
        return (e) => {
            const login = this.state.userinfo.login

            ajax()
            .get(this.getGithubApiUrl(login, type))
            .then((result) => {
                this.setState({
                    [type]: {
                        visible: true,
                        data: result.map(repo => ({
                            name: repo.full_name,
                            link: repo.html_url
                        }))    
                    }
                })    
            })
        }
    }

    render() {
        return (
            <AppContent 
                {...this.state}
                handleSearch={this.handleSearch}
                handleRepos={this.getRepos('repos')}
                handleStarred={this.getRepos('starred')}
            />
        )
    }
}

export default App