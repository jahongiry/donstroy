import CourcesTable from '../../../components/cources-table/CourcesTable'
const data = [
	{
		id: 1,
		name: 'Introduction to Web DevelopmentIntroduction to Web DevelopmentIntroduction to Web DevelopmentIntroduction to Web DevelopmentIntroduction to Web DevelopmentIntroduction to Web Development',
		description:
			'Basic concepts of web development including HTML, CSS, and JavaScript.',
		teacher: 'Tohtamurotkk Smith',
	},
	{
		id: 2,
		name: 'Advanced ReactJS Techniques',
		description:
			'In-depth exploration of advanced concepts and best practices in ReactJS.',
		teacher: 'Emily Johnson',
	},
	{
		id: 3,
		name: 'Python Programming for Beginners',
		description: 'Fundamentals of Python programming language for beginners.',
		teacher: 'Michael Brown',
	},
	{
		id: 4,
		name: 'Data Structures and Algorithms',
		description:
			'Understanding fundamental data structures and algorithms for efficient programming.',
		teacher: 'Jessica Williams',
	},
	{
		id: 5,
		name: 'Machine Learning Fundamentals',
		description:
			'Introduction to machine learning algorithms and applications.',
		teacher: 'Andrew Miller',
	},
	{
		id: 6,
		name: 'Mobile App Development with Flutter',
		description: 'Building cross-platform mobile apps using Flutter framework.',
		teacher: 'Sophia Anderson',
	},
	{
		id: 7,
		name: 'Cloud Computing Essentials',
		description:
			'Basic principles and concepts of cloud computing technologies.',
		teacher: 'David Martinez',
	},
	{
		id: 8,
		name: 'UI/UX Design Fundamentals',
		description:
			'Fundamental principles of user interface and user experience design.',
		teacher: 'Olivia Taylor',
	},
	{
		id: 9,
		name: 'Cybersecurity Fundamentals',
		description:
			'Basic concepts and practices in cybersecurity and data protection.',
		teacher: 'William Clark',
	},
	{
		id: 10,
		name: 'Digital Marketing Strategies',
		description:
			'Strategies and techniques for effective digital marketing campaigns.',
		teacher: 'Isabella Wilson',
	},
	{
		id: 11,
		name: 'Artificial Intelligence Applications',
		description:
			'Real-world applications and use cases of artificial intelligence technologies.',
		teacher: 'Daniel Moore',
	},
	{
		id: 12,
		name: 'Blockchain Technology Explained',
		description:
			'Understanding the underlying principles and applications of blockchain technology.',
		teacher: 'Liam Adams',
	},
	{
		id: 13,
		name: 'Exploring Artificial Intelligence and Robotics Applications',
		description:
			'Delve into the fascinating world of artificial intelligence and robotics, exploring cutting-edge technologies and their practical applications in various industries.',
		teacher: 'Jessica Anderson',
	},
	{
		id: 14,
		name: 'Digital Marketing Strategies for Modern Businesses',
		description:
			'Learn effective digital marketing strategies tailored for modern businesses, including SEO, social media marketing, content creation, and analytics.',
		teacher: 'David Thompson',
	},
	{
		id: 15,
		name: 'Cybersecurity Fundamentals and Threat Detection Techniques',
		description:
			'Gain foundational knowledge in cybersecurity, understand common threats, and learn techniques for detecting and mitigating cyber threats effectively.',
		teacher: 'Olivia Martinez',
	},
	{
		id: 16,
		name: 'Mobile App Development with React Native and Firebase',
		description:
			'Build cross-platform mobile applications using React Native framework and Firebase backend services, combining performance and scalability.',
		teacher: 'William Lewis',
	},
	{
		id: 17,
		name: 'E-commerce Website Development and Optimization',
		description:
			'Create and optimize e-commerce websites using industry-standard tools and techniques, focusing on user experience and conversion optimization.',
		teacher: 'Sophia Garcia',
	},
	{
		id: 18,
		name: 'Data Visualization and Dashboard Design Principles',
		description:
			'Master the art of data visualization and dashboard design, presenting complex data sets in a visually appealing and insightful manner.',
		teacher: 'Daniel Hernandez',
	},
	{
		id: 19,
		name: 'Game Development Fundamentals with Unity Engine',
		description:
			'Explore the fundamentals of game development using Unity Engine, covering game mechanics, graphics, physics, and interactive experiences.',
		teacher: 'Liam Adams',
	},
	{
		id: 20,
		name: 'Cloud Computing Architectures and Deployment Strategies',
		description:
			'Learn about cloud computing architectures, deployment strategies, and best practices for building scalable and reliable cloud-based applications.',
		teacher: 'Isabella Thompson',
	},
]

export default data

export const Cources = () => {
	return (
		<>
			<CourcesTable data={data} />
		</>
	)
}
