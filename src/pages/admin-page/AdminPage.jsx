import { useState } from 'react';
import { BiArrowFromRight } from 'react-icons/bi';
import { LogOut } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { routes } from '../../routes/AdminPageRoute';
import { selectTranslations } from '../../slices/LanguageSlice';
import styles from './AdminPage.module.css';
import { logOutUser } from '../../slices/loginSlice';
import Auth from '../auth/Auth';

export const AdminPage = () => {
  const [buttonPath, setButtonPath] = useState('');
  const [showSideBar, setShowSideBar] = useState(false);
  localStorage.setItem('yCordinate', buttonPath);
  const cordinate = localStorage.getItem('yCordinate');
  const translations = useSelector(selectTranslations);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logOutUser());
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className={styles.admin}>
      <div className={showSideBar ? styles.small_sidebar : styles.mange_admin}>
        <img
          src='/images/logo.webp'
          alt='logo img'
          onClick={() => navigate('/')}
        />
       	<button onClick={handleLogout} className={styles.logout}>
					<LogOut />
				</button>
        <div className={styles.btns}>
          {translations.adminPanel.buttons.map((button) => (
            <NavLink
              key={button.link}
              to={button.link}
              onClick={() => setButtonPath(button.yCordinate)}
            >
              <button>{button.button}</button>
            </NavLink>
          ))}
          <BiArrowFromRight style={{ top: cordinate }} />
        </div>
      </div>
      <div className={styles.admin_view}>
        <Routes>
          <Route path='/*' element={<Auth />}>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Route>
        </Routes>
      </div>
    </div>
  );
};
