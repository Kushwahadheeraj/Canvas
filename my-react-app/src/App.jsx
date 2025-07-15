import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#4caf50'; // Modern green
    ctx.strokeStyle = '#222';
    ctx.lineWidth = 2;
    ctx.fillRect(20, 20, 160, 110);
    ctx.strokeRect(20, 20, 160, 110);
  }, []);

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="container">
      <div className="canvas-card">
        <h1>Canvas API Demo</h1>
        <p className="description">
          This is a modern React + Vite example that demonstrates the use of the Canvas API.<br/>
          The green rectangle is drawn using JavaScript.
        </p>
        <canvas ref={canvasRef} width={200} height={150} id="canvas"></canvas>
        <button className="clear-btn" onClick={handleClear}>Clear Canvas</button>
      </div>
    </div>
  );
}

export default App;
