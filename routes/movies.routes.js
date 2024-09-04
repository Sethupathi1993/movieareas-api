import express from "express"
import { MovieIndex,
    MovieCreate,
    MovieUpdate,
    MovieDelete
 } from "../controller/movies-controller.js";
const router = express.Router();






//R-For Reading

router.get('/',MovieIndex)
//W- for Writing
router.post('/', MovieCreate )

//U-for Updating

router.put('/:id', MovieUpdate)
//D-For Deleting

router.delete('/:id',MovieDelete )


export default router;