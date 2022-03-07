function calculateTax(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount) {
    console.log(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount)
    
    let pajak = 0;
    let pph = annualIncome - 50000000;
    let pphMenikah = annualIncome - (60000000 + (dependentChildrenCount * 15000000));
    let pphCerai = annualIncome - (70000000 + (dependentChildrenCount * 15000000)); 
    let ptkpAnak = 15000000;

    if (annualIncome > 50000000 && annualIncome <= 200000001 && marriageStatus == 'Lajang') {
        pajak = pph * .10;

    } else if (annualIncome > 60000000 && annualIncome < 450000001 && marriageStatus == 'Menikah' && dependentChildrenCount >0) {
        pajak = pphMenikah * .10;

    }else if (annualIncome > 60000000 && annualIncome > 450000001 && marriageStatus == 'Menikah' && dependentChildrenCount >0) {
        pajak = pphMenikah * .20;

    }else if (annualIncome > 70000000 && marriageStatus == 'Cerai'  && dependentChildrenCount > 0) {
        pajak = pphCerai * .10;

    }else if (annualIncome > 70000000 && annualIncome > 450000001 && marriageStatus == 'Cerai'  && dependentChildrenCount > 0) {
        pajak = pphCerai * .20;

    } else if(annualIncome > 200000001 && annualIncome <= 450000001) {
        pajak = pph * .15;

    } else if(annualIncome > 450000001 && marriageStatus == 'Lajang') {
        pajak = pph * .20;

    }

    return pajak;

}