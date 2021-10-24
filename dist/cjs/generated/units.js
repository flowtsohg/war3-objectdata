"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitContainer = exports.Units = void 0;
const container_1 = require("../container");
const utils_1 = require("../utils");
const objects = require("./unitsdata.json");
var Units;
(function (Units) {
    Units["AHero"] = "HERO";
    Units["Abomination"] = "uabo";
    Units["Abominationcinematic"] = "uabc";
    Units["Acolyte"] = "uaco";
    Units["Admiralproudmoore"] = "Hapm";
    Units["Airbarge"] = "uarb";
    Units["Akama"] = "Naka";
    Units["Albatross"] = "nalb";
    Units["Alchemist"] = "Nalc";
    Units["AlchemistMorphLevel1"] = "Nalm";
    Units["AlchemistMorphLevel2"] = "Nal2";
    Units["AlchemistMorphLevel3"] = "Nal3";
    Units["AltarOfDarkness"] = "uaod";
    Units["AltarOfElders"] = "eate";
    Units["AltarOfKings"] = "halt";
    Units["AltarOfStorms"] = "oalt";
    Units["Altarofthedepths"] = "nnad";
    Units["AncestralGuardian"] = "oang";
    Units["AncientHydra"] = "nahy";
    Units["AncientOfLore"] = "eaoe";
    Units["AncientOfWar"] = "eaom";
    Units["AncientOfWind"] = "eaow";
    Units["AncientOfWonders"] = "eden";
    Units["AncientProtector"] = "etrp";
    Units["AncientSasquatch"] = "nsqa";
    Units["AncientWendigo"] = "nwna";
    Units["Antonidus"] = "Hant";
    Units["Anubarak"] = "Uanb";
    Units["ApprenticeWizard"] = "nwiz";
    Units["ArachnathidEarthBorer"] = "nane";
    Units["ArcaneSanctum"] = "hars";
    Units["ArcaneTower"] = "hatw";
    Units["ArcaneVault"] = "hvlt";
    Units["Arcaneobservatory"] = "haro";
    Units["Archer"] = "earc";
    Units["Archimonde"] = "Uwar";
    Units["Archmage"] = "Hamg";
    Units["Archmage2"] = "Hjas";
    Units["Arthas"] = "Hart";
    Units["Arthaswithfrostmourne"] = "Harf";
    Units["Assassin"] = "nass";
    Units["AvatarOfVengeance"] = "espv";
    Units["Azurelordfrostwyrm"] = "ubdd";
    Units["Azureloredragon"] = "ubdr";
    Units["Baine"] = "obai";
    Units["Balnazzar"] = "Ubal";
    Units["Bandit"] = "nban";
    Units["BanditLord"] = "nbld";
    Units["Banshee"] = "uban";
    Units["BarbedArachnathid"] = "nanb";
    Units["BarbedArachnathid2"] = "nanm";
    Units["Barracks"] = "hbar";
    Units["Barracks2"] = "obar";
    Units["Barrowden"] = "nbwd";
    Units["Batrider"] = "otbr";
    Units["BattleGolem"] = "narg";
    Units["Battleship"] = "nbsp";
    Units["BearLevel1"] = "ngz1";
    Units["Beastiary"] = "obea";
    Units["Beastmaster"] = "Nbst";
    Units["BerserkElemental"] = "nelb";
    Units["BerserkWildkin"] = "nowk";
    Units["Berserker"] = "otbk";
    Units["Bindstonese"] = "nbse";
    Units["Bindstonesw"] = "nbsw";
    Units["BlackCitadel"] = "unp2";
    Units["BlackDragon"] = "nbwm";
    Units["BlackDragonRoost"] = "ndrk";
    Units["BlackDragonWhelp"] = "nbdr";
    Units["BlackDrake"] = "nbdk";
    Units["BlackSpider"] = "nspb";
    Units["Blackrockblademaster"] = "Nbbc";
    Units["Blacksmith"] = "hbla";
    Units["Blademaster"] = "Obla";
    Units["BloodMage"] = "Hblm";
    Units["BloodWizard"] = "nwzw";
    Units["Bloodelfengineer"] = "nbee";
    Units["Bloodelflieutenant"] = "nbel";
    Units["Bloodelfwagon"] = "hbew";
    Units["Bloodelfworker"] = "nhew";
    Units["Bloodfiend"] = "nfgb";
    Units["Bloodfountain"] = "nbfl";
    Units["BlueDragon"] = "nadr";
    Units["BlueDragonRoost"] = "ndru";
    Units["BlueDragonWhelp"] = "nadw";
    Units["BlueDragonspawnApprentice"] = "nbda";
    Units["BlueDragonspawnMeddler"] = "nbdm";
    Units["BlueDragonspawnOverseer"] = "nbdo";
    Units["BlueDragonspawnSorcerer"] = "nbds";
    Units["BlueDragonspawnWarrior"] = "nbdw";
    Units["BlueDrake"] = "nadk";
    Units["Boneyard"] = "ubon";
    Units["Bookofsummoning"] = "nbsm";
    Units["Bouldertower"] = "nbt1";
    Units["Bouldertowerupgrade"] = "nbt2";
    Units["Brewmaster"] = "Npbm";
    Units["Brigand"] = "nbrg";
    Units["BronzeDragon"] = "nbzd";
    Units["BronzeDragonRoost"] = "ndrz";
    Units["BronzeDragonWhelp"] = "nbzw";
    Units["BronzeDrake"] = "nbzk";
    Units["BroodMother"] = "nsbm";
    Units["BurningArcher"] = "nskf";
    Units["Burrow"] = "otrb";
    Units["BurrowedBarbedArachnathid"] = "nbnb";
    Units["BurrowedCarrionBeetleLevel2"] = "ucsB";
    Units["BurrowedCarrionBeetleLevel3"] = "ucsC";
    Units["BurrowedCryptFiend"] = "ucrm";
    Units["Cairnebloodhoof"] = "Ocbh";
    Units["Cairnebloodhoofcinematic"] = "Otcc";
    Units["Cairnebloodhoofexp"] = "Ocb2";
    Units["Campaignturtle"] = "nhyc";
    Units["CannonTower"] = "hctw";
    Units["CarrionBeetleLevel1"] = "ucs1";
    Units["CarrionBeetleLevel2"] = "ucs2";
    Units["CarrionBeetleLevel3"] = "ucs3";
    Units["Castle"] = "hcas";
    Units["Cenarius"] = "Ecen";
    Units["CentaurArcher"] = "ncea";
    Units["CentaurArcher2"] = "ncef";
    Units["CentaurDrudge"] = "ncer";
    Units["CentaurImpaler"] = "ncim";
    Units["CentaurImpaler2"] = "ncif";
    Units["CentaurKhan"] = "ncnk";
    Units["CentaurOutrunner"] = "ncen";
    Units["CentaurSorcerer"] = "ncks";
    Units["CentaurSorcerer2"] = "nckf";
    Units["CentaurTent"] = "ncnt";
    Units["CentaurTent2"] = "nct1";
    Units["CentaurTent3"] = "nct2";
    Units["Chaosgrunt"] = "nchg";
    Units["Chaoskotobeast"] = "nckb";
    Units["Chaosorcburrow"] = "ocbw";
    Units["Chaospeon"] = "ncpn";
    Units["Chaosspaceorc"] = "zcso";
    Units["Chaoswarlock"] = "nchw";
    Units["Chaoswarlord"] = "owar";
    Units["Chaoswolfrider"] = "nchr";
    Units["Chaplain"] = "nchp";
    Units["Chicken"] = "nech";
    Units["Child"] = "nvlk";
    Units["Child2"] = "nvk2";
    Units["Chimaera"] = "echm";
    Units["ChimaeraRoost"] = "edos";
    Units["CircleOfPower"] = "ncop";
    Units["CircleOfPowerLarge"] = "ncp3";
    Units["CircleOfPowerMedium"] = "ncp2";
    Units["CityBuilding0"] = "ncb0";
    Units["CityBuilding1"] = "ncb1";
    Units["CityBuilding10"] = "ncba";
    Units["CityBuilding11"] = "ncbb";
    Units["CityBuilding12"] = "ncbc";
    Units["CityBuilding13"] = "ncbd";
    Units["CityBuilding14"] = "ncbe";
    Units["CityBuilding15"] = "ncbf";
    Units["CityBuilding2"] = "ncb2";
    Units["CityBuilding3"] = "ncb3";
    Units["CityBuilding4"] = "ncb4";
    Units["CityBuilding5"] = "ncb5";
    Units["CityBuilding6"] = "ncb6";
    Units["CityBuilding7"] = "ncb7";
    Units["CityBuilding8"] = "ncb8";
    Units["CityBuilding9"] = "ncb9";
    Units["ClockwerkGoblin"] = "ncg1";
    Units["ClockwerkGoblin2"] = "ncg2";
    Units["ClockwerkGoblin3"] = "ncg3";
    Units["ClockwerkGoblin4"] = "ncgb";
    Units["Coldtower"] = "ndt1";
    Units["Coldtowerupgrade"] = "ndt2";
    Units["Coralbed"] = "nnfm";
    Units["CorruptedTreant"] = "nenc";
    Units["Corruptedancientofwar"] = "ncaw";
    Units["Corruptedancientprotector"] = "ncap";
    Units["Corruptedmoonwell"] = "ncmw";
    Units["Corruptedtreeofages"] = "ncta";
    Units["Corruptedtreeofeternity"] = "ncte";
    Units["Corruptedtreeoflife"] = "nctl";
    Units["Crab"] = "ncrb";
    Units["Crypt"] = "usep";
    Units["CryptFiend"] = "ucry";
    Units["CryptLord"] = "Ucrl";
    Units["CrystalArachnathid"] = "nanc";
    Units["Dagren"] = "Hdgo";
    Units["Dalaranguardtower"] = "ndgt";
    Units["Dalaranmutant"] = "ndmu";
    Units["Dalaranreject"] = "ndrj";
    Units["DarkMinion"] = "ndr2";
    Units["DarkRanger"] = "Nbrn";
    Units["DarkTroll"] = "ndtr";
    Units["DarkTrollBerserker"] = "ndtb";
    Units["DarkTrollHighPriest"] = "ndth";
    Units["DarkTrollShadowPriest"] = "ndtp";
    Units["DarkTrollTrapper"] = "ndtt";
    Units["DarkTrollWarlord"] = "ndtw";
    Units["DarkWizard"] = "nwzd";
    Units["Darkportalse"] = "ndke";
    Units["Darkportalsw"] = "ndkw";
    Units["DeathKnight"] = "Udea";
    Units["DeathKnight2"] = "Uart";
    Units["DeathKnight3"] = "Udef";
    Units["DeathRevenant"] = "nrvd";
    Units["Deathtower"] = "ntt1";
    Units["Deathtowerupgrade"] = "ntx2";
    Units["Deceiver"] = "nhdc";
    Units["DeeplordRevenant"] = "nlrv";
    Units["DefenderGolem"] = "nggd";
    Units["Defiledfountainoflife"] = "ndfl";
    Units["Demolisher"] = "ocat";
    Units["Demolisherdraenei"] = "ncat";
    Units["DemonHunter"] = "Edem";
    Units["DemonHunterDemonForm"] = "Edmm";
    Units["DemonHuntress"] = "Edef";
    Units["DemonHuntressDemonForm"] = "Edmf";
    Units["Demongate"] = "ndmg";
    Units["Destroyer"] = "ubsp";
    Units["Detheroc"] = "Udth";
    Units["DiabloCart"] = "nccd";
    Units["DireFrostWolf"] = "nwwd";
    Units["DireMammoth"] = "nmdr";
    Units["DireQuilbeastLevel2"] = "nqb2";
    Units["DireWolf"] = "nwld";
    Units["DireWolfLevel2"] = "osw2";
    Units["DiseaseCloud"] = "uplg";
    Units["Dog"] = "ndog";
    Units["DoomGuardStandard"] = "nbal";
    Units["DoomGuardSummoned"] = "nba2";
    Units["DraeneiChieftainsHut"] = "ndch";
    Units["DraeneiDarkslayer"] = "ndrd";
    Units["DraeneiDisciple"] = "ndrm";
    Units["DraeneiGuardian"] = "ndrf";
    Units["DraeneiHarbinger"] = "ndrh";
    Units["DraeneiHut"] = "ndh0";
    Units["DraeneiHut2"] = "ndh1";
    Units["DraeneiProtector"] = "ndrp";
    Units["DraeneiSeer"] = "ndrs";
    Units["DraeneiStalker"] = "ndrt";
    Units["DraeneiVindicator"] = "ndrn";
    Units["DraeneiWatcher"] = "ndrw";
    Units["Draeneihaven"] = "ndh2";
    Units["Draeneilaborer"] = "ndrl";
    Units["Draeneisalamander"] = "ndsa";
    Units["Draeneiseerden"] = "ndh4";
    Units["Draeneiwarriorshall"] = "ndh3";
    Units["DragonHawk"] = "nws1";
    Units["DragonTurtle"] = "ntrd";
    Units["Dragonbuilding"] = "ndrb";
    Units["DragonhawkRider"] = "hdhw";
    Units["Drakthul"] = "odkt";
    Units["Dreadlord"] = "Udre";
    Units["Drekthar"] = "Odrt";
    Units["DruidOfTheClawBearForm"] = "edcm";
    Units["DruidOfTheClawNightElfForm"] = "edoc";
    Units["DruidOfTheTalonNightElfForm"] = "edot";
    Units["DruidOfTheTalonStormCrowForm"] = "edtm";
    Units["Dryad"] = "edry";
    Units["DuneWorm"] = "ndwm";
    Units["DwarfCart"] = "nccr";
    Units["Earth"] = "npn3";
    Units["Earthfurytower"] = "negf";
    Units["ElderHydra"] = "nehy";
    Units["ElderJungleStalker"] = "njga";
    Units["ElderSasquatch"] = "nsqe";
    Units["ElderVoidwalker"] = "nvde";
    Units["ElderWendigo"] = "nwnr";
    Units["Elvenfarm"] = "nefm";
    Units["Elvenfarm0"] = "nef0";
    Units["Elvenfarm1"] = "nef1";
    Units["Elvenfarm2"] = "nef2";
    Units["Elvenfarm3"] = "nef3";
    Units["Elvenfarm4"] = "nef4";
    Units["Elvenfarm5"] = "nef5";
    Units["Elvenfarm6"] = "nef6";
    Units["Elvenfarm7"] = "nef7";
    Units["Elvenfishingvillage0"] = "nfv0";
    Units["Elvenfishingvillage1"] = "nfv1";
    Units["Elvenfishingvillage2"] = "nfv2";
    Units["Elvenfishingvillage3"] = "nfv3";
    Units["Elvenfishingvillage4"] = "nfv4";
    Units["Elvenguardtower"] = "negt";
    Units["Emissary"] = "nemi";
    Units["Energytower"] = "net1";
    Units["Energytowerupgrade"] = "net2";
    Units["Enforcer"] = "nenf";
    Units["Engineergazlowe"] = "negz";
    Units["EnragedElemental"] = "nele";
    Units["EnragedJungleStalker"] = "njgb";
    Units["EnragedWildkin"] = "nowe";
    Units["EntangledGoldMine"] = "egol";
    Units["EredarDiabolist"] = "nerd";
    Units["EredarSorcerer"] = "ners";
    Units["EredarWarlock"] = "nerw";
    Units["Evilarthas"] = "Uear";
    Units["Evilillidan"] = "Eevi";
    Units["Evilillidandemonform"] = "Eevm";
    Units["Evilsylvanas"] = "Usyl";
    Units["FacelessOneDeathbringer"] = "nfod";
    Units["FacelessOneTerror"] = "nfot";
    Units["FacelessOneTrickster"] = "nfor";
    Units["FaerieDragon"] = "efdr";
    Units["FallenPriest"] = "nhfp";
    Units["FarSeer"] = "Ofar";
    Units["FarSeer2"] = "Ofth";
    Units["Farm"] = "hhou";
    Units["FelBeast"] = "npfl";
    Units["FelBoar"] = "nfbr";
    Units["FelRavager"] = "npfm";
    Units["FelStalker"] = "nfel";
    Units["Felguard"] = "nfgu";
    Units["Fire"] = "npn1";
    Units["FireRevenant"] = "nrvf";
    Units["Firelord"] = "Nfir";
    Units["Flametower"] = "nft1";
    Units["Flametowerupgrade"] = "nft2";
    Units["Fleshgolem"] = "nfgl";
    Units["FlyingMachine"] = "hgyr";
    Units["FlyingSheep"] = "nshf";
    Units["Footman"] = "hfoo";
    Units["ForestSpider"] = "nspg";
    Units["ForestTroll"] = "nftr";
    Units["ForestTrollBerserker"] = "nftb";
    Units["ForestTrollHighPriest"] = "nfsh";
    Units["ForestTrollHut"] = "nfh0";
    Units["ForestTrollHut2"] = "nfh1";
    Units["ForestTrollShadowPriest"] = "nfsp";
    Units["ForestTrollTrapper"] = "nftt";
    Units["ForestTrollWarlord"] = "nftk";
    Units["ForgottenOne"] = "nfgo";
    Units["Fortress"] = "ofrt";
    Units["FountainOfHealth"] = "nfoh";
    Units["FountainOfMana"] = "nmoo";
    Units["Frog"] = "nfro";
    Units["FrostRevenant"] = "nrvs";
    Units["FrostWolf"] = "nwwf";
    Units["FrostWyrm"] = "ufro";
    Units["Frostmourne"] = "nfrm";
    Units["Fruitstand"] = "nfrt";
    Units["Furbolg"] = "nfrl";
    Units["FurbolgChampion"] = "nfrg";
    Units["FurbolgElderShaman"] = "nfre";
    Units["FurbolgHut"] = "nfr2";
    Units["FurbolgHut2"] = "nfr1";
    Units["FurbolgShaman"] = "nfrs";
    Units["FurbolgTracker"] = "nfrb";
    Units["FurbolgUrsaWarrior"] = "nfra";
    Units["Furion"] = "Efur";
    Units["GargantuanSeaTurtle"] = "ntrg";
    Units["Gargoyle"] = "ugar";
    Units["Garthok"] = "ogrk";
    Units["Gemstoneobelisk"] = "ngob";
    Units["Ghost"] = "ngh1";
    Units["Ghostlyarchmage"] = "Hgam";
    Units["Ghoul"] = "ugho";
    Units["GiantFrostWolf"] = "nwwg";
    Units["GiantPolarBear"] = "nplg";
    Units["GiantSeaTurtle"] = "ntrt";
    Units["GiantSkeletonWarrior"] = "nskg";
    Units["GiantSpider"] = "nsgt";
    Units["GiantWolf"] = "nwlg";
    Units["GlaiveThrower"] = "ebal";
    Units["Gnoll"] = "ngno";
    Units["GnollAssassin"] = "ngns";
    Units["GnollBrute"] = "ngnb";
    Units["GnollHut"] = "ngnh";
    Units["GnollHut2"] = "ngt2";
    Units["GnollOverseer"] = "ngnv";
    Units["GnollPoacher"] = "ngna";
    Units["GnollWarden"] = "ngnw";
    Units["GnollWarlord"] = "ngow";
    Units["GoblinLaboratory"] = "ngad";
    Units["GoblinLandMine"] = "nglm";
    Units["GoblinMerchant"] = "ngme";
    Units["GoblinShipyard"] = "nshp";
    Units["Goblinblaster"] = "ngbl";
    Units["GoldMine"] = "ngol";
    Units["GrainWarehouse"] = "ngwr";
    Units["GraniteGolem"] = "nggr";
    Units["Graveyard"] = "ugrv";
    Units["GreatHall"] = "ogre";
    Units["GreaterDarkMinion"] = "ndr3";
    Units["GreaterVoidwalker"] = "nvdg";
    Units["GreenDragon"] = "ngrd";
    Units["GreenDragonRoost"] = "ndrg";
    Units["GreenDragonWhelp"] = "ngrw";
    Units["GreenDrake"] = "ngdk";
    Units["Gromhellscream"] = "Ogrh";
    Units["Grunt"] = "ogru";
    Units["GryphonAviary"] = "hgra";
    Units["GryphonRider"] = "hgry";
    Units["GuardDog"] = "ngog";
    Units["GuardTower"] = "hgtw";
    Units["GuardianGolem"] = "nggg";
    Units["Guldan"] = "Ogld";
    Units["Halahk"] = "Hhkl";
    Units["HallsOfTheDead"] = "unp1";
    Units["HarpyNest"] = "nhns";
    Units["HarpyNest2"] = "nhn2";
    Units["HarpyQueen"] = "nhrq";
    Units["HarpyRogue"] = "nhrr";
    Units["HarpyScout"] = "nhar";
    Units["HarpyStormHag"] = "nhrh";
    Units["HarpyWindwitch"] = "nhrw";
    Units["HauntedGoldMine"] = "ugol";
    Units["HawkLevel1"] = "nwe1";
    Units["Headhunter"] = "ohun";
    Units["HealingWard"] = "ohwd";
    Units["Heretic"] = "nhhr";
    Units["HermitCrab"] = "nhmc";
    Units["HighElfArchmage"] = "Haah";
    Units["HighKing"] = "Hssa";
    Units["Highelfbarracks"] = "nheb";
    Units["Highelvenarcher"] = "nhea";
    Units["Highelvenfemale"] = "nhef";
    Units["Highelvenmale"] = "nhem";
    Units["Highelvenswordsman"] = "hhes";
    Units["Hippogryph"] = "ehip";
    Units["HippogryphRider"] = "ehpr";
    Units["Hornofcenarius"] = "nhcn";
    Units["HumanBattleship"] = "hbsh";
    Units["HumanFrigate"] = "hdes";
    Units["HumanShipyard"] = "hshy";
    Units["HumanTransportShip"] = "hbot";
    Units["HuntersHall"] = "edob";
    Units["Huntress"] = "esen";
    Units["Hydra"] = "nhyd";
    Units["HydraHatchling"] = "nhyh";
    Units["Hydralisk"] = "zhyd";
    Units["Hydromancer"] = "nhym";
    Units["IceRevenant"] = "nrvi";
    Units["IceTroll"] = "nitr";
    Units["IceTrollBerserker"] = "nits";
    Units["IceTrollHighPriest"] = "nith";
    Units["IceTrollHut"] = "nth1";
    Units["IceTrollHut2"] = "nth0";
    Units["IceTrollPriest"] = "nitp";
    Units["IceTrollTrapper"] = "nitt";
    Units["IceTrollWarlord"] = "nitw";
    Units["Icecrownobelisk"] = "nico";
    Units["IcetuskMammoth"] = "nmit";
    Units["IcyTreasureBox"] = "nitb";
    Units["Illidan"] = "Eill";
    Units["Illidandemonform"] = "Eidm";
    Units["Illidanmorphed"] = "Eilm";
    Units["Illidanwagon"] = "eilw";
    Units["InfectedGranary"] = "ngni";
    Units["Infernal"] = "ninf";
    Units["InfernalContraption"] = "ninc";
    Units["InfernalJuggernaut"] = "nina";
    Units["InfernalMachine"] = "ninm";
    Units["Jailorkassan"] = "njks";
    Units["Jaina"] = "Hjai";
    Units["Juggernaut"] = "ojgn";
    Units["JungleStalker"] = "njg1";
    Units["Kael"] = "Hkal";
    Units["Keep"] = "hkee";
    Units["KeeperOfTheGrove"] = "Ekee";
    Units["KeeperOfTheGrove2"] = "Ekce";
    Units["Keeperofthegroveghost"] = "Ekgg";
    Units["Kelthuzadghost"] = "uktg";
    Units["Kelthuzadlich"] = "Uktl";
    Units["Kelthuzadlichcinematic"] = "Uclc";
    Units["Kelthuzadnecro"] = "uktn";
    Units["Kiljaeden"] = "Nklj";
    Units["Kiljaedencinematic"] = "Nkjx";
    Units["Knight"] = "hkni";
    Units["Kobold"] = "nkob";
    Units["KoboldGeomancer"] = "nkog";
    Units["KoboldTaskmaster"] = "nkol";
    Units["KoboldTunneler"] = "nkot";
    Units["KodoBeast"] = "okod";
    Units["Kotobeastnorider"] = "oosc";
    Units["Ladyvashj"] = "Hvsh";
    Units["LavaSpawnLevel1"] = "nlv1";
    Units["LavaSpawnLevel2"] = "nlv2";
    Units["LavaSpawnLevel3"] = "nlv3";
    Units["LesserDarkMinion"] = "ndr1";
    Units["LesserVoidwalker"] = "nvdl";
    Units["Lich"] = "Ulic";
    Units["Lichking"] = "nzlc";
    Units["LightningLizard"] = "nltl";
    Units["LightningRevenant"] = "nrvl";
    Units["Locust"] = "uloc";
    Units["Lordgarithos"] = "Hlgr";
    Units["LumberMill"] = "hlum";
    Units["MagicVault"] = "nmgv";
    Units["MagnataurDestroyer"] = "nmgd";
    Units["MagnataurReaver"] = "nmgr";
    Units["MagnataurWarrior"] = "nmgw";
    Units["Magtheridon"] = "Nmag";
    Units["MaidenOfPain"] = "ndqp";
    Units["Maiev"] = "Ewrd";
    Units["MakruraDeepseer"] = "nlds";
    Units["MakruraPooldweller"] = "nlpd";
    Units["MakruraPrawn"] = "nlpr";
    Units["MakruraSnapper"] = "nlsn";
    Units["MakruraTidalLord"] = "nlkl";
    Units["MakruraTidecaller"] = "nltc";
    Units["Malfurion"] = "Emfr";
    Units["Malfurionnostag"] = "Emns";
    Units["Malganis"] = "Umal";
    Units["Mammoth"] = "nmam";
    Units["Mannoroth"] = "Nman";
    Units["Margoth"] = "Hmgd";
    Units["Marine"] = "zmar";
    Units["Marketplace"] = "nmrk";
    Units["MasterSwordsman"] = "Hddt";
    Units["Mathog"] = "omtg";
    Units["MeatWagon"] = "umtw";
    Units["Medivh"] = "nmed";
    Units["Medivhmorphed"] = "nmdm";
    Units["MercenaryCampAshenvale"] = "nmr5";
    Units["MercenaryCampBarrens"] = "nmr4";
    Units["MercenaryCampBlackCitadel"] = "nmrf";
    Units["MercenaryCampCityscape"] = "nmr8";
    Units["MercenaryCampDalaran"] = "nmr9";
    Units["MercenaryCampDungeon"] = "nmra";
    Units["MercenaryCampFelwood"] = "nmr6";
    Units["MercenaryCampIcecrownGlacier"] = "nmrd";
    Units["MercenaryCampLordaeronFall"] = "nmr2";
    Units["MercenaryCampLordaeronSummer"] = "nmer";
    Units["MercenaryCampLordaeronWinter"] = "nmr3";
    Units["MercenaryCampNorthrend"] = "nmr7";
    Units["MercenaryCampOutland"] = "nmre";
    Units["MercenaryCampSunkenRuins"] = "nmrc";
    Units["MercenaryCampUnderground"] = "nmrb";
    Units["MercenaryCampVillage"] = "nmr0";
    Units["Militia"] = "hmil";
    Units["Misha"] = "nmsh";
    Units["Misha1"] = "ngzc";
    Units["Misha2"] = "ngzd";
    Units["Misha3"] = "ngza";
    Units["Misha4"] = "ngz4";
    Units["MonsterLure"] = "nlur";
    Units["MoonWell"] = "emow";
    Units["MortarTeam"] = "hmtm";
    Units["MossCoveredGraniteGolem"] = "nggm";
    Units["MountainGiant"] = "emtg";
    Units["MountainKing"] = "Hmkg";
    Units["MudGolem"] = "ngrk";
    Units["Muradinbronzebeard"] = "Hmbr";
    Units["MurgulBloodGill"] = "nmbg";
    Units["MurgulCliffrunner"] = "nmcf";
    Units["MurgulHut0"] = "nmg0";
    Units["MurgulHut1"] = "nmg1";
    Units["MurgulMarauder"] = "nmrv";
    Units["MurgulShadowcaster"] = "nmsc";
    Units["MurgulSnarecaster"] = "nmsn";
    Units["MurgulTidewarrior"] = "nmtw";
    Units["Murgulslave"] = "nmpe";
    Units["MurlocFlesheater"] = "nmfs";
    Units["MurlocHuntsman"] = "nmrr";
    Units["MurlocHut0"] = "nmh0";
    Units["MurlocHut1"] = "nmh1";
    Units["MurlocHut2"] = "nmg2";
    Units["MurlocMutant"] = "nmmu";
    Units["MurlocNightcrawler"] = "nmrm";
    Units["MurlocPlaguebearer"] = "nmpg";
    Units["MurlocTiderunner"] = "nmrl";
    Units["Murlocsorcerer"] = "Nmsr";
    Units["Nagacoutl"] = "nwgs";
    Units["Nagamurgul"] = "nnmg";
    Units["Nagamyrmidon"] = "nmyr";
    Units["Nagamyrmidonmorph"] = "nmys";
    Units["Nagaroyalguard"] = "nnrg";
    Units["Nagaroyalguardmorph"] = "nnrs";
    Units["Naisha"] = "ensh";
    Units["Nazgrel"] = "onzg";
    Units["Necromancer"] = "unec";
    Units["Necropolis"] = "unpl";
    Units["NerubianQueen"] = "nnwq";
    Units["NerubianSeer"] = "nnwr";
    Units["NerubianSpiderLord"] = "nnws";
    Units["NerubianTower"] = "uzg2";
    Units["NerubianWarrior"] = "nnwa";
    Units["NerubianWebspinner"] = "nnwl";
    Units["NerubianZiggurat"] = "nnzg";
    Units["NetherDragon"] = "nndr";
    Units["NetherDragonHatchling"] = "nnht";
    Units["NetherDragonRoost"] = "ndro";
    Units["NetherDrake"] = "nndk";
    Units["NightElfBattleship"] = "ebsh";
    Units["NightElfFrigate"] = "edes";
    Units["NightElfShipyard"] = "eshy";
    Units["NightElfTransportShip"] = "etrs";
    Units["Nightelfassassin"] = "nssn";
    Units["Nightelfrunner"] = "enec";
    Units["ObsidianStatue"] = "uobs";
    Units["OgreLord"] = "nogl";
    Units["OgreMagi"] = "nomg";
    Units["OgreMauler"] = "nogm";
    Units["OgreWarrior"] = "nogr";
    Units["Oldpitlord"] = "Npld";
    Units["OrcCart"] = "ncco";
    Units["OrcFrigate"] = "odes";
    Units["OrcShipyard"] = "oshy";
    Units["OrcTransportShip"] = "obot";
    Units["Orcjuggernaut"] = "zjug";
    Units["Overlord"] = "nfov";
    Units["OverlordArachnathid"] = "nano";
    Units["OwlScoutLevel1"] = "nowl";
    Units["OwlScoutLevel2"] = "now2";
    Units["OwlScoutLevel3"] = "now3";
    Units["Packhorse"] = "hrdh";
    Units["Paladin"] = "Hpal";
    Units["Paladinboss1"] = "Hpb1";
    Units["Paladinboss2"] = "Hpb2";
    Units["Panda4"] = "npn4";
    Units["Panda5"] = "npn5";
    Units["Panda6"] = "npn6";
    Units["Peasant"] = "hpea";
    Units["Penguin"] = "npng";
    Units["PenguinWaterborne"] = "npnw";
    Units["Peon"] = "opeo";
    Units["Phoenix"] = "hphx";
    Units["PhoenixEgg"] = "hpxe";
    Units["Pig"] = "npig";
    Units["Pigfarm"] = "npgf";
    Units["PitLord"] = "Nplh";
    Units["PlagueTreant"] = "nepl";
    Units["PocketFactoryLevel1"] = "nfac";
    Units["PocketFactoryLevel2"] = "nfa1";
    Units["PocketFactoryLevel3"] = "nfa2";
    Units["PoisonTreant"] = "nenp";
    Units["PolarBear"] = "nplb";
    Units["PolarFurbolg"] = "nfpl";
    Units["PolarFurbolgChampion"] = "nfpc";
    Units["PolarFurbolgElderShaman"] = "nfpe";
    Units["PolarFurbolgShaman"] = "nfps";
    Units["PolarFurbolgTracker"] = "nfpt";
    Units["PolarFurbolgUrsaWarrior"] = "nfpu";
    Units["Possessedgromhellscream"] = "Opgh";
    Units["Powergenerator"] = "npgr";
    Units["Priest"] = "hmpr";
    Units["PriestessOfTheMoon"] = "Emoo";
    Units["PrimalPandaren"] = "nfrp";
    Units["Purplefountain"] = "nfnp";
    Units["QueenOfSuffering"] = "ndqs";
    Units["QuilbeastLevel1"] = "nqb1";
    Units["Quillbeast4"] = "nqb4";
    Units["Quillboar"] = "nrzt";
    Units["QuillboarHunter"] = "nqbh";
    Units["Rabbit"] = "necr";
    Units["Raccoon"] = "nrac";
    Units["RagingBearLevel2"] = "ngz2";
    Units["RagingQuilbeastLevel3"] = "nqb3";
    Units["Raider"] = "orai";
    Units["Ranger"] = "Hjnd";
    Units["Rat"] = "nrat";
    Units["RazormaneBrute"] = "nrzb";
    Units["RazormaneChieftain"] = "nrzg";
    Units["RazormaneMedicineMan"] = "nrzm";
    Units["RazormaneScout"] = "nrzs";
    Units["RedDragon"] = "nrwm";
    Units["RedDragonRoost"] = "ndrr";
    Units["RedDragonWhelp"] = "nrdk";
    Units["RedDrake"] = "nrdr";
    Units["ReefElemental"] = "nrel";
    Units["ReinforcedBurrow"] = "orbr";
    Units["RenegadeWizard"] = "nwzg";
    Units["RevenantOfTheDepths"] = "ndrv";
    Units["RevenantOfTheSeas"] = "nsrv";
    Units["RevenantOfTheTides"] = "ntrv";
    Units["Rexxar"] = "Orex";
    Units["Riderlesshorse"] = "hhdl";
    Units["Riderlesswyvern"] = "ownr";
    Units["Rifleman"] = "hrif";
    Units["RockGolem"] = "ngst";
    Units["Rogue"] = "nrog";
    Units["RogueWizard"] = "nwzr";
    Units["Rokhan"] = "Orkn";
    Units["Ruinedelvenfishingvillage0"] = "nvr0";
    Units["Ruinedelvenfishingvillage1"] = "nvr1";
    Units["Ruinedelvenfishingvillage2"] = "nvr2";
    Units["RunnerHighElf"] = "hrrh";
    Units["SacrificialPit"] = "usap";
    Units["Salamander"] = "nslr";
    Units["SalamanderHatchling"] = "nslh";
    Units["SalamanderLord"] = "nsll";
    Units["SalamanderVizier"] = "nslv";
    Units["Sammycube"] = "zsmc";
    Units["Samuro"] = "Osam";
    Units["Sapper"] = "ngsp";
    Units["Sasquatch"] = "nsqt";
    Units["SasquatchOracle"] = "nsqo";
    Units["Satyr"] = "nsty";
    Units["SatyrHellcaller"] = "nsth";
    Units["SatyrShadowdancer"] = "nsts";
    Units["SatyrShadowdancer2"] = "nstf";
    Units["SatyrSoulstealer"] = "nstl";
    Units["SatyrTrickster"] = "nsat";
    Units["ScoutTower"] = "hwtw";
    Units["SeaElemental"] = "nsel";
    Units["SeaGiant"] = "nsgn";
    Units["SeaGiantBehemoth"] = "nsgb";
    Units["SeaGiantHunter"] = "nsgh";
    Units["SeaTurtle"] = "ntrs";
    Units["SeaTurtleHatchling"] = "ntrh";
    Units["SeaWitch"] = "Nngs";
    Units["Seal"] = "nsea";
    Units["Searinox"] = "nser";
    Units["Seawitch2"] = "Nswt";
    Units["SentryWard"] = "oeye";
    Units["SerpentWardLevel1"] = "osp1";
    Units["SerpentWardLevel2"] = "osp2";
    Units["SerpentWardLevel3"] = "osp3";
    Units["Serpentward4"] = "osp4";
    Units["Shade"] = "ushd";
    Units["ShadowHunter"] = "Oshd";
    Units["ShadowWolfLevel3"] = "osw3";
    Units["Shaman"] = "oshm";
    Units["Shandris"] = "eshd";
    Units["Sheep"] = "nshe";
    Units["SheepAmphibious"] = "nsha";
    Units["SheepWaterborne"] = "nshw";
    Units["Shimmeringportal"] = "hprt";
    Units["Shredder"] = "ngir";
    Units["Shrine"] = "nshr";
    Units["Shrineofazshara"] = "nnsa";
    Units["SiegeEngine"] = "hmtt";
    Units["SiegeEngineBarrage"] = "hrtt";
    Units["SiegeGolem"] = "nsgg";
    Units["Sinjostormstout"] = "Nsjs";
    Units["Siren"] = "nnsw";
    Units["SkeletalMage"] = "uskm";
    Units["SkeletalMarksman"] = "nskm";
    Units["SkeletalOrc"] = "nsko";
    Units["SkeletalOrcChampion"] = "nsoc";
    Units["SkeletalOrcGrunt"] = "nsog";
    Units["SkeletonArcher"] = "nsca";
    Units["SkeletonArcher2"] = "nska";
    Units["SkeletonWarrior"] = "uske";
    Units["SkeletonWarrior2"] = "nsce";
    Units["SkeletonWarrior3"] = "nske";
    Units["Skink"] = "nskk";
    Units["Skyfurytower"] = "negm";
    Units["Slaughterhouse"] = "uslh";
    Units["SlaveMaster"] = "owad";
    Units["SludgeFlinger"] = "nslf";
    Units["SludgeMinion"] = "nslm";
    Units["SludgeMonstrosity"] = "nsln";
    Units["Snapdragon"] = "nsnp";
    Units["Snapdragonmorph"] = "nsbs";
    Units["SnarlmaneTheBloodgorger"] = "ngos";
    Units["SnowyOwl"] = "nsno";
    Units["Sorceress"] = "hsor";
    Units["Spawninggrounds"] = "nnsg";
    Units["Spellbreaker"] = "hspt";
    Units["Spider"] = "nspr";
    Units["SpiderCrabBehemoth"] = "nsc3";
    Units["SpiderCrabLimbripper"] = "nsc2";
    Units["SpiderCrabShorecrawler"] = "nscb";
    Units["Spiderling"] = "nspd";
    Units["SpiritBearLevel3"] = "ngz3";
    Units["SpiritHawkLevel3"] = "nwe3";
    Units["SpiritLodge"] = "osld";
    Units["SpiritOfVengeance"] = "even";
    Units["SpiritPig"] = "nspp";
    Units["SpiritTower"] = "uzg1";
    Units["SpiritWalker"] = "ospw";
    Units["SpiritWalkerEthereal"] = "ospm";
    Units["SpiritWolfLevel1"] = "osw1";
    Units["Spiritbeast"] = "nsw1";
    Units["Spiritbeast2"] = "nsw2";
    Units["Spiritbeast3"] = "nsw3";
    Units["Spiritwyvern"] = "oswy";
    Units["SpittingSpider"] = "nssp";
    Units["Stag"] = "nder";
    Units["StasisTrap"] = "otot";
    Units["StoneFormGargoyle"] = "ugrm";
    Units["StonemaulMagi"] = "nogn";
    Units["StonemaulOgre"] = "nogo";
    Units["StonemaulWarchief"] = "noga";
    Units["Storm"] = "npn2";
    Units["StormWyrm"] = "nstw";
    Units["StormreaverApprentice"] = "nsra";
    Units["StormreaverHermit"] = "nsrh";
    Units["StormreaverNecrolyte"] = "nsrn";
    Units["StormreaverWarlock"] = "nsrw";
    Units["Stronghold"] = "ostr";
    Units["Succubus"] = "ndqn";
    Units["SummonedPrawn"] = "nlps";
    Units["Summoner"] = "nnsu";
    Units["Supportcolumn"] = "nspc";
    Units["Sylvanusbanshee"] = "uswb";
    Units["Sylvanuswindrunner"] = "Hvwd";
    Units["Tauren"] = "otau";
    Units["TaurenChieftain"] = "Otch";
    Units["TaurenTent"] = "ntnt";
    Units["TaurenTent2"] = "ntt2";
    Units["TaurenTotem"] = "otto";
    Units["Tavern"] = "ntav";
    Units["TempleOfTheDamned"] = "utod";
    Units["Templeoftides"] = "nntt";
    Units["Tent"] = "nten";
    Units["Tent2"] = "ntn2";
    Units["Tent3"] = "ntn3";
    Units["Tentacle"] = "nfgt";
    Units["Tharifas"] = "nthr";
    Units["Thecaptain"] = "hcth";
    Units["Theshoveler"] = "zshv";
    Units["Thrall"] = "Othr";
    Units["ThrallUnmounted"] = "Oths";
    Units["ThunderHawkLevel2"] = "nwe2";
    Units["ThunderLizard2"] = "nthl";
    Units["Tichondrius"] = "Utic";
    Units["Tidalguardian"] = "nntg";
    Units["TimberWolf"] = "nwlt";
    Units["Tinker"] = "Nrob";
    Units["Tinker2"] = "Ntin";
    Units["TombOfRelics"] = "utom";
    Units["Tornado"] = "ntor";
    Units["TownHall"] = "htow";
    Units["TransportShip"] = "nbot";
    Units["Treant"] = "efon";
    Units["TreeOfAges"] = "etoa";
    Units["TreeOfEternity"] = "etoe";
    Units["TreeOfLife"] = "etol";
    Units["TuskarrChieftain"] = "ntkc";
    Units["TuskarrFighter"] = "ntkf";
    Units["TuskarrHealer"] = "ntkh";
    Units["TuskarrSorcerer"] = "ntks";
    Units["TuskarrSpearman"] = "ntka";
    Units["TuskarrTrapper"] = "ntkt";
    Units["TuskarrWarrior"] = "ntkw";
    Units["Tyrande"] = "Etyr";
    Units["UnbrokenDarkhunter"] = "nubk";
    Units["UnbrokenDarkweaver"] = "nubw";
    Units["UnbrokenRager"] = "nubr";
    Units["UndeadBattleship"] = "uubs";
    Units["UndeadCart"] = "nccu";
    Units["UndeadFrigate"] = "udes";
    Units["UndeadTransportShip"] = "ubot";
    Units["Undeadshipyard"] = "ushp";
    Units["Uther"] = "Huth";
    Units["Varimathras"] = "Uvar";
    Units["Vengyr"] = "Uvng";
    Units["VileTemptress"] = "ndqt";
    Units["VileTormentor"] = "ndqv";
    Units["VillagerFemale"] = "nvlw";
    Units["VillagerMale"] = "nvil";
    Units["VillagerMale2"] = "nvl2";
    Units["Voidwalker"] = "nvdw";
    Units["Voljin"] = "ovlj";
    Units["VoodooLounge"] = "ovln";
    Units["VorpalBlades"] = "Aimp";
    Units["Vulture"] = "nvul";
    Units["War2warlock"] = "nw2w";
    Units["WarGolem"] = "nwrg";
    Units["WarMill"] = "ofor";
    Units["WarWagon"] = "nwar";
    Units["Warden"] = "Ewar";
    Units["WarriorArachnathid"] = "nanw";
    Units["WatchTower"] = "owtw";
    Units["Watcher"] = "nwat";
    Units["WatcherWard"] = "nwad";
    Units["WaterElementalLevel1"] = "hwat";
    Units["WaterElementalLevel2"] = "hwt2";
    Units["WaterElementalLevel3"] = "hwt3";
    Units["WateryMinionLevel1"] = "ncfs";
    Units["WateryMinionLevel2"] = "ntws";
    Units["WateryMinionLevel3"] = "nsns";
    Units["WayGate"] = "nwgt";
    Units["Wendigo"] = "nwen";
    Units["WendigoShaman"] = "nwns";
    Units["Wildkin"] = "nowb";
    Units["WindRider"] = "owyv";
    Units["WindRiderCage1"] = "nwc1";
    Units["WindRiderCage2"] = "nwc2";
    Units["WindRiderCage3"] = "nwc3";
    Units["WindRiderCage4"] = "nwc4";
    Units["Wisp"] = "ewsp";
    Units["WitchDoctor"] = "odoc";
    Units["Workshop"] = "harm";
    Units["Wraith"] = "ngh2";
    Units["Ydeng"] = "Y425";
    Units["Zeppelin"] = "nzep";
    Units["Zergling"] = "zzrg";
    Units["Ziggurat"] = "uzig";
    Units["Zombie"] = "nzom";
    Units["ZombieFemale"] = "nzof";
    Units["Zoneindicator"] = "nzin";
})(Units = exports.Units || (exports.Units = {}));
class UnitContainer extends container_1.OEContainer {
    constructor() {
        super(...arguments);
        this.game = objects;
        this.map = {};
    }
    loadModification(object, modification) {
        const { id, value } = modification;
        switch (id) {
            case 'uani':
                object.requiredAnimationNames = (0, utils_1.war3ToTS)('stringList', value);
                return;
            case 'uico':
                object.iconGameInterface = (0, utils_1.war3ToTS)('icon', value);
                return;
            case 'uaap':
                object.requiredAnimationNamesAttachments = (0, utils_1.war3ToTS)('stringList', value);
                return;
            case 'ualp':
                object.requiredAttachmentLinkNames = (0, utils_1.war3ToTS)('stringList', value);
                return;
            case 'ubpr':
                object.requiredBoneNames = (0, utils_1.war3ToTS)('stringList', value);
                return;
            case 'ubui':
                object.structuresBuilt = (0, utils_1.war3ToTS)('unitList', value);
                return;
            case 'ubpx':
                object.buttonPositionX = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ubpy':
                object.buttonPositionY = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ucua':
                object.casterUpgradeArt = (0, utils_1.war3ToTS)('icon', value);
                return;
            case 'ucun':
                object.casterUpgradeNames = (0, utils_1.war3ToTS)('stringList', value);
                return;
            case 'ucut':
                object.casterUpgradeTips = (0, utils_1.war3ToTS)('stringList', value);
                return;
            case 'udep':
                object.dependencyEquivalents = (0, utils_1.war3ToTS)('unitList', value);
                return;
            case 'ides':
                object.description = (0, utils_1.war3ToTS)('string', value);
                return;
            case 'unsf':
                object.nameEditorSuffix = (0, utils_1.war3ToTS)('string', value);
                return;
            case 'uhot':
                object.hotkey = (0, utils_1.war3ToTS)('char', value);
                return;
            case 'ulfi':
                object.loopingFadeInRate = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ulfo':
                object.loopingFadeOutRate = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'uma1':
                object.attack1ProjectileArc = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'uma2':
                object.attack2ProjectileArc = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'ua1m':
                object.attack1ProjectileArt = (0, utils_1.war3ToTS)('model', value);
                return;
            case 'ua2m':
                object.attack2ProjectileArt = (0, utils_1.war3ToTS)('model', value);
                return;
            case 'umh1':
                object.attack1ProjectileHomingEnabled = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'umh2':
                object.attack2ProjectileHomingEnabled = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'ua1z':
                object.attack1ProjectileSpeed = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ua2z':
                object.attack2ProjectileSpeed = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'umsl':
                object.movement = (0, utils_1.war3ToTS)('soundLabel', value);
                return;
            case 'unam':
                object.name = (0, utils_1.war3ToTS)('string', value);
                return;
            case 'ursl':
                object.random = (0, utils_1.war3ToTS)('soundLabel', value);
                return;
            case 'ureq':
                object.requirements = (0, utils_1.war3ToTS)('techList', value);
                return;
            case 'urqa':
                object.requirementsLevels = (0, utils_1.war3ToTS)('intList', value);
                return;
            case 'ussi':
                object.iconScoreScreen = (0, utils_1.war3ToTS)('icon', value);
                return;
            case 'usei':
                object.itemsSold = (0, utils_1.war3ToTS)('itemList', value);
                return;
            case 'useu':
                object.unitsSold = (0, utils_1.war3ToTS)('unitList', value);
                return;
            case 'uspa':
                object.special = (0, utils_1.war3ToTS)('modelList', value);
                return;
            case 'utaa':
                object.target = (0, utils_1.war3ToTS)('modelList', value);
                return;
            case 'utip':
                object.tooltipBasic = (0, utils_1.war3ToTS)('string', value);
                return;
            case 'utub':
                object.tooltipExtended = (0, utils_1.war3ToTS)('string', value);
                return;
            case 'uabi':
                object.normal = (0, utils_1.war3ToTS)('abilityList', value);
                return;
            case 'udaa':
                object.defaultActiveAbility = (0, utils_1.war3ToTS)('abilCode', value);
                return;
            case 'ubld':
                object.buildTime = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ubdi':
                object.goldBountyAwardedNumberOfDice = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ubba':
                object.goldBountyAwardedBase = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ubsi':
                object.goldBountyAwardedSidesPerDie = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ulbd':
                object.lumberBountyAwardedNumberOfDice = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ulba':
                object.lumberBountyAwardedBase = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ulbs':
                object.lumberBountyAwardedSidesPerDie = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ucol':
                object.collisionSize = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'udef':
                object.defenseBase = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'udty':
                object.defenseType = (0, utils_1.war3ToTS)('defenseType', value);
                return;
            case 'udup':
                object.defenseUpgradeBonus = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ufma':
                object.foodProduced = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ufoo':
                object.foodCost = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ugol':
                object.goldCost = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ugor':
                object.repairGoldCost = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'uhpm':
                object.hitPointsMaximumBase = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ubdg':
                object.isABuilding = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'ulev':
                object.level = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ulum':
                object.lumberCost = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ulur':
                object.repairLumberCost = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'umpi':
                object.manaInitialAmount = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'umpm':
                object.manaMaximum = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'umas':
                object.speedMaximum = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'umis':
                object.speedMinimum = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'usin':
                object.sightRadiusNight = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'uhpr':
                object.hitPointsRegenerationRate = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'umpr':
                object.manaRegeneration = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'uhrt':
                object.hitPointsRegenerationType = (0, utils_1.war3ToTS)('regenType', value);
                return;
            case 'urtm':
                object.repairTime = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'urpo':
                object.groupSeparationEnabled = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'urpg':
                object.groupSeparationGroupNumber = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'urpp':
                object.groupSeparationParameter = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'urpr':
                object.groupSeparationPriority = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'usid':
                object.sightRadiusDay = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'umvs':
                object.speedBase = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'usma':
                object.stockMaximum = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'usrg':
                object.stockReplenishInterval = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'usst':
                object.stockStartDelay = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'usit':
                object.stockInitialAfterStartDelay = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'util':
                object.tilesets = (0, utils_1.war3ToTS)('tilesetList', value);
                return;
            case 'utyp':
                object.unitClassification = (0, utils_1.war3ToTS)('unitClass', value);
                return;
            case 'upgr':
                object.upgradesUsed = (0, utils_1.war3ToTS)('upgradeList', value);
                return;
            case 'uabr':
                object.aIPlacementRadius = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'uabt':
                object.aIPlacementType = (0, utils_1.war3ToTS)('aiBuffer', value);
                return;
            case 'ufle':
                object.canFlee = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'usle':
                object.sleeps = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'ucar':
                object.transportedSize = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'udtm':
                object.deathTimeSeconds = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'udea':
                object.deathType = (0, utils_1.war3ToTS)('deathType', value);
                return;
            case 'ulos':
                object.useExtendedLineOfSight = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'ufor':
                object.formationRank = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'umvf':
                object.heightMinimum = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'umvh':
                object.height = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'umvt':
                object.type = (0, utils_1.war3ToTS)('moveType', value);
                return;
            case 'uori':
                object.orientationInterpolation = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'upoi':
                object.pointValue = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'upri':
                object.priority = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'uprw':
                object.propulsionWindowDegrees = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'urac':
                object.race = (0, utils_1.war3ToTS)('unitRace', value);
                return;
            case 'utar':
                object.targetedAs = (0, utils_1.war3ToTS)('targetList', value);
                return;
            case 'umvr':
                object.turnRate = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'uarm':
                object.armorType = (0, utils_1.war3ToTS)('armorType', value);
                return;
            case 'uble':
                object.animationBlendTimeSeconds = (0, utils_1.war3ToTS)('real', value);
                return;
            case 'uclb':
                object.tintingColor3Blue = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ushb':
                object.shadowTextureBuilding = (0, utils_1.war3ToTS)('shadowTexture', value);
                return;
            case 'ucam':
                object.categorizationCampaign = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'utcc':
                object.allowCustomTeamColor = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'udro':
                object.canDropItemsOnDeath = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'uept':
                object.elevationSamplePoints = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'uerd':
                object.elevationSampleRadius = (0, utils_1.war3ToTS)('real', value);
                return;
            case 'umdl':
                object.modelFile = (0, utils_1.war3ToTS)('model', value);
                return;
            case 'uver':
                object.modelFileExtraVersions = (0, utils_1.war3ToTS)('versionFlags', value);
                return;
            case 'ufrd':
                object.fogOfWarSampleRadius = (0, utils_1.war3ToTS)('real', value);
                return;
            case 'uclg':
                object.tintingColor2Green = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'uhos':
                object.displayAsNeutralHostile = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'uine':
                object.placeableInEditor = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'umxp':
                object.maximumPitchAngleDegrees = (0, utils_1.war3ToTS)('real', value);
                return;
            case 'umxr':
                object.maximumRollAngleDegrees = (0, utils_1.war3ToTS)('real', value);
                return;
            case 'usca':
                object.scalingValue = (0, utils_1.war3ToTS)('real', value);
                return;
            case 'uhom':
                object.hideMinimapDisplay = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'uocc':
                object.occluderHeight = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'uclr':
                object.tintingColor1Red = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'urun':
                object.animationRunSpeed = (0, utils_1.war3ToTS)('real', value);
                return;
            case 'ussc':
                object.selectionScale = (0, utils_1.war3ToTS)('real', value);
                return;
            case 'uscb':
                object.scaleProjectiles = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'usew':
                object.selectionCircleOnWater = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'uslz':
                object.selectionCircleHeight = (0, utils_1.war3ToTS)('real', value);
                return;
            case 'ushh':
                object.shadowImageHeight = (0, utils_1.war3ToTS)('real', value);
                return;
            case 'ushr':
                object.hasWaterShadow = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'ushw':
                object.shadowImageWidth = (0, utils_1.war3ToTS)('real', value);
                return;
            case 'ushx':
                object.shadowImageCenterX = (0, utils_1.war3ToTS)('real', value);
                return;
            case 'ushy':
                object.shadowImageCenterY = (0, utils_1.war3ToTS)('real', value);
                return;
            case 'uspe':
                object.categorizationSpecial = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'utco':
                object.teamColor = (0, utils_1.war3ToTS)('teamColor', value);
                return;
            case 'utss':
                object.hasTilesetSpecificData = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'ushu':
                object.shadowImageUnit = (0, utils_1.war3ToTS)('shadowImage', value);
                return;
            case 'usnd':
                object.unitSoundSet = (0, utils_1.war3ToTS)('unitSound', value);
                return;
            case 'uuch':
                object.useClickHelper = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'uwal':
                object.animationWalkSpeed = (0, utils_1.war3ToTS)('real', value);
                return;
            case 'uacq':
                object.acquisitionRange = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'ua1t':
                object.attack1AttackType = (0, utils_1.war3ToTS)('attackType', value);
                return;
            case 'ua2t':
                object.attack2AttackType = (0, utils_1.war3ToTS)('attackType', value);
                return;
            case 'ubs1':
                object.attack1AnimationBackswingPoint = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'ubs2':
                object.attack2AnimationBackswingPoint = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'ucbs':
                object.animationCastBackswing = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'ucpt':
                object.animationCastPoint = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'ua1c':
                object.attack1CooldownTime = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'ua2c':
                object.attack2CooldownTime = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'udl1':
                object.attack1DamageLossFactor = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'udl2':
                object.attack2DamageLossFactor = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'ua1d':
                object.attack1DamageNumberOfDice = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ua2d':
                object.attack2DamageNumberOfDice = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ua1b':
                object.attack1DamageBase = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ua2b':
                object.attack2DamageBase = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'udp1':
                object.attack1AnimationDamagePoint = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'udp2':
                object.attack2AnimationDamagePoint = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'udu1':
                object.attack1DamageUpgradeAmount = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'udu2':
                object.attack2DamageUpgradeAmount = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ua1f':
                object.attack1AreaOfEffectFullDamage = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ua2f':
                object.attack2AreaOfEffectFullDamage = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ua1h':
                object.attack1AreaOfEffectMediumDamage = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ua2h':
                object.attack2AreaOfEffectMediumDamage = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'uhd1':
                object.attack1DamageFactorMedium = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'uhd2':
                object.attack2DamageFactorMedium = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'uisz':
                object.projectileImpactZSwimming = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'uimz':
                object.projectileImpactZ = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'ulsz':
                object.projectileLaunchZSwimming = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'ulpx':
                object.projectileLaunchX = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'ulpy':
                object.projectileLaunchY = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'ulpz':
                object.projectileLaunchZ = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'uamn':
                object.minimumAttackRange = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ua1q':
                object.attack1AreaOfEffectSmallDamage = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ua2q':
                object.attack2AreaOfEffectSmallDamage = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'uqd1':
                object.attack1DamageFactorSmall = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'uqd2':
                object.attack2DamageFactorSmall = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'ua1r':
                object.attack1Range = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ua2r':
                object.attack2Range = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'urb1':
                object.attack1RangeMotionBuffer = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'urb2':
                object.attack2RangeMotionBuffer = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'uwu1':
                object.attack1ShowUI = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'uwu2':
                object.attack2ShowUI = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'ua1s':
                object.attack1DamageSidesPerDie = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ua2s':
                object.attack2DamageSidesPerDie = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'usd1':
                object.attack1DamageSpillDistance = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'usd2':
                object.attack2DamageSpillDistance = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'usr1':
                object.attack1DamageSpillRadius = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'usr2':
                object.attack2DamageSpillRadius = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'ua1p':
                object.attack1AreaOfEffectTargets = (0, utils_1.war3ToTS)('targetList', value);
                return;
            case 'ua2p':
                object.attack2AreaOfEffectTargets = (0, utils_1.war3ToTS)('targetList', value);
                return;
            case 'utc1':
                object.attack1MaximumNumberOfTargets = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'utc2':
                object.attack2MaximumNumberOfTargets = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'ua1g':
                object.attack1TargetsAllowed = (0, utils_1.war3ToTS)('targetList', value);
                return;
            case 'ua2g':
                object.attack2TargetsAllowed = (0, utils_1.war3ToTS)('targetList', value);
                return;
            case 'uaen':
                object.attacksEnabled = (0, utils_1.war3ToTS)('attackBits', value);
                return;
            case 'ua1w':
                object.attack1WeaponType = (0, utils_1.war3ToTS)('weaponType', value);
                return;
            case 'ua2w':
                object.attack2WeaponType = (0, utils_1.war3ToTS)('weaponType', value);
                return;
            case 'ucs1':
                object.attack1WeaponSound = (0, utils_1.war3ToTS)('combatSound', value);
                return;
            case 'ucs2':
                object.attack2WeaponSound = (0, utils_1.war3ToTS)('combatSound', value);
                return;
            case 'uabs':
                object.normalSkin = (0, utils_1.war3ToTS)('abilitySkinList', value);
                return;
            case 'uhas':
                object.heroSkin = (0, utils_1.war3ToTS)('abilitySkinList', value);
                return;
            default: throw Error(`Unknown modification: ${id}`);
        }
    }
}
exports.UnitContainer = UnitContainer;
//# sourceMappingURL=units.js.map