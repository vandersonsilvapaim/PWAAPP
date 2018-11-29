import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {
  }

  getConfig() {
    return this.http.get<Config>('assets/config.json');
  }
}

export interface Config {
  url: string;
  textfile: string;
}
