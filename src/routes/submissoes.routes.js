const express=require("express");
const router=express.Router();
const c=require("../controllers/submissoesController");

router.get("/", c.listarSubmissoes);
router.post("/", c.criarSubmissao);

module.exports=router;
