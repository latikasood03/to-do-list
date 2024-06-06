/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import CardItem from "./CardItem";


function CardView({itemToDelete, setItemToDelete}) {
    const items = useSelector((store) => store.items);


    return (
        <div className="card-grid">
            {items.map((item)=>(
                <CardItem 
                    item={item} 
                    itemToDelete={itemToDelete}
                setItemToDelete={setItemToDelete} 
                    key={item.id}/>
            ))}
            
        </div>
    )
}

export default CardView
