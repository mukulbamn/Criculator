/* eslint-disable no-unused-vars */
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const Team = () => {
	const [teamInfo, setTeamInfo] = useState(null);
	// const [name, setName] = useState("Mario");
	const datas = JSON.parse(localStorage.getItem("DATABASE"));

	// useEffect(() => {
	// 	fetch("")
	// })
	const players1 = datas.team1.players;

	// console.log(players1);
	const players2 = datas.team2.players;

	return (
		<div className=" minW container m-5">
			<h1 className="text-center fw-bold">Teams Info</h1>
			{!datas.team1.name && !datas.team2.name && (
				<div className="container">
					<h2 className="m-5">
					Please go to Create Team and Enter Team Details
					</h2>
					<Link to="/create" className="btn btn-danger btn-lg m-5"> Create Team</Link>
				</div>
			)}
			{datas.team1.name && datas.team2.name && (
				<div className="row mt-5">
					<div className="col-6">
						<ul className="list-group list-group-light">
							<li className="list-group-item text-center">
								<h3>Team 1 : {datas.team1.name}</h3>
							</li>
							{players1[0] && (
								<li className="list-group-item">
									Player 1 : {players1[0].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players1[0].type}
									</span>
								</li>
							)}
							{players1[1] && (
								<li className="list-group-item">
									Player 2 : {players1[1].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players1[1].type}
									</span>
								</li>
							)}
							{players1[2] && (
								<li className="list-group-item">
									Player 3 : {players1[2].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players1[2].type}
									</span>
								</li>
							)}
							{players1[3] && (
								<li className="list-group-item">
									Player 4 : {players1[3].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players1[3].type}
									</span>
								</li>
							)}
							{players1[4] && (
								<li className="list-group-item">
									Player 5 : {players1[4].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players1[4].type}
									</span>
								</li>
							)}
							{players1[5] && (
								<li className="list-group-item">
									Player 6 : {players1[5].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players1[5].type}
									</span>
								</li>
							)}
							{players1[6] && (
								<li className="list-group-item">
									Player 7 : {players1[6].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players1[6].type}
									</span>
								</li>
							)}
							{players1[7] && (
								<li className="list-group-item">
									Player 8 : {players1[7].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players1[7].type}
									</span>
								</li>
							)}
							{players1[8] && (
								<li className="list-group-item">
									Player 9 : {players1[8].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players1[8].type}
									</span>
								</li>
							)}
							{players1[9] && (
								<li className="list-group-item">
									Player 10 : {players1[9].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players1[9].type}
									</span>
								</li>
							)}
							{players1[10] && (
								<li className="list-group-item">
									Player 11 : {players1[10].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players1[10].type}
									</span>
								</li>
							)}
						</ul>
					</div>
					<div className="col-6">
						<ul className="list-group list-group-light">
							<li className="list-group-item text-center">
								<h3>Team 2 : {datas.team2.name}</h3>
							</li>
							{players2[0] && (
								<li className="list-group-item">
									Player 1 : {players2[0].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players2[0].type}
									</span>
								</li>
							)}
							{players2[1] && (
								<li className="list-group-item">
									Player 2 : {players2[1].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players2[1].type}
									</span>
								</li>
							)}
							{players2[2] && (
								<li className="list-group-item">
									Player 3 : {players2[2].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players2[2].type}
									</span>
								</li>
							)}
							{players2[3] && (
								<li className="list-group-item">
									Player 4 : {players2[3].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players2[3].type}
									</span>
								</li>
							)}
							{players2[4] && (
								<li className="list-group-item">
									Player 5 : {players2[4].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players2[4].type}
									</span>
								</li>
							)}
							{players2[5] && (
								<li className="list-group-item">
									Player 6 : {players2[5].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players2[5].type}
									</span>
								</li>
							)}
							{players2[6] && (
								<li className="list-group-item">
									Player 7 : {players2[6].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players2[6].type}
									</span>
								</li>
							)}
							{players2[7] && (
								<li className="list-group-item">
									Player 8 : {players2[7].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players2[7].type}
									</span>
								</li>
							)}
							{players2[8] && (
								<li className="list-group-item">
									Player 9 : {players2[8].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players2[8].type}
									</span>
								</li>
							)}
							{players2[9] && (
								<li className="list-group-item">
									Player 10 : {players2[9].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players2[9].type}
									</span>
								</li>
							)}
							{players2[10] && (
								<li className="list-group-item">
									Player 11 : {players2[10].name}{" "}
									<span className=" position-absolute start-50 ">
										Type :{players2[10].type}
									</span>
								</li>
							)}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default Team;
