import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import Chica from "../../img/sinfoto.png";
import "../../styles/home.css";

export const Perfilpublico = () => {

return (    

<div className="container fluid m-5" id="about">
<div className="  row  flex-row" >

        <div className="col-md-4 position-relative top-50 start-10 mt-3">
            <div className="card user-card fondonaranja  ">
            <div className="rounded shadow-sm py-5 px-4 fondonaranja" ></div>
                <div className="card-block text-center">
                    <div className="user-image">
                    <img src= {Chica} alt="." width="160" className="img-fluid top-0 start-50 translate-middle rounded-circle mb-3  p-3 fondonaranja shadow-sm position-absolute"/>
                    </div>
                    <h3 className="f-w-600 m-t-25 m-b-10 ">Alessa Robert</h3>
                    <p className="text-muted"> Active | genero |  23.05.1992</p>
                    
                    
                    <div className="bg-c-blue fondonaranja  counter-block m-t-10 p-20">
                        <div className="row">
                            <div className="col-4">
                                <i className="fa fa-comment"></i>
                                <p>xxxx</p>
                                
                            </div>
                            <div className="col-4">
                                <i className="fa fa-facebook"></i>
                                <p>xxx</p>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-twiter"></i>
                                <p>xxx</p>
                            </div>
                        </div>
                    </div>
                    <p className="m-t-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    
                    <div className="row justify-content-center ">
                        <div className="col-auto"><a href=""><i className="fa fa-facebook facebook"></i></a></div>
                        <div className="col-auto"><a href=""><i className="fa fa-twitter twitter "></i></a></div>
                        <div className="col-auto"><a href=""><i className="fa fa-dribbble text-dribbble"></i></a></div>
                    </div>
                </div>
            </div>
            <div className="card  rounded shadow-sm fondonaranja my-2">
            <div className=" card-header row aling-item-center">
              <h5 className="  text-center"> <i className=""></i> <strong> Me describo como... </strong> </h5>
            </div>
            <div className="card-body aling-item-center py-4 px-4  ">
            <span className="badge rounded-pill bg-success mx-2 p-2">Alegre</span>
            <span className="badge rounded-pill bg-danger mx-2 p-2">Entusiasta</span>
            <span className="badge rounded-pill bg-warning text-dark  x-2 p-2">Creativa</span>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-sm-12 col-md-6 ">
                    <div className="  card text-dark bg-light my-3">
                            <h3 className="card-header dark-color">Sobre mi </h3>
                            <div className="card-body theme-color lead"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit commodi dolore provident maiores consectetur dignissimos architecto quibusdam id amet, iure atque ducimus accusamus blanditiis ea veritatis doloremque sequi necessitatibus perferendis!</p>
                            </div>
                    </div>

    <div className="row justify-content-center p-3 ">
        <div className="card col-6 text-dark bg-light   ">
            <div className="card-header">
              <span className="panel-icon">
                <i className="fa fa-pencil"></i>
              </span>
              <span className="panel-title"> <h6>Experience</h6> </span>
            </div>
            <div className="card-body pb5 ">
              <p className="text-muted"> Uaaaaaaaaaa
              </p>
            </div>
          </div>
          
          <div className="card col-6 text-dark bg-light ">
            <div className="card-header">
              <span className="panel-icon">
                <i className="fa fa-pencil"></i>
              </span>
              <span className="panel-title"><h6>cualificacon</h6></span>
            </div>
            <div className="card-body pb5 ">
              <h4>aaaaaaaaaaaaa</h4>
              <p className="text-muted pb10"> aaaaaa
              </p>
              </div>
            </div>
          </div>
          <div className="row  justify-content-center p-3">
        <div className="card col-6 text-dark bg-light   ">
            <div className="card-header">
              <span className="panel-icon">
                <i className="fa fa-pencil"></i>
              </span>
              <span className="panel-title"> <h6>servicios</h6> </span>
            </div>
            <div className="card-body pb5 ">
              
              <p className="text-muted"> Uaaaaaaaaaaaaaaa
              </p>
            </div>
          </div>
          
          <div className="card col-6 text-dark bg-light ">
            <div className="card-header">
              <span className="panel-icon">
                <i className="fa fa-pencil"></i>
              </span>
              <span className="panel-title"><h6>Idiomas</h6></span>
            </div>
            <div className="card-body pb5 ">
              
              <p className="text-muted pb10"> aaaaaa
              </p>
              </div>
            </div>
          </div>

      </div>

</div>



</div>
)
}