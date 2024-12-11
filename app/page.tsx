import Link from "next/link"
import Image from "next/image"
import Button from "./components/button/button"
import Card from "@/app/components/card/card"
import Tag from "@/app/components/button/button"
import { fail } from "assert"
var iscard1: number = 5;
var count : number = 1;
function Home() {
  return (
<main>
<div style={{backgroundColor:"green"}} className="header">
            {/* <div className="Clear"></div> */}
            {/* <Card/>
            <Button/> */}
            <span><Link href="/"> <Tag title="Home"/></Link>
            <Link href="/about"> <Tag title="About"/>  </Link>  
            <Link href="/contact"> <Tag title="Contact"/></Link>
            <Link href="/authors"> <Tag title="Authors"/></Link>
            <Link href="/issues"> <Tag title="Issues"/></Link></span> 
        </div>
    <section className="campus">

        <div style={{backgroundColor:"red"}} className="PageBlock">
            {/* <div className="Clear"></div> */}
            {/* <Card/>
            <Button/> */}
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <h2>Main</h2>
        <Card  title="Home Page"/>
        
        <Card  title="Home Page"/>

        </div>
        
        <div className="campus-col">
                <img src="img/bicke.png" alt=""/>
                <div className="layer">
                    <h3>DELHI</h3>
                </div>
                <Card title=""/>
            </div>

        <div className="campus-col">
                <img src="img/Campus2.png" alt=""/>
                <div className="layer">
                    <h3>HYDERABAD</h3>
                </div>
            </div>
        
        <div className="campus-col">
                <img src="img/Campus3.png" alt=""/>
                <div className="layer">
                    <h3>MUMBAI</h3>
                </div>
            </div>
    </section>
        </main>
    )
}

export default Home