import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectTranslations } from '../../slices/LanguageSlice';
import { fetchCourses } from '../../slices/courseSlice';
import styles from './CourcePage.module.css';

export const Cource = () => {
  const translations = useSelector(selectTranslations);
  const { id } = useParams();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (!courses || courses.length === 0) {
    return <div>Loading...</div>;
  }

  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className='container'>
      <div className={styles.cource}>
        <h3>{course.name}</h3>
        <div className={styles.teachers}>
          <h3>{translations.cource.title3}:</h3>
          <p>{course.teacher}</p>
        </div>
        <div className={styles.images}>
          {course.images.map((img) => (
            <img key={img} src={img} alt='img' />
          ))}
        </div>
      </div>
    </div>
  );
};
