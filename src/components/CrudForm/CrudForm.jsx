import { useEffect, useState } from "react"

export default function CrudForm({createData, updateData, dataToEdit, setDataToEdit}) {
    useEffect(() => {
        if(dataToEdit) {
            setForm(dataToEdit)
        } else {
            setForm({
                name: "",
                title: "",
                id: null
            })
        }
    }, [dataToEdit]);
    const [form, setForm] = useState({
        name: "",
        title: "",
        id: null
    });
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleReset(e) {
        setForm({
            name: "",
            title: "",
            id: null
        });
        setDataToEdit(null);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!form.name || !form.title) {
            alert('Incompleted data');
            return
        }
        if (form.id === null) {
            createData(form)
        } else {
            updateData(form)
        }
        handleReset();
    }

    return (
        <div>
            {dataToEdit === null ? <h3>Add</h3> : <h3>Edit</h3>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} value={form.name}/>
                <input type="text" name="title" placeholder="Title" onChange={handleChange} value={form.title}  />
                <input type="submit" value="Send" />
                <input type="reset" value="Reset" onClick={handleReset}/>
            </form>
        </div>
        
    )
}