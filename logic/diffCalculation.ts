const colors:string[] = ["abkhaziaColor","afghanistanColor", "albaniaColor","algeriaColor","americanSamoaColor","andorraColor","angolaColor","anguillaColor","antiguaAndBarbudaColor","argentinaColor","armeniaColor","arubaColor","australiaColor","austriaColor","azerbaijanColor","bahamasColor","bahrainColor","bangladeshColor","barbadosColor","belarusColor","belgiumColor","belizeColor","beninColor","bermudaColor","bhutanColor","boliviaColor","bonaireColor","bosniaAndHerzegovinaColor","botswanaColor","bouvetIslandColor","brazilColor","britishIndianOceanTerritoryColor","britishVirginIslandsColor","bruneiColor","bulgariaColor","burkinaFasoColor","burundiColor","cambodiaColor","cameroonColor","canadaColor","capeVerdeColor","caymanIslandsColor","centralAfricanRepublicColor","chadColor","chileColor","chinaColor","colombiaColor","comorosColor","cookIslandsColor","costaRicaColor","croatiaColor","cubaColor","curacaoColor","cyprusColor","czechRepublicColor","democraticRepublicOfTheCongoColor","denmarkColor","djiboutiColor","dominicaColor","dominicanRepublicColor","eastTimorColor","ecuadorColor","egyptColor","elSalvadorColor","equatorialGuineaColor","eritreaColor","estoniaColor","eswatiniColor","ethiopiaColor","falklandIslandsColor","faroeIslandsColor","fijiColor","finlandColor","franceColor","frenchGuianaColor","frenchPolynesiaColor","gabonColor","gambiaColor","georgiaColor","germanyColor","ghanaColor","gibraltarColor","greeceColor","greenlandColor","grenadaColor","guadeloupeColor","guamColor","guatemalaColor","guernseyColor","guineaColor","guineaBissauColor","guyanaColor","haitiColor","heardIslandAndMcDonaldIslandsColor","hondurasColor","hongKongColor","hungaryColor","icelandColor","indiaColor","indonesiaColor","iranColor","iraqColor","irelandColor","isleOfManColor","israelColor","italyColor","ivoryCoastColor","jamaicaColor","janMayenColor","japanColor","jerseyColor","jordanColor","kazakhstanColor","kenyaColor","kiribatiColor","kosovoColor","kuwaitColor","kyrgyzstanColor","laosColor","latviaColor","lebanonColor","lesothoColor","liberiaColor","libyaColor","liechtensteinColor","lithuaniaColor","luxembourgColor","macaoColor","madagascarColor","malawiColor","malaysiaColor","maldivesColor","maliColor","maltaColor","marshallIslandsColor","martiniqueColor","mauritaniaColor","mauritiusColor","mayotteColor","mexicoColor","micronesiaColor","moldovaColor","monacoColor","mongoliaColor","montenegroColor","montserratColor","moroccoColor","mozambiqueColor","myanmarColor","namibiaColor","nauruColor","nepalColor","netherlandsColor","newCaledoniaColor","newZealandColor","nicaraguaColor","nigerColor","nigeriaColor","niueColor","norfolkIslandColor","northernCyprusColor","northernMarianaIslandsColor","northKoreaColor","northMacedoniaColor","norwayColor","omanColor","pakistanColor","palauColor","palestineColor","panamaColor","papuaNewGuineaColor","paraguayColor","peruColor","philippinesColor","pitcairnIslandsColor","polandColor","portugalColor","qatarColor","republicOfTheCongoColor","reunionColor","romaniaColor","russiaColor","rwandaColor","sabaColor","saintBarthelemyColor","saintHelenaColor","saintKittsAndNevisColor","saintLuciaColor","saintMartinColor","saintPierreAndMiquelonColor","saintVincentAndTheGrenadinesColor","samoaColor","sanMarinoColor","saoTomeAndPrincipeColor","saudiArabiaColor","senegalColor","serbiaColor","seychellesColor","sierraLeoneColor","singaporeColor","sintEustatiusColor","sintMaartenColor","slovakiaColor","sloveniaColor","solomonIslandsColor","somaliaColor","southAfricaColor","southGeorgiaAndTheSouthSandwichIslandsColor","southKoreaColor","southOssetiaColor","southSudanColor","spainColor","sriLankaColor","sudanColor","surinameColor","svalbardColor","swedenColor","switzerlandColor","syriaColor","taiwanColor","tajikistanColor","tanzaniaColor","thailandColor","togoColor","tokelauColor","tongaColor","transnistriaColor","trinidadAndTobagoColor","tunisiaColor","turkeyColor","turkmenistanColor","turksAndCaicosColor","tuvaluColor","ugandaColor","ukraineColor","unitedArabEmiratesColor","unitedKingdomColor","unitedStatesColor","unitedStatesVirginIslandsColor","uruguayColor","uzbekistanColor","vanuatuColor","vaticanCityColor","venezuelaColor","vietnamColor","wallisAndFutunaColor","westernSaharaColor","yemenColor","zambiaColor","zimbabweColor"]

