export default function CrudTableRow({char}) {
    return(
        <tr>
            <td>{char.name}</td>
            <td>{char.title}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>    
           )
}