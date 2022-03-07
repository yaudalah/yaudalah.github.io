function calculateTax(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount) {
    console.log(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount)
    
    let ptkp = 50000000;
    
    if (marriageStatus == "Menikah") {
        ptkp = 60000000 + (dependentChildrenCount * 15000000)
    }else if (marriageStatus == "Cerai"){
        ptkp = 70000000 + (dependentChildrenCount * 15000000)
    } 

    let pkp = annualIncome - ptkp;
    let pph = pkp * 0.1;

    pkp -= 200000000;
    if (pkp < 1) return pph;
    pph = pph + (pkp * 0.2);
    
    pkp -= 250000000;
    if (pkp < 1) return pph;
    pph = pph + (pkp * 0.3);

    return pph;
}