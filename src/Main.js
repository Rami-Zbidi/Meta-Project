import heroImg from "./images/restauranfood.jpg";
import "./App.css";

function Main()
{
    return(
        <main>
            <article className="hero">
                <div className="description">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <a className="button" href="#" role="button">Reserve a table</a>
                </div>
                
                <img className="heroImg" src={heroImg}/>
            </article>

            <article className="highlights">

            </article>

            <article className="testimonials">

            </article>

            <article className="about">

            </article>
        </main>
    );
}

export default Main;