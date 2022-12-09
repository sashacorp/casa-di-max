import * as React from 'react'
import ContentSection from '../components/contentsection'

const HomePageContent = () => {
    return (
        <div className='homepagecontent'>
        <ContentSection
          key="1"
        >
          <p>Il nostro rifugio deve il suo nome a Max, un cagnolino che qualche anno fa era stato affidato alla nostra presidentessa Barbara Pistis affinché' se ne prendesse cura, poiché' i suoi vecchi proprietari non avevano più' la possibilità' di dedicargli le dovute attenzioni. Purtroppo pero', un giorno Max è scomparso e da allora non è più' stato ritrovato.</p>
        </ContentSection>
        <ContentSection
          key="2"
        >
          <p>Con l'obiettivo di avere un impatto positivo sulla vita di tanti cani e gatti che come Max hanno un disperato bisogno di una nuova casa, nel 20?? Barbara ha fondato la ONLUS conFidointe, che si occupa di riscattare cani e gatti dai rifugi spagnoli, in cui verrebbero altrimenti soppressi dopo 10 giorni di permanenza.</p>
        </ContentSection>
        <ContentSection
          key="3"
        >
          <p>Il rifugio Casa di Max, aperto nel 20??, rappresenta il secondo grande progetto di salvaguardia di cani e gatti randagi a opera di Barbara. Oggi il rifugio costituisce la dimora sicura di oltre 150 animali tra cani e gatti. Si trova immerso nella natura incontaminata delle campagne di Arzana, un comune della provincia di Nuoro arroccato sulle montagne del territorio ogliastrino. In un simile territorio, caratterizzato da inverni molto rigidi ed estati afose, l'opera di Casa di Max è essenziale per garantire la sopravvivenza di tanti animali che si troverebbero altrimenti esposti a situazioni di estrema vulnerabilità.</p>
        </ContentSection>
        <ContentSection
          key="4"
        >
          <p>Beneficiamo d'indispensabili donazioni di cibo ed elementi strutturali, come lettiere e piscinette, da parte di generosi benefattori. Accettiamo inoltre donazioni di denaro che garantiscono la condotta di controlli di salute periodici e la somministrazione di cure da parte di svariati veterinari con i quali lavoriamo a stretto contatto.</p>
        </ContentSection>
        <ContentSection
          key="5"
        >
          <p>La Casa di Max si avvale del lavoro volontario di soli ??? collaboratori, che dedicano il loro tempo libero a offrire aiuto concreto ai nostri animali. La nostra presidentessa, Barbara, si dedica invece alla gestione del rifugio a tempo pieno e a 360 gradi.</p>
        </ContentSection>
        <ContentSection
          key="6"
        >
          <p>Collaboriamo inoltre con la Onlus tedesca SardinienHunde e.V., fondata a Regensburg nel 2015, che si occupa di protezione e cura di cani nell'entroterra sardo.</p>
        </ContentSection>
        <ContentSection
          key="7"
        >
          <p>Ciò che a te può sembrare un piccolo gesto ha la capacità di rivoluzionare la vita di un cane o gatto.</p>
        </ContentSection>
        <ContentSection
          key="8"
        >
          <p>Diamo insieme voce a chi non ce l'ha, unisciti alla nostra rivoluzione!</p>
        </ContentSection>
        
        </div>
    )
}

export default HomePageContent