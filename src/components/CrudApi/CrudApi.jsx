import { useEffect, useState } from "react";
import CrudForm from "../CrudForm/CrudForm";
import CrudTable from "../CrudTable/CrudTable";
import { helpFetch } from "../../helpers/helphttp";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";

export default function CrudApi() {
    let url = "http://localhost:3000/RMCharacters";
    const [dB, setDB] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      helpFetch().get(url).then((result) => {
        if(!result.err) {
          setDB(result);
          setError(null);
        } else {
          setDB(null)
          setError(result);
        }
      setLoading(false);
            })
    }, [])
    
    
    
    function createData(data) {
        data.id = Date.now();
        const options = {
          body: data, 
          headers: {
            "content-type": "application/json"
          }
        };
        helpFetch().post(url, options).then((res) => {
          console.log(res)
          if(!res.err) {
            setDB([...dB, res]);
          } else {
            setError(res);
          }
        });
        
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
            {loading && <Loader />}
            {error && <Message
                        msg={`Error ${error.status}: ${error.statusText}`}
                        bgColor="#dc3545"
                        />}
            {dB && <CrudTable 
              data={dB} 
              deleteData={deleteData}
              setDataToEdit={setDataToEdit}
            />}
            
            </article>
        </>
        
    )
}