/* eslint-disable react/prop-types */
import Button from "./Button"

function ListItem({item, onChecked}) {

    return (
        <div>
            <li>
                <input className="checkbox" type="checkbox" value={item.checked} onChange={() => onChecked(item.id)}/>
                <p>{item.title} <strong>- Added by:</strong> {item.addedBy}</p>
                <Button className="btn item-btn">Edit</Button>
                <Button className="btn item-btn">Delete</Button>
            </li>

        </div>
    )
}

export default ListItem
