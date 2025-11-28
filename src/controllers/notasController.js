exports.listarNotas=(req,res)=>{
 const {submissaoId}=req.params;
 res.json({
 submissaoId,
 notas:[
 {avaliador:"Prof João",nota:8.5},
 {avaliador:"Dra Maria",nota:9.0}
 ],
 media:8.75
 });
};

exports.registrarNota=(req,res)=>{
 const {submissaoId}=req.params;
 const {avaliador,nota}=req.body;
 res.status(201).json({
 message:"Nota registrada",
 submissaoId,avaliador,nota
 });
};
