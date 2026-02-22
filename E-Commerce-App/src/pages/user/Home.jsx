import HeroSection from "../../components/HeroSection"
import StoreBenefitsBadges from "../../components/StoreBenefitsBadges"
import FeaturedSection from "../../components/FeaturedSection"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 

const Home = () => {

  const [featuredProducts,setFeaturedProducts] = useState([]);
 
  useEffect(()=>{
            axios.get(`${API_BASE_URL}/user/get-featured-products`)
            .then((res)=>{ setFeaturedProducts(res.data.featuredProducts)}).catch((err)=>{
              console.log("Error fetching featured products", err);
            })
  }
  ,[])

  return (
    <div className="bg-gray-800">

     <HeroSection/>
     <StoreBenefitsBadges/>
     <hr />
     <FeaturedSection featuredProducts={featuredProducts}/>
    </div>
  )
}

export default Home
