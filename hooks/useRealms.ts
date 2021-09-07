import realmsABI from "../contracts/ERC20.json";
import { Realms } from "../contracts/types";
import useContract from '../hooks/useContract'

const RealmsAddress: string = '0x7AFe30cB3E53dba6801aa0EA647A0EcEA7cBe18d'

export default function useRealms() {
  return useContract<Realms>(RealmsAddress, realmsABI);
}