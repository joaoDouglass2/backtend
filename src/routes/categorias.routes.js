const express=require("express");
const router=express.Router();
const c=require("../controllers/categoriasController");

router.get("/", c.listarCategorias);

module.exports=router;
