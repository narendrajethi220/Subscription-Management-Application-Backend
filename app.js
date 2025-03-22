import express from 'express';
import {PORT} from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/index.js';
import errorMiddleware from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';
import arcjetMiddleware from './middlewares/arcjet.middleware.js';
import workflowRouter from './routes/workflow.routes.js';

const app=express();

app.use(errorMiddleware);
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));
app.use(cookieParser()); //allows you to easily access and parse cookies sent by a user's browser in an HTTP request,
app.use(arcjetMiddleware);

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions',subscriptionRouter);
app.use("/api/v1/workflows",workflowRouter);

app.get('/',(req,res)=>{
    res.send(
        {
            body:'Welcome to Subscription Management System!'})
})

app.listen(PORT, async()=>{
    console.log(`Server is running on PORT, ${PORT}`);
    await connectToDatabase();
})
export default app; 