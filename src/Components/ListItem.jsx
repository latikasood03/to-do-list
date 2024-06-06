/* eslint-disable react/prop-types */
import Button from "./Button"
import DeleteConfirmationModal from "./DeleteConfirmationModal"
import { useDispatch } from "react-redux";
import { checkedItem } from "../itemsSlice";

function ListItem({ item, itemToDelete, setItemToDelete}) { 
    const dispatch = useDispatch();

    function handleChecked() {
        dispatch(checkedItem(item.id));
    }

    return (
        <div>

            <li>
                <input className="checkbox" type="checkbox" value={item.checked} onChange={handleChecked}/>
                <p>{item.title} <strong>- Added by:</strong> {item.addedBy}</p>
                 
                <Button to={`/edit/${item.id}`} className="btn item-btn">Edit</Button>    
                <Button onClick={() => setItemToDelete(item.id)} className="btn item-btn">Delete</Button>
                  
            </li>
    
            {itemToDelete === item.id &&(
                <DeleteConfirmationModal
                    item={item}
                    setItemToDelete={setItemToDelete}
                />
            )}
        </div>
    )
}

export default ListItem
