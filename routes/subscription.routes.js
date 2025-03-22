import { Router } from "express";
import authorize from '../middlewares/auth.middleware.js';
import { createSubscription, getUserSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter=Router();

subscriptionRouter.get('/',(req,res)=>{
    res.send({
        title:'GET all subscriptions'
    })
})
subscriptionRouter.get('/:id',authorize,getUserSubscription);
subscriptionRouter.post('/',authorize,createSubscription);
subscriptionRouter.put('/:id',(req,res)=>{
    res.status(200).json({
        title:'Update Subscription',
    })
});
subscriptionRouter.delete('/:id',(req,res)=>{
    res.send({
        title:'DELETE subscription'
    })
})
subscriptionRouter.get('/user/:id',(req,res)=>{
    res.send({
        title:'GET all user subscriptions'
    })
})
subscriptionRouter.put('/:id/cancel',(req,res)=>{
    res.send({
        title:'CANCEL subscriptions'
    })
})
subscriptionRouter.get('/upcoming-renewals',(req,res)=>{
    res.send({
        title:'GET upcoming renewals'
    })
})

export default subscriptionRouter;