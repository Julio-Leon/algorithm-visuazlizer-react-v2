import './Graph.css'
import Node from '../Node/Node'

const Graph = (props) => {

    return (
        <div className="graph-container">
            {
                props.graph && props.graph.map((row, i) => {
                    return <div key={i} className="row flex-container">
                        {
                            row.map((node, j) => {
                                return <Node key={j} node={node} index={[i, j]} />
                            })
                        }
                    </div>
                })
            }
        </div>
    )    
}

export default Graph