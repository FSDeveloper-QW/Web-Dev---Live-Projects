// =========================================================================================
// SCRIPT FOR ADVANCE DROP-DOWN MENU (SIDE WAY SCROLL)
// =========================================================================================

// =================================================================================================================================
// ========================================================================================  FIXME:  PART 1 - DECLARING CONSTANTS
// =================================================================================================================================

// =========================================================================================
// TODO:  DECLARING CONSTANTS FOR EACH LEVEL OF THE NAVIGATION
// =========================================================================================

// =========================================================================================
// FIXME:  TOP LEVEL - CONSTANTS FOR THE TOP LEVEL NAVIGATION (AND DROP-DOWN MENU)
// =========================================================================================

// =========================================================  TODO:  SUPPORT SERVICES  TODO:

const supportservicesdrop_btn = document.querySelector(".supportservices-btn");
const supportservicestooltip = document.querySelector(
  ".supportservicestooltip"
);
const supportservicesmenu_wrapper = document.querySelector(
  ".supportserviceswrapper"
);
const supportservicesmenu_bar = document.querySelector(
  ".supportservicesmenu-bar"
);

// =======================================================  TODO:  PRODUCT CATEGORIES  TODO:

const productsdrop_btn = document.querySelector(".productsdrop-btn");
const productstooltip = document.querySelector(".productstooltip");
const productsmenu_wrapper = document.querySelector(".productswrapper");
const productsmenu_bar = document.querySelector(".productsmenu-bar");

// ================================================  TODO:  ADVERTISING & CLIENT ZONE  TODO:

const clientzonedrop_btn = document.querySelector(".clientzonedrop-btn");
const clientzonetooltip = document.querySelector(".clientzonetooltip");
const clientzonemenu_wrapper = document.querySelector(".clientzonewrapper");
const clientzonemenu_bar = document.querySelector(".clientzonemenu-bar");

// =========================================================================================
// FIXME:  lEVEL 1 - CONSTANTS FOR THE 1ST LEVEL ITEMS (WITH DROPDOWNS TO 2ND LEVEL ITEMS)
// =========================================================================================

// =========================================================  TODO:  SUPPORT SERVICES  TODO:

// ================================
// ITEM 1 - SELLING PLANS
// ================================

const sellingplans_drop = document.querySelector(".sellingplans-drop");
const sellingplans_item = document.querySelector(".sellingplans-item");
const back_sellingplans_btn = document.querySelector(".back-sellingplans-btn");

// ================================
// ITEM 2 - INVESTING PLANS
// ================================

// const investingplans_drop = document.querySelector(".investingplans-drop");
// const investingplans_item = document.querySelector(".investingplans-item");
// const back_investingplans_btn = document.querySelector(
//   ".back-investingplans-btn"
// );

// ================================
// ITEM 3 - SKYNAMO CRM
// ================================

const skynamo_drop = document.querySelector(".skynamo-drop");
const skynamo_item = document.querySelector(".skynamo-item");
const back_skynamo_btn = document.querySelector(".back-skynamo-btn");

// ================================
// ITEM 4 - A TO Z WHISTLEBLOWING
// ================================

const whistleblowing_drop = document.querySelector(".whistleblowing-drop");
const whistleblowing_item = document.querySelector(".whistleblowing-item");
const back_whistleblowing_btn = document.querySelector(
  ".back-whistleblowing-btn"
);

// ================================
// ITEM 5 - GENERAL SERVICES
// ================================

const generalservices_drop = document.querySelector(".generalservices-drop");
const generalservices_item = document.querySelector(".generalservices-item");
const back_generalservices_btn = document.querySelector(
  ".back-generalservices-btn"
);

// ================================
// ITEM 6 - PROFESSIONAL SERVICES
// ================================

const professionalservices_drop = document.querySelector(
  ".professionalservices-drop"
);
const professionalservices_item = document.querySelector(
  ".professionalservices-item"
);
const back_professionalservices_btn = document.querySelector(
  ".back-professionalservices-btn"
);

// ===================================================  TODO:  PRODUCT CATEGORIES  TODO:

// =====================================
// ITEM 1 - ENERGY
// =====================================

const energy_drop = document.querySelector(".energy-drop");
const energy_item = document.querySelector(".energy-item");
const back_energy_btn = document.querySelector(".back-energy-btn");

// =====================================
// ITEM 2 - MOBILE
// =====================================

const mobile_drop = document.querySelector(".mobile-drop");
const mobile_item = document.querySelector(".mobile-item");
const back_mobile_btn = document.querySelector(".back-mobile-btn");

// =====================================
// ITEM 3 - OFFICE
// =====================================

const office_drop = document.querySelector(".office-drop");
const office_item = document.querySelector(".office-item");
const back_office_btn = document.querySelector(".back-office-btn");

// =====================================
// ITEM 4 - HOME
// =====================================

const homeliving_drop = document.querySelector(".homeliving-drop");
const homeliving_item = document.querySelector(".homeliving-item");
const back_homeliving_btn = document.querySelector(".back-homeliving-btn");

// =====================================
// ITEM 5 - HOBBIES
// =====================================

const hobbies_drop = document.querySelector(".hobbies-drop");
const hobbies_item = document.querySelector(".hobbies-item");
const back_hobbies_btn = document.querySelector(".back-hobbies-btn");

// =====================================
// ITEM 6 - SPORTS
// =====================================

const sports_drop = document.querySelector(".sports-drop");
const sports_item = document.querySelector(".sports-item");
const back_sports_btn = document.querySelector(".back-sports-btn");

// =====================================
// ITEM 7 - OUTDOORS
// =====================================

const outdoors_drop = document.querySelector(".outdoors-drop");
const outdoors_item = document.querySelector(".outdoors-item");
const back_outdoors_btn = document.querySelector(".back-outdoors-btn");

/// =====================================
// ITEM 8 - EMERGENCY
// ======================================

const emergency_drop = document.querySelector(".emergency-drop");
const emergency_item = document.querySelector(".emergency-item");
const back_emergency_btn = document.querySelector(".back-emergency-btn");

// =====================================
// ITEM 9 - FOOD, BEVERAGES & GROCERIES
// =====================================

const groceries_drop = document.querySelector(".groceries-drop");
const groceries_item = document.querySelector(".groceries-item");
const back_groceries_btn = document.querySelector(".back-groceries-btn");

// =====================================
// ITEM 10 - CLOTHING & FOOTWEAR
// =====================================

const clothingfootwear_drop = document.querySelector(".clothingfootwear-drop");
const clothingfootwear_item = document.querySelector(".clothingfootwear-item");
const back_clothingfootwear_btn = document.querySelector(
  ".back-clothingfootwear-btn"
);

// =====================================
// ITEM 11 - COVID-19, CLEANING AND PPE
// =====================================

const covid19_drop = document.querySelector(".covid19-drop");
const covid19_item = document.querySelector(".covid19-item");
const back_covid19_btn = document.querySelector(".back-covid19-btn");

// =====================================
// ITEM 12 - DIY, TOOLS & MATERIALS
// =====================================

const diyall_drop = document.querySelector(".diyall-drop");
const diyall_item = document.querySelector(".diyall-item");
const back_diyall_btn = document.querySelector(".back-diyall-btn");

// ================================
// ITEM 13 - MARKETPLACE PRODUCTS
// ================================

const marketplaceproducts_drop = document.querySelector(
  ".marketplaceproducts-drop"
);
const marketplaceproducts_item = document.querySelector(
  ".marketplaceproducts-item"
);
const back_marketplaceproducts_btn = document.querySelector(
  ".back-marketplaceproducts-btn"
);

// ================================
// ITEM 14 - KETTIE MEISIE
// ================================

const kettie_drop = document.querySelector(".kettie-drop");
const kettie_item = document.querySelector(".kettie-item");
const back_kettie_btn = document.querySelector(".back-kettie-btn");

// ==============================================  TODO:  ADVERTISING & CLIENT ZONE  TODO:

// =========================
// ITEM 1 - SHOPPER ZONE
// =========================

const shopper_drop = document.querySelector(".shopper-drop");
const shopper_item = document.querySelector(".shopper-item");
const back_shopper_btn = document.querySelector(".back-shopper-btn");

// ========================
// ITEM 2 - SELLER ZONE
// ========================

const seller_drop = document.querySelector(".seller-drop");
const seller_item = document.querySelector(".seller-item");
const back_seller_btn = document.querySelector(".back-seller-btn");

