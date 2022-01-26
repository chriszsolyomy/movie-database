// AppRouter
import { Routes, Route } from "react-router-dom";
// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Favourites from '../pages/Favourites';
import IndividualMovie from '../pages/IndividualMovie';

function AppRouter() {
  
  return (
    <div className="wrapper">
      <Header />
        <main>
          <Routes>
          <Route path="/" element={<Home sort="popular"/>} />
          <Route path="/sort/popular" element={<Home sort="popular"/>} />
          <Route path="/sort/top-rated" element={<Home sort="top_rated"/>} />
          <Route path="/sort/now-playing" element={<Home sort="now_playing"/>} />
          <Route path="/sort/upcoming" element={<Home sort="upcoming"/>} />
            <Route path="about" element={< About/>} />
            <Route path="favourites" element={<Favourites />} />
            <Route path="movie/:id" element={<IndividualMovie />} />
          </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default AppRouter;