export default function diffCalculation(selectArray:null | string[], assignedColors:object[], diff, setDiff) {
  let diffObject
    if(selectArray[0] == null) {
      diffObject = {abkhaziaColor: 0,afghanistanColor: 0, albaniaColor: 0,algeriaColor: 0,americanSamoaColor: 0,andorraColor: 0,angolaColor: 0,anguillaColor: 0,antiguaAndBarbudaColor: 0,argentinaColor: 0,armeniaColor: 0,arubaColor: 0,australiaColor: 0,austriaColor: 0,azerbaijanColor: 0,bahamasColor: 0,bahrainColor: 0,bangladeshColor: 0,barbadosColor: 0,belarusColor: 0,belgiumColor: 0,belizeColor: 0,beninColor: 0,bermudaColor: 0,bhutanColor: 0,boliviaColor: 0,bonaireColor: 0,bosniaAndHerzegovinaColor: 0,botswanaColor: 0,bouvetIslandColor: 0,brazilColor: 0,britishIndianOceanTerritoryColor: 0,britishVirginIslandsColor: 0,bruneiColor: 0,bulgariaColor: 0,burkinaFasoColor: 0,burundiColor: 0,cambodiaColor: 0,cameroonColor: 0,canadaColor: 0,capeVerdeColor: 0,caymanIslandsColor: 0,centralAfricanRepublicColor: 0,chadColor: 0,chileColor: 0,chinaColor: 0,colombiaColor: 0,comorosColor: 0,cookIslandsColor: 0,costaRicaColor: 0,croatiaColor: 0,cubaColor: 0,curacaoColor: 0,cyprusColor: 0,czechRepublicColor: 0,democraticRepublicOfTheCongoColor: 0,denmarkColor: 0,djiboutiColor: 0,dominicaColor: 0,dominicanRepublicColor: 0,eastTimorColor: 0,ecuadorColor: 0,egyptColor: 0,elSalvadorColor: 0,equatorialGuineaColor: 0,eritreaColor: 0,estoniaColor: 0,eswatiniColor: 0,ethiopiaColor: 0,falklandIslandsColor: 0,faroeIslandsColor: 0,fijiColor: 0,finlandColor: 0,franceColor: 0,frenchGuianaColor: 0,frenchPolynesiaColor: 0,gabonColor: 0,gambiaColor: 0,georgiaColor: 0,germanyColor: 0,ghanaColor: 0,gibraltarColor: 0,greeceColor: 0,greenlandColor: 0,grenadaColor: 0,guadeloupeColor: 0,guamColor: 0,guatemalaColor: 0,guernseyColor: 0,guineaColor: 0,guineaBissauColor: 0,guyanaColor: 0,haitiColor: 0,heardIslandAndMcDonaldIslandsColor: 0,hondurasColor: 0,hongKongColor: 0,hungaryColor: 0,icelandColor: 0,indiaColor: 0,indonesiaColor: 0,iranColor: 0,iraqColor: 0,irelandColor: 0,isleOfManColor: 0,israelColor: 0,italyColor: 0,ivoryCoastColor: 0,jamaicaColor: 0,janMayenColor: 0,japanColor: 0,jerseyColor: 0,jordanColor: 0,kazakhstanColor: 0,kenyaColor: 0,kiribatiColor: 0,kosovoColor: 0,kuwaitColor: 0,kyrgyzstanColor: 0,laosColor: 0,latviaColor: 0,lebanonColor: 0,lesothoColor: 0,liberiaColor: 0,libyaColor: 0,liechtensteinColor: 0,lithuaniaColor: 0,luxembourgColor: 0,macaoColor: 0,madagascarColor: 0,malawiColor: 0,malaysiaColor: 0,maldivesColor: 0,maliColor: 0,maltaColor: 0,marshallIslandsColor: 0,martiniqueColor: 0,mauritaniaColor: 0,mauritiusColor: 0,mayotteColor: 0,mexicoColor: 0,micronesiaColor: 0,moldovaColor: 0,monacoColor: 0,mongoliaColor: 0,montenegroColor: 0,montserratColor: 0,moroccoColor: 0,mozambiqueColor: 0,myanmarColor: 0,namibiaColor: 0,nauruColor: 0,nepalColor: 0,netherlandsColor: 0,newCaledoniaColor: 0,newZealandColor: 0,nicaraguaColor: 0,nigerColor: 0,nigeriaColor: 0,niueColor: 0,norfolkIslandColor: 0,northernCyprusColor: 0,northernMarianaIslandsColor: 0,northKoreaColor: 0,northMacedoniaColor: 0,norwayColor: 0,omanColor: 0,pakistanColor: 0,palauColor: 0,palestineColor: 0,panamaColor: 0,papuaNewGuineaColor: 0,paraguayColor: 0,peruColor: 0,philippinesColor: 0,pitcairnIslandsColor: 0,polandColor: 0,portugalColor: 0,qatarColor: 0,republicOfTheCongoColor: 0,reunionColor: 0,romaniaColor: 0,russiaColor: 0,rwandaColor: 0,sabaColor: 0,saintBarthelemyColor: 0,saintHelenaColor: 0,saintKittsAndNevisColor: 0,saintLuciaColor: 0,saintMartinColor: 0,saintPierreAndMiquelonColor: 0,saintVincentAndTheGrenadinesColor: 0,samoaColor: 0,sanMarinoColor: 0,saoTomeAndPrincipeColor: 0,saudiArabiaColor: 0,senegalColor: 0,serbiaColor: 0,seychellesColor: 0,sierraLeoneColor: 0,singaporeColor: 0,sintEustatiusColor: 0,sintMaartenColor: 0,slovakiaColor: 0,sloveniaColor: 0,solomonIslandsColor: 0,somaliaColor: 0,southAfricaColor: 0,southGeorgiaAndTheSouthSandwichIslandsColor: 0,southKoreaColor: 0,southOssetiaColor: 0,southSudanColor: 0,spainColor: 0,sriLankaColor: 0,sudanColor: 0,surinameColor: 0,svalbardColor: 0,swedenColor: 0,switzerlandColor: 0,syriaColor: 0,taiwanColor: 0,tajikistanColor: 0,tanzaniaColor: 0,thailandColor: 0,togoColor: 0,tokelauColor: 0,tongaColor: 0,transnistriaColor: 0,trinidadAndTobagoColor: 0,tunisiaColor: 0,turkeyColor: 0,turkmenistanColor: 0,turksAndCaicosColor: 0,tuvaluColor: 0,ugandaColor: 0,ukraineColor: 0,unitedArabEmiratesColor: 0,unitedKingdomColor: 0,unitedStatesColor: 0,unitedStatesVirginIslandsColor: 0,uruguayColor: 0,uzbekistanColor: 0,vanuatuColor: 0,vaticanCityColor: 0,venezuelaColor: 0,vietnamColor: 0,wallisAndFutunaColor: 0,westernSaharaColor: 0,yemenColor: 0,zambiaColor: 0,zimbabweColor: 0}
    } else {
      diffObject = diff
    }
  const ac = (x, y) => {
    return assignedColors[y][colors[x]] 
  }
  const y = () => {
    for(let i = 0; i < selectArray.length; i++) {
      if(selectArray[i + 1] == null) {
        return i
      }
    }
  }

  for(let x = 0; x < colors.length; x++) {
    //OECS freedom of movement
    if(ac(x, 0) != 2 && ac(x, 0) != 0 && ac(x, y()) == 2) {
      diffObject[colors[x]] = 1
    }
    //OECS freedom of movement
    if(ac(x, 0) != 3 && ac(x, 0) != 0 && ac(x, y()) == 3) {
      diffObject[colors[x]] = 1
    }
    //EU freedom of movement
    if(ac(x, 0) != 4 && ac(x, 0) != 0 && ac(x, y()) == 4) {
      diffObject[colors[x]] = 1
    }
    //GCC freedom of movement
    if(ac(x, 0) != 5 && ac(x, 0) != 0 && ac(x, y()) == 5) {
      diffObject[colors[x]] = 1
    }
    //Freedom of movement
    if(ac(x, 0) != 5 && ac(x, 0) != 0 && ac(x, y()) == 5) {
      diffObject[colors[x]] = 1
    }
    //visa free
    if(ac(x, 0) != 7 && ac(x, 0) != 6 && ac(x, 0) != 5 && ac(x, 0) != 4 && ac(x, 0) != 3 && ac(x, 0) != 2 && ac(x, 0) != 0 && ac(x, y()) == 7) {
      diffObject[colors[x]] = 1
    }
    //visa on arrival/evisa
    if(ac(x,0) != 8 && ac(x, 0) != 7 && ac(x, 0) != 6 && ac(x, 0) != 5 && ac(x, 0) != 4 && ac(x, 0) != 3 && ac(x, 0) != 2 && ac(x, 0) != 0 && ac(x, y()) == 8) {
      diffObject[colors[x]] = 1
    }
    //visa on arrival
    if(ac(x,0) != 9 && ac(x,0) != 8 && ac(x, 0) != 7 && ac(x, 0) != 6 && ac(x, 0) != 5 && ac(x, 0) != 4 && ac(x, 0) != 3 && ac(x, 0) != 2 && ac(x, 0) != 0 && ac(x, y()) == 9) {
      diffObject[colors[x]] = 1
    }
    //evisa
    if(ac(x, 0) != 10 && ac(x, 0) != 9 && ac(x, 0) != 8 && ac(x, 0) != 7 && ac(x, 0) != 6 && ac(x, 0) != 5 && ac(x, 0) != 4 && ac(x, 0) != 3 && ac(x, 0) != 2 && ac(x, 0) != 0 && ac(x, y()) == 10) {
      diffObject[colors[x]] = 1
    }
    //special permit
    if(ac(x, 0) != 11 && ac(x, 0) != 10 && ac(x, 0) != 9 && ac(x, 0) != 8 && ac(x, 0) != 7 && ac(x, 0) != 6 && ac(x, 0) != 0 && ac(x, y()) == 11) {
      diffObject[colors[x]] = 1
    }
    //simplified visa
    if(ac(x, 0) != 12 && ac(x, 0) != 11 && ac(x, 0) != 10 && ac(x, 0) != 9 && ac(x, 0) != 8 && ac(x, 0) != 7 && ac(x, 0) != 6 && ac(x, 0) != 0 && ac(x, y()) == 12) {
      diffObject[colors[x]] = 1
    }
  }

  setDiff(diffObject)
}