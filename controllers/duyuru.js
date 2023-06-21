
const duyuru = require("../models/duyuru");


exports.getDuyurular = (req, res, next) => {
  duyuru.find().sort({ _id: -1 })
    .then((duyurular) => {
      res.render("index", {
        sayfaBasligi: "Duyuru Listesi",
        duyurular: duyurular,
        yol: "/"
      
      });
    })
    .catch((err) => {
      console.log(err);
    });
};



exports.getDuyuruEkle = (req, res, next) => {
  res.render("duyuru_ekle", {
    sayfaBasligi: "DUYURULAR",
    baslikGoster: 2,
    yol: "/duyuru_ekle"
  
  });
};


exports.postDuyuruEkle = (req, res, next) => {
  const duyuru_adi = req.body.duyuru_adi;
  const duyuru_gosterim = req.body.duyuru_gosterim;
  const duyuru_bitim = req.body.duyuru_bitim;
  const duyuru_icerik = req.body.duyuru_icerik;
 

  const duyurular = new duyuru({
    duyuru_adi: duyuru_adi,
    duyuru_gosterim: duyuru_gosterim,
    duyuru_bitim: duyuru_bitim,
    duyuru_icerik: duyuru_icerik,
    
  });
  duyurular
    .save()
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};



exports.postSilId = (req, res, next) => {
  const duyuruId = req.body.duyuruId;
  duyuru.findByIdAndRemove(duyuruId)
    .then((result) => {
      console.log("Duyuru Silindi");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};


/*





exports.getSablon = (req, res, next) => {
  const urunler = Urun.tumunuGetir();

  res.render("blank", {
    sayfaBasligi: "Boş Şablon",
    urunler: urunler,
    yol: "/blank",
    yonetici: false,
  });
};



*/