import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse } from '../../../slices/courseSlice';
import { CiCamera } from 'react-icons/ci';
import EmailEditor from '../../../components/email-editor/EmailEditor';
import styles from './AddCource.module.css';

export const AddCource = () => {
  const dispatch = useDispatch();
  const [courceName, setCourceName] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleCreate = () => {
    const formData = new FormData();
    formData.append('course[name]', courceName);
    formData.append('course[teacher]', teacherName);
    formData.append('course[description]', description);
    if (selectedFile) {
      formData.append('course[images][]', selectedFile);
    }

    dispatch(addCourse(formData));

    // Reset form fields after dispatching
    setCourceName('');
    setTeacherName('');
    setDescription('');
    setSelectedFile(null);
    setImagePreview('');
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
    }
  };

  return (
    <div className={styles.add_cource}>
      <input
        type='text'
        value={courceName}
        placeholder='Course name'
        onChange={(e) => setCourceName(e.target.value)}
      />
      <input
        type='text'
        value={teacherName}
        placeholder='Teacher name'
        onChange={(e) => setTeacherName(e.target.value)}
      />
      <div className={styles.img_edit}>
        <div className={styles.upload}>
          <input
            type='file'
            accept='image/png, image/jpeg'
            onChange={handleFileChange}
          />
          <CiCamera />
        </div>
        {imagePreview && (
          <div>
            <img src={imagePreview} alt='Image Preview' />
          </div>
        )}
      </div>
      <EmailEditor text={description} setText={setDescription} />
      <button onClick={handleCreate} className={styles.create_btn}>
        Create
      </button>
    </div>
  );
};
