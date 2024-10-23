import Logo from './assets/logo.svg';
import Ring from './assets/icons/ring.svg';
import Moon from './assets/icons/moon.svg';
import Sun from './assets/icons/sun.svg';
import Cart from './assets/icons/shopping-cart.svg';
import { useState, useContext } from 'react';
import CartDetails from './assets/cine/CartDetails';
import { MovieContext, ThemeContext } from './assets/context';

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  console.log(cartData);

  function handleCartShow() {
    setShowCart((prevState) => !prevState); // Toggle cart visibility
  }

  return (
    <header>
      {/* Render CartDetails modal if showCart is true */}
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}

      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="Logo" />
        </a>

        <ul className="flex items-center space-x-5 relative">
          <li>
            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
              <img src={Ring} width="24" height="24" alt="Ring" />
            </a>
          </li>
          <li>
            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#"
            onClick={()=>setDarkMode(darkMode =>!darkMode)}>
            
              <img src={darkMode ? Sun : Moon} width="24" height="24" alt="Moon" />
            </a>
          </li>
          <li className="relative"> {/* Relative positioning for cart icon container */}
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartShow}  // Toggle cart modal on click
            >
              <img src={Cart} width="24" height="24" alt="shopping-Cart" />
              {/* Cart item count badge */}
              {cartData.length > 0 && (
                <span
                  className="rounded-full absolute top-[-10px] right-[-10px] bg-[#12cf6f] text-white text-center flex items-center justify-center w-[20px] h-[20px] text-xs"
                >
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
