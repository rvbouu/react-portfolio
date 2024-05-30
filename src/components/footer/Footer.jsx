// imports
import './Footer.css'

// exports
export default function Footer() {
  return (
    <footer className='footer'>
      {/* logos for social sites that are linked to personal profile on each site */}
      {/* GitHub */}
      <a href='https://github.com/rvbouu' target='_blank'>
        <img src='/social_imgs/github.png' alt='github logo' className='logo' />
      </a>

      {/* Instagram */}
      <a href='https://www.instagram.com/lifeofbou/' target='_blank'>
        <img src='/social_imgs/instagram.png' alt='instagram logo' className='logo' />
      </a>

      {/* LinkedIn */}
      <a href='https://www.linkedin.com/in/rachanabou/' target='_blank'>
        <img src='/social_imgs/linkedin.png' alt='linkedin logo' className='logo' />
      </a>

      {/* TikTok */}
      <a href='https://www.tiktok.com/@lifeofbou' target='_blank'>
        <img src='/social_imgs/tiktok.png' alt='tiktok logo' className='logo' />
      </a>

      {/* YouTube */}
      <a href='https://www.youtube.com/vanessabou' target='_blank'>
        <img src='/social_imgs/youtube.png' alt='youtube logo' className='logo' />
      </a>

      {/* Twitter || X */}
      <a href='https://x.com/lifeofbou' target='_blank'>
        <img src='/social_imgs/twitter.png' alt='twitter logo' className='logo' />
      </a>
    </footer>
  )
}