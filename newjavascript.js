/* This page creates all javascript for my mobile site. I have realised that the
variables I have assinged everything are really poor and do not make sense to
someone who would be looking to understand my code. I am looking to improve this
when I get time!*/


//Function used that saves me writing getElementById all the time
function _(el) {
    return document.getElementById(el);
}

//Function that prints out the screen size (Testing & Protoyping)
function pageSize() {
    console.log("Screen Width" + screen.width + ', ' + "Screen Height" + screen.height);
}


//Function that enables and button when a checkbox is checked
enableButton = function () {
    if (_('option').checked) {

        _('b1').disabled = '';

    } else {

        _('b1').disabled = 'true';

    }
}

//Starts an EventListener to a button
function button() {
    var option = _("option");
    if (option) {
        option.addEventListener("click", enableButton);
    }
}

//Function that states the next page location
buttonChangePage = function () {

    var url = "app.html";
    window.location.href = url;
}

//Starts an EventListener to a button
function buttonClick() {
    var b1 = _("b1");
    if (b1) {
        b1.addEventListener("click", buttonChangePage);
    }
}

//JQUERY - Only used to toggle text boxex whn theres a change on a checkbox
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


//Validation for todays time and date and prints out error messages
validate = function () {

    var errors = 0;
    var hello = document.getElementById('todayDate').value;

    if (hello === '') {
        _("todayDateValidate").innerHTML = "Please enter a date";
        errors = errors + 1;
    }

    var helloNew = _('currentTime').value;

    if (helloNew === '') {
        _("todayTimeValidate").innerHTML = "Please enter a Time";
        errors = errors + 1;

    }

    if (errors > 0) {
        return false;
    } else {
        nextPage();
    }

}

//Function that creates the next page
function nextPage() {

    var url = "appOne.html";
    window.location.href = url;

}

//Function that adds an event listner for validation
function proceed() {
    var procced = _("procced");
    if (procced) {
        procced.addEventListener("click", validate);
    }

}


//Starts the timer for the cue - EVENT LISTENER
function timerOneStart() {

    var startClockOneButton = document.getElementById("start-clock");
    if (startClockOneButton) {
        startClockOneButton.addEventListener("click", startClock);
    }
}

//Stops te timer for the cue - EVENT LISTENER
function timerOneStop() {

    var stopClockOneButton = document.getElementById("stop-clock");
    if (stopClockOneButton) {
        stopClockOneButton.addEventListener("click", stopClock);
    }
}

//Initlising two variables for the timer
var clicked = false;
var sec = 0;

//Function that actually creates the start clock feature for cue
startClock = function () {

    document.getElementById("stop-clock").style.display = 'block';
    _('stop-clock').disabled = '';

    if (clicked === false) {
        clock = setInterval("stopWatch()", 1000);
        clicked = true;
    } else if (clicked === true) {}
}

//Increments the time on the stop watch
function stopWatch() {
    sec++;
    document.getElementById("timer").innerHTML = sec;

}

//Funcion that stops the clock for the first timer
stopClock = function () {

    document.getElementById("start-clock-one").style.display = 'block';
    _('start-clock-one').disabled = '';

    window.clearInterval(clock);
    sec = sec;
    document.getElementById("timer").innerHTML = sec;
    clicked = false;
}

//Event Listener for second timer
function timerTwoStart() {

    var startClockTwoButton = document.getElementById("start-clock-one");
    if (startClockTwoButton) {
        startClockTwoButton.addEventListener("click", startClockOne);
    }
}

//Event listener for second timer
function timerTwoStop() {

    var stopClockTwoButton = document.getElementById("stop-clock-one");
    if (stopClockTwoButton) {
        stopClockTwoButton.addEventListener("click", stopClockOne);
    }
}

//Initilising another two variables but this one is for the second timer
var clickedOne = false;
var secOne = 0;

