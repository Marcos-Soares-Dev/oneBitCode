export default function Card() {
    return (
        <div className="card">
            <div className="banner">
                <img src="/assets/starWars.jpg" alt="starWars" />
            </div>

            <div className="cardInfo">
                <h3>Star Wars 1977</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>Comprar agora</button>
            </div>
        </div>
    )
}