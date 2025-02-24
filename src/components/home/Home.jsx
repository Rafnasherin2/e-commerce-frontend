import React, { useState } from 'react';
import Arrivals from './Arrivals';
import Sellers from './Sellers';
import Dressess from './Dressess';
import Reviews from './Reviews';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu'; 
import CloseIcon from '@mui/icons-material/Close'; 
import Footer from '../footer/Footer';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="overflow-x-hidden"> 

        {/* Sign up banner */}
        <div className='text-white center h-7 bg-black'>
          <h5 className='text-center font-light text-sm p-1'>
            Sign up and get 20% off to your first order. <span className='underline font-normal text-sm'>Sign up Now</span>
          </h5>
        </div>

       {/* Navbar */}
<div className='bg-white px-6 sm:px-10 relative'>
  <div className="max-w-[1200px] mx-auto flex items-center justify-between py-4">

    {/* Mobile & Responsive Menu (Left Side) */}
    <div className="md:hidden flex items-center">
      <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
        {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </button>
    </div>

    {/* Logo */}
    <h1 className='text-3xl sm:text-4xl font-extrabold mx-auto md:mx-0'>
      SHOP.CO
    </h1>

    {/* Desktop Navigation Menu - Hidden on small screens */}
    <ul className='hidden md:flex gap-6 sm:gap-9 text-sm sm:text-lg'>
      <li className="cursor-pointer">Shop</li>
      <li className="cursor-pointer">On Sale</li>
      <li className="cursor-pointer">New Arrivals</li>
      <li className="cursor-pointer">Brands</li>
    </ul>

    {/* Search Bar - Visible only on md+ screens */}
    <div className="hidden md:flex items-center w-full md:w-auto max-w-lg bg-[#F0F0F0] rounded-3xl px-4 py-2 shadow-md">
      <SearchIcon className="text-gray-500" />
      <input
        className="flex-grow bg-transparent focus:outline-none px-3 placeholder-gray-400 text-gray-800"
        type="text"
        placeholder="Search for Products..."
      />
    </div>

    {/* Icons - Always on the right in responsive */}
    <div className='flex items-center gap-5 sm:gap-6 md:hidden'>
      <SearchIcon fontSize="large" />
      <ShoppingCartOutlinedIcon fontSize="large" />
      <AccountCircleOutlinedIcon fontSize="large" />
    </div>

    {/* Desktop Icons */}
    <div className='hidden md:flex items-center gap-5 sm:gap-6'>
      <ShoppingCartOutlinedIcon fontSize="large" />
      <AccountCircleOutlinedIcon fontSize="large" />
    </div>
  </div>

  {/* Mobile Navigation Menu */}
  <div className={`absolute top-full left-0 w-full bg-white shadow-md z-50 transition-all duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
    <ul className="flex flex-col items-center space-y-4 py-4">
      <li className="cursor-pointer" onClick={() => setMenuOpen(false)}>Shop</li>
      <li className="cursor-pointer" onClick={() => setMenuOpen(false)}>On Sale</li>
      <li className="cursor-pointer" onClick={() => setMenuOpen(false)}>New Arrivals</li>
      <li className="cursor-pointer" onClick={() => setMenuOpen(false)}>Brands</li>
    </ul>
  </div>
</div>

{/* Hero Section */}
<div className='bg-[#F2F0F1] mt-6 p-6 sm:p-10 md:p-16 flex flex-col md:flex-row items-center md:justify-between md:h-auto w-full'>

  {/* Left Text Content */}
  <div className='w-full md:w-1/2 text-center md:text-left px-4'>
    <h1 className='font-bold text-5xl sm:text-6xl md:text-6xl leading-tight md:leading-[1.2]'>
      FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
    </h1>
    <h5 className='mt-5 text-gray-500 text-sm sm:text-base md:text-lg'>
      Browse through our diverse range of meticulously crafted garments, designed <br />
      to bring out your individuality and cater to your sense of style.
    </h5>
    <div className="flex justify-center md:justify-start">
      <button className="w-full my-3 sm:w-full md:w-[200px] h-[48px] md:h-[50px] bg-black text-white rounded-full text-sm md:text-base">
        Shop Now
      </button>
    </div>

{/* Stats Section - Ensure Alignment */}
  <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-6 sm:gap-10 mt-9 items-center text-center md:text-left w-full">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">200+</h2>
          <p className="text-gray-600 text-sm sm:text-base">International Brands</p>
        </div>
        <div className="hidden sm:block h-12 w-[1px] bg-gray-300"></div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">2,000+</h2>
          <p className="text-gray-600 text-sm sm:text-base">High-Quality Products</p>
        </div>
        <div className="hidden sm:block h-12 w-[1px] bg-gray-300"></div>
      </div>

      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">30,000+</h2>
        <p className="text-gray-600 text-sm sm:text-base">Happy Customers</p>
      </div>
    </div>
  </div>

{/* Hero Image + Stars */}
<div className="relative flex justify-center md:justify-end w-full md:w-1/2 mt-10 md:mt-0 min-h-[400px] items-center">

  {/* Left Star */}
  <div className="absolute left-[10%] top-[45%] w-[40px] sm:w-[70px] md:w-[100px]">
    <img src="./star1.png" alt="Star 1" className="w-full" />
  </div>

  {/* Main Hero Image */}
<div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[580px] h-auto md:h-[800px] md:ml-[150px] lg:h-[600px] lg:mt-[-385px] mb-[-25px] md:mb-[-300px] flex items-end">
  <img
    src="./image.png"
    alt="Hero Image"
    className="w-full h-full object-cover"
  />
</div>


  {/* Right Star */}
  <div className="absolute right-[5%] top-[3%] w-[50px] sm:w-[80px] md:w-[110px]">
    <img src="./star2.png" alt="Star 2" className="w-full" />
  </div>

</div> 
</div>

        {/* Brand Logos Section */}
   <div className="bg-black py-8 mt-[-40px] px-6">
   <div className="flex flex-wrap justify-center md:justify-between items-center gap-5 md:gap-8 w-full max-w-[1200px] mx-auto">
    <img src="Group.png" alt="Brand 1" className="h-auto max-w-[100px] sm:max-w-[130px] md:max-w-[140px]" />
    <img src="zara-logo-1 1.png" alt="Brand 2" className="h-auto max-w-[100px] sm:max-w-[130px] md:max-w-[140px]" />
    <img src="gucci-logo-1 1.png" alt="Brand 3" className="h-auto max-w-[100px] sm:max-w-[130px] md:max-w-[140px]" />
    <img src="prada-logo-1 1.png" alt="Brand 4" className="h-auto max-w-[100px] sm:max-w-[130px] md:max-w-[140px]" />
    <img src="Group (1).png" alt="Brand 5" className="h-auto max-w-[100px] sm:max-w-[130px] md:max-w-[140px]" />
    </div>
     </div> 

        </div>

        {/* Sections */}
        <Arrivals />
        <Sellers />
        <Dressess />
        <Reviews />
        <Footer />
     
    </>
  );
}

export default Home;
