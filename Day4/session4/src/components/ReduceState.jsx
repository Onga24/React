import React, { useReducer } from "react";

const initializeState = {
    count: 0,
    step: 1,
};

function reducer(state, action){
    switch(action.type){
        case'inc':
            return {...state , count:state.count + state.step}
        case'dec':
            return {...state , count:state.count - state.step }
        case 'res':
            return {initializeState}
        case 'setStep':
            return {...state , step:action.payload }
        default:
            throw new Error ("unkonw error")
    } 
}

export default function ReduceState() {

    const [state, dispatch] = useReducer(reducer, initializeState);

    function handelIncremnt() {
        dispatch({ type: "inc" });
    }
    function handelDecremnt() {
        dispatch({ type: "dec" });
    }
    function handelReset(e) {
        dispatch({ type: "res" });
    }
    function handelStepChange(e) {
        dispatch({ type: "setStep", payload: Number(e.target.value) });
    }

    return (
        <>
            <div style={{ padding: "1rem", border: "1px solid gray" }}>
                <h2>Count:{state.count}</h2>
                <label>
                    Step
                    <input
                        type="number"
                        style={{ marginLeft: "0.5rem", width: "3rem" }}
                        value={state.step}
                        onChange={handelStepChange}
                    />
                </label>

                <button onClick={handelIncremnt} style={{ margin: "0.5rem" }}>
                    Increment
                </button>
                <button onClick={handelDecremnt} style={{ margin: "0.5rem" }}>
                    Decrement
                </button>
                <button onClick={handelReset} style={{ margin: "0.5rem" }}>
                    Reset
                </button>
            </div>
        </>
    );
}
