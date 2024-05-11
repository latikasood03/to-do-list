/* eslint-disable react/prop-types */
import Button from "./Button"
import DeleteConfirmationModal from "./DeleteConfirmationModal"

function ListItem({item, onChecked, onDelete, showModal, onShowModal, onHideModal}) { 

    return (
        <div>

            <li>
                <input className="checkbox" type="checkbox" value={item.checked} onChange={() => onChecked(item.id)}/>
                <p>{item.title} <strong>- Added by:</strong> {item.addedBy}</p>
                 
                <Button to={`/edit/${item.id}`} className="btn item-btn">Edit</Button>    
                <Button onClick={() => onShowModal(item.id)} className="btn item-btn">Delete</Button>
                         
            </li>
    
            {showModal && (
                <DeleteConfirmationModal
                    onDelete={onDelete}
                    onHideModal={onHideModal}
                />
            )}
        </div>
    )
}

export default ListItem
