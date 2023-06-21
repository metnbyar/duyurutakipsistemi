const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const duyuruSchema = new Schema({
  duyuru_adi: {
    type: String,
    required: true,
  },
  duyuru_gosterim: {
    type: Date,
    required: true,
  },
  duyuru_bitim: {
    type: Date,
    required: true,
  },
  duyuru_icerik: {
    type: String,
    required: true,
  },
  
});

module.exports=mongoose.model('Duyuru', duyuruSchema);