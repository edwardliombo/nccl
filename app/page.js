
import Mission from "./components/Mission";
import Share from "./components/Share";
import Variousinformation from "./components/Variousinformation";
import Welcomecard from "./components/Welcomecard";
export default function Home() {
  return (
    <section className="">
      <Share />
       <Variousinformation />
       <Welcomecard />
       <Mission />
    </section>
   
  );
}
