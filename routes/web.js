import express from "express";
const router = express.Router();
import { contactController } from "../controllers/contactController.js";
import { homeController } from "../controllers/homeController.js";
import { servicesController } from "../controllers/servicesController.js";
import { skillController } from "../controllers/skillController.js";

router.get("/", homeController);
router.get("/contact", contactController);
router.get("/services", servicesController);
router.get("/skill", skillController);

export default router;
