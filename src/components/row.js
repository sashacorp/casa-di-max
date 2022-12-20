import * as React from 'react'
import '../../node_modules/@drewbot/sass-flexbox-grid/public/sass-flexbox/main.css'

const Row = ({ children, clazz = '' }) => {
    return (
        <div className={"row " + clazz}>
            {children}
        </div>
    )

}

export default Row