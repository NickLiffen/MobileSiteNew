function _(el) {
    return document.getElementById(el);
}

function pageSize() {
    console.log("Screen Width" + screen.width + ', ' + "Screen Height" + screen.height);
}



enableButton = function () {
    console.log("READYYYY");
    if (_('option').checked) {

        _('b1').disabled = '';

    } else {

        _('b1').disabled = 'true';

    }
}

function button() {
    console.log("hello");
    var option = _("option");
    if (option) {
        console.log(option);
        option.addEventListener("click", enableButton);
    }
}

buttonChangePage = function () {

    var url = "app.html";
    window.location.href = url;
}

function buttonClick() {
    var b1 = _("b1");
    if (b1) {
        b1.addEventListener("click", buttonChangePage);
    }
}

$(document).ready(function () {
    $('#mycheckboxYes').change(function () {
        $('#mycheckboxdivYes').toggle();
    });
    $('#mycheckboxNo').change(function () {
        $('#mycheckboxdivNo').toggle();
    });
    $('#secondCheckBox').change(function () {
        $('#mycheckboxdivYesOne').toggle();
    });
    $('#thirdCheckBox').change(function () {
        $('#foodDidntLookRespectable').toggle();
    });
    $('#foodCooked').change(function () {
        $('#foodCookedDisplay').toggle();
    });
    $('#foodUncooked').change(function () {
        $('#foodUncookedDisplay').toggle();
    });
    $('#addYes').change(function () {
        $('#addYesDisplay').toggle();
    });
    $('#addNo').change(function () {
        $('#addNoDisplay').toggle();
    });
    $('#mycheckboxYesFinal').change(function () {
        $('#mycheckboxdivYesFinal').toggle();
        $('#finalButton').toggle();
    });
    $('#mycheckboxNoFinal').change(function () {
        $('#finalButton').toggle();
    });

});



validate = function () {

    var errors = 0;
    var hello = document.getElementById('todayDate').value;

    if (hello === '') {
        _("todayDateValidate").innerHTML = "Please enter a date";
        console.log(hello);
        errors = errors + 1;
    }

    var helloNew = _('currentTime').value;

    if (helloNew === '') {
        _("todayTimeValidate").innerHTML = "Please enter a Time";
        console.log(helloNew);
        errors = errors + 1;

    }

    if (errors > 0) {
        return false;
    } else {
        nextPage();
    }

}

function nextPage() {

    var url = "appOne.html";
    window.location.href = url;

}

function proceed() {
    var procced = _("procced");
    if (procced) {
        procced.addEventListener("click", validate);
    }

}



function timerOneStart() {

    var startClockOneButton = document.getElementById("start-clock");
    if (startClockOneButton) {
        startClockOneButton.addEventListener("click", startClock);
    }
}

function timerOneStop() {

    var stopClockOneButton = document.getElementById("stop-clock");
    if (stopClockOneButton) {
        stopClockOneButton.addEventListener("click", stopClock);
    }
}


var clicked = false;
var sec = 0;

startClock = function () {

    document.getElementById("stop-clock").style.display = 'block';
    _('stop-clock').disabled = '';

    if (clicked === false) {
        clock = setInterval("stopWatch()", 1000);
        clicked = true;
    } else if (clicked === true) {}
}

function stopWatch() {
    sec++;
    document.getElementById("timer").innerHTML = sec;

}


stopClock = function () {

    document.getElementById("start-clock-one").style.display = 'block';
    _('start-clock-one').disabled = '';

    window.clearInterval(clock);
    sec = sec;
    document.getElementById("timer").innerHTML = sec;
    clicked = false;
}


function timerTwoStart() {

    var startClockTwoButton = document.getElementById("start-clock-one");
    if (startClockTwoButton) {
        startClockTwoButton.addEventListener("click", startClockOne);
    }
}

function timerTwoStop() {

    var stopClockTwoButton = document.getElementById("stop-clock-one");
    if (stopClockTwoButton) {
        stopClockTwoButton.addEventListener("click", stopClockOne);
    }
}

var clickedOne = false;
var secOne = 0;

startClockOne = function () {

    document.getElementById("stop-clock-one").style.display = 'block';
    _('stop-clock-one').disabled = '';

    if (clickedOne === false) {
        clockOne = setInterval("stopWatchOne()", 1000);
        clickedOne = true;
    } else if (clickedOne === true) {}
}

function stopWatchOne() {
    secOne++;
    document.getElementById("timer-one").innerHTML = secOne;
}

