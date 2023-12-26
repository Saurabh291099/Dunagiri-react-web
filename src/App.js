import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import About from './pages/about/About'
import Accomodation from './pages/accomodations/Accomodation'
import Activity from './pages/activity/Activity'
import Blog from './pages/blog/Blog'
import Cancellation from './pages/cancellation/Cancellation'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Policy from './pages/policy/Policy'
import Retreats from './pages/retreats/Retreats'
import GroupRetreats from './pages/retreats/GroupRetreats'
import SelfGuided from './pages/retreats/SelfGuided'
import Terms from './pages/terms/Terms'
function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/accomodation" exact element={<Accomodation/>} />
        <Route path="/activity" exact element={<Activity/>} />
        <Route path="/blog" exact element={<Blog/>} />
        <Route path="/cancellation" exact element={<Cancellation/>} />
        <Route path="/contact" exact element={<Contact/>} />
        <Route path="/gallery" exact element={<Gallery/>} />
        <Route path="/policy" exact element={<Policy/>} />
        <Route path="/retreats" exact element={<Retreats/>} />
        <Route path="/groupretreats" exact element={<GroupRetreats/>} />
        <Route path="/selfguided" exact element={<SelfGuided/>} />
        <Route path="/terms" exact element={<Terms/>} />
      </Routes>
    </>
  );
}

export default App;
