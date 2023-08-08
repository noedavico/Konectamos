import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Reviews = () => {
  const { store, actions } = useContext(Context);
  const [sizeCard, setSizeCard] = useState("");
  const [reviewClass, setReviewClass] = useState("");

  const reviews = [
    {
        id: 1,
        name: "Ana Pérez",
        image: "https://via.placeholder.com/200",
        review: "¡Excelente servicio! Los cuidadores son muy atentos y amables. Mis abuelos se sienten muy cómodos con ellos. Siempre están dispuestos a ayudar en todo lo que necesitamos. Estamos muy agradecidos por su dedicación y profesionalismo. Recomiendo ampliamente a esta empresa de cuidadores.",
        rating: 5,
        link: "#"
      },
      {
        id: 2,
        name: "Pedro García",
        image: "https://via.placeholder.com/200",
        review: "Contraté a la empresa para cuidar a mi mascota mientras estaba de viaje y quedé muy satisfecho con el servicio. Los cuidadores se encargaron de alimentar, pasear y jugar con mi mascota. Incluso me enviaron fotos y actualizaciones periódicas para que pudiera estar tranquilo. Definitivamente los volveré a contratar en el futuro.",
        rating: 4,
        link: "#"
      },
      {
        id: 3,
        name: "María Torres",
        image: "https://via.placeholder.com/200",
        review: "Estoy encantada con los cuidados que brindaron a mi hijo. La persona que nos atendió fue muy paciente y cariñosa. Siempre se aseguró de que mi hijo estuviera seguro y se divirtiera mientras yo estaba ocupada. Los recomendaré a todos mis amigos y familiares que necesiten cuidadores de niños.",
        rating: 4,
        link: "#"
      },
      {
        id: 4,
        name: "Luis Ramírez",
        image: "https://via.placeholder.com/200",
        review: "El servicio es bueno en general, pero creo que podrían mejorar en la puntualidad. Hubo un par de veces en las que el cuidador llegó unos minutos tarde, lo cual fue un inconveniente para mí. Sin embargo, el trato y la atención que brindaron a mi familiar fueron excelentes.",
        rating: 3,
        link: "#"
      },
      {
        id: 5,
        name: "Laura Gómez",
        image: "https://via.placeholder.com/200",
        review: "Tengo una excelente experiencia con los cuidadores de mascotas. Siempre los llamo cuando necesito que cuiden a mi perro y siempre hacen un trabajo excepcional. Mi perro se siente cómodo y feliz con ellos, y eso me da tranquilidad cuando tengo que dejarlo por un tiempo. Los recomiendo totalmente.",
        rating: 5,
        link: "#"
      },
      {
        id: 6,
        name: "Carlos Rodríguez",
        image: "https://via.placeholder.com/200",
        review: "Los cuidadores de adultos mayores son muy profesionales y brindan un excelente cuidado. Mi familiar se siente seguro y bien atendido con ellos. Siempre están dispuestos a ayudar en todo lo que necesitamos y nos brindan tranquilidad. Los recomiendo ampliamente a todas las personas que necesiten cuidadores para adultos mayores.",
        rating: 5,
        link: "#"
      }
  ];

  const mobileOrPc = () => {
    const mobile = window.matchMedia("(max-width: 552px)")
    setSizeCard(mobile.matches ? setSizeCard("30rem") : setSizeCard("15rem"))
    setReviewClass(mobile.matches ? "carousel-inner" : "carousel-inner overflow-auto flex-nowrap gap-2")
  }

  useEffect(() => {
    mobileOrPc()
  }, [window.matchMedia("(max-width: 552px)").matches])

  return (
    <div id="review" className="container m-5 m-auto">
    <section className="text-center custom-reviews">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          {reviews.map((review, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className={reviewClass} style={{ overflowX: "hidden" }}>
          <div className="carousel-inner">
            {reviews.map((review, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <div className="shadow col-8 m-auto p-4 my-5 d-flex bg-light" style={{ minHeightheight: "300px" }}>
                  <div className="card-body col-10 m-auto ">
                    <div className="col mb-3">
                      <div>
                        <h4 className="card-title mt-3">{review.name}</h4>
                      </div>
                    </div>
                    <p className="col card-text">{review.review}</p>
                    <Link to={review.link} className="text-decoration-none">
                      <div className="d-flex justify-content-center fs-5">
                        <div>
                          {[...Array(review.rating)].map((_, i) => (
                            <i key={i} className="fas fa-star text-warning"></i>
                          ))}
                          {[...Array(5 - review.rating)].map((_, i) => (
                            <i key={i} className="far fa-star text-warning"></i>
                          ))}
                        </div>
                        
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
  className="carousel-control-prev"
  type="button"
  data-bs-target="#carouselExampleCaptions"
  data-bs-slide="prev"
>
  <span
    className="carousel-control-prev-icon"
    aria-hidden="true"
    style={{ color: "grey" }} 
  ></span>
  <span className=" text-secondary"><i class="fa-solid fa-chevron-left"></i></span>
</button>
<button
  className="carousel-control-next"
  type="button"
  data-bs-target="#carouselExampleCaptions"
  data-bs-slide="next"
>
  <span
    className="carousel-control-next-icon"
    aria-hidden="true"
    style={{ color: "grey" }}  
  ></span>
  <span className=" text-secondary"><i class="fa-solid fa-chevron-right"></i></span>
</button>
      </div>
    </section>
  </div>
  

  );
};