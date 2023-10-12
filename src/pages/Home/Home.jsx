import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

const Home = () => {
  return (
    <>
        <Navbar />
 <div className="card" style={{width: '18rem'}}>
  
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h5 className="card-title">Card subtitle</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
  )
}

export default Home
