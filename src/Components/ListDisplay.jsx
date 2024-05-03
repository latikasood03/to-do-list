/* eslint-disable react/prop-types */
import ListItem from "./ListItem"
;
function ListDisplay({items, onChecked, showModal, onShowModal, onDelete, onHideModal}) {
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
                    key={item.id}
                />))}
            </ul>
        </div>
    )
}

export default ListDisplay
