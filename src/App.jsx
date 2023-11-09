import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://kea-alt-del.dk/t7/api/brands")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);
  return (
    <main className="max-w-7xl mx-auto">
      <ul className="grid grid-cols-4 gap-10">
        {articles.map((art) => (
          <li className="space-y-3 m-4" key={art.id}>
              <img className="aspect-square object-contain" src="https://source.unsplash.com/random/300x300" alt="" />
              <h2>{art.brandname}</h2>
              <p>{art.brandbio}</p>

          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
