import React, { Suspense, lazy, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { motion, AnimatePresence, MotionConfig } from 'motion/react';
import PageSeo from './components/PageSeo.jsx';
import WaveLoader from './components/WaveLoader.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

const About = lazy(() => import('./pages/About'));
const CareerApply = lazy(() => import('./pages/CareerApply'));
const Career = lazy(() => import('./pages/Career'));
const Contact = lazy(() => import('./pages/Contact'));
const Distribusi = lazy(() => import('./pages/Distribusi'));
const Home = lazy(() => import('./pages/Home'));
const Lifestyle = lazy(() => import('./pages/Lifestyle'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Retail = lazy(() => import('./pages/Retail'));
const Subprocessors = lazy(() => import('./pages/Subprocessors'));
const SubRetail = lazy(() => import('./pages/SubRetail'));

function RouteFallback() {
  return <WaveLoader isLoading={true} label="Ocean Space" />;
}

function NavigationLoader() {
  const location = useLocation();
  const [isNavigating, setIsNavigating] = React.useState(false);
  const isFirstMount = React.useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return <WaveLoader isLoading={isNavigating} label="Ocean Space" />;
}

/** Serve /about without trailing slash — strip slash for React Router. */
function StripTrailingSlash({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search, hash } = location;
    if (pathname.length > 1 && pathname.endsWith('/')) {
      navigate(`${pathname.replace(/\/+$/, '')}${search}${hash}`, { replace: true });
    }
  }, [location, navigate]);

  return children;
}

function PageTransitionWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      window.dispatchEvent(new CustomEvent('oceanspace:motion-refresh'));
    }, 50);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 14, scale: 0.99, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        style={{ willChange: 'opacity, transform, filter' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="never">
        <Router>
          <StripTrailingSlash>
            <PageSeo />
            <NavigationLoader />
            <Suspense fallback={<RouteFallback />}>
              <PageTransitionWrapper>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/career-apply" element={<CareerApply />} />
                  <Route path="/career" element={<Career />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/distribusi" element={<Distribusi />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/lifestyle" element={<Lifestyle />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/retail" element={<Retail />} />
                  <Route path="/subprocessors" element={<Subprocessors />} />
                  <Route path="/sub-retail" element={<SubRetail />} />
                </Routes>
              </PageTransitionWrapper>
            </Suspense>
          </StripTrailingSlash>
        </Router>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
