const http=require('http');
const express =require('express');
const bodyParser = require("body-parser");
const path = require("path");
const rootDir = require("./util/path");
const session=require("express-session");
const MongoDBStore=require("connect-mongodb-session")(session);
const csurf=require('csurf');

const bcrypt = require('bcryptjs');

const csurfKoruma=csurf();
const MONGODB_URI="mongodb+srv://metinbyr:fsaa5410yy@cluster0.gyxoile.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose");

const app =express();
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection:'sessions'
    });
  


app.set("view engine", "ejs");
app.set("views", "views");
    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, "public")));

app.use(session({secret:'gizli sifrem', resave:false, saveUnitialized:false, store:store}));



app.use(csurfKoruma);

app.use((req,res,next) => {
  res.locals.yonetici=req.session.oturum_acildi;
  res.locals.csrfToken=req.csrfToken();
  next();
})
const hataController=require("./controllers/hata");
const yetkiRoutes = require("./routes/yetki"); 
const publicRoutes = require("./routes/public"); 
const yoneticiVerisi = require("./routes/yonetici");

app.use(publicRoutes);
app.use(yetkiRoutes);
app.use(yoneticiVerisi.routes);
app.use(hataController.getHata404);





mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(process.env.PORT || 3000);
  })
  .catch((err) => {
    console.log(err);
  });







