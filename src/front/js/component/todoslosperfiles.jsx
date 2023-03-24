import { Link } from "react-router-dom";
import React, {useContext, useState, useEffect}  from "react";
import { Context } from "../store/appContext";
import Chica from "../../img/chica.png";

export const Todoslosperfiles = () => {
const { store, actions } = useContext(Context);

return (

<div className="container mx-auto ">
<div className="col-sm-12 col-md-8 col-lg-10 border mx-auto">
	<div className="product-content product-wrap clearfix">
		<div className="row justify-content-center">
				<div className="col-lg-4 col-sm-2 m-auto p-auto">
					<div className="product-image"> 
						<img src="https://www.bootdey.com/image/200x200/87CEFA" alt="194x228" className="img-responsive rounded-circle m-auto p-2"/> 
						
					</div>
				</div>
				<div className="col-md-6 col-sm-12 col-lg-8 m-auto">
				<div className="titulo">
						<h5 className="name">
							<span>Nombre</span>
							
						</h5>
						<p className="cuidad-container">
							<span>ciudad</span>
						</p>
						<span className="tag1"></span> 
				</div>
				<div className="description">
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis praesentium recusandae asperiores, laborum odio iste tenetur enim architecto, numquam autem nostrum saepe minus nihil est ipsum eius nesciunt, sed accusantium! </p>
				</div>
				<div className="">
					<div className="row">
						<div className="col-md-6 col-sm-6 col-xs-6"> 
							<a href="javascript:void(0);" className="btn btn-success">Leer mas</a>
						</div>
						<div className="col-md-6 col-sm-6 col-xs-6">
							<div className="rating">
								<label for="stars-rating-5"><i className="fa fa-star"></i></label>
								<label for="stars-rating-4"><i className="fa fa-star"></i></label>
								<label for="stars-rating-3"><i className="fa fa-star text-primary"></i></label>
								<label for="stars-rating-2"><i className="fa fa-star text-primary"></i></label>
								<label for="stars-rating-1"><i className="fa fa-star text-primary"></i></label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


</div>

)
}
