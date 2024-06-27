import React from 'react'
import './headerlinks.css'

const HeaderLinks = () => {
    return (
        <div className="home__links">
            <a href="https://www.instagram.com/kevvv303/" className="home__specific" target="_blank">
                <i className="fa-brands fa-square-instagram"></i>
            </a>

            <a href="https://discord.com/channels/743204636290449418/743214159377858560" className="home__specific" target="_blank">
                <i className="fa-brands fa-discord"></i>
            </a>

            <a href="https://github.com/onlineinfoh" className="home__specific" target="_blank">
                <i className="fa-brands fa-square-github"></i>
            </a>
        </div>
    )
}
  
  export default HeaderLinks;