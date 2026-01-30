import './App.css'
import Links from './Links.jsx';
import Image from "./Image.jsx";
import { NavLink } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='pres'>
        <div className="text">
          <h1>Eden Malhis</h1>
          <h3>aka eidamned because I like it</h3>
          <h2>Welcome on my portfolio :)</h2>
          <Links />
        </div>
        <div className='img'>
          <Image />
        </div>
      </div>
      <p>Dev student in IPI Lyon, I am close to finishing my 2nd year of studying IT and web developpement.</p>
      <p>I'm actually looking for an 8-week internship! If you'll have me you're very welcome to contact me :)</p>
      <button><NavLink to="/Contact">(Click here!)</NavLink></button>
      <p>Here's a preview of my recent projects</p>

      <p>If you want to see more of them <NavLink to="/Projects">click here</NavLink>.</p>
      <p>And if you're <s>nosy</s> curious about me, <NavLink to="/About">check this out</NavLink>, you won't regret it (I hope).</p>
      <p><s>!!!Teaser!!! A cute little game will pop here anytime. Soon. I hope. !!!Teaser!!!</s></p>
    </>
  )
}

export default App
