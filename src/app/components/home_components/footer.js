import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-zinc-700 text-white py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <div className="pl-4 my-4">
              <h2 className="text-sm md:text-md lg:text-xl font-semibold lg:whitespace-nowrap">
                BATANGAS STATE UNIVERSITY - THE NATIONAL ENGINEERING UNIVERSITY
              </h2>
              <p className="text-sm md:text-md lg:text-xl mb-10">
                Research Management Information System
              </p>
              <div className="lg:flex items-center">
                {" "}
                <div className="mr-4">
                  {" "}
                  <p className="text-xs md:text-sm lg:text-md italic mb-2">
                    A premier national university that develops leaders in the
                    global knowledge economy
                  </p>
                </div>
                <div>
                  {" "}
                  <p className="text-xs md:text-sm lg:text-md mt-4 mb-2">
                    Contact us:
                  </p>
                  <div className="flex">
                    {" "}
                    <a
                      href="https://www.facebook.com/BatStateUTheNEU?mibextid=ZbWKwL"
                      className="mr-4"
                    >
                      <Image
                        src="/socials/facebook.png"
                        alt="Facebook"
                        width={30}
                        height={30}
                      />
                    </a>
                    <a
                      href="https://x.com/BatStateUTheNEU?t=Vsn9UIoAAQp4Xh_3QGppVQ&s=09"
                      className="mr-4"
                    >
                      <Image
                        src="/socials/x.png"
                        alt="Twitter"
                        width={30}
                        height={30}
                      />
                    </a>
                    <a
                      href="https://youtube.com/@batstateutheneu?si=LT5sgFQwZvAP1dir"
                      className="mr-4"
                    >
                      <Image
                        src="./socials/youtube.png"
                        alt="YouTube"
                        width={30}
                        height={30}
                      />
                    </a>
                    <a
                      href="https://www.tiktok.com/@batstateutheneu?_t=8s8yq9smcNe&_r=1"
                      className="mr-4"
                    >
                      <Image
                        src="./socials/tiktok.png"
                        alt="TikTok"
                        width={30}
                        height={30}
                      />
                    </a>
                    <a href="https://www.linkedin.com/school/batstateutheneu/">
                      <Image
                        src="./socials/linkedin.png"
                        alt="LinkedIn"
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-left text-sm mt-10"> ©️ Copyright 2023</div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <div className="mr-10">
              <Image src="./rms.png" alt="Image 1" width={170} height={170} />
            </div>
            <div className="mr-10">
              <Image
                src="./logon1.png"
                alt="Image 32"
                width={170}
                height={170}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
