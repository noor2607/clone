
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      
        <div className="">
          
          <span><Image src={"/logo.png"} alt="logo" height={50} width={50}/></span>
        </div>

      
        <div className="text-center flex-grow">
          <h1 className="text-xl font-semibold text-blue-200">
            Tuition Free Education Program on Latest Technologies
          </h1>
        </div>

      
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="/apply" className="hover:underline">Apply</a>
            </li>
            <li>
              <a href="/jobs" className="hover:underline">Jobs</a>
            </li>
            <li>
              <a href="/results" className="hover:underline">Results</a>
            </li>
            <li>
              <a href="/courses" className="hover:underline">Courses</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
