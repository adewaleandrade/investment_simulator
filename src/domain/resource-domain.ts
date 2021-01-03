export class ResourceDomain {
  symbol: string;
  name: string;
  type: string;
  region: string;
  marketOpen: string;
  marketClose: string;
  timezone: string;
  currency: string;

  /**
   * @see https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo
   * @param symbol 
   * @param name 
   * @param type 
   * @param region 
   * @param marketOpen 
   * @param marketClose 
   * @param timezone 
   * @param currency 
   */
  constructor(symbol: string, name: string, type: string, region: string, marketOpen: string, marketClose: string, timezone: string, currency: string) {
    this.symbol = symbol;
    this.name = name;
    this.type = type;
    this.region = region;
    this.marketOpen = marketOpen;
    this.marketClose = marketClose;
    this.timezone = timezone;
    this.currency = currency;
  }

  /**
   * Create a resource from a json object or json string
   * 
   * @param json 
   */
  static fromJSON(json: Object|string): ResourceDomain {
    if (typeof json === 'string') {
      return ResourceDomain.fromJSON(JSON.parse(json));
    }

    const resource = Object.create(ResourceDomain.prototype);
    Object.assign(resource, json);
  
    return resource;
  }
}