import * as React from 'react';
import AfterLoginHeader from './AfterLoginHeader';
import JusticeLeague from './Foto/JusticeLeague.png';
import Flash from './Foto/hero-image.webp';
import BatmanVDoomsday from './Foto/Batman_v_Doomsday_20.webp';
import Together from './Foto/3.jpg';
import BatmanSolo from './Foto/4.jpg';


export default function AfterLogin(){

    return (
        <div>
        <AfterLoginHeader/>
        {/* Hero Section Start */}
        <section id="home" className="pt-36">
      <div className="container mx-auto px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Hello Everyone 🦇<br /> 
          <span class="block font-bold text-dark text-4xl mt-1">
            Justice League
          </span></h1>
          <h2 className="text-lg md:text-xl font-light text-slate-500 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p className="text-base md:text-lg font-serif text-blue-950 mb-8 leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eaque tempore nisi possimus.</p>
          <a href="#" className="text-sm text-white font-thin bg-blue-500 py-2 px-5 rounded-full hover:shadow-lg hover:opacity-85">Contact Us</a>
        </div>
        <div className="w-full md:w-1/2 px-4 mt-10 lg:mt-0">
          <img src={JusticeLeague} alt="Bruce Wayne" className="w-full max-w-lg mx-auto rounded-lg" />
        </div>
      </div>
        </section>
        {/* Hero Section End */}
    
        {/* About Section Start */}
        <section id="about" className="pt-36 pb-32">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-10 lg:w-1/2">
                        <h4 className="font-bold uppercase text-primary text-lg mb-3">
                            About Us
                        </h4>
                        <h2 className="font-light text-dark text-3xl mb-4 max-w-ml lg:text-4xl">
                            Gotham
                        </h2>
                        <p className="font-medium text-base text-slate-500 max-w-xl lg:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, eius pariatur asperiores natus velit illo expedita eligendi voluptatem reprehenderit repellat deleniti quo dolorum quae nam provident? Distinctio exercitationem labore alias.</p>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Call Us</h3>
                        <p className="font-medium text-base text-slate-500 max-w-xl mb-6 lg:text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum magnam harum quasi excepturi labore placeat fugit tenetur animi recusandae itaque quaerat, fugiat, vitae ratione cumque asperiores qui inventore dolorem consectetur.
                        </p>
                        <div className="flex items-center">
                            {/* Wonder Woman */}
                            <a href="https://youtu.be/5lGoQhFb4NM?si=2oE4ieQGTL5OSBkQ" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-800 text-blue-600 hover:border-primary hover:bg-primary hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" className="fill-current" height="100" viewBox="0 0 40 40">
                                    <path fill="#ffeea3" d="M5.026,18.5c-0.431,0-0.768-0.177-1.001-0.527L2.973,16.5h7.001c0.449,0,0.776,0.164,1.001,0.501 l1.06,1.499H5.026z"></path><path fill="#f5c276" d="M9.974,17c0.351,0,0.493,0.141,0.6,0.301L11.068,18H5.026c-0.264,0-0.444-0.094-0.603-0.332 L3.945,17H9.974 M9.974,16H2l1.609,2.25C3.943,18.75,4.443,19,5.026,19H13l-1.609-2.276C11.057,16.224,10.557,16,9.974,16L9.974,16 z"></path><path fill="#ffeea3" d="M27.966,18.5l1.052-1.487c0.232-0.349,0.56-0.513,1.009-0.513h7.001l-1.043,1.459 c-0.243,0.364-0.58,0.541-1.011,0.541H27.966z"></path><path fill="#f5c276" d="M36.056,17l-0.497,0.695C35.418,17.906,35.238,18,34.974,18h-6.042l0.51-0.721 C29.533,17.141,29.675,17,30.026,17H36.056 M38,16h-7.974c-0.583,0-1.083,0.224-1.417,0.724L27,19h7.974 c0.583,0,1.083-0.25,1.417-0.75L38,16L38,16z"></path><g><path fill="#ffeea3" d="M20.026,23.988l-0.087,0.154l-0.404,0.609L16.519,30l-3.555-6.126 c-0.463-0.917-1.253-1.374-2.401-1.374H8c-0.431,0-0.768-0.178-1.001-0.528L5.963,20.5h5.104c1.453,0,2.518,0.602,3.254,1.839 l2.161,3.645L20,19.988l3.519,5.996l2.161-3.646c0.736-1.237,1.801-1.838,3.254-1.838h5.104l-1.029,1.462 C32.768,22.322,32.431,22.5,32,22.5h-2.563c-1.148,0-1.938,0.458-2.415,1.399L23.481,30L20.026,23.988z"></path><path fill="#f5c276" d="M20,20.976l2.658,4.53l0.858,1.462l0.865-1.458l1.728-2.915C26.748,21.522,27.672,21,28.934,21h4.14 l-0.489,0.695C32.444,21.906,32.264,22,32,22h-2.563c-1.325,0-2.283,0.554-2.847,1.646L23.483,29l-2.585-4.499l-0.878-1.527 L20,23.011l-0.021-0.037l-0.878,1.527L16.517,29l-3.107-5.354C12.845,22.554,11.888,22,10.562,22H8 c-0.264,0-0.444-0.094-0.599-0.326L6.926,21h4.14c1.262,0,2.185,0.522,2.823,1.593l1.729,2.917l0.865,1.458l0.858-1.462L20,20.976 M20,19l-3.521,6l-1.729-2.917C13.925,20.697,12.68,20,11.066,20H5l1.583,2.25C6.917,22.75,7.417,23,8,23h2.562 c0.913,0,1.556,0.31,1.969,1.125L16.521,31l3.448-6L20,25.056L20.031,25l3.448,6l3.99-6.875C27.881,23.31,28.525,23,29.437,23H32 c0.583,0,1.083-0.25,1.417-0.75L35,20h-6.066c-1.614,0-2.858,0.697-3.684,2.083L23.521,25L20,19L20,19z"></path></g><g><path fill="#ffeea3" d="M20,16.003l-3.492,6.022l-3.672-5.96c-0.62-1.023-1.515-1.566-2.586-1.566H3 c-0.431,0-0.768-0.178-1.001-0.528L0.963,12.5h9.634c1.959,0,3.194,1.571,3.756,2.507l1.97,3.175L20,11.98l3.678,6.202l1.966-3.169 c0.565-0.943,1.801-2.514,3.76-2.514h9.634l-1.029,1.462C37.768,14.322,37.431,14.5,37,14.5h-7.25 c-1.071,0-1.966,0.542-2.588,1.569l-3.67,5.957L20,16.003z"></path><path fill="#f5c276" d="M20,12.961l2.827,4.768l0.841,1.418l0.869-1.401l1.539-2.481C26.584,14.419,27.691,13,29.403,13 h8.671l-0.489,0.695C37.444,13.906,37.264,14,37,14h-7.25c-1.237,0-2.308,0.643-3.012,1.803l-3.233,5.248l-2.64-4.553L20,15.007 l-0.865,1.492l-2.64,4.553l-3.229-5.242C12.558,14.643,11.487,14,10.25,14H3c-0.264,0-0.444-0.094-0.599-0.325L1.926,13h8.67 c1.713,0,2.82,1.419,3.335,2.277l1.531,2.469l0.869,1.401l0.841-1.418L20,12.961 M20,11l-3.688,6.219l-1.531-2.469 C13.844,13.188,12.389,12,10.597,12H0l1.583,2.25C1.917,14.75,2.417,15,3,15h7.25c0.913,0,1.646,0.479,2.161,1.328L16.521,23L20,17 l3.479,6l4.11-6.672C28.104,15.479,28.837,15,29.75,15H37c0.583,0,1.083-0.25,1.417-0.75L40,12H29.403 c-1.792,0-3.247,1.188-4.185,2.75l-1.531,2.469L20,11L20,11z"></path></g>
                                </svg>
                            </a>
                            {/* The Batman */}
                            <a href="https://youtu.be/LDG9bisJEaI?si=JBvuOepEYH7LNwvc" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-800 text-blue-600 hover:border-primary hover:bg-primary hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" className="fill-current" viewBox="0 0 30 30">
                                    <path d="M 0.34765625 11 C -0.00634375 11 -0.12173438 11.478812 0.19726562 11.632812 C 1.9542656 12.475813 4.5126563 14.197328 4.2226562 16.986328 C 4.1666562 17.517328 4.6163906 17.974422 5.1503906 17.982422 C 7.7463906 18.019422 13.92 18.58 15 23 C 16.08 18.58 22.253609 18.018469 24.849609 17.980469 C 25.383609 17.972469 25.832344 17.516375 25.777344 16.984375 C 25.487344 14.195375 28.045734 12.474859 29.802734 11.630859 C 30.122734 11.477859 30.006344 11 29.652344 11 L 20.773438 11 C 20.338437 11 19.958516 11.293797 19.853516 11.716797 C 19.656516 12.512797 19.240047 13.71 18.498047 13.875 C 17.436047 14.125 16.394531 14.512219 16.269531 13.824219 C 16.269531 13.276219 16.146406 12.593031 16.066406 12.207031 C 16.048406 12.121031 15.926438 12.113266 15.898438 12.197266 L 15.5625 13.1875 C 15.5625 13.1875 15.438 13 15 13 C 14.563 13 14.4375 13.1875 14.4375 13.1875 L 14.101562 12.197266 C 14.073563 12.113266 13.951594 12.121031 13.933594 12.207031 C 13.853594 12.593031 13.730469 13.276219 13.730469 13.824219 C 13.605469 14.512219 12.563953 14.125 11.501953 13.875 C 10.759953 13.711 10.343484 12.513797 10.146484 11.716797 C 10.041484 11.293797 9.6635156 11 9.2285156 11 L 0.34765625 11 z"></path>
                                </svg>
                            </a>
                            {/* The Flash */}
                            <a href="https://youtu.be/r51cYVZWKdY?si=Nj92aYNpb1G3BLcB" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-800 text-blue-600 hover:border-primary hover:bg-primary hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" className="fill-current" y="0px" width="100" height="25" viewBox="0 0 100 100">
                                    <path d="M45.985,98.028c-3.183,0-6.195-1.188-8.516-3.35 c-5.153-4.081-13.793-11.727-15.298-18.154c-0.223-0.95-0.859-8.882-1.421-13.637c-3.18-1.712-5.769-3.135-6.239-6.893 L11.05,28.307c-0.39-3.116,1.501-6.062,4.496-7.006c0.635-0.2,1.291-0.301,1.953-0.301c1.293,0,2.526,0.381,3.565,1.062 c4.02-11.896,17.871-19.106,30.938-19.106c13.073,0,27.511,5.851,31.531,17.747C84.573,20.022,85.213,21,86.506,21 c0.66,0,1.315,0.101,1.947,0.299c3.001,0.945,4.892,3.892,4.502,7.008l-3.461,27.688c-0.47,3.758-2.73,6.928-5.91,8.64 c-0.562,4.755-1.527,10.938-1.749,11.889c-1.506,6.43-10.146,14.075-15.299,18.155c-2.321,2.162-5.333,3.35-8.515,3.35H45.985z" opacity=".35"></path><path fill="#f2f2f2" d="M43.985,96.028c-3.183,0-6.195-1.188-8.516-3.35c-5.153-4.081-13.793-11.727-15.298-18.154 c-0.223-0.95-1.188-7.135-1.75-11.89c-3.18-1.712-5.44-4.882-5.911-8.64L9.05,26.307c-0.39-3.116,1.501-6.062,4.496-7.006 c0.635-0.2,1.291-0.301,1.953-0.301c1.293,0,2.526,0.381,3.565,1.062C23.084,8.165,36.933,1.972,50,1.972 c13.073,0,26.921,6.193,30.941,18.09C81.98,19.381,83.213,19,84.506,19c0.66,0,1.315,0.101,1.947,0.299 c3.001,0.945,4.892,3.892,4.502,7.008l-3.461,27.688c-0.47,3.758-2.73,6.928-5.91,8.64c-0.562,4.755-1.527,10.938-1.749,11.889 c-1.506,6.43-10.146,14.075-15.299,18.155c-2.321,2.162-5.333,3.35-8.515,3.35H43.985z"></path><path fill="#ffc7a3" d="M40.985,88.028c-1.202,0-2.332-0.468-3.182-1.318L26.318,75.225c-0.85-0.85-1.318-1.98-1.318-3.182 V63c0-0.829,0-19.524,0-20V28.528c0-12.75,12.959-18.557,25-18.557c9.666,0,25,5.038,25,18.557V43c0,0.477,0,19.171,0,20v9.043 c0,1.202-0.468,2.332-1.318,3.182L62.197,86.71c-0.85,0.85-1.98,1.318-3.182,1.318H40.985z"></path><polygon fill="#40396e" points="52,77 48,77 45,74 55,74" opacity=".35"></polygon><polygon fill="#40396e" points="48,68 52,68 59,71 41,71" opacity=".35"></polygon><path fill="#de5147" d="M50,9.972c-12.419,0-25,5.807-25,18.557V38v7.5V63v3v6.043c0,1.202,0.468,2.332,1.318,3.182L43,90 c0,0,1.503-0.564,1.671-0.24C47,90,53,90,55.196,90.001C55.425,89.607,57,90,57,90l16.682-14.775c0.85-0.85,1.318-1.98,1.318-3.182 V66v-3V45.5V38v-9.472C75,15.779,62.419,9.972,50,9.972z M31,39c17,0,17,13,17,13s-10,4-17,4C29,52,28,45,31,39z M55.191,84 L55.191,84c-1.038-1.792-2.971-3-5.191-3s-4.153,1.208-5.191,3h0c-1.728,0-3.313-0.957-4.118-2.486L32,65c8-5,18-8,18-8s10,3,18,8 l-8.692,16.514C58.504,83.043,56.918,84,55.191,84z M69,56c-7,0-17-4-17-4s0-13,17-13C72,45,71,52,69,56z"></path><g><path fill="#f2f2f2" d="M43,50.455c0,0-3.653,0-6.364,0S33,48,33,48s0.909-2.455,4.545-2.455 C40.256,45.545,43,50.455,43,50.455z"></path><circle cx="37.909" cy="48" r="2.455" fill="#40396e"></circle><path fill="#40396e" d="M44,49c1.333,0,2.005-1.625,1.047-2.552C44.476,45.896,43.79,45.369,43,45 c-3.379-1.69-5.449-2.759-7.138-2.759C32.482,42.241,31,45,31,45s0.013-0.004,0.037-0.011c2.3-0.658,4.769-0.316,6.811,0.928 C40.093,47.285,43.01,49,44,49L44,49z"></path><path fill="#f2f2f2" d="M62.459,45.545c3.633,0,4.541,2.452,4.541,2.452s-0.925,2.452-3.633,2.452s-6.358,0-6.358,0 S59.75,45.545,62.459,45.545z"></path><circle cx="62.096" cy="47.998" r="2.452" fill="#40396e"></circle><path fill="#40396e" d="M56.009,49c0.99,0,3.907-1.715,6.152-3.083c2.042-1.244,4.511-1.586,6.811-0.928 C68.996,44.996,69.009,45,69.009,45s-1.482-2.759-4.862-2.759c-1.689,0-3.759,1.069-7.138,2.759 c-0.79,0.369-1.476,0.896-2.047,1.448C54.004,47.375,54.676,49,56.009,49L56.009,49z"></path><path fill="#f9b84f" d="M26,58l-2.155-0.5c-2.482,0-4.576-1.848-4.884-4.312L15.5,25.5l10.33,15.996L26,58z"></path><path fill="#f9b84f" d="M74.006,58l2.155-0.5c2.482,0,4.576-1.848,4.884-4.312L84.506,25.5l-10.33,15.996L74.006,58z"></path><path fill="none" stroke="#40396e" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M50,8.472c-11.328,0-24.315,5.514-25.5,17.028c-0.327,3.173-0.26,9.414-0.155,16.707L15.5,25.5l3.461,27.688 c0.308,2.463,2.402,4.312,4.884,4.312H24.5c0,3,1.772,14.57,2,15.543c1.244,5.314,13.243,14.728,13.243,14.728 c1.125,1.125,2.651,1.757,4.243,1.757h6.009h0.011"></path><path fill="none" stroke="#40396e" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M50.006,8.472c11.328,0,24.315,5.514,25.5,17.028c0.327,3.173,0.26,9.414,0.155,16.707L84.506,25.5l-3.461,27.688 c-0.308,2.463-2.402,4.312-4.884,4.312h-0.655c0,3-1.772,14.57-2,15.543c-1.244,5.314-13.243,14.728-13.243,14.728 c-1.125,1.125-2.651,1.757-4.243,1.757h-6.009H50"></path></g>
                                </svg>
                            </a>
                            {/* Superman */}
                            <a href="https://youtu.be/0WWzgGyAH6Y?si=4cSDkyoFWxgaqzJa" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-800 text-blue-600 hover:border-primary hover:bg-primary hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="fill-current" width="100" height="20" viewBox="0 0 48 48">
                                    <path fill="#C62828" d="M0 15L8 7 40 7 48 15 24 43z"></path><path fill="#FFEB3B" d="M33 15c-.1-3.4-3.8-6-9.7-6-5.9-.1-8.4 2.8-8.4 2.8s-4.5 4.9 10 4.9 14 5.8 14 5.8l6.3-7.5L41 10.8V15H33zM13 9H8.8l-6.1 6.1.2.2L6 18.9C7.7 11.8 13 9 13 9zM17.3 32.1l.2.2 6.5 7.6 5.6-6.6.9-1.2C30.6 32.2 24.8 34 17.3 32.1z"></path><path fill="#FFEB3B" d="M34.1 11.2c.5-.5 1-2.2 1-2.2h-3C32 9 33.4 10.1 34.1 11.2zM23.5 29c14 .7 9.8-3.4 9.8-3.4s-.5-.8-11-1.4c-10.5-.6-13.2-1.8-13.2-1.8l5.2 6.1C15.8 26.9 20.7 25.9 23.5 29z"></path>
                                </svg>
                            </a>
                            
                        </div>
    
                    </div>
                </div>
            </div>
        </section>
        {/* About Section End */}
    
        {/* Portfolio Section Start */}
        <section id="portfolio" className="pt-36 pb-16 bg-slate-200">
            <div className="container">
    
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2">Portfolio</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4">Projek Terbaru</h2>
                        <p className="font-medium text-md text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, labore? Asperiores dignissimos suscipit voluptate commodi aspernatur qui perferendis vero laborum!</p>
                    </div>
                </div>
    
                <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="rounded-md shadow-md overflow-hidden">
                            <img src={Flash} alt="landing Page" width="w-full"/>
                        </div>
                        <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                            Back in Time by Flash
                        </h3>
                        <p className="font-medium text-base text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto provident voluptates enim reiciendis recusandae nisi.
                        </p>
                    </div>
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="rounded-md shadow-md overflow-hidden">
                            <img src={BatmanVDoomsday} alt="landing Page" width="w-full"/>
                        </div>
                        <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                            Save the world from Doomsday
                        </h3>
                        <p className="font-medium text-base text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto provident voluptates enim reiciendis recusandae nisi.
                        </p>
                    </div>
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="rounded-md shadow-md overflow-hidden">
                            <img src={Together} alt="landing Page" width="w-full"/>
                        </div>
                        <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                            Save the World from Steppenwolf
                        </h3>
                        <p className="font-medium text-base text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto provident voluptates enim reiciendis recusandae nisi.
                        </p>
                    </div>
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="rounded-md shadow-md overflow-hidden">
                            <img src={BatmanSolo} alt="landing Page" width="w-full" />
                        </div>
                        <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                            Save Gotham from Bane
                        </h3>
                        <p className="font-medium text-base text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto provident voluptates enim reiciendis recusandae nisi.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        {/* Portfolio Section End */}
     
    
        {/* Client Section Start */}
        <section id="clients" className="pt-36 pb-32 bg-slate-700">
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto text-center mb-16">
                        <h4 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-black mb-4">Clients</h4>
                        <p className="font-light text-md text-secondary text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, ipsa.</p>
                    </div>
                </div>
    
                <div className="w-full px-4">
                    <div className="flex flex-wrap items-center justify-center">
                        {/* Globe */}
                        <a href="#" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-800 text-blue-600 hover:border-primary hover:bg-primary hover:text-white">
                        </a>
    
                        {/* Gotham */}
                        
                        
                    </div>
                </div>
            </div>
        </section>
        {/* Client Section End */}
    
        {/* Blog Section Start */}
        <section id="blog" className="pt-36 pb-32 bg-slate-100">
            <div className="container">
    
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4">News</h2>
                        <p className="font-medium text-md text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores nobis magni dignissimos?</p>
                    </div>
                </div>
    
                <div className="flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src="https://source.unsplash.com/360x200?programming" alt="Programming" className="w-full"/>
                            <div className="py-8 px-6">
                                <h3 className="block text-xl font-semibold text-dark">Fight On Earth</h3>
                                <p className="mb-6 text-base font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda?</p>
                                <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src="https://source.unsplash.com/360x200?programming" alt="Programming" className="w-full"/>
                            <div className="py-8 px-6">
                                <h3 className="block text-xl font-semibold text-dark">Fight On Earth</h3>
                                <p className="mb-6 text-base font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda?</p>
                                <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src="https://source.unsplash.com/360x200?programming" alt="Programming" className="w-full"/>
                            <div className="py-8 px-6">
                                <h3 className="block text-xl font-semibold text-dark">Fight On Earth</h3>
                                <p className="mb-6 text-base font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, assumenda?</p>
                                <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Blog Section End */}
    </div>
    );
    
}

