import ScrollAnimationWrapper from "./ScrollAnimationWrapper"; // Import the wrapper

function Footer() {
  return (
    <ScrollAnimationWrapper>
      <footer className="text-white py-8 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="mb-4">© 2025 Akanksha Singh. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/aku-S7" className="hover:text-gray-400 transition duration-300">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/akanksha-singh-321309285/" className="hover:text-gray-400 transition duration-300">
              LinkedIn
            </a>
            <a href="https://x.com/AkankshaSi54927" className="hover:text-gray-400 transition duration-300">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </ScrollAnimationWrapper>
  );
}

export default Footer;
