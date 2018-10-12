const mongoose = require('mongoose');
const { Schema } = mongoose;

const ownerSchema = new Schema({
    hoursPerShare: "",
    owner: {
        type: String,
        required: true
    },
    phone: "",
    email: "",
    parcel: "",
    area: "",
    shareType: "",
    shares: "",
    used: "",
    remaining: ""
});

const ownerModel = mongoose.model("Owner", ownerSchema);
module.exports = ownerModel;