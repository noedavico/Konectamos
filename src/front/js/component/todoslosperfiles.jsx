import { Link } from "react-router-dom";
import React, {useContext, useState, useEffect}  from "react";
import { Context } from "../store/appContext";
import Chica from "../../img/chica.png";

export const Todoslosperfiles = () => {
const { store, actions } = useContext(Context);

return (

<div class="container mx-auto ">
<div class="col-sm-12 col-md-8 col-lg-10 border mx-auto">
	<div class="product-content product-wrap clearfix">
		<div class="row justify-content-center">
				<div class="col-lg-4 col-sm-2 m-auto p-auto">
					<div class="product-image"> 
						<img src="https://www.bootdey.com/image/200x200/87CEFA" alt="194x228" class="img-responsive rounded-circle m-auto p-2"/> 
						
					</div>
				</div>
				<div class="col-md-6 col-sm-12 col-lg-8 m-auto">
				<div class="product-deatil">
						<h5 class="name">
							<span>Nombre</span>
							
						</h5>
						<p class="cuidad-container">
							<span>ciudad</span>
						</p>
						<span class="tag1"></span> 
				</div>
				<div class="description">
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis praesentium recusandae asperiores, laborum odio iste tenetur enim architecto, numquam autem nostrum saepe minus nihil est ipsum eius nesciunt, sed accusantium! </p>
				</div>
				<div class="product-info smart-form">
					<div class="row">
						<div class="col-md-6 col-sm-6 col-xs-6"> 
							<a href="javascript:void(0);" class="btn btn-success">Leer mas</a>
						</div>
						<div class="col-md-6 col-sm-6 col-xs-6">
							<div class="rating">
								<label for="stars-rating-5"><i class="fa fa-star"></i></label>
								<label for="stars-rating-4"><i class="fa fa-star"></i></label>
								<label for="stars-rating-3"><i class="fa fa-star text-primary"></i></label>
								<label for="stars-rating-2"><i class="fa fa-star text-primary"></i></label>
								<label for="stars-rating-1"><i class="fa fa-star text-primary"></i></label>
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
