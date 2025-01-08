import { useState } from "react";
import General from "./general";
import LocationAndDate from "./location-and-date";
import Media from "./media";
import Tickets from "./tickets";


import { Steps, Form, message } from "antd";
import { uploadFileAndReturnUrl } from "../../../../../../api-services/storage-service";
import { createEvent } from "../../../../../../api-services/events-service";
import { useNavigate } from "react-router-dom";

export interface EventFormStepProps {
    eventData: any;
    setEventData: any;
    setCurrentStep: any;
    currentStep: number;
    selectedMediaFiles?: any;
    setSelectedMediaFiles?: any
    loading?: boolean
    onFinish?: any,
}

function EventForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [eventData, setEventData] = useState<any>({});
    const [selectedMediaFiles, setSelectedMediaFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();



    const onFinish = async () => {
        try {
            const [...urls] = await Promise.all(
                selectedMediaFiles.map(async (file: any) => {
                    return await uploadFileAndReturnUrl(file);
                })
            )

            eventData.media = urls;

            await createEvent(eventData)
            message.success('Event created successfully')
            navigate("/admin/events")

        } catch (error: any) {
            message.error(error.message)
        }
    }

    const commonProps = {
        eventData,
        setEventData,
        setCurrentStep,
        currentStep,
        selectedMediaFiles,
        setSelectedMediaFiles,
        loading,
        setLoading,
        onFinish,
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
