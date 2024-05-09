/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button"

function EditItem({item, onChecked, onCloseEdit, setEditItem, setItems}) {
    const [editText, setEditText] = useState(item.title);
 
    function handleEdit(id) {
        setItems((items) => 
          items.map((item) =>
            item.id === id ? {...item, title: editText} : item
          )
        )
        
        setEditItem(null);
        setEditText("");
      }

    return (
        <div>

            <li>
                <input className="checkbox" type="checkbox" value={item.checked} onChange={() => onChecked(item.id)}/>
                <div> 
                    <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)}/>
                    <strong>- Added by:</strong> {item.addedBy}
                </div>

                <Button onClick={() => handleEdit(item.id)} className="btn item-btn">Save</Button>
                <Button onClick={onCloseEdit} className="btn item-btn">Cancel</Button>
               
                
            </li>

        </div>
    )
}


export default EditItem
