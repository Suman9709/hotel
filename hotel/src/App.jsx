// import React from 'react'
// import Home from './pages/Home'
// import Navbar from './components/Navbar'
// import About from './pages/About'
// import Footer from './components/Footer'
// import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

// // Layout component (Navbar + Footer always visible)
// const AppLayout = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className=""> {/* give space for fixed navbar */}
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   )
// }

// // Router setup
// const appRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <AppLayout />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       }
//     ]
//   }
// ])

// // Main App
// const App = () => {
//   return <RouterProvider router={appRouter} />
// }

// export default App

import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Events from "./pages/Events";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen  bg-gradient-to-b from-[#001526] via-[#00263b] to-[#001526]">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Sections */}
      <main className="mt-12">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>
        <section>
          <Events />
        </section>

        {/* Add more sections if needed */}
        {/* <section id="rooms">...</section> */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
