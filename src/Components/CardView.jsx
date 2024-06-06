/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import CardItem from "./CardItem";


function CardView({showModal, setShowModal}) {
    const items = useSelector((store) => store.items);


    return (
        <div className="card-grid">
            {items.map((item)=>(
                <CardItem 
                    item={item} 
                    showModal={showModal}
                    setShowModal={setShowModal}
                    key={item.id}/>
            ))}
        </div>
    )
}

export default CardView