// ========================
// ITEM 3 - INVESTOR ZONE
// ========================

// const investor_drop = document.querySelector(".investor-drop");
// const investor_item = document.querySelector(".investor-item");
// const back_investor_btn = document.querySelector(".back-investor-btn");

// =========================
// ITEM 4 - ADVERTISING ZONE
// =========================

const advertising_drop = document.querySelector(".advertising-drop");
const advertising_item = document.querySelector(".advertising-item");
const back_advertising_btn = document.querySelector(".back-advertising-btn");

// =========================================================================================
// FIXME:  LEVEL 2 - CONSTANTS FOR THE 2ND LEVEL ITEMS (WITH DROPDOWNS TO 3RD LEVEL ITEMS)
// =========================================================================================

// =========================================================  TODO:  SUPPORT SERVICES  TODO:

// =======================================================  TODO:  PRODUCT CATEGORIES  TODO:

// ============================================================
// MAIN - MOBILE
// ============================================================

// =====================================
// ITEM 1 - LAPTOPS
// =====================================

const laptops_drop = document.querySelector(".laptops-drop");
const laptops_item = document.querySelector(".laptops-item");
const back_laptops_btn = document.querySelector(".back-laptops-btn");

// =====================================
// ITEM 2 - PHONES
// =====================================

const phones_drop = document.querySelector(".phones-drop");
const phones_item = document.querySelector(".phones-item");
const back_phones_btn = document.querySelector(".back-phones-btn");

// =====================================
// ITEM 3 - TABLETS
// =====================================

const tablets_drop = document.querySelector(".tablets-drop");
const tablets_item = document.querySelector(".tablets-item");
const back_tablets_btn = document.querySelector(".back-tablets-btn");

// =====================================
// ITEM 4 - WATCHES
// =====================================

const watches_drop = document.querySelector(".watches-drop");
const watches_item = document.querySelector(".watches-item");
const back_watches_btn = document.querySelector(".back-watches-btn");

// =====================================
// ITEM 5 - DATA & AIRTIME
// =====================================

const data_drop = document.querySelector(".data-drop");
const data_item = document.querySelector(".data-item");
const back_data_btn = document.querySelector(".back-data-btn");

// =====================================
// ITEM 6 - MOBILE ACCESSORIES
// =====================================

const mobileaccessories_drop = document.querySelector(
  ".mobileaccessories-drop"
);
const mobileaccessories_item = document.querySelector(
  ".mobileaccessories-item"
);
const back_mobileaccessories_btn = document.querySelector(
  ".back-mobileaccessories-btn"
);

// =====================================  FIXME:  END OF MOBILE

// ============================================================
// MAIN - OFFICE
// ============================================================

// =====================================
// ITEM 1 - DESKTOP PC'S
// =====================================

const desktoppc_drop = document.querySelector(".desktoppc-drop");
const desktoppc_item = document.querySelector(".desktoppc-item");
const back_desktoppc_btn = document.querySelector(".back-desktoppc-btn");

// =====================================
// ITEM 2 - PC COMPONENTS
// =====================================

const pccomponents_drop = document.querySelector(".pccomponents-drop");
const pccomponents_item = document.querySelector(".pccomponents-item");
const back_pccomponents_btn = document.querySelector(".back-pccomponents-btn");

// =====================================
// ITEM 3 - PC PERIPHERALS
// =====================================

const pcperipherals_drop = document.querySelector(".pcperipherals-drop");
const pcperipherals_item = document.querySelector(".pcperipherals-item");
const back_pcperipherals_btn = document.querySelector(
  ".back-pcperipherals-btn"
);

// =====================================
// ITEM 4 - SERVERS
// =====================================

const servers_drop = document.querySelector(".servers-drop");
const servers_item = document.querySelector(".servers-item");
const back_servers_btn = document.querySelector(".back-servers-btn");

// =====================================
// ITEM 5 - POINT-OF-SALES (POS)
// =====================================

const pointofsale_drop = document.querySelector(".pointofsale-drop");
const pointofsale_item = document.querySelector(".pointofsale-item");
const back_pointofsale_btn = document.querySelector(".back-pointofsale-btn");

// =====================================
// ITEM 6 - SECURITY & SURVEILLANCE
// =====================================

const securitysurveillance_drop = document.querySelector(
  ".securitysurveillance-drop"
);
const securitysurveillance_item = document.querySelector(
  ".securitysurveillance-item"
);
const back_securitysurveillance_btn = document.querySelector(
  ".back-securitysurveillance-btn"
);

// =====================================
// ITEM 7 - PRINTERS
// =====================================

const printers_drop = document.querySelector(".printers-drop");
const printers_item = document.querySelector(".printers-item");
const back_printers_btn = document.querySelector(".back-printers-btn");

// =====================================
// ITEM 8 - PROJECTORS
// =====================================

const projectors_drop = document.querySelector(".projectors-drop");
const projectors_item = document.querySelector(".projectors-item");
const back_projectors_btn = document.querySelector(".back-projectors-btn");

// =====================================
// ITEM 9 - SOFTWARE
// =====================================

const software_drop = document.querySelector(".software-drop");
const software_item = document.querySelector(".software-item");
const back_software_btn = document.querySelector(".back-software-btn");

// =====================================
// ITEM 10 - OFFICE STATIONERY
// =====================================

const officestationery_drop = document.querySelector(".officestationery-drop");
const officestationery_item = document.querySelector(".officestationery-item");
const back_officestationery_btn = document.querySelector(
  ".back-officestationery-btn"
);

// =====================================
// ITEM 11 - OFFICE FURNITURE
// =====================================

const officefurniture_drop = document.querySelector(".officefurniture-drop");
const officefurniture_item = document.querySelector(".officefurniture-item");
const back_officefurniture_btn = document.querySelector(
  ".back-officefurniture-btn"
);

// =====================================  FIXME:  END OF OFFICE

// ============================================================
// MAIN - HOME
// ============================================================

// =====================================
// ITEM 1 - BATHROOMS
// =====================================

const bathrooms_drop = document.querySelector(".bathrooms-drop");
const bathrooms_item = document.querySelector(".bathrooms-item");
const back_bathrooms_btn = document.querySelector(".back-bathrooms-btn");

// =====================================
// ITEM 2 - BEDROOMS
// =====================================

const bedrooms_drop = document.querySelector(".bedrooms-drop");
const bedrooms_item = document.querySelector(".bedrooms-item");
const back_bedrooms_btn = document.querySelector(".back-bedrooms-btn");

// =====================================
// ITEM 3 - COOKWARE
// =====================================

const cookware_drop = document.querySelector(".cookware-drop");
const cookware_item = document.querySelector(".cookware-item");
const back_cookware_btn = document.querySelector(".back-cookware-btn");

// =====================================
// ITEM 4 - DINING ROOMS
// =====================================

const diningrooms_drop = document.querySelector(".diningrooms-drop");
const diningrooms_item = document.querySelector(".diningrooms-item");
const back_diningrooms_btn = document.querySelector(".back-diningrooms-btn");

// =====================================
// ITEM 5 - KITCHEN
// =====================================

const kitchen_drop = document.querySelector(".kitchen-drop");
const kitchen_item = document.querySelector(".kitchen-item");
const back_kitchen_btn = document.querySelector(".back-kitchen-btn");

// =====================================
// ITEM 6 - LAUNDRY
// =====================================

const laundry_drop = document.querySelector(".laundry-drop");
const laundry_item = document.querySelector(".laundry-item");
const back_laundry_btn = document.querySelector(".back-laundry-btn");

// =====================================
// ITEM 7 - LOUNGE
// =====================================

const lounge_drop = document.querySelector(".lounge-drop");
const lounge_item = document.querySelector(".lounge-item");
const back_lounge_btn = document.querySelector(".back-lounge-btn");

// =====================================
// ITEM 8 - PATIO & POOLS
// =====================================

const patiopools_drop = document.querySelector(".patiopools-drop");
const patiopools_item = document.querySelector(".patiopools-item");
const back_patiopools_btn = document.querySelector(".back-patiopools-btn");

// =====================================
// ITEM 9 - HOME ACCESSORIES
// =====================================

const homeaccessories_drop = document.querySelector(".homeaccessories-drop");
const homeaccessories_item = document.querySelector(".homeaccessories-item");
const back_homeaccessories_btn = document.querySelector(
  ".back-homeaccessories-btn"
);

// =====================================
// ITEM 10 - TELEVISION
// =====================================

