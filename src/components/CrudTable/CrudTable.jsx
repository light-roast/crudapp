import CrudTableRow from "../CrudTableRow/CrudTableRow"

export default function CrudTable({data, setDataToEdit, deleteData}) {
    return (
        <div>
            <h3>Table</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? <tr><td colSpan="3">No data</td></tr> : data.map(char => {
                        return <CrudTableRow 
                                char={char} 
                                key={char.id} 
                                setDataToEdit={setDataToEdit} 
                                deleteData={deleteData}
                                />
                    })}
                </tbody>
            </table>
        </div>
        
    )
}

