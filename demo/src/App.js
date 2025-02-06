// import React from "react";
// function App(){
//   let username="Sathvik";
//   return(
//     <div>
//      <h1>ExcelR</h1>
//       <p>para</p>
//       {username}
//       {100*100}
//     </div>
//   );
// }
// export default App;


// function App(){
//   return(
//     <div>
//       <h1>Functional Component </h1>
//     </div>
//   )
// }
// export default app;


// const App=()=>{
//   return(
    
//   )
// }


// import logo from './logo.svg';
// import './App.css';
// import React from "react";

// function App() {
//   let username = "Shivam";
//   return (
//     <div>
//       <h1>company</h1>
//       <p>para</p>
//       {username}
//       {100*100}
//     </div>
//   );
// }

// export default App;


// import React from "react";

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>Class Component</h1>
//       </div>
//     )
//   }
// }

// export default App;



// component composition examples

// import React from "react";
// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";

// class App extends React.Component{
//   render(){
//     return(
//       <div className="app">
//         <Navbar/>
//         <Main></Main>
//         <div className="side">
//           <Sidebar1/>
//           <Sidebar2/>

//         </div>
//         <Footer/>
//       </div>
//     )
//   }
// };
// export default App;





// props

// import React, { Component } from 'react'
// import CBCPropEx1 from './propexample/CBCPropEx1';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         App
//         <CBCPropEx1 
//         username="Nithish"
//         age={19}
//         hobbies={["playing","eating","studying"]}
//         address={{city:"Hyd" , area:"Miyapur"}}
//         isMarried={false}
//         sendFun={function(){alert("Hi Nithish")}}
//         />
//       </div>
//     )
//   }
// }





// props children
// import React from 'react'
// import PropsChildren from './propexample/PropsChildren'
// import SubChildProps from './propexample/SubChildProps'

// const App = () => {
//   return (
//     <div>
//       <PropsChildren username="Uday" company="Meta">
//         <h1> This data is passing as a props children to child component </h1>
//         <SubChildProps/>
//       </PropsChildren>
//     </div>
//   )
// }

// export default App



// state examples
import React from 'react'
import CBCStateEx from './stateexamples/CBCStateEx'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App


