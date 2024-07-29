import { Router } from "express";
import * as playersController from "./controllers/players-controller";
import * as clubsController from "./controllers/clubs-controller";

const router = Router();

router.get("/players", playersController.getPlayer);
router.post("/players", playersController.postPlayer);

router.get("/players/:id", playersController.getPlayerById);

router.delete("/players/:id", playersController.deletePlayer);

router.patch("/players/:id", playersController.updatePlayer);

router.get("/clubs", clubsController.getClubs)


export default router;