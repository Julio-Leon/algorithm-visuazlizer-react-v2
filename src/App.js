import React, { useEffect, useState } from 'react';
import './App.css';
import Graph from './components/Graph/Graph';

function App() {

  const [graph, setGraph] = useState(null)
  const [unvisitedNodes, setUnvisitedNodes] = useState([])

  const createGraph = () => {
    let newGraph = []
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
        setUnvisitedNodes([...unvisitedNodes, newNode])
      }
      newGraph.push(newRow)
    }
    setGraph(newGraph)
  }

  useEffect(() => {
    createGraph()
  }, [])

  return (
    <div className="App flex-container">
      <Graph graph={graph} />
    </div>
  );
}

export default App;


