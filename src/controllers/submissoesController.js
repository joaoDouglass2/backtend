exports.listarSubmissoes=(req,res)=>{
 res.json([
 {id:1,titulo:"Sistema de Eventos",autor:"João"},
 {id:2,titulo:"IA Aplicada",autor:"Maria"}
 ]);
};

exports.criarSubmissao=(req,res)=>{
 const {titulo,autor}=req.body;
 res.status(201).json({id:Date.now(),titulo,autor});
};
