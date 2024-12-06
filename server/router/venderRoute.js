import express from 'express';
import {createVender,getOneVender,getAllVenders,deleteVender,updateVender} from "../controllers/venderController.js"

const route=express.Router();

route.post("/create",createVender);
route.get("/getAll",getAllVenders);
route.get("/getOne/:id",getOneVender);
route.put("/update/:id",updateVender);
route.delete("/deleteone/:id",deleteVender);

export default route;