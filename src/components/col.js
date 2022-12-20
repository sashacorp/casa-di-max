import * as React from 'react'

import '../../node_modules/@drewbot/sass-flexbox-grid/public/sass-flexbox/main.css'

const Col = ({children, clazz=''}) => {
    return (
        <div className={"col " + clazz}>
            {children}
        </div>
    )
    
}

export default Col