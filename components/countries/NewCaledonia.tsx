import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const NewCaledonia:React.FC = () => {

  const { newCaledoniaColor } = useContext(ColorContext)
  const { newCaledoniaDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'newCaledonia'} onMouseOver={() => setCountrySelect('newCaledonia')}>
  <style jsx>{`
  .newCaledonia {
  fill: ${newCaledoniaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="nc" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(newCaledoniaColor)}/>
  </pattern>
</defs>
{(newCaledoniaDiff == 1) ?
<>
<path fill="url(#nc)" d="M 1915.2 646.9 1915 647 1914.8 647.4 1914.4 647.2 1914.6 646.7 1914.7 646.5 1915 646.6 1915.2 646.9 Z" />
<path fill="url(#nc)" d="M 1919.6 639.1 1919.5 639.2 1919.7 639.6 1920 639.6 1920.4 639.4 1920.3 640 1920.1 640.2 1920 640.6 1919.5 640.9 1919.1 640.7 1919.1 640.6 1918.8 640.3 1918.9 640.1 1918.7 639.9 1918.8 639.5 1918.7 639.1 1918.8 639.1 1919.2 639.2 1919.6 639.1 Z" />
<path fill="url(#nc)" d="M 1916.9 634.8 1916.7 635.3 1916.7 635.7 1916.5 636 1916.8 636.2 1917 636.3 1917.1 636.5 1917 636.7 1917.3 637.1 1917.1 637.1 1916.9 637.6 1916.7 637.8 1916.4 637.7 1916.2 637.4 1916.1 637.2 1915.5 637.1 1915.2 636.6 1915.2 636.4 1915.1 636.1 1915.4 636.1 1915.7 635.9 1916.1 635.6 1916.2 635.3 1915.8 635.1 1915.4 635.2 1915.6 634.8 1915.9 634.7 1916.1 634.8 1916.5 634.5 1916.9 634.8 Z" />
<path fill="url(#nc)" d="M 1913.5 633.2 1913.2 633.8 1913.1 634.1 1913.4 634.1 1912.9 634.6 1912.7 634.8 1912.6 634.6 1912.9 634.2 1913.1 633.7 1913.5 633.2 Z" />
<path fill="url(#nc)" d="M 1913.5 633.2 1913.3 632.8 1913.7 632.8 1913.8 633.2 1913.5 633.2 Z" />
<path fill="url(#nc)" d="M 1899.6 630.8 1899.8 630.9 1900.3 631.8 1900.6 632.1 1900.9 632 1901.1 631.7 1902 632.2 1902.3 632.7 1903 633.3 1903.3 633.7 1903.4 634 1903.8 634.4 1903.9 634.6 1904.1 634.6 1904.4 634.9 1905.3 635.1 1905.4 635.4 1905.4 635.8 1905.7 636.2 1906.1 636.3 1905.8 636.8 1905.9 637 1906.3 637.5 1906.4 637.5 1906.8 638 1906.7 638.4 1907.4 638.6 1907.8 639.1 1908.1 639.1 1908.4 639.3 1908.9 639.7 1908.8 640 1909.1 640 1909.5 640.5 1910.1 640.9 1910.1 641.1 1910.4 641.2 1910.7 641.5 1910.7 641.7 1911 642.3 1911.4 642.7 1911.5 642.6 1911.9 643.2 1912.4 643.3 1912.7 643.6 1912.7 644 1912.8 644.4 1912.9 644.5 1912.7 645.1 1912 645.5 1911.9 645.2 1911.6 645.3 1911.3 645.6 1910.7 644.8 1910.3 644.8 1910.2 644.6 1910 644.6 1909.8 644.9 1908.9 644 1908.7 644 1908.3 643.5 1908.4 642.7 1908.1 642.7 1907.7 642.7 1907.4 642.5 1907.3 642.3 1907.1 642.2 1906.8 642.2 1906.8 641.9 1906.6 641.4 1906.2 641.5 1905.4 641 1905.3 640.8 1905.3 640.5 1905 640.7 1904.4 640.4 1904.3 640 1903.9 639.7 1903.7 639.2 1903.2 639.1 1903.4 638.9 1903.1 638.6 1902.8 638.5 1902.5 637.8 1902.5 637.4 1902.3 637.1 1902 637.1 1901.8 636.5 1901.9 636.3 1901.2 635.9 1900.9 635.7 1900.5 635.1 1900.8 634.9 1900.6 634.7 1900.4 634.4 1900.4 633.9 1899.9 633.6 1899.9 633 1899.7 632.7 1900 632.7 1900.1 632.4 1900 632.2 1899.4 632.2 1899.2 631.9 1899.7 631.2 1899.4 630.9 1899.6 630.8 Z" />
<path fill="url(#nc)" d="M 1900.7 631.1 1900.4 631 1900.5 630.6 1900.7 631.1 Z" />
<path fill="url(#nc)" d="M 1898.4 628.7 1898.2 628.9 1898.1 628.5 1898.3 628.3 1898.4 628.7 Z" />
<circle fill="url(#nc)" r="5" cy="638" cx="1907" stroke="black"/>
</>
:
<>
<path d="M 1915.2 646.9 1915 647 1914.8 647.4 1914.4 647.2 1914.6 646.7 1914.7 646.5 1915 646.6 1915.2 646.9 Z" />
<path d="M 1919.6 639.1 1919.5 639.2 1919.7 639.6 1920 639.6 1920.4 639.4 1920.3 640 1920.1 640.2 1920 640.6 1919.5 640.9 1919.1 640.7 1919.1 640.6 1918.8 640.3 1918.9 640.1 1918.7 639.9 1918.8 639.5 1918.7 639.1 1918.8 639.1 1919.2 639.2 1919.6 639.1 Z" />
<path d="M 1916.9 634.8 1916.7 635.3 1916.7 635.7 1916.5 636 1916.8 636.2 1917 636.3 1917.1 636.5 1917 636.7 1917.3 637.1 1917.1 637.1 1916.9 637.6 1916.7 637.8 1916.4 637.7 1916.2 637.4 1916.1 637.2 1915.5 637.1 1915.2 636.6 1915.2 636.4 1915.1 636.1 1915.4 636.1 1915.7 635.9 1916.1 635.6 1916.2 635.3 1915.8 635.1 1915.4 635.2 1915.6 634.8 1915.9 634.7 1916.1 634.8 1916.5 634.5 1916.9 634.8 Z" />
<path d="M 1913.5 633.2 1913.2 633.8 1913.1 634.1 1913.4 634.1 1912.9 634.6 1912.7 634.8 1912.6 634.6 1912.9 634.2 1913.1 633.7 1913.5 633.2 Z" />
<path d="M 1913.5 633.2 1913.3 632.8 1913.7 632.8 1913.8 633.2 1913.5 633.2 Z" />
<path d="M 1899.6 630.8 1899.8 630.9 1900.3 631.8 1900.6 632.1 1900.9 632 1901.1 631.7 1902 632.2 1902.3 632.7 1903 633.3 1903.3 633.7 1903.4 634 1903.8 634.4 1903.9 634.6 1904.1 634.6 1904.4 634.9 1905.3 635.1 1905.4 635.4 1905.4 635.8 1905.7 636.2 1906.1 636.3 1905.8 636.8 1905.9 637 1906.3 637.5 1906.4 637.5 1906.8 638 1906.7 638.4 1907.4 638.6 1907.8 639.1 1908.1 639.1 1908.4 639.3 1908.9 639.7 1908.8 640 1909.1 640 1909.5 640.5 1910.1 640.9 1910.1 641.1 1910.4 641.2 1910.7 641.5 1910.7 641.7 1911 642.3 1911.4 642.7 1911.5 642.6 1911.9 643.2 1912.4 643.3 1912.7 643.6 1912.7 644 1912.8 644.4 1912.9 644.5 1912.7 645.1 1912 645.5 1911.9 645.2 1911.6 645.3 1911.3 645.6 1910.7 644.8 1910.3 644.8 1910.2 644.6 1910 644.6 1909.8 644.9 1908.9 644 1908.7 644 1908.3 643.5 1908.4 642.7 1908.1 642.7 1907.7 642.7 1907.4 642.5 1907.3 642.3 1907.1 642.2 1906.8 642.2 1906.8 641.9 1906.6 641.4 1906.2 641.5 1905.4 641 1905.3 640.8 1905.3 640.5 1905 640.7 1904.4 640.4 1904.3 640 1903.9 639.7 1903.7 639.2 1903.2 639.1 1903.4 638.9 1903.1 638.6 1902.8 638.5 1902.5 637.8 1902.5 637.4 1902.3 637.1 1902 637.1 1901.8 636.5 1901.9 636.3 1901.2 635.9 1900.9 635.7 1900.5 635.1 1900.8 634.9 1900.6 634.7 1900.4 634.4 1900.4 633.9 1899.9 633.6 1899.9 633 1899.7 632.7 1900 632.7 1900.1 632.4 1900 632.2 1899.4 632.2 1899.2 631.9 1899.7 631.2 1899.4 630.9 1899.6 630.8 Z" />
<path d="M 1900.7 631.1 1900.4 631 1900.5 630.6 1900.7 631.1 Z" />
<path d="M 1898.4 628.7 1898.2 628.9 1898.1 628.5 1898.3 628.3 1898.4 628.7 Z" />
<circle r="5" cy="638" cx="1907" stroke="black"/>
</>
}
</g>
)
}

export default NewCaledonia