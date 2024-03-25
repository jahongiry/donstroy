import { useLocation } from 'react-router-dom'
import StudentsTable from '../../../components/students-table/StudentsTable'
export const Students = () => {
	const data = [
		{
			id: 1,
			studentName: 'Muhammadamin2 Doe',
			courseName: 'Introduction to Computer Science',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nec velit sit amet eleifend.',
			date: '2022-01-15',
			certificate:
				'https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-diploma-templates-of-large-certificate-of-pletion-templates-free-psd-of-free-diploma-templates.jpg',
		},
		{
			id: 2,
			studentName: 'Alice Johnson',
			courseName: 'Web Development Fundamentals',
			description:
				'Duis dictum elit sit amet luctus. Integer scelerisque tellus non quam fermentum, a eleifend arcu sagittis.',
			date: '2022-02-28',
			certificate:
				'https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-diploma-templates-of-large-certificate-of-pletion-templates-free-psd-of-free-diploma-templates.jpg',
		},
		{
			id: 3,
			studentName: 'Michael Smith',
			courseName: 'Data Science Essentials',
			description:
				'Nullam dignissim lectus nec augue commodo, vel volutpat lorem sollicitudin. Donec pulvinar placerat nulla.',
			date: '2022-03-20',
			certificate:
				'https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-diploma-templates-of-large-certificate-of-pletion-templates-free-psd-of-free-diploma-templates.jpg',
		},
		{
			id: 4,
			studentName: 'Emily Brown',
			courseName: 'Machine Learning Basics',
			description:
				'Fusce placerat turpis id elit tempor, sed dapibus sem ultrices. In hac habitasse platea dictumst.',
			date: '2022-04-10',
			certificate:
				'https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-diploma-templates-of-large-certificate-of-pletion-templates-free-psd-of-free-diploma-templates.jpg',
		},
		{
			id: 5,
			studentName: 'James Wilson',
			courseName: 'Software Engineering Principles',
			description:
				'Vestibulum nec turpis vel nulla suscipit vehicula eget eu nulla. Integer eget est in arcu mollis aliquet.',
			date: '2022-05-05',
			certificate:
				'https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-diploma-templates-of-large-certificate-of-pletion-templates-free-psd-of-free-diploma-templates.jpg',
		},
		{
			id: 6,
			studentName: 'Olivia Martinez',
			courseName: 'Artificial Intelligence Fundamentals',
			description:
				'Mauris eget turpis quis felis ultrices eleifend. Ut pharetra augue a risus rutrum bibendum.',
			date: '2022-06-20',
			certificate:
				'https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-diploma-templates-of-large-certificate-of-pletion-templates-free-psd-of-free-diploma-templates.jpg',
		},
		{
			id: 7,
			studentName: 'William Taylor',
			courseName: 'Python Programming for Beginners',
			description:
				'Phasellus tempus nisi a nulla imperdiet, ut condimentum nunc malesuada. Ut id nulla ut ex cursus sodales.',
			date: '2022-07-12',
			certificate:
				'https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-diploma-templates-of-large-certificate-of-pletion-templates-free-psd-of-free-diploma-templates.jpg',
		},
		{
			id: 8,
			studentName: 'Sophia Anderson',
			courseName: 'Frontend Web Development Techniques',
			description:
				'Pellentesque id eros vel libero cursus congue at nec arcu. Etiam eget arcu eu nulla suscipit suscipit.',
			date: '2022-08-30',
			certificate:
				'https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-diploma-templates-of-large-certificate-of-pletion-templates-free-psd-of-free-diploma-templates.jpg',
		},
		{
			id: 9,
			studentName: 'Alexander Thomas',
			courseName: 'Database Management Fundamentals',
			description:
				'Vivamus quis orci ac risus euismod varius. Suspendisse ac tellus a eros vestibulum dictum in at felis.',
			date: '2022-09-18',
			certificate:
				'https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-diploma-templates-of-large-certificate-of-pletion-templates-free-psd-of-free-diploma-templates.jpg',
		},
		{
			id: 10,
			studentName: 'Charlotte White',
			courseName: 'Mobile App Development Basics',
			description:
				'Donec lobortis magna nec nisi fringilla, in dictum libero fermentum. Aenean tincidunt purus a nunc auctor.',
			date: '2022-10-05',
			certificate:
				'https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-diploma-templates-of-large-certificate-of-pletion-templates-free-psd-of-free-diploma-templates.jpg',
		},
		{
			id: 11,
			studentName: 'Mason Clark',
			courseName: 'Cybersecurity Fundamentals',
			description:
				'Integer vestibulum felis vitae augue congue, nec commodo elit pharetra. Fusce condimentum enim in magna ullamcorper.',
			date: '2022-11-23',
			certificate:
				'https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-diploma-templates-of-large-certificate-of-pletion-templates-free-psd-of-free-diploma-templates.jpg',
		},
		{
			id: 12,
			studentName: 'Amelia Lewis',
			courseName: 'Digital Marketing Strategies',
			description:
				'Maecenas ultricies ligula non neque efficitur, nec maximus dui vestibulum. Sed a velit id sapien auctor dignissim.',
			date: '2022-12-10',
			certificate:
				'https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-diploma-templates-of-large-certificate-of-pletion-templates-free-psd-of-free-diploma-templates.jpg',
		},
		{
			id: 13,
			studentName: 'Benjamin Walker',
			courseName: 'Cloud Computing Basics',
			description:
				'Sed vitae augue eget tortor tempus condimentum. Sed tincidunt est vel augue tincidunt, id gravida neque commodo.',
			date: '2023-01-15',
			certificate:
				'https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-diploma-templates-of-large-certificate-of-pletion-templates-free-psd-of-free-diploma-templates.jpg',
		},
		{
			id: 14,
			studentName: 'Elizabeth Baker',
			courseName: 'UI/UX Design Principles',
			description:
				'Quisque nec justo et turpis pharetra ullamcorper. Nam a felis ac enim dictum efficitur sed eu eros.',
			date: '2023-02-28',
			certificate:
				'https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-diploma-templates-of-large-certificate-of-pletion-templates-free-psd-of-free-diploma-templates.jpg',
		},
		{
			id: 15,
			studentName: 'Daniel Harris',
			courseName: 'E-commerce Fundamentals',
			description:
				'Curabitur vel mauris non risus mollis interdum. Vestibulum ut metus eu est lacinia tempor vel id ligula.',
			date: '2023-03-20',
			certificate:
				'https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-diploma-templates-of-large-certificate-of-pletion-templates-free-psd-of-free-diploma-templates.jpg',
		},
		{
			id: 16,
			studentName: 'Ava Clark',
			courseName: 'Data Analysis Techniques',
			description:
				'Vivamus finibus mi at orci finibus, a molestie eros suscipit. Duis eget ligula nec nulla blandit lobortis.',
			date: '2023-04-10',
			certificate:
				'https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-diploma-templates-of-large-certificate-of-pletion-templates-free-psd-of-free-diploma-templates.jpg',
		},
		{
			id: 17,
			studentName: 'Jacob Young',
			courseName: 'Networking Fundamentals',
			description:
				'Praesent non nulla a justo pulvinar venenatis. Integer id elit consequat, tristique mauris ac, viverra odio.',
			date: '2023-05-05',
			certificate:
				'https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-diploma-templates-of-large-certificate-of-pletion-templates-free-psd-of-free-diploma-templates.jpg',
		},
		{
			id: 18,
			studentName: 'Evelynwwwssdsd Scott',
			courseName: 'Software Quality Assurance',
			description:
				'Fusce ultricies velit id ligula dictum, quis rhoncus ligula efficitur. Phasellus fermentum mi ut purus bibendum vulputate.',
			date: '2023-06-20',
			certificate:
				'https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-diploma-templates-of-large-certificate-of-pletion-templates-free-psd-of-free-diploma-templates.jpg',
		},
	]
	const { pathname } = useLocation()
	return (
		<>
			<StudentsTable data={data} />
		</>
	)
}
