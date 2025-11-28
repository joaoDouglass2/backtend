const express=require("express");
const router=express.Router();
const c=require("../controllers/notasController");

router.get("/:submissaoId", c.listarNotas);
router.post("/:submissaoId", c.registrarNota);

module.exports=router;
