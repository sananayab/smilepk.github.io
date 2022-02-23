import Head from 'next/head';
import Image from "next/image";
import Intro from '../components/Intro';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { data } from '../data';
import styles from '../styles/Home.module.css'

export default function Home({services}) {
  return (
    <div>
      <Head>
        <title>Smilepk</title>
        <meta name="description" content="Software Agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro /> 
      <Services services={services} />
         <Testimonials testimonials ={Testimonials}/>
     
    </div>
  );
}

export const getStaticProps =  async ()=>{
  const services = data;
  return {
    props: { services },

  };
};
