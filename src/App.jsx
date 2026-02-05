import Links from './Links.jsx';
import Image from "./Image.jsx";
import ProjectsPreview from './Projects-preview.jsx';
import { NavLink } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='pres'>
        <div className="text">
          <h1>Eden Malhis</h1>
          <p className='comment'>a.k.a. eidamned because I like it</p>
          <h2>Welcome on my portfolio :)</h2>
          <Links />
        </div>
        <div className='img'>
          <Image />
        </div>
      </div>
      <br />
      <p>Dev student in IPI Lyon, I am close to finishing my 2nd year of studying IT and web developpement.</p>
      <div className='inline'><p>I'm actually looking for an 8-week internship! If you'll have me you're very welcome to contact me</p>
        <button className='contact'><a href="/Contact" className='text-link'>Right here !</a></button></div>
      <br />
      <h2 className='totheleft'>Here's a preview of my recent projects</h2>
      <br />
      <ProjectsPreview />
      <br />
      <p>If you want to see all of them <NavLink to="/Projects">click here</NavLink>.</p>
      <br />
      <p>And if you're <s>nosy</s> curious about me, <NavLink to="/About">check this out</NavLink>, you won't regret it (I hope).</p>
      <p className='teaser'><s>!!!Teaser!!! A cute little game will pop here anytime. Soon. I hope. !!!Teaser!!!</s></p>
    </>
  )
}

export default App
