import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement("h1",{},"Hello world");
        console.log(heading);
        const parent = ReactDOM.createRoot(document.getElementById("root"));
        parent.render(heading);