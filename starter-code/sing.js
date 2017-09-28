console.log("sing.js loaded");

var bottles = prompt("How many verses shall we sing?!")

for (var i = bottles; i >= 0; i--) {
  if (i > 1) {
  console.log(i + " bottles of beer on the wall,\n" + i + " bottles of beer!\nTake one down pass it around,\n" + (i-1) + " bottles of beer on the wall!");
} if (i == 1) {
  console.log(i + " bottle of beer on the wall,\n" + i + " bottle of beer!\nTake one down pass it around,\n" + "no more bottles of beer on the wall!");
} if (i == 0) {
  console.log("No bottles of beer on the wall,\n" + "no more bottles of beer!");
}
}
