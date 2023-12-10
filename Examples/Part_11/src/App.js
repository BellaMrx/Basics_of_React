import React from "react";
import Article from "./Article";

const App = () => {
    return (
      <div>
      <Article name = "Article 1" instock = "true" >
        <h2> Article 1 </h2>
      </Article>
      <Article name = "Article 2" instock = "false" >
        <h2> Article 2 </h2>
      </Article>
      <Article name = "Article 3" instock = "true" >
        <h2> Article 3 </h2>
      </Article>
      </div>
    );
};
export default App;