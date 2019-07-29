let express = require('express');
let server = express();
let cores = require("cors");
let bodyparser = require("body-parser");
var User = require('./models/signupSceema');
var Consult = require('./models/consultinfSceema');

var Usercatigories = require('./models/catigoriesSceema')
let UserForgot = require('./models/forgotSceema');
let config = require('./db/configuser');
let cookiesparser = require('cookie-parser');
let session = require('express-session');
var bcrypt = require('bcrypt-nodejs');
var nodemailer = require('nodemailer');
var async = require('async');
var crypto = require('crypto');
var flash = require('express-flash');
server.use(flash());
var upload = require('./db/multerImage');
var path = require('path');
let LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var xoauth2 = require('xoauth2');
var socket = require("socket.io");









// MiddleWare
server.use(cores());
server.use(cores({credentials: true, origin: 'http://localhost:3000'}));

server.use(bodyparser.urlencoded({ extended: true }))
server.use(bodyparser.json())
server.use(cookiesparser());
server.use(session({ secret: '1212' }))
server.use(passport.initialize());
server.use(passport.session());

// server.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Credentials", true);
//   next();
// });

//Facebook Autantication
passport.use(new FacebookStrategy({
  clientID: 287813738753976,
  clientSecret: 'ce6f7f5dcbd8b59074b1af454b788180',
  callbackURL: "http://localhost:8000/auth/facebook/callback"
},
  function (accessToken, refreshToken, profile, done) {
    // User.findOrCreate(..., function(err, user) {
    //   if (err) { return done(err); }
    //   done(null, user);
    // });
  }
));

// Facebook Routes
server.get('/auth/facebook',
  passport.authenticate('facebook'));

// server.get('/auth/facebook/callback',
//   passport.authenticate('facebook', {
//     successRedirect: '/dashboard',
//     failureRedirect: '/'
//   }))

// Chat apps

// var app = require('http').createServer(server);

















passport.use(new LocalStrategy((username, password, next) => {

  User.findOne({ email: username }, (err, user) => {

    if (err) { return next(err) }
    if (!user) { return next(null, false) }
    user.verifyPassword(password, (err, isValid) => {
      if (err) { return next(err) }
      if (!isValid) { return next(null, false) }
      next(null, user)

    })

  })
}));

passport.serializeUser((user, next) => {
  next(null, user.id)

});
passport.deserializeUser((id, next) => {
  var user = user.find((user) => {
    return user.id === id;
  })
  next(null, user);
})





//Sign up Root
server.post("/sign_up_user", (req, res) => {

  let myuser = new User({ email: req.body.email, password: req.body.password, name: req.body.name, fathername: req.body.fathername, typeselected: req.body.typeselected });

  myuser.save((err, user) => {
    if (err) {
      return res.json({ success: false, err: err })
    }
    res.json({ success: true, data: user })
  });

})
//consultingfORM

