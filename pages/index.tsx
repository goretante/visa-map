import Map from '../components/Map/Map';
import Head from 'next/head';
import InfoBox from '../components/InfoBox';
type LegendType = {HC:boolean, FoM:boolean, OECSFoM:boolean, MFoM:boolean, EUFoM:boolean, GCCFoM:boolean, VF:boolean, VoAEV:boolean, VoA:boolean, EV:boolean, SP:boolean, CR:boolean}
interface Props {
  legend:LegendType;
  mousePos:number | boolean[];
  hover:boolean;
  setHover:Function;
  countrySelect:string;
  priority:any;
}

export default function Home({ legend, mousePos, hover, setHover, countrySelect, priority }:Props) {
  return (
    <>
    <Head>
      <title>Visa-map</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Map
      legend={legend}
      setHover={setHover}
    />
    <InfoBox
      mousePos={mousePos}
      hover={hover}
      countrySelect={countrySelect}
      priority={priority}
    />
    </>
  )
}
