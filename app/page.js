import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <section className="text-gray-600 body-font bg-gradient-to-r from-rose-100 to-teal-100 ">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 font-medium text-gray-900 title-font sm:text-9xl text-7xl">
            <span className='text-yellow-400 ' >
            We</span> Are
            <br className="hidden lg:inline-block" />
           Hirin<span className='text-green-700 ' >g</span>
          </h1>
          <p className="mb-8 leading-relaxed">
           Wanna Hire ? , Find Your Interns at Various fields like <span className='text-white bg-black ' >  Product Managers</span>, Data Engineer,<span className= 'text-black bg-green-500 ' >Big data analyst</span>  etc.🫡
          </p>
          <div className="flex justify-center">
            <Link href="/" className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Find Jobs</Link>
            <Link href="/" className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">Hire Talent</Link>
          </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <Image className="object-cover object-center rounded" alt="hero" src={"/t.png"} width={720} height={600} />
        </div>
      </div>
    </section>
    <section className="text-gray-600 body-font bg-gradient-to-r from-rose-100 to-teal-100 " >
    <section className="text-gray-600 body-font bg-gradient-to-r from-rose-100 to-teal-100 ">
      <div className="container flex flex-col items-center px-1 mx-96 md:flex-row">
        {/* <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 font-medium text-gray-900 title-font sm:text-9xl text-7xl">
            <span className='text-yellow-400 ' >
            We</span> Are
            <br className="hidden lg:inline-block" />
           Hirin<span className='text-green-700 ' >g</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <Link href="/" className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Find Jobs</Link>
            <Link href="/" className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">Hire Talent</Link>
          </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <Image className="object-cover object-center rounded" alt="hero" src={"/t.png"} width={720} height={600} />
        </div> */}
        <span className='px-2 text-4xl text-green-600 ' >
        Our Hiring</span><span className='px-2 text-4xl text-black-400 ' > Partners!</span>
      </div>
    </section>
    <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        {/* <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 font-medium text-gray-900 title-font sm:text-9xl text-7xl">
            <span className='text-yellow-400 ' >
            We</span> Are
            <br className="hidden lg:inline-block" />
           Hirin<span className='text-green-700 ' >g</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <Link href="/" className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Find Jobs</Link>
            <Link href="/" className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">Hire Talent</Link>
          </div>
        </div> */}
        {/* <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <Image className="object-cover object-center rounded" alt="hero" src={"/t.png"} width={720} height={600} />
        </div> */}
        <div className="carousel carousel-end rounded-box bg-gradient-to-r from-rose-100 to-teal-100">
  <div className="carousel-item bg-gradient-to-r from-rose-100 to-teal-100 ">
    <img src="/netflix.png" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/download.png" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/images.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/IBM.png" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/face.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/bmw.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/yahoo.png" alt="Drink" />
  </div>
</div>
      </div>

      

    </section>

    <section class="text-gray-600 body-font bg-gradient-to-r from-rose-100 to-teal-100 ">
  <div class="container px-5 py-2 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
        <p class="leading-relaxed">Users</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
        <p class="leading-relaxed">Recruiters</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2048+ </h2>
        <p class="leading-relaxed">offers</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1000+ </h2>
        <p class="leading-relaxed">companies</p>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font bg-gradient-to-r from-rose-100 to-teal-100 ">
      <div className="container flex flex-col items-center px-5 py-2 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 font-medium text-gray-900 title-font sm:text-6xl text-7xl">
            <span className='text-yellow-400 ' >
            Hire</span> 
            {/* <br className="hidden lg:inline-block" /> */}
           Talents<span className='text-green-700 ' ></span>
          </h1>
          <p className="mb-8 leading-relaxed">
            No.1 site to produce quality interns at quick time
          </p>
          <div className="flex justify-center">
            <Link href="/" className="inline-flex px-6 py-2 text-lg text-white bg-blue-600 border-0 rounded focus:outline-none hover:bg-indigo-600">Find Jobs</Link>
            <Link href="/" className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">Hire Talent</Link>
          </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <Image className="object-cover object-center rounded" alt="hero" src={"/h.png"} width={720} height={600} />
        </div>
      </div>
    </section>


    <section className="text-gray-600 body-font bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="container flex flex-col items-center px-5 py-2 mx-auto md:flex-row">
        <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <Image className="object-cover object-center rounded" alt="hero" src="/h5.png" width={720} height={200} />
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">All JobListings are available</h1>
          <p className="mb-8 leading-relaxed">Hire <span className='text-black bg-yellow-400 ' >Data Scientists</span>, Product-Managers, <span className='text-black bg-green-400 ' >Web Developers</span>, and Many More.</p>
          <div className="flex items-end justify-center w-full md:justify-start">
           
          </div>
      
         
        </div>
      </div>
    </section>

     <section className="text-gray-600 body-font bg-gradient-to-r from-rose-100 to-teal-100 ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
            <div className="h-full text-center">
              <Image
                alt="testimonial"
                className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full"
                src="/t1.jpg" width={50} height={50}
              />
              <p className="leading-relaxed">
              "My time as a Senior Product Designer at HireTalent Company has been nothing short of exceptional. The company's commitment to delivering cutting-edge products and user-centric designs has been truly inspiring. Working with a talented and passionate team has allowed me to push my creative boundaries .
              </p>
              <span className="inline-block w-10 h-1 mt-6 mb-4 bg-indigo-500 rounded"></span>
              <h2 className="text-sm font-medium tracking-wider text-gray-900 title-font">HOLDEN CAULFIELD</h2>
              <p className="text-gray-500">Senior Product Designer</p>
            </div>
          </div>
          <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
            <div className="h-full text-center">
              <Image
                alt="testimonial"
                className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full"
                src="/t2.jpg" width={50} height={50}
              />
              <p className="leading-relaxed">
              "I had an incredible experience working as a UI Developer at HireTalent Company. The team's passion for excellence and innovative ideas truly inspired me. The collaborative environment allowed me to grow both personally and professionally. 
              </p>
              <span className="inline-block w-10 h-1 mt-6 mb-4 bg-indigo-500 rounded"></span>
              <h2 className="text-sm font-medium tracking-wider text-gray-900 title-font">ALPER KAMU</h2>
              <p className="text-gray-500">UI Developer</p>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 lg:mb-0">
            <div className="h-full text-center">
              <Image
                alt="testimonial"
                className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full"
                src="/t3.jpg" width={50} height={50}
              />
              <p className="leading-relaxed">
              "As the Chief Technology Officer at HireTalent Company, I have been privileged to lead a team of talented and dedicated professionals. From day one, I was impressed by the company's vision and commitment to leveraging technology to drive innovation and transformation. 
              </p>
              <span className="inline-block w-10 h-1 mt-6 mb-4 bg-indigo-500 rounded"></span>
              <h2 className="text-sm font-medium tracking-wider text-gray-900 title-font">HENRY LETHAM</h2>
              <p className="text-gray-500">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}


