const Users = require("../schemas/Users");
const jwt = require("jsonwebtoken");
const crypto = require("../helpers/crypto");
const {decrypt,encrypt} = crypto;


exports.addNewUser = async(req,res)=>{
  try { 
    const {body} = req;
    const newUser = Users(body);
    await newUser.save();
    res.status(200).json({msg: "User created"})
    
  } catch (error) {
    res.status(500).json({msg: "Error while creating user"});
  }
}
exports.authenticateUser = async (req, res) => {
  try {

    const { body } = req;
    const user = await Users.findOne({ email: body.email });
    if (!user) {
      return res.status(404).json({ msg: "Invalid credentials" });
    }
    const validUser = await user.comparePassword(body.password);

    if(!validUser){
      return res.status(404).json({msg: "Invalid credentials"});
    }
    const newUsr = {
      email: user.email,
    };
    
    const token = jwt.sign(newUsr, process.env.SECRET, { expiresIn: "1d" });
    res.status(200).json(token);
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "Error while querying user" });
  }
};
exports.findUser = async (req, res) => {
  try {
    const {body} = req;
    const userInfo = decrypt(body.credentials)
    const {email, password} = userInfo;  
    const user = await Users.findOne({email:email})
    if(!user){
      return res.satatus(404).json({msg: "Invalid credentials"});
    }

    const validUser = await user.comparePassword(password);
    if(!validUser ){
      return res.status(404).json(null);
    }
    res.status(200).json(encrypt({email:user.email}));
  } catch (error) {

    res.status(500).json({ msg: "Error while querying user" });
  }
};
