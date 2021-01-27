const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet Name required."],
        minlenght: [3, "Title must be at least 2 characters long."]
    },

    type: {
        type: String,
        required: [true, "Pet Type required."],
        minlenght: [3, "Price must be at least 3 characters long."]
    },

    description: {
        type: String,
        required: [true, "Pet Description required."],
        minlength: [3, "Description must be at least 3 characters long."]
    },

    firstSkill: {
        type: String,
    },

    secondSkill: {
        type: String,
    },

    thirdSkill: {
        type: String,
    }
})

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;