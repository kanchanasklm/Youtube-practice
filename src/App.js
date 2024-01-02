// import { Provider } from "react-redux";
// import "./App.css";
// import Head from "./components/Head";
// import Body from "./components/Body";
// import store from "./utils/store";
// import {RouterProvider, createBrowserRouter} from "react-router-dom";
// import MainContainer from "./components/MainContainer";
// import WatchPage from "./components/WatchPage";

// const appRouter=createBrowserRouter([
// {
//   path:"/",
//   element:<Body/>,
//   children:[
//     {
//     path:"/",
//     element:<MainContainer/>,
//     },
//     {
//       path:"watch",
//       element:<WatchPage/>,
//     },

//   ]
// },

// ]
// )
// function App() {
//   return (
//     <Provider store={store}>
//     <div>
//     <Head/>
//       <RouterProvider router={appRouter}/>
//     </div>
//     </Provider>

//     /**
//      * Head
//      * Body
//      *  Sidebar
//      *   MenuItems
//      * MainContainer
//      *  ButtonList
//      * VideoContainer
//      *  VideoCard
//      */ 
//   );
// }

// export default App;


/**
     * Head
     * Body
     *  Sidebar
     *   MenuItems
     * MainContainer
     *  ButtonList
     * VideoContainer
     *  VideoCard
     */ 

import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>,
      },
      {
        path:"watch",
        element:<WatchPage/>
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
<div>
  <Head/>
 
  <RouterProvider router={appRouter}/>
  </div>
  </Provider>


    
  );
}

export default App;
