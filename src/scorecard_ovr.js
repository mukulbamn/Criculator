import {useState} from "react";
import {Link} from "react-router-dom";

const Score = () => {
	const matchData = {
		NRR: 0,
		score: 0,
		ballResult: 0,
		remainingBalls: 0,
		currentOver: 0,
		currentBall: 0,
		possibleScores: [0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 4, 6],
		inning: 1,
	};
	localStorage.setItem("SCORES", JSON.stringify(matchData));

	const [currentScore, setCurrentScore] = useState(0);
	const [currentOver, setCurrentOver] = useState(0);
	const [NRR, setNRR] = useState(0);
	const [ballResult, setBallResult] = useState(0);
	const [remainingBalls, setRemainingBalls] = useState(36);
	const totalOvers = 4;
	const [currentBall, setCurrentBall] = useState(0);
	const scores = [0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 4, 6];

	let result = 0;
	// let over = 0;
	// let score = 0;

	function playBall() {
		if (remainingBalls > 0) {
			setCurrentBall(currentBall + 1);
			setRemainingBalls(remainingBalls - 1);
			if (currentBall === 5) {
				setCurrentBall(0);
				setCurrentOver(currentOver + 1);
			}
			result = scores[Math.floor(Math.random() * 12)];
			// score += scores[Math.floor(Math.random() * 12)];
			setCurrentScore(currentScore + result);
			setBallResult(result);
			setNRR(currentScore / (currentOver + 1));
			
			// console.log("score :", currentScore, over, result);
			matchData.NRR = NRR;
			matchData.ballResult = ballResult;
			matchData.score = currentScore;
			matchData.remainingBalls = remainingBalls;
			matchData.currentOver = currentOver;
			matchData.currentBall = currentBall;
			console.log(matchData);
		}
	}

	return (
		<div className="minW container row justify-content-center gap-5">
			<h1 className="score-heading mt-5 mb-5 ms-5">Score Card</h1>
			<div className="ms-5 col-5 bg-light p-5">
				<h3>Current Score: {currentScore}</h3>
				<h3>
					Current Over: {currentOver}.{currentBall}
				</h3>
				<h3>Total Overs: {totalOvers}</h3>
				<h3>Remaining Balls: {remainingBalls}</h3>
				<h3>Net Run Rate : {NRR}</h3>
				<Link to="/" className="btn btn-secondary me-3 mb-2">
					Start Over
				</Link>
			</div>
			<div className=" col-5 bg-light p-5 h-25 text-center">
				<h3>Last Ball Result: {ballResult}</h3>
				<button onClick={playBall} className="btn btn-danger btn-lg p-4 m-3">
					Next Ball
				</button>
			</div>
			<div className="ms-5 mt-5 container row d-inline-flex justify-content-center gap-5">
				<Link to="/Bat" className="col-5 btn btn-danger mt-5  btn-lg  ">
					Batting Scorecard
				</Link>
				<Link to="/Bowl" className="col-5 btn btn-danger mt-5 btn-lg ">
					Bowling Scorecard
				</Link>
			</div>
		</div>
	);
};

export default Score;
