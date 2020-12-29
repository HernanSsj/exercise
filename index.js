class Vehicle {
    constructor(brand, model, price) {
     this.brand = brand;
     this.model = model;
     this.price = price;
    }
     getPrice (){
         return this.price
     }
   }
class Car extends Vehicle {
    constructor(brand, model, price,doors){
        super(brand, model, price);
        this.doors= doors;
    }

    getInfo(){
       return `Marca: ${this.brand} // Modelo: ${this.model} // Puertas: ${this.doors} // Precio: $${this.price}`
    }
}
class MotorBike extends Vehicle {
    constructor(brand, model, price, cc){
        super(brand, model, price);
        this.cc= cc;
    }

    getInfo(){
       return `Marca: ${this.brand} // Modelo: ${this.model} // Cilindrada: ${this.cc}cc // Precio: $${this.price}`
    }
}

const logEveryVeicleInfo = (vehicles) =>{
    for (let index = 0; index < vehicles.length; index++) {
     
        console.log(vehicles[index].getInfo())
         
     }
}

 const findMostExpensiveVehicle = (vehicles) =>{
     let maxPrice = vehicles[0]
      
     for (let index = 0; index < vehicles.length; index++) {
        if (vehicles[index].getPrice() > maxPrice.getPrice()) {
             
           maxPrice = vehicles[index];
         }
       }
       return `Vehículo más caro: ${maxPrice.brand} ${maxPrice.model}`
     }


 const findLessExpensiveVehicle = (vehicles) =>{
     let minPrice = vehicles[0]
      
     for (let index = 0; index < vehicles.length; index++) {
        if (vehicles[index].getPrice() < minPrice.getPrice()) {
             
           minPrice = vehicles[index];
         }
       }
       return `Vehículo más barato: ${minPrice.brand} ${minPrice.model}`
     }

const findVehicleWithCharacter = (vehicles, character) => {
    for (let index = 0; index < vehicles.length; index++) {
      if(vehicles[index].model.toLowerCase().includes(character.toLowerCase())){
         return `Vehículo que contiene en el modelo la letra ‘${character}’: ${vehicles[index].brand} ${vehicles[index].model} $${vehicles[index].price}`
      }
        
     }
     return `Vehículo que contiene en el modelo la letra ‘${character}’: no encontrado`
}
const orderVehicleByMinPrice = (vehicles)  => {
    let temp = vehicles.sort(function(a, b){return b.getPrice() - a.getPrice()})
    console.log("Vehículos ordenados por precio de mayor a menor:")
    temp.forEach((vehicle) =>{
        console.log(vehicle.brand, vehicle.model)
    })
    
}
const car = new Car("Peugeot", "206", 200000.00, 4)
const car_one = new Car("Peugeot", "208", 250000.00, 5)
const bike = new MotorBike("Honda", "Titan", 60000.00, 125)
const bike_one = new MotorBike("Yamaha", "YBR", 80500.50, 160)


const vehicles = [car, bike, car_one, bike_one]

logEveryVeicleInfo(vehicles)
console.log("=============================")
console.log(findMostExpensiveVehicle(vehicles))
console.log(findLessExpensiveVehicle(vehicles))
console.log(findVehicleWithCharacter(vehicles,"Y"))
console.log("=============================")
orderVehicleByMinPrice(vehicles)
 