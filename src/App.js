import KanbanBoard from './components/KanbanBoard';
import Navbar from './components/Navbar';
import './App.css';
import { useState } from 'react';

function App() {

  const [grouping, setGrouping] = useState("Status");
  const [ordering, setOrdering] = useState("Priority");

  return (
    <div>
     <Navbar
        onGroupingChange={setGrouping}
        onOrderingChange={setOrdering}
      />
      <KanbanBoard grouping={grouping} ordering={ordering} /> 
    </div>
  );
}

export default App;


