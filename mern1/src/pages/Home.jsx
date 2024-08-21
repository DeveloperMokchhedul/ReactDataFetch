import BestSeller from "../components/BestSeller"
import Hero from "../components/home/Hero"
import Products from "../components/product/Products"
import Title from "../components/Title"


function Home() {
  return (
    <>
    <Hero />
    <Title text1= {"Best"} text2={"Collection"} />
    <Products />
    <Title text1 = {"Best Seller"} />
    <BestSeller />


    </>
  )
}

export default Home
