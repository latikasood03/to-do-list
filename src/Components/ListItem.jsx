/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button"
import DeleteConfirmationModal from "./DeleteConfirmationModal"
import { useDispatch } from "react-redux";
import { checkedItem } from "../itemsSlice";

function ListItem({ item }) { 
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    function handleChecked() {
        dispatch(checkedItem(item.id))
    }

    return (
        <div>

            <li>
                <input className="checkbox" type="checkbox" value={item.checked} onChange={handleChecked}/>
                <p>{item.title} <strong>- Added by:</strong> {item.addedBy}</p>
                 
                <Button to={`/edit/${item.id}`} className="btn item-btn">Edit</Button>    
                <Button onClick={() => setShowModal(true)} className="btn item-btn">Delete</Button>
                         
            </li>
    
            {showModal && (
                <DeleteConfirmationModal
                    item={item}
                    setShowModal={setShowModal}
                />
            )}
        </div>
    )
}

export default ListItem
