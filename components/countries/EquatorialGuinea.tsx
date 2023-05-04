import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const EquatorialGuinea:React.FC = () => {

  const { equatorialGuineaColor } = useContext(ColorContext)
  const { GQ } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'equatorialGuinea'} onMouseOver={() => setCountrySelect('equatorialGuinea')}>
  <style jsx>{`
  .equatorialGuinea {
  fill: ${equatorialGuineaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gq" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(equatorialGuineaColor)}/>
  </pattern>
</defs>
{(GQ == 1) ?
<>
<path fill="url(#gq)" d="M1050.3 487.3l0 7.7-8.2 0-1.9 0.3-1.1-0.9 1.9-7.2 9.3 0.1z" />
<circle fill="url(#gq)" r="5" cy="491" cx="1045" stroke="black"/>
</>
:
<>
<path d="M1050.3 487.3l0 7.7-8.2 0-1.9 0.3-1.1-0.9 1.9-7.2 9.3 0.1z" />
<circle r="5" cy="491" cx="1045" stroke="black"/>
</>
}
</g>
)
}

export default EquatorialGuinea