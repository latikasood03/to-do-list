/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import ListItem from "./ListItem";

function ListView({itemToDelete, setItemToDelete}) {
    const items = useSelector((store) => store.items);

    return (
        <div>
            <ul>
                {items.map((item) => (
                    <ListItem 
                    item={item} 
                    itemToDelete={itemToDelete}
                    setItemToDelete={setItemToDelete} 
                    key={item.id}
                    />))}
            </ul>
        </div>
    )
}

export default ListView
