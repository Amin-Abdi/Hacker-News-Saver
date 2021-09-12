import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();
const URL = "https://hn.algolia.com/api/v1/search?";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("java");

  const fetchPosts = async () => {
    // setLoading(true)
    try {
      const response = await fetch(`${URL}query=${searchTerm}`);
      const postData = await response.json();
      //console.log(postData.hits);
      const items = postData.hits;
      //console.log(items);

      //Checkign if they are empty
      if (items) {
        const newPost = items.map((single) => {
          const { author, num_comments, objectID, points, title, url } = single;
          return { author, num_comments, objectID, points, title, url };
        });
        setPosts(newPost);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <AppContext.Provider value={{ loading, posts, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
