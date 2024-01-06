import './assets/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import SignUp from "./pages/auth/SignUp";
import Layout from "./components/Layout";
import YouWantTo from './pages/auth/YouWantTo';
import WhatYourName from './pages/auth/WhatYourName';
import Opportunities from './pages/auth/Opportunities';
import HelpYou from './pages/auth/HelpYou';
import AboutYou from './pages/auth/AboutYou';
import Hobbies from './pages/auth/Hobbies';
import DateOfBirth from './pages/auth/DateOfBirth';
import Degree from './pages/auth/Degree';
import Skillset from './pages/auth/Skillset';
import Experience from './pages/auth/Experience';
import Preference from './pages/auth/Preference';
import VideoQuestions from './pages/auth/VideoQuestions';
import VideoContainer from './pages/videoplayer/Video';
import VideoSequence from './pages/videoplayer/VideoOne';
import BeforeStartRecording from './pages/videoplayer/BeforeStartRecording';
import VideoCvMandatory from './pages/videoplayer/VideoCvMandatory';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SignUp />} />
          <Route path="you-want-to" element={<YouWantTo />} />
          <Route path="what-your-name" element={<WhatYourName />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="helpyou" element={<HelpYou />} />
          <Route path="about-you" element={<AboutYou />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="dob" element={<DateOfBirth />} />
          <Route path="degree" element={<Degree />} />
          <Route path="skillset" element={<Skillset />} />
          <Route path="experience" element={<Experience />} />
          <Route path="preference" element={<Preference />} />

          <Route path="video-questions" element={<VideoQuestions />} />
          <Route path="video" element={<VideoContainer />} />
          <Route path="video-one" element={<VideoSequence />} />
          <Route path="before-start-recording" element={<BeforeStartRecording />} />
          <Route path="video-cv" element={<VideoCvMandatory />} />

          <Route path="profile" element={<Profile />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;