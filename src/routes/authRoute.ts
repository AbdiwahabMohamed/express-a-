import { Router } from "express";
import { createUser, loginUser } from "../Controllers/auth";

const router = Router();

// /api/users/register
router.route("/api/users").post(createUser);

//  /api/users/login
router.route("/api/users").post(loginUser);
