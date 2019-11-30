var execellent = 100
var veryGood = 70
var credit = 60
var lowerCredit = 55
var pass = 45
var fail = 35
var score = prompt ("Kindly enter your  score")
if (score > execellent) {
    alert ("error")
}
else if ((score <= execellent) &&(score >= veryGood)) {
    alert ("execellent")
}
else if ((score < veryGood) && (score >= credit)) {
    alert ("very good")
}
else if ((score <= credit) &&(score >= lowerCredit)) {
    alert ("credit")
}
else if((score < lowerCredit) &&(score >= pass)) {
    alert ("lower credit")
} 
else if ((score < pass) &&(score >= fail)) {
    alert ("Pass")
}
else {
    alert ("failure")
}

