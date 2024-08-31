const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const regex = /^\d{10}$|^[^\s]1?\s?(\d{3})([-\s]?)(\d{3}[-\s]?\d{4})|^[^\s]1?\s?\(\1\)\2\3/;

// const regex2 = /(\d{3})\1/;

const numberCheck = (phoneNumber) => {
    const numTest = regex.test(phoneNumber);
    console.log(numTest, phoneNumber);
    if (userInput.value === "") {
        return alert("Please provide a phone number");
    }

    if (numTest) {
        resultsDiv.innerHTML = `
            <h4 class="valid">Valid US number:</h4>
            <h4 class="valid">${phoneNumber}</h4>`;
    } else {
        resultsDiv.innerHTML = `
            <h4 class="invalid">Invalid US number:</h4>
            <h4 class="invalid">${phoneNumber}</h4>`;
    }

    userInput.value = "";
}

checkBtn.addEventListener("click", () => numberCheck(userInput.value))

clearBtn.addEventListener("click", () => resultsDiv.textContent = "")

// 1(234) 567 8910