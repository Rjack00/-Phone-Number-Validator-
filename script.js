const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userValue = userInput.value;

const regex = /\d{10}|\d{3}-\d{3}-\d{4}|^[^\s]1?\s?\(\d{3}\)[-\s]?\d{3}[-\s]\d{4}|1\s\d{3}[-\s]\d{3}[-\s]\d{4}/;


const numTest = regex.test(userValue);

const numberCheck = () => {
    console.log(numTest, userInput.value);
    if (userInput.value === "") {
        return alert("Please provide a phone number");
    }

    if (numTest) {
        resultsDiv.innerHTML = `
            <h4 class="valid">Valid US number:</h4>
            <h4 class="valid">${userInput.value}</h4>`;
    } else {
        resultsDiv.innerHTML = `
            <h4 class="invalid">Invalid US number:</h4>
            <h4 class="invalid">${userInput.value}</h4>`;
    }

    userInput.value = "";
}

checkBtn.addEventListener("click", () => numberCheck())

clearBtn.addEventListener("click", () => resultsDiv.textContent = "")