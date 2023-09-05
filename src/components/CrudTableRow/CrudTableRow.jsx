export default function CrudTableRow({char, setDataToEdit, deleteData}) {
    let {name, title, id} = char;
    return(
        <tr>
            <td>{name}</td>
            <td>{title}</td>
            <td>
                <button onClick={() => setDataToEdit(char)}>Edit</button>
                <button onClick={()=> deleteData(id)}>Delete</button>
            </td>
        </tr>    
           )
}