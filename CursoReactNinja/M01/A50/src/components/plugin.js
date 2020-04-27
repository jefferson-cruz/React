'use strict'

import React, { Component } from 'react'

class Plugin extends Component {
    constructor() {
        super()

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log('clicou no botao', this.myInput)
        this.myInput.focus()
    }

    render() {
        return (
            <div>
                <input type='text' ref={(node) => (this.myInput = node)} />
                <button onClick={this.handleClick}>Focus</button>
            </div>
        )
    }
}

export default Plugin