//Starts the second timer
startClockOne = function () {

    document.getElementById("stop-clock-one").style.display = 'block';
    _('stop-clock-one').disabled = '';

    if (clickedOne === false) {
        clockOne = setInterval("stopWatchOne()", 1000);
        clickedOne = true;
    } else if (clickedOne === true) {}
}

//Increments the timer
function stopWatchOne() {
    secOne++;
    document.getElementById("timer-one").innerHTML = secOne;
}

//Stops timer two
stopClockOne = function () {
    window.clearInterval(clockOne);
    secOne = secOne;
    document.getElementById("timer-one").innerHTML = secOne;
    clickedOne = false;
}


/*THIS DOESN'T WORK - I want this to validate the timer. I want it to check is
the numbers created by the timer are greater then 0. (This function isn't
called.)*/
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


//Event listner for a button.
function help() {

    var loadNextPageAppTwo = _("loadNextPageAppTwo");
    if (loadNextPageAppTwo) {
        loadNextPageAppTwo.addEventListener("click", helpTwo);
    }

}

//Fires it off to another page.
helpTwo = function () {

    var url = "appTwo.html";
    window.location.href = url;

}

//Another event listner but this one is for app Two
function appTwoButton() {

    var appTwoValidation = _("appTwoValidation");
    if (appTwoValidation) {
        appTwoValidation.addEventListener("click", appTwoValidate);
    }

}

/*This validates everything on app Two. Quite a long function - maybe should
break it down */
appTwoValidate = function () {

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
        errors = errors + 1;
        _("thirdCheckBoxValidate").innerHTML = "Please fill out the text box";

    }

    var addYes = _("addYes").checked;
    var addYesText = _("didntLikeFoodThree").value;

    if (addYes == true && addYesText == "") {
        errors = errors + 1;
        _("userInput").innerHTML = "Please fill out the text box";

    }


    if (errors > 0) {
        return false;
    } else {
        nextPageThree()
    }

}

//Another function that fires off to appThree when the page is validated
function nextPageThree() {

    var url = "appThree.html";
    window.location.href = url;

}

//Event listener for the button on app Three
function appThreeButton() {

    var appThreeValidation = _("appThreeValidation");
    if (appThreeValidation) {
        appThreeValidation.addEventListener("click", appThreeValidate);
    }

}

//App Three validation
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
        errors = errors + 1;
        _("thirdCheckBoxValidate").innerHTML = "Please fill out the text box";

    }

    var addYes = _("addYes").checked;
    var addYesText = _("didntLikeFoodThree").value;

    if (addYes == true && addYesText == "") {
        errors = errors + 1;
        _("userInput").innerHTML = "Please fill out the text box";

    }


    if (errors > 0) {
        return false;
    } else {
        nextPageFour()
    }

}

//This function gets called when appThree is finished validating
function nextPageFour() {

    var url = "appFour.html";
    window.location.href = url;

}

//Event Listener to start validation on App Four. When the GO button is pressed
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

    var errors = 0;

    if (starOne || starTwo || starThree || starFour || starFive == true) {

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

//Function that fires the page off to App Five is everything is validated
function nextPageFive() {

    var url = "appFive.html";
    window.location.href = url;

}

//Function for the event listener for the button on App Five
function appFiveButton() {

    var appFiveValidation = _("appFiveValidation");
    if (appFiveValidation) {
        appFiveValidation.addEventListener("click", appFiveValidate);
    }

}

//Short and simple validation for App Five
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
//Event listener for Home Page
function homePage() {

    var homePage = _("homePage");
    if (homePage) {
        homePage.addEventListener("click", function () {

            var url = "index.html";
            window.location.href = url;

        });
    }

}

/* This is a useful function becuase it means that I can just start all my on
 load functions in one place rather then doing it all over the page. Makes it
 easier to read as well*/
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

//This is the main event lisetner that starts everything.
window.addEventListener("load", pageLoaded);
