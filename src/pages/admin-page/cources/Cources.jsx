import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../../../slices/courseSlice';
import CourcesTable from '../../../components/cources-table/CourcesTable';

export const Cources = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (!courses || courses.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <CourcesTable />
    </>
  );
};
