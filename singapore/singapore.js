// var Pilgrimage=document.getElementById("Pilgrimage")
// var Heritage=document.getElementById("Heritage")
// var Hills=document.getElementById("Hills")
// var Falls=document.getElementById("Falls")
// var Beach=document.getElementById("Beach")
// var Adventures=document.getElementById("Adventures");


// function getCount() {
//     var count = 0;
//     const checkbox = [Pilgrimage,Heritage,Hills,Falls,Beach,Adventures];
//     return count;
// }

// function getTotalCost(noOfPersons) {
//     var initCost = 0;
//     if (document.getElementById("Pilgrimage").checked) {
//         initCost += 350;
//     }
//     if (document.getElementById("Heritage").checked) {
//         initCost += 430;
//     }
//     if (document.getElementById("Hills").checked) {
//         initCost += 780;
//     }
//     if (document.getElementById("Falls").checked) {
//         initCost += 1200;
//     }
//     if (document.getElementById("Beach").checked) {
//         initCost += 270;
//     }
//     if (document.getElementById("Adventures").checked) {
//         initCost += 4500;
//     }
//     return initCost * noOfPersons;
// }

// function calculateDiscount(cost) {
//     if (getCount() >= 2) {
//         return cost * 0.85; // Applying 15% discount
//     }
//     return 0;
// }

// function getStayCost(noOfPersons) {
//     if (document.getElementById("yes").checked) {
//         var noOfDays = parseInt(document.getElementById("noOfDaysStay").value);
//         return  noOfDays *noOfPersons * 150;
//     }
//     return 0;
// }

// function disableNoOfDaysStay() {
//     if (document.getElementById("no").checked) {
//         document.getElementById("noOfDaysStay").setAttribute("disabled", "true");
//     }
// }

// function calculateCost() {
//     var noOfPersons = parseInt(document.getElementById("noOfPersons").value);
//     var totalCost = getTotalCost(noOfPersons);
//     var stayCost = getStayCost(noOfPersons);
//     var discount = calculateDiscount(totalCost + stayCost); // Applying discount after adding stay cost
//     var packageCost = totalCost + stayCost - discount;
//     document.getElementById("result").innerHTML = `Your preferred package cost: ${packageCost}.toFixed(2)`;
//     return false;
// }




var no_person = document.getElementById("no_person");
var stay_yes = document.getElementById("stay_yes");
var stay_no = document.getElementById("stay_no");
var no_days = document.getElementById("no_days");
function tourisum() {
  var places = [];
  console.log("method is  call");
  var checkbox = document.getElementsByName("checkbox");
  for (var i = 0; i <= checkbox.length - 1; i++) {
    if (checkbox[i].checked == true) {
      places.push(checkbox[i].value);
    }
  }
  var stay_value;
  console.log(places);
  function stay() {
    if (stay_yes.checked == true) {
      stay_value = stay_yes.value;
    } else {
      stay_value = stay_no.value;
    }
    return stay_value;
  }

  var stay_val = stay();
  console.log(stay_val);
  console.log(no_days.value);
  var stayhome = no_days.value * stay_val;
  var totalpersonhome = stayhome * no_person.value;
  console.log(stayhome);
  console.log(totalpersonhome);

  //visted palce total
  var sum = 0;
  for (j = 0; j <= places.length - 1; j++) {
    sum = sum + parseInt(places[j]);
  }
  console.log(sum);

  //total person visted
  var totalcost = 0;
  totalcost = no_person.value * sum;
  console.log(totalcost);

  //stay home with all bill
  var allbill = totalcost + totalpersonhome;

  console.log(allbill);

  function discount() {
    var total;
    var total_places = places.map((item, i) => i);

    // console.log(total_places);
    var no_places = total_places.reduce((a, b) => a + b, 0);
    console.log(no_places);

    if (no_places >= 3 && stay_yes.checked == false) {
      total = totalcost - (totalcost * 15) / 100;
    } else if (no_places < 3 && stay_yes.checkbox == false) {
      total = totalcost;
    } else if (no_places >= 3 && stay_yes.checked == true) {
      total = allbill - (allbill * 15) / 100;
    } else if (no_places < 3 && stay_yes.checked == true) {
      total = allbill;
    }
    return total;
  }
  var total_amount = discount();
  console.log("total amount", total_amount);
  var name1 = document.getElementById("name").value;
  var reult = document.getElementById("result");
  reult.innerText = `Your prefferred Package cost${total_amount}$;`
}

function clearAll() {
  var name1 = (document.getElementById("name").value = "");
  var phone = (document.getElementById("phone").value = "");
  var email = (document.getElementById("email").value = "");
  var no_person = (document.getElementById("no_person").value = "");
  var stay_yes = (document.getElementById("stay_yes").checked = false);
  var stay_no = (document.getElementById("stay_no").checked = false);
  var no_days = (document.getElementById("no_days").value = "");
  var checkbox = document.getElementsByName("checkbox");
  for (var i = 0; i < checkbox.length; i++) checkbox[i].checked = false;
  var result = (document.getElementById("result").innerText = "");
}
