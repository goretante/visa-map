import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Monaco:React.FC = () => {

  const { monacoColor } = useContext(ColorContext)
  const { MC } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'monaco'} onMouseOver={() => setCountrySelect('monaco')}>
  <style jsx>{`
  .monaco {
  fill: ${monacoColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mc" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(monacoColor)}/>
  </pattern>
</defs>
{(MC == 1) ?
<circle fill="url(#mc)" r="4" cy="224" cx="1021" stroke="black"/>
:
<circle r="4" cy="224" cx="1021" stroke="black"/>
}
</g>
)
}

export default Monaco