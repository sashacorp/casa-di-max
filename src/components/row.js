import * as React from 'react'
import '../../node_modules/@drewbot/sass-flexbox-grid/public/sass-flexbox/main.css'

const Row = ({ children, clazz = '' }) => {
    return (
        <div className={"row " + clazz} style={{padding:"0r%", margin:"0%"}}>
            {children}
        </div>
    )

}

export default Row