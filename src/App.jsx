import './App.css'
import { useState } from 'react'
import NavBar from './component/Navbar'
import Container from './component/Container'
import SearchInput from './component/SearchInput'
import Info from './component/Info'
import Empty from './component/Empty'
import Todos from './component/Todos'


function App() {

  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([
    {title : 'manggis', count : 1},
    {title : 'semangka', count : 1},
    {title : 'jeruk', count : 1}
  ])

  function totalCounts(todos){
    let total = 0
    for(let i = 0; i < todos.length; i++){
      total += todos[i].count
    }
    return total
  }

  let handleSubmit = (e) => {
    e.preventDefault()

    if(!value){
      return alert('Barang yang dimasukkan tidak boleh kosong!')
    }

    const addedTodos = [...todos, {
      title : value,
      count : 1
    }]
    setTodos(addedTodos)
    setValue('')
  }

  let tambah = (index) => {
    const newTodos = [...todos]

    newTodos[index].count++;
    setTodos(newTodos);
  }
  function kurang(index){
    const newTodos = [...todos]

    if(newTodos[index].count > 1){
      newTodos[index].count--;
    }else{
      newTodos.splice(index, 1) // menghapus arrray dengan indeks ke index
    }
    setTodos(newTodos);
  }

  return (
    <div>
      <NavBar />
      <Container> 
        <SearchInput
          onSubmit={handleSubmit}
          onChange={(e) => {setValue(e.target.value)}}
          value={value}
        />
        <Info
          todos={todos}
          totalCounts={totalCounts}
          onClick={() => {setTodos([])}}
        />
        {todos.length > 0 ? (
          <Todos 
          todos={todos}
          kurang={kurang}
          tambah={tambah}
          />
        ): (
          <Empty />
        )}
      </Container>
    </div>
  )
}
export default App
