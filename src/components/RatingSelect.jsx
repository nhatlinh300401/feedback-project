import { useState } from "react"

export default function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10)

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }

  return (
    <ul className='rating'>
        <li>
            <input
                type='radio'
                id='num1'
                num='rating'
                value='1'
                onChange={handleChange}
                checked={selected === 1}
            />
            <label htmlFor="num1">1</label>
        </li>
        <li>
            <input
                type='radio'
                id='num2'
                num='rating'
                value='2'
                onChange={handleChange}
                checked={selected === 2}
            />
            <label htmlFor="num2">2</label>
        </li>
        <li>
            <input
                type='radio'
                id='num3'
                num='rating'
                value='3'
                onChange={handleChange}
                checked={selected === 3}
            />
            <label htmlFor="num3">3</label>
        </li>
        <li>
            <input
                type='radio'
                id='num4'
                num='rating'
                value='4'
                onChange={handleChange}
                checked={selected === 4}
            />
            <label htmlFor="num4">4</label>
        </li>
        <li>
            <input
                type='radio'
                id='num5'
                num='rating'
                value='5'
                onChange={handleChange}
                checked={selected === 5}
            />
            <label htmlFor="num5">5</label>
        </li>
        <li>
            <input
                type='radio'
                id='num6'
                num='rating'
                value='6'
                onChange={handleChange}
                checked={selected === 6}
            />
            <label htmlFor="num6">6</label>
        </li>
        <li>
            <input
                type='radio'
                id='num7'
                num='rating'
                value='7'
                onChange={handleChange}
                checked={selected === 7}
            />
            <label htmlFor="num7">7</label>
        </li>
        <li>
            <input
                type='radio'
                id='num8'
                num='rating'
                value='8'
                onChange={handleChange}
                checked={selected === 8}
            />
            <label htmlFor="num8">8</label>
        </li>
        <li>
            <input
                type='radio'
                id='num9'
                num='rating'
                value='9'
                onChange={handleChange}
                checked={selected === 9}
            />
            <label htmlFor="num9">9</label>
        </li>
        <li>
            <input
                type='radio'
                id='num10'
                num='rating'
                value='10'
                onChange={handleChange}
                checked={selected === 10}
            />
            <label htmlFor="num10">10</label>
        </li>
    </ul>
  )
}
