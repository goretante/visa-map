import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const CaymanIslands:React.FC = () => {

  const { caymanIslandsColor } = useContext(ColorContext)
  const { KY } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'caymanIslands'} onMouseOver={() => setCountrySelect('caymanIslands')}>
  <style jsx>{`
  .caymanIslands {
  fill: ${caymanIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ky" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(caymanIslandsColor)}/>
  </pattern>
</defs>
{(KY == 1) ?
<circle fill="url(#ky)" r="5" cy="377" cx="532" stroke="black"/>
:
<circle r="5" cy="377" cx="532" stroke="black"/>
}
</g>
)
}

export default CaymanIslands