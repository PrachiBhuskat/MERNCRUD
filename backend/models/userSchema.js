import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

const userSchema =  mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    }
});

const User = mongoose.model('user',userSchema);
export default User;
 