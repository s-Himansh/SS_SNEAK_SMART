import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import SignUp from './screens/SignUp';
import LandingPage from './screens/LandingPage';
import Login from './screens/Login';
import Home from './screens/Home';
import UserProfile from './screens/UserProfile';
import Loading from './component/Loading';
import Course from './component/Course';
import Class from './component/Class';
import SubClass from './component/SubClass';
import VideoApp from './pages/home/VideoApp';
import MeetPage from './pages/Meet/MeetPage';
import ClassMates from './component/ClassMates';
import Pricing from './component/Pricing';


function App() {
  

  return (
    <Router>
        <div>
          <Routes>
              <Route exact path='/' element={<LandingPage />} />
              <Route exact path='/signup' element={<SignUp />}/>
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/home' element={<Home />}  />
              <Route exact path='/userprofile' element={<UserProfile />} />
              <Route exact path='/loading' element={<Loading />} />
              <Route exact path='/subject/:subjectid' element={<Course />} />
              <Route exact path='/class' element={<Class />} />
              <Route exact path='/subclass' element={<SubClass />} />
              <Route exact path='/meetroom' element={<VideoApp />  }/>
              <Route exact path='/meetroom/:meetId' element={<MeetPage />} />
              <Route exact path='/classmates' element={<ClassMates />} />
              <Route exact path='/pricing' element={<Pricing />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
