import Link from "next/link"

import React from "react";
import Tag from "../components/button/button";
function Author(){
    return(
<main>
<span><Link href="/"> <Tag title="Home"/></Link></span>
<span> <Link href="/about"> <Tag title="About"/>  </Link> </span> 
<span><Link href="/contact"> <Tag title="Contact"/></Link></span> 
<span><Link href="/authors"> <Tag title="Authors"/></Link></span> 
<span><Link href="/issues"> <Tag title="Issues"/></Link></span> 
    <section className="campus">
        <div className="PageBlock">
            {/* <div className="Clear"></div> */}
        </div>
       

        <h1>ATHORS</h1>
        <h2>New One</h2>

            <div className="campus-col">
                <img src="img/Campus2.png" alt=""/>
                <div className="layer">
                    <h3>About</h3>
                </div>
            </div>

        
    </section>
        </main>
    )
}

export default  Author