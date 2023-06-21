const express = require('express');
const path=require('path');

const router=express.Router();

const rootDir=require('../util/path');
const yoneticiVerisi = require('./yonetici');

const duyuruController=require('../controllers/duyuru');
const yetkiKontrol = require('../util/yetkikontrol');

router.get('/', duyuruController.getDuyurular);
//router.get('/blank', urunController.getSablon);
router.post('/duyuru-sil',yetkiKontrol, duyuruController.postSilId);
//router.get('/urun-detay/:urunId', urunController.getUrun);


module.exports=router;