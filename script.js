function incrementButton (){
    var element = document.getElementById('incrementText')
    var value = element.innerHTML;

    ++value;

    console.log("--->",value)
    document.getElementById('incrementText').innerHTML = value;
let count = 0;
const counter = document.getElementById('incrementText');

    
}
// Function to reset the value
function resetButton() {
    var initialValue = 0; // Set the initial value here
    document.getElementById('incrementText').innerHTML = initialValue;
}

const today = new Date();
const day = today.getDay(); // getDay() returns 5 for friday
var todayHadith = document.getElementById('today-hadith');

setTimeout(() => {
    if (day === 5) {
        todayHadith.innerHTML = `"Har jummah ke din mujh par Durood-e-Pak ki kasrat kiya karo Beshak meri ummat ka Durood har jummah kay din mujh par pesh kiya jata hai..."`;
        
        } else {
            todayHadith.innerHTML = `"Mujh par kasrat say Durood-e-Pak parho beshaq tumhara mujh par Durood-e-Pak parhna tumharay gunahon ke liye maghfirat hai"`;
        }
}, 3000);

