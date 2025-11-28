exports.aprovar=(req,res)=>{
 const {id}=req.params;
 res.json({message:"Aprovado",submissaoId:id,status:"aprovado"});
};
exports.rejeitar=(req,res)=>{
 const {id}=req.params;
 res.json({message:"Rejeitado",submissaoId:id,status:"rejeitado"});
};
