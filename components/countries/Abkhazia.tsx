import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Abkhazia:React.FC = () => {

  const { abkhaziaColor } = useContext(ColorContext)
  const { AB } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'abkhazia'} onMouseOver={() => setCountrySelect('abkhazia')}>
  <style jsx>{`
  .abkhazia {
  fill: ${abkhaziaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ab" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(abkhaziaColor)}/>
  </pattern>
</defs>
{(AB == 1) ?
<circle fill="url(#ab)" r="3.5" cy="227" cx="1199" stroke="black"/>
:
<circle r="3.5" cy="227" cx="1199" stroke="black"/>
}
</g>
)
}

export default Abkhazia