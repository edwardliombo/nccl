
import Maincard from "./components/Maincard";
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
       <Maincard className="" />
       <Mission />
    </section>
   
  );
}
