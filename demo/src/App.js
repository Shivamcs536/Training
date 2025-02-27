// import React from "react";
// function App() {
//   // let x = React.createElement("div" ,{className:"App"} , 
//   //   React.createElement("h1" ,null, "Welcome to React")
//   //  )

//   let username = "Sathvik";
//   return (
//     // <div className="App">
//     //   <h1>Welcome to React</h1>
//     //     <img />
//     // </div>
//     // x
//    <div>
//      <h1>ExcleR</h1>
//      <p>para</p>
//     {username}
//     {100*100}
//    </div>
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


// function App(){
//   return (
//     <div>
//       <h1>Functional component</h1>
//     </div>
//   )
// }
// export default App;

// const App=()=>{
//   return(
//     <h1>Arrow functional component</h1>
//   )
// }
// export default App;


// ! component composition examples
// import React from "react";
// import Navbar from "./components/Navbar"
// import Main from "./components/Main";
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";

// class App extends React.Component{
//   render(){
//   return(
//     <div className="app">
//       <Navbar/>
//       <Main></Main>
//       <div className="side">
//         <Sidebar1/>
//         <Sidebar2/>
//       </div>
//       <Footer/>
//     </div>
//   )
//   }
// };
// export default App;


// ! props
// import React, { Component } from 'react'
// import CBCPropEx1 from './propexample/CBCPropEx1';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         App
//         <CBCPropEx1 
//         username="Uday"
//         age={19}
//         hobbies={["playing" , "Eating" , "sleeping"]}
//         address={{city:"Hyd" , area:"Miyapur"}}
//         isMarried={false}
//         sendFun={function(){alert("Hi Uday😁")}}
//         />
//       </div>
//     )
//   }
// }


// import React from 'react'
// import FBCPropex1 from './propexample/FBCPropex1'

// const App = () => {
//   return (
//     <div>
//       <FBCPropex1
//       username="Mahesh"
//       isLoggedIn={true}
//       profiles={["insta" , "snapchat" , "facebook" , "X" , "Threads"]}
//       />
//     </div>
//   )
// }

// export default App

// ! props.children
// import React from 'react'
// import PropsChildrenex from './propexample/PropsChildrenex'
// import SubChildProps from './propexample/SubChildProps'

// const App = () => {
//   return (
//     <div>
//       <PropsChildrenex username="Uday" company="Meta">
//         <h1>This data is passing as a props children to child component</h1>
//         <SubChildProps/>
//       </PropsChildrenex>
//     </div>
//   )
// }

// export default App

// ! props children

// import React from 'react'
// import Child1 from './propexample/Child1'

// const App = () => {
//   return (
//     <div className='app'>App
//     <hr/>
//     <Child1 university="Mallareddy University"/>
//     </div>
//   )
// }

// export default App

// ! state examples

// import React from 'react'
// import CBCStateEx from './stateexamples/CBCStateEx'
// import FBCStateEx from './stateexamples/FBCStateEx'

// const App = () => {
//   return (
//     <div>
//       {/* <CBCStateEx/> */}
//       <FBCStateEx/>
//     </div>
//   )
// }

// export default App













// import logo from './logo.svg'
// import './App.css';
// import MyForm from './components/MyForm.jsx';



// function App() {
//   return (
//     <div className="App">
//      <MyForm></MyForm>
//      </div>
//   );
// }

// export default App;




// import React from 'react'
// import UseEffectEx from './hookexample/UseEffectEx'
// import RefExample from './hookexample/RefExample'

// const App = () => {
//   return (
//     // <UseEffectEx/>
//     <RefExample/>
//   )
// }

// export default App








// import React from 'react'
// import Navbar from './component/Navbar'
// import {BrowserRouter , Routes , Route} from "react-router-dom";
// import Dashboard from './pages/Dashboard';
// import Classroom from './pages/Classroom';
// import Assessment from './pages/Assessment';
// import Store from './pages/Store';
// import Calender from './pages/Calender';
// import News from './pages/News';
// import Blog from './pages/Blog';
// import PageNotFound from './pages/PageNotFound';
// import Profile from './pages/Profile';
// import MyAccount from './pages/MyAccount';
// import MySettings from './pages/MySettings';
// const App = () => {
//   return (
//     <BrowserRouter>
//         <Navbar/>
//         <Routes>
         
//             <Route path='/' element={<Dashboard/>}/>
//             <Route path='/classroom' element={<Classroom/>}/>
//             <Route path='/assessment' element={<Assessment/>}/>
//             <Route path='/store' element={<Store/>}/>
//             <Route path='/calender' element={<Calender/>}/>
//             <Route path='/news' element={<News/>}/>
//             <Route path='/blog' element={<Blog/>}/>
//             <Route path='/profile' element={<Profile/>}/>
//                   <Route path='/profile/myaccount' element={<MyAccount/>}/>
//                   <Route path='/profile/mysetting' element={<MySettings/>}/>
//             <Route/>
//             <Route path='*' element={<PageNotFound/>}/>
//         </Routes>
//     </BrowserRouter>
//   )
// }

// export default App







import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from './crudcomponents/Home';
import Create from './crudcomponents/Create';
import Edit from './crudcomponents/Edit';
import {ToastContainer} from "react-toastify"
const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit/:userId' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App