stopClockOne = function () {
    window.clearInterval(clockOne);
    secOne = secOne;
    document.getElementById("timer-one").innerHTML = secOne;
    clickedOne = false;
}



function appTwoButton(sec, secOne) {

    var secNew = sec;
    var secTwo = secOne;


    var loadNextPageAppTwo = _("loadNextPageAppTwo");


    if (loadNextPageAppTwo) {
        loadNextPageAppTwo.addEventListener("click", function (secNew, secTwo) {

            var timerOne = secNew;
            var timerTwo = secTwo;

            console.log(timerTwo);
            console.log(timerOne);

            if (timerOne && timerTwo > 0) {
                alert("YOU MUST ENTER DATA");
            } else {
                var url = "appTwo.html";
                window.location.href = url;
            }
        });

    }
}

function help() {

    var loadNextPageAppTwo = _("loadNextPageAppTwo");
    if (loadNextPageAppTwo) {
        loadNextPageAppTwo.addEventListener("click", helpTwo);
    }

}

helpTwo = function () {

    var url = "appTwo.html";
    window.location.href = url;

}

function appTwoButton() {

    var appTwoValidation = _("appTwoValidation");
    if (appTwoValidation) {
        appTwoValidation.addEventListener("click", appTwoValidate);
        console.log(appTwoValidation);
    }

}

appTwoValidate = function () {

    var errors = 0;

    var checkOne = _("mycheckboxYes").checked;
    var checkTwo = _("mycheckboxNo").checked;
    var firstCheckBox = _("didntLikeFood").value;


    if (checkOne || checkTwo == true) {

        console.log("yes1");
    } else {
        errors = errors + 1;
        _("firstCheckBoxValidate").innerHTML = "One of these must be checked";
    }


    if (checkTwo == true && firstCheckBox == "") {
        console.log(firstCheckBox);
        errors = errors + 1;
        _("firstCheckBoxValidate").innerHTML = "Please fill out the text box";

    }


    var checkThree = _("secondCheckBox").checked;
    var checkFour = _("thirdCheckBox").checked;
    var secondCheckBox = _("didntLikeFoodOne").value;


    if (checkThree || checkFour == true) {

        console.log("yes2");
    } else {
        errors = errors + 1;
        _("secondCheckBoxValidate").innerHTML = "One of these must be checked";
    }

    if (checkFour == true && secondCheckBox == "") {
        console.log(secondCheckBox);
        errors = errors + 1;
        _("secondCheckBoxValidate").innerHTML = "Please fill out the text box";

    }

    console.log(errors);

    var checkFive = _("foodCooked").checked;
    var checkSix = _("foodUncooked").checked;
    var thirdCheckBox = _("didntLikeFoodTwo").value;


    if (checkFive || checkSix == true) {

        console.log("yes3");
    } else {
        errors = errors + 1;
        _("thirdCheckBoxValidate").innerHTML = "One of these must be checked";
    }

    if (checkSix == true && thirdCheckBox == "") {
        console.log(thirdCheckBox);
        errors = errors + 1;
        _("thirdCheckBoxValidate").innerHTML = "Please fill out the text box";

    }

    var addYes = _("addYes").checked;
    var addYesText = _("didntLikeFoodThree").value;

    if (addYes == true && addYesText == "") {
        console.log(addYesText);
        errors = errors + 1;
        _("userInput").innerHTML = "Please fill out the text box";

    }


    if (errors > 0) {
        return false;
    } else {
        nextPageThree()
    }

}

function nextPageThree() {

    var url = "appThree.html";
    window.location.href = url;

}

function appThreeButton() {

    var appThreeValidation = _("appThreeValidation");
    if (appThreeValidation) {
        appThreeValidation.addEventListener("click", appThreeValidate);
    }

}

