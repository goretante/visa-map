import { useEffect, MutableRefObject } from 'react'
import legendCalculation from '../logic/legendCalculation'
import Map from '../components/Map/Map'
import Head from 'next/head'
import Script from 'next/script'
import InfoBox from '../components/InfoBox'
import Legend from '../components/Legend'
import Ad from '../components/Ad'
interface Props {
  selectArrayRef:MutableRefObject<(null|string)[]>;
  mousePos:number | boolean[];
  hover:boolean;
  setHover:Function;
  countrySelect:string;
  priorityRef:MutableRefObject<{[key:string]:string}>;
  setSelectorLoad:Function;
  tempPriorityRef:MutableRefObject<{[key:string]:string}>;
  tempDiffRef:MutableRefObject<{[key:string]:number}>;
  diffRef:MutableRefObject<{[key:string]:number}>;
  panzoomReset:boolean;
  visaDurationRef:MutableRefObject<{[key:string]:number}[]>;
  legend:boolean[];
  setLegend:Function;
}

export default function Home({ selectArrayRef, mousePos, hover, setHover, countrySelect, priorityRef, setSelectorLoad, tempPriorityRef, tempDiffRef, diffRef, panzoomReset, visaDurationRef, legend, setLegend }:Props) {

  useEffect(() => {
    priorityRef.current = tempPriorityRef.current
    diffRef.current = tempDiffRef.current
    if(selectArrayRef.current[0] != null) {
      legendCalculation(setLegend, priorityRef)
    }
    setSelectorLoad(true)
  }, [])

  return (
    <>
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2147951612524944" crossOrigin="anonymous"></Script>
    <Head>
      <title>Visa-map</title>
      <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <Map
      setHover={setHover}
      panzoomReset={panzoomReset}
    />
    <Legend
      legend={legend}
      position={'90'}
    />
    <Ad />
    <InfoBox
      selectArrayRef={selectArrayRef}
      mousePos={mousePos}
      hover={hover}
      countrySelect={countrySelect}
      priorityRef={priorityRef}
      selected={null}
      visaDurationRef={visaDurationRef}
      visaPolicyDurationRef={null}
    />
    </>
  )
}