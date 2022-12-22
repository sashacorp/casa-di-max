import * as React from 'react'
import Col from './col'
import Row from './row'

const Card = ({ id, src, title, content }) => {
    return (
        
            <div className="unsigned-card" id={id}>
                <div className="grid-item-1">
                    <div className="unsigned-card-media">
                        <img alt="design" src={src} />
                    </div>
                </div>
                <div className="grid-item-2">
                    <div className="unsigned-card-content">
                        <h1>{title}</h1>
                        <p>{content}</p>
                        <div className="unsigned-card-button">
                            <button> Learn More </button>
                        </div>
                    </div>
                </div>
            </div>
        

    )
}

export default Card 