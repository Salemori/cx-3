const express = require("express");

const app = express();
app.use(express.json());

const drugs = [

    { id: 1, name: "Amoxicillin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 120, manufacturer: "Pfizer" },
   
    { id: 2, name: "Paracetamol", category: "Analgesic", dosageMg: 1000, isPrescriptionOnly: false, stock: 200, manufacturer: "GSK" },
   
    { id: 3, name: "Ibuprofen", category: "Analgesic", dosageMg: 400, isPrescriptionOnly: false, stock: 150, manufacturer: "Bayer" },
   
    { id: 4, name: "Chloroquine", category: "Antimalarial", dosageMg: 250, isPrescriptionOnly: true, stock: 80, manufacturer: "Sanofi" },
   
    { id: 5, name: "Ciprofloxacin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 70, manufacturer: "Pfizer" },
   
    { id: 6, name: "Loratadine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 160, manufacturer: "Novartis" },
   
    { id: 7, name: "Metformin", category: "Antidiabetic", dosageMg: 850, isPrescriptionOnly: true, stock: 140, manufacturer: "Teva" },
   
    { id: 8, name: "Artemether", category: "Antimalarial", dosageMg: 20, isPrescriptionOnly: true, stock: 60, manufacturer: "Roche" },
   
    { id: 9, name: "Aspirin", category: "Analgesic", dosageMg: 300, isPrescriptionOnly: false, stock: 180, manufacturer: "Bayer" },
   
    { id: 10, name: "Omeprazole", category: "Antacid", dosageMg: 20, isPrescriptionOnly: true, stock: 90, manufacturer: "AstraZeneca" },
   
    { id: 11, name: "Azithromycin", category: "Antibiotic", dosageMg: 250, isPrescriptionOnly: true, stock: 50, manufacturer: "Pfizer" },
   
    { id: 12, name: "Cetirizine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 110, manufacturer: "Novartis" },
   
    { id: 13, name: "Insulin", category: "Antidiabetic", dosageMg: 100, isPrescriptionOnly: true, stock: 30, manufacturer: "Novo Nordisk" },
   
    { id: 14, name: "Artemisinin", category: "Antimalarial", dosageMg: 100, isPrescriptionOnly: true, stock: 50, manufacturer: "GSK" },
   
    { id: 15, name: "Codeine", category: "Analgesic", dosageMg: 30, isPrescriptionOnly: true, stock: 20, manufacturer: "Teva" },
   
    { id: 16, name: "Vitamin C", category: "Supplement", dosageMg: 500, isPrescriptionOnly: false, stock: 300, manufacturer: "Nature’s Bounty" },
   
    { id: 17, name: "Ranitidine", category: "Antacid", dosageMg: 150, isPrescriptionOnly: false, stock: 90, manufacturer: "Sanofi" },
   
    { id: 18, name: "Doxycycline", category: "Antibiotic", dosageMg: 100, isPrescriptionOnly: true, stock: 40, manufacturer: "Pfizer" },
   
    { id: 19, name: "Tramadol", category: "Analgesic", dosageMg: 50, isPrescriptionOnly: true, stock: 45, manufacturer: "Teva" },
   
    { id: 20, name: "Folic Acid", category: "Supplement", dosageMg: 5, isPrescriptionOnly: false, stock: 250, manufacturer: "Nature’s Bounty" }
   
   ];



// Welcome API
app.get("/", (req, res)=>{
    return res.send("Welcome! Career Ex Drug Api Server is Running");
})

//1. GET /drugs/antibiotics
app.get("/drugs/antibiotics", (req, res)=>{
    let antibioticDrugs = drugs.filter(drug => drug.category.includes("Antibiotic") );
    res.json({data: antibioticDrugs});
})

//2. GET /drugs/names
app.get("/drugs/names", (req, res)=>{
    let drugNames = drugs.map((drug) =>(
        drug.name.toLocaleLowerCase()
    ));

    return res.json({data: drugNames});
})

//3. POST /drugs/by-category
app.post("/drugs/by-category", (req, res)=>{
    const {category} = req.body;
    let normCategory = category.toLocaleLowerCase(); 
    let drugCategory = drugs.filter(drug => drug.category
                                    .toLocaleLowerCase()
                                    .includes(normCategory));

    return res.json({data: drugCategory});
})

//4. GET /drugs/names-manufacturers
app.get("/drugs/names-manufacturers", (req, res)=>{  
    let nameManufacture = drugs.map((drug) =>(
        {name: drug.name, manufacturer: drug.manufacturer}
    ));

    return res.json({data: nameManufacture});
})

//5. GET /drugs/prescription
app.get("/drugs/prescription", (req, res)=>{
    let isPrescriptionOnly = drugs.filter(drug => drug.isPrescriptionOnly === true);
    return res.json({data: isPrescriptionOnly});
    
})

//6. GET /drugs/formatted
app.get("/drugs/formatted", (req, res)=>{
    let drugDosage = drugs.map(drug =>{
        return (`Drug: [${[drug.name]}] - [${drug.dosageMg}]mg`)
    })
    return res.json({data: drugDosage});
})

//7. GET /drugs/low-stock
app.get("/drugs/low-stock", (req, res)=>{
    let lessThanFifty = drugs.filter((drug) => drug.stock < 50);
    return res.json({data: lessThanFifty});
})

//8. GET /drugs/non-prescription
app.get("/drugs/non-prescription", (req, res)=>{
    let notPrescriptionOnly = drugs.filter(drug => drug.isPrescriptionOnly === false);
    return res.json({data: notPrescriptionOnly});
})

//9. POST /drugs/manufacturer-count
app.post("/drugs/manufacturer-count", (req, res)=>{
    const {manufacturer} = req.body;

    let norManufacturer = manufacturer.toLocaleLowerCase();
    let numberOfDrugs = drugs.filter(drug => drug.manufacturer.toLocaleLowerCase().includes(norManufacturer));
    
    return res.json({data: numberOfDrugs.length});
})

//10. GET /drugs/count-analgesics
app.get("/drugs/count-analgesics", (req, res)=>{
   const analgesic = drugs.filter(drug => drug.category.includes("Analgesic"))
   return res.json({data: analgesic.length})
})


const port = "8000";
app.listen(port, ()=> console.log(`Application listening at http://localhost:${port}`));
