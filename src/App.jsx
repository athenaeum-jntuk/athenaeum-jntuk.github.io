import React from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import ScrollToTop from './components/ScrollToTop';
import { SmartSuspense, lazyWithDelay } from './components/SmartSuspense';
import useScrollReveal from './hooks/useScrollReveal';

// Lazy-loaded pages with minimum visible time
const Home = lazyWithDelay(() => import('./pages/Home'), 400);
const Domains = lazyWithDelay(() => import('./pages/Domains'), 400);
const DomainDetail = lazyWithDelay(() => import('./pages/DomainDetail'), 400);
const Team = lazyWithDelay(() => import('./pages/Team'), 400);
const Posts = lazyWithDelay(() => import('./pages/Posts'), 400);
const PostDetail = lazyWithDelay(() => import('./pages/PostDetail'), 400);

function Layout() {
  useScrollReveal();
  return (
    <div className="min-h-screen bg-athen-black">
      <ScrollToTop />
      <Nav />
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <SmartSuspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="domains" element={<Domains />} />
            <Route path="domains/:domainName" element={<DomainDetail />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/:slug" element={<PostDetail />} />
            <Route path="team" element={<Team />} />
          </Route>
        </Routes>
      </SmartSuspense>
    </HashRouter>
  );
}
