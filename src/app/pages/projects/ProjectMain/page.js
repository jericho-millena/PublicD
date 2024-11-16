import React from "react";
import Component from "@/app/components/project_components/DocumentLink";
import Output from "@/app/components/project_components/PreviewOfOutput";

export default function ProjectMain() {
  return (
    <main>
      <div class="p-4 center mx-10 my-2">
        <div class="p-4">
          <div className="flex justify-end mb-4">
            <div className="flex items-center w-96 border border-gray-400 text-gray-700 rounded-lg shadow-md bg-white hover:bg-gray-200">
              <input
                type="text"
                placeholder="Search"
                className="flex-grow px-4 py-2 text-gray-700 bg-transparent outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 105.293 13.707l3.414 3.414a1 1 0 001.414-1.414l-3.414-3.414A8 8 0 0010 2zM5 10a5 5 0 1110 0A5 5 0 015 10z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-[5fr_2fr] gap-4 mb-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-48 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-48 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
          
          <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                class="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="container mx-auto px-4 py-8">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">
    Description
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8">
    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none">
      <p className="text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque metus orci, ut rhoncus felis elementum ac. Mauris at sollicitudin mauris. Nulla a tristique purus. Donec odio sapien, bibendum quis nisi ut, convallis tempor augue. Curabitur nunc lacus, posuere sed semper in, dignissim in nunc. Sed vel volutpat erat, eget malesuada urna. Aenean tellus elit, maximus at nunc nec, congue condimentum nulla. Quisque nec malesuada mauris. Cras nisl ipsum, suscipit vitae malesuada eget, tempor tristique odio. Vivamus pharetra ullamcorper tellus, et faucibus ligula hendrerit sed. Integer vestibulum convallis nisl, ac tincidunt nulla lobortis ac. Cras iaculis metus vitae felis laoreet facilisis. Integer vitae tempor augue, a fermentum enim. Vivamus urna eros, congue sed molestie sed, aliquet id orci. Nam tincidunt leo ut turpis dictum consectetur.
      </p>
    </div>
    <div>
        <Component/>
    </div>
  </div>
</div>
            
          </div>
          <div className="py-5">
            <Output/>
          </div>

<div className="py-5">
<h1 class="text-xl text-black-800">About the authors (6) </h1>
</div>
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
            
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
  <div style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}>
    <img src="/socials/avatar.png" alt="name" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
  </div>
  <div>
    <p style={{ fontWeight: 'bold' }}>Firstname Middlename Lastname</p>
    <p>Doctorate Degree in Computer Science</p>
    <p><i className="fa fa-map-marker"></i> Batangas State University - Alangilan Campus</p>
  </div>
</div>

  <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
  <div style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}>
    <img src="/socials/avatar.png" alt="name" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
  </div>
  <div>
    <p style={{ fontWeight: 'bold' }}>Firstname Middlename Lastname</p>
    <p>Doctorate Degree in Computer Science</p>
    <p><i className="fa fa-map-marker"></i> Batangas State University - Alangilan Campus</p>
  </div>
  
</div>

<div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
  <div style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}>
    <img src="/socials/avatar.png" alt="name" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
  </div>
  <div>
    <p style={{ fontWeight: 'bold' }}>Firstname Middlename Lastname</p>
    <p>Doctorate Degree in Computer Science</p>
    <p><i className="fa fa-map-marker"></i> Batangas State University - Alangilan Campus</p>
  </div>
</div>
  
</div>
          
          <div className="py-5">
            <h1 class="text-xl text-black-800">Fundings</h1>
          </div>
      
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <p style={{ fontSize: '36px', fontWeight: 'bold', color: 'red', marginBottom: '5px' }}>
        500,000
      </p>
      <p style={{ fontSize: '14px', color: '#666' }}>₱  Total Project Fundings</p>
             
      </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"></div>
          </div>
    </main>
  );
}