const television_drop = document.querySelector(".television-drop");
const television_item = document.querySelector(".television-item");
const back_television_btn = document.querySelector(".back-television-btn");

// ==============================  FIXME:  END OF HOME & LIVING

// ============================================================
// MAIN - HOBBIES
// ============================================================

// =====================================
// ITEM 1 - BOOKS
// =====================================

const booksall_drop = document.querySelector(".booksall-drop");
const booksall_item = document.querySelector(".booksall-item");
const back_booksall_btn = document.querySelector(".back-booksall-btn");

// =====================================
// ITEM 2 - CAMERAS
// =====================================

const camerasall_drop = document.querySelector(".camerasall-drop");
const camerasall_item = document.querySelector(".camerasall-item");
const back_camerasall_btn = document.querySelector(".back-camerasall-btn");

// =====================================
// ITEM 3 - GAMING
// =====================================

const gamingall_drop = document.querySelector(".gamingall-drop");
const gamingall_item = document.querySelector(".gamingall-item");
const back_gamingall_btn = document.querySelector(".back-gamingall-btn");

// =====================================
// ITEM 4 - RADIO CONTROL
// =====================================

const radiocontrol_drop = document.querySelector(".radiocontrol-drop");
const radiocontrol_item = document.querySelector(".radiocontrol-item");
const back_radiocontrol_btn = document.querySelector(".back-radiocontrol-btn");

// =====================================
// ITEM 5 - TOYS
// =====================================

const toysall_drop = document.querySelector(".toysall-drop");
const toysall_item = document.querySelector(".toysall-item");
const back_toysall_btn = document.querySelector(".back-toysall-btn");

// ====================================  FIXME:  END OF HOBBIES

// ============================================================
// MAIN - OUTDOORS
// ============================================================

// =====================================
// ITEM 1 - CAMPING
// =====================================

const camping_drop = document.querySelector(".camping-drop");
const camping_item = document.querySelector(".camping-item");
const back_camping_btn = document.querySelector(".back-camping-btn");

// =====================================
// ITEM 2 - OFF-ROAD VEHICLES
// =====================================

const offroadvehicles_drop = document.querySelector(".offroadvehicles-drop");
const offroadvehicles_item = document.querySelector(".offroadvehicles-item");
const back_offroadvehicles_btn = document.querySelector(
  ".back-offroadvehicles-btn"
);

// =====================================
// ITEM 3 - OUTDOOR GEAR
// =====================================

const outdoorgear_drop = document.querySelector(".outdoorgear-drop");
const outdoorgear_item = document.querySelector(".outdoorgear-item");
const back_outdoorgear_btn = document.querySelector(".back-outdoorgear-btn");

// =====================================
// ITEM 4 - SHOOT & HUNT
// =====================================

const shoothunt_drop = document.querySelector(".shoothunt-drop");
const shoothunt_item = document.querySelector(".shoothunt-item");
const back_shoothunt_btn = document.querySelector(".back-shoothunt-btn");

// =====================================
// ITEM 5 - WATER SPORTS
// =====================================

const watersports_drop = document.querySelector(".watersports-drop");
const watersports_item = document.querySelector(".watersports-item");
const back_watersports_btn = document.querySelector(".back-watersports-btn");

// ===================================  FIXME:  END OF OUTDOORS

// ============================================================
// MAIN - SPORTS
// ============================================================

// =====================================
// ITEM 1 - INDOOR TABLE SPORTS
// =====================================

const tablesports_drop = document.querySelector(".tablesports-drop");
const tablesports_item = document.querySelector(".tablesports-item");
const back_tablesports_btn = document.querySelector(".back-tablesports-btn");

// =====================================  FIXME:  END OF SPORTS

// ============================================================
// MAIN - DIY, TOOLS & MATERIALS
// ============================================================

// =====================================
// ITEM 1 - GARDENING
// =====================================

const diygardening_drop = document.querySelector(".diygardening-drop");
const diygardening_item = document.querySelector(".diygardening-item");
const back_diygardening_btn = document.querySelector(".back-diygardening-btn");

// =====================================
// ITEM 2 - BUILDING MATERIALS
// =====================================

const diymaterials_drop = document.querySelector(".diymaterials-drop");
const diymaterials_item = document.querySelector(".diymaterials-item");
const back_diymaterials_btn = document.querySelector(".back-diymaterials-btn");

// =====================================
// ITEM 3 - TOOLS & MACHINERY
// =====================================

const diytools_drop = document.querySelector(".diytools-drop");
const diytools_item = document.querySelector(".diytools-item");
const back_diytools_btn = document.querySelector(".back-diytools-btn");

// =====================================   FIXME:  END OF DIY

// =====================================
// MAIN: FOOD, BEVERAGES & GROCERIES
// =====================================

// =====================================
// ITEM 1 - FRESH PRODUCE
// =====================================

const freshproduce_drop = document.querySelector(".freshproduce-drop");
const freshproduce_item = document.querySelector(".freshproduce-item");
const back_freshproduce_btn = document.querySelector(".back-freshproduce-btn");

// =====================================
// ITEM 2 - BAKERY
// =====================================

const bakery_drop = document.querySelector(".bakery-drop");
const bakery_item = document.querySelector(".bakery-item");
const back_bakery_btn = document.querySelector(".back-bakery-btn");

// =====================================
// ITEM 3 - DAIRY & EGGS
// =====================================

const dairyeggs_drop = document.querySelector(".dairyeggs-drop");
const dairyeggs_item = document.querySelector(".dairyeggs-item");
const back_dairyeggs_btn = document.querySelector(".back-dairyeggs-btn");

// =====================================
// ITEM 4 - DELI & PARTY
// =====================================

const deliparty_drop = document.querySelector(".deliparty-drop");
const deliparty_item = document.querySelector(".deliparty-item");
const back_deliparty_btn = document.querySelector(".back-deliparty-btn");

// =====================================
// ITEM 5 - MEATS, POULTRY & FISH
// =====================================

const meatspoultryfish_drop = document.querySelector(".meatspoultryfish-drop");
const meatspoultryfish_item = document.querySelector(".meatspoultryfish-item");
const back_meatspoultryfish_btn = document.querySelector(
  ".back-meatspoultryfish-btn"
);

// =====================================
// ITEM 6 - FROZEN FOODS
// =====================================

const frozenfoods_drop = document.querySelector(".frozenfoods-drop");
const frozenfoods_item = document.querySelector(".frozenfoods-item");
const back_frozenfoods_btn = document.querySelector(".back-frozenfoods-btn");

// =====================================
// ITEM 7 - BEVERAGES
// =====================================

const beveragesall_drop = document.querySelector(".beveragesall-drop");
const beveragesall_item = document.querySelector(".beveragesall-item");
const back_beveragesall_btn = document.querySelector(".back-beveragesall-btn");

// =====================================
// ITEM 8 - TOBACCO
// =====================================

const tabacco_drop = document.querySelector(".tabacco-drop");
const tabacco_item = document.querySelector(".tabacco-item");
const back_tabacco_btn = document.querySelector(".back-tabacco-btn");

// =====================================
// ITEM 9 - BEERS, CIDER & SELTZER
// =====================================

const beercider_drop = document.querySelector(".beercider-drop");
const beercider_item = document.querySelector(".beercider-item");
const back_beercider_btn = document.querySelector(".back-beercider-btn");

// =====================================
// ITEM 10 - WINES
// =====================================

const winesall_drop = document.querySelector(".winesall-drop");
const winesall_item = document.querySelector(".winesall-item");
const back_winesall_btn = document.querySelector(".back-winesall-btn");

// =====================================
// ITEM 11 - SPIRITS
// =====================================

const spiritsall_drop = document.querySelector(".spiritsall-drop");
const spiritsall_item = document.querySelector(".spiritsall-item");
const back_spiritsall_btn = document.querySelector(".back-spiritsall-btn");

// =====================================
// ITEM 12 - SNACKS
// =====================================

const snacks_drop = document.querySelector(".snacks-drop");
const snacks_item = document.querySelector(".snacks-item");
const back_snacks_btn = document.querySelector(".back-snacks-btn");

// =====================================
// ITEM 13 - FOOD CUPBOARD
// =====================================

const foodcupboard_drop = document.querySelector(".foodcupboard-drop");
const foodcupboard_item = document.querySelector(".foodcupboard-item");
const back_foodcupboard_btn = document.querySelector(".back-foodcupboard-btn");

// =====================================
// ITEM 14 - BABY CARE
// =====================================

