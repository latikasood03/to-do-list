/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { editItem } from '../itemsSlice';

function EditItem() {
    const items = useSelector((store) => store.items);
    const dispatch = useDispatch();
    const { id } = useParams();
    const item = items.find(item => item.id === parseInt(id));
    const [editText, setEditText] = useState(item.title);
    const navigate = useNavigate();
    
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(editItem( parseInt(id), editText ));

        setEditText("");
        navigate('/');
      }

    return (
        <form className="main-container" onSubmit={handleSubmit}>
            <div className="container">
                    <h2>Edit title</h2>
                    <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} required/>
    
                    <div>
                        <Button className="btn item-btn">Save</Button>
                        <Button to="/" className="btn item-btn">Cancel</Button>
                    </div>
                
            </div>
        </form>
    )
}


export default EditItem

