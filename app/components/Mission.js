import { PiTargetBold } from "react-icons/pi";
import { FaEyeLowVision } from "react-icons/fa6";
const Mission = ()=>{
    return(
        <section className="flex max-sm:flex-col">
            <div className="flex flex-col gap-4 items-center w-full p-16 text-justify bg-teal-800 text-white">
                <PiTargetBold className="text-5xl text-center" />
                <h1 className="text-5xl text-center p">Vision</h1>
                <article>
                    NCCL’s Vision is to be the most reliable and responsible support services to our clients, and committed partners towards growth and continuing success.
                </article>
            </div>

            <div className="flex flex-col gap-4 items-center w-full p-16 text-justify bg-teal-700 text-white">
                <FaEyeLowVision className="text-5xl text-center text-white" />
                <h1 className="text-5xl text-center p">Mission</h1>
                <article>
                NCCL’s mission is to empower people and businesses alike through the provision of optimally tailored solutions for their business excellence needs.
                </article>
            </div>
            <div className="flex flex-col gap-4 items-center w-full p-16 text-justify bg-teal-600 text-white">
                <PiTargetBold className="text-5xl text-center" />
                <h1 className="text-5xl text-center p">Core Values</h1>
                <article>
                    Integrity 
                    We put high importance on personal & corporate INTEGRITY. 

                    Excellence
                    We have a culture of continuously striving for EXCELLENCE & for the best in everything we do.

                    Connecting
                    We are constantly CONNECTING with ourselves, with other people, businesses & networks.

                </article>
            </div>
           
        </section>
    )
}

export default Mission;