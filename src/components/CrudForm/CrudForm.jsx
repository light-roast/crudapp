import { useState } from "react"

export default function CrudForm() {
    const [form, setForm] = useState({
        name: "",
        title: "",
        id: null
    });
    function handleChange(e) {

    }

    function handleReset(e) {

    }

    function handleSubmit(e) {
        
    }

    return (
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} value={form.name}/>
                <input type="text" name="title" placeholder="Title" onChange={handleChange} value={form.title}  />
                <input type="submit" value="Send" />
                <input type="reset" value="Reset" onClick={handleReset}/>
            </form>
        </div>
        
    )
}