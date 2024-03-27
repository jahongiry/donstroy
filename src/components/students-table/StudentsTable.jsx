import { useState } from 'react';
import { BsCalendar2Date } from 'react-icons/bs';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdDriveFileRenameOutline, MdOutlineDescription } from 'react-icons/md';
import { StudentEdit } from '../student-edit/StudentEdit';
import { ZoomImage } from '../zoom-image/ZoomImage';
import styles from './StudentsTable.module.css';
import { SUB_URL } from '../../urls/MainUrl';

const StudentsTable = ({ data }) => {
  const [showZoomImage, setShowZoomImage] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [img, setImg] = useState(0);

  console.log(data);

  const handleClick = (id) => {
    setImg(id);
    setShowEditModal(true);
  };

  return (
    <div className={styles.table_container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>
              Student name
              <MdDriveFileRenameOutline />
            </th>
            <th>
              Course name
              <MdDriveFileRenameOutline />
            </th>
            <th>
              Description
              <FaChalkboardTeacher />
            </th>
            <th>
              Date
              <BsCalendar2Date />
            </th>
            <th>
              Certificate
              <MdOutlineDescription />
            </th>
            <th>
              Actions
              <IoSettingsOutline />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item?.id}>
              <td>{item?.id}</td>
              <td>
                {/* {`${item.studentName.split(' ')[0].slice(0, 12)}${
									item.studentName.split(' ')[0].length >= 12 ? '...' : ''
								} ${item.studentName.split(' ')[1].slice(0, 1)}.`} */}
                {item?.name}
              </td>
              {/* <td>{item.courseName}</td>
							<td>{item.description}</td> */}
              <td>{`${item?.created_at.split('-')[2].slice(0, 2)}-${
                item?.created_at.split('-')[1]
              }-${item?.created_at.split('-')[0]}`}</td>
              <td
                onClick={() => {
                  setShowZoomImage(true);
                  setImg(item.id);
                }}
              >
                <img
                  src={`https://donstroy-api-production.up.railway.app/${item?.certificate_url}`}
                  alt='Certificate'
                />
              </td>
              <td>
                <button
                  className={styles.action_btn}
                  onClick={() => handleClick(item.id)}
                >
                  Edit
                </button>
                <button className={styles.action_btn}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showZoomImage && (
        <ZoomImage img={img} setShowZoomImage={setShowZoomImage} />
      )}
      {showEditModal && (
        <StudentEdit id={img} setShowEditModal={setShowEditModal} />
      )}
    </div>
  );
};

export default StudentsTable;
