import React, { Suspense, useState } from "react";
import { useTheme } from "../ThemeContext";

const LazyAbout = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./About")), 2000); 
  });
});

const LazyContact = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Contact")), 2000);
  });
});

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className={theme} style={{ padding: "20px" }}>
      <h1>Welcome to the {theme} theme!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setShowAbout(true)}>Load About</button>
      <button onClick={() => setShowContact(true)}>Load Contact</button>

      {showAbout && (
        <Suspense fallback={<div>Loading About Page...</div>}>
          <LazyAbout />
        </Suspense>
      )}

      {showContact && (
        <Suspense fallback={<div>Loading Contact Page...</div>}>
          <LazyContact />
        </Suspense>
      )}
    </div>
  );
};

export default Home;
