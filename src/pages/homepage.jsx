import Navbar from "../components/navbar";

import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import newsimg from "../assets/newsimg.jpg";

export default function HomePage() {
  return (
    <>
        <Navbar />
        <section className="bg-gray-100  px-4 lg:px-16 mt-16 ">
        <section className="lg:flex lg:gap-2">
        <div className="lg:w-2/3 ">
          <div
            className="mb-4 h-44 md:h-64 lg:h-full pt-20 md:pt-40 lg:pt-80 px-2 md:px-10 bg-cover bg-center hover:scale-105 duration-300"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bg1})`,
            }}
          >
            <button className="bg-rose-500 py-1 px-4 text-white md:mb-2 lg:text-lg lg:py-2 lg:px-8 lg:mb-4">
              Food Habit
            </button>
            <p className="text-white font-semibold lg:text-xl lg:mb-4">
              A Discount Toner Cartridge Is Better Than Ever.
            </p>
            <div className="flex gap-6 text-white text-sm lg:text-lg">
              <p>
                <i class="fa-regular fa-user mr-1"></i>Mark wiens
              </p>
              <p>
                <i class="fa-regular fa-calendar-days mr-1"></i>03 April, 2018
              </p>
              <p>
                <i class="fa-regular fa-comment mr-1"></i>06 Comments
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="mb-4 h-44 md:h-64 pt-20 md:pt-40 px-2 md:px-10 lg:px-4 bg-cover bg-center hover:scale-105 duration-300"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bg2})`,
            }}>
            <button className="bg-rose-500 py-1 px-4 text-white md:mb-2">
              Food Habit
            </button>
            <p className="text-white font-semibold">
              A Discount Toner Cartridge Is Better Than Ever.
            </p>
            <div className="flex gap-6 text-white text-sm">
              <p>
                <i class="fa-regular fa-user mr-1"></i>Mark wiens
              </p>
              <p>
                <i class="fa-regular fa-calendar-days mr-1"></i>03 April, 2018
              </p>
              <p>
                <i class="fa-regular fa-comment mr-1"></i>06 Comments
              </p>
            </div>
          </div>

          <div className="mb-4 h-44 md:h-64 pt-20 md:pt-40 px-2 md:px-10 lg:px-4 bg-cover bg-center hover:scale-105 duration-300"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bg3})`,
            }}>
            <button className="bg-rose-500 py-1 px-4 text-white md:mb-2">
              Food Habit
            </button>
            <p className="text-white font-semibold">
              A Discount Toner Cartridge Is Better Than Ever.
            </p>
            <div className="flex gap-6 text-white text-sm">
              <p>
                <i class="fa-regular fa-user mr-1"></i>Mark wiens
              </p>
              <p>
                <i class="fa-regular fa-calendar-days mr-1"></i>03 April, 2018
              </p>
              <p>
                <i class="fa-regular fa-comment mr-1"></i>06 Comments
              </p>
            </div>
          </div>
        </div>
        </section>

        <div className="bg-white my-2 p-1">
            <p className="font-semibold"><span className="text-rose-500">Breaking News</span>: Astronomy Binoculars A Great Alternative</p>
        </div>


        <section id="posts and news section">

          <div id="left div">

         <div className="bg-white p-2 my-4">
          <div className="bg-indigo-950 px-2 py-1"><p className="font-semibold text-white">Latest News</p></div>

          <div className="my-4 flex gap-2">
            <div className="px-2 h-44 pt-32 bg-cover bg-center w-5/12" style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${newsimg})`,
            }}>
              <button className="bg-rose-500 py-1 px-4 text-white">Lifestyle</button>
            </div>
            <div className="w-7/12">
              <p className="font-semibold">A Discount Toner Cartridge Is Better Than Ever.</p>
              <p className="text-xs text-gray-500"><i class="fa-regular fa-user"></i> Mark Wiens <i class="fa-regular fa-calendar-days"></i> 03,April,2018 <i class="fa-regular fa-comment"></i> 06 Comments</p>
              <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia tempora numquam!</p>
            </div>
          </div>


          <div className="my-4 flex gap-2">
            <div className="px-2 h-44 pt-32 bg-cover bg-center w-5/12" style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${newsimg})`,
            }}>
              <button className="bg-rose-500 py-1 px-4 text-white">Lifestyle</button>
            </div>
            <div className="w-7/12">
              <p className="font-semibold">A Discount Toner Cartridge Is Better Than Ever.</p>
              <p className="text-xs text-gray-500"><i class="fa-regular fa-user"></i> Mark Wiens <i class="fa-regular fa-calendar-days"></i> 03,April,2018 <i class="fa-regular fa-comment"></i> 06 Comments</p>
              <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia tempora numquam!</p>
            </div>
          </div>


          <div className="my-4 flex gap-2">
            <div className="px-2 h-44 pt-32 bg-cover bg-center w-5/12" style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${newsimg})`,
            }}>
              <button className="bg-rose-500 py-1 px-4 text-white">Lifestyle</button>
            </div>
            <div className="w-7/12">
              <p className="font-semibold">A Discount Toner Cartridge Is Better Than Ever.</p>
              <p className="text-xs text-gray-500"><i class="fa-regular fa-user"></i> Mark Wiens <i class="fa-regular fa-calendar-days"></i> 03,April,2018 <i class="fa-regular fa-comment"></i> 06 Comments</p>
              <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia tempora numquam!</p>
            </div>
          </div>


          <div className="my-4 flex gap-2">
            <div className="px-2 h-44 pt-32 bg-cover bg-center w-5/12" style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${newsimg})`,
            }}>
              <button className="bg-rose-500 py-1 px-4 text-white">Lifestyle</button>
            </div>
            <div className="w-7/12">
              <p className="font-semibold">A Discount Toner Cartridge Is Better Than Ever.</p>
              <p className="text-xs text-gray-500"><i class="fa-regular fa-user"></i> Mark Wiens <i class="fa-regular fa-calendar-days"></i> 03,April,2018 <i class="fa-regular fa-comment"></i> 06 Comments</p>
              <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia tempora numquam!</p>
            </div>
          </div>


          </div> 





          <div className="bg-white p-2 my-4">
          <div className="bg-indigo-950 px-2 py-1"><p className="font-semibold text-white">Popular Posts</p></div>

          <div className="my-4">
            <div className="px-2 h-56 pt-32 bg-cover bg-center" style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${newsimg})`,
            }}>
              <button className="bg-rose-500 py-1 px-4 text-white">Lifestyle</button>
              <p className="font-semibold text-white">A Discount Toner Cartridge Is Better Than Ever.</p>
              <p className="text-xs text-white"><i class="fa-regular fa-user"></i> Mark Wiens <i class="fa-regular fa-calendar-days"></i> 03,April,2018 <i class="fa-regular fa-comment"></i> 06 Comments</p>
            </div>
          </div>


          <div className="my-4">
            <div className="px-2 h-44 pt-32 bg-cover bg-center" style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${newsimg})`,
            }}>
              <button className="bg-rose-500 py-1 px-4 text-white">Lifestyle</button>
            </div>
            <div>
              <p className="font-semibold">A Discount Toner Cartridge Is Better Than Ever.</p>
              <p className="text-xs text-gray-500"><i class="fa-regular fa-user"></i> Mark Wiens <i class="fa-regular fa-calendar-days"></i> 03,April,2018 <i class="fa-regular fa-comment"></i> 06 Comments</p>
              <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia tempora numquam!</p>
            </div>
          </div>


          <div className="my-4">
            <div className="px-2 h-44 pt-32 bg-cover bg-center" style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${newsimg})`,
            }}>
              <button className="bg-rose-500 py-1 px-4 text-white">Lifestyle</button>
            </div>
            <div>
              <p className="font-semibold">A Discount Toner Cartridge Is Better Than Ever.</p>
              <p className="text-xs text-gray-500"><i class="fa-regular fa-user"></i> Mark Wiens <i class="fa-regular fa-calendar-days"></i> 03,April,2018 <i class="fa-regular fa-comment"></i> 06 Comments</p>
              <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia tempora numquam!</p>
            </div>
          </div>
          </div> 


          <div className="bg-white p-2 my-4">
          <div className="bg-indigo-950 px-2 py-1"><p className="font-semibold text-white">Relevant Stories</p></div>


          <div className="my-4 flex gap-2">
            <div className="px-2 h-44 pt-32 bg-cover bg-center w-5/12" style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${newsimg})`,
            }}>
              <button className="bg-rose-500 py-1 px-4 text-white">Lifestyle</button>
            </div>
            <div className="w-7/12">
              <p className="font-semibold">A Discount Toner Cartridge Is Better Than Ever.</p>
              <p className="text-xs text-gray-500"><i class="fa-regular fa-user"></i> Mark Wiens <i class="fa-regular fa-calendar-days"></i> 03,April,2018 <i class="fa-regular fa-comment"></i> 06 Comments</p>
              <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia tempora numquam!</p>
            </div>
          </div>


          <div className="my-4 flex gap-2">
            <div className="px-2 h-44 pt-32 bg-cover bg-center w-5/12" style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${newsimg})`,
            }}>
              <button className="bg-rose-500 py-1 px-4 text-white">Lifestyle</button>
            </div>
            <div className="w-7/12">
              <p className="font-semibold">A Discount Toner Cartridge Is Better Than Ever.</p>
              <p className="text-xs text-gray-500"><i class="fa-regular fa-user"></i> Mark Wiens <i class="fa-regular fa-calendar-days"></i> 03,April,2018 <i class="fa-regular fa-comment"></i> 06 Comments</p>
              <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia tempora numquam!</p>
            </div>
          </div>


          <div className="my-4 flex gap-2">
            <div className="px-2 h-44 pt-32 bg-cover bg-center w-5/12" style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${newsimg})`,
            }}>
              <button className="bg-rose-500 py-1 px-4 text-white">Lifestyle</button>
            </div>
            <div className="w-7/12">
              <p className="font-semibold">A Discount Toner Cartridge Is Better Than Ever.</p>
              <p className="text-xs text-gray-500"><i class="fa-regular fa-user"></i> Mark Wiens <i class="fa-regular fa-calendar-days"></i> 03,April,2018 <i class="fa-regular fa-comment"></i> 06 Comments</p>
              <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia tempora numquam!</p>
            </div>
          </div>
          </div> 



          </div>

         <div id="right div">
          <div className="bg-white p-2 my-4">
            <div className="bg-indigo-950 px-2 py-1"><p className="font-semibold text-white">Editor's Pick</p></div>
          

          <div style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${newsimg})`,
          }} className="h-44 bg-cover bg-center my-4 px-2 pt-32">
            <button className="bg-rose-500 py-1 px-4 text-white">Travel</button>
          </div>

          <div>
            <p className="font-semibold">A Discount Toner Cartridge Is Better Than Ever.</p>
            <p className="text-xs text-gray-500"><i class="fa-regular fa-user"></i> Mark Wiens <i class="fa-regular fa-calendar-days"></i> 03,April,2018 <i class="fa-regular fa-comment"></i> 06 Comments</p>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia tempora numquam!</p>
          </div>

          <div className="border-t-2 py-4 my-4 flex gap-2">
            <div className="w-5/12"><img src={newsimg} alt="posts"/></div>
            <div className="w-7/12">
              <p className="my-1">Help Finding Information Online is so easy</p>
              <p className="text-xs text-gray-500"><i class="fa-regular fa-user"></i> Mark Wiens <i class="fa-regular fa-calendar-days"></i> 03,April,2018 <i class="fa-regular fa-comment"></i> 06 Comments</p>
            </div>
          </div>



          <div className="border-t-2 py-4 my-4 flex gap-2">
            <div className="w-5/12"><img src={newsimg} alt="posts"/></div>
            <div className="w-7/12">
              <p className="my-1">Help Finding Information Online is so easy</p>
              <p className="text-xs text-gray-500"><i class="fa-regular fa-user"></i> Mark Wiens <i class="fa-regular fa-calendar-days"></i> 03,April,2018 <i class="fa-regular fa-comment"></i> 06 Comments</p>
            </div>
          </div>

          <div className="border-t-2 py-4 my-4 flex gap-2">
            <div className="w-5/12"><img src={newsimg} alt="posts"/></div>
            <div className="w-7/12">
              <p className="my-1">Help Finding Information Online is so easy</p>
              <p className="text-xs text-gray-500"><i class="fa-regular fa-user"></i> Mark Wiens <i class="fa-regular fa-calendar-days"></i> 03,April,2018 <i class="fa-regular fa-comment"></i> 06 Comments</p>
            </div>
          </div>

          <div className="bg-indigo-950 px-2 py-1"><p className="text-white font-semibold">Newsletter</p></div>

          <p className="text-gray-500 my-2">Here, I focus on a range of items and features that we use in life without giving them a second thought</p>

          <div className="my-4">
            <input type="text" placeholder="Enter Email" className="p-1 bg-gray-100"></input>
            <button className="bg-rose-500 py-1 px-4 text-white">Subscribe</button>
          </div>

          <p className="text-gray-500">You can unsubscribe us at any time</p>

          <div className="bg-black text-white p-2 my-4">Social Networks</div>

          <div className="bg-blue-800 text-white p-2 my-4"><i class="fa-brands fa-facebook-f mx-2 border-r pr-2"></i><span className="px-4 border-r">983 Likes</span><a href="/" className="pl-4">Like our page</a></div>

          <div className="bg-blue-200 text-white p-2 my-4"><i class="fa-brands fa-twitter mx-2 border-r pr-2"></i><span className="px-4 border-r">983 Followers</span><a href="/" className="pl-4">Like our page</a></div>

          <div className="bg-red-700 text-white p-2 my-4"><i class="fa-brands fa-youtube mx-2 border-r pr-2"></i><span className="px-4 border-r">983 Subscribers</span><a href="/" className="pl-4">Like our page</a></div>

          <div className="bg-orange-500 text-white p-2 my-4"><i class="fa-solid fa-wifi mx-2 border-r pr-2"></i><span className="px-4 border-r">983 Subscribe</span><a href="/" className="pl-4">Like our page</a></div>


          </div>
         </div>

        </section>





        </section>

        

        
    </>
  );
}
