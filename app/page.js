
import Maincard from "./components/Maincard";
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
    </section>
   
  );
}
