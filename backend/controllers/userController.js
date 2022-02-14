import user from "../models/user.js";

const registerUser = async (req, res) => {
    if(!req.body.name || !req.body.password || !req.body.email || !req.body.phone || !req.body.address)
    return res.status(400).send({ message: "Imcomplete"});

    let schema = new user({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        dbStatus: true,
    });

    let result = await schema.save();
    if(!result)
    return res.status(500).send({ message: "Failed to register user"});
     res.status(200).send({ result});

};

export default { registerUser };