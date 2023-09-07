
import CrudApi from "./components/CrudApi/CrudApi"
import CrudApp from "./components/CrudApp/CrudApp"



function App() {
  

  return (
    <>
      <h1>CRUD using a fake api by JSON server</h1>
      <CrudApi/>
      <hr></hr>
      <h1>Fake CRUD App using React</h1>
      <CrudApp/>
    </>
  )
}

export default App
