import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/navbar';
// import ImportedModules from './components/HomePage/AllmodulesImported';
// import LoginCard from './components/login&SignupScreen/Login';
// import Signup from './components/login&SignupScreen/Signup';

import HomeAdvertisingfun from './components/Adversiting/HomeAdvertising';
import AgentAdvertisingfun from './components/Adversiting/AgentAdvertising';
import AddCommunityfun from './components/Adversiting/AddCommunity';
import SubmitFeedbackfun from './components/Adversiting/SubmitFeedback';
import NavBarAdvertising from './components/Adversiting/navbarAdvertising';


function App() {

  return (
    <>
      {/* <NavBar /> */}
      <NavBarAdvertising />
      {/* <Routes>
        <Route path="/homepage" element={<ImportedModules />} />
        <Route path="/login" element={<LoginCard />} />
        <Route path="/signup" element={<Signup />} /> */}

      <Routes>
        <Route path="/" element={<HomeAdvertisingfun />} />
        <Route path="/agent" element={<AgentAdvertisingfun />} />
        <Route path="/community" element={<AddCommunityfun />} />
        <Route path="/feedback" element={<SubmitFeedbackfun />} />
        {/* </Routes> */}
      </Routes>
    </>
  )
}

export default App;