import UserModel from "../Models/User.model.js";
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';

export const Register = async (req,res) => {
    try{
        const {firstName, lastName, country, dob, email, password, confirmPass, countryCode, phone} = req.body; console.log(firstName,lastName,email,password,phone);
        if(!firstName || !lastName || !email || !password || !phone) return res.status(401).json({success:false, message:"Mandatory field data missing"});
        
        const hashedPassword = await bcrypt.hash(password,10);

        const user = new UserModel({
            firstName,
            lastName,
            country,
            dob,
            email,
            password:hashedPassword,
            countryCode,
            phone
        })

        await user.save();

        return res.status(201).json({success:true, message:'User registered successfully'})

    }catch(error){
        // console.log(error);
        return res.status(500).json({success:false, message:error.message})
    }
}

export const Login = async (req,res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password) return res.status(401).json({success:false, message:'Email or password not provided'});

        const user = await UserModel.findOne({email:email});
        if(!user) res.status(401).json({success:false, message:'User not found'});

        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if(!isCorrectPassword) res.status(401).json({success:false, message:'Password does not match'});

        const token = await Jwt.sign({id:user._id}, process.env.JWT_SECRET);

        return res.status(200).json({success:true, message:"Login successfull", user, token});

    }catch(error){
        return res.status(500).json({success:false, message:error.message});
    }
}

export const GetCurrentUser = async (req,res) => {
    try{
        const {id} = req.query;
        if(!id) return res.status(401).json({success:false, message:'User id from token not found'});

        const userId = await Jwt.verify(id,process.env.JWT_SECRET);

        const user = await UserModel.findById(userId.id);
        if(!user) return res.status(404).json({success:false, message:'Current user not found'});

        return res.status(200).json({success:true, user:user});

    }catch(error){
        console.log(error.message);
        return res.status(500).json({success:false, message:error.message});
    }
}