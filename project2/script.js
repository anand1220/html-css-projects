document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('bmiForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const resultContainer = document.getElementById('result');

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            resultContainer.innerHTML = 'Please enter valid height and weight.';
        } else {
            const bmi = calculateBMI(height, weight);
            resultContainer.innerHTML = `Your BMI is: ${bmi.toFixed(2)} (${getBMICategory(bmi)})`;
        }
    });

    function calculateBMI(height, weight) {
        // BMI formula: weight (kg) / (height (m) * height (m))
        return weight / ((height / 100) ** 2);
    }

    function getBMICategory(bmi) {
        if (bmi < 18.5) return 'Underweight';
        else if (bmi >= 18.5 && bmi < 25) return 'Normal Weight';
        else if (bmi >= 25 && bmi < 30) return 'Overweight';
        else return 'Obese';
    }
});
