import Image from "next/image";

import Hero from "./components/Hero";
import Form from "./components/Form";
import ReadyToGo from "./components/ReadyToGo";
import Reviews from "./components/Reviews";
import FeaturedProperty from "./components/FeaturedProperty";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Form></Form>
      <FeaturedProperty></FeaturedProperty>
      <Reviews></Reviews>
      <ReadyToGo></ReadyToGo>
    </div>
  );
}
