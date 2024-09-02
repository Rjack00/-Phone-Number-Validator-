const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;  

const numberCheck = (phoneNumber) => {
    const numTest = regex.test(phoneNumber);
    console.log(numTest, phoneNumber);
    if (userInput.value === "") {
        return alert("Please provide a phone number");
    }

    if (numTest) {
        resultsDiv.innerHTML = `
            <h4 class="valid">Valid US<br> Phone Number:</h4>
            <h4 class="valid number">${phoneNumber}</h4>`;
    } else {
        resultsDiv.innerHTML = `
            <h4 class="invalid">Invalid US <br>Phone Number:</h4>
            <h4 class="invalid number">${phoneNumber}</h4>`;
    }

    userInput.value = "";
}


 checkBtn.addEventListener("click", () => numberCheck(userInput.value))

 userInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        numberCheck(userInput.value)
    }
 })

clearBtn.addEventListener("click", () => resultsDiv.textContent = "")

