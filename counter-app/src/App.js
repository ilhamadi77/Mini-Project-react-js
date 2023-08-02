// import './App.css';
import { useState } from "react";
import Navbar from './components/Navbar';
import Container from "./components/Container";
import SearchInput from "./components/SearchInput";
import Info from './components/Info';
import Todos from "./components/Todos";
import Empty from "./components/Empty"

function App() {

  const [value, setValue ] = useState("")
  const [todos, setTodos ] = useState([
    {title: "susu ultra", count: 1},
    {title: "Tahu Sumedang", count: 1},
    {title: "Semangka", count: 1},
  ]);

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(!value) {
      alert("no Blank List! ")
      return
    }

    const addedTodos = [...todos, {
      title: value,
      count: 1
    }]

    setTodos(addedTodos)
    setValue("")
  }
  const handleAdditionCount = (index) =>{
    const newTodos = [...todos];
    newTodos[index].count = newTodos[index].count + 1;

    setTodos(newTodos)
  }

  const handleSubstractionCount= (index) => {
    const newTodos= [...todos];
    const indexedCountProperty = newTodos[index].count

    if (indexedCountProperty > 0){
      newTodos[index].count = newTodos[index].count - 1
    }else{
      newTodos.splice(index, 1)
    }
    setTodos(newTodos)
  }

  // info
  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count
    },0)

    return totalCounts
  }

  // end info function

  return (
    <>
    <Navbar />
    <Container >
      <SearchInput
        onSubmit= {handleSubmit}
        onChange= {(e) => setValue(e.target.value)}
        value = {value}
      />
      <Info
        todosLength = {todos.length}
        totalCounts = {getTotalCounts()}
        onDelete= {()=> setTodos([])}
      />
      {todos.length > 0 ? (
        <Todos 
          todos= {todos}
          onSubstraction= {(index) => handleSubstractionCount(index)}
          onAdditon= {(index) => handleAdditionCount(index)}
        />
      ):(
      <Empty />
      )}
    </Container>
    </>
  );
}

export default App;
