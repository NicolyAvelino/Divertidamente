import React from "react";

function Content() {
    return (
        <div>
            <div className="container content">
                <div className="row ">
                    <div className="col-sm-4 talk">
                        <h1 className="mb-5">Emoções</h1>
                        {/* <h1>Emoções</h1> */}
                        <p className="font-italic">De acordo com a psicologia, uma emoção é uma reação a um determinado acontecimento. Trata-se de um estado sentimental complexo que produz consequências físicas e psicológicas. As emoções interferem ativamente em nossos pensamentos e comportamentos.</p>
                        <p className="bold-four">
                        Agora que já sabe o que é, venha conhecer as emoções que compõem minha personalidade!
                        </p>
                    </div>
                    <div className="col-sm-8 showcase-img">
                    </div>
                </div>
            </div>

            <div className="cor" id="alegria">
                <div className="container">
                    <div className="row linha">
                        <div className="col-sm-4 talk">
                            <h1 className="mb-5">Alegria</h1>
                            <p className="font-italic">"Um sentimento de contentamento, de prazer de viver, júbilo, satisfação, exultação. Nas pessoas, costuma ser expressa através de sorrisos : )"</p>
                            <p>Quando estou animada eu consigo fazer melhor as coisas.</p>
                            <a target="_blank" href="https://youtu.be/ZbZSe6N_BXs" className="link">É sempre legal ouvir essa música!</a>
                        </div>
                        <div className="col-sm-8 showcase-img2" >
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" id="medo">
                    <div className="row">
                        <div className="col-sm-4 talk">
                            <h1 className="mb-3">Medo</h1>
                            <p className="font-italic">"Medo é um estado emocional que surge em resposta a consciência perante uma situação de eventual perigo."</p>
                            <p>Tenho medo de decepcionar as pessoas ou de não conseguir cumprir as espectativas que eu mesma coloco em mim.</p>
                            <p>Tenho medo de barata. Sei que é um bichinho pequenininho, mas não consigo matar uma. Eu sempre corro delas. Talvez um dia eu supere isso ou não... </p>
                        </div>
                        <div className="col-sm-8 showcase-img3" >
                        </div>
                    </div>
                </div>

                <div className="cor" id="confusao">
                <div className="container">
                    <div className="row linha">
                        <div className="col-sm-4 talk">
                            <h1 className="mb-5">Confusão</h1>
                            <p className="font-italic">"Incapacidade de pensar ou raciocinar de maneira focada e clara."</p>
                            <p>Parece que da, um bug no meu cérebro que fico toda confusa e esqueço de fazer as coisas ou fico viajando nos pensamentos depois nem lembro o que estava fazendo.</p>                       
                        </div>
                        <div className="col-sm-8 showcase-img4" >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;