import React, { Component, useState } from "react";
import PropTypes from 'prop-types';
import Sinfoto from "../../../img/usuarios/sinfoto.png";


const ImageWithFallback = (props) => {
    const [url, setUrl] = useState(props.imageUrl);

    const fallbackUrl = props.fallbackUrl || Sinfoto
    
    const handleError = (e) => {
        setUrl(fallbackUrl);
    };

    return (
        <img src={url} className={props.classList} onError={handleError} alt={props.alt} />
    );
};

ImageWithFallback.propTypes = {
    imageUrl: PropTypes.string,
    fallbackUrl: PropTypes.string,
    alt: PropTypes.string,
    classList: PropTypes.string
};

export default ImageWithFallback;