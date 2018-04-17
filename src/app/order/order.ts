export interface IOrder {
    id: number;
    fname: string;
    lname: string;
    phone: string;
    email: string;
    productID: number;
    quantity: number;
    total: number;
    pickupNum: number;
}