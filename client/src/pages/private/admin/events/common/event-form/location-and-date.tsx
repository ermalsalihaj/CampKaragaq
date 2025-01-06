import { EventFormStepProps } from "."
import { Form, Input, Button } from "antd"

function LocationAndDate({ eventData, setEventData, setCurrentStep, currentStep }: EventFormStepProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <Form.Item label="Adresa">
                <Input
                    placeholder="Adresa"
                    value={eventData.address}
                    onChange={(e) =>
                        setEventData({ ...eventData, address: e.target.value })
                    }
                />
            </Form.Item>

            <Form.Item label="Qyteti">
                <Input
                    placeholder="Qyteti"
                    value={eventData.city}
                    onChange={(e) =>
                        setEventData({ ...eventData, city: e.target.value })
                    }
                />
            </Form.Item>

            <Form.Item label="Kodi Postar">
                <Input
                    placeholder="Kodi Postar"
                    value={eventData.pincode}
                    onChange={(e) =>
                        setEventData({ ...eventData, pincode: e.target.value })
                    }
                />
            </Form.Item>

            <Form.Item label="Data">
                <Input
                    placeholder="Data"
                    value={eventData.date}
                    type="date"
                    onChange={(e) =>
                        setEventData({ ...eventData, date: e.target.value })
                    }
                />
            </Form.Item>

            <Form.Item label="Koha">
                <Input
                    placeholder="Koha"
                    value={eventData.time}
                    type="time"
                    onChange={(e) =>
                        setEventData({ ...eventData, time: e.target.value })
                    }
                />
            </Form.Item>

            <div className="flex justify-between col-span-3">
                <Button onClick={() => setCurrentStep(currentStep - 1)}>Back</Button>
                <Button
                    type="primary"
                    onClick={() => setCurrentStep(currentStep) + 1}
                    disabled={
                        !eventData.address ||
                        !eventData.city ||
                        !eventData.pincode ||
                        !eventData.date ||
                        !eventData.time
                    }
                >
                    Next
                </Button>
            </div>
        </div >
    )
}

export default LocationAndDate
