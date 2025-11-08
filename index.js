let counter = 0; //global variable to store the count

function increment() {
    counter++;
    document.getElementById("counter").innerText = counter;
}

function decrement() {
    counter--;
    document.getElementById("counter").innerText = counter;
  if (counter < 0) {
    counter = 0;
    document.getElementById("counter").innerText = counter;
}

function save() {document.getElementById("counter").innerText = counter;
    alert("Counter value saved, your current count is " + counter);
    counter = 0;
    document.getElementById("counter").innerText = counter;``
}
}
