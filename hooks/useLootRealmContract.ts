import LootRealm_ABI from "../contracts/LOOT.json";
import type { LootRealm } from "../contracts/types";
import useContract from "./useContract";

const contractAddress = "0x7AFe30cB3E53dba6801aa0EA647A0EcEA7cBe18d";

export default function useTokenContract() {
  return useContract<LootRealm>(contractAddress, LootRealm_ABI);
}
