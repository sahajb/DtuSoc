function menu() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
        x.classList.toggle("change");
        document.getElementById("web").id = "webout";
        opennav();
    }
    else {
        x.classList.toggle("change");
        document.getElementById("webout").id = "web";
        closenav();
    }
}

function opennav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closenav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

window.onscroll = function () {
    scroll()
};

function scroll() {
    var x = document.body.scrollTop;
    var y = document.documentElement.scrollTop;
    if (x > 200 || y > 200) {
        document.getElementById("topbtn").style.opacity = "1";
    } else {
        document.getElementById("topbtn").style.opacity = "0";
    }
    if (y > 2200) {
        document.getElementById("1").style.marginLeft = "2%";
        document.getElementById("1").style.opacity = "1";
        document.getElementById("2").style.marginLeft = "2%";
        document.getElementById("2").style.opacity = "1";
    }
    else if (y < 1800) {
        document.getElementById("1").style.marginLeft = "0";
        document.getElementById("1").style.opacity = "0";
        document.getElementById("2").style.marginLeft = "6%";
        document.getElementById("2").style.opacity = "0";
    }
    if (y > 2900) {
        document.getElementById("3").style.marginTop = "0";
        document.getElementById("3").style.opacity = "1";
    }
    else if (y < 2500) {
        document.getElementById("3").style.marginTop = "30px";
        document.getElementById("3").style.opacity = "0";
    }
    if (y > 3350) {
        document.getElementById("4").style.marginLeft = "2%";
        document.getElementById("4").style.opacity = "1";
        document.getElementById("5").style.marginLeft = "2%";
        document.getElementById("5").style.opacity = "1";
    }
    else if (y < 2950) {
        document.getElementById("4").style.marginLeft = "0";
        document.getElementById("4").style.opacity = "0";
        document.getElementById("5").style.marginLeft = "6%";
        document.getElementById("5").style.opacity = "0";
    }
    if (y > 4000) {
        document.getElementById("6").style.marginTop = "0";
        document.getElementById("6").style.opacity = "1";
    }
    else if (y < 3600) {
        document.getElementById("6").style.marginTop = "30px";
        document.getElementById("6").style.opacity = "0";
    }
    if (y > 4450) {
        document.getElementById("7").style.marginLeft = "2%";
        document.getElementById("7").style.opacity = "1";
        document.getElementById("8").style.marginLeft = "2%";
        document.getElementById("8").style.opacity = "1";
    }
    else if (y < 4050) {
        document.getElementById("7").style.marginLeft = "0";
        document.getElementById("7").style.opacity = "0";
        document.getElementById("8").style.marginLeft = "6%";
        document.getElementById("8").style.opacity = "0";
    }
}

function topbtn() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
        $('body,html').animate({scrollTop: 0}, 500);
}