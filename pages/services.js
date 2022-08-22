import Head from "next/head";
import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { BiRightArrowCircle } from "react-icons/bi";
import Banner from "../components/Banner/Banner";

export default function services() {
  const web = [
    "Web Design & Development",
    "Mock up Design ",
    "UI/Ux Design",
    "Database Connection",
    "API connection",
    "Backend Connection ",
    "cms",
  ];
  const security = [
    "Password Security",
    "Network and Internet Security",
    "Database and Server Access",
    "Network audit and Vulnerability report",
    "Forensic Analysis",
    "Preventative maintenance and network monitoring solutions",
    "Enterprise grade managed file transfer and automation (MFT",
    "Business continuity with application and user intelligence fail over features",
    "White/grey/black box penetration testing and vulnerability assessment",
  ];
  const net = [
    "Onsite and remote support",
    "Installation and configuration",
    "Maintenance",
    "Full network auditing",
  ];
  const dig = [
    "Search Engine optimasation (SEO)",
    "Digital Marketing & Advertising",
    "Google Ad Sense ",
    "Social Media Marketing",
    "Influencer and Affiliate Marketing",
    "Google ads",
    "Youtube Ads",
    "Campaign Development",
    "Social Media Management",
    "Email Marketing",
    "Email Branding",
    " Search Engine Marketing",
  ];
  const cloud = [
    "Cloud Migration",
    "Infrastructure Service",
    "Data Transformation",
    "Sustainable IT and Technologies",
    "Cloud Security",
  ];
  return (
    <div>
      <Head>
        <title>Avenue25 Services</title>
        <meta
          name="description"
          content="Services section of the official Avenue 25 website, clearly outlining all our services and what they all entail"
        />
      </Head>

      <Layout>
        {/* Service Chevron */}
        {/* banner */}
        <Banner>
          <div className="text-center pt-40 max-w-screen-md mx-auto text-white">
            <h2 className="text-5xl font-semibold text-white mb-5">
              Our Passion is your Success
            </h2>
            <p className="text-lg text-white mt-2 font-medium">
              We know that one size doesnt fit all, our customers success comes
              from making each employee recognition program match each
              organisation, down to the details. We work to understand the
              uniqueness of each organisation ,project and vision so we can
              support your succes each day
            </p>
          </div>
        </Banner>
        <div className="accordianWrapper">
          <div className="accordion">
            <input type="radio" name="control" id="web" checked />
            <label className="accordionLabel" htmlFor="web">
              Web Development
            </label>
            <div className="accordionContent">
              <p>
                We build Enterprise grade websites without taking away the
                simplicity and usability, thus enabling businesses to unlock
                innovation and leverage digital transformation. We provide
                custom web development services from startups to enterprises
                that help in solving complex challenges with reliable and agile
                digital solutions.
                <br />
                Here is a list of all our Web Development Services
              </p>
              <ul>
                {web.map((item, i) => (
                  <li key={i} className="flex no-wrap items-center text-lg">
                    <BiRightArrowCircle className="mx-2"/>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="accordion">
            <input type="radio" name="control" id="DM" checked />
            <label className="accordionLabel" htmlFor="DM">
              Digital Marketing
            </label>
            <div className="accordionContent">
              <p>
                We do whatever we can with copy and code to ensure that your
                site appears as close to the top of search engine results as
                possible. We provide you with Digital Marketing Solutions that
                will amplify the growth of your business. Being present online
                is now more important than ever. With extensive experience in
                both Digital Marketing and the South African business
                environment, we can help you by running effective, professional
                online advertising campaigns that will gain new customers for
                your business. We are passionate about SMEs and their success.
                Let Digital Briefcase ensure your business is in front of the
                right people at the right time
                <br />
                Here is a list of all our Web Development Services
              </p>
              <ul>
                {dig.map((item, i) => (
                  <li key={i} className="flex no-wrap items-center text-lg">
                    <BiRightArrowCircle className="mx-2"/>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="accordion">
            <input type="radio" name="control" id="net" checked />
            <label className="accordionLabel" htmlFor="net">
              Network and Security
            </label>
            <div className="accordionContent">
              <p>
                We provide a wide range of IT Support services for businesses of
                all sizes like networking, cloud migration, Microsoft Products
                Support, server support, and remote assistance. Unlike big box
                stores with low quality service, high prices, and pushy sales
                reps, we strive to provide the best service available at a fair
                price.
                <br />
                Here is a list of all our Networking Solutions
              </p>
              <ul>
                {net.map((item, i) => (
                  <li key={i} className="flex no-wrap items-center text-lg">
                    <BiRightArrowCircle className="mx-2"/>
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                <br />
                Here is a list of all our Security Solutions
              </p>
              <ul>
                {security.map((item, i) => (
                  <li key={i} className="flex no-wrap items-center text-lg">
                    <BiRightArrowCircle className="mx-2"/>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="accordion">
            <input type="radio" name="control" id="cloud" />
            <label className="accordionLabel" htmlFor="cloud">
              Cloud Solutions
            </label>
            <div className="accordionContent">
              <p>
                Modernise your legacy application and harness the potential of
                the latest software and cloud technologies for enhanced ROI and
                reduced ongoing management/maintenance costs.
                <br />
                Here is a list of all our Web Development Services
              </p>
              <ul>
                {cloud.map((item, i) => {
                  return (
                    <li key={i} className="flex no-wrap items-center text-lg">
                      <BiRightArrowCircle className="mx-2"/>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="accordion">
            <input type="radio" name="control" id="other" />
            <label className="accordionLabel" htmlFor="other">
              Other Services
            </label>
            <div className="accordionContent">
              <p>
                Some of our additional services include Software Consulting:Our
                software consulting team offer technology advices so that you
                can easily implement the optimal technology stack for your
                custom software development requirement.
                <br />
                We also offer hosting services amoungst other IT services
                <br />
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
