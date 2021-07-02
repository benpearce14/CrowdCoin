import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x3Ca2756b2dd7dF5630518f9B1c1fF3C5cE2eEc05"
);

export default instance;
