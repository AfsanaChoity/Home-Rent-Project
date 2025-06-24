import Image from "next/image";

import Hero from "./components/Hero";
import Form from "./components/Form";
import ReadyToGo from "./components/ReadyToGo";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Form></Form>
      <ReadyToGo></ReadyToGo>
    </div>
  );
}
