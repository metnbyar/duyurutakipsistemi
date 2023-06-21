const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir = require('../util/path');

const yetkiKontrol = require('../util/yetkikontrol');


const duyuruController=require('../controllers/duyuru');

router.get('/duyuru_ekle', yetkiKontrol, duyuruController.getDuyuruEkle);
router.post('/duyuru_ekle',yetkiKontrol, duyuruController.postDuyuruEkle);


//module.exports = router;
exports.routes=router;
//exports.urunler=urunler;