const babycare_drop = document.querySelector(".babycare-drop");
const babycare_item = document.querySelector(".babycare-item");
const back_babycare_btn = document.querySelector(".back-babycare-btn");

// =====================================
// ITEM 15 - PET CARE
// =====================================

const petcare_drop = document.querySelector(".petcare-drop");
const petcare_item = document.querySelector(".petcare-item");
const back_petcare_btn = document.querySelector(".back-petcare-btn");

// =====================================
// ITEM 16 - BRAAI & OUTDOORS
// =====================================

const braaioutdoors_drop = document.querySelector(".braaioutdoors-drop");
const braaioutdoors_item = document.querySelector(".braaioutdoors-item");
const back_braaioutdoors_btn = document.querySelector(
  ".back-braaioutdoors-btn"
);

// =====================================   FIXME:  END OF FOOD & BEVERAGES

// ============================================
// MAIN: CLOTHING & FOOTWEAR - FIXME:  LADIES
// ============================================

const ladiesgroup_drop = document.querySelector(".ladiesgroup-drop");
const ladiesgroup_item = document.querySelector(".ladiesgroup-item");
const back_ladiesgroup_btn = document.querySelector(".back-ladiesgroup-btn");

// ============================================
// MAIN: CLOTHING & FOOTWEAR - FIXME:  MENS
// ============================================

const mensgroup_drop = document.querySelector(".mensgroup-drop");
const mensgroup_item = document.querySelector(".mensgroup-item");
const back_mensgroup_btn = document.querySelector(".back-mensgroup-btn");

// ============================================
// MAIN: CLOTHING & FOOTWEAR - FIXME:  KIDS
// ============================================

const kidsgroup_drop = document.querySelector(".kidsgroup-drop");
const kidsgroup_item = document.querySelector(".kidsgroup-item");
const back_kidsgroup_btn = document.querySelector(".back-kidsgroup-btn");

// =====================================   FIXME:  END OF CLOTHING & FOOTWEAR

// ================================================  TODO:  ADVERTISING & CLIENT ZONE  TODO:

// =========================================================================================
// FIXME:  LEVEL 3 - CONSTANTS FOR THE 3RD LEVEL ITEMS (WITH DROPDOWNS TO 4TH LEVEL ITEMS)
// =========================================================================================

// =========================================================  TODO:  SUPPORT SERVICES  TODO:

// =======================================================  TODO:  PRODUCT CATEGORIES  TODO:

// ============================================
// SUB: CLOTHING & FOOTWEAR - FIXME:  LADIES
// ============================================

// ============================================
// SUB-ITEM 1 - SHOES
// ============================================

const ladiesshoes_drop = document.querySelector(".ladiesshoes-drop");
const ladiesshoes_item = document.querySelector(".ladiesshoes-item");
const back_ladiesshoes_btn = document.querySelector(".back-ladiesshoes-btn");

// ============================================
// SUB-ITEM 2 - BOTTOMS
// ============================================

const ladiesbottoms_drop = document.querySelector(".ladiesbottoms-drop");
const ladiesbottoms_item = document.querySelector(".ladiesbottoms-item");
const back_ladiesbottoms_btn = document.querySelector(
  ".back-ladiesbottoms-btn"
);

// ============================================
// SUB-ITEM 3 - DRESSES
// ============================================

const ladiesdresses_drop = document.querySelector(".ladiesdresses-drop");
const ladiesdresses_item = document.querySelector(".ladiesdresses-item");
const back_ladiesdresses_btn = document.querySelector(
  ".back-ladiesdresses-btn"
);

// ============================================
// SUB-ITEM 4 - TOPS
// ============================================

const ladiestops_drop = document.querySelector(".ladiestops-drop");
const ladiestops_item = document.querySelector(".ladiestops-item");
const back_ladiestops_btn = document.querySelector(".back-ladiestops-btn");

// ============================================
// SUB-ITEM 5 - JACKETS & COATS
// ============================================

const ladiesjackets_drop = document.querySelector(".ladiesjackets-drop");
const ladiesjackets_item = document.querySelector(".ladiesjackets-item");
const back_ladiesjackets_btn = document.querySelector(
  ".back-ladiesjackets-btn"
);

// ============================================
// SUB-ITEM 6 - LINGERIE & SLEEPWEAR
// ============================================

const ladieslingerie_drop = document.querySelector(".ladieslingerie-drop");
const ladieslingerie_item = document.querySelector(".ladieslingerie-item");
const back_ladieslingerie_btn = document.querySelector(
  ".back-ladieslingerie-btn"
);

// ============================================
// SUB-ITEM 7 - SPORTS
// ============================================

const ladiessports_drop = document.querySelector(".ladiessports-drop");
const ladiessports_item = document.querySelector(".ladiessports-item");
const back_ladiessports_btn = document.querySelector(".back-ladiessports-btn");

// ============================================
// SUB-ITEM 8 - SWIMWEAR
// ============================================

const ladiesswimwear_drop = document.querySelector(".ladiesswimwear-drop");
const ladiesswimwear_item = document.querySelector(".ladiesswimwear-item");
const back_ladiesswimwear_btn = document.querySelector(
  ".back-ladiesswimwear-btn"
);

// ============================================
// SUB-ITEM 9 - LADIES ACCESSORIES
// ============================================

const ladiesaccessories_drop = document.querySelector(
  ".ladiesaccessories-drop"
);
const ladiesaccessories_item = document.querySelector(
  ".ladiesaccessories-item"
);
const back_ladiesaccessories_btn = document.querySelector(
  ".back-ladiesaccessories-btn"
);

// ============================================
// SUB-ITEM 10 - BEAUTY PRODUCTS
// ============================================

const ladiesbeauty_drop = document.querySelector(".ladiesbeauty-drop");
const ladiesbeauty_item = document.querySelector(".ladiesbeauty-item");
const back_ladiesbeauty_btn = document.querySelector(".back-ladiesbeauty-btn");

// ============================================
// SUB: CLOTHING & FOOTWEAR - FIXME:  MENS
// ============================================

// ============================================
// SUB-ITEM 1 - SHOES
// ============================================

const mensshoes_drop = document.querySelector(".mensshoes-drop");
const mensshoes_item = document.querySelector(".mensshoes-item");
const back_mensshoes_btn = document.querySelector(".back-mensshoes-btn");

// ============================================
// SUB-ITEM 2 - BOTTOMS
// ============================================

const mensbottoms_drop = document.querySelector(".mensbottoms-drop");
const mensbottoms_item = document.querySelector(".mensbottoms-item");
const back_mensbottoms_btn = document.querySelector(".back-mensbottoms-btn");

// ============================================
// SUB-ITEM 3 - FORMAL WEAR
// ============================================

const mensformalwear_drop = document.querySelector(".mensformalwear-drop");
const mensformalwear_item = document.querySelector(".mensformalwear-item");
const back_mensformalwear_btn = document.querySelector(
  ".back-mensformalwear-btn"
);

// ============================================
// SUB-ITEM 4 - TOPS
// ============================================

const menstops_drop = document.querySelector(".menstops-drop");
const menstops_item = document.querySelector(".menstops-item");
const back_menstops_btn = document.querySelector(".back-menstops-btn");

// ============================================
// SUB-ITEM 5 - JACKETS & COATS
// ============================================

const mensjackets_drop = document.querySelector(".mensjackets-drop");
const mensjackets_item = document.querySelector(".mensjackets-item");
const back_mensjackets_btn = document.querySelector(".back-mensjackets-btn");

// ============================================
// SUB-ITEM 6 - UNDERWEAR & SLEEPWEAR
// ============================================

const mensunderwear_drop = document.querySelector(".mensunderwear-drop");
const mensunderwear_item = document.querySelector(".mensunderwear-item");
const back_mensunderwear_btn = document.querySelector(
  ".back-mensunderwear-btn"
);

// ============================================
// SUB-ITEM 7 - SPORTS
// ============================================

const menssports_drop = document.querySelector(".menssports-drop");
const menssports_item = document.querySelector(".menssports-item");
const back_menssports_btn = document.querySelector(".back-menssports-btn");

// ============================================
// SUB-ITEM 8 - SWIMWEAR
// ============================================

const mensswimwear_drop = document.querySelector(".mensswimwear-drop");
const mensswimwear_item = document.querySelector(".mensswimwear-item");
const back_mensswimwear_btn = document.querySelector(".back-mensswimwear-btn");

// ============================================
// SUB-ITEM 9 - MENS ACCESSORIES
// ============================================

