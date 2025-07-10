import React from "react";

function ButtonClick() {
    const handleclick = () => {
        alert("Button Clicked");
    };
    return (
        <>
        {/* --------- in this case we are using refrence to the function -------- */}
            <div>ButtonClick app </div>
            <br />
            <button onClick={handleclick} > 
                Click Me
            </button>
            {/* -------- in this case we are using inline function ------
             <button onClick={() => alert("Button Clicked")}>
                Click Me Inline
            </button> */} 
            {/* ---------in this case we are using the function directly----
           <button onClick={handleclick()}>
                Click Me Directly
            </button>  */}
            {/* -------- in this case we are clasuare function------
            <button onClick={() => {
                handleclick();
            }}>
                click  me 
            </button>
             */}
        
        </>
    );
}

export default ButtonClick;
