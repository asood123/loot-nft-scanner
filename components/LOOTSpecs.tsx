import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useLootSpecs from "../hooks/useLootSpecs";
import { parseBalance } from "../util";

type Props = {
  id: number;
};

const LootSpecs = ({ id }: Props) => {
  const { account } = useWeb3React<Web3Provider>();
  const { data } = useLootSpecs(id);

  return <p>{data ? data : 0}</p>;
};

export default LootSpecs;
