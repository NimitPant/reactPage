const reactDescriptions=['Fundamental', 'Core', 'Important', 'Crucial'];
import reactImg from '../../assets/react-core-concepts.png'
import './Header.css'

const getRandomIndex = (max)=>{
    return Math.floor(Math.random()*(max+1));
  }

export default function Header(){
    const desc = reactDescriptions[getRandomIndex(3)];
    return (
      <header>
          <img src={reactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {desc} React concepts you will need for almost any app you are  
            going to build!
          </p>
          <main>
            <h2>Time to get started!</h2>
          </main>
          
        </header>
    );
  }

//export default Header;