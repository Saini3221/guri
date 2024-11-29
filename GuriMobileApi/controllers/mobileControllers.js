
const Mobile = require("../model/mobileModel")

const getAllMobile = async (req, res) => {
    let mobileData = await Mobile.find()
    res.send(mobileData);

}


const getSingleMobile = async (req, res) => {
    let id = req.headers.id;
    // console.log(id)
    let mobileData = await Mobile.findById(id)
    res.send(mobileData)

}

const createMobile = async (req, res) => {
    try {
        let data = req.body;

        // Validate if price is a number
        if (isNaN(data.price)) {
            return res.status(400).send({ message: "Please enter a valid price." });
        }

        let newPhone = await new Mobile(data).save();
        res.send(newPhone);
    } catch (error) {
        res.status(500).send({ message: "An error occurred", error });
    }
};

const upDateMobile = async (req,res)=> {
    let id = req.headers.id;
    let data =req.body;
    let mobileData = await Mobile.findByIdAndUpdate(id,data)
    res.send(mobileData)
}

module.exports = { getAllMobile, createMobile, getSingleMobile, upDateMobile }