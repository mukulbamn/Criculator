import {Link} from "react-router-dom";

const About = () => {
	return (
		<div className="minW container m-5">
			<h2>About</h2>
			<p className="my-5">
				Criculator is a website that offers a unique cricket simulator
				experience for cricket enthusiasts.  With Criculator, users can
				create virtual matches and get live score information of their matches.
				The website is designed to provide a fun and engaging way for users to
				experience the excitement  of cricket without having to physically be on
				the field.
			</p>
			<p>
				To get started, go the the <Link to="/">Home Page</Link> or simply click
				on the New Match Button on the top right of your screen.
			</p>
			<p className="mt-5">Made with love by Mukul Sharma :)</p>
		</div>
	);
};

export default About;
