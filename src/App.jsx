import React from 'react'
import {motion} from "framer-motion"
import "./App.css"
const App = () => {
  return (
    <div>
      <header>
        <div className="container">
          <motion.h1 initial={{x: 2000}} animate={{x: 0}}>
            <a href="">hackason-demo</a>
          </motion.h1>
          <nav>
            <ul className='menu'>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </nav>
        </div>

      </header>
      <main>
        <div className="hero">
          <img src="/nogizaka2.jpg" alt="" />
        </div>
        <motion.div initial={{y: 200}} whileInView={{y: 0}} transition={{delay:0.2,duration: 0.3}} className="about">

          <div className="container">
            <h2>about</h2>
            <div className="intro"> <div className="intro-img-box">
              <img src="/nogizaka3.jpg" alt="" />
            </div>
              <div className="intro-text-box">
                <h3>乃木坂46</h3>
                <p>
                  インフルエンサー
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="photos">
          <div className="container">
            <h2>photos</h2>
            <div className="photos-list">
              <motion.div initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay:0.2,duration: 0.5}} className="photo-1">
                <img src="/ここにはないものA.jpg" alt="" />
              </motion.div>
              <motion.div initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay:0.2,duration: 0.5}}  className="photo-2">
                <img src="/ここにはないものB.jpg" alt="" />
              </motion.div>
              <motion.div initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay:0.2,duration: 0.5}}  className="photo-3">
                <img src="/ここにはないものC.jpg" alt="" />
              </motion.div>
              <motion.div initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay:0.2,duration: 0.5}} className="photo-4">
                <img src="/ここにはないものD.jpg" alt="" />
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="copyright">
          <p>&copy; 2023 hackason-demo</p>
        </div>
      </footer>
    </div>
  )
}

export default App