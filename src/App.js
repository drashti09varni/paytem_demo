import './App.css';
import AllApps from './Components/All_Apps';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App_1 from './Components/App_1';
import App_2 from './Components/App_2';
import App_3 from './Components/App_3';
import App_4 from './Components/App_4';
import App_5 from './Components/App_5';
import App_6 from './Components/App_6';
import App_7 from './Components/App_7';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AllApps />} />
        <Route path="app_1" element={<App_1 />} />
        <Route path="app_2" element={<App_2 />} />
        <Route path="app_3" element={<App_3 />} />
        <Route path="app_4" element={<App_4 />} />
        <Route path="app_5" element={<App_5 />} />
        <Route path="app_6" element={<App_6 />} />
        <Route path="app_7" element={<App_7 />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
