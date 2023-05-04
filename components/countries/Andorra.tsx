import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Andorra:React.FC = () => {

  const { andorraColor } = useContext(ColorContext)
  const { AD } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'andorra'} onMouseOver={() => setCountrySelect('andorra')}>
  <style jsx>{`
  .andorra {
  fill: ${andorraColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ad" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(andorraColor)}/>
  </pattern>
</defs>
{(AD == 1) ?
<circle fill="url(#ad)" r="4" cy="230" cx="993" stroke="black"/>
:
<circle r="4" cy="230" cx="993" stroke="black"/>
}
</g>
)
}

export default Andorra