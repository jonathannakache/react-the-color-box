import React, { Component } from 'react'

class NewBoxForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                backgroundColor: '',
                width : '',
                height: ''   
        }
    }
    handleSubmit = event => {
        event.preventDefault()
        this.props.addBox(this.state)
        this.setState({backgroundColor: '', width :'', height: ''})
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{textAlign:'center', margin: 'auto', width: '400px'}}>
                <br/>
                <label htmlFor="backgroundColor">Background Color</label>
                <input name='backgroundColor' id="backgroundColor" value={this.state.backgroundColor} onChange={this.handleChange} />
                <br/><br/>
                <label htmlFor="width">Width</label>
                <input name='width' id="width" value={this.state.width} onChange={this.handleChange} />
                <br/><br/>
                <label htmlFor="height">Height</label>
                <input name='height' id="" value={this.state.height} onChange={this.handleChange} />
                <br/><br/>
                <button>Generer</button>
            </form>
        )
    }
}

export default NewBoxForm
