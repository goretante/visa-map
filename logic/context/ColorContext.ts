import { createContext } from 'react';
interface ContextTypes {abkhaziaColor:any, afghanistanColor:any,albaniaColor:any,algeriaColor:any,americanSamoaColor:any,andorraColor:any, angolaColor:any,anguillaColor:any,antiguaAndBarbudaColor:any,argentinaColor:any, armeniaColor:any,arubaColor:any,australiaColor:any,austriaColor:any,azerbaijanColor:any,bahamasColor:any, bahrainColor:any,bangladeshColor:any,barbadosColor:any,belarusColor:any,belgiumColor:any,belizeColor:any,beninColor:any,bermudaColor:any, bhutanColor:any, boliviaColor:any, bonaireColor:any, bosniaAndHerzegovinaColor:any, botswanaColor:any, bouvetIslandColor:any, brazilColor:any, britishIndianOceanTerritoryColor:any, britishVirginIslandsColor:any, bruneiColor:any, bulgariaColor:any, burkinaFasoColor:any, burundiColor:any, cambodiaColor:any, cameroonColor:any, canadaColor:any, capeVerdeColor:any, caymanIslandsColor:any, centralAfricanRepublicColor:any, chadColor:any, chileColor:any, chinaColor:any, colombiaColor:any, comorosColor:any, cookIslandsColor:any, costaRicaColor:any, croatiaColor:any, cubaColor:any, curacaoColor:any, cyprusColor:any, czechRepublicColor:any, democraticRepublicOfTheCongoColor:any, denmarkColor:any, djiboutiColor:any, dominicaColor:any, dominicanRepublicColor:any, eastTimorColor:any, ecuadorColor:any, egyptColor:any, elSalvadorColor:any, equatorialGuineaColor:any, eritreaColor:any, estoniaColor:any, eswatiniColor:any, ethiopiaColor:any, falklandIslandsColor:any, faroeIslandsColor:any, fijiColor:any, finlandColor:any, franceColor:any, frenchGuianaColor:any, frenchPolynesiaColor:any, gabonColor:any, gambiaColor:any, georgiaColor:any, germanyColor:any, ghanaColor:any, gibraltarColor:any, greeceColor:any, greenlandColor:any, grenadaColor:any, guadeloupeColor:any, guamColor:any, guatemalaColor:any, guernseyColor:any, guineaColor:any, guineaBissauColor:any, guyanaColor:any, haitiColor:any, heardIslandAndMcDonaldIslandsColor:any, hondurasColor:any, hongKongColor:any, hungaryColor:any, icelandColor:any, indiaColor:any, indonesiaColor:any, iranColor:any, iraqColor:any, irelandColor:any, isleOfManColor:any, israelColor:any, italyColor:any, ivoryCoastColor:any, jamaicaColor:any, janMayenColor:any, japanColor:any, jerseyColor:any, jordanColor:any, kazakhstanColor:any, kenyaColor:any, kiribatiColor:any, kosovoColor:any, kuwaitColor:any, kyrgyzstanColor:any, laosColor:any, latviaColor:any, lebanonColor:any, lesothoColor:any, liberiaColor:any, libyaColor:any, liechtensteinColor:any, lithuaniaColor:any, luxembourgColor:any, macaoColor:any, madagascarColor:any, malawiColor:any, malaysiaColor:any, maldivesColor:any, maliColor:any, maltaColor:any, marshallIslandsColor:any, martiniqueColor:any, mauritaniaColor:any, mauritiusColor:any, mayotteColor:any, mexicoColor:any, micronesiaColor:any, moldovaColor:any, monacoColor:any, mongoliaColor:any, montenegroColor:any, montserratColor:any, moroccoColor:any, mozambiqueColor:any, myanmarColor:any, namibiaColor:any, nauruColor:any, nepalColor:any, netherlandsColor:any, newCaledoniaColor:any, newZealandColor:any, nicaraguaColor:any, nigerColor:any, nigeriaColor:any, niueColor:any, norfolkIslandColor:any, northernCyprusColor:any, northernMarianaIslandsColor:any, northKoreaColor:any, northMacedoniaColor:any, norwayColor:any, omanColor:any, pakistanColor:any, palauColor:any, palestineColor:any, panamaColor:any, papuaNewGuineaColor:any, paraguayColor:any, peruColor:any, philippinesColor:any, pitcairnIslandsColor:any, polandColor:any, portugalColor:any, qatarColor:any, republicOfTheCongoColor:any, reunionColor:any, romaniaColor:any, russiaColor:any, rwandaColor:any, sabaColor:any, saintBarthelemyColor:any, saintHelenaColor:any, saintKittsAndNevisColor:any, saintLuciaColor:any, saintMartinColor:any, saintPierreAndMiquelonColor:any, saintVincentAndTheGrenadinesColor:any, samoaColor:any, sanMarinoColor:any, saoTomeAndPrincipeColor:any, saudiArabiaColor:any, senegalColor:any, serbiaColor:any, seychellesColor:any, sierraLeoneColor:any, singaporeColor:any, sintEustatiusColor:any, sintMaartenColor:any, slovakiaColor:any, sloveniaColor:any, solomonIslandsColor:any, somaliaColor:any, somalilandColor:any, southAfricaColor:any, southGeorgiaAndTheSouthSandwichIslandsColor:any, southKoreaColor:any, southOssetiaColor:any, southSudanColor:any, spainColor:any, sriLankaColor:any, sudanColor:any, surinameColor:any, svalbardColor:any, swedenColor:any, switzerlandColor:any, syriaColor:any, taiwanColor:any, tajikistanColor:any, tanzaniaColor:any, thailandColor:any, togoColor:any, tokelauColor:any, tongaColor:any, transnistriaColor:any, trinidadAndTobagoColor:any, tunisiaColor:any, turkeyColor:any, turkmenistanColor:any, turksAndCaicosColor:any, tuvaluColor:any, ugandaColor:any, ukraineColor:any, unitedArabEmiratesColor:any, unitedKingdomColor:any, unitedStatesColor:any, unitedStatesVirginIslandsColor:any, uruguayColor:any, uzbekistanColor:any, vanuatuColor:any, vaticanCityColor:any, venezuelaColor:any, vietnamColor:any, wallisAndFutunaColor:any, westernSaharaColor:any, yemenColor:any, zambiaColor:any, zimbabweColor:any };//context requires type declaration, provided here

export const ColorContext = createContext<ContextTypes>({} as any); //provides context object that country components pull rgb values from