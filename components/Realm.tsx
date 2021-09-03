import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useLootRealmInfo from "../hooks/useLootRealmInfo";

type Props = {
  id: number;
};

const Realm = ({ id }: Props) => {
  const { data } = useLootRealmInfo();

  return <p>{data ? data : 0}</p>;
};

export default Realm;
