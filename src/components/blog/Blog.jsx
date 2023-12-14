const Blog = () => {
  return (
      <div className="container pb-3" id="blog">

      <div className="p-2 p-lg-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold text-success">Conheça nosso blog</h1>
          <p className="col-md-8 fs-5">
            Nosso blog te ajuda a sempre estar por dentro das novidades e informações diversas, como por exemplo: dicas de emagrecimento, estética e curiosidades do corpo e da mente. Tudo isso para te levar a uma vida cada vez mais saudável!
          </p>
          <button className="btn btn-success btn-lg" type="button"><a className="text-decoration-none text-white" href="https://web.whatsapp.com/send?phone=5543998068708">
            Acesse Agora
          </a></button>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2 className="text-success">Como emagrecer em 30 dias?</h2>
            <p>
            Perder peso de maneira saudável e sustentável envolve uma combinação de alimentação balanceada, exercícios físicos e mudanças no estilo de vida...
            </p>
            <button className="btn btn-success" type="button"><a className="text-decoration-none text-white" href="https://web.whatsapp.com/send?phone=5543998068708">
            Saiba Mais
          </a></button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-body-tertiary border rounded-3">
            <h2 className="text-success">Você conhece a massagem modelar?</h2>
            <p>
            A massagem modeladora é uma técnica de massagem terapêutica que utiliza movimentos rápidos e intensos para estimular a quebra das células de gordura, melhorar a circulação sanguínea e promover a tonificação muscular...
            </p>
            <button className="btn btn-outline-success" type="button"><a className="text-decoration-none text-success" href="https://web.whatsapp.com/send?phone=5543998068708">
            Saiba Mais
          </a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
