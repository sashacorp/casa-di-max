import * as React from 'react'
import Col from './col'
import Row from './row'

const Card = ({ id, src, title, content }) => {
    return (
        <Row>
            <div className="unsigned-card" id={id}>
                <Col>
                    <div className="unsigned-card-media">
                        <img alt="design" src={src} />
                    </div>
                </Col>
                <Col>
                    <div className="unsigned-card-content">
                        <h1>{title}</h1>
                        <p>{content}</p>
                        <div className="unsigned-card-button">
                            <btn name="Learn more" />
                        </div>
                    </div>
                </Col>
            </div>
        </Row>

    )
}

export default Card 