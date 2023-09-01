import { Link } from "react-router-dom";

import heroImg from "./images/restauranfood.jpg";
import star from "./images/star.png";
import person1 from "./images/person1.jpg";
import person2 from "./images/person2.jpg";
import person3 from "./images/person3.jpg";
import person4 from "./images/person4.jpg";
import chefs from "./images/Mario and Adrian A.jpg";
import restaurant from "./images/restaurant.jpg";
import "./App.css";

function Main()
{
    return(
        <main>
            <article className="hero">
                <div className="callToAction">
                    <div className="description">
                        <h1 className="h1Yellow">Little Lemon</h1>
                        <h3 className="h3white">Chicago</h3>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    </div>
                    <Link className="button" to="/reservation">Reserve a table</Link>
                </div>
                <img className="heroImg" src={heroImg}/>
            </article>

            <article className="highlights">
                <div className="specials">
                    <div className="heading">
                        <h1 className="h1Black">Specials</h1>
                        <a className="button" href="#" role="button">Online menu</a>
                    </div>
                    
                    <div className="cardList">
                        
                        <div className="card">
                            <img className="cardImg" src='/images/greek_salad.jpg' alt='Image for greek salad'/>
                            <div className="cardBody">
                                <h2>Greek Salad</h2>
                                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                                <p className="order">Order delivery</p>
                            </div>
                        </div>
                    
                        <div className="card">
                            <img className="cardImg" src='images/bruschetta.jpg' alt='Image for Bruschetta'/>
                            <div className="cardBody">
                                <h2>Bruschetta</h2>
                                <p>Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.</p>
                                <p className="order">Order delivery</p>
                            </div>
                        </div>

                        <div className="card">
                            <img className="cardImg" src='/images/lemon_dessert.jpg' alt='Image for lemon dessert'/>
                            <div className="cardBody">
                                <h2>Lemon Dessert</h2>
                                <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                                <p className="order">Order delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <article className="testimonials">
                <h1 className="h1Yellow" style={{display: "block", }}>Testimonials</h1>

                <div className="testimonies">

                    <div className="testimony">
                        <img className="star" src={star} alt="star" />
                        <img className="star" src={star} alt="star" />
                        <img className="star" src={star} alt="star" />
                        <img className="star" src={star} alt="star" />
                        <img className="star" src={star} alt="star" />
                        <br/>
                        <img className="personPic" src={person1} alt="person"/>
                        <h4 className="name">Mark L.</h4>
                        <p className="comment">"Really enjoyed the atmosphere."</p>

                    </div>

                    <div className="testimony">
                        <img className="star" src={star} alt="star" />
                        <img className="star" src={star} alt="star" />
                        <img className="star" src={star} alt="star" />
                        <img className="star" src={star} alt="star" />
                        <img className="star" src={star} alt="star" />
                        <br/>
                        <img className="personPic" src={person2} alt="person"/>
                        <h4 className="name">Elizabeth M.</h4>
                        <p className="comment">"You have to try the Greek Salad!"</p>

                    </div>

                    <div className="testimony">
                        <img className="star" src={star} alt="star" />
                        <img className="star" src={star} alt="star" />
                        <img className="star" src={star} alt="star" />
                        <img className="star" src={star} alt="star" />
                        <img className="star" src={star} alt="star" />
                        <br/>
                        <img className="personPic" src={person3} alt="person"/>
                        <h4 className="name">Sam L.</h4>
                        <p className="comment">"Really enjoyed dessert."</p>

                    </div>

                    <div className="testimony">
                        <img className="star" src={star} alt="star" />
                        <img className="star" src={star} alt="star" />
                        <img className="star" src={star} alt="star" />
                        <img className="star" src={star} alt="star" />
                        <img className="star" src={star} alt="star" />
                        <br/>
                        <img className="personPic" src={person4} alt="person"/>
                        <h4 className="name">Felix W.</h4>
                        <p className="comment">"The greek salad was excellent!"</p>

                    </div>




                </div>
            </article>

            <article className="about">

                <div className="content">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.</p>
                </div>

                <img className="image1" src={chefs} alt="picture of the chefs" />
                
            </article>
        </main>
    );
}

export default Main;