import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import ServicesCard from "../components/Cards/Services";
import { Services } from "../utils/Services";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Avenue 25</title>
        <meta
          name="description"
          content="A digital Agency focused on esults and change, we are progressive and all our products are streamlined to offer you the best service possible"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* Hero Section */}

        <div className="w-full h-screen bg-cover bg-scroll bg-no-repeat bg-[url('https://ik.imagekit.io/knqnox49e/Img/Agency.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660815203754')]">
          <div className="max-w-4xl items-center mx-auto my-auto text-center">
            <h4 className="text-4xl font-semibold pt-56">
              We are all about <br /> Digital brand experience
            </h4>
          </div>
        </div>

        {/* services */}

        <div className="text-center">
          <h2 className="text-4xl font-semibold mt-12 text-cyan-900">
            Here are some of our services
          </h2>
          <div className="max-w-screen-xl mt-10 flex flex-col md:flex-row items-center flex-no-wrap mx-auto">
            {Services.map((service, i) => (
              <ServicesCard
                title={service.name}
                img={service.imageLink}
                text={service.text}
              />
            ))}
          </div>
        </div>
        {/*About*/}
        <div className="max-w-7xl mt-10 flex flex-col sm:flex-row no-wrap items-center">
          <div className="w-full sm:w-1/2 ml-12">
            <p className="font-semibold text-xl mb-2  ">Who we are</p>
            <h3 className="text-4xl font-semibold text-cyan-900 mb-4">All things Digital</h3>
            <p className="mx-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              dolores eos eius quia commodi iure inventore totam, veniam aliquid
              nesciunt quaerat deserunt possimus accusamus consectetur officia.
              Fuga praesentium consectetur accusantium. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Error commodi hic, ipsa eos
              natus eaque ipsam voluptas impedit dicta minus harum quae dolores
              vel laborum accusamus consequuntur maxime placeat non.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              quae corporis eos voluptate iure unde accusantium similique ipsam
              veritatis minus eaque nostrum ab, quasi fugiat placeat inventore
              cum ipsum est.
            </p>
          </div>
          <div className="ml-12">
            <img
              src="https://ik.imagekit.io/knqnox49e/Img/icons/lounging_hfMafXEw9t.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660898864216"
              alt="illustration of woman on computer"
              className="w-fit "
            />
          </div>
        </div>
        {/*CTA*/}

        <div className="flex flex-col items-center text-center mt-10">
          <h2 className="capitalize text-6xl font-semibold text-cyan-900">Lets work together</h2>
          <ul className="flex flex-col sm:flex-row justify-center item-center mt-5 font-medium text-lg mb-10">
            <li className="pr-2 border-none sm:border-r">WebDevelopment</li>
            <li className="pr-2 border-none sm:border-r-black sm:border-r">Digital Marketing</li>
            <li className="pr-2 border-none sm:border-r-black sm:border-r">Cloud Services</li>
            <li className="pl-2 ">Network and Security</li>
          </ul>
          <a href="" className="px-2 py-3 border-2 rounded-full hover:border-none hover:bg-blue-600 hover:text-white hover:py-4 hover:px-3 border-blue-600">Get In Touch</a>
        </div>
      </Layout>
    </div>
  );
}
