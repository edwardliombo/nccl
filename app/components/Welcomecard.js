import Asidecard from "./Asidecard";

const Welcomecard =()=>{
    return(
        <section className="flex min-sm:gap-12 min-sm:p-20 max-sm:p-12 bg-teal-50 max-sm:flex-col">
            
            <div className="flex flex-col gap-4 min-sm:basis-3/3 text-justify min-sm:w-64">
                <h1 className="text-5xl min-sm:pb-8 text-teal-800">What we Do</h1>
                <article>
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
                <Asidecard />
            </div>
        </section>
    )

}
export default Welcomecard;