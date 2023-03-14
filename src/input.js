// import { useState } from "react";

// const Create = () => {
// 	const [team1Name, setTeam1Name] = useState('');
// 	const [team2Name, setTeam2Name] = useState('');

// 	return (
// 		<div className="input">
// 			<h1>input</h1>
// 		</div>
// 	);
// };

// export default Create;

import React, {useState} from "react";
import {Link} from "react-router-dom";

function Create() {
	const [team1Name, setTeam1Name] = useState("");
	const [team2Name, setTeam2Name] = useState("");
	const [team1Players, setTeam1Players] = useState([]);
	const [team2Players, setTeam2Players] = useState([]);

	const handleTeam1NameChange = (event) => {
		setTeam1Name(event.target.value);
	};

	const handleTeam2NameChange = (event) => {
		setTeam2Name(event.target.value);
	};

	const handleTeam1PlayerChange = (event, index) => {
		const newPlayers = [...team1Players];
		newPlayers[index].name = event.target.value;
		setTeam1Players(newPlayers);
	};

	const handleTeam1PlayerTypeChange = (event, index) => {
		const newPlayers = [...team1Players];
		newPlayers[index].type = event.target.value;
		setTeam1Players(newPlayers);
	};

	const handleTeam2PlayerChange = (event, index) => {
		const newPlayers = [...team2Players];
		newPlayers[index].name = event.target.value;
		setTeam2Players(newPlayers);
	};

	const handleTeam2PlayerTypeChange = (event, index) => {
		const newPlayers = [...team2Players];
		newPlayers[index].type = event.target.value;
		setTeam2Players(newPlayers);
	};

	const handleAddPlayer = (team) => {
		if (team === 1) {
			setTeam1Players([...team1Players, {name: "", type: ""}]);
		} else {
			setTeam2Players([...team2Players, {name: "", type: ""}]);
		}
	};

	// const [res, setRes] = useState({});
	const handleSaveData = () => {
		const data = {
			team1: {
				name: team1Name,
				players: team1Players,
			},
			team2: {
				name: team2Name,
				players: team2Players,
			},
		};
		// const json = JSON.stringify(data);
		localStorage.setItem("DATABASE", JSON.stringify(data));
		// const datas = JSON.parse(localStorage.getItem("DATABASE"));
		// setRes(datas);

		// console.log(datas);
	};

	return (
		<div className="input container mt-5 ">
			<Link
				to="/info"
				className="btn btn-secondary mb-5 btn-lg p-3"
				onClick={handleSaveData}
			>
				Save and Continue
			</Link>
			<div className="row">
				<div className="team1 col-5 me-5">
					<div className="form-group row">
						<label className=" col-4 col-form-label" htmlFor="team1NameInput">
							Team 1 Name:
						</label>
						<div className="col-8">
							<input
								className=" form-control"
								type="text"
								id="team1NameInput"
								value={team1Name}
								placeholder="Enter Team 1 Name"
								onChange={handleTeam1NameChange}
							/>
						</div>
					</div>
					<div>
						<h4 className="mt-3 mb-3">Team 1 Players:</h4>
						{team1Players.map((player, index) => (
							<div key={index}>
								<div className="form-group row">
									<label
										className="mb-2 col-4 col-form-label"
										htmlFor={`team1PlayerNameInput-${index}`}
									>
										Player {index + 1} Name:
									</label>
									<div className="col-8">
										<input
											className="form-control"
											type="text"
											id={`team1PlayerNameInput-${index}`}
											value={player.name}
											placeholder="Enter Name"
											onChange={(event) =>
												handleTeam1PlayerChange(event, index)
											}
										/>
									</div>
								</div>
								<div className="form-group row">
									<label
										className="mb-2 col-4 col-form-label"
										htmlFor={`team1PlayerTypeInput-${index}`}
									>
										Player {index + 1} Type:
									</label>
									<div className="col-8">
										<input
											className="form-control"
											type="text"
											id={`team1PlayerTypeInput-${index}`}
											value={player.type}
											placeholder="Enter Type [bat/bowl]"
											onChange={(event) =>
												handleTeam1PlayerTypeChange(event, index)
											}
										/>
									</div>
								</div>
							</div>
						))}
						<button
							className="mt-3 btn btn-danger"
							onClick={() => handleAddPlayer(1)}
						>
							Add Player
						</button>
					</div>
				</div>
				<div className="team2 col-5 ">
					<div className="form-group row">
						<label className="col-4 col-form-label" htmlFor="team2NameInput">
							<h6> Team 2 Name:</h6>
						</label>
						<div className="col-8">
							<input
								className="form-control"
								type="text"
								id="team2NameInput"
								value={team2Name}
								placeholder="Enter Team 2 Name"
								onChange={handleTeam2NameChange}
							/>
						</div>
					</div>
					<div>
						<h4 className="mt-3 mb-3">Team 2 Players:</h4>
						{team2Players.map((player, index) => (
							<div key={index}>
								<div className="form-group row">
									<label
										className="mb-2 col-4 col-form-label"
										htmlFor={`team2PlayerNameInput-${index}`}
									>
										Player {index + 1} Name:
									</label>
									<div className="col-8">
										<input
											className="form-control"
											type="text"
											id={`team2PlayerNameInput-${index}`}
											value={player.name}
											placeholder="Enter Name"
											onChange={(event) =>
												handleTeam2PlayerChange(event, index)
											}
										/>
									</div>
								</div>
								<div className="form-group row">
									<label
										className="mb-2 col-4 col-form-label"
										htmlFor={`team2PlayerTypeInput-${index}`}
									>
										Player {index + 1} Type:
									</label>
									<div className="col-8">
										<input
											className="form-control"
											type="text"
											id={`team2PlayerTypeInput-${index}`}
											value={player.type}
											placeholder="Enter Type [bat/bowl]"
											onChange={(event) =>
												handleTeam2PlayerTypeChange(event, index)
											}
										/>
									</div>
								</div>
							</div>
						))}
						<button
							className="mt-3 btn btn-danger"
							onClick={() => handleAddPlayer(2)}
						>
							Add Player
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Create;
