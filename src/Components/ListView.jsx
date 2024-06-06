/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import ListItem from "./ListItem";

function ListView({showModal, setShowModal}) {
    const items = useSelector((store) => store.items);

    return (
        <div>
            <ul>
                {items.map((item) => (
                    <ListItem 
                    item={item} 
                    showModal={showModal}
                    setShowModal={setShowModal}
                    key={item.id}
                    />))}
            </ul>
        </div>
    )
}

export default ListView
