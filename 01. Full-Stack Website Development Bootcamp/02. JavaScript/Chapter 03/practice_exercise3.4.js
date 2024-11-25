let myCar = {

    color: "silver",
    make: "Toyota",
    model: "Etios",
    valueOfCar: 200000

};

let myColor = "color";

myCar[myColor] = "brown";

console.log(myCar);

myColor = "forSale";

myCar["forSale"] = true;

console.log(myCar);

console.log(myCar.make, myCar.model);

console.log(myCar.forSale);

