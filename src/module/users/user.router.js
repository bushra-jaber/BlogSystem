import { Router } from "express";

import  * as usercontroller from "./user.controller.js";
const router= Router();

router.get('/',usercontroller.getUser)
router.patch('/update/:id',usercontroller.update)
router.delete('/delete/:id',usercontroller.destroy)
export default router;