import { useEffect, useState } from "react";
import appwriteService from "../../appwrite/config";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../../store/postSlice";

const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
        dispatch(getAllPosts(posts.documents));
        console.log("posts inside AllPosts: ", posts);
      }
    });
  }, []);

  return posts;
};

export default useGetPosts;
