import {Link} from "react-router-dom";

const Bowl = () => {
	// useEffect(() => {
	// 	fetch(" http://localhost:8000").then();
	// });
	const datas = JSON.parse(localStorage.getItem("DATABASE"));
	// const players1 = datas.team1.players;
	const players2 = datas.team2.players;

	const bowler = {
		name: "Xyz",
		overs: 3,
		speed: "133kph",
		lastBalls: [0, 1, 1, 0, "W", 2, 4, 1, 0, 6],
	};

	return (
		<div className="minW container row ms-5">
			<h1 className="score-heading mt-5 mb-5 ms-5">Bowling Score Card</h1>
			<div className="ms-5 mb-3 col-5 bg-light p-5 me-5 ">
				<h2 className="fw-bold">Bowler</h2>
				{/* <h3>Name : { bowler.name}</h3> */}
				{players2[2].name && <h3>Name : {players2[2].name} </h3>}
				<h3>Overs : {bowler.overs}/4</h3>
				<h3>Avg Speed : {bowler.speed}</h3>
			</div>
			<div className="col-6 ms-5 bg-light p-5">
				<h3>Last 10 Balls : {bowler.lastBalls.map((e) => e + "  ")}</h3>
			</div>
			<div className="ms-5 mt-5 container row d-inline-flex justify-content-center gap-5">
				<Link to="/Score" className="col-5 btn btn-danger mt-5 btn-lg ">
					{" "}
					Scorecard
				</Link>
				<Link to="/Bat" className="col-5 btn btn-danger mt-5  btn-lg  ">
					Batting Scorecard
				</Link>
			</div>
		</div>
	);
};

export default Bowl;
