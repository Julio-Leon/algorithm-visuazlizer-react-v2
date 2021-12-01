import './Graph.css'
import Node from '../Node/Node'
import { useState } from 'react/cjs/react.development'
import { useEffect } from 'react'

const Graph = (props) => {

    const [currentNode, setCurrentNode] = useState([5, 5])

    const graph = props.graph

    const incrementTentativeDistance = async (checkedNode, current) => {
        await props.setGraph(props.graph.map((row, i) => {
            return row.map((node, j) => {
                return checkedNode[0] === i && checkedNode[1] === j ? {
                    tentativeDistance: graph[current[0]][current[1]].tentativeDistance + 1,
                    state: node.state,
                    visited: node.visited
                } : node
            })
        }))
    }

    const changeToVisited = async (checkedNode) => {
        await props.setGraph(props.graph.map((row, i) => {
            return row.map((node, j) => {
                if (checkedNode[0] === i && checkedNode[1] === j) {
                    console.log(i, j)
                }
                return checkedNode[0] === i && checkedNode[1] === j ? {
                    tentativeDistance: node.tentativeDistance,
                    state: 4,
                    visited: true
                } : node
            })
        }))
    }

    const onClick = () => {

        const up = graph[currentNode[0] - 1][currentNode[1]]
        const down = graph[currentNode[0] + 1][currentNode[1]]
        const left = graph[currentNode[0]][currentNode[1] - 1]
        const right = graph[currentNode[0]][currentNode[1] + 1]
        
        // Checking Up
        if (!up.visited) {
            incrementTentativeDistance([currentNode[0] - 1, currentNode[1]], currentNode)
            changeToVisited([currentNode[0] - 1, currentNode[1]])
            // setCurrentNode([currentNode[0] - 1, currentNode[1]])
            // if (!down.visited) {
            //     incrementTentativeDistance([currentNode[0] + 1, currentNode[1]] , currentNode)
            //     changeToVisited([currentNode[0] + 1, currentNode[1]])
                console.log('HERE')
            // }
        }

        // Checking Down
        else if (!down.visited) {
            incrementTentativeDistance([currentNode[0] + 1, currentNode[1]] , currentNode)
            changeToVisited([currentNode[0] + 1, currentNode[1]])
        }

        // Checking Left
        else if (!left.visited) {
            incrementTentativeDistance([currentNode[0], currentNode[1] - 1], currentNode)
            changeToVisited([currentNode[0], currentNode[1] - 1])
        }

        // Checking Right
        else if (!right.visited) {
            incrementTentativeDistance([currentNode[0], currentNode[1] + 1], currentNode)
            changeToVisited([currentNode[0], currentNode[1] + 1])
        }

        else {
            setCurrentNode()
        }

    }

    return (
        <div className="graph-container">
            <div className="graph">
                {
                    props.graph && props.graph.map((row, i) => {
                        return <div key={i} className="row flex-container">
                            {
                                row.map((node, j) => {
                                    return <Node rowIdx={i} nodeIdx={j} graph={props.graph} setGraph={props.setGraph} key={j} node={node} index={[i, j]} />
                                })
                            }
                        </div>
                    })
                }
            </div>
            <button 
                className="start-button"
                onClick={onClick}
            >
                Step up
            </button>
        </div>
    )    
}

export default Graph