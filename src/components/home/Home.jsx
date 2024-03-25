import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/MainPage';
import { AdminPage } from '../../pages/admin-page/AdminPage';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import StudentPage from '../../pages/student-page/StudentPage';

export const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/students/:id' element={<StudentPage />} />
      </Routes>
      <Footer />
    </>
  );
};
