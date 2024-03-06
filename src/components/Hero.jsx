import { NavLink } from "react-router-dom"

const Hero =()=>{
    return(
        <>
        <section>
            <div>
                <h1>Ecommerce</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Expedita, unde, quasi fugit, odit adipisci error odio quae qui
                      dolores placeat omnis ea obcaecati illum ipsum?</p>
            </div>
            <div>
                <NavLink to={""}>Shop now</NavLink>
                <NavLink to={""}>Offers</NavLink>
            </div>
        </section>
        </>
    )
}


export default Hero