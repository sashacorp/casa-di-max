import * as React from 'react'
import Card from '../components/card'
import { Logo } from './gatsby-images/logo'
import Row from './row'
import Col from './col'

const FlashCards = () => {
    return (
        <Row>
            <Col>
               <Card
                   id="nuvolaris"
                   src={Logo}
                   title="Max"
                   content="Il nostro rifugio deve il suo nome a Max, un cagnolino che qualche anno fa era stato affidato alla nostra presidentessa Barbara Pistis affinché' se ne prendesse cura, poiché' i suoi vecchi proprietari non avevano più' la possibilità' di dedicargli le dovute attenzioni. Purtroppo pero', un giorno Max è scomparso e da allora non è più' stato ritrovato.">
               </Card>
            </Col>
            <Col>
               <Card
                   id="documentation"
                   
                   title="Documentation"
                   content="Nuvolaris is a distribution of Apache OpenWhisk that aims to be portable to every Kubernetes. Our vast set of integrated services makes for an awesome developer experience.">
              </Card>
            </Col>
            <Col>
                <Card
                    id="builder"
                    
                    title="Low code Builder"
                    content="Our low-code builder allows the user to build a full-stack serverless application in a GUI editor, without actually writing code. Nuvolaris developers will be able to sell ready-made components on the Nuvolaris Marketplace.">
                </Card>
            </Col>
        </Row>
    )
}

export default FlashCards