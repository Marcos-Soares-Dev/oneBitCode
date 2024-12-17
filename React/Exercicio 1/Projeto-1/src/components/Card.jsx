export default function Card() {
    return (
        <div className="card">
            <div className="card-img">
                <img src="/starwars.jpg" alt="Star Wars Post" />
            </div>

            <div className="card-info">            
           <h3>Pôster Star Wars (1977)</h3>

            <p>Em uma galáxia muito, muito distante, o malvado Império Galáctico, liderado pelo temido Darth Vader, está em busca da jovem Princesa Leia. Luke Skywalker, um jovem fazendeiro, encontra o plano de ataque ao Império escondido em um robô, e se junta a uma banda de rebeldes em uma missão para resgatar a princesa e destruir a Estrela da Morte, uma arma espacial do Império. Aventura, ação, romance e sabedoria são os ingredientes dessa jornada épica que mudou o curso da história do cinema.</p>

            <button type="button">Comprar agora</button>
            </div>            
        </div>
    )
}