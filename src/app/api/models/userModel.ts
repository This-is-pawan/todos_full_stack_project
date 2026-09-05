import mongoose, { model, models, Schema, Types,Document } from "mongoose";
export interface Iuser extends  Document {
 name:string,
 email:string,
 password:string,
}
const userSchema=new Schema<Iuser>({
 name:{
  type:String,
  required:true,

 },
 email:{
  type:String,
  required:true,
  unique:true,
 },
 password:{
  type:String,
  required:true,

 },
},{timestamps:true});

const User=models.User||model<Iuser>('User',userSchema);
export default User;