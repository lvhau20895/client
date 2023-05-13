import React from "react";
import roomList from "./roomList.module.scss";
import { io } from "socket.io-client";

const RoomList = () => {
	const socket = io("https://server-lvh.onrender.com/");
	socket.on("send", id => {
		console.log(id);
	});
	return <div className={roomList.demo}>RoomList</div>;
};

export default RoomList;
