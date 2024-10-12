import { Router } from "express";
import {
	createGuitar,
	editGuitar,
	listGuitars,
	showGuitar,
	storeGuitar,
	updateGuitar,
} from "./controller.js";
export const routes = new Router();

// /guitars

routes.get("/", listGuitars);
routes.post("/", storeGuitar);
routes.get("/create", createGuitar);

routes.get("/:id/edit", editGuitar); // http://127.0.0.1/guitars/1/edit

routes.get("/:id", showGuitar);

routes.post("/:id", updateGuitar); // Handling POST request for guitar editing
