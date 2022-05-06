const Users = require("../schemas/Users");
const jwt = require("jsonwebtoken");
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
    const newUsr = {
      email: user.email,
    };
    
    const token = jwt.sign(newUsr, process.env.SECRET, { expiresIn: "1d" });
    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ msg: "Error while querying user" });
  }
};
exports.findUser = async (req, res) => {
  try {
    
    
   
    res.status(200).json({msg: "Te amo mi amor"});
  } catch (error) {
    res.status(500).json({ msg: "Error while querying user" });
  }
};
