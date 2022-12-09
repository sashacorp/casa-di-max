import * as React from 'react'

const ContentSection = ({sectionTitle, children}) => {
    return (
        <div className='content-section'>
           {children}
        </div>
    )

}

export default ContentSection