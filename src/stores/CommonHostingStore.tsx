import { observable } from 'mobx';

interface HostConfig {
  domainToPath: { [key: string]: string }
}

export default class CommonHostingStore {

  private contract: any;
  @observable configs: {
    [address: string]: HostConfig
  } = {};

  constructor() {
    let ABI: any;
    try {
      ABI = require('../../CommonHosting.abi.json');
    } catch (err) {
      console.log('Error loading contract ABI, ensure that it\'s present');
    }
    web3.eth.net.getId().then((id: number) => {
      this.contract = new web3.eth.Contract(ABI, this.addressForNetworkId(id));
    });
  }

  addressForNetworkId(id: number) {
    return '';
  }
}
