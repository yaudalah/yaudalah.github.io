function calculateTax(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount) {
    console.log(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount)
    
    let pajak = 0;
    let pph = annualIncome - 50000000;

    if (annualIncome > 50000000 && annualIncome <= 200000001) {
        pajak = pph * .10;
    } else if(annualIncome > 200000001 && annualIncome <= 450000001) {
        pajak = pph * .15;
    } else if(annualIncome > 450000001 && annualIncome > 450000001) {
        pajak = pph * .20;
    }

    return pajak;

}