const mensaccessories_drop = document.querySelector(".mensaccessories-drop");
const mensaccessories_item = document.querySelector(".mensaccessories-item");
const back_mensaccessories_btn = document.querySelector(
  ".back-mensaccessories-btn"
);

// ============================================
// SUB-ITEM 10 - MENS GROOMING PRODUCTS
// ============================================

const mensgrooming_drop = document.querySelector(".mensgrooming-drop");
const mensgrooming_item = document.querySelector(".mensgrooming-item");
const back_mensgrooming_btn = document.querySelector(".back-mensgrooming-btn");

// ============================================
// SUB: CLOTHING & FOOTWEAR - FIXME:  KIDS
// ============================================

// ============================================
// SUB-ITEM 1 - BABY GIRLS (0-2 YEARS)
// ============================================

const babygirls_drop = document.querySelector(".babygirls-drop");
const babygirls_item = document.querySelector(".babygirls-item");
const back_babygirls_btn = document.querySelector(".back-babygirls-btn");

// ============================================
// SUB-ITEM 2 - BABY BOYS (0-2 YEARS)
// ============================================

const babyboys_drop = document.querySelector(".babyboys-drop");
const babyboys_item = document.querySelector(".babyboys-item");
const back_babyboys_btn = document.querySelector(".back-babyboys-btn");

// ============================================
// SUB-ITEM 3 - GIRLS (2-8 YEARS)
// ============================================

const girlstwoeight_drop = document.querySelector(".girlstwoeight-drop");
const girlstwoeight_item = document.querySelector(".girlstwoeight-item");
const back_girlstwoeight_btn = document.querySelector(
  ".back-girlstwoeight-btn"
);

// ============================================
// SUB-ITEM 4 - BOYS (2-8 YEARS)
// ============================================

const boystwoeight_drop = document.querySelector(".boystwoeight-drop");
const boystwoeight_item = document.querySelector(".boystwoeight-item");
const back_boystwoeight_btn = document.querySelector(".back-boystwoeight-btn");

// ============================================
// SUB-ITEM 5 - GIRLS (8 - 16 YEARS)
// ============================================

const girlseightsixteen_drop = document.querySelector(
  ".girlseightsixteen-drop"
);
const girlseightsixteen_item = document.querySelector(
  ".girlseightsixteen-item"
);
const back_girlseightsixteen_btn = document.querySelector(
  ".back-girlseightsixteen-btn"
);

// ============================================
// SUB-ITEM 6 - BOYS (8 - 16 YEARS)
// ============================================

const boyseightsixteen_drop = document.querySelector(".boyseightsixteen-drop");
const boyseightsixteen_item = document.querySelector(".boyseightsixteen-item");
const back_boyseightsixteen_btn = document.querySelector(
  ".back-boyseightsixteen-btn"
);

// ================================================  TODO:  ADVERTISING & CLIENT ZONE  TODO:

// =========================================================================================
// FIXME:  LEVEL 4 - CONSTANTS FOR THE 4TH LEVEL ITEMS (WITH DROPDOWNS TO 5TH LEVEL ITEMS)
// =========================================================================================

// =========================================================  TODO:  SUPPORT SERVICES  TODO:

// =======================================================  TODO:  PRODUCT CATEGORIES  TODO:

// ================================================  TODO:  ADVERTISING & CLIENT ZONE  TODO:

// =========================================================================================
// FIXME:  LEVEL 5 - CONSTANTS FOR THE 5TH LEVEL ITEMS (NO FURTHER LEVELS)
// =========================================================================================

// ==========================================================  TODO:  SUPPORT SERVICES  TODO:

// ========================================================  TODO:  PRODUCT CATEGORIES  TODO:

// =================================================  TODO:  ADVERTISING & CLIENT ZONE  TODO:

// =================================================================================================================================
// ========================================================================================  FIXME:  PART 2 - BUTTON CLICK ACTIONS
// =================================================================================================================================

// =========================================================================================
// TODO:  INDICATE WHAT HAPPENS ON "BUTTON-CLICKS" TO ACCESS EACH LEVEL OF THE NAVIGATION
// =========================================================================================

// =========================================================================================
// FIXME:  BUTTON-CLICK ACTIONS - TOP lEVEL NAVIGATION
// =========================================================================================

// =========================================================  TODO:  SUPPORT SERVICES  TODO:

supportservicesdrop_btn.onclick = () => {
  supportservicesmenu_wrapper.classList.toggle("show");
  supportservicestooltip.classList.toggle("show");
};

// ======================================================  TODO:  PRODUCT CATEGORIES  TODO:

productsdrop_btn.onclick = () => {
  productsmenu_wrapper.classList.toggle("show");
  productstooltip.classList.toggle("show");
};

// ===============================================  TODO:  ADVERTISING & CLIENT ZONE  TODO:

clientzonedrop_btn.onclick = () => {
  clientzonemenu_wrapper.classList.toggle("show");
  clientzonetooltip.classList.toggle("show");
};

// ========================================================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 1 NAVIGATION
// ========================================================================================

// ========================================================  TODO:  SUPPORT SERVICES  TODO:

// ================================
// ITEM 1 - SELLING PLANS
// ================================

sellingplans_item.onclick = () => {
  supportservicesmenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    sellingplans_drop.style.display = "block";
  }, 100);
};

back_sellingplans_btn.onclick = () => {
  supportservicesmenu_bar.style.marginLeft = "0rem";
  sellingplans_drop.style.display = "none";
};

// ================================
// ITEM 2 - INVESTING PLANS
// ================================

// investingplans_item.onclick = () => {
//   supportservicesmenu_bar.style.marginLeft = "-26rem";
//   setTimeout(() => {
//     investingplans_drop.style.display = "block";
//   }, 100);
// };

// back_investingplans_btn.onclick = () => {
//   supportservicesmenu_bar.style.marginLeft = "0rem";
//   investingplans_drop.style.display = "none";
// };

// ================================
// ITEM 3 - SKYNAMO CRM
// ================================

skynamo_item.onclick = () => {
  supportservicesmenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    skynamo_drop.style.display = "block";
  }, 100);
};

back_skynamo_btn.onclick = () => {
  supportservicesmenu_bar.style.marginLeft = "0rem";
  skynamo_drop.style.display = "none";
};

// ================================
// ITEM 4 - A TO Z WHISTLEBLOWING
// ================================

whistleblowing_item.onclick = () => {
  supportservicesmenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    whistleblowing_drop.style.display = "block";
  }, 100);
};

back_whistleblowing_btn.onclick = () => {
  supportservicesmenu_bar.style.marginLeft = "0rem";
  whistleblowing_drop.style.display = "none";
};

// ================================
// ITEM 5 - GENERAL SERVICES
// ================================

generalservices_item.onclick = () => {
  supportservicesmenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    generalservices_drop.style.display = "block";
  }, 100);
};

back_generalservices_btn.onclick = () => {
  supportservicesmenu_bar.style.marginLeft = "0rem";
  generalservices_drop.style.display = "none";
};

// ================================
// ITEM 6 - PROFESSIONAL SERVICES
// ================================

professionalservices_item.onclick = () => {
  supportservicesmenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    professionalservices_drop.style.display = "block";
  }, 100);
};

back_professionalservices_btn.onclick = () => {
  supportservicesmenu_bar.style.marginLeft = "0rem";
  professionalservices_drop.style.display = "none";
};

// ============================================================  TODO:  PRODUCT CATEGORIES  TODO:

// =====================================
// ITEM 1 - ENERGY
// =====================================

energy_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    energy_drop.style.display = "block";
  }, 100);
};

back_energy_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "0rem";
  energy_drop.style.display = "none";
};

// =====================================
// ITEM 2 - MOBILE
// =====================================

mobile_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    mobile_drop.style.display = "block";
  }, 100);
};

back_mobile_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "0rem";
  mobile_drop.style.display = "none";
};

// =====================================
// ITEM 3 - OFFICE
// =====================================

office_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    office_drop.style.display = "block";
  }, 100);
};

back_office_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "0rem";
  office_drop.style.display = "none";
};

// =====================================
// ITEM 4 - HOME
// =====================================

homeliving_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    homeliving_drop.style.display = "block";
  }, 100);
};

back_homeliving_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "0rem";
  homeliving_drop.style.display = "none";
};

// =====================================
// ITEM 5 - HOBBIES
// =====================================

hobbies_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    hobbies_drop.style.display = "block";
  }, 100);
};

