import React, { useEffect, useState } from 'react';
import './App.css';
import Graph from './components/Graph/Graph';

function App() {

  const [graph, setGraph] = useState(null)
  const [unvisitedNodes, setUnvisitedNodes] = useState([])
  // const unvisitedNodes = []

  const createGraph = () => {
    const newGraph = []
    const unvisitedNodesTemp = []
    for (let i = 0; i < 25; i++) {
      let newRow = []
      for (let j = 0; j < 25; j++) {
        const newNode = i === 5 && j === 5 ? {
          tentativeDistance: 0,
          state: 1,
          visited: false
        } : {
          tentativeDistance: Infinity,
          state: 0,
          visited: false
        }
        newNode.neighborghs = []
        // Up Neighbor
        if (i - 1 >= 0 && i - 1 < 25 && j >= 0 && j < 25) {
          newNode.neighborghs.push([i - 1, j])
        }
        // Right Neighbor
        if (i >= 0 && i < 25 && j + 1 >= 0 && j + 1 < 25) {
          newNode.neighborghs.push([i, j + 1])
        }
        // Down Neighbor
        if (i + 1 >= 0 && i + 1 < 25 && j >= 0 && j < 25) {
          newNode.neighborghs.push([i + 1, j])
        }
        // Left Neighbor
        if (i >= 0 && i < 25 && j - 1 >= 0 && j - 1 < 25) {
          newNode.neighborghs.push([i, j - 1])
        }
        newRow.push(newNode)
        unvisitedNodesTemp.push(newNode)
      }
      newGraph.push(newRow)
    }
    setGraph(newGraph)
    setUnvisitedNodes(unvisitedNodesTemp)
    console.log(newGraph)
    // console.log(unvisitedNodesTemp)
  }

  useEffect(() => {
    createGraph()
  }, [])

  return (
    <div className="App flex-container">
      <Graph 
        // unvisitedNodes={unvisitedNodes} 
        // setUnvisitedNodes={setUnvisitedNodes} 
        graph={graph} 
        setGraph={setGraph} 
      />
    </div>
  );
}

export default App;


