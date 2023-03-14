import {useState} from "react";
import { Link } from "react-router-dom";

const Bat = () => {
	
    // const scores = JSON.parse(localStorage.getItem("SCORES"))
    const datas = JSON.parse(localStorage.getItem("DATABASE"));
    const players1 = datas.team1.players;
	const players2 = datas.team2.players;
    const [striker, setStriker] = useState({
        name: 'Abc',
        runs: 16,
        balls: 7,
    });
    const [nonStriker,setNonStriker] = useState({
        name: 'Def',
        runs: 10,
        balls: 9,
    });
    
	
	return (
		<div className="minW container row justify-content-center">
			<h1 className="score-heading mt-5 mb-5 ms-5">Batting Score Card</h1>
            <div className="col-5 ms-5 bg-light p-5">
                <h2 className=" fw-bold">Striker</h2>
                {/* <h3>Name : { striker.name} </h3> */}
                {players1[0].name && <h3>Name : {players1[0].name} </h3>}
                <h3>Runs : { striker.runs} </h3>
                <h3>Balls : { striker.balls} </h3>
			</div>
            <div className="ms-5 col-5 bg-light p-5">
                <h2 className="fw-bold">Non-Striker</h2>
				{players2[0].name && <h3>Name : {players2[0].name} </h3>}
                <h3>Runs : { nonStriker.runs} </h3>
                <h3>Balls : { nonStriker.balls} </h3>
				
            </div>
            <div className="text-center col-5 ms-5 mt-4 bg-light p-5">
                <h3>Last Ball Result : {2}</h3>
			</div>
            <div className="ms-5 mt-4 container row d-inline-flex justify-content-center gap-5">
				<Link to='/Score' className="col-5 btn btn-danger mt-5  btn-lg  "> Scorecard</Link>
				<Link to='/Bowl' className="col-5 btn btn-danger mt-5 btn-lg ">Bowling Scorecard</Link>
			</div>
		</div>
	);
};

export default Bat;
