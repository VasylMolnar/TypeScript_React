import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import UsersPage from './pages/UsersPage';
import TodosPage from './pages/TodosPage';
import NotFound from './pages/404';
import CurrentUser from './pages/CurrentUser';
import CurrentTodo from './pages/CurrentTodo';

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/">
            <Route index element={<UsersPage />} />
            <Route path=":id" element={<CurrentUser />} />
          </Route>

          <Route path="todos">
            <Route index element={<TodosPage />} />
            <Route path=":id" element={<CurrentTodo />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
