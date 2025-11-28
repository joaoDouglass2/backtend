exports.listarUsuarios=(req,res)=>{
 res.json([
 {id:1,nome:"Administrador",tipo:"admin"},
 {id:2,nome:"Carlos",tipo:"avaliador"},
 {id:3,nome:"João",tipo:"autor"}
 ]);
};
