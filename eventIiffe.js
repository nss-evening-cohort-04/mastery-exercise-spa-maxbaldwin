var CarLot = (function(newCarLot) {

    newCarLot.activateEvents = function() {
        container.addEventListener("click", function() {
            CarLot.clearTextInputOnClick();
            CarLot.resetBGAndBorder();
            CarLot.changeClassForStyle();
        });
        textInput.addEventListener("keyup", function(event) {
            CarLot.changeDescriptionToInput();
        });
    };

    return newCarLot;
})(CarLot || {});

//I'll put comments in here when this is finished