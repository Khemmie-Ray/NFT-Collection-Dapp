import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MetaNFTModule = buildModule("MetaNFTModule", (m) => {

  const metaNFT = m.contract("MetaNFT");

  return { metaNFT };
});

export default MetaNFTModule;
