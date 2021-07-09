import { paginationOptions } from '../lib/utils';
import { F1 } from './data-source';

export class CircuitData extends F1 {
  constructor() {
    super();
  }

  //   async getSeasons() {
  //     return await this.get('seasons.json?limit=80', {
  //       cacheOptions: { ttl: 60 },
  //     });
  //   }

  async getCircuits(pageElements: number = -1, page: number = 1) {
    if (pageElements === -1) {
      return await this.get('circuits.json?limit=1000', {
        cacheOptions: { ttl: 60 },
      });
    } else {
      return await this.get(`circuits.json?${paginationOptions(pageElements, page)}`, {
        cacheOptions: { ttl: 60 },
      });
    }
  }

}
