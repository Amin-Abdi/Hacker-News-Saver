import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();
const URL = "https://hn.algolia.com/api/v1/search?";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("python");

  useEffect(() => {
    const fetchPosts = async () => {
      // setLoading(true)
      try {
        const response = await fetch(`${URL}query=${searchTerm}`);
        const postData = await response.json();
        //console.log(postData.hits);
        const items = postData.hits;
        //console.log(items);

        //Checking if they are empty
        if (items) {
          const newPost = items.map((single) => {
            const { author, num_comments, objectID, points, title, url } =
              single;
            return { author, num_comments, objectID, points, title, url };
          });
          setPosts(newPost);
        } else {
          //If there are no posts then set the usestate an empty array
          setPosts([]);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchPosts();
  }, [searchTerm]);

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
