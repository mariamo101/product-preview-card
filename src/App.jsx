import './App.css'
import mobile from './images/image-product-mobile.jpg'
import desktop from './images/image-product-desktop.jpg'
import basket from './images/Cart.svg'

function App() {


  return (
   <main className='mainContainer'>
     <section className='white'>
    <div className='images'>
    <img className="mobile" src={mobile} alt='mobile-pattern'/>
    <img className='desktop' src={desktop} alt='desktop-pattern'/>
    </div>
    <section className='information'>
      <p className='firstP'>PERFUME</p>
      <h1>Gabrielle Essence Eau De Parfum</h1>
      <p className='secondP'>
      A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
      </p>
      <p className='thirdP'>$149.99<span>$169.99</span></p>
      <button> 
        <div className='icon' >
     <img  src={basket} alt=''/> 
     </div>
  <p className='forthP' >  Add to Cart </p>
     </button>
     </section>
    </section>
   </main>
  )
}

export default App
