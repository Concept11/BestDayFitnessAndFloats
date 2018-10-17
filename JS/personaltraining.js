function blurFloatTherapy() {
    var elms = document.getElementsByClassName("floatTherapyBlur");

    for (var i = 0; i < elms.length; i++)
        elms[i].style.WebkitAnimation = "blur 1s";

    for (var i = 0; i < elms.length; i++)
        elms[i].style.WebkitAnimationFillMode = "forwards";
}

function unblurFloatTherapy() {
    var elms = document.getElementsByClassName("floatTherapyBlur");

    for (var i = 0; i < elms.length; i++)
        elms[i].style.WebkitAnimation = "unblur 1s";

    for (var i = 0; i < elms.length; i++)
        elms[i].style.WebkitAnimationFillMode = "forwards";
}

function blurPersonalTraining() {
    var elms = document.getElementsByClassName("personalTrainingBlur");

    for (var i = 0; i < elms.length; i++)
        elms[i].style.WebkitAnimation = "blur 1s";

    for (var i = 0; i < elms.length; i++)
        elms[i].style.WebkitAnimationFillMode = "forwards";
}

function unblurPersonalTraining() {
    var elms = document.getElementsByClassName("personalTrainingBlur");

    for (var i = 0; i < elms.length; i++)
        elms[i].style.WebkitAnimation = "unblur 1s";

    for (var i = 0; i < elms.length; i++)
        elms[i].style.WebkitAnimationFillMode = "forwards";
}