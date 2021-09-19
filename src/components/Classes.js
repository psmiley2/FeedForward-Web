import React from 'react'
import Class from './Class'

const Classes = ({ example_classes }) => {
    return (
        <>
         {example_classes.map((example_class) => (
         <Class key={example_class.id} example_class={example_class} />
         ))}   
        </>
    )
}

export default Classes

