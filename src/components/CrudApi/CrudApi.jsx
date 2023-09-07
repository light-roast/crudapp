import { useState } from "react";
import CrudForm from "../CrudForm/CrudForm";
import CrudTable from "../CrudTable/CrudTable";

export default function CrudApi() {
    const [dB, setDB] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null);
    function createData(data) {
        data.id = Date.now();
        setDB([
            ...dB,
            data
        ]);
    }

    function updateData(data) {
      let newData = dB.map((el) => {
        return el.id === data.id ? data:el
      });
      setDB(newData);
      setDataToEdit(null);
      }

    function deleteData(id, name) {
      let isDelete = confirm(`Are you sure you want to delete this item with the name ${name}?`);
      if (isDelete) {
        let newData = dB.filter((el) => (el.id !== id));
        setDB(newData);
        setDataToEdit(null);
      };

      
    }
    return (
        <>                  
            <article className="grid-1-2">
            <CrudForm 
            createData={createData} 
            updateData={updateData} 
            dataToEdit={dataToEdit} 
            setDataToEdit={setDataToEdit}
            />
            <CrudTable 
            data={dB} 
            deleteData={deleteData}
            setDataToEdit={setDataToEdit}
            />
            </article>
        </>
        
    )
}