import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentDetails } from '../../slices/studentSlice';
import MAIN_URL from '../../urls/MainUrl';

const StudentPage = () => {
  const { id } = useParams(); // Get the student ID from the URL
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student.student);
  const loading = useSelector((state) => state.student.loading);
  const error = useSelector((state) => state.student.error);

  useEffect(() => {
    dispatch(fetchStudentDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(student);

  return (
    <div>
      <h2>Student Details</h2>
      <p>ID: {id}</p>
      {student && (
        <div>
          <p>Name: {student.name}</p>
          <img
            src={`https://donstroy-api-production.up.railway.app/${student.certificate_url}`}
            alt='certificate'
          />
          <p>
            {MAIN_URL}
            {student.certificate_url}
          </p>
        </div>
      )}
    </div>
  );
};

export default StudentPage;
