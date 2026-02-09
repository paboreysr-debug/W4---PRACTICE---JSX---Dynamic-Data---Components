import { useState } from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState("");
  const items = ["Apple", "Banana", "Cherry"];
  const filteredItems = items.filter(item => item.includes(search));

  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} />
      {filteredItems.map(item => <div key={item}>{item}</div>)}
    </div>
  );
}
export default App
