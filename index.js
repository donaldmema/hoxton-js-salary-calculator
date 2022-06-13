function netSalary(employeeFullName, grossSalary, pensionContribution) {
  let taxableAmount = grossSalary - grossSalary * pensionContribution;
  let takeHomeSalary;

  let taxRateUnder250 = 0.04;
  let taxRateUnder450 = 0.08;
  let taxRateOver450 = 0.1;

  if (taxableAmount > 450) {
    const taxUnder250EUR = (250 - 80) * taxRateUnder250;
    const taxUnder450EUR = (450 - 250) * taxRateUnder450;
    const taxOver450EUR = (taxableAmount - 450) * taxRateOver450;
    takeHomeSalary =
      taxableAmount - taxUnder250EUR - taxUnder450EUR - taxOver450EUR;
  } else if (250 <= taxableAmount <= 450) {
    const taxUnder250EUR = (250 - 80) * taxRateUnder250;
    const taxUnder450EUR = (taxableAmount - 250) * taxRateUnder450;
    const taxOver450EUR = 0;
    takeHomeSalary =
      taxableAmount - taxUnder250EUR - taxUnder450EUR - taxOver450EUR;
  } else if (80 < taxableAmount < 250) {
    const taxUnder250EUR = (taxableAmount - 80) * taxRateUnder250;
    const taxUnder450EUR = 0;
    const taxOver450EUR = 0;
    takeHomeSalary =
      taxableAmount - taxUnder250EUR - taxUnder450EUR - taxOver450EUR;
  } else {
    takeHomeSalary = taxableAmount;
  }

  return console.log(
    "Your(" +
      employeeFullName +
      ") final take-home salary is: " +
      takeHomeSalary +
      " EUR"
  );
}

// let grossSalary = 500;
// let pensionContribution = 0.05;

netSalary("Xhon Cena", 250, 0.05);
