import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Reunion = () => {

    const { reunionColor } = useContext(ColorContext)

return (
<g className={'reunion'}>
    <style jsx>{`
    .reunion {
    fill: ${reunionColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="635" cx="1295" stroke="black"/>
</g>
)
}

export default Reunion