import { Router } from "express";
import  * as blogcontroller from "./blog.controller.js";
const router= Router();

router.get('/',blogcontroller.getBlog);
router.post('/addBlog',blogcontroller.addBlog);
export default router;