import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Turkey:React.FC = () => {

  const { turkeyColor } = useContext(ColorContext)
  const { turkeyDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'turkey'} onMouseOver={() => setCountrySelect('turkey')}>
  <style jsx>{`
  .turkey {
  fill: ${turkeyColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="tr" x="0" y="0" width="1" height="1" viewBox="20 0 28 28">
    <image width="1500" height="1500" xlinkHref={gridCalculation(turkeyColor)}/>
  </pattern>
  <pattern id="tr2" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(turkeyColor)}/>
  </pattern>
</defs>
{(turkeyDiff == 1) ?
<>
<path fill="url(#tr)" d="M 1201.7 235.3 1207.2 235 1212.8 238.2 1214.1 240.4 1214.2 243.5 1218.4 245.1 1220.8 246.9 1217.5 248.8 1220.4 256.1 1219.7 258.1 1223.5 263.2 1221.1 264.3 1219 262.7 1212.7 261.8 1210.6 262.8 1204.7 263.8 1201.8 263.7 1196.1 266.1 1191.7 266.1 1188.7 264.9 1183.1 266.7 1181.2 265.5 1181.4 269 1180.2 270.4 1178.9 271.8 1176.6 268.9 1178.3 266.5 1175.1 267.1 1170.5 265.6 1167.3 269.3 1159.3 270 1154.6 266.6 1148.9 266.4 1147.9 269 1144.3 269.8 1138.9 266.4 1133.1 266.5 1129.3 260.1 1125.1 256.6 1127.1 251.6 1123.5 248.5 1128.6 242.4 1136.6 242.2 1138.2 237.3 1148.2 238.2 1153.8 234.1 1159.6 232.3 1168.1 232.1 1177.9 236.6 1185.8 239.1 1191.6 238.1 1196.2 238.7 1201.7 235.3 Z" stroke="black"/>
<path fill="url(#tr2)" d="M 1121.9 239.9 1123.1 239.2 1124.2 235.2 1121.5 233.5 1126.5 231.5 1131.1 232.3 1132 234.8 1136.8 236.8 1136.1 238.4 1129.9 238.7 1127.9 240.7 1124 244.1 1122 241.2 1121.9 239.9 Z" stroke="black"/>
</>
:
<>
<path d="M 1201.7 235.3 1207.2 235 1212.8 238.2 1214.1 240.4 1214.2 243.5 1218.4 245.1 1220.8 246.9 1217.5 248.8 1220.4 256.1 1219.7 258.1 1223.5 263.2 1221.1 264.3 1219 262.7 1212.7 261.8 1210.6 262.8 1204.7 263.8 1201.8 263.7 1196.1 266.1 1191.7 266.1 1188.7 264.9 1183.1 266.7 1181.2 265.5 1181.4 269 1180.2 270.4 1178.9 271.8 1176.6 268.9 1178.3 266.5 1175.1 267.1 1170.5 265.6 1167.3 269.3 1159.3 270 1154.6 266.6 1148.9 266.4 1147.9 269 1144.3 269.8 1138.9 266.4 1133.1 266.5 1129.3 260.1 1125.1 256.6 1127.1 251.6 1123.5 248.5 1128.6 242.4 1136.6 242.2 1138.2 237.3 1148.2 238.2 1153.8 234.1 1159.6 232.3 1168.1 232.1 1177.9 236.6 1185.8 239.1 1191.6 238.1 1196.2 238.7 1201.7 235.3 Z" stroke="black"/>
<path d="M 1121.9 239.9 1123.1 239.2 1124.2 235.2 1121.5 233.5 1126.5 231.5 1131.1 232.3 1132 234.8 1136.8 236.8 1136.1 238.4 1129.9 238.7 1127.9 240.7 1124 244.1 1122 241.2 1121.9 239.9 Z" stroke="black"/>
</>
}
</g>
)
}

export default Turkey