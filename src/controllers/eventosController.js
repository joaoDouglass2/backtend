exports.listarEventos=(req,res)=>{
 res.json([
 {id:1,nome:"Congresso 2025",data:"2025-08-20"},
 {id:2,nome:"Simpósio IA",data:"2025-11-02"}
 ]);
};
exports.obterEvento=(req,res)=>{
 const {id}=req.params;
 res.json({id,nome:"Evento Exemplo",data:"2025-08-20"});
};
exports.criarEvento=(req,res)=>{
 const {nome,data}=req.body;
 res.status(201).json({id:Date.now(),nome,data});
};
