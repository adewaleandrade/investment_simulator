import { format } from "path";
import { WalletDomain } from "./wallet-domain";
import { ResourceDomain } from "./resource-domain";


export enum OrderType {
    BUY_ORDER = 'buy_order',
    SELL_ORDER = 'sell_order',
}

export default class OrderDomain {
    id: Uuid;
    type: OrderType;
    wallet: WalletDomain;
    resource: ResourceDomain;
    ammount: number;
    createdAt: number;
    unitPrice: number;

    constructor(id: Uuid, type: OrderType, wallet: WalletDomain, resource: ResourceDomain, amount: number, createdAt: number, unitPrice: number) {
        this.id = id;
        this.type = type;
        this.wallet = wallet;
        this.resource = resource;
        this.ammount = amount;
        this.createdAt = createdAt;
        this.unitPrice = unitPrice;
    }

    /**
     * Create an order from a json object or json string
     * 
     * @param json 
     */
    static fromJSON(json: Object|string): OrderDomain {
        if (typeof json === 'string') {
          return OrderDomain.fromJSON(JSON.parse(json));
        }
    
        const order = Object.create(OrderDomain.prototype);
        Object.assign(order, json);
        
        order.wallet = WalletDomain.fromJSON(order.wallet);
        order.resource = ResourceDomain.fromJSON(order.resource);

        return order;
    }

}