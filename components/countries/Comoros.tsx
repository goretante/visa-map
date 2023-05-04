import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Comoros:React.FC = () => {

  const { comorosColor } = useContext(ColorContext)
  const { KM } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'comoros'} onMouseOver={() => setCountrySelect('comoros')}>
  <style jsx>{`
  .comoros {
  fill: ${comorosColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="km" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(comorosColor)}/>
  </pattern>
</defs>
{(KM == 1) ?
<circle fill="url(#km)" r="5" cy="576" cx="1234" stroke="black"/>
:
<circle r="5" cy="576" cx="1234" stroke="black"/>
}
</g>
)
}

export default Comoros