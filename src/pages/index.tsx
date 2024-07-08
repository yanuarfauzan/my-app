import { Inter } from "next/font/google";
import Typewriter from 'typewriter-effect';

const inter = Inter({ subsets: ["latin"] });

const handleDownload = () => {
  const downloadUrl = '/CV_YanuarFauzanIsnain.pdf'
  window.open(downloadUrl, '_blank');
}

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="w-full flex flex-col lg:flex-row-reverse justify-evenly items-center">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="text-center lg:text-left mt-3">
          <p>Hello There🙌</p>
          <h1 className="text-5xl font-bold">Yanuar Fauzan Isnain</h1>
          <h1 className="text-xl font-bold mt-3">
            <Typewriter
              options={{
                strings: ['Web Developer', 'Backend Developer', 'IT Enthusiast'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="py-3">
            I create stunning websites for your business, <br />
            Intermediate experienced in web development.
          </p>
          <button className="btn btn-primary" onClick={handleDownload}>Download CV</button>
        </div>
      </div>
    </div>
  );
}
