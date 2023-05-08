import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {Link, Route, Routes} from "react-router-dom";
import ONas from "./pages/Onas";
import {BsWhatsapp} from "react-icons/bs";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/оНас'} element={<ONas/>}/>
            </Routes>
            <Link to={'https://wa.me/+996707411142'}><BsWhatsapp className='whatsApp'/></Link>
            <Footer/>
        </div>
    );
}

export default App;
