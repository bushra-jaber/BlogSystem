import { Router } from "express";
import * as Authcontroller  from "./auth.controller.js";
const router= Router();


router.post('/register',Authcontroller.Register)
router.post('/login',Authcontroller.login)


export default router;