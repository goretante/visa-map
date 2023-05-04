import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Indonesia:React.FC = () => {

  const { indonesiaColor } = useContext(ColorContext)
  const { ID } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'indonesia'} onMouseOver={() => setCountrySelect('indonesia')}>
  <style jsx>{`
  .indonesia {
  fill: ${indonesiaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="id" x="0" y="0" width="1" height="1" viewBox="0 10 45 45">
    <image width="1500" height="1500" xlinkHref={gridCalculation(indonesiaColor)}/>
  </pattern>
  <pattern id="id2" x="0" y="0" width="1" height="1" viewBox="10 10 40 40">
    <image width="1500" height="1500" xlinkHref={gridCalculation(indonesiaColor)}/>
  </pattern>
  <pattern id="id3" x="0" y="0" width="1" height="1" viewBox="20 0 15 15">
    <image width="1500" height="1500" xlinkHref={gridCalculation(indonesiaColor)}/>
  </pattern>
  <pattern id="id4" x="0" y="0" width="1" height="1" viewBox="0 20 28 28">
    <image width="1500" height="1500" xlinkHref={gridCalculation(indonesiaColor)}/>
  </pattern>
  <pattern id="id5" x="0" y="0" width="1" height="1" viewBox="40 20 28 28">
    <image width="1500" height="1500" xlinkHref={gridCalculation(indonesiaColor)}/>
  </pattern>
</defs>
{(ID == 1) ?
<>
<path fill="url(#id)" d="M 1667.5 567.6 1665.1 567.7 1658 563.2 1663.4 561.9 1666.2 563.9 1668 565.8 1667.5 567.6 Z" stroke="black"/>
<path fill="url(#id)" d="M 1692.3 558.9 1692.8 560.2 1692.7 562.1 1688.6 566.9 1683.6 568.3 1683 567.6 1683.7 565.4 1686.5 561.5 1692.3 558.9 Z" stroke="black"/>
<path fill="url(#id5)" d="M 1652.7 553.8 1654.6 555.5 1658.2 555 1659.4 557.7 1652.7 559 1648.8 559.9 1645.7 559.8 1647.9 556.1 1651.1 556.1 1652.7 553.8 Z" stroke="black"/>
<path fill="url(#id5)" d="M 1681 553.8 1679.9 557.4 1671.3 559.2 1663.8 558.4 1664 556 1668.6 554.7 1672 556.6 1675.8 556.1 1681 553.8 Z" stroke="black"/>
<path fill="url(#id3)" d="M 1600.8 545.3 1611.6 546 1613 543.3 1623.3 546.4 1625.1 550.6 1633.5 551.8 1640.2 555.6 1633.6 558 1627.5 555.4 1622.4 555.6 1616.6 555.1 1611.4 554 1605 551.5 1600.9 550.9 1598.5 551.7 1588.3 549 1587.5 546.3 1582.4 545.8 1586.6 539.7 1593.4 540.1 1597.8 542.6 1600.2 543.1 1600.8 545.3 Z" stroke="black"/>
<path fill="url(#id)" d="M 1748.7 541.7 1745.5 546.1 1745.3 541.3 1746.4 539 1747.7 536.8 1748.9 538.7 1748.7 541.7 Z" stroke="black"/>
<path fill="url(#id)" d="M 1707.3 524 1705.1 526.2 1701.3 525 1700.3 522.2 1706 521.9 1707.3 524 Z" stroke="black"/>
<path fill="url(#id5)" d="M 1725.7 521.7 1727.5 526.6 1722.9 523.9 1718.2 523.4 1714.9 523.8 1711 523.6 1712.5 520.1 1719.5 519.8 1725.7 521.7 Z" stroke="black"/>
<path fill="url(#id)" d="M 1785.5 518.5 1784.5 539.4 1782.9 560.4 1778.3 555.1 1772.7 553.8 1771.2 555.6 1764 555.8 1766.8 550.6 1770.5 548.8 1769.5 541.8 1767.2 536.5 1756.5 531 1751.9 530.5 1743.6 524.5 1741.8 527.7 1739.6 528.2 1738.5 525.9 1738.6 523.1 1734.4 519.9 1740.6 517.6 1744.6 517.7 1744.2 516 1735.9 516 1733.7 512.2 1728.7 511 1726.4 507.8 1734 506.3 1736.9 504.2 1746 506.8 1746.9 509.2 1748.2 519.6 1753.9 523.4 1758.9 516.6 1765.5 512.8 1770.5 512.8 1775.3 515 1779.4 517.3 1785.5 518.5 Z" stroke="black"/>
<path fill="url(#id4)" d="M 1696.4 492.7 1691.9 499.1 1687.6 500.3 1682.2 499.1 1672.7 499.4 1667.8 500.3 1667 505.2 1672 510.9 1675.1 508 1685.7 505.8 1685.2 508.7 1682.7 507.8 1680.2 511.6 1675.1 514.1 1680.2 522.3 1679.1 524.5 1683.9 531.9 1683.6 536.1 1680.5 538 1678.4 535.7 1681.4 530.5 1675.7 533 1674.4 531.2 1675.2 528.7 1671.3 524.9 1672 518.7 1668.1 520.6 1668.3 528.1 1668.1 537.3 1664.4 538.2 1662.1 536.4 1664 530.5 1663.4 524.3 1661 524.2 1659.4 519.8 1661.9 515.6 1662.8 510.5 1665.8 500.8 1666.9 498.2 1671.7 493.4 1676.2 495.3 1683.3 496.2 1689.8 495.9 1695.4 491.3 1696.4 492.7 Z" stroke="black"/>
<path fill="url(#id5)" d="M 1716 494.6 1715.7 500.2 1712.8 499.5 1711.9 503.4 1714.2 506.8 1712.6 507.6 1710.4 503.5 1708.7 495.3 1709.7 490.2 1711.5 487.9 1712 491.4 1715.4 491.9 1716 494.6 Z" stroke="black"/>
<path fill="url(#id2)" d="M 1608 488.9 1609 493.2 1612.9 496.9 1616.6 495.6 1620.2 496 1623.5 492.8 1626.2 492.2 1631.6 494 1636.2 492.6 1638.8 483.7 1640.9 481.5 1642.6 474.2 1649.1 474.2 1654.1 475.3 1651.1 481.1 1655.5 487.1 1654.6 490.1 1661 496 1654.3 496.8 1652.5 501.2 1652.7 507 1647.2 511.4 1646.8 517.8 1644.3 527.6 1643.6 525.3 1637 528.2 1634.9 524.3 1630.9 523.9 1628.1 521.8 1621.3 524.2 1619.4 521 1615.6 521.4 1611 520.7 1610.4 512.1 1607.6 510.3 1604.9 504.8 1604.1 499.2 1604.7 493.2 1608 488.9 Z" stroke="black"/>
<path fill="url(#id)" d="M 1585.2 539.4 1579 539.5 1574.5 534.2 1567.4 528.9 1565.1 525 1561 519.8 1558.3 515 1554.1 506 1549.2 500.6 1547.5 495.1 1545.3 490.1 1540.1 486.1 1537 480.6 1532.6 477 1526.4 469.9 1525.8 466.6 1529.4 466.9 1538.3 468.1 1543.5 474.4 1548.1 478.8 1551.3 481.4 1556.8 488.3 1562.6 488.4 1567.4 492.8 1570.8 498.2 1575.1 501.2 1572.8 506.4 1576.1 508.6 1578.1 508.8 1579 513.3 1580.9 516.8 1585 517.4 1587.6 521.5 1585.9 529.5 1585.2 539.4 Z" stroke="black"/>
</>
:
<>
<path d="M 1667.5 567.6 1665.1 567.7 1658 563.2 1663.4 561.9 1666.2 563.9 1668 565.8 1667.5 567.6 Z" stroke="black"/>
<path d="M 1692.3 558.9 1692.8 560.2 1692.7 562.1 1688.6 566.9 1683.6 568.3 1683 567.6 1683.7 565.4 1686.5 561.5 1692.3 558.9 Z" stroke="black"/>
<path d="M 1652.7 553.8 1654.6 555.5 1658.2 555 1659.4 557.7 1652.7 559 1648.8 559.9 1645.7 559.8 1647.9 556.1 1651.1 556.1 1652.7 553.8 Z" stroke="black"/>
<path d="M 1681 553.8 1679.9 557.4 1671.3 559.2 1663.8 558.4 1664 556 1668.6 554.7 1672 556.6 1675.8 556.1 1681 553.8 Z" stroke="black"/>
<path d="M 1600.8 545.3 1611.6 546 1613 543.3 1623.3 546.4 1625.1 550.6 1633.5 551.8 1640.2 555.6 1633.6 558 1627.5 555.4 1622.4 555.6 1616.6 555.1 1611.4 554 1605 551.5 1600.9 550.9 1598.5 551.7 1588.3 549 1587.5 546.3 1582.4 545.8 1586.6 539.7 1593.4 540.1 1597.8 542.6 1600.2 543.1 1600.8 545.3 Z" stroke="black"/>
<path d="M 1748.7 541.7 1745.5 546.1 1745.3 541.3 1746.4 539 1747.7 536.8 1748.9 538.7 1748.7 541.7 Z" stroke="black"/>
<path d="M 1707.3 524 1705.1 526.2 1701.3 525 1700.3 522.2 1706 521.9 1707.3 524 Z" stroke="black"/>
<path d="M 1725.7 521.7 1727.5 526.6 1722.9 523.9 1718.2 523.4 1714.9 523.8 1711 523.6 1712.5 520.1 1719.5 519.8 1725.7 521.7 Z" stroke="black"/>
<path d="M 1785.5 518.5 1784.5 539.4 1782.9 560.4 1778.3 555.1 1772.7 553.8 1771.2 555.6 1764 555.8 1766.8 550.6 1770.5 548.8 1769.5 541.8 1767.2 536.5 1756.5 531 1751.9 530.5 1743.6 524.5 1741.8 527.7 1739.6 528.2 1738.5 525.9 1738.6 523.1 1734.4 519.9 1740.6 517.6 1744.6 517.7 1744.2 516 1735.9 516 1733.7 512.2 1728.7 511 1726.4 507.8 1734 506.3 1736.9 504.2 1746 506.8 1746.9 509.2 1748.2 519.6 1753.9 523.4 1758.9 516.6 1765.5 512.8 1770.5 512.8 1775.3 515 1779.4 517.3 1785.5 518.5 Z" stroke="black"/>
<path d="M 1696.4 492.7 1691.9 499.1 1687.6 500.3 1682.2 499.1 1672.7 499.4 1667.8 500.3 1667 505.2 1672 510.9 1675.1 508 1685.7 505.8 1685.2 508.7 1682.7 507.8 1680.2 511.6 1675.1 514.1 1680.2 522.3 1679.1 524.5 1683.9 531.9 1683.6 536.1 1680.5 538 1678.4 535.7 1681.4 530.5 1675.7 533 1674.4 531.2 1675.2 528.7 1671.3 524.9 1672 518.7 1668.1 520.6 1668.3 528.1 1668.1 537.3 1664.4 538.2 1662.1 536.4 1664 530.5 1663.4 524.3 1661 524.2 1659.4 519.8 1661.9 515.6 1662.8 510.5 1665.8 500.8 1666.9 498.2 1671.7 493.4 1676.2 495.3 1683.3 496.2 1689.8 495.9 1695.4 491.3 1696.4 492.7 Z" stroke="black"/>
<path d="M 1716 494.6 1715.7 500.2 1712.8 499.5 1711.9 503.4 1714.2 506.8 1712.6 507.6 1710.4 503.5 1708.7 495.3 1709.7 490.2 1711.5 487.9 1712 491.4 1715.4 491.9 1716 494.6 Z" stroke="black"/>
<path d="M 1608 488.9 1609 493.2 1612.9 496.9 1616.6 495.6 1620.2 496 1623.5 492.8 1626.2 492.2 1631.6 494 1636.2 492.6 1638.8 483.7 1640.9 481.5 1642.6 474.2 1649.1 474.2 1654.1 475.3 1651.1 481.1 1655.5 487.1 1654.6 490.1 1661 496 1654.3 496.8 1652.5 501.2 1652.7 507 1647.2 511.4 1646.8 517.8 1644.3 527.6 1643.6 525.3 1637 528.2 1634.9 524.3 1630.9 523.9 1628.1 521.8 1621.3 524.2 1619.4 521 1615.6 521.4 1611 520.7 1610.4 512.1 1607.6 510.3 1604.9 504.8 1604.1 499.2 1604.7 493.2 1608 488.9 Z" stroke="black"/>
<path d="M 1585.2 539.4 1579 539.5 1574.5 534.2 1567.4 528.9 1565.1 525 1561 519.8 1558.3 515 1554.1 506 1549.2 500.6 1547.5 495.1 1545.3 490.1 1540.1 486.1 1537 480.6 1532.6 477 1526.4 469.9 1525.8 466.6 1529.4 466.9 1538.3 468.1 1543.5 474.4 1548.1 478.8 1551.3 481.4 1556.8 488.3 1562.6 488.4 1567.4 492.8 1570.8 498.2 1575.1 501.2 1572.8 506.4 1576.1 508.6 1578.1 508.8 1579 513.3 1580.9 516.8 1585 517.4 1587.6 521.5 1585.9 529.5 1585.2 539.4 Z" stroke="black"/>
</>
}
</g>
)
}

export default Indonesia