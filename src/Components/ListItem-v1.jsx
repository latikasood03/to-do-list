/* eslint-disable react/prop-types */
import Button from "./Button"
import DeleteConfirmationModal from "./DeleteConfirmationModal"

function ListItem({item, onChecked, onDelete, showModal, onShowModal, onHideModal, onEdit, editItem, setEditItem, editText, setEditText, onCloseEdit}) {
 

    return (
        <div>

            <li>
                <input className="checkbox" type="checkbox" value={item.checked} onChange={() => onChecked(item.id)}/>

                {editItem === item.id ? (
                <div> 
                    <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)}/>
                    <strong>- Added by:</strong> {item.addedBy}
                </div>
                ) : (
                <p>{item.title} <strong>- Added by:</strong> {item.addedBy}</p>
                )}   

                {editItem === item.id ? (
                    <Button onClick={() => onEdit(item.id)} className="btn item-btn">Save</Button>
                ) : (
                    <Button onClick={() => setEditItem(item.id)} className="btn item-btn">Edit</Button>
                )}

                {editItem === item.id ? (
                    <Button onClick={onCloseEdit} className="btn item-btn">Cancel</Button>
                ) : (
                    <Button onClick={() => onShowModal(item.id)} className="btn item-btn">Delete</Button>
                )}
                
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
