"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
		return queryInterface.bulkInsert(
			"inventories",
			[
				{
					type: "misc",
					name: "Paper Tape",
					quantity: 100,
					status: "dispense In",
					company: "Tape World",
					distributor: "master tape",
					consumed: 25,
					expiryDate: "2024/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "X-Ray Fixer",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Folic Acid",
					expiryDate: "2023/02/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Inj",
					name: "Calamox 1.2 Gm",
					expiryDate: "2022/08/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "OINT",
					name: "Olygin Vaginal",
					expiryDate: "2023/03/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Inj",
					name: "Omeprazole",
					expiryDate: "2022/10/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Ventoline 2 MG (Zaftolin)",
					expiryDate: "2022/02/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "CAP",
					name: "Doxy 100 Mg",
					expiryDate: "2023/02/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Inj",
					name: "Ceftrixone 500 Mg",
					expiryDate: "2022/02/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "SYP",
					name: "Cough 120 Ml",
					expiryDate: "2022/10/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "D/Syringe 10 Cc",
					expiryDate: "2025/07/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Inj",
					name: "Lignocain",
					expiryDate: "2023/01/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Inj",
					name: "Gravinate",
					expiryDate: "2022/10/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Dulcolux",
					expiryDate: "2022/02/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Nilstat Drop",
					expiryDate: "2022/10/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "SYP",
					name: "Gravinate",
					expiryDate: "2022/03/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "CAP",
					name: "Sangobion",
					expiryDate: "2022/12/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Inj",
					name: "Multibionta",
					expiryDate: "2022/08/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Inj",
					name: "Neurobion",
					expiryDate: "2022/02/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Cotton Roll",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "SYP",
					name: "Citralka",
					expiryDate: "2022/09/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "SYP",
					name: "Panadol Children Drop",
					expiryDate: "2022/02/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "OINT",
					name: "Neomycin Skin",
					expiryDate: "2023/12/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Inj",
					name: "Hydrocortisone 250Mg",
					expiryDate: "2025/06/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Pyodine Solution",
					expiryDate: "2022/02/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Gauz Than",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Sanitery Pad",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Inj",
					name: "Synthocinon",
					expiryDate: "2022/02/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Qalsan D",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Yellow Tip",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Blue Tip",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Cord Clamp",
					expiryDate: "2023/07/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Silk (All Sizes)",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Chromic (All Sizes)",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Cac 1000",
					expiryDate: "2022/09/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Propax (Combine Dressing) 10/20",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Propax (Combine Dressing) 10/10",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "X-Ray Screen 12*15",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "X-Ray Screen 10*12",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "X-Ray Screen 8*10",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Weight Machine (Children)",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Weight Machine (Adult)",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Ecg Roll",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Male Cap",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "I-V Stopper",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "N-G Tube (All Sizes)",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Suction Tube",
					expiryDate: "2024/03/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Surgical Blade (All Sizes)",
					expiryDate: "2021/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Inj",
					name: "Dormicum",
					expiryDate: "2023/10/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Halothane",
					expiryDate: "2022/12/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Transperent Tape",
					expiryDate: "2023/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Cotton Bandage 2 Inch",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Cotton Bandage 4 Inch",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Cotton Bandage 6 Inch",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Crape Bandage 4 Inch",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Crape Bandage 6 Inch",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "X-Ray Develper",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "X-Ra Film 12*15",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "X-Ra Film 10*12",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Chlorine",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Zaftoline Solution",
					expiryDate: "2022/02/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Septran Ds",
					expiryDate: "2024/02/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Gravinate",
					expiryDate: "2023/10/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "CAP",
					name: "Zauxit",
					expiryDate: "2022/01/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Oxygen Mask (All Size)",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Nabulize Mask (Adult)",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Nabulize Mask (Children)",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Female Cap",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "U/Sound Printer Roll",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Ett Tube (All Sizes)",
					expiryDate: "2022/09/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Auto Clave Tape",
					expiryDate: "2024/01/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Disposable Airways",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Diathermy Lead ",
					expiryDate: "2023/05/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "D/Syringe 5cc",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "I-V Chamber",
					expiryDate: "2022/08/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Bp Appratus (Murcery)",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Inj",
					name: "Gentamycin 40 Mg",
					expiryDate: "2023/01/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Clenil Aerosol",
					expiryDate: "2022/07/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Albendazol",
					expiryDate: "2024/01/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Atenolol 100 Mg",
					expiryDate: "2025/02/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Zafnol 50 Mg",
					expiryDate: "2025/02/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Xynosine Nasal Spray",
					expiryDate: "2025/02/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Inj",
					name: "Amrovil",
					expiryDate: "2022/10/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Zyloric 100 Mg",
					expiryDate: "2025/04/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Zyloric 300 Mg",
					expiryDate: "2025/02/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Rencobal-F",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Teril 200 Mg",
					expiryDate: "2023/03/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Inj",
					name: "Azythromycin 500Mg",
					expiryDate: "2022/01/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Inj",
					name: "Kinz",
					expiryDate: "2022/06/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "R/Lactate 500 Ml",
					expiryDate: "2023/09/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Bulb Holder (Pin)",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Bulb Holder (Ring)",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Swich",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Socket",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Capacitor (Elc)",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Energy Saver 13/15 Watt",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Fan Dimmer",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Light Plug Board",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Tab",
					name: "Dexamethasone ",
					expiryDate: "2022/02/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Tab",
					name: "Loratidine 10 Mg",
					expiryDate: "2024/09/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Tab",
					name: "Losartan Potassium",
					expiryDate: "2024/05/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Tab",
					name: "Dyclo",
					expiryDate: "2024/04/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Syp",
					name: "Amoxil 250 Mg",
					expiryDate: "2023/05/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Syp",
					name: "Salbutamol",
					expiryDate: "2023/04/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Inj",
					name: "Lasix 20 Mg",
					expiryDate: "2023/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Inj",
					name: "Phenramine Melate",
					expiryDate: "2022/10/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Inj",
					name: "Gravinate 50Mg",
					expiryDate: "2022/10/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Cap",
					name: "Cefixime ",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Tab",
					name: "Azythromycin 250 Mg",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Tab",
					name: "Flagyl 200 Mg",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Tab",
					name: "Flagyl 400 Mg",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Tab",
					name: "Augmentin 625 Mg",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "Cap",
					name: "Omeprazle 20 Mg",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Domel",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "X-Ray Cassete 8*10",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "X-Ray Cassete 10*12",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "X-Ray Cassete 12*15",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Oxygen Flow Metre",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Bracket Fan",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Plastic drum",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Kichen Grocery Stand",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Basket",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "OINT",
					name: "Hydrocortisone Cream",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Cefixime ",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "CAP",
					name: "Omeprazole 20 MG",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "CAP",
					name: "Omeprazole 40 MG",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Dyclo 50 Mg",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Cetrizine 10 MG",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Azithromycin 250Mg",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "No-Spa 40 Mg",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "ORS",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Flagyl 200 Mg",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Flagyl 400 Mg",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Augmentin 625Mg",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "SYP ",
					name: "Brufen ",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "SYP ",
					name: "Domel",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "SYP ",
					name: "Britanyl",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "SYP ",
					name: "Flagyl",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "SYP ",
					name: "Antacid",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "SYP ",
					name: "Zincat",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "SYP ",
					name: "Cefixime 100 Mg",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "SYP ",
					name: "Cefixime 200 Mg",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "SYP ",
					name: "Panadol",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Surgical Gloves (Latex)",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Xylocaine  2% Solution",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "INJ",
					name: "Dormicum",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Gauze Pad",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "I-V Drip Set",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "INJ",
					name: "Insulin 70/30",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Sterlization Pouches",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Medicaine",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Surgical Gloves (Latex)",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "X-Ray Films",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Sealing Tips.",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "High Speed Hand Piece",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Sodium Hypochloride",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "K-Files (15-40)",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Root Canal Lubricant",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Zinc Oxide Eugenol",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Mirror Heads",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "GP Points",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Calcium Hydro Oxide",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "G & C (Japan)",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Cavite",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Topical Xylocaine",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Burs",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Plungers",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Bone File",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Root Canal",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Wooden Wedge",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Slow Speed Hand Piece",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "D/Syringe 5cc",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Spinal Needle 25G",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "INJ",
					name: "Abocaine Spinal",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Proline 2/0",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "INJ",
					name: "Imatate",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "INJ",
					name: "Dyclo ",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "INJ",
					name: "Relispa",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Bath Soap",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Wiper Iron",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Hand Wash",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Boll Point (Blue)",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Register (600 Pages)",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Register (1500 Pages)",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Bad Sheets",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "SYP ",
					name: "CPM",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "INJ",
					name: "Drotavarine",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "INJ",
					name: "Paracetamol",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "3-Ways Stopper",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "I-V Canula Size 20",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "I-V Canula Size 22",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "I-V Canula Size 24",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Brufen 400Mg",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Paracetamol",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "INJ",
					name: "Metronidazole Inf 100 Ml",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Proline 2/0",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "ORS",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Carbolic Acid",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Gauze Than 50 Metres",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Disposable Gloves",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Dish Wash Sol (Lemon Max)",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Hydro Choleric",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Power Plug ",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Curcuit Breaker 20 Amps.",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Curcuit Breaker 100 Amps.",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Office Chair Iron",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Nebulizer Machine",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Office File Cover",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Surgical Gloves no 6.5/7/7.5",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Kleen Enema",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "DisposableFace Mask",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "INJ",
					name: "Propofol",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "INJ",
					name: "Aminophyline",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Vickryl No-01",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "DROP",
					name: "Soda Glycrine Ear",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "INJ",
					name: "Transamin 500Mg",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Gauze Double Roti",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Formalin",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "SYP ",
					name: "Ammonium Chloride",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "OINT",
					name: "Hydrocortisone 10Gm",
					expiryDate: "2026/09/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "SYP",
					name: "Salbutamol 60ML",
					expiryDate: "2023/04/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Losartan Pot.",
					expiryDate: "2024/05/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Fefan",
					expiryDate: "2024/09/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Danzen DS",
					expiryDate: "2025/07/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "INJ",
					name: "Imitate",
					expiryDate: "2024/05/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "SYP",
					name: "Dimenhydrinate 60Ml",
					expiryDate: "2025/01/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "SYP",
					name: "Mertronidazole 90Ml",
					expiryDate: "2024/01/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "INJ",
					name: "Amkay 100 Mg",
					expiryDate: "2025/01/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "INJ",
					name: "Omezol 40Mg With Water",
					expiryDate: "2024/01/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "INJ",
					name: "Fortazim 1000 Mg (With Water)",
					expiryDate: "2025/01/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "INJ",
					name: "Bofalgan 100 Ml Infusion",
					expiryDate: "2024/01/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "INJ",
					name: "Calamox 1.2Gm (With Water)",
					expiryDate: "2024/01/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "INJ",
					name: "Flazol (Metronidazole)500Mg/100Ml",
					expiryDate: "2024/01/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Dental X-Ray Film ",
					expiryDate: "2023/09/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Montilukast 10Mg",
					expiryDate: "2024/02/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "TAB",
					name: "Moxifloxacin 400 Mg",
					expiryDate: "2024/02/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "HBSAg",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "H-Pylori",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "HCV",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					type: "",
					name: "Cotton Roll",
					expiryDate: "2022/11/01",
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      
    */
		return queryInterface.dropTable("mail_recipients");
	}
};
