import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Moldova:React.FC = () => {

  const { moldovaColor } = useContext(ColorContext)
  const { moldovaDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'moldova'} onMouseOver={() => setCountrySelect('moldova')}>
  <style jsx>{`
  .moldova {
  fill: ${moldovaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="md" x="0" y="0" width="1" height="1" viewBox="0 0 18 18">
    <image width="1500" height="1500" xlinkHref={gridCalculation(moldovaColor)}/>
  </pattern>
</defs>
{(moldovaDiff == 1) ?
<path fill="url(#md)" d="M1129.4 210.3l-1.3-2.9 0.2-2.7-0.6-2.7-3.4-3.8-2-2.6-1.8-1.8-1.6-0.7 1.1-0.9 3.2-0.6 4 1.9 2 0.3 2.6 1.7-0.1 2.1 2 1 1.1 2.6 2 1.6-0.2 1 1 0.6-1.3 0.5-3-0.2-0.6-0.9-1 0.5 0.6 1.1-1.1 2.1-0.6 2.1-1.2 0.7z" />
:
<path d="M1129.4 210.3l-1.3-2.9 0.2-2.7-0.6-2.7-3.4-3.8-2-2.6-1.8-1.8-1.6-0.7 1.1-0.9 3.2-0.6 4 1.9 2 0.3 2.6 1.7-0.1 2.1 2 1 1.1 2.6 2 1.6-0.2 1 1 0.6-1.3 0.5-3-0.2-0.6-0.9-1 0.5 0.6 1.1-1.1 2.1-0.6 2.1-1.2 0.7z" />
}
</g>
)
}

export default Moldova