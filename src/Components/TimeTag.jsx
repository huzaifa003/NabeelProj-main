import React from 'react'

const TimeTag = (props) => {
    return (
        <div className='flex flex-col px-8 py-4 bg-blue-lightmdbg text-white text-semibold shadow-sm rounded-md text-xl timeTagText'>
            <span>{props.month} {props.type}</span>
            <span>{props.credit} Credit</span>
        </div>
    )
}

export default TimeTag