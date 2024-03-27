import { useEffect, useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { TbX } from 'react-icons/tb';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useHeader } from '../../hooks/useHeader';
import { pathToArray, prohibited } from '../../routes/ProhibitedPath';
import { selectTranslations } from '../../slices/LanguageSlice';
import { checkLogin, logOutUser } from '../../slices/loginSlice';
import { fetchCourses } from '../../slices/courseSlice';
import { Login } from '../login/Login';
import Sidebar from '../sidebar/Sidebar';
import styles from './Header.module.css';
import LanguageSwitcher from './LanguageSwitcher';

export const Header = () => {
  const { language, setLanguage, showSidebar, setShowSidebar } = useHeader();
  const [showCourcesTable, setShowCourcesTable] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { pathname } = useLocation();
  const translations = useSelector(selectTranslations);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(checkLogin());
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logOutUser());
    navigate('/');
  };

  const token = localStorage.getItem('token');
  const isAdmin = pathname.startsWith('/admin');
  const isLoggedIn = !!token;

  const courses = useSelector((state) => state.courses.courses);

  const renderLoginButton = () => {
    if (isAdmin || isLoggedIn) {
      return null;
    }
    return (
      <button className='btn_full' onClick={() => setShowLogin(true)}>
        <FaRegUser />
        <p>{translations.header.button2}</p>
      </button>
    );
  };

  const renderAdminButton = () => {
    if (!isLoggedIn) {
      return null;
    }
    return (
      <button className='btn_full' onClick={() => navigate('/admin')}>
        Admin
      </button>
    );
  };

  const isNotFoundPage =
    pathToArray(pathname).some((path) => path.startsWith(prohibited)) ||
    pathname === '*';

  if (isNotFoundPage) {
    return null;
  }

  return (
    <>
      <div className={styles.header}>
        <div className='container'>
          <div className={styles.navbar}>
            <div className={styles.left}>
              <div onClick={() => navigate('/')}>
                <img src='/images/logo.webp' className='logo_img' alt='logo' />
                <p>DON STROY PROJECT</p>
              </div>
              <button className='btn' onClick={() => navigate('/sertificates')}>
                {translations.header.button1}
              </button>
            </div>
            <div className={styles.center}>
              <div className={`${styles.cources}`}>
                <p onClick={() => setShowCourcesTable(true)}>
                  {translations.header.cources}
                </p>
              </div>
            </div>
            <div className={styles.right}>
              <LanguageSwitcher />
              {renderLoginButton()}
              {renderAdminButton()}
              <div className={styles.menu} onClick={() => setShowSidebar(true)}>
                <button>
                  <IoMenu />
                </button>
              </div>
            </div>
          </div>
        </div>
        {showSidebar && (
          <Sidebar
            setShowSidebar={setShowSidebar}
            language={language}
            setLanguage={setLanguage}
          />
        )}
      </div>
      <div className={styles.header_space}></div>
      {showCourcesTable && (
        <div
          className={`${styles.drop_cources} ${
            showCourcesTable ? styles.show_drop : ''
          }`}
        >
          <div
            className={styles.x_btn}
            onClick={() => setShowCourcesTable(false)}
          >
            <TbX />
          </div>
          <div className={styles.drop_btns}>
            {courses.map((course) => (
              <button
                className='btn'
                onClick={() => {
                  navigate(`/courses/${course.id}`);
                  setShowCourcesTable(false);
                }}
                key={course.id}
              >
                {course.name}
              </button>
            ))}
          </div>
          <div
            className={styles.dark}
            onClick={() => setShowCourcesTable(false)}
          ></div>
        </div>
      )}
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </>
  );
};
