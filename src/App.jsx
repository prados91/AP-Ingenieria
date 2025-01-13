import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from './components/Loading/Loading';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Router>
                    <NavBar />
                    {/* 
                    <Routes location={location}>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<AboutMe />} />
                        <Route path='/projects' element={<MyProjects />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                    */}
                    <Footer />
                </Router>
            )}
        </>
    );
}

export default App;
