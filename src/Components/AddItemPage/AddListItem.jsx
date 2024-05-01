import { useState } from "react"
import Button from "../Button"

function AddListItem() {
    const [itemName, setItemName] = useState("")

    function handleAddItem() {

    }

    return (
        <div className="container">
            <div className="inputBox">
                <label htmlFor="items"><h2>Add a new list item</h2></label>
                <input id="items" type="text" placeholder="Enter an item to add..." value={itemName} onChange={(e) => setItemName(e.target.value)}/>
            </div>
            <div>
                <Button onClick={handleAddItem} className="btn primary">Save</Button>
                <Button to="/" className="btn">Cancel</Button>
            </div> 
        </div>
    )
}

export default AddListItem
