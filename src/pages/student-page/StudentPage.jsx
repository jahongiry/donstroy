import React, { useEffect, useState } from 'react';
import { MdSimCardDownload } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DownloadImage from '../../components/download-img/DownloadImg';
import { fetchStudentDetails } from '../../slices/studentSlice';
import styles from './StudentPage.module.css';

const StudentPage = () => {
  const { id } = useParams();
  const params = useParams();
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student.student);
  const loading = useSelector((state) => state.student.loading);
  const error = useSelector((state) => state.student.error);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchStudentDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);

  const handleDownloadClick = async () => {
    try {
      const imageUrl = `https://donstroy-api-production.up.railway.app${student?.certificate_url}`;
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `certificate_${id}.png`;
      link.click();

      window.URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  if (loading) {
    return (
      <div className='layout_loatder'>
        <div className='loader'></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='error'>
        <p>Error: {error}</p>
      </div>
    );
  }
  return (
    <div className={styles.student}>
      <p className={styles.student_id}>ID: {id}</p>
      {student && (
        <div className={styles.student_info}>
          <p>{student?.name}</p>
          <img
            src={`https://donstroy-api-production.up.railway.app${student?.certificate_url}`}
            alt='certificate'
            onLoad={() => setImageLoading(false)} // Set imageLoading to false when image loads
          />
        </div>
      )}
      <button className={styles.download} onClick={handleDownloadClick}>
        Download as PNG <MdSimCardDownload />
      </button>
    </div>
  );
};

export default StudentPage;
