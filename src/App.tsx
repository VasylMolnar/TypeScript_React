import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import UsersPage from './pages/UsersPage';
import TodosPage from './pages/TodosPage';
import NotFound from './pages/404';

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/">
            <Route index element={<UsersPage />} />
            {/* <Route path=":id" element={<h1>UsersPage:ID</h1>} /> */}
          </Route>

          <Route path="todos">
            <Route index element={<TodosPage />} />
            {/* <Route path=":id" element={<h1>todos:ID</h1>} /> */}
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
