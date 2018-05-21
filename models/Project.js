const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({

    name: {type: String, required: true},

    generator: {
      output: {
        type: String,
        required: true
      },
      capacity: {
        type: Number,
        required: true
      }
    },

    loads: [
      {
        name: {
          type: String,
          required: true
        },
        current: {
          type: Number,
          required: true
        },
        voltage: {
          type: Number,
          required: true
        },
        connections: [{
          type: String,
          required: true
        }]
      }
    ]

});

const Project = mongoose.model("Project", projectSchema);
  
module.exports = Project;
