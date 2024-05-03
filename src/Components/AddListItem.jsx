/* eslint-disable react/prop-types */
import { useState } from "react"
import Button from "./Button"
import { useNavigate } from "react-router-dom";

function AddListItem({onAddItems}) {
    const [title, setTitle] = useState("");
    const [addedBy, setAddedBy] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newItem = {title, addedBy, id: Date.now()};

        onAddItems(newItem);
    
        setTitle('');
        setAddedBy('');
        navigate('/');
    }

    return (
        <form className="main-container" onSubmit={handleSubmit}>
        <div className="container">
            <h2 className="itemHeading">Add a new item</h2>
            <div >
                <div className="inputContainer">
                    <label htmlFor="items"><h3>Title:</h3></label>
                    <input id="items" type="text" placeholder="Enter an item to add..." value={title} onChange={(e) => setTitle(e.target.value)} required/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="addBy"><h3>Added by:</h3></label>
                    <input id="addBy" type="text" placeholder="Item added by..." value={addedBy} onChange={(e) => setAddedBy(e.target.value)} required/>
                </div>
            </div>
            <div>
                <Button className="btn primary">Save</Button>
                <Button to="/" className="btn">Cancel</Button>
            </div> 
        </div>
        </form>
    )
}

export default AddListItem
