const User = require("../model/userModel");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

const controller = {

async createUser(req, res) {

try {
const { name, age, mobile, email, password } = req.body;

const salt= await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);

const postedData = await User.create({
name,
age,
mobile,
email,
password: hashedPassword,
});

res.status(200).json({
    status: true, 
    message: "User Created Successfully", 
    postedData, 
});

} catch (error) {
    res.status(500).json({ status: false, message: "Something went wrong" });
}},

async login(req, res){
    try {
        const {email,password}=req.body;
        const findUser= await User.findOne({email:email});

        if(findUser){
            const compare = await bcrypt.compare(password, findUser.password);

            if(compare){
                const token = jwt.sign({_id:findUser._id},
                     "abcdefgh",
                      {expiresIn:"1hr"});
                res.status(200).json({status:true, message:"login successfull", token})
            } else{
                res.status(401).json({status:false, message:"invalid password"})
            }
        } else{
            res.status(404).json({status:false, message:"user not found"})

        }
        
    } catch (error) {
        res.status(500).json({status:false, message:"something went wrong"})
    }
},

async users(req, res) {

    try {
        const getData = await User.find()
        res.status(200).json({status:true,message:getData})
    } catch (error) {
        res.status(500).json({ status: false, message: "Something went wrong" });

};},

async user(req, res) {
    try {
        const {id} = req.params;

        const getUser = await User.findOne({_id:id});

        if(getUser){
            res.status(200).json({status:true, message:getUser});
        } else{
            res.status(404).json({status:false,message:"user not found"});
        }
        
    } catch (error) {
        res.status(500).json({status:false, message:"something went wrong"})
    }
},

async updateUser(req, res) {
    try {
        const {id}=req.params;
        const {name,age,mobile,email,password} = req.body;

        const getUser = await User.findOne({_id:id});

        if(getUser){
            const updatedUser = await User.updateOne({_id:id}, {$set: {name,age,mobile,email,password}});

            res.status(200).json({status:true, message: "updated successfully",updatedUser});
        } else{
            res.status(404).json({status:false,message:"user not found"});
        }
        
    } catch (error) {
        res.status(500).json({status:false, message:"something went wrong"})
    }
},

async deleteUser(req, res) {
    try {
        const {id} = req.params;
        const getUser = await User.findOne({_id:id});

        if(getUser){
            const deletedUser = await User.deleteOne({_id:id});
            res.status(200).json({status:true, message:"deleted successfully"});
        } else{
            res.status(404).json({status:false,message:"user not found"});
        }
        
    } catch (error) {
        res.status(500).json({status:false, message:"something went wrong"})
    }
},


};
module.exports = controller;