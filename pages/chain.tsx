import { Chain, ChainId } from "@thirdweb-dev/chains";

const Bitrock: Chain = {
  chain: "bitrock",
  name: "bitrock",
  chainId: 7171,
  rpc: ["https://connect.bit-rock.io"], // Changed to an array
  nativeCurrency: {
    name: "BROCK",
    symbol: "BROCK",
    decimals: 18,
  },
  shortName: "custom",
  testnet: false,
  slug: "bitrock",
};

export { Bitrock, ChainId };
