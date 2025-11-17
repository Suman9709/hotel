import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import Rooms from './pages/Rooms'
import Events from './pages/Events'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/rooms',
        // element: <Rooms />
      },
      {
        path: '/events',
        element: <Events />
      },
    ]
    // children: [
  }
])

const App = () => {
  return (

    <RouterProvider router={appRouter} />

  )
}

export default App

// import React from "react";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Footer from "./components/Footer";
// import Events from "./pages/Events";


// const appRouter = createBrowserRouter([
//   {

//   }
// ])

// const App = () => {
//   return (
//     <div className="flex flex-col min-h-screen  ">
//       {/* Fixed Navbar */}
//       <Navbar />

//       {/* Sections */}
//       <main className="">
//         <section id="home">
//           <Home />
//         </section>

//         <section id="about">
//           <About />
//         </section>
//         <section>
//           <Events />
//         </section>

//         {/* Add more sections if needed */}
//         {/* <section id="rooms">...</section> */}
//       </main>



//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default App;
