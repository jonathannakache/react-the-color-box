import React, { Component } from 'react'
// import NewBoxForm from './NewBoxForm';
import Box from './Box'
import NewBoxForm from './NewBoxForm'

class BoxList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             boxes: [
                 {'backgroundColor': 'blue', 'width': '20',height: '14'},
                 {'backgroundColor': 'red', 'width': '21',height: '4'}
             ]
        }
    }
    addBox = box => {
        this.setState((prevState) => ({
            boxes : [...prevState.boxes, box] 
        }))
    }

    render() {
        const boxes = this.state.boxes.map((box) => (
            <Box
                backgroundColor={box.backgroundColor}
                width={box.width}
                height={box.height}
             />
        ))  
        return (
            <div>
                <NewBoxForm addBox={this.addBox}/>
                {boxes}
            </div>
        )
    }
}

export default BoxList
