import mongoose from "mongoose";
const subscriptionSchema=new mongoose.Schema({
  name:{
    type:String,
    required:[true, 'Subscription Name is required'],
    trim:true,
    minLength:3,
    maxLength:100,
  },
  price:{
    type:Number,
    required:[true, 'Subscription Price is required'],
    min:[0, 'price must be greater than 0'],
  },
  currency:{
    type:String, 
    enum:['USD','INR','EUR'],
    default:'INR'
  },
  frequency:{
    type:String, 
   enum:['daily', 'weekly','monthly','quaterly','yearly'],
  },
  category:{
  type:String, 
  enum:['sports', 'technology','news', 'entertainment','lifestyle','education','others'],
  required:true
  },
  paymentMethod:{
    type:String,
    required:[true,'Payment Method is required'],
    trim:true,
  },
  status:{
    type:String,
    enum:['active','cancelled','expired'],
    default:'active'
  },
  startDate:{
    type:Date,
    required:[true,'start date is required'],
    validate:{
        validator:function(value){
          return value <= new Date();
        },
        message:'Start Date must not be in the future.',
  },
},
  renewalDate:{
    type:Date,
    validate:{
        validator:function(value){
            return value>this.startDate;
        },
        message:'Renewal date must be after start date',
    }
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User', 
    required:[true,'Reference to user is required'],
    index:true, // optimising the queries by indexing the user field
 },
},{timestamps:true});

//Auto calculating renewal date if missing,
subscriptionSchema.pre('save',function(next){
    if(!this.renewalDate){
        const renewalPeriods={
            daily:1,
            weekly:7,
            monthly:30,
            quarterly:90,
            yearly:365,
        }
        this.renewalDate=new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }
  
   //Auto Update the status of renewal date has passed
   if(this.renewalDate < new Date()){
     this.status='expired';
   }
   next();
})

const Subscription=mongoose.model('Subscription',subscriptionSchema);
export default Subscription;