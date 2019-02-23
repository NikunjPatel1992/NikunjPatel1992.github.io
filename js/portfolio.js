
var config = {
    apiKey: "AIzaSyB9HkbhGjc_PvxMR87hi3G1ttTjCpFaWpg",
    authDomain: "portfolio-70131.firebaseapp.com",
    databaseURL: "https://portfolio-70131.firebaseio.com",
    projectId: "portfolio-70131",
    storageBucket: "portfolio-70131.appspot.com",
    messagingSenderId: "543105879391"
};
firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var email = "";
var message = "";
var subject = "";
var adddata = "";


$(".submit").on("click", function (e) {
    e.preventDefault();

    name = $("#name").val();
    email = $("#email").val();
    message = $("#message").val();
    subject = $("#subject").val();

    if (name == "" || email == "" || message == "" || subject == "") {
        alert("Enter Data");
    } else if (name != "" || email != "" || message != "" || subject != "") {
        alert("Data Send Successfully");
        database.ref().push({
            Name: name,
            Email: email,
            Message: message,
            Subject: subject
        });
    }
    window.location.reload();
    $("#name").empty();
    $("#email").empty();
    $("#subject").empty();
    $("#message").empty();
});

// scroll down animation code
window.sr = ScrollReveal();
    sr.reveal('.navbar', {
      duration: 2000,
      origin: 'bottom'
    });
    sr.reveal('.showcase-left', {
      duration: 3000,
      origin: 'left',
      distance: '300px'
    });
    sr.reveal('.showcase-right', {
      duration: 3000,
      origin: 'right',
      distance: '300px'
    });
    sr.reveal('.showcase-center', {
      duration: 2000,
      delay: 1000,
      origin: 'bottom'
    });
    sr.reveal('.showcase-top', {
      duration: 2000,
      origin: 'top',
      distance: '300px'
    });
    sr.reveal('.showcase-main', {
      duration: 2000,
      origin: 'top',
      distance: '150px'
    });
    sr.reveal('.info-right', {
        duration: 2000,
        origin:'right',
        distance:'300px',
        viewFactor: 0.2
      });
      sr.reveal('.info-left', {
        duration: 2000,
        origin:'left',
        distance:'300px',
        viewFactor: 0.2
      });

// database.ref().on("child_added", function (snapshot) {
//     var sp = snapshot.val();

//     console.log(sp.Name);
//     console.log(sp.Email);
//     console.log(sp.Message);

// });
