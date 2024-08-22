import aboutImg from '../assets/aboutPic.jpg'
import { ABOUT_TEXT } from '../constants'
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h2>
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center md:justify-center sm:justify-start w-[400px] h-[400px] sm:w-[300px] md:w-[400px] sm:h-[300px] md:h-[400px] ml-[-30px] ">
            <img className='rounded-2xl w-full h-auto max-w-[300px] md:max-w-[400px] ml-0' src={aboutImg} alt="about" />
          </div>       
        </div>
        <div className="w-full lg:w-1/2 sm:pt-[20px]">
            <div className="flex justify-center lg:justify-start">
                <p className="my-2 max-w-wl py-6 ">{ABOUT_TEXT}</p>
            </div>
          </div> 
      </div>
    </div>
  )
}

export default About
