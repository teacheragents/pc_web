import React, { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const PcdLayout = lazy(() => import('./layouts/PcdLayout'));
const OverviewPage = lazy(() => import('./pages/pcd/OverviewPage'));
const ArchitecturePage = lazy(() => import('./pages/pcd/ArchitecturePage'));
const WorkflowsPage = lazy(() => import('./pages/pcd/WorkflowsPage'));
const ResourcesPage = lazy(() => import('./pages/pcd/ResourcesPage'));
const LearnDetailsPage = lazy(() => import('./pages/pcd/LearnDetailsPage'));
const TechArchitecturePage = lazy(() => import('./pages/pcd/TechArchitecturePage'));
const ResearchPage = lazy(() => import('./pages/pcd/ResearchPage'));

const App: React.FC = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Landing Page */}
          <Route path="/landing" element={<LandingPage />} />

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

          {/* Fallback to landing */}
          <Route path="*" element={<Navigate to="/landing" replace />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
