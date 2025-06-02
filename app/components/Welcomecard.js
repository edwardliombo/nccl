import Asidecard from "./Asidecard";
import Mission from "./Mission";

const Welcomecard =()=>{
    return(
        <section className="flex min-sm:gap-14 min-sm:p-20 max-sm:p-12 bg-[F9F7F7] max-sm:flex-col">
            
            <div className="flex flex-col gap-4 min-sm:basis-3/3 text-justify min-sm:w-64">
                
                <article className="border-l-4 border-sky-600 p-14 bg-white rounded-md">
                <h1 className="text-5xl min-sm:pb-8 text-sky-600 font-bold">About Us</h1>
                    Near Consult and Company Limited (NCCL) is an established Research, Business and Management
                    Consultancy, Capacity Building and Training Company in the United Republic of Tanzania with a
                    commitment to align client development with the overall organisation culture and operating systems. With
                    experienced and professional experts’ we‘ve been operating since 2011. Our organization originally specializes
                    in conducting Research, Business support and business development services to Institutions, NGO’s,
                    Farmers Groups/ Producer Organisation (PO’s), Micro, Small and Medium Enterprises (SME’s). We
                    expanded our range of services to cover Agribusiness Development, Marketing System Development
                    consulting, Transformational/Change management training and other related activities.
                </article>
            
            </div>
            <div className="basis-3/3  text-justify">
                <Mission />
            </div>
        </section>
    )

}
export default Welcomecard;