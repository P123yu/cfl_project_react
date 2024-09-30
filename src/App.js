import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import QuarterChartDashboard from "./Chart/QuarterChartDashboard";
import RatingChart from "./Chart/RatingChart";
import Bravo from "./component/Bravo";
import CflFeedBack from "./component/CflFeedBack";
import CflMemories from "./component/CflMemories";
import Competancy from "./component/Competancy";
import Gemini from "./component/Gemini";
import HrMemoryCreation from "./component/HrMemoryCreation";
import ManagerFeedback from "./component/ManagerFeedback";
import MentorFeedBack from "./component/MentorFeedBack";
import OverallDashboard from "./component/OverallDashboard";
import PrivateRoutes from "./component/PrivateRoute";
import ProbationConfirmation from "./component/ProbationConfirmation";
import RewardsAndRecognition from "./component/RewardsAndRecognition";
import SaveVideo from "./component/SaveVideo";
import TalentMatrix from "./component/TalentMatrix";
import Tracker from "./component/Tracker";
import ViewRewardsAndRecognition from "./component/ViewRewardsAndRecognition";
import WorldOfThanks from "./component/WorldOfThanks";
import useStore from "./component/ZustandStore";
import AddNewCfl from "./page/AddNewCfl";
import Calendely from "./page/Calendely";
import Cfl_dashboard from "./page/Cfl_dashboard";
import Cfl_info from "./page/Cfl_info";
import CflCertificate from "./page/CflCertificate";
import CflMentorMeetingHistory from "./page/CflMentorMeetingHistory";
import CflQuarterDashboard from "./page/CflQuarterDashboard";
import CflQuarterDashboardReview from "./page/CflQuarterDashboardReview";
import CflResume from "./page/CflResume";
import LateralShift from "./page/LateralShift";
import Login from "./page/Login";
import Main from "./page/Main";
import ManagerDesk from "./page/ManagerDesk";
import ManagerInfo from "./page/ManagerInfo";
import ManagerReviewTab from "./page/ManagerReviewTab";
import MentorInfo from "./page/MentorInfo";
import MentorMenteeLogBook from "./page/MentorMenteeLogBook";
import MentorsLogin from "./page/MentorsLogin";
import NotFound from "./page/NotFound";
import ParticularCflInfo from "./page/ParticularCflInfo";
import ParticularMentorInfo from "./page/ParticularMentorInfo";
import RequestMeeting from "./page/RequestMeeting";
import SignUp from "./page/SignUp";
import Video from "./page/Video";
import ManagerTemplate from "./Template.jsx/ManagerTemplate";
import Template from "./Template.jsx/Template";

function App() {
  const { roleName, jwtData, isAuthenticated } = useStore();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/cfl-dashboard" /> : <Login />
          }
        />

        <Route
          path="/signup"
          element={
            isAuthenticated ? <Navigate to="/cfl-dashboard" /> : <SignUp />
          }
        />

        {/* Private routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/cfl-dashboard" element={<Cfl_dashboard />} />
          <Route path="/cfl-info" element={<Cfl_info />} />
          <Route path="/particular-cfl-info" element={<ParticularCflInfo />} />
          <Route path="/fix_meeting_schedule" element={<Calendely />} />
          <Route path="/mentor-info" element={<MentorInfo />} />
          <Route path="/manager-info" element={<ManagerInfo />} />
          <Route path="/add-new-cfl" element={<AddNewCfl />} />
          <Route path="/request-meeting" element={<RequestMeeting />} />
          <Route path="/manager-desk" element={<ManagerDesk />} />
          <Route
            path="/cfl_mentor_meeting_history"
            element={<CflMentorMeetingHistory />}
          />
          <Route
            path="/cfl-quarter-dashboard"
            element={<CflQuarterDashboard />}
          />
          <Route
            path="/cfl-quarter-dashboard-review"
            element={<CflQuarterDashboardReview />}
          />
          <Route
            path="/particular-mentor-info"
            element={<ParticularMentorInfo />}
          />
          <Route path="/rating" element={<TalentMatrix />} />
          <Route path="/lateral-shift" element={<LateralShift />} />
          <Route path="/chart" element={<QuarterChartDashboard />} />
          <Route path="/logbook" element={<MentorMenteeLogBook />} />
          <Route path="/certificate" element={<CflCertificate />} />
          <Route path="/resume" element={<CflResume />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/rating-chart" element={<RatingChart />} />
          <Route path="/cfl-feedback" element={<CflFeedBack />} />
          <Route path="/mentor-feedback" element={<MentorFeedBack />} />
          <Route path="/manager-feedback" element={<ManagerFeedback />} />
          <Route path="/try" element={<MentorsLogin />} />
          <Route path="/competancy" element={<Competancy />} />
          <Route path="/create-memory" element={<HrMemoryCreation />} />
          <Route path="/view-memory" element={<CflMemories />} />
          <Route path="/gemini" element={<Gemini />} />
          <Route path="/video" element={<Video />} />
          <Route path="/save-video" element={<SaveVideo />} />
          <Route path="/manager-review" element={<ManagerReviewTab />} />
          <Route
            path="/rewards-and-recognition"
            element={<RewardsAndRecognition />}
          />
          <Route path="/world-of-thanks" element={<WorldOfThanks />} />
          <Route path="/template" element={<Template />} />
          <Route
            path="/view-rewards-and-recognition"
            element={<ViewRewardsAndRecognition />}
          />
          <Route path="/bravo" element={<Bravo />} />
          <Route path="/mgr-template" element={<ManagerTemplate />} />
          <Route
            path="/probation-confirmation"
            element={<ProbationConfirmation />}
          />
          <Route path="/overall-dashboard" element={<OverallDashboard />} />
        </Route>

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
