function calculateTax(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount) {
    console.log(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount)
    
    let ptkp = 50000000;
    
    if (marriageStatus == "Menikah") {
        ptkp = 60000000 + (dependentChildrenCount * 15000000)
    }else if (marriageStatus == "Cerai"){
        ptkp = 70000000 + (dependentChildrenCount * 15000000)
    } 
    
    let pph = annualIncome - ptkp;
    
    if (pph <= 0) return 0;
    else if (pph < 200000001) return pph *= .10;
    else if (pph < 450000001) return pph *= .15;
    else if (pph > 450000000) return pph *= .20;    
}