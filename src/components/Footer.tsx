import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-6">
        
        
        <div className="py-6">
          <h3 className="text-lg font-semibold">Core Courses</h3>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li>Programming Fundamentals</li>
            <li>Web2 Using NextJS</li>
            <li>Earn as You Learn</li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold">Advanced Courses</h3>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li>Web 3 and Metaverse</li>
            <li>Cloud-Native Computing</li>
            <li>Artificial Intelligence (AI) and Deep Learning</li>
            <li>Ambient Computing and IoT</li>
            <li>Genomics and Bioinformatics</li>
            <li>Network Programmability and Automation</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold">Social Links</h3>
          <div className="mt-3 flex space-x-4 text-gray-600">
            <a href="#" className="hover:text-blue-600"><FaFacebookF size={24} /></a>
            <a href="#" className="hover:text-red-600"><FaYoutube size={24} /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram size={24} /></a>
          </div>
          <div className="mt-4 flex items-center space-x-2 text-gray-700">
            <MdEmail size={20} />
            <a href="mailto:education@governorsindh.com" className="hover:underline">
              education@governorsindh.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
