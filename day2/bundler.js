
const ele=React.createElement("h1",{className:"yes",id:"no",style:{color:"red",background:"yellow"}},"hello bhai kese ho");
const ele1=React.createElement("h1",{className:"yess",id:"no",style:{color:"yellow",background:"red"}},"what do you do now");

const div=React.createElement('div',{},[ele,ele1])
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(div);