back_hobbies_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "0rem";
  hobbies_drop.style.display = "none";
};

// =====================================
// ITEM 6 - SPORTS
// =====================================

sports_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    sports_drop.style.display = "block";
  }, 100);
};

back_sports_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "0rem";
  sports_drop.style.display = "none";
};

// =====================================
// ITEM 7 - OUTDOORS
// =====================================

outdoors_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    outdoors_drop.style.display = "block";
  }, 100);
};

back_outdoors_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "0rem";
  outdoors_drop.style.display = "none";
};

/// =====================================
// ITEM 8 - EMERGENCY
// ======================================

emergency_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    emergency_drop.style.display = "block";
  }, 100);
};

back_emergency_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "0rem";
  emergency_drop.style.display = "none";
};

// =====================================
// ITEM 9 - FOOD, BEVERAGES & GROCERIES
// =====================================

groceries_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    groceries_drop.style.display = "block";
  }, 100);
};

back_groceries_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "0rem";
  groceries_drop.style.display = "none";
};

// =====================================
// ITEM 10 - CLOTHING & FOOTWEAR
// =====================================

clothingfootwear_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    clothingfootwear_drop.style.display = "block";
  }, 100);
};

back_clothingfootwear_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "0rem";
  clothingfootwear_drop.style.display = "none";
};

// =====================================
// ITEM 11 - COVID-19, CLEANING AND PPE
// =====================================

covid19_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    covid19_drop.style.display = "block";
  }, 100);
};

back_covid19_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "0rem";
  covid19_drop.style.display = "none";
};

// =====================================
// ITEM 12 - DIY, TOOLS & MATERIALS
// =====================================

diyall_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    diyall_drop.style.display = "block";
  }, 100);
};

back_diyall_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "0rem";
  diyall_drop.style.display = "none";
};

// ================================
// ITEM 13 - MARKETPLACE PRODUCTS
// ================================

marketplaceproducts_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    marketplaceproducts_drop.style.display = "block";
  }, 100);
};

back_marketplaceproducts_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "0rem";
  marketplaceproducts_drop.style.display = "none";
};

// ================================
// ITEM 14 - KETTIE MEISIE
// ================================

kettie_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    kettie_drop.style.display = "block";
  }, 100);
};

back_kettie_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "0rem";
  kettie_drop.style.display = "none";
};

// ================================================  TODO:  ADVERTISING & CLIENT ZONE  TODO:

// =========================
// ITEM 1 - SHOPPER ZONE
// =========================

shopper_item.onclick = () => {
  clientzonemenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    shopper_drop.style.display = "block";
  }, 100);
};

back_shopper_btn.onclick = () => {
  clientzonemenu_bar.style.marginLeft = "0rem";
  shopper_drop.style.display = "none";
};

// ========================
// ITEM 2 - SELLER ZONE
// ========================

seller_item.onclick = () => {
  clientzonemenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    seller_drop.style.display = "block";
  }, 100);
};

back_seller_btn.onclick = () => {
  clientzonemenu_bar.style.marginLeft = "0rem";
  seller_drop.style.display = "none";
};

// ========================
// ITEM 3 - INVESTOR ZONE
// ========================

// investor_item.onclick = () => {
//   clientzonemenu_bar.style.marginLeft = "-26rem";
//   setTimeout(() => {
//     investor_drop.style.display = "block";
//   }, 100);
// };

// back_investor_btn.onclick = () => {
//   clientzonemenu_bar.style.marginLeft = "0rem";
//   investor_drop.style.display = "none";
// };

// ==========================
// ITEM 4 - ADVERTISING ZONE
// ==========================

advertising_item.onclick = () => {
  clientzonemenu_bar.style.marginLeft = "-26rem";
  setTimeout(() => {
    advertising_drop.style.display = "block";
  }, 100);
};

back_advertising_btn.onclick = () => {
  clientzonemenu_bar.style.marginLeft = "0rem";
  advertising_drop.style.display = "none";
};

// =========================================================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 2 NAVIGATION
// =========================================================================================

// =========================================================  TODO:  SUPPORT SERVICES  TODO:

// =======================================================  TODO:  PRODUCT CATEGORIES  TODO:

// ============================================================
// MAIN - MOBILE
// ============================================================

// =====================================
// ITEM 1 - LAPTOPS
// =====================================

laptops_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    laptops_drop.style.display = "block";
  }, 100);
};

back_laptops_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  laptops_drop.style.display = "none";
};

// =====================================
// ITEM 2 - PHONES
// =====================================

phones_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    phones_drop.style.display = "block";
  }, 100);
};

back_phones_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  phones_drop.style.display = "none";
};

// =====================================
// ITEM 3 - TABLETS
// =====================================

tablets_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    tablets_drop.style.display = "block";
  }, 100);
};

back_tablets_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  tablets_drop.style.display = "none";
};

// =====================================
// ITEM 4 - WATCHES
// =====================================

watches_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    watches_drop.style.display = "block";
  }, 100);
};

back_watches_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  watches_drop.style.display = "none";
};

// =====================================
// ITEM 5 - DATA & AIRTIME
// =====================================

data_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    data_drop.style.display = "block";
  }, 100);
};

back_data_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  data_drop.style.display = "none";
};

// =====================================
// ITEM 6 - MOBILE ACCESSORIES
// =====================================

mobileaccessories_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    mobileaccessories_drop.style.display = "block";
  }, 100);
};

back_mobileaccessories_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  mobileaccessories_drop.style.display = "none";
};

// =====================================  FIXME:  END OF MOBILE

// ============================================================
// MAIN - OFFICE
// ============================================================

// =====================================
// ITEM 1 - DESKTOP PC'S
// =====================================

desktoppc_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    desktoppc_drop.style.display = "block";
  }, 100);
};

back_desktoppc_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  desktoppc_drop.style.display = "none";
};

// =====================================
// ITEM 2 - PC COMPONENTS
// =====================================

pccomponents_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    pccomponents_drop.style.display = "block";
  }, 100);
};

back_pccomponents_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  pccomponents_drop.style.display = "none";
};

// =====================================
// ITEM 3 - PC PERIPHERALS
// =====================================

pcperipherals_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    pcperipherals_drop.style.display = "block";
  }, 100);
};

back_pcperipherals_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  pcperipherals_drop.style.display = "none";
};

// =====================================
// ITEM 4 - SERVERS
// =====================================

servers_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    servers_drop.style.display = "block";
  }, 100);
};

back_servers_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  servers_drop.style.display = "none";
};

// =====================================
// ITEM 5 - POINT-OF-SALES (POS)
// =====================================

pointofsale_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    pointofsale_drop.style.display = "block";
  }, 100);
};

back_pointofsale_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  pointofsale_drop.style.display = "none";
};

// =====================================
// ITEM 6 - SECURITY & SURVEILLANCE
// =====================================

securitysurveillance_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    securitysurveillance_drop.style.display = "block";
  }, 100);
};

back_securitysurveillance_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  securitysurveillance_drop.style.display = "none";
};

// =====================================
// ITEM 7 - PRINTERS
// =====================================

printers_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    printers_drop.style.display = "block";
  }, 100);
};

back_printers_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  printers_drop.style.display = "none";
};

// =====================================
// ITEM 8 - PROJECTORS
// =====================================

projectors_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    projectors_drop.style.display = "block";
  }, 100);
};

back_projectors_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  projectors_drop.style.display = "none";
};

// =====================================
// ITEM 9 - SOFTWARE
// =====================================

software_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    software_drop.style.display = "block";
  }, 100);
};

back_software_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  software_drop.style.display = "none";
};

// =====================================
// ITEM 10 - OFFICE STATIONERY
// =====================================

officestationery_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    officestationery_drop.style.display = "block";
  }, 100);
};

back_officestationery_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  officestationery_drop.style.display = "none";
};

// =====================================
// ITEM 11 - OFFICE FURNITURE
// =====================================

officefurniture_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    officefurniture_drop.style.display = "block";
  }, 100);
};

back_officefurniture_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  officefurniture_drop.style.display = "none";
};

// =====================================  FIXME:  END OF OFFICE

// ============================================================
// MAIN - HOME
// ============================================================

// =====================================
// ITEM 1 - BATHROOMS
// =====================================

bathrooms_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    bathrooms_drop.style.display = "block";
  }, 100);
};

back_bathrooms_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  bathrooms_drop.style.display = "none";
};

// =====================================
// ITEM 2 - BEDROOMS
// =====================================

bedrooms_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    bedrooms_drop.style.display = "block";
  }, 100);
};

