import igfeed from "../assets/igfeed.jpg";
export default function Footer() {
    return(
        <>
        <section className="bg-indigo-950 px-4 py-10">
            <div className="md:flex justify-between md:mx-28">
<div className="lg:flex lg:gap-40">
            <div className="mb-8">
                <p className="font-semibold text-white text-xl">Top Products</p>
                    <p className="text-gray-400 my-1">Managed Website</p>
                    <p className="text-gray-400 my-1">Manage Reputaion</p>
                    <p className="text-gray-400 my-1">Power Tools</p>
                    <p className="text-gray-400 my-1">Marketing Service</p>
            </div>

            <div className="mb-4">
                <p className="font-semibold text-white text-xl">Quick Links</p>
                    <p className="text-gray-400 my-1">Jobs</p>
                    <p className="text-gray-400 my-1">Brand Assets</p>
                    <p className="text-gray-400 my-1">Investor Relations</p>
                    <p className="text-gray-400 my-1">Terms of Service</p>
            </div>
</div>
<div className="lg:flex lg:gap-40">
            <div className="mb-4">
                <p className="font-semibold text-white text-xl">Features</p>
                    <p className="text-gray-400 my-1">Jobs</p>
                    <p className="text-gray-400 my-1">Brand Assets</p>
                    <p className="text-gray-400 my-1">Investor Relations</p>
                    <p className="text-gray-400 my-1">Terms of Service</p>
            </div>

            <div className="mb-4">
                <p className="font-semibold text-white text-xl">Resources</p>
                    <p className="text-gray-400 my-1">Guides</p>
                    <p className="text-gray-400 my-1">Research</p>
                    <p className="text-gray-400 my-1">Experts</p>
                    <p className="text-gray-400 my-1">Agencies</p>
            </div>
</div>
            </div>

            <p className="text-white font-semibold my-4 text-2xl">Instagram Feed</p>

            <div className="flex gap-6 my-4">
                <img src={igfeed} alt="igfeed" className="w-20"/>
                <img src={igfeed} alt="igfeed" className="w-20"/>
                <img src={igfeed} alt="igfeed" className="w-20"/>
                <img src={igfeed} alt="igfeed" className="w-20"/>
            </div>

            <div className="flex gap-6 my-4">
                <img src={igfeed} alt="igfeed" className="w-20"/>
                <img src={igfeed} alt="igfeed" className="w-20"/>
                <img src={igfeed} alt="igfeed" className="w-20"/>
                <img src={igfeed} alt="igfeed" className="w-20"/>
            </div>

            <p className="text-white my-2">Copyright © 2022. All rights reserved</p>

            <div className="text-white">
            <i class="fa-brands fa-square-facebook mx-2"></i>
            <i class="fa-brands fa-twitter mx-2"></i>
            <i class="fa-solid fa-globe mx-2"></i>
            <i class="fa-brands fa-pinterest mx-2"></i>
            </div>
        </section>
        </>
    )
};