import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import UsersPage from './pages/UsersPage';
import TodosPage from './pages/TodosPage';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/">
          <Route index element={<UsersPage />} />
          <Route path=":id" element={<h1>UsersPage:ID</h1>} />
        </Route>

        <Route path="todos">
          <Route index element={<TodosPage />} />
          <Route path=":id" element={<h1>todos:ID</h1>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
