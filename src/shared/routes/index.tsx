import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginView from '../../modules/login/view';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
