/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import ListItem from "./ListItem"
;
function ListDisplay() {
    const items = useSelector((store) => store.items);

    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                <ListItem 
                    item={item} 
                    key={item.id}
                />))}
            </ul>
        </div>
    )
}

export default ListDisplay
