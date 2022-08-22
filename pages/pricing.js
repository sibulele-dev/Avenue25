import Head from "next/head";
import React, { useState } from "react";
import ProductSlider from "../components/Swiper/ProductSlider";
import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";

export default function pricing() {
  const [Price, setPrice] = useState([
    {
      Package: "Beginner",
      Cost: "450",
      Deals: ["3 pages ", "Mobile optimised Website","Search engine Optimisation", "7 hrs of support", "SSl Certificate/Security", "Free Domain Name", "5 Emails"],
      id: "1",
    },
    {
      Package: "Master",
      Cost: "350",
      Deals: ["5 pages ", "Mobile optimised Website","Search engine Optimisation", "15 hrs of support", "SSl Certificate/Security", "Free Domain Name", "15 Emails"],
      id: "2",
    },
    {
      Package: "Legendary",
      Cost: "900",
      Deals: ["10 pages ", "Mobile optimised Website","Search engine Optimisation", "24/7 support", "SSl Certificate/Security", "Free Domain Name", "25 Emails"],
      id: "3",
    },
  ]);

  const Hosting = [
    {
      Package: "Basic",
      Cost: "130",
      Deals: ["5gb SSD","5GB SSD Database","Spam Filtering","DDos protection", "Web Application firewall", "Encrypts SSL ", "Free backups","24/7 Support"],
    },
    {
      Package: "Standard",
      Cost: "180",
      Deals: ["10gb SSD","10GB SSD Database","Spam Filtering","DDos protection", "Web Application firewall", "Encrypts SSL ", "Free backups","24/7 Support"],
    },
    {
      Package: "Advanced",
      Cost: "320",
      Deals: ["15gb SSD","20GB SSD Database","Spam Filtering","DDos protection", "Web Application firewall", "Encrypts SSL ", "Free backups","24/7 Support"],
    },
    {
      Package: "Master",
      Cost: "480",
      Deals: ["20gb SSD","40GB SSD Database","Spam Filtering","DDos protection", "Web Application firewall", "Encrypts SSL ", "Free backups","24/7 Support"],
    },
  ];
  return (
    <>
      <Head>
        <title>Avenue25</title>
      </Head>

      <Layout>
        <Banner>
          <div className="text-center pt-40 max-w-screen-md mx-auto text-white">
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-5">
              We make sure that the price is always right
            </h2>
            <p className="text-lg text-white mt-2 font-medium"></p>
          </div>
        </Banner>
        <ProductSlider
          price={Price}
          tag="All our packages do not include the development fee and tha fee is dependant on the scope of the project"
          title="Web development Plans"
        />
        <ProductSlider price={Hosting} tag="all of our hosting plans are standarly priced " title="Hosting Plans"/>

        <h3 className="mx-4 text-center text-lg font-medium my-6">All Digital Marketing, Cloud Services, Networking & Security prices are determined on the size of the project</h3>
      </Layout>
    </>
  );
}
