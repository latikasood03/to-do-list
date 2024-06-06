/* eslint-disable react/prop-types */
import ToggleViewMode from "./ToggleViewMode";
import { useState } from "react";
import CardView from "./CardView";
import ListView from "./ListView";


function ItemDisplay() {
    const [viewMode, setViewMode] = useState('list');
    const [itemToDelete, setItemToDelete] = useState(null);

    return (
        <div className="list">
            <ToggleViewMode setViewMode={setViewMode}/>
            {viewMode === 'list' ? (
                <ListView 
                itemToDelete={itemToDelete}
                setItemToDelete={setItemToDelete}
                />
            ) : (
                <CardView
                itemToDelete={itemToDelete}
                setItemToDelete={setItemToDelete}          
                />
            )}
        </div>
    )
}

export default ItemDisplay
