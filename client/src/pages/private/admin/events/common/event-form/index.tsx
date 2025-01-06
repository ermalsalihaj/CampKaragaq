import { useState } from "react";
import General from "./general";
import LocationAndDate from "./location-and-date";
import Media from "./media";
import Tickets from "./tickets";


import { Steps, Form } from "antd";

export interface EventFormStepProps {
    eventData: any;
    setEventData: any;
    setCurrentStep: any;
    currentStep: number;
}

function EventForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [eventData, setEventData] = useState({});

    const commonProps = {
        eventData,
        setEventData,
        setCurrentStep,
        currentStep
    }

    const stepsData = [
        {
            name: "Të përgjithshme",
            component: <General {...commonProps} />,
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
        <Form layout="vertical">
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
        </Form>
    )
}

export default EventForm
