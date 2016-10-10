function populatePage(inventory) {
//3 starter variables, not to be confused with starter pokemon
    var htmlContainer = document.getElementById('container');
    var sold = "sold";
    var nissanString;

    for (var i = 0; i < inventory.length; i++) {


            nissanString = `<div class="col-sm-4 car`;
            if (inventory[i].purchased) {
                carString += sold;
            }
            nissanString += `" style="border-color: ${inventory[i].color};">`;
            nissanString += `<h1>${inventory[i].make}</h1>`;
            nissanString += `<h2>${inventory[i].model}</h2>`;
            nissanString += `<h2>Year: ${inventory[i].year}</h2>`;
            nissanString += `<h2>Price: $${inventory[i].price}</h2>`;
            nissanString += `<p>${inventory[i].description}</p>`;
            //if for inventory whether it has been purchased or not 
            if (inventory[i].purchased) {
                nissanString += `<img class="soldImage" src="sold.jpg">`;
            }
            //will get actual picture soon
            nissanString += `<img class="questionImage" src="Question.png">`;
            nissanString += `</div>`;
            htmlContainer.innerHTML += nissanString;

    };

};
//load the inventory to the dom
CarLot.loadInventory(carsToDOM);

function carsToDOM() {
    var carInventory = CarLot.getInventory();
    populatePage(carInventory)
};

//I'll put comments in here when finished