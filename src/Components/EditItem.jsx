/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
import { useNavigate, useParams } from 'react-router-dom';

function EditItem({ items, onCloseEdit, setEditItem, setItems}) {
    
    const { id } = useParams();
    const item = items.find(item => item.id === parseInt(id));
    const [editText, setEditText] = useState(item.title);
    const navigate = useNavigate();

 
    function handleSubmit(e) {
        e.preventDefault()
        setItems((items) => 
          items.map((item) =>
            item.id === parseInt(id) ? {...item, title: editText} : item
          )
        )
        
        setEditItem(null);
        setEditText("");
        navigate('/');
      }


    return (
        <form className="main-container" onSubmit={handleSubmit}>
            <div className="container">
                    <h2>Edit title</h2>
                    <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)}/>
    
                    <div>
                        <Button className="btn item-btn">Save</Button>
                        <Button onClick={onCloseEdit} className="btn item-btn">Cancel</Button>
                    </div>
                
            </div>
        </form>
    )
}


export default EditItem

