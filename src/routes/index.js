const express = require("express");
const router = express.Router();

router.use("/eventos", require("./eventos.routes"));
router.use("/submissoes", require("./submissoes.routes"));
router.use("/usuarios", require("./usuarios.routes"));
router.use("/dashboard", require("./dashboard.routes"));
router.use("/avaliadores", require("./avaliadores.routes"));
router.use("/notas", require("./notas.routes"));
router.use("/categorias", require("./categorias.routes"));
router.use("/admin", require("./admin.routes"));

router.get("/", (req,res)=>res.json({
 message:"API Sistema de Eventos",
 rotas:["/api/eventos","/api/submissoes","/api/usuarios","/api/dashboard"]
}));

module.exports=router;
