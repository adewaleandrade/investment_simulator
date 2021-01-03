export class WalletDomain {
    name: string;
    description: string;
    userId: string;
    orders: any[];

    constructor(name: string, description: string, userId: string, orders: any[]) {
        this.name = name;
        this.description = description;
        this.userId = userId;
        this.orders = orders;
    }

    /**
     * Create a wallet from a json object or json string
     * 
     * @param json 
     */
    static fromJSON(json: Object|string): WalletDomain {
        if (typeof json === 'string') {
          return WalletDomain.fromJSON(JSON.parse(json));
        }
    
        const wallet = Object.create(WalletDomain.prototype);
        Object.assign(wallet, json);
    
        return wallet;
    }
}