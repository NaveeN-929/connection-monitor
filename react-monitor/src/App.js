import React, { useState, useEffect } from 'react';
import Hello from './Hello';
import axios from 'axios';

function App() {
  const [numberOfConnections, setNumberOfConnections] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:80/connections');
        setNumberOfConnections(response.data.numberOfConnections);
      } catch (error) {
        console.error('Error fetching data from Express API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Hello name="Naveen" numberOfConnections={numberOfConnections} />
    </div>
  );
}

export default App;

