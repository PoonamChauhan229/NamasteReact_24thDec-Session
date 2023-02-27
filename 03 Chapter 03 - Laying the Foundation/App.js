import React from 'react';
import ReactDOM from 'react-dom/client';

//React Element=>Object
const heading=(
    // JSx
    <h1 id='title' key='h2'>
        Namaste React</h1>
)
console.log("Any JS code")
// Functional Component
const Title=()=>(
    // JSx
    <h1 id='title'>
        Namaste Title</h1>
)
const xyz=200;
// Functional component:
// Name of the component starts with cappital letter.-It is not mandatory but a good practice
const HeaderComponent=()=>{

    
    return (
        <div>
            {console.log("Any JS code")}
            {heading}
            {Title()}//normal Js function: it can be called in this way as well
            <Title/>
            <h1>First Functional Component</h1>
            <h2>First Functional Component</h2>
            {console.log(2)}

            {/* { inside this any JS will work here} */}
           {xyz}
        </div>
    )
};

const root=ReactDOM.createRoot(document.getElementById('root'))
// passing an react Element inside the root.
root.render(<HeaderComponent/>)