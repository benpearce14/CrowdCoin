import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x9246b3EE819F0ae5E702A3a2D0b5342432897D4a"
);

export default instance;
