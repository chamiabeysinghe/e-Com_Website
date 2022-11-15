import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from './redux/store';
import { Provider } from 'react-redux';
import SiteRoutes from './SiteRoutes';
import { AuthProvider } from './components/Admin/auth';
// import { Home } from "./components/trial/Home";
// import { About } from "./components/trial/About";
// import { Login } from './components/trial/Login';
// import { Profile } from "./components/trial/profile";
// import { RequireAuth } from "./components/trial/RequoreAuth";
// import { Navbar } from "./components/trial/Navbar";


function App() {
  return (
    <div className="App">
      {/* <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path ='/profile' element={<RequireAuth><Profile/></RequireAuth>} />    
            <Route exact path ='/login' element={<Login/>} />           
          </Routes>
          </BrowserRouter>
          </AuthProvider> */}

      <AuthProvider>
        <BrowserRouter>
          <Provider store={store}>
            <SiteRoutes />
          </Provider>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
