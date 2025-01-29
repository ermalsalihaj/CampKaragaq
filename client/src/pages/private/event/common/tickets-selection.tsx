import { useState } from "react";
import { EventType } from "../../../../interfaces"
import { Button, Input } from "antd";


function TicketsSelection({ eventData }: { eventData: EventType }) {
  const [selectedTicketType, setSelectedTicketType] = useState<string>('');
  const [maxCount, setMaxCount] = useState<number>(1);
  const [selectedTicketsCount, setSelectedTicketsCount] = useState<number>(1);
  const ticketTypes = eventData.ticketTypes;

  const selectedTicketPrice = ticketTypes.find(
    (ticketType) => ticketType.name === selectedTicketType
  )?.price;

  const totalAmount = (selectedTicketPrice || 0) * selectedTicketsCount;

  return (
    <div>
      <div>
        <h1 className="text-sm text-info font-bold">
          Zgjidh llojin e biletës
        </h1>

        <div className="flex flex-wrap gap-5 mt-3">
          {ticketTypes.map((ticketType, index) => (
            <div
              key={index}
              className={`p-2 border border-gray-200 bg-gray-100 lg:w-96 w-full cursor-pointer 
                ${selectedTicketType === ticketType.name
                  ? 'border-primary border-solid border-2'
                  : ''
                }
                `}
              onClick={() => {
                setSelectedTicketType(ticketType.name)
                setMaxCount(ticketType.limit)
              }}
            >
              <h1 className="text-sm text-gray-500 uppercase">{ticketType.name}</h1>
              <div className="flex justify-between">
                <h1 className="text-sm font-bold">$ {ticketType.price}</h1>
                <h1 className="text-xs ">{ticketType.limit} të mbetura</h1>
              </div>
            </div>
          ))}
        </div>

        <h1 className="text-sm text-info font-bold mt-10">
          Zgjidh llojin e biletës
        </h1>

        <Input
          type="number"
          value={selectedTicketsCount}
          className="w-96 mt-3"
          onChange={(e) => setSelectedTicketsCount(parseInt(e.target.value))}
          min={1}
          max={maxCount}
        />


        <div className="mt-7 flex justify-between bg-gray-200 border border-solid p-3 items-center">
          <h1
            className="text-xl text-gray-500 font-bold"
          >Shuma totale : $ {totalAmount}</h1>
          <Button type="primary"> Rezervo tani </Button>
        </div>
      </div>
    </div>
  )
}

export default TicketsSelection