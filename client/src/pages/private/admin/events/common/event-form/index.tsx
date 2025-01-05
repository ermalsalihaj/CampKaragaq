import { useState } from "react";
import General from "./general";
import LocationAndDate from "./location-and-date";
import Media from "./media";
import Tickets from "./tickets";

import { Steps } from "antd";

function EventForm() {
    const [currentStep, setCurrentStep] = useState(0);

    const stepsData = [
        {
            name: "Të përgjithshme",
            component: <General />,
        },
        {
            name: "Vendndodhja dhe Data",
            component: <LocationAndDate />,
        },
        {
            name: "Media",
            component: <Media />,
        },
        {
            name: "Biletat",
            component: <Tickets />,
        },
    ]

    return (
        <div>
            <Steps current={currentStep} onChange={(step) => setCurrentStep(step)}>
                {stepsData.map((step, index) => (
                    <Steps.Step key={index} title={step.name}
                        className="text-sm"
                    />
                ))}
            </Steps>

            <div className="mt-5">
                {stepsData[currentStep].component}
            </div>
        </div>
    )
}

export default EventForm
