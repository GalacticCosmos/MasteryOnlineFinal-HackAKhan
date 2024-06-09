import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ContactPage from './components/Contact';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage'
import MathPage1 from './components/MathPage1'
import MathPage2 from './components/MathPage2'
import MathPage3 from './components/MathPage3'
import MathPage4 from './components/MathPage4'
import MathPage5 from './components/MathPage5'
import MathPage6 from './components/MathPage6'
import MathPage7 from './components/MathPage7'
import SciencePage1 from './components/SciencePage1'
import SciencePage2 from './components/SciencePage2'
import SciencePage3 from './components/SciencePage3'
import LanPage1 from './components/LanPage1'
import LanPage2 from './components/LanPage2'
import LanPage3 from './components/LanPage3'
import CodePage1 from './components/CodePage1'
import CodePage2 from './components/CodePage2'
import CodePage3 from './components/CodePage3'
import CodePage4 from './components/CodePage4'
// import MathPage1 from './components/MathPage1'
// import MathPage1 from './components/MathPage1'
// import MathPage1 from './components/MathPage1'
// import MathPage1 from './components/MathPage1'
// import MathPage1 from './components/MathPage1'
// import MathPage1 from './components/MathPage1'
// import MathPage1 from './components/MathPage1'


import MenuMath from './components/MenuPageMath'
import MenuScience from './components/MenuPageScience'
import MenuCode from './components/MenuPageCode'
import MenuLan from './components/MenuPageLan'
import { AuthProvider } from './AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<div>
            <Navbar />
            <Hero />
            <ContactPage />
            <Footer />
          </div>} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/math1" element={<MathPage1 />} />
          <Route path="/math2" element={<MathPage2 />} />
          <Route path="/math3" element={<MathPage3 />} />
          <Route path="/math4" element={<MathPage4 />} />
          <Route path="/math5" element={<MathPage5 />} />
          <Route path="/math6" element={<MathPage6 />} />
          <Route path="/math7" element={<MathPage7 />} />

          {/* <Route path="/math1" element={<MathPage7 />} />
          <Route path="/math2" element={<MathPage8 />} /> */}
          <Route path="/menumath" element={<MenuMath />} />
          <Route path="/menulan" element={<MenuLan />} />
          <Route path="/menuscience" element={<MenuScience />} />
          <Route path="/menucode" element={<MenuCode />} />
          <Route path="/science1" element={<SciencePage1 />} />
          <Route path="/science2" element={<SciencePage2 />} />
          <Route path="/science3" element={<SciencePage3 />} /> 
          <Route path="/code1" element={<CodePage1 />} />
          <Route path="/code2" element={<CodePage2 />} /> 
          <Route path="/code3" element={<CodePage3 />} />
          <Route path="/code4" element={<CodePage4 />} /> 
          <Route path="/lan1" element={<LanPage1 />} />
          <Route path="/lan2" element={<LanPage2 />} />
          <Route path="/lan3" element={<LanPage3 />} /> 
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
