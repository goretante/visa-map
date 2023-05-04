import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Barbados:React.FC = () => {
    
  const { barbadosColor } = useContext(ColorContext)
  const { BB } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'barbados'} onMouseOver={() => setCountrySelect('barbados')}>
  <style jsx>{`
  .barbados {
  fill: ${barbadosColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="bb" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(barbadosColor)}/>
  </pattern>
</defs>
{(BB == 1) ?
<circle fill="url(#bb)" r="3.25" cy="422" cx="655" stroke="black"/>
:
<circle r="3.25" cy="422" cx="655" stroke="black"/>
}
</g>
)
}
    
export default Barbados