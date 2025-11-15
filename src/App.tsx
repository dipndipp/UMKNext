import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, type Transition } from "framer-motion";
import HomeScreen from "./pages/HomeScreen";
import Navbar from "./components/Navbar";
import AiChat from "./pages/AiChat";
import AboutPage from "./pages/AboutPage";
import FeaturesPage from "./pages/FeaturesPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ContactPage from "./pages/ContactPage";
import KojaUMKMPage from "./pages/KojaUMKMPage";
import KojaUMKMDetailPage from "./pages/KojaUMKMDetailPage";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const pageTransition: Transition = {
  duration: 0.2,
  ease: "easeInOut",
};

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div className="pt-28">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <HomeScreen />
            </motion.div>
          }
        />
        <Route
          path="chatbot"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <AiChat />
            </motion.div>
          }
        />
        <Route
          path="about"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <AboutPage />
            </motion.div>
          }
        />
        <Route
          path="features"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <FeaturesPage />
            </motion.div>
          }
        />
        <Route
          path="how-it-works"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <HowItWorksPage />
            </motion.div>
          }
        />
        <Route
          path="umkm-koja/:slug"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <KojaUMKMDetailPage />
            </motion.div>
          }
        />
        <Route
          path="contact"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ContactPage />
            </motion.div>
          }
        />
        <Route
          path="umkm-koja"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <KojaUMKMPage />
            </motion.div>
          }
        />
        </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="relative font-sans">
        <ScrollToTop />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
