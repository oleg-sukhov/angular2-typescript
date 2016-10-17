import { Injectable, Optional } from '@angular/core';

export class UserServiceConfig {
  userName = 'Philip Marlowe';
}

@Injectable()
export class UserService {
    userName = 'Vasia Pupkin';
    constructor(@Optional() config: UserServiceConfig) {
      if (config) { this.userName = config.userName; }
    }
}