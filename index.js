let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

for (let i = 0; i < weeklyExpenseQuestions.length; i++) {
    let weeklyanswer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses += weeklyanswer
}

for (let i = 0; i < monthlyExpenseQuestions.length; i++) {
    let monthlyanswer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses += monthlyanswer
}

for (let i = 0; i < annualExpenseQuestions.length; i++) {
    let annualanswer = parseFloat(window.prompt(annualExpenseQuestions[i]))
    annualExpenses += annualanswer
}
// console.log(answer)
// Your Code Here
