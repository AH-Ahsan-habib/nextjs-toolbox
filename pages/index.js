import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> Facebook login</title>
        <link rel="icon" href="" />
      </Head>

      <main>
        <Header title="" />
        <hr />
        <p className="description">
         
        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
