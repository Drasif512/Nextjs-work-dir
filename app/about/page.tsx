import Link from "next/link"
import Card from "@/app/components/card/card"
import React from "react";
import Button from "../components/button/button";
import Tag from "../components/button/button";
function About(){
    return(
<main>
<span><Link href="/"> <Tag title="Home"/></Link></span>
<span> <Link href="/about"> <Tag title="About"/>  </Link> </span> 
<span><Link href="/contact"> <Tag title="Contact"/></Link></span> 
<span><Link href="/authors"> <Tag title="Authors"/></Link></span> 
<span><Link href="/issues"> <Tag title="Issues"/></Link></span> 
    <section className="campus">
        <div className="PageBlock">
            <div className="Clear" ></div>
        </div>
        <h1>ABOUT</h1>
        <Card title="About Page " /> <Button title="apply"/>
           <div className="campus-col">
                <img src="img/bicke.png" alt=""/>
                <div className="layer">
                    <h3>About</h3>
                </div>
            </div>
    </section>
        </main>
    )
}
export default About;