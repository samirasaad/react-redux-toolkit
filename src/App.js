import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import TaskList from "./TasksList";
import { getPostsThunk } from "./store/featuresReducers/posts";

function App() {
  const dispatch = useDispatch();
  const postsList = useSelector(({ posts }) => posts.postsList);
  console.log(postsList);

  useEffect(() => {
    dispatch(getPostsThunk());
  }, [dispatch]);

  return (
    <div className="App">
      <Task />
      <TaskList />
    </div>
  );
}

export default App;
