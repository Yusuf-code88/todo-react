import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [item, setItem] = useState<string[]>([]);

  const Add = (a) => {
    a.preventDefault()
    if (inputValue.trim()) {
      setItem([...item, inputValue]);
      setInputValue("");
    }
  };
  const Remove = (index: number) => {
    const newItems = item.filter((_, i) => i !== index);
    setItem(newItems);
  };


  return (
    <div className="container">
       <form onSubmit={Add}>
       <input 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Enter todo..."
        />
        <button onClick={Add} className="add-button">Add</button>
       </form>
     <div className="main-box">
     {item.map((item, index) => (
          <div className="box" key={index}>
            {item}
            <button className="done-button" >Done</button>
            <button onClick={() => Remove(index)} className="remove-button">Remove</button>
          </div>
        ))}
     </div>
        </div>
  );
}
