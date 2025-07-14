import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Testimonials from "./pages/Testimonials";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="aboutme" element={<AboutMe />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="skills" element={<Skills />} />
      <Route path="blog" element={<Blog />} />
      <Route path="resume" element={<Resume />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
