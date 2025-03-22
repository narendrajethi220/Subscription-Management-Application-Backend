const errorMiddleware=(err,req,res,next)=>{
try{
   let error={...err};
   error.message=err.message;
   console.error(err);
   
   //mognoose bad object
   if(err.name === 'CastError'){
      const message='Resource not found';
      error=new Error(message);
      error.statusCode=404;
   }
   
   //mongoose duplicate key
   if(err.code===11000){
    const message='Duplicate field value entered';
    error= new Error(message);
    err.statusCode=400;
   }
  
   //mongoose validation error
  if(err.name==='validationError'){
    const message=Object.values(err.errors).map(val=>val.message);
    error=new Error(message.json(','));
    error.statusCode=400;
  }
  
  res.status(err.statusCode || 500).json({
    success:false,
    error:error.message || 'Server Error',
  })

}catch(error){
    next(error);
}
}
export default errorMiddleware;