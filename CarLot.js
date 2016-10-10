var CarLot = (function() {
    var inventory = [];

    return {
        getInventory: function() {
            return inventory;
        },


        loadInventory: function(callback) {
            var inventoryLoader = new XMLHttpRequest();

            inventoryLoader.addEventListener("load", loadSuccess);
            inventoryLoader.addEventListener("failed", loadFail);

            inventoryLoader.open("GET", "inventory.json");
            inventoryLoader.send();

            function loadFail() {
                console.log("Unable to load data.")
            };

            function loadSuccess() {
                inventory = JSON.parse(this.responseText).cars;
                callback();
            };

        }
    };

})();

//I'll put comments in here when finished