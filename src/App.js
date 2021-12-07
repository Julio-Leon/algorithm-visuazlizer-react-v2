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
        newRow.push(newNode)
        unvisitedNodesTemp.push(newNode)
        // const newArray = [...unvisitedNodes]
        // newArray.push(newNode)
        // setUnvisitedNodes(newArray)
        // console.log(newArray)
        // setUnvisitedNodes([...unvisitedNodes, newNode])
      }
      newGraph.push(newRow)
    }
    setGraph(newGraph)
    setUnvisitedNodes(unvisitedNodesTemp)
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


