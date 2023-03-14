import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="container mt-5">
			<h1 className="heading big-text">Criculator</h1>
			<p className=" mt-3 mb-4">
				Criculator is a website that offers a unique cricket simulator
				experience for cricket enthusiasts. With Criculator, users can create
				virtual matches and get live score information of their matches. The
				website is designed to provide a fun and engaging way for users to
				experience the excitement of cricket without having to physically be on
                the field.               

			</p>

			<h4>Match Details</h4>
			<h5>Number of Overs : 6</h5>
			<Link to='/create' className="btn btn-danger btn-lg mt-4">Create Your Match Now</Link>
		</div>
	);
};

export default Home;
