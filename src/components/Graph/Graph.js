import './Graph.css'
import Node from '../Node/Node'
import { useState } from 'react/cjs/react.development'
// import { useEffect } from 'react'

const Graph = ({graph, setGraph}) => {

    const [currentNode, setCurrentNode] = useState([5, 5])

    const [unvisitedNodesReferences, setUnvisitedNodesReferences] = useState([])

    const onClick = () => {

        // Stop it from here using math/numbers

        const newTentativeDistance = graph[currentNode[0]][currentNode[1]].tentativeDistance + 1

        // let upThere = currentNode[0] >= 0
        // let downThere = currentNode[0] < 25
        // let leftThere = currentNode[1] >= 0
        // let rightThere = currentNode[1] < 25

        if (!graph[currentNode[0]][currentNode[1]].visited) {
            console.log('------------------')
            console.log(graph[currentNode[0]][currentNode[1]].neighborghs)
            console.log('------------------')
            console.log('------------------')
            graph[currentNode[0]][currentNode[1]].neighborghs.forEach((neighbor) => {
                console.log(neighbor)
                unvisitedNodesReferences.push([neighbor[0], neighbor[1]])
            })
            graph[currentNode[0]][currentNode[1]].neighborghs.forEach(neighbor => {
                    setGraph(graph.map((row, i) => {
                        return row.map((node, j) => {
                            if (currentNode[0] === i && currentNode[1] === j) {
                                return {
                                    tentativeDistance: graph[currentNode[0]][currentNode[1]].tentativeDistance,
                                    state: 4,
                                    visited: true,
                                    neighborghs: graph[currentNode[0]][currentNode[1]].neighborghs
                                }
                            }
                            if (neighbor[0] === i && neighbor[1] === j) {
                                return {
                                    tentativeDistance: newTentativeDistance,
                                    state: 4,
                                    visited: graph[neighbor[0]][neighbor[1]].visited,
                                    neighborghs: graph[neighbor[0]][neighbor[1]].neighborghs
                                }
                            } else {
                                return node
                            }
                        })
                    }))
            })
            // visitNode(currentNode, graph[currentNode[0]][currentNode[1]].neighborghs, newTentativeDistance)
        } else {
            const temp = unvisitedNodesReferences.shift()
            console.log('------------------')
            console.log(temp)
            console.log('------------------')
            setCurrentNode(temp)
        }
        // console.log(currentNode)
        


        // const up = graph[currentNode[0] - 1][currentNode[1]] ? graph[currentNode[0] - 1][currentNode[1]] : false
        // const down = graph[currentNode[0] + 1][currentNode[1]] ? graph[currentNode[0] + 1][currentNode[1]] : false
        // const left = graph[currentNode[0]][currentNode[1] - 1] ? graph[currentNode[0]][currentNode[1] - 1] : false
        // const right = graph[currentNode[0]][currentNode[1] + 1] ? graph[currentNode[0]][currentNode[1] + 1] : false

        // if (up.visited && down.visited && left.visited && right.visited) {
        // if ((upThere ? graph[currentNode[0] - 1][currentNode[1]].visited : false))
            // setCurrentNode(unvisitedNodesReferences.shift())
        // }
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