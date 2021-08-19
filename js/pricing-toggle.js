// Define pricing

const priceBaseMonthly = 379;
const priceIncrementMonthly = 329;
const priceBaseAnnual = 329;
const priceIncrementAnnual = 279;
let pricingMap = new Map();

//Sets pricingMap to contain the monthly prices
function setPricingMapMonthly() {
  pricingMap.set(500,priceBaseMonthly);
  pricingMap.set(1000,priceBaseMonthly+priceIncrementMonthly);
  pricingMap.set(1500,priceBaseMonthly+priceIncrementMonthly*2);
  pricingMap.set(2000,priceBaseMonthly+priceIncrementMonthly*3);
  pricingMap.set(2500,priceBaseMonthly+priceIncrementMonthly*4);
  pricingMap.set(3000,priceBaseMonthly+priceIncrementMonthly*5);
}

//Sets pricingMap to contain the annual prices
function setPricingMapAnnual() {
  pricingMap.set(500,priceBaseAnnual);
  pricingMap.set(1000,priceBaseAnnual+priceIncrementAnnual);
  pricingMap.set(1500,priceBaseAnnual+priceIncrementAnnual*2);
  pricingMap.set(2000,priceBaseAnnual+priceIncrementAnnual*3);
  pricingMap.set(2500,priceBaseAnnual+priceIncrementAnnual*4);
  pricingMap.set(3000,priceBaseAnnual+priceIncrementAnnual*5);
}

//Set pricingMap to annual as our initial state
setPricingMapAnnual();

// Handle the selection of monthly or annual pricing.
function setPricingModel() {
  let volume=document.getElementById("priceVolume").value;
  //First, set up the pricingMap for the chosen method of payment
  if (document.getElementById("priceToggle").checked) {        //true = annual pricing
    setPricingMapAnnual();
    document.getElementById("calculatedPrice").innerHTML = pricingMap.get(Number(volume));
    document.getElementById("annual").innerHTML=" (paid annually)";
  } else {                                                     //false = monthly pricing
    setPricingMapMonthly();
    document.getElementById("calculatedPrice").innerHTML = pricingMap.get(Number(volume));
    document.getElementById("annual").innerHTML="";
  };
}

// Handle the selection of a number of pages per month.
function setPageVolume() {
  let volume=document.getElementById("priceVolume").value;
  //First, display the selected number of pages in our output paragraph and in the table.
  document.getElementById("priceOutput").innerHTML=volume;
  document.getElementById("planPages").innerHTML=volume;
  //Then, display the price for the selected number of pages (and pricing model)
  document.getElementById("calculatedPrice").innerHTML=pricingMap.get(Number(volume));
}

// Check the toggle for monthly or annual pricing.
document.addEventListener("DOMContentLoaded", function() {
  let toggle = document.querySelector("#priceToggle");
  toggle.addEventListener("change", setPricingModel);
  let pageVolume = document.querySelector("#priceVolume");
  pageVolume.addEventListener("change", setPageVolume);
});
