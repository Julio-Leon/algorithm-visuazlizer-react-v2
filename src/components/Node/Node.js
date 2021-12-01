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

    const onClick = () => {
        props.setGraph(props.graph.map((row, i) => {
            return row.map((node, j) => {
                return i === props.rowIdx && j === props.nodeIdx ? {
                    tentativeDistance: node.tentativeDistance,
                    state: 2,
                    visited: node.visited
                } : node
            })
        }))
    }

    return (
        <div 
            className="node flex-container" 
            style={{
                backgroundColor: nodeStateMap[props.node.state]
            }}
            onClick={onClick}
        >
            
        </div>
    )
}

export default Node