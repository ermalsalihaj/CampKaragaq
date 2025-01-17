export interface UserType{
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    createdAt: string;
}

export interface EventType{
   _id: string;
   name: string;
   description :string;
   organizer: string;
   guests: string[];
   address: string;
   city: string;
   pincode: string;
   date: string;
   time: string;
   media: string[];
   ticketTypes: {
            name: string;
            price: number;
            limit: number;
   }[]
}