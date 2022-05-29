import { v4 as uuidv4 } from "uuid";
import queryString from "query-string";

import { useEffect, useState } from "react";
import "./App.scss";
import { Todo } from "shared/models/Todo";
import TodoList from "components/TodoList";
import TodoForm from "components/TodoForm";
import { Post } from "shared/models/Post";
import PostList from "components/PostList";
import Pagination from "components/Pagination";
import PostFilterForm from "components/PostFilterForm";
import Clock from "components/Clock";
import MagicBox from "components/MagicBox";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleAddTodo = (value: string) => {
    const newTodoList = [
      ...todoList,
      {
        id: uuidv4(),
        name: value,
        checked: false,
      },
    ];

    setTodoList(newTodoList);
  };

  const handleDeleteTodo = (value: string) => {
    const index = todoList.findIndex((item: Todo) => item.id === value);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const [postList, setPostList] = useState<Post[]>([]);

  const [pagination, setPagination] = useState<any>({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filter, setFilter] = useState<any>({
    _page: 1,
    _limit: 10,
    title_like: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const paramString = queryString.stringify(filter);
        const reqURl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const res = await fetch(reqURl);
        const resJSON = await res.json();
        const { data, pagination } = resJSON;

        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [filter]);

  const handlePageChange = (value: number) => {
    setFilter({
      ...filter,
      _page: value,
    });
  };

  const handleFilter = (value: any) => {
    setFilter({
      ...filter,
      title_like: value,
      _page: 1,
    });
  };

  return (
    <div className="App">
      {/* <TodoForm inpValue={handleAddTodo}></TodoForm>
      <TodoList todos={todoList} deleteItem={handleDeleteTodo}></TodoList> */}

      {/* <PostFilterForm onSubmit={handleFilter}></PostFilterForm>
      <PostList posts={postList}></PostList>
      <Pagination pagination={pagination} onPageChange={handlePageChange}></Pagination> */}

      {/* <Clock></Clock> */}

      <MagicBox></MagicBox>
    </div>
  );
}

export default App;
