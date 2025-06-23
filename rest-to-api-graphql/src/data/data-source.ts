import { RESTDataSource } from "apollo-datasource-rest";

export class F1 extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.openf1.org /v1/";
  }

  async getDrivers(season: string) {
    return this.get(`${season}/drivers.json`);
  }
    
    async getLaps(season: string) {
    return this.get(`${season}/laps.json`);
  }

  async getIntervals(season: string) {
    return this.get(`${season}/intervals.json`);
  }

  async getlocation(season: string) {
    return this.get(`${season}/location.json`);
  }
    
}