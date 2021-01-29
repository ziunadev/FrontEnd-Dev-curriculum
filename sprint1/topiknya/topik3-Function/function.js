// Pembahsan Function

// Function tanpa parameter atau dengan parentheses kosong
function first_function() {
  console.log("Test"); //code here
}

first_function();
first_function();
first_function();


// Function dengan parameter, bisa satu atau lebih
function print_name(name) {
  console.log(name+" Tampan") //code here
}

// invocation -> Calling the function/s
print_name("Saya");
print_name("Anda");


// Function with Return
function isLima() {
  console.log("ini function 5");
  return 5; // return value given to the function
}

var x = isLima();
console.log(x);


function otherFunc(person1, ...others) { // -> Function with uncertain parameter, can give as much parameter
    console.log(person1 + ", " + others.join(", "))
}

otherFunc("Saya", "Dia", "Kamu", "Kita");