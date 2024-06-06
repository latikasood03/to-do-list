/* eslint-disable react/prop-types */
import Button from "./Button"
import DeleteConfirmationModal from "./DeleteConfirmationModal"
import { useDispatch } from "react-redux";
import { checkedItem } from "../itemsSlice";

function CardItem({item, itemToDelete, setItemToDelete}) {
    const dispatch = useDispatch();
    

    function handleChecked() {
        dispatch(checkedItem(item.id))
    }

    return (
        <>
        <div className="card-container">
            <div className="card-view">
                <input className="checkbox" type="checkbox" value={item.checked} onChange={handleChecked}/> <span>{item.title}</span>
                <p><strong>Added by:</strong> {item.addedBy}</p>
                 
                <Button to={`/edit/${item.id}`} className="btn item-btn">Edit</Button>    
                <Button onClick={() => setItemToDelete(item.id)} className="btn item-btn">Delete</Button>
            </div>
        </div>
        {itemToDelete === item.id && (
            <DeleteConfirmationModal
                item={item}
                setItemToDelete={setItemToDelete}
            />
        )}
        </>
    )
}

export default CardItem
