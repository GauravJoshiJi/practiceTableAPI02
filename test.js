var rating = 1.5;
const newRating = Math.round(rating);

switch (newRating) {
  case 1:
    console.log("*");
    break;
  case 2:
    console.log("**");
    break;
  case 3:
    console.log("***");
    break;
  case 4:
    console.log("****");
    break;
  default:
    console.log("*****");
}
