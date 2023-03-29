
import Banner from "../../../img/banner.png"
import Bannermovil from "../../../img/bannermovil.png"

import React from "react";


export const BannerPortada  = () => {
    return (<>
        <div className="row d-none d-md-block">
        <img src={Banner} className=" d-block w-100 ." alt="" />
    </div>
    <div className="row d-md-none">
    <img src={Bannermovil} className=" d-block w-100 ." alt="" />
</div>
</>
    )
}