import Slider from '../components/slider/Slider'
import Services from '../components/info/Services'
import Blog from '../components/blog/Blog'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Slider/>
      <About/>
      <Services/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home