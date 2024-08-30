const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userValue = userInput.value;

const regex = /\d{10}/;

const regex2 = /\d{3}/;

const numberCheck = (num) => {
    const numTest = regex2.test(num);
    console.log(numTest, num);
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

checkBtn.addEventListener("click", () => numberCheck(userInput.value))

clearBtn.addEventListener("click", () => resultsDiv.textContent = "")