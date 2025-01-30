import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex items-center justify-between px-12 py-10 bg-gray-100 min-h-screen">
     
      <div className="w-1/2 space-y-4">
        <h1 className="text-6xl font-bold text-blue-900 leading-tight">
          Governor Sindh <br />
          <span className="text-6xl font-normal">Kamran Khan Tessori</span>
        </h1>

        <h2 className="text-5xl font-extrabold text-blue-400">
          Certified Cloud <br />
          Applied Generative AI <br/> Engineer (GenEng)
        </h2>

        <p className="text-2xl font-bold text-blue-800">
          Earn up to <span className="font-bold">$5000/month</span>
        </p>

        <p className="text-blue-800 text-2xl font-bold">
          Now admissions are open in <span className="font-bold">Hyderabad</span>
        </p>
       
        <button className="mt-4 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg rounded-lg">
          APPLY NOW
        </button>

        
      </div>

    
      <div className="w-1/2 flex justify-center">
        <Image 
          src="/cover.1d863e39.png" 
          alt="Governor Sindh" 
          width={800} 
          height={800} 
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
