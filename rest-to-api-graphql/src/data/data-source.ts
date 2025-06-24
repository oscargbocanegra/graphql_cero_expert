import { RESTDataSource } from "apollo-datasource-rest";

export class F1 extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.openf1.org/v1/";
  }

  async getDrivers(session_key?: string) {
    const params = session_key ? `?session_key=${session_key}` : '';
    return this.get(`drivers${params}`);
  }
    
  async getLaps(session_key?: string) {
    const params = session_key ? `?session_key=${session_key}` : '';
    return this.get(`laps${params}`);
  }

  async getIntervals(session_key?: string) {
    const params = session_key ? `?session_key=${session_key}` : '';
    return this.get(`intervals${params}`);
  }

  async getLocation(session_key?: string) {
    const params = session_key ? `?session_key=${session_key}` : '';
    return this.get(`location${params}`);
  }

  async getSessions(year?: string) {
    const params = year ? `?year=${year}` : '';
    return this.get(`sessions${params}`);
  }
    
}