import React, { Component } from "react"
import Arian from "../images/Ash-Arian.png"
import Hossein from "../images/Ash-Hossein.png"
import Shahin from "../images/Ash-Shahin.png"
import Slider from "react-slick"

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    width: 1000,
  }

  return (
    <main>
      <div className="side-menu">
        <ul>
          <li>
            <a href="#">Github</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Linkdin</a>
          </li>
        </ul>
      </div>
      <Slider className="slider" {...settings}>
        <div>
          <div className="person">
            <img src={Shahin} alt="" />
            <div className="feed-button">
              <h2>Developer</h2>
              <p>front-end</p>
            </div>
          </div>
        </div>
        <div>
          <h3>
            <div className="person">
              <img src={Hossein} alt="" />
              <div className="feed-button">
                <h2>Developer</h2>
                <p>front-end</p>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3>
            <div className="person">
              <img src={Arian} alt="" />
              <div className="feed-button">
                <h2>Developer</h2>
                <p>front-end</p>
              </div>
            </div>
          </h3>
        </div>
      </Slider>
    </main>
  )
}
// export default function Feed() {
//   return (
//     <main>
//       <div className="person">
//         <img src={Arian} alt="" />
//         <div className="feed-button">
//           <h2>Developer</h2>
//           <p>front-end</p>
//         </div>
//       </div>
//     </main>
//   )
// }
