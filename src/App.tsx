import { useState } from 'react'
import images from "./jsons/pic.json";
import icons from "./jsons/icons.json";
import comments from "./jsons/comments.json";
import footerIcons from "./jsons/icons-footer.json";
import './App.css'

function App() {
  const [error,setError] = useState(false);
  const [input,setInput] = useState(" ");
  let checkInput = ()=>{
    setError(false);
    if(!input.includes("@")){
      console.log("Error");
      setError(true);
     setInput("");
    }
  }

  return (
    <>
    <div className="container">
   <picture className='img-background'>
    <source srcSet={images.pictures[2].url} media="(width <=480px)"/>
    <img src={images.pictures[1].url} alt="picture"  className='img-mobile' />
   </picture>
      <div className="header">
      <img src={images.pictures[0].url} alt="left-part" className='left-part' />
      <nav>
        <ul className='right-part'>
          <li>Features</li>
          <li>Team</li>
          <li>Sign in</li>
        </ul>
      </nav>
      </div>
      <div className="ilustration">
        <img src={images.pictures[3].url} className='ilustration-pic' alt="picture" />
        <div className="ilustration-content">
          <div className="ilustration-header">All your files in one  secure location, accessible anywhere.</div>
          <div className="ilustration-text">Fylo stores all your most important files in one secure location.
            Access them whereever you need, share and collaborate with
            friends family, and co-workers.
          </div>
          <button className="ilustration-button">Get Started</button>
        </div>
      </div>
      <div className="four-icons">
    {icons.icons.map((icon)=>(
      <div className='icon-container' key={icon.id}>
        <img src={icon.url} alt="pic-icon" />
        <div className="icon-header">{icon.header}</div>
        <div className="icon-text">{icon.text}</div>
      </div>
    ))}
      </div>
      <div className="stay-productive">
      <img src={images.pictures[4].url} alt="pictures" className='productive-left'/>
      <div className="productive-right">
        <div className="productive-right-header">Stay productive, wherever you are</div>
        <div className="productive-right-text">
          <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs</p>
        <p>Securely share files and folders with friends, family and colleagues for live collabarotion. No email attachments required</p>
        </div>
        <a href="#" className='link-fylo'>See how Fylo Works <img src={images.pictures[5].url} alt="arrow" /></a>
      </div>
      </div>
      <div className="comments">
        <img src={images.pictures[6].url} className='quotes' alt="comment" />
    {comments.comments.map((comment) => (
      <div className='comment' key={comment.id}>
        <div className="comment-text">{comment.text}</div>
        <div className="comment-image-container">
          <img src={comment.url} alt="comment" className='comment-image' /> 
          <div className="comment-image-text">
            <div className="comment-name">{comment.name}</div>
          <div className="comment-text">{comment.job}</div>
          </div>
        </div>
      </div>
    ))}
      </div>
       <div className="access">
        <div className="access-content">
                <div className="access-header">Get early  access today</div>
              <div className="access-text">It only takes a minute to sing up and our free starter tier is extremely generous. If you have  any questions
                , our support team would be happy to help you.
              </div>
          <div className="access-input-container">
            <input type="email" className='email-input' value={input} onChange={(e) => setInput(e.target.value)} placeholder='email@example.com'/>
            {error ?
            (<div className='error'>Please enter valid email address</div>):
          (<div></div>)
        }
            <button className='button-free' onClick={() => checkInput()}>Get Started For Free</button>
          </div>
        </div>
       </div>
       <div className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <img src={images.pictures[0].url} alt="image" />
            <div className="column-image-foot">
              <img src={images.pictures[7].url} alt="location" />
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
          </div>
          <div className="footer-column ">
            <div className="column-image-foot">
              <img src={images.pictures[9].url} alt="phone" />
              <p>+48 740 141 412</p>
            </div>
                        <div className="column-image-foot">
              <img src={images.pictures[8].url} alt="email" />
              <p>example@com.gmail</p>
            </div>
          </div>
          <ul className="footer-navigation ">
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
              <ul className="footer-navigation ">
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
          <div className="icons">
            {footerIcons['icons-footer'].map((icon) => (
              <img src={icon.url} alt="pic" key={icon.id}/>
            ))}
          </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default App
