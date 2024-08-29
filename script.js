const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const regex = /\d{10}|\d{3}-\d{3}-\d{4}|^[^\s]1?\s?\(\d{3}\)[-\s]?\d{3}[-\s]\d{4}|1\s\d{3}[-\s]\d{3}[-\s]\d{4} /;


checkBtn.addEventListener("click", (e) => {
    if(userInput.value === "") {
        return alert("Please provide a phone number");
    }

})

clearBtn.addEventListener("click", () => resultsDiv.textContent = ""
)