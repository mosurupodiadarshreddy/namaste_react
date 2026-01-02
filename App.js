//  const heading = React.createElement("h1", {h1:"heading"}, "Hello world from react");

//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);



/*
    <div id="parent">
        <div id="child">
            <h1>i am h1 tag</h1>
        </div>
    </div>
*/
const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    [React.createElement(
        "div", {id:"child"}, 
        [React.createElement
        ("h1", {}, "hi i am h1 tag"),
        ("h2", {}, "hi i am h2 tag")]
    ),
    React.createElement(
        "div", {id:"child"}, 
        [React.createElement
        ("h1", {}, "hi i am h1 tag"),
        ("h2", {}, "hi i am h2 tag")]
    )]
    // so this makes more complex right to write code in react writing react element and then putting them in to root dom and giving to dom make complex right 
     // so to resolve this issue jsx comes to picture
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);