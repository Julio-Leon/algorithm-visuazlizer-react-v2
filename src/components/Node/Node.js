import './Node.css'

const Node = (props) => {

    const nodeStateMap = {
        0: 'white',
        1: 'green',
        2: 'red',
        3: 'black',
        4: 'purple',
        5: 'blue'
    }

    return (
        <div className="node flex-container" style={{
            backgroundColor: nodeStateMap[props.node.state]
        }}>
            
        </div>
    )
}

export default Node