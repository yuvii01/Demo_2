import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import DivisionJEE from './components/DivisionJEE';


import PaperJEE from './components/PaperJEE';
import QuizJEE from './components/QuizJEE';
import DoubtsJEE from './components/DoubtsJEE';
import RevisionJEE from './components/RevisionJEE';
import Home from './Home';


const App = () => {


  return (
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<DivisionJEE />} />
        <Route path="/demo" element={<DivisionJEE />} />
        <Route path="/demo/paper" element={<PaperJEE />} />
        <Route path="/demo/quiz" element={<QuizJEE />} />
        <Route path="/demo/doubts" element={<DoubtsJEE />} />
        <Route path="/demo/revision" element={<RevisionJEE />} />

      </Routes>
  );
};

export default App;