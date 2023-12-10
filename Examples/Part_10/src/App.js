import React from "react";
import Article from "./Article";

const App = () => {
    return (
      <div >
        <Article name = "Article 1" instock = "true" / >
        <Article name = "Article 2" instock = "false" / >
        <Article name = "Article 3" instock = "true" / >
      </div>
    );
};
export default App;