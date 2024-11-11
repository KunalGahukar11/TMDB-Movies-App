import React from 'react'

const ComponentHeading = (props) => {
    return (
        <h1 className='text-2xl p-2 md:text-3xl font-semibold border-l-4 md:p-3 my-6 self-start w-full'
            style={{ borderLeftColor: '#3d52a0', background: '#ede8f5' }}>
            {props.title}
        </h1>
    )
}

export default ComponentHeading