const express=require("express");
const router=express.Router();
const c=require("../controllers/eventosController");

router.get("/", c.listarEventos);
router.get("/:id", c.obterEvento);
router.post("/", c.criarEvento);

module.exports=router;
