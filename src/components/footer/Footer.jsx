import React from 'react';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <>
      <div className="bg-[#F2F0F1]">
      <div className="bg-black text-white p-6 sm:p-10 md:p-14 rounded-[20px] max-w-[900px] lg:max-w-[1350px] mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-4 md:space-y-0 md:space-x-10 mt-12 md:mt-15">

  
  <div className="w-full md:w-1/2">
    <h1 className="text-2xl md:text-4xl font-black leading-tight">
      STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
    </h1>
  </div>

  
  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-3 ml-auto md:ml-55">

  {/* Input Field */}
  <div className="flex items-center bg-white px-3 py-2 w-full max-w-[350px] rounded-full shadow-md">
    <DraftsOutlinedIcon className="text-gray-900 pr-2" />
    <input
      type="email"
      placeholder="Enter your email address"
      className="flex-grow bg-transparent focus:outline-none px-2 text-gray-700"
    />
  </div>

  {/* Subscribe Button */}
  <button className="bg-white w-full max-w-[350px] px-4 py-2 rounded-full font-bold text-black shadow-md">
    Subscribe to Newsletter
  </button>

</div>
</div>


        {/* Footer Content */}
        <div className="py-10">
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-center sm:text-left">
            
            <div>
              <h3 className="text-2xl font-black">SHOP.CO</h3>
              <p className="mt-4 text-sm text-gray-600">
                We have clothes that suit your style and which you're proud to wear. From women to men.
              </p>
              <div className="flex justify-center sm:justify-start space-x-4 mt-4">
                <a href="#" className="text-gray-700"><TwitterIcon /></a>
                <a href="#" className="text-gray-700"><FacebookRoundedIcon /></a>
                <a href="#" className="text-gray-700"><InstagramIcon /></a>
                <a href="#" className="text-gray-700"><GitHubIcon /></a>
              </div>
            </div>

            {[
              { title: 'Company', links: ['About', 'Features', 'Works', 'Career'] },
              { title: 'Help', links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'] },
              { title: 'FAQ', links: ['Account', 'Manage Deliveries', 'Order', 'Payments'] },
              { title: 'Resources', links: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'YouTube Playlist'] }
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-semibold uppercase text-gray-600">{section.title}</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {section.links.map((link, index) => (
                    <li key={index}><a href="#" className="text-gray-500">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

       
        <div className="border-t border-gray-200 py-6">
          <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-500 text-center sm:text-left">Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="flex justify-center sm:justify-start space-x-4">
              {[
                { src: "https://cdn.iconscout.com/icon/free/png-256/free-visa-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-7-pack-logos-icons-2945212.png?f=webp&w=256", alt: "Visa", className: "h-6" },
                { src: "https://www.entrust.cn/sites/default/files/partners/company%20logos/updated/mastercard.png", alt: "MasterCard", className: "h-3 mt-[6px]" },
                { src: "https://images4.alphacoders.com/101/1017054.png", alt: "PayPal", className: "h-6" },
                { src: "https://download.logo.wine/logo/Apple_Pay/Apple_Pay-Logo.wine.png", alt: "Apple Pay", className: "h-6" },
                { src: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/GooglePayLogo.width-500.format-webp.webp", alt: "Google Pay", className: "h-3 mt-[6px]" }
              ].map((item, idx) => (
                <img key={idx} src={item.src} alt={item.alt} className={item.className} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
