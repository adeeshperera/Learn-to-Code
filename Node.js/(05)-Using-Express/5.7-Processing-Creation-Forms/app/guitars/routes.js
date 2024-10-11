import { Router } from "express";
import {
	createGuitar,
	listGuitars,
	showGuitar,
	storeGuitar,
} from "./controller.js";
export const routes = new Router();

// /guitars

routes.get("/", listGuitars);
routes.post("/", storeGuitar); // Handle the POST request
routes.get("/create", createGuitar); // http://127.0.0.1/guitars/create
routes.get("/:id", showGuitar);

// routes.get('/create', createGuitar); // 404 - Not found
