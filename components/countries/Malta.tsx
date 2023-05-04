import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Malta:React.FC = () => {

  const { maltaColor } = useContext(ColorContext)
  const { MT } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'malta'} onMouseOver={() => setCountrySelect('malta')}>
  <style jsx>{`
  .malta {
  fill: ${maltaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mt" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(maltaColor)}/>
  </pattern>
</defs>
{(MT == 1) ?
<circle fill="url(#mt)" r="4" cy="271" cx="1062" stroke="black"/>
:
<circle r="4" cy="271" cx="1062" stroke="black"/>
}
</g>
)
}

export default Malta