function App() {
  
  const handlerChange = (e: any) => {
    console.log(e.target.value)
  }

  return (
    <div>
      <input type="text" onChange={handlerChange}/>    
    </div>
  )
}

export default App;
