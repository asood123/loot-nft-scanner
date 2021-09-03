import LOOT_ABI from "../contracts/LOOT.json";
import type { LOOT } from "../contracts/types";
import useContract from "./useContract";

const contractAddress = "0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7";

export default function useTokenContract() {
  return useContract<LOOT>(contractAddress, LOOT_ABI);
}
