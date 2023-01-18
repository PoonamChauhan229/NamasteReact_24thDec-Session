import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1=React.createElement("h1",{id:"title"},"Heading1 from parcel")
const heading2=React.createElement("h2",{id:"title"},"Heading2")

// want tp pass multiple child(children), we have to pass an array
const container=React.createElement("div",{id:"container"},[heading1,heading2])
console.log(heading1)
console.log(heading2)
const root=ReactDOM.createRoot(document.getElementById('root'))
// passing an react Element inside the root.
root.render(container)
