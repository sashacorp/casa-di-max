import * as React from 'react'
import Card from '../components/card'
import Max from '../images/max.png'
import Onlus from '../images/onlus.png'
import Arzana from '../images/arzana.png'
import SardinienHunde from '../images/sardinienhunde.png'
import Row from './row'
import Col from './col'

const FlashCards = () => {
    return (
        <Col>
            <Row>
               <Card
                   id="max"
                   src={Max}
                   title="Max"
                   content="Il nostro rifugio deve il suo nome a Max, un cagnolino che qualche anno fa era stato affidato alla nostra presidentessa Barbara Pistis affinché' se ne prendesse cura, poiché' i suoi vecchi proprietari non avevano più' la possibilità' di dedicargli le dovute attenzioni. Purtroppo pero', un giorno Max è scomparso e da allora non è più' stato ritrovato.">
               </Card>
            </Row>
            <Row>
               <Card
                   id="confidointe"
                   src= {Onlus}
                   title="ONLUS ConFidointe"
                   content="Con l'obiettivo di avere un impatto positivo sulla vita di tanti cani e gatti che come Max hanno un disperato bisogno di una nuova casa, nel 20?? Barbara ha fondato la ONLUS ConFidointe, che si occupa di riscattare cani e gatti dai rifugi spagnoli, in cui verrebbero altrimenti soppressi dopo 10 giorni di permanenza.">
              </Card>
            </Row>
            <Row>
                <Card
                    id="casadimax"
                    src={Arzana}
                    title="Casa Di Max"
                    content="Il rifugio Casa di Max, aperto nel 20??, rappresenta il secondo grande progetto di salvaguardia di cani e gatti randagi a opera di Barbara. Oggi il rifugio costituisce la dimora sicura di oltre 150 animali tra cani e gatti. Si trova immerso nella natura incontaminata delle campagne di Arzana, un comune della provincia di Nuoro arroccato sulle montagne del territorio ogliastrino. In un simile territorio, caratterizzato da inverni molto rigidi ed estati afose, l'opera di Casa di Max è essenziale per garantire la sopravvivenza di tanti animali che si troverebbero altrimenti esposti a situazioni di estrema vulnerabilità.">
                </Card>
            </Row>
            <Row>
                <Card
                    id="sardinienhunde"
                    src={SardinienHunde}
                    title="SardinienHunde"
                    content="Collaboriamo inoltre con la Onlus tedesca SardinienHunde e.V., fondata a Regensburg nel 2015, che si occupa di protezione e cura di cani nell'entroterra sardo.">
                </Card>
            </Row>
        </Col>
    )
}

export default FlashCards