import { useState } from "react";

function RatingSelect({ select }) {
    const [selected, setSelected] = useState(10)

    const handleChange = e => {
        setSelected(+e.currentTarget.value)
        // select(selected)
        select(+e.currentTarget.value)
    }

    return (
        <ul className='rating'>
            {Array.from({ length: 10 }, (_, i) => (
                <li key={`rating-${i + 1}`}>
                    <input
                        type='radio'
                        id={`num${i + 1}`}
                        name='rating'
                        value={i + 1}
                        onChange={handleChange}
                        checked={selected === i + 1}
                    />
                    <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                </li>
            ))}
        </ul>
        // <ul className="rating">
        //     <li>
        //         <input
        //             type="radio"
        //             id='num1'
        //             name="rating"
        //             value='1'
        //             onChange={handleChange}
        //             checked={selected === 1}
        //         />
        //         <label htmlFor="num1">1</label>
        //     </li>
        //     <li>
        //         <input
        //             type="radio"
        //             id="num2"
        //             name="rating"
        //             value='2'
        //             onChange={handleChange}
        //             checked={selected === 2}
        //         />
        //         <label htmlFor="num2">2</label>
        //     </li>
        //     <li>
        //         <input
        //             type="radio"
        //             id='num3'
        //             name="rating"
        //             value='3'
        //             onChange={handleChange}
        //             checked={selected === 3}
        //         />
        //         <label htmlFor="num3">3</label>
        //     </li>
        // </ul>
    )
}

export default RatingSelect;


