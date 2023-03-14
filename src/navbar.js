import {Link} from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navs">
			<nav className="navbar navbar-light bg-light justify-content-between flex-nowrap flex-row">
				<ul className="navbar-nav flex-row" >
					<li className="nav-item me-3" >
						<Link to="/" className="heading navbar-brand ms-3">
							Criculator
						</Link>
					</li >
					<li className="nav-item ">
						<Link to="/" className="nav-link me-4 ">
							Home
						</Link>
					</li>
					<li className="nav-item ">
						<Link to="/about" className="nav-link  ">
							About
						</Link>
					</li>
				</ul>
				<ul className="navbar-nav flex-row">
					<li className="nav-item me-3">
						<Link className="btn btn-outline-danger btn-lg me-3" to="/">
							Start Over
						</Link>
						<Link className="btn btn-danger btn-lg" to="/create">
							New Match
						</Link>
					</li>
				</ul>
			</nav>
			{/* sub navbar */}
			<nav className="navbar-dark bg-dark flex-nowrap flex-row">
				<ul className="navbar-nav flex-row justify-content-center">
					<li className="nav-item ">
						<Link className="nav-link me-4 " to="/create">
							Create Team
						</Link>
					</li>
					<li className="nav-item ">
						<Link className="nav-link me-4 " to="/info">
							Team Info
						</Link>
					</li>
					<li className="nav-item ">
						<Link className="nav-link me-4 " to="/score">
							Scorecard
						</Link>
					</li>
					<li className="nav-item ">
						<Link className="nav-link me-4 " to="/bat">
							Batting Scorecard
						</Link>
					</li>
					<li className="nav-item ">
						<Link className="nav-link me-4 " to="/bowl">
							Bowling Scorecard
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