back_bedrooms_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  bedrooms_drop.style.display = "none";
};

// =====================================
// ITEM 3 - COOKWARE
// =====================================

cookware_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    cookware_drop.style.display = "block";
  }, 100);
};

back_cookware_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  cookware_drop.style.display = "none";
};

// =====================================
// ITEM 4 - DINING ROOMS
// =====================================

diningrooms_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    diningrooms_drop.style.display = "block";
  }, 100);
};

back_diningrooms_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  diningrooms_drop.style.display = "none";
};

// =====================================
// ITEM 5 - KITCHEN
// =====================================

kitchen_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    kitchen_drop.style.display = "block";
  }, 100);
};

back_kitchen_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  kitchen_drop.style.display = "none";
};

// =====================================
// ITEM 6 - LAUNDRY
// =====================================

laundry_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    laundry_drop.style.display = "block";
  }, 100);
};

back_laundry_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  laundry_drop.style.display = "none";
};

// =====================================
// ITEM 7 - LOUNGE
// =====================================

lounge_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    lounge_drop.style.display = "block";
  }, 100);
};

back_lounge_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  lounge_drop.style.display = "none";
};

// =====================================
// ITEM 8 - PATIO & POOLS
// =====================================

patiopools_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    patiopools_drop.style.display = "block";
  }, 100);
};

back_patiopools_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  patiopools_drop.style.display = "none";
};

// =====================================
// ITEM 9 - HOME ACCESSORIES
// =====================================

homeaccessories_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    homeaccessories_drop.style.display = "block";
  }, 100);
};

back_homeaccessories_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  homeaccessories_drop.style.display = "none";
};

// =====================================
// ITEM 10 - TELEVISION
// =====================================

television_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    television_drop.style.display = "block";
  }, 100);
};

back_television_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  television_drop.style.display = "none";
};

// ==============================  FIXME:  END OF HOME

// ============================================================
// MAIN - HOBBIES
// ============================================================

// =====================================
// ITEM 1 - BOOKS
// =====================================

booksall_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    booksall_drop.style.display = "block";
  }, 100);
};

back_booksall_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  booksall_drop.style.display = "none";
};

// =====================================
// ITEM 2 - CAMERAS
// =====================================

camerasall_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    camerasall_drop.style.display = "block";
  }, 100);
};

back_camerasall_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  camerasall_drop.style.display = "none";
};

// =====================================
// ITEM 3 - GAMING
// =====================================

gamingall_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    gamingall_drop.style.display = "block";
  }, 100);
};

back_gamingall_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  gamingall_drop.style.display = "none";
};

// =====================================
// ITEM 4 - RADIO CONTROL
// =====================================

radiocontrol_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    radiocontrol_drop.style.display = "block";
  }, 100);
};

back_radiocontrol_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  radiocontrol_drop.style.display = "none";
};

// =====================================
// ITEM 5 - TOYS
// =====================================

toysall_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    toysall_drop.style.display = "block";
  }, 100);
};

back_toysall_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  toysall_drop.style.display = "none";
};

// ====================================  FIXME:  END OF HOBBIES

// ============================================================
// MAIN - OUTDOORS
// ============================================================

// =====================================
// ITEM 1 - CAMPING
// =====================================

camping_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    camping_drop.style.display = "block";
  }, 100);
};

back_camping_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  camping_drop.style.display = "none";
};

// =====================================
// ITEM 2 - OFF-ROAD VEHICLES
// =====================================

offroadvehicles_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    offroadvehicles_drop.style.display = "block";
  }, 100);
};

back_offroadvehicles_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  offroadvehicles_drop.style.display = "none";
};

// =====================================
// ITEM 3 - OUTDOOR GEAR
// =====================================

outdoorgear_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    outdoorgear_drop.style.display = "block";
  }, 100);
};

back_outdoorgear_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  outdoorgear_drop.style.display = "none";
};

// =====================================
// ITEM 4 - SHOOT & HUNT
// =====================================

shoothunt_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    shoothunt_drop.style.display = "block";
  }, 100);
};

back_shoothunt_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  shoothunt_drop.style.display = "none";
};

// =====================================
// ITEM 5 - WATER SPORTS
// =====================================

watersports_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    watersports_drop.style.display = "block";
  }, 100);
};

back_watersports_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  watersports_drop.style.display = "none";
};

// ===================================  FIXME:  END OF OUTDOORS

// ============================================================
// MAIN - SPORTS
// ============================================================

// =====================================
// ITEM 1 - INDOOR TABLE SPORTS
// =====================================

tablesports_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    tablesports_drop.style.display = "block";
  }, 100);
};

back_tablesports_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  tablesports_drop.style.display = "none";
};

// =====================================  FIXME:  END OF SPORTS

// ============================================================
// MAIN - DIY, TOOLS & MATERIALS
// ============================================================

// =====================================
// ITEM 1 - GARDENING
// =====================================

diygardening_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    diygardening_drop.style.display = "block";
  }, 100);
};

back_diygardening_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  diygardening_drop.style.display = "none";
};

// =====================================
// ITEM 2 - BUILDING MATERIALS
// =====================================

diymaterials_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    diymaterials_drop.style.display = "block";
  }, 100);
};

back_diymaterials_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  diymaterials_drop.style.display = "none";
};

// =====================================
// ITEM 3 - TOOLS
// =====================================

diytools_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    diytools_drop.style.display = "block";
  }, 100);
};

back_diytools_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  diytools_drop.style.display = "none";
};

// =====================================   FIXME:  END OF DIY

// =====================================
// MAIN: FOOD, BEVERAGES & GROCERIES
// =====================================

// =====================================
// ITEM 1 - FRESH PRODUCE
// =====================================

freshproduce_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    freshproduce_drop.style.display = "block";
  }, 100);
};

back_freshproduce_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  freshproduce_drop.style.display = "none";
};

// =====================================
// ITEM 2 - BAKERY
// =====================================

bakery_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    bakery_drop.style.display = "block";
  }, 100);
};

back_bakery_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  bakery_drop.style.display = "none";
};

// =====================================
// ITEM 3 - DAIRY & EGGS
// =====================================

dairyeggs_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    dairyeggs_drop.style.display = "block";
  }, 100);
};

back_dairyeggs_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  dairyeggs_drop.style.display = "none";
};

// =====================================
// ITEM 4 - DELI & PARTY
// =====================================

deliparty_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    deliparty_drop.style.display = "block";
  }, 100);
};

back_deliparty_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  deliparty_drop.style.display = "none";
};

// =====================================
// ITEM 5 - MEATS, POULTRY & FISH
// =====================================

meatspoultryfish_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    meatspoultryfish_drop.style.display = "block";
  }, 100);
};

back_meatspoultryfish_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  meatspoultryfish_drop.style.display = "none";
};

// =====================================
// ITEM 6 - FROZEN FOODS
// =====================================

frozenfoods_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    frozenfoods_drop.style.display = "block";
  }, 100);
};

back_frozenfoods_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  frozenfoods_drop.style.display = "none";
};

// =====================================
// ITEM 7 - BEVERAGES
// =====================================

beveragesall_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    beveragesall_drop.style.display = "block";
  }, 100);
};

back_beveragesall_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  beveragesall_drop.style.display = "none";
};

// =====================================
// ITEM 8 - TOBACCO
// =====================================

tabacco_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    tabacco_drop.style.display = "block";
  }, 100);
};

back_tabacco_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  tabacco_drop.style.display = "none";
};

// =====================================
// ITEM 9 - BEERS, CIDER & SELTZER
// =====================================

beercider_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    beercider_drop.style.display = "block";
  }, 100);
};

back_beercider_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  beercider_drop.style.display = "none";
};

// =====================================
// ITEM 10 - WINES
// =====================================

winesall_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    winesall_drop.style.display = "block";
  }, 100);
};

back_winesall_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  winesall_drop.style.display = "none";
};

// =====================================
// ITEM 11 - SPIRITS
// =====================================

spiritsall_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    spiritsall_drop.style.display = "block";
  }, 100);
};

back_spiritsall_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  spiritsall_drop.style.display = "none";
};

// =====================================
// ITEM 12 - SNACKS
// =====================================

snacks_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    snacks_drop.style.display = "block";
  }, 100);
};

back_snacks_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  snacks_drop.style.display = "none";
};

// =====================================
// ITEM 13 - FOOD CUPBOARD
// =====================================

foodcupboard_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    foodcupboard_drop.style.display = "block";
  }, 100);
};

