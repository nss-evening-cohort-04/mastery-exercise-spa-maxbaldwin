var CarLot = (function(newCarLot) {

    newCarLot.resetBGAndBorder = function() {
        for (var i = 0; i < carDiv.length; i++) {
            carDiv[i].classList.remove('selectedCar');
        };
    };

    newCarLot.changeClassForStyle = function() {
        for (var i = 0; i < carDiv.length; i++) {
            event.target.parentNode.classList.add('selectedCar');
        };
    };
    newCarLot.clearTextInputOnClick = function() {
        textInput.focus();
        textInput.value = "";
    };
    newCarLot.changeDescriptionToInput = function() {
        for (var i = 0; i < container.children.length; i++) {
            if (container.children[i].classList.contains("selectedCar")) {
                container.children[i].children[4].textContent = textInput.value
            };
        };
    };


    return newCarLot;
})(CarLot || {});

var carDiv = document.getElementsByClassName('car');

//I'll put comments in here when finished