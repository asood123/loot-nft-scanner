import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useLootSpecs from "../hooks/useLootSpecs";

type Props = {
  id: number;
};

const LootSpecs = ({ id }: Props) => {
  const { data } = useLootSpecs(id);

  return <p>{data ? data : 0}</p>;
};

export default LootSpecs;
