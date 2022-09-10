 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AddProject from './pages/AddProject';
import ViewProject from './pages/ViewProject';
import PdfReport from './pages/PdfReport';
import Chart from './pages/Chart';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/addproject" element={<AddProject/>}/> 
        <Route path="/:projectId" element={<ViewProject/>}/> 
        <Route path="/chart" element={<Chart/>}/> 
        <Route path="/pdfreport" element={<PdfReport/>}/> 
      </Routes>
    </div>
  );
}

export default App;