appThreeValidate = function () {

    var errors = 0;

    var checkOne = _("mycheckboxYes").checked;
    var checkTwo = _("mycheckboxNo").checked;
    var firstCheckBox = _("didntLikeFood").value;

    if (checkOne || checkTwo == true) {


    } else {
        errors = errors + 1;
        _("firstCheckBoxValidate").innerHTML = "One of these must be checked";
    }


    if (checkTwo == true && firstCheckBox == "") {
        console.log(firstCheckBox);
        errors = errors + 1;
        _("firstCheckBoxValidate").innerHTML = "Please fill out the text box";

    }



    var checkThree = _("secondCheckBox").checked;
    var checkFour = _("thirdCheckBox").checked;
    var secondCheckBox = _("didntLikeFoodOne").value;


    if (checkThree || checkFour == true) {


    } else {
        errors = errors + 1;
        _("secondCheckBoxValidate").innerHTML = "One of these must be checked";
    }

    if (checkFour == true && secondCheckBox == "") {
        console.log(secondCheckBox);
        errors = errors + 1;
        _("secondCheckBoxValidate").innerHTML = "Please fill out the text box";

    }


    var checkFive = _("foodCooked").checked;
    var checkSix = _("foodUncooked").checked;
    var thirdCheckBox = _("didntLikeFoodTwo").value;


    if (checkFive || checkSix == true) {


    } else {
        errors = errors + 1;
        _("thirdCheckBoxValidate").innerHTML = "One of these must be checked";
    }

    if (checkSix == true && thirdCheckBox == "") {
        console.log(thirdCheckBox);
        errors = errors + 1;
        _("thirdCheckBoxValidate").innerHTML = "Please fill out the text box";

    }

    var addYes = _("addYes").checked;
    var addYesText = _("didntLikeFoodThree").value;

    if (addYes == true && addYesText == "") {
        console.log(addYesText);
        errors = errors + 1;
        _("userInput").innerHTML = "Please fill out the text box";

    }


    if (errors > 0) {
        return false;
    } else {
        nextPageFour()
    }

}

function nextPageFour() {

    var url = "appFour.html";
    window.location.href = url;

}

function appFourButton() {

    var appFour = _("appFourValidation");

    if (appFour) {

        appFour.addEventListener("click", appFourValidationButton);
    }

}

//This validates the STAR Rating.

appFourValidationButton = function () {

    var starOne = _("star1").checked;
    var starTwo = _("star2").checked;
    var starThree = _("star3").checked;
    var starFour = _("star4").checked;
    var starFive = _("star5").checked;

    console.log(starOne);
    console.log(starTwo);
    console.log(starThree);
    console.log(starFour);
    console.log(starFive);
    var errors = 0;

    if (starOne || starTwo || starThree || starFour || starFive == true) {
        console.log("First one true");

    } else {
        _("starOneValidate").innerHTML = "Please press a star";
        errors = errors + 1;
    }

    var starOneNext = _("star1One").checked;
    var starTwoNext = _("star2One").checked;
    var starThreeNext = _("star3One").checked;
    var starFourNext = _("star4One").checked;
    var starFiveNext = _("star5One").checked;

    if (starOneNext || starTwoNext || starThreeNext || starFourNext || starFiveNext == true) {
        console.log("Second one True");

    } else {
        _("starTwoValidate").innerHTML = "Please press a star";
        errors = errors + 1;
    }

    var starOneStar = _("star1Two").checked;
    var starTwoStar = _("star2Two").checked;
    var starThreeStar = _("star3Two").checked;
    var starFourStar = _("star4Two").checked;
    var starFiveStar = _("star5Two").checked;

    if (starOneStar || starTwoStar || starThreeStar || starFourStar || starFiveStar == true) {
        console.log("Third one True");

    } else {
        _("starThreeValidate").innerHTML = "Please press a star";
        errors = errors + 1;
    }

    if (errors > 0) {

        return false;

    } else {
        nextPageFive()

    }
}

function nextPageFive() {

    var url = "appFive.html";
    window.location.href = url;

}

function appFiveButton() {

    var appFiveValidation = _("appFiveValidation");
    if (appFiveValidation) {
        appFiveValidation.addEventListener("click", appFiveValidate);
    }

}


appFiveValidate = function () {


    var mycheckboxYes = _("mycheckboxYesFinal");
    var mycheckboxNo = _("mycheckboxNoFinal");
    errors = 0;

    if (mycheckboxYes && mycheckboxNo == false) {
        _("checkBoxFive").innerHTML = "Please check one";
        errors = errors + 1;
    }

    if (errors > 0) {
        return false;
    } else {
        var url = "finished.html";
        window.location.href = url;
    }

}

function homePage() {

    var homePage = _("homePage");
    if (homePage) {
        homePage.addEventListener("click", function () {

            var url = "index.html";
            window.location.href = url;

        });
    }

}

pageLoaded = function () {
    pageSize();
    appTwoButton();
    appThreeButton();
    button();
    buttonClick();
    proceed();
    timerOneStart();
    timerOneStop();
    timerTwoStart();
    timerTwoStop();
    help();
    appFourButton();
    appFiveButton();
    homePage();

}


window.addEventListener("load", pageLoaded);