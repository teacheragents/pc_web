import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PcdLayout from './layouts/PcdLayout';
import OverviewPage from './pages/pcd/OverviewPage';
import ArchitecturePage from './pages/pcd/ArchitecturePage';
import WorkflowsPage from './pages/pcd/WorkflowsPage';
import ResourcesPage from './pages/pcd/ResourcesPage';
import LearnDetailsPage from './pages/pcd/LearnDetailsPage';
import TechArchitecturePage from './pages/pcd/TechArchitecturePage';
import ResearchPage from './pages/pcd/ResearchPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Public Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Research Content Routes (Hidden under /pcd prefix) */}
        <Route path="/pcd" element={<PcdLayout />}>
          <Route index element={<Navigate to="/pcd/overview" replace />} />
          <Route path="overview" element={<OverviewPage />} />
          <Route path="architecture" element={<ArchitecturePage />} />
          <Route path="learn-details" element={<LearnDetailsPage />} />
          <Route path="tech-architecture" element={<TechArchitecturePage />} />
          <Route path="workflows" element={<WorkflowsPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="research" element={<ResearchPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
