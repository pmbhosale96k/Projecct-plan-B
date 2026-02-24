import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      
      {/* Top Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="main-content">
        <AppRoutes />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;