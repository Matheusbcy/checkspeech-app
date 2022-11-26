import { Paragrafo, Title } from "./style";

function MainPage() {
  return (
    <div className="container-fluid bg-light" style={{height: "60vh"}}>
      <div className="row h-300">
      <div className="col-12 col-sm-6 offset-sm-3 col-md-6 col-lg-5 col-xl-5 offset-0 mt-5 offset-xl-2 align-self-center"><Title>A melhor tecnologia para o seu negócio!</Title></div>
      <div className="col-12 col-sm-6 offset-sm-3 col-md-6 col-lg-8  col-xl-4 offset-0 mt-5 offset-xl-2 align-self-start"><Paragrafo>A MOST é uma empresa provedora de soluções que apoiam processos de onboarding digital. Utilizamos técnicas de Inteligência Artificial e disponibilizamos para o mercado uma suíte completa de soluções que se iniciam desde a entrada de relacionamento com o envio da captura dos documentos, tipificação e extração dos dados, além de soluções antifraude, até a fase da assinatura eletrônica de documentos.</Paragrafo>
      </div>
      <div className="offset-xl-2 offset-sm-3 img-fluid col-4 col-xl-3 align-self-end mx-auto my-5 mx-5">
      </div>
      </div>
    </div>

  )
}
export default MainPage
