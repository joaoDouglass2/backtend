const express=require("express");
const router=express.Router();
const c=require("../controllers/avaliadoresController");

router.get("/", c.listarAvaliadores);

module.exports=router;
