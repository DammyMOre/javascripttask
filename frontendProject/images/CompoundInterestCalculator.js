document.getElementById('Calculate').addEventListener('click',function(event){
event.preventDefault();  

let principal = parseFloat(document.getElementById('principalAmount').value);
let montlyContribution = parseFloat(document.getElementById('contributionAmount').value);
let years = parseFloat(document.getElementById('duration').value);
let interestRate = parseFloat(document.getElementById('rate').value);
let variance = parseFloat(document.getElementById('range').value);
let compoundFrequency = parseInt(document.getElementById('frequency').value);

if(isNaN(principal) || isNaN(montlyContribution) || isNaN(years) || isNaN(interestRate) || isNaN(variance) || isNaN(compoundFrequency)){
    document.getElementById('result').innerHTML = "Please do not leave it empty.";
    return;
}

// console.log("Values before calculation:", principal, monthlyContribution, years, interestRate, variance, compoundFrequency);

let totalAmount = principal;
const periods = years * compoundFrequency;

for(let count = 0; count < periods; count++){
    totalAmount += montlyContribution;
    totalAmount *= (1 + interestRate / 100 / compoundFrequency);
}

const answer = totalAmount;

console.log("Calculated result:", answer);

document.getElementById('result').innerHTML = 
    `Total Amount: ${answer.toFixed(2)}`;
});


document.querySelector('#reset').addEventListener('click', function(event) {
    event.preventDefault();

    document.getElementById('principalAmount').value = '';
    document.getElementById('contributionAmount').value = '';
    document.getElementById('duration').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('range').value = '';
    document.getElementById('frequency').value = '';
    document.getElementById('result').innerHTML = '';
})