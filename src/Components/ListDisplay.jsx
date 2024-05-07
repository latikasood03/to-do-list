/* eslint-disable react/prop-types */
import ListItem from "./ListItem"
;
function ListDisplay({items, onChecked, showModal, onShowModal, onDelete, onHideModal, onEdit, editItem, setEditItem, editText, setEditText}) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                <ListItem 
                    item={item} 
                    onChecked={onChecked} 
                    onDelete={onDelete} 
                    showModal={showModal} 
                    onShowModal={onShowModal} 
                    onHideModal={onHideModal}
                    onEdit={onEdit}
                    editItem={editItem}
                    setEditItem={setEditItem}
                    editText={editText}
                    setEditText={setEditText}
                    key={item.id}
                />))}
            </ul>
        </div>
    )
}

export default ListDisplay
