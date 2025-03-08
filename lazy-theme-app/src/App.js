import React, { Suspense } from "react";
import { ThemeProvider } from "./ThemeContext";

const Home = React.lazy(() => import("./Pages/Home"));

const App = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<div>Loading app...</div>}>
        <Home />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