server.post("/consultingservices", (req, res) => {

  let myusercontect = new Consult({ email: req.body.email, companyname: req.body.companyname, address: req.body.address, phone: req.body.phone, provinciesName: req.body.provinciesName, zipcode: req.body.zipcode });

  function main() {
    var smtpTransport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "madenpakistan31@gmail.com",
        pass: "madeinpakistan"
      }
    });

    var mailOptions = {
      // html: '<img width="28px" src="cid:image5@johnson.com" alt="my.jpg"/>',
      //     files: [
      //       {
      //         filename : 'https://yourdomain.com/img/logo.png ',
      //         path: 'https://yourdomain.com/img/logo.png ',
      //         cid : 'image5@johnson.com'
      //       }
      //     ],
      to: req.body.email,
      from: 'madenpakistan31@gmail.com',
      subject: 'Made in Pakistan ( Consulting   Services) ',
      text: 'Our management consulting services focus on our clients most critical issues and opportunities: strategy, marketing, organization, operations, technology, transformation, digital, advanced analytics, corporate finance, mergers & acquisitions and sustainability across all industries and geographies. We bring deep, functional expertise, but are known for our holistic perspective: we capture value across boundaries and between the silos of any organization. We have proven a multiplier effect from optimizing the sum of the parts, not just the individual pieces.\n\n' +
        'Please click on the following link, Advanced Analytics\n\n' + 'Corporate Finance\n\n' +
        'An integrated approach linking acquisition strategy, due diligence and merger integration\n\n' +

        ' For more Detail Contect our Team  \n\n' +
        'Phone No# +923498785754 woking Time (8AM TO 9PM)'
    };
    smtpTransport.sendMail(mailOptions, function (err) {
      res.json('Your e-mail Successfully  has been  sent to ' + userForgot.email + '');
      done(err, 'done');
    });
  }

  myusercontect.save((err, user) => {
    if (err) {
      return res.json({ success: false, err: err })
    }
    res.json({ success: true, data: user })
  });
  main()

})
//allow user
server.post("/allowuser", (req, res) => {
var email= req.body.email
var companyname = req.body.companyname;
 

  function main() {
    var smtpTransport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "madenpakistan31@gmail.com",
        pass: "madeinpakistan"
      }
    });

    var mailOptions = {
      // html: '<img width="28px" src="cid:image5@johnson.com" alt="my.jpg"/>',
      //     files: [
      //       {
      //         filename : 'https://yourdomain.com/img/logo.png ',
      //         path: 'https://yourdomain.com/img/logo.png ',
      //         cid : 'image5@johnson.com'
      //       }
      //     ],
      to: req.body.email,
      from: 'madenpakistan31@gmail.com',
      subject: 'Made in Pakistan ( Notification) ',
      text: ' Congratulations!  ' + companyname+' \n\n ourmanagement consulting services focus on our clients most critical issues and opportunities: strategy, marketing, organization, operations, technology, transformation, digital, advanced analytics, corporate finance, mergers & acquisitions and sustainability across all industries and geographies. We bring deep, functional expertise, but are known for our holistic perspective: we capture value across boundaries and between the silos of any organization. We have proven a multiplier effect from optimizing the sum of the parts, not just the individual pieces.\n\n' +
        'Please click on the following link, Advanced Analytics\n\n' + 'Corporate Finance\n\n' +
        'An integrated approach linking acquisition strategy, due diligence and merger integration\n\n' +
        'http://localhost:3000/Publishproduct'+
        ' For more Detail Contect our Team  \n\n' +
        'Phone No# +923498785754 woking Time (8AM TO 9PM)'
    };
    smtpTransport.sendMail(mailOptions, function (err) {
      res.json({ success: true, data: companyname })
      done(err, 'done');
    });
  }

  // myusercontect.save((err, user) => {
  //   if (err) {
  //     return res.json({ success: false, err: err })
  //   }
  //   res.json({ success: true, data: user })
  // });
  main()

})
//Allow

//notallow
server.post("/notallowuser", (req, res) => {
  var email= req.body.email;
  var reason= req.body.reason;
   
  
    function main() {
      var smtpTransport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "madenpakistan31@gmail.com",
          pass: "madeinpakistan"
        }
      });
  
      var mailOptions = {
        // html: '<img width="28px" src="cid:image5@johnson.com" alt="my.jpg"/>',
        //     files: [
        //       {
        //         filename : 'https://yourdomain.com/img/logo.png ',
        //         path: 'https://yourdomain.com/img/logo.png ',
        //         cid : 'image5@johnson.com'
        //       }
        //     ],
        to: req.body.email,
        from: 'madenpakistan31@gmail.com',
        subject: 'Made in Pakistan ( Notification ) ',
        text: ' Hi ,\n\n Our management consulting services focus on our clients most critical issues and opportunities: strategy, marketing, organization, operations, technology, transformation, digital, advanced analytics, corporate finance, mergers & acquisitions and sustainability across all industries and geographies. We bring deep, functional expertise, but are known for our holistic perspective: we capture value across boundaries and between the silos of any\n\n organization. We have proven a multiplier effect from optimizing the sum of the parts, not just the individual pieces.\n\n' +
                 ' sorry You are not unable to publish your Project  please send your proper information\n\n'+
                  '<h4>Why you are not able to publish your product</h4>\n\n'+
                  'For more Information please visit this Link http://localhost:3000/\n\n'+
                   
                  
             req.body.reason
              +'\n\n Thanks'
        
      };
      smtpTransport.sendMail(mailOptions, function (err) {
        res.json('Your e-mail Successfully  has been  sent to ');
        done(err, 'done');
      });
    }
  
    // myusercontect.save((err, user) => {
    //   if (err) {
    //     return res.json({ success: false, err: err })
    //   }
    //   res.json({ success: true, data: user })
    // });
    main()
  
  })
//login Root
server.post("/loginUer", (req, res, next) => {


  passport.authenticate('local', function (err, user) {

    if (user) {

      req.login(user, function () {
        res.json(user)
      });

    } else {
      res.json(null);
    }

  })(req, next);

})
//catigorious 


// server.use(upload.single('photo'));
server.post("/catgories", upload.array('photos', 8), (req, res, next) => {



  let myusernew = new Usercatigories({ ProductName: req.body.ProductName, Email: req.body.Email, CompanyName: req.body.CompanyName, phone: req.body.phone, typeselected: req.body.typeselected, MinBox: req.body.MinBox, Minpieces: req.body.Minpieces, Price: req.body.Price, photoname: req.files.map((picname) => { return picname.filename }), CountryName: req.body.CountryName, CityName: req.body.CityName, FullAddress: req.body.FullAddress, ProductionCapacity: req.body.ProductionCapacity, Material: req.body.Material, Type: req.body.Type, Datee: req.body.Datee, Description: req.body.Description, userId: req.body.userId });

  myusernew.save((err, user) => {
    if (err) {
      return res.json({ success: false, err: err })
    }

    res.json({ success: true, data: user })
  });

})

