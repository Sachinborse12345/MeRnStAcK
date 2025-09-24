let mother = {
    name: "priya singh",
    age: 21,
    adress: " Dattawadi,Pune",
    city: "Pune"
};

let Student = {
    name: "Pratik Patil",
    age: 15,
    Standard: "10th",
    address: " Sadashiv Peth,Pune",
    city: "Pune",
    section: "c"
};

mother.occupation = "Teacher";
mother.age = 34;
console.log(mother, Student);


let vehicle = {
    seats: 4,
    topSpeed: "200kmph",
    milage: 50,
    airBags: 2

}
/*updating no of seats*/
vehicle.seats = 5;

//adding property in vehicle
vehicle.colors = ["white", "Black", "Blue"];

//deleting property of vehicle
delete vehicle.airBags;

//nested objects

let vehicle1 = {
    name: "Scorpio",
    seats: 4,
    topSpeed: "200kmph",
    milage: 50,
    airBags: 2

}

console.log({ vehicle });
vehicle.name = "Scorpio";

const vehicle2 = {
    name: "BMW",
    seats: 4,
    topSpeed: "200kmph",
    milage: 50,
    airBags: 2,
    colors: ["white", "Black", "Blue"],
    adress: {
        add1: "Aria",
        add2: "Baner",
        state: "Maharashtra"
    }


};

//Question --> print name of vehicle 
//and city from vehicles array.
for (let i = 0; i < vehicle1.length; i++) {


    console.log("Name of vechicle", vehicle2?.name, "City of vehicle", vehicle2?.city);
}

for (let i = 0; i < vehicles.length; i++) {
    console.log("Name of vehicle : ", vehicles[i]?.name);
    console.log("Name of city : ", vehicles[i]?.address?.city);
}