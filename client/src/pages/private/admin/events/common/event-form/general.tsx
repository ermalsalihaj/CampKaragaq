import { EventFormStepProps } from "."
import { Button, Form, Input, Tag } from "antd"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function General({ currentStep, setCurrentStep, eventData, setEventData }: EventFormStepProps) {

    const [guestInputValue, setGuestInputValue] = useState("");
    const navigate = useNavigate();

    const onGuestAdd = () => {
        const existingGuests = eventData.guests || [];
        const newGuests = guestInputValue.split(',').map((guest) => guest.trim());
        setEventData({ ...eventData, guests: [...existingGuests, ...newGuests] })
        setGuestInputValue('');
    }


    const onGuestRemove = (index: number) => {
        const existingGuests = eventData.guests || [];
        const newGuests = existingGuests.filter((guest: string, i: number) => i !== index);
        setEventData({ ...eventData, guests: newGuests })
    }


    return (
        <div className="flex flex-col gap-5">
            <Form.Item
                label="Emri i Eventit"
                required
            >
                <Input
                    placeholder="Emri i Eventit"
                    value={eventData.name}
                    onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
                />
            </Form.Item>

            <Form.Item
                label="Përshkrimi"
                required
            >
                <Input.TextArea
                    placeholder="Përshkrimi"
                    value={eventData.description}
                    onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
                />
            </Form.Item>

            <Form.Item
                label="Organizatori"
                required
            >
                <Input
                    placeholder="Organizatori"
                    value={eventData.organizer}
                    onChange={(e) => setEventData({ ...eventData, organizer: e.target.value })}
                />
            </Form.Item>

            <Form.Item label='Lista e të ftuarve (e ndarë me presje)' required >
                <div className="flex gap-5">
                    <Input
                        placeholder="Lista e të ftuarve (e ndarë me presje)"
                        value={guestInputValue}
                        onChange={(e) => setGuestInputValue(e.target.value)}
                    />

                    <Button onClick={onGuestAdd} disabled={!guestInputValue}>Add</Button>
                </div>
            </Form.Item>

            <div className="flex flex-wrap gap-5">
                {eventData.guests?.map((guest: string, index: number) => (
                    <Tag key={guest} closable onClose={() => onGuestRemove(index)}>
                        {guest}
                    </Tag>
                ))

                }
            </div>


            <div className="flex gap-10 justify-between">
                <Button
                    onClick={() => {
                        navigate("/admin/events")
                    }}
                >Back</Button>
                <Button
                    type="primary"
                    onClick={() => setCurrentStep(currentStep + 1)}
                    disabled={
                        !eventData.name || !eventData.description || !eventData.organizer
                    }
                >Next</Button>
            </div>
        </div>
    )
}

export default General
