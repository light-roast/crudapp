
import { useState } from "react";
import CrudForm from "../CrudForm/CrudForm";
import CrudTable from "../CrudTable/CrudTable";
const initialDB = [
    {
      id: 1,
      name: "Rick Sanchez",
      title: "A brilliant but eccentric and alcoholic scientist who is Morty's grandfather."
    },
    {
      id: 2,
      name: "Morty Smith",
      title: "Rick's timid and easily influenced grandson who goes on adventures with him."
    },
    {
      id: 3,
      name: "Summer Smith",
      title: "Morty's older sister who occasionally joins in on the adventures."
    },
    {
      id: 4,
      name: "Beth Smith",
      title: "Morty and Summer's mother, a skilled horse surgeon and Rick's daughter."
    },
    {
      id: 5,
      name: "Jerry Smith",
      title: "Morty and Summer's well-meaning but bumbling father who often gets into comical situations."
    }
  ];
export default function CrudApp() {
    const [dB, setDB] = useState(initialDB);
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
      }

      
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