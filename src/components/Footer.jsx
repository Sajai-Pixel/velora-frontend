import logo from '../assets/velora.png'

const Footer = () => {
  return (
    <footer className="pt-14 px-auto bg-black/3">
      <div className="grid md:grid-cols-2">
        <div>
          <img
            alt="Logo"
            loading="lazy"
            width="87"
            height="30"
            decoding="async"
            data-nimg="1"
            className="h-16 w-auto"
            src={logo}
          />
          <p className="mt-4 text-sm text-black/60 max-w-xs">
            Discover premium products at unbeatable prices curated for quality, comfort and style.
          </p>
        </div>
        <div className="grid grid-cols-3 max-md:gap-10 max-md:mt-10">
          <div className="max-md:col-span-2">
            <h3 className="text-base uppercase font-medium text-black/70">Company</h3>
            <ul className="mt-4 text-sm text-black/60 flex flex-col gap-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base uppercase font-medium text-black/70">Support</h3>
            <ul className="mt-4 text-sm text-black/60 flex flex-col gap-2">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base uppercase font-medium text-black/70">Legal</h3>
            <ul className="mt-4 text-sm text-black/60 flex flex-col gap-2">
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center py-4 border-t border-black/10 mt-14 text-black/60">
        © 2026 <a href="https://prebuiltui.com/?utm_source=design">PrebuiltUI</a>. All rights reserved.
      </p>
    </footer>

  )
}

export default Footer
