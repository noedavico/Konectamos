import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Reviews = () => {
    const { store, actions } = useContext(Context);
    const [sizeCard, setSizeCard] = useState("");
    const [reviewClass, setReviewClass] = useState("");

    //TO-DO pendiente de eliminar y usar store
    const reviews = [
        {
            id: 1,
            name: "Ana Pérez",
            image: "https://via.placeholder.com/200",
            review: "¡Excelente servicio! Los cuidadores son muy atentos y amables. Mis abuelos se sienten muy cómodos con ellos.",
            rating: 5,
            link: "#"
        },
        {
            id: 2,
            name: "Pedro García",
            image: "https://via.placeholder.com/200",
            review: "Buen servicio. Contraté a la empresa para cuidar a mi mascota mientras estaba de viaje y todo salió perfecto.",
            rating: 4,
            link: "#"
        },
        {
            id: 3,
            name: "María Torres",
            image: "https://via.placeholder.com/200",
            review: "Muy buenos cuidados para niños pequeños. La persona que nos atendió fue muy paciente y cariñosa con mi hijo.",
            rating: 4,
            link: "#"
        },
        {
            id: 4,
            name: "Luis Ramírez",
            image: "https://via.placeholder.com/200",
            review: "El servicio es bueno, pero podrían mejorar en la puntualidad.",
            rating: 3,
            link: "#"
        },
    ];

    const mobileOrPc = () => {
        const mobile = window.matchMedia("(max-width: 552px)")
        setSizeCard(mobile.matches ? setSizeCard("30rem") : setSizeCard("15rem"))
        setReviewClass(mobile.matches ? "row" : "row overflow-auto flex-nowrap gap-2")
    }

    useEffect(() => {
        mobileOrPc()
    }, [window.matchMedia("(max-width: 552px)").matches])

    return (
        <div id="review" className="container mt-5">
            <div className={reviewClass}>
                {reviews.map((review) => (
                    <div className="col-md-3 mb-4" style={{ width: sizeCard }} key={review.id}>
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="col mb-3">
                                    <div className="mr-3 rounded">
                                        <img src={review.image} alt={review.name} className="card-img" />
                                    </div>
                                    <div>
                                        <h5 className="card-title mt-3">{review.name}</h5>
                                    </div>
                                </div>
                                <p className="col card-text">{review.review}</p>
                                <Link to={review.link} className="text-decoration-none">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            {[...Array(review.rating)].map((_, i) => (
                                                <i key={i} className="fas fa-star text-warning"></i>
                                            ))}
                                            {[...Array(5 - review.rating)].map((_, i) => (
                                                <i key={i} className="far fa-star text-warning"></i>
                                            ))}
                                        </div>
                                        <div>
                                            <small className="text-muted">
                                                {review.rating} estrellas
                                            </small>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
