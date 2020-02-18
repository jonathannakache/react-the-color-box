import React, { Component } from 'react'

class Box extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            // box: {
            //     backgroundColor: '',
            //     width : '',
            //     height: ''
            // }
        }
    }

    render() {
        return (
            <div style={{backgroundColor: this.props.backgroundColor, width: this.props.width + 'em', height: this.props.height + 'em'}}>
                <button>X</button>
            </div>
        )
    }
}

export default Box