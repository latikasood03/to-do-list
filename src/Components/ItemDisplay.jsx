/* eslint-disable react/prop-types */
import ToggleViewMode from "./ToggleViewMode";
import { useState } from "react";
import CardView from "./CardView";
import ListView from "./ListView";


function ItemDisplay() {
    const [viewMode, setViewMode] = useState('list');
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="list">
            <ToggleViewMode setViewMode={setViewMode}/>
            {viewMode === 'list' ? (
                <ListView 
                showModal={showModal}
                setShowModal={setShowModal}
                />
            ) : (
                <CardView 
                showModal={showModal}
                setShowModal={setShowModal}
                />
            )}
        </div>
    )
}

export default ItemDisplay
