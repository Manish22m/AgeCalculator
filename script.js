// Keep the max attribute of date input always today
const todayStr = new Date().toISOString().split("T")[0];
document.getElementById("dob").setAttribute("max", todayStr);

const calcBtn = document.getElementById("calcBtn");
const result  = document.getElementById("result");

function calculateAge() {
  const dobVal = document.getElementById("dob").value;
  if (!dobVal) { result.textContent = "Please select a valid date."; return; }

  const dob = new Date(dobVal);
  const today = new Date();

  
  if (dob > today) { result.textContent = "Date cannot be in the future."; return; }

  
  let diff = today - dob;

 
  const ageDate = new Date(diff);

  const years  = ageDate.getUTCFullYear() - 1970; 
  const months = ageDate.getUTCMonth();
  const days   = ageDate.getUTCDate() - 1;       

  result.innerHTML =
    `<span>You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.</span>`;
}

calcBtn.addEventListener("click", calculateAge);



document.getElementById("dob").addEventListener("change", calculateAge);