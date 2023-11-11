import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

function PostForm({ post }) {
  const navigate = useNavigate();
  const userData = useSelector((store) => store.auth.userData);
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "",
    },
  });

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? appwriteService.fileUpload(data.image[0])
        : null;
      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      } 
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined
      })
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`)
      }
    } else if( ) {

    }
  };

  return <div>PostForm</div>;
}

export default PostForm;
