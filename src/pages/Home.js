import React  from "react";
import SearchBar from "../components/SearchBar";
import RecipeSection from "../components/RecipeSection";

const Home = () => {
  return (
    <div className="App ">
      <SearchBar />
      <RecipeSection />
    </div>
  );
}

export default Home;
