import React from "react";
import { useCounter } from "./hooks/useConter";
const DrawComponent = ({counter})=>{
    
    return (
    <div>
        <img src={`/assets/${counter}.jpg`} alt="test" />
    </div>
    );
}
export default DrawComponent;