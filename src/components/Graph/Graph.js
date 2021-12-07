import './Graph.css'
import Node from '../Node/Node'
import { useState } from 'react/cjs/react.development'
// import { useEffect } from 'react'

const Graph = ({graph, setGraph}) => {

    const [currentNode, setCurrentNode] = useState([5, 5])

    const [unvisitedNodesReferences, setUnvisitedNodesReferences] = useState([])

    const visitNode = (checkedNode, newDistance) => {
        setGraph(graph.map((row, i) => {
            return row.map((node, j) => {
                return checkedNode[0] === i && checkedNode[1] === j ? {
                    tentativeDistance: newDistance,
                    state: 4,
                    visited: true
                } : node
            })
        }))
    }

    const onClick = () => {

        const up = graph[currentNode[0] - 1][currentNode[1]] ? graph[currentNode[0] - 1][currentNode[1]] : false
        const down = graph[currentNode[0] + 1][currentNode[1]] ? graph[currentNode[0] + 1][currentNode[1]] : false
        const left = graph[currentNode[0]][currentNode[1] - 1] ? graph[currentNode[0]][currentNode[1] - 1] : false
        const right = graph[currentNode[0]][currentNode[1] + 1] ? graph[currentNode[0]][currentNode[1] + 1] : false

        const newTentativeDistance = graph[currentNode[0]][currentNode[1]].tentativeDistance + 1
        
        // Checking Up
        if (up) {
            if (graph[currentNode[0] - 1][currentNode[1]] && !graph[currentNode[0] - 1][currentNode[1]].visited && graph[currentNode[0] - 1][currentNode[1]].state !== 1 && graph[currentNode[0] - 1][currentNode[1]].state !== 3) {
                // incrementTentativeDistance([currentNode[0] - 1, currentNode[1]], currentNode)
                unvisitedNodesReferences.push([currentNode[0] - 1, currentNode[1]])
                visitNode([currentNode[0] - 1, currentNode[1]], newTentativeDistance)
            }
            return
        }

        // Checking Down
        if (down) {
            if (!graph[currentNode[0] + 1][currentNode[1]].visited && graph[currentNode[0] + 1][currentNode[1]].state !== 1 && graph[currentNode[0] + 1][currentNode[1]].state !== 3) {
                // incrementTentativeDistance([currentNode[0] + 1, currentNode[1]] , currentNode)
                unvisitedNodesReferences.push([currentNode[0] + 1, currentNode[1]])
                visitNode([currentNode[0] + 1, currentNode[1]], newTentativeDistance)
            }
            return
        }

        // Checking Left
        if (left) {
            if (!graph[currentNode[0]][currentNode[1] - 1].visited && graph[currentNode[0]][currentNode[1] - 1].state !== 1 && graph[currentNode[0]][currentNode[1] - 1].state !== 3) {
                // incrementTentativeDistance([currentNode[0], currentNode[1] - 1], currentNode)
                unvisitedNodesReferences.push([currentNode[0], currentNode[1] - 1])
                visitNode([currentNode[0], currentNode[1] - 1], newTentativeDistance)
            }
            return
        }

        // Checking Right
        if (right) {
            if (!graph[currentNode[0]][currentNode[1] + 1].visited && graph[currentNode[0]][currentNode[1] + 1].state !== 1 && graph[currentNode[0]][currentNode[1] + 1].state !== 3) {
                // incrementTentativeDistance([currentNode[0], currentNode[1] + 1], currentNode)
                unvisitedNodesReferences.push([currentNode[0], currentNode[1] + 1])
                visitNode([currentNode[0], currentNode[1] + 1], newTentativeDistance)
            }
            return
        }

        else {
            setCurrentNode(unvisitedNodesReferences.shift())
        }
    }

    return (
        <div className="graph-container">
            <div className="graph">
                {
                    graph && graph.map((row, i) => {
                        return <div key={i} className="row flex-container">
                            {
                                row.map((node, j) => {
                                    return <Node rowIdx={i} nodeIdx={j} graph={graph} setGraph={setGraph} key={j} node={node} index={[i, j]} />
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