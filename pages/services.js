import Head from 'next/head';
import React from 'react';
import Services from '../components/Forms/Services'
import Layout from '../components/Layout';
import {IoChevronForwardCircleOutline, IoChevronForwardOutline} from 'react-icons/io'


export default function services() {
  return (
    <div>
        <Head>
            <title>Avenue25 Services</title>
            <meta name="description" content='Services section of the official Avenue 25 website, clearly outlining all our services and what they all entail' />
        </Head>

        <Layout>

        {/* Service Chevron */}

        <div className="accordianWrapper">
            <div className="accordion">
                <input type="radio" name="control" id="web" checked/>
                <label className="accordionLabel" for="web">Web Development</label>
                <div className="accordionContent">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere qui sapiente mollitia, consequatur, sunt cumque fuga laudantium iure ratione corrupti quia maiores ducimus id minima nam culpa veniam? Exercitationem.
                    </p>
                </div>
            </div>

            <div className="accordion">
                <input type="radio" name="control" id="DM" checked/>
                <label className="accordionLabel" for="DM">Digital Marketing</label>
                <div className="accordionContent">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere qui sapiente mollitia, consequatur, sunt cumque fuga laudantium iure ratione corrupti quia maiores ducimus id minima nam culpa veniam? Exercitationem.
                    </p>
                </div>
            </div>

            <div className="accordion">
                <input type="radio" name="control" id="net" checked/>
                <label className="accordionLabel" for="net">Network and Security </label>
                <div className="accordionContent">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere qui sapiente mollitia, consequatur, sunt cumque fuga laudantium iure ratione corrupti quia maiores ducimus id minima nam culpa veniam? Exercitationem.
                    </p>
                </div>
            </div>


            <div className="accordion">
                <input type="radio" name="control" id="cloud" />
                <label className="accordionLabel" for="cloud">Cloud Solutions</label>
                <div className="accordionContent">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere qui sapiente mollitia, consequatur, sunt cumque fuga laudantium iure ratione corrupti quia maiores ducimus id minima nam culpa veniam? Exercitationem.
                    </p>
                </div>
            </div>

            <div className="accordion">
                <input type="radio" name="control" id="other" />
                <label className="accordionLabel" for="other">Other Services</label>
                <div className="accordionContent">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere qui sapiente mollitia, consequatur, sunt cumque fuga laudantium iure ratione corrupti quia maiores ducimus id minima nam culpa veniam? Exercitationem.
                    </p>
                </div>
            </div>
        </div>  

        <Services />
        </Layout>
    </div>
  )
}
