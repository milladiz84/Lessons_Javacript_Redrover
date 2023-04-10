//toppings:
let sandwich;
let topping;
let bread = "bread";
let beaf = "Beaf";
let turkey = "turkey";
let salmon = "salmon";
let chicken = "chicken";
let cheese = "Mozarella cheese";

let beafSandwich = "Sandwich with beaf";
let turkeySandwich = "Sandwich with turkey";
let salmonSandwich = "Sandwich with salmon";
let chickenSandwich = "Sandwich with chicken";


let ask = prompt ("Would you like to order the sandwich? If yes, press YES please");
while (ask != "yes" ) {
    ask = prompt("Would you like to order the sandwich? If yes, press YES please");
}
const askTopping = Number(window.prompt("Choose from below topping: 1 - Beaf, 2 - Turkey, 3 - Salmon, 4 - Chicken", ""));

if (askTopping == 1) {
    topping = beaf;
    sandwich = beafSandwich;    
}
else if (askTopping == 2) {
    topping = turkey;
    sandwich = turkeySandwich;     
}
else if (askTopping == 3) {
    topping = salmon;
    sandwich = salmonSandwich;     
}
else if (askTopping == 4) {
    topping = chicken;
    sandwich = chickenSandwich;     
}
else {
    document.write("You haven't chosen a filling for a sandwich, try again, please :)")
}

let step1 = `1. Take a piece of ${bread}.`;
let step2 = `2. Put the slide of ${cheese}.`;
let step3 = `3. Put ${cheese} on bread.`;
let step4 = `4. Take a slice of ${topping}.`;
let step5 = `5. Put ${topping} on ${cheese}.`;
let result = `6. Your ${sandwich} is ready!.`;
let price = 12;

document.write(`Your recipe for ${sandwich}:  <br> `+ "<br>" + step1 + "<br>" +step2 + "<br>" + step3 + "<br>" + step4 + "<br>" + step5 + "<br>");
if (topping == salmon){
    document.write(`Your price is $` + price * 1.5);
}
else{
    document.write(`Your price is $ ${price}`)
}
