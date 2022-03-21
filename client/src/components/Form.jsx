import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { addPost, updatePost } from "../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const postToEdit = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );

  const emptyPost = {
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  };

  const [post, setPost] = useState(emptyPost);

  useEffect(() => {
    if (postToEdit) setPost(postToEdit);
  }, [postToEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, post));
    } else {
      dispatch(addPost(post));
    }

    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPost(emptyPost);
  };

  return (
    <>
      <div className="">
        <h6>{currentId ? "Edit" : "Create"} post:</h6>
        <form action="" autoComplete="off" noValidate onSubmit={handleSubmit}>
          <label htmlFor="creator">Creator</label>
          <input
            type="text"
            id="creator"
            name="creator"
            value={post.creator}
            onChange={(event) =>
              setPost({ ...post, creator: event.target.value })
            }
            placeholder="creator"
            className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                my-2
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={(event) =>
              setPost({ ...post, title: event.target.value })
            }
            placeholder="title"
            className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                my-2
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
          />
          <label htmlFor="message">Message</label>
          <input
            type="text"
            id="message"
            name="message"
            value={post.message}
            onChange={(event) =>
              setPost({ ...post, message: event.target.value })
            }
            placeholder="message"
            className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                my-2
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
          />
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={post.tags}
            onChange={(event) => setPost({ ...post, tags: event.target.value })}
            placeholder="tags"
            className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                my-2
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
          />
          <div className="my-2">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPost({ ...post, selectedFile: base64 })
              }
            />
          </div>
          <button type="submit" className="btn btn-blue">
            Submit
          </button>
          <button type="reset" onClick={clear} className="btn btn-red">
            Clear
          </button>
        </form>
      </div>
    </>
  );
};

Form.propTypes = {
  currentId: PropTypes.string,
  setCurrentId: PropTypes.func,
};

export default Form;
