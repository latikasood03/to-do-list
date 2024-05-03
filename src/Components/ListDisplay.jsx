/* eslint-disable react/prop-types */
import ListItem from "./ListItem"
;
function ListDisplay({items, onChecked}) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (<ListItem item={item} onChecked={onChecked} key={item.id}/>))}
            </ul>
        </div>
    )
}

export default ListDisplay
