import { Button, ContainerCard, ContainerCardPreco, Paragrafo, Preço, Titulo } from "./style"

function CardPrecos ({post}) {
  return (
    <ContainerCardPreco>
      <ContainerCard key={post.id}>
      <Titulo>{post.nome}</Titulo>
      <p>Preço Mensal: R$ <Preço>{post.precoMes}.00</Preço></p>
      <p>Preço Anual: R$ <Preço>{post.precoAno}.</Preço></p>
      <Button>Selecionar</Button>
      <hr />
      <Paragrafo>Transcrição de Áudio Assíncrono: {post.tranAudioAssync} minutos.</Paragrafo>
      <Paragrafo>Transcrição de Áudio em tempo real: {post.transTempoReal} minutor.</Paragrafo>
      <Paragrafo>Identificação de Idiomas em áudios: {post.indenficacaoIdioma} minutos.</Paragrafo>
      <Paragrafo>Análise de sentimento a partir do áudio (áudio pré-gravado) {post.AnaliseDeAudio} minutos.</Paragrafo>
      </ContainerCard>
    </ContainerCardPreco>
  )
}
 export default CardPrecos
