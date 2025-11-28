const express=require("express");
const router=express.Router();
const c=require("../controllers/adminController");

router.post("/aprovar/:id", c.aprovar);
router.post("/rejeitar/:id", c.rejeitar);

module.exports=router;
