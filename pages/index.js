import Head from "next/head"
import Layout from "../components/Layout"
export default function Page() {
    return (
    <Layout>
      <Head><title>HomePage</title></Head>
    <div>
     <h1 className="a">Hello world</h1>

     <style jsx>{` .a {
      background-color:blue;
      color:white;
        
      }`
     
      }
     </style>

     <style global jsx>{`
     html {
          background-color:lime;
     }
     ` }
     </style>
    </div>
    </Layout>)
  }