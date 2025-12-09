// src/components/pages/Home/Home.jsx
import { HomePublic } from "./HomePublic";
import { HomeDashboard } from "./HomeDashboard";

export const Home = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <HomePublic />;
  }

  return <HomeDashboard />;
};
