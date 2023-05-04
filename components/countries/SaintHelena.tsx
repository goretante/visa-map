import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const SaintHelena:React.FC = () => {

  const { saintHelenaColor } = useContext(ColorContext)
  const { SH } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'saintHelena'} onMouseOver={() => setCountrySelect('saintHelena')}>
  <style jsx>{`
  .saintHelena {
  fill: ${saintHelenaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="sh" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(saintHelenaColor)}/>
  </pattern>
</defs>
{(SH == 1) ?
<circle fill="url(#sh)" r="5" cy="600" cx="947" stroke="black"/>
:
<circle r="5" cy="600" cx="947" stroke="black"/>
}
</g>
)
}

export default SaintHelena