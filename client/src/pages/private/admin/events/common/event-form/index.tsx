import { useState } from "react";
import General from "./general";
import LocationAndDate from "./location-and-date";
import Media from "./media";
import Tickets from "./tickets";


import { Steps, Form, message } from "antd";
import { uploadFileAndReturnUrl } from "../../../../../../api-services/storage-service";
import { createEvent, updateEvent } from "../../../../../../api-services/events-service";
import { useNavigate, useParams } from "react-router-dom";

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

function EventForm({ initialData = {},
    type = 'create',
}: {
    initialData?: any,
    type?: 'create' | 'edit'
}) {
    const [currentStep, setCurrentStep] = useState(0);
    const [eventData, setEventData] = useState<any>(initialData);
    const [selectedMediaFiles, setSelectedMediaFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const params: any = useParams()


    const onFinish = async () => {
        try {
            setLoading(true);
            const [...urls] = await Promise.all(
                selectedMediaFiles.map(async (file: any) => {
                    return await uploadFileAndReturnUrl(file);
                })
            );
            // eventData.media = [...eventData.media, ...urls];
            eventData.media = [...(eventData.media || []), ...urls];


            if (type === 'edit') {
                await updateEvent(params.id, eventData)
                message.success('Event updated successfully')
            } else {
                await createEvent(eventData)
                message.success('Event created successfully')
            }

            navigate("/admin/events")

        } catch (error: any) {
            message.error(error.message)
        } finally {
            setLoading(false)
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
                    <Steps.Step
                        key={index}
                        title={step.name}
                        className="text-sm"
                        disabled={index > currentStep}
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