back_foodcupboard_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  foodcupboard_drop.style.display = "none";
};

// =====================================
// ITEM 14 - BABY CARE
// =====================================

babycare_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    babycare_drop.style.display = "block";
  }, 100);
};

back_babycare_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  babycare_drop.style.display = "none";
};

// =====================================
// ITEM 15 - PET CARE
// =====================================

petcare_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    petcare_drop.style.display = "block";
  }, 100);
};

back_petcare_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  petcare_drop.style.display = "none";
};

// =====================================
// ITEM 16 - BRAAI & OUTDOORS
// =====================================

braaioutdoors_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    braaioutdoors_drop.style.display = "block";
  }, 100);
};

back_braaioutdoors_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  braaioutdoors_drop.style.display = "none";
};

// ============================================
// MAIN: CLOTHING & FOOTWEAR - FIXME:  LADIES
// ============================================

ladiesgroup_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    ladiesgroup_drop.style.display = "block";
  }, 100);
};

back_ladiesgroup_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  ladiesgroup_drop.style.display = "none";
};

// ============================================
// MAIN: CLOTHING & FOOTWEAR - FIXME:  MENS
// ============================================

mensgroup_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    mensgroup_drop.style.display = "block";
  }, 100);
};

back_mensgroup_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  mensgroup_drop.style.display = "none";
};

// ============================================
// MAIN: CLOTHING & FOOTWEAR - FIXME:  KIDS
// ============================================

kidsgroup_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  setTimeout(() => {
    kidsgroup_drop.style.display = "block";
  }, 100);
};

back_kidsgroup_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-26rem";
  kidsgroup_drop.style.display = "none";
};

// ================================================  TODO:  ADVERTISING & CLIENT ZONE  TODO:

// =========================================================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 3 NAVIGATION
// =========================================================================================

// =========================================================  TODO:  SUPPORT SERVICES  TODO:

// =======================================================  TODO:  PRODUCT CATEGORIES  TODO:

// ============================================
// SUB: CLOTHING & FOOTWEAR - FIXME:  LADIES
// ============================================

// ============================================
// SUB-ITEM 1 - SHOES
// ============================================

ladiesshoes_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    ladiesshoes_drop.style.display = "block";
  }, 100);
};

back_ladiesshoes_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  ladiesshoes_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 2 - BOTTOMS
// ============================================

ladiesbottoms_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    ladiesbottoms_drop.style.display = "block";
  }, 100);
};

back_ladiesbottoms_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  ladiesbottoms_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 3 - DRESSES
// ============================================

ladiesdresses_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    ladiesdresses_drop.style.display = "block";
  }, 100);
};

back_ladiesdresses_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  ladiesdresses_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 4 - TOPS
// ============================================

ladiestops_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    ladiestops_drop.style.display = "block";
  }, 100);
};

back_ladiestops_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  ladiestops_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 5 - JACKETS & COATS
// ============================================

ladiesjackets_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    ladiesjackets_drop.style.display = "block";
  }, 100);
};

back_ladiesjackets_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  ladiesjackets_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 6 - LINGERIE & SLEEPWEAR
// ============================================

ladieslingerie_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    ladieslingerie_drop.style.display = "block";
  }, 100);
};

back_ladieslingerie_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  ladieslingerie_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 7 - SPORTS
// ============================================

ladiessports_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    ladiessports_drop.style.display = "block";
  }, 100);
};

back_ladiessports_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  ladiessports_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 8 - SWIMWEAR
// ============================================

ladiesswimwear_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    ladiesswimwear_drop.style.display = "block";
  }, 100);
};

back_ladiesswimwear_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  ladiesswimwear_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 9 - LADIES ACCESSORIES
// ============================================

ladiesaccessories_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    ladiesaccessories_drop.style.display = "block";
  }, 100);
};

back_ladiesaccessories_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  ladiesaccessories_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 10 - BEAUTY PRODUCTS
// ============================================

ladiesbeauty_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    ladiesbeauty_drop.style.display = "block";
  }, 100);
};

back_ladiesbeauty_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  ladiesbeauty_drop.style.display = "none";
};

// ============================================
// SUB: CLOTHING & FOOTWEAR - FIXME:  MENS
// ============================================

// ============================================
// SUB-ITEM 1 - SHOES
// ============================================

mensshoes_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    mensshoes_drop.style.display = "block";
  }, 100);
};

back_mensshoes_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  mensshoes_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 2 - BOTTOMS
// ============================================

mensbottoms_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    mensbottoms_drop.style.display = "block";
  }, 100);
};

back_mensbottoms_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  mensbottoms_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 3 - FORMAL WEAR
// ============================================

mensformalwear_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    mensformalwear_drop.style.display = "block";
  }, 100);
};

back_mensformalwear_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  mensformalwear_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 4 - TOPS
// ============================================

menstops_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    menstops_drop.style.display = "block";
  }, 100);
};

back_menstops_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  menstops_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 5 - JACKETS & COATS
// ============================================

mensjackets_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    mensjackets_drop.style.display = "block";
  }, 100);
};

back_mensjackets_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  mensjackets_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 6 - UNDERWEAR & SLEEPWEAR
// ============================================

mensunderwear_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    mensunderwear_drop.style.display = "block";
  }, 100);
};

back_mensunderwear_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  mensunderwear_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 7 - SPORTS
// ============================================

menssports_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    menssports_drop.style.display = "block";
  }, 100);
};

back_menssports_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  menssports_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 8 - SWIMWEAR
// ============================================

mensswimwear_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    mensswimwear_drop.style.display = "block";
  }, 100);
};

back_mensswimwear_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  mensswimwear_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 9 - MENS ACCESSORIES
// ============================================

mensaccessories_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    mensaccessories_drop.style.display = "block";
  }, 100);
};

back_mensaccessories_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  mensaccessories_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 10 - MENS GROOMING PRODUCTS
// ============================================

mensgrooming_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    mensgrooming_drop.style.display = "block";
  }, 100);
};

back_mensgrooming_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  mensgrooming_drop.style.display = "none";
};

// ============================================
// SUB: CLOTHING & FOOTWEAR - FIXME:  KIDS
// ============================================

// ============================================
// SUB-ITEM 1 - BABY GIRLS (0-2 YEARS)
// ============================================

babygirls_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    babygirls_drop.style.display = "block";
  }, 100);
};

back_babygirls_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  babygirls_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 2 - BABY BOYS (0-2 YEARS)
// ============================================

babyboys_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    babyboys_drop.style.display = "block";
  }, 100);
};

back_babyboys_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  babyboys_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 3 - GIRLS (2-8 YEARS)
// ============================================

girlstwoeight_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    girlstwoeight_drop.style.display = "block";
  }, 100);
};

back_girlstwoeight_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  girlstwoeight_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 4 - BOYS (2-8 YEARS)
// ============================================

boystwoeight_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    boystwoeight_drop.style.display = "block";
  }, 100);
};

back_boystwoeight_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  boystwoeight_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 5 - GIRLS (8 - 16 YEARS)
// ============================================

girlseightsixteen_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    girlseightsixteen_drop.style.display = "block";
  }, 100);
};

back_girlseightsixteen_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  girlseightsixteen_drop.style.display = "none";
};

// ============================================
// SUB-ITEM 6 - BOYS (8 - 16 YEARS)
// ============================================

boyseightsixteen_item.onclick = () => {
  productsmenu_bar.style.marginLeft = "-78rem";
  setTimeout(() => {
    boyseightsixteen_drop.style.display = "block";
  }, 100);
};

back_boyseightsixteen_btn.onclick = () => {
  productsmenu_bar.style.marginLeft = "-52rem";
  boyseightsixteen_drop.style.display = "none";
};

// ================================================  TODO:  ADVERTISING & CLIENT ZONE  TODO:

// =========================================================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 4 NAVIGATION
// =========================================================================================

// =========================================================  TODO:  SUPPORT SERVICES  TODO:

// =======================================================  TODO:  PRODUCT CATEGORIES  TODO:

// ================================================  TODO:  ADVERTISING & CLIENT ZONE  TODO:

// =========================================================================================
// FIXME:  BUTTON-CLICK ACTIONS - lEVEL 5 NAVIGATION
// =========================================================================================

// =========================================================  TODO:  SUPPORT SERVICES  TODO:

// =======================================================  TODO:  PRODUCT CATEGORIES  TODO:

// ================================================  TODO:  ADVERTISING & CLIENT ZONE  TODO:
