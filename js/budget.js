function getInputValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueString = element.value;
  const elementValue = parseFloat(elementValueString);

  return elementValue;
}

function clearField(Id) {
  const element = document.getElementById(Id);
  element.value = '';
}

function totalPlayerExpense() {
  const perPlayerAmount = getInputValueById('per_player_field');
  const totalPlayerExpenseAmount = perPlayerAmount * 5;
  const playerExpenseElement = document.getElementById('player_expense');
  playerExpenseElement.innerText = totalPlayerExpenseAmount;

  return totalPlayerExpenseAmount;
}

document.getElementById('calculate_btn').addEventListener('click', function () {
  totalPlayerExpense();
});

document
  .getElementById('calculate_total_btn')
  .addEventListener('click', function () {
    const totalPlayerExpenseAmount = totalPlayerExpense();
    const managerAmount = getInputValueById('manager_field');
    const coachAmount = getInputValueById('coach_field');
    const totalCost = totalPlayerExpenseAmount + managerAmount + coachAmount;
    const totalExpenseElement = document.getElementById('total_expense');
    totalExpenseElement.innerText = totalCost;
    clearField('manager_field');
    clearField('coach_field');
    clearField('per_player_field');
  });
