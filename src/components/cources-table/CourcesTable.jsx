import { FaChalkboardTeacher } from 'react-icons/fa'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdDriveFileRenameOutline, MdOutlineDescription } from 'react-icons/md'
import styles from './CourcesTable.module.css'
const CourcesTable = ({ data }) => {
	return (
		<div className={styles.table_container}>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>ID</th>
						<th>
							Name
							<MdDriveFileRenameOutline />
						</th>
						<th>
							Description
							<MdOutlineDescription />
						</th>
						<th>
							Teacher
							<FaChalkboardTeacher />
						</th>
						<th>
							Action
							<IoSettingsOutline />
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map(item => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.name.slice(0, 40)}...</td>
							<td>{item.description.slice(0, 25)}...</td>
							<td>
								{`${item.teacher.split(' ')[0].slice(0, 12)} 
									${item.teacher.split(' ')[1].slice(0, 1)}.`}
							</td>
							<td>
								<button className={styles.action_btn}>Edit</button>
								<button className={styles.action_btn}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default CourcesTable