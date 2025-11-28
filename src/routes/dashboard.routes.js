const express=require("express");
const router=express.Router();
const c=require("../controllers/dashboardController");

router.get("/", c.obterDashboard);

module.exports=router;
