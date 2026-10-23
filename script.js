function calculateBMI() {
    let name = document.getElementById("name").value.trim();
    let age = Number(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);
    let result = document.getElementById("result");

    if (
        name === "" ||
        document.getElementById("age").value === "" ||
        gender === "" ||
        height <= 0 ||
        weight <= 0 ||
        !Number.isFinite(height) ||
        !Number.isFinite(weight) ||
        !Number.isFinite(age)
    ) {
        result.textContent = "Please fill in all fields correctly!";
        return;
    }

    if (age > 120 || height > 300 || weight > 700) {
        result.textContent = "Please check your entered values!";
        return;
    }
    let bmi = weight / ((height / 100) ** 2);
    // Save details for meter.html
    let person = {
        name: name,
        age: age,
        gender: gender,
        height: height,
        weight: weight,
        bmi: bmi
    };
    localStorage.setItem("bmiPerson", JSON.stringify(person));
    // Open the BMI meter page
    window.location.href = "meter.html";
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result").innerHTML = "";
}