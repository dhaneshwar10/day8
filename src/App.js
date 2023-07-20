import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/signin';
import Homepage from './components/home';
import Staff from './components/staff';
import Course from './components/course';
import AboutPage from './components/about';
import VideoPage from './components/video';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/account' element={<SignUp/>} />
        
        

        <Route path='/Login' element={<Login/>}/>
        <Route path='/h' element={<Homepage/>}/>
        <Route path='/sta' element={<Staff/>}/>
        <Route path='/cou' element={<Course/>}/>
        <Route path='/abo' element={<AboutPage/>}/>
        <Route path='/vid' element={<VideoPage/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
