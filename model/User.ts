import { create } from "domain";
import mongoose,{Schema,Document} from "mongoose";


export interface Message extends Document {
    content: string;
     createdAt: Date;
}


const MessageScehma: Schema<Message> = new Schema({
     content:{
        type: String,
        required: true
     },
     createdAt:{
        type:Date,
        requried:true,
        defalut:Date.now
     }
     
})


export interface User extends Document {
   username: string;
    email:string;
    password:string;
    verfiyCode:string;
    verfiyCodeExpiry:Date;
     isAcceptingMessage:boolean;
     isVerfied:boolean;
     messages:Message[];
}

const UserSchema: Schema<User> = new Schema({
     username:{
        type: String,
        required: [true,"Username is required"],
        trim:true,
        unique:true,
     },
     email:{
        type:String,
        requried:[true,"Email is required"],
         unique:true,
         match:[/.+\@.+\..+/,'please use a valid email  ']
     },
     password:{
         type:String,
         required:[true,"Password is required"],

     },
     verfiyCode:{
        type:String,
        required:[true,"Verfiy code is required"],
     },
     verfiyCodeExpiry:{ 
         type:Date,
         required:[true,"Verfiy code expiry is required"],
     },
     isVerfied:{
        type:Boolean,
        required:true,
        default:false,
     },
       isAcceptingMessage:{
         type:Boolean,
       },
       messages:[MessageScehma]


})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema);

export default UserModel;