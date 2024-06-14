import Read from "./components/Read";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Section from "./components/Section";

export const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
      path:"1",
      element:<Read/>,
    },
    // {
    //   path:path.replace("id",2),
    //   element:<Read/>
    // }
  ],
  },
  {
    path:"section",
    element:<Section/>,
  },
]);

function App() {

  return (
    <>
    <Provider store={store}>
      <Header/>
      <Outlet/>
    </Provider>
    </>
  )
}

export default App