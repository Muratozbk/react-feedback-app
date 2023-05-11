import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
// import { useState } from 'react'

function FeedbackItem({ item, handleDelete }) {
    return (
        // <Card reverse={true}>
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className='close'>
                <FaTimes color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card >
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem

// const [rating, setRating] = useState(7)
// const handle = () => setRating(prev => { return prev + 1 })