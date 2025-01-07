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
    selectedMediaFiles?: any;
    setSelectedMediaFiles?: any
}

function EventForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [eventData, setEventData] = useState({});
    const [selectedMediaFiles, setSelectedMediaFiles] = useState([]);

    const commonProps = {
        eventData,
        setEventData,
        setCurrentStep,
        currentStep,
        selectedMediaFiles,
        setSelectedMediaFiles
    }

    const stepsData = [
        {
            name: "Të përgjithshme",
            component: <General {...commonProps} />,
        },
        {
            name: "Lokacioni dhe Data",
            component: <LocationAndDate {...commonProps} />,
        },
        {
            name: "Media",
            component: <Media {...commonProps} />,
        },
        {
            name: "Biletat",
            component: <Tickets {...commonProps} />,
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