server.use(express.static('./uploads'));
//show Catigorious
server.get("/CatigorieShow", (req, res) => {
  let showuser = new Usercatigories();
  Usercatigories.find({}, (err, userget) => {
    if (err) {
      return res.json({ success: false, err: err })
    }

    res.json({ success: true, data: userget })
  })


})
// Consulting Services
server.get("/ConsultServices", (req, res) => {

  Consult.find({}, (err, userget) => {
    if (err) {
      return res.json({ success: false, err: err })
    }

    res.json({ success: true, data: userget })
  })


})

//SHow AgricultureCatigories
server.get("/agricultureandFoodshow", (req, res) => {
  let showuser = new Usercatigories();
  Usercatigories.find({ typeselected: "Agriculture & Food" }, (err, userget) => {
    if (err) {
      return res.json({ success: false, err: err })
    }

    res.json({ success: true, data: userget })
  })


})


//Search Catigories 
server.post("/searchdata", (req, res) => {
  let searchdata = req.body.searchCatigoires
  let price = req.body.price;

  Usercatigories.find({ ProductName: searchdata }, (err, searchdata) => {
    if (err) {
      return res.json({ success: false, err: err })
    }

    res.json({ success: true, data: searchdata })
  })

})
//Search Textile&Fabrics
server.get("/TextileFabrics", (req, res) => {

  Usercatigories.find({ typeselected: "TextileFabrics" }, (err, TextileFabrics) => {
    if (err) {
      return res.json({ success: false, err: err })
    }

    res.json({ success: true, data: TextileFabrics })
  })

})
//serachTea
server.get("/Tea", (req, res) => {

  Usercatigories.find({ typeselected: "Tea" }, (err, Tea) => {
    if (err) {
      return res.json({ success: false, err: err })
    }

    res.json({ success: true, data: Tea })
  })

})
//serachFruit
server.get("/showFruits", (req, res) => {

  Usercatigories.find({ typeselected: "Fruits" }, (err, fruits) => {
    if (err) {
      return res.json({ success: false, err: err })
    }

    res.json({ success: true, data: fruits })
  })

})
//DetailRouter
server.get("/detailrouter/:myid", (req, res) => {
  let showuser = new Usercatigories();
  Usercatigories.findById({ _id: req.params.myid }, (err, userget) => {
    if (err) {
      return res.json({ success: false, err: err })
    }

    res.json({ success: true, data: userget })

  })

})
//logout post
server.get('/logout', function (req, res) {
  req.logout();
  res.json({ success: true })

});

// Forgot   Post 
server.post('/forgot', function (req, res, next) {
  async.waterfall([
    function (done) {
      crypto.randomBytes(20, function (err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function (token, done) {
      var userForgot = new UserForgot();

      userForgot.resetPasswordToken = token;
      userForgot.resetPasswordExpires = Date.now() + 3600000;
      userForgot.email = req.body.email;

      userForgot.save(function (err) {
        done(err, token, userForgot);
      });

    },
    function (token, userForgot, done) {
      var smtpTransport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "madenpakistan31@gmail.com",
          pass: "madeinpakistan"
        }
      });

      var mailOptions = {
        to: userForgot.email,
        from: 'madenpakistan31@gmail.com',
        subject: 'Made in Pakistan (Account)',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://localhost:3000/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function (err) {
        res.json('Your e-mail Successfully  has been  sent to ' + userForgot.email + '');
        done(err, 'done');
      });
    }
  ], function (err) {
    if (err) return next(err);
    res.redirect('/forgot');
  });
});



//ResET  Password
server.post('/resetpassword/:token', function (req, res) {

  UserForgot.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function (err, user) {
    if (user) {
      var password = req.body.password
      bcrypt.hash(password, null, null, function (err, hash) {
        req.body.password = hash



        User.findOneAndUpdate({ email: user.email }, req.body, function (err, user) {

          if (user) {

            res.json(user);

          }
          else {
            res.json(err)
          }

        })

      });
    }

  });
});


// server.use(express.static('./build'))





let app = server.listen(8000, () => console.log("server is Running"));

var io = require('socket.io').listen(app);


io.on("connection", socket => {
  console.log("a user connected", socket.id);
  socket.on("chat", data => {
    io.sockets.emit("chat", data);
  });
  socket.on("typing", data => {
    socket.broadcast.emit("typing", data);
  });
  // socket.on("disconnect", () => {
  //   console.log("user disconnected", socket.id);
  // });
});