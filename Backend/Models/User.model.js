import mongoose, {Schema} from "mongoose";

const user = new Schema ({
    firstName: String,
    lastName: String,
    country: String,
    dob: Date,
    email: String,
    password: String,
    countryCode: String,
    phone: Number
})

export default mongoose.model('users', user);