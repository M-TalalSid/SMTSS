import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-5">
      <div className="max-w-[1440px] mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left Section */}
          <div className="mb-6 md:mb-0 flex flex-col gap-4">
          <h1 className="font-bold text-[32px] leading-10 tracking-tight text-[#3563E9] text-left">
          MORENT
        </h1>
            <p className="max-w-[289px] text-base text-opacity-[60%] text-[#131313] font-medium tracking-tight">
              Our Vision Is To Provide Convenience And Help Increase Your Sales
              Business
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap gap-16">
            {/* About Section */}
            <div>
              <h1 className="font-semibold mb-8 text-xl text-[#1A202C]  tracking-tight">About</h1>
              <ul className="space-y-6 text-base text-opacity-[60%] text-[#131313] font-medium tracking-tight">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">How It Works</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Featured</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Partnership</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Business Relation</Link></li>
              </ul>
            </div>

            {/* Community Section */}
            <div>
            <h1 className="font-semibold mb-8 text-xl text-[#1A202C]  tracking-tight">Community</h1>
              <ul className="space-y-6 text-base text-opacity-[60%] text-[#131313] font-medium tracking-tight">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Events</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Podcast</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Invite A Friend</Link></li>
              </ul>
            </div>

            {/* Socials Section */}
            <div>
            <h1 className="font-semibold mb-8 text-xl text-[#1A202C]  tracking-tight">Socials</h1>
              <ul className="space-y-6 text-base text-opacity-[60%] text-[#131313] font-medium tracking-tight">
              <li><Link href="https://www.discord.com" className="text-muted-foreground hover:text-primary">Discord</Link></li>
              <li><Link href="https://www.instagram.com" className="text-muted-foreground hover:text-primary">Instagram</Link></li>
              <li><Link href="https://www.twitter.com" className="text-muted-foreground hover:text-primary">Twitter</Link></li>
              <li><Link href="https://www.facebook.com" className="text-muted-foreground hover:text-primary">Facebook</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-[#131313] border-opacity-[16%]" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between text-sm">
          <p className=" text-base  text-[#131313] font-medium tracking-tight">©2023 MORENT. All Rights Reserved. Made By Talal Shoaib</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline text-base  text-[#131313] font-medium tracking-tight">
              Privacy & Policy
            </a>
            <a href="#" className="hover:underline text-base  text-[#131313] font-medium tracking-tight">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;