import useSWR from "swr";
import type { LootRealm } from "../contracts/types";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import useLootRealmContract from "./useLootRealmContract";

function getLootRealmInfo(contract: LootRealm) {
  return async (_: string) => {

    // modify this to fetch ownerOf for all of them
    const ownerOf = await contract.ownerOf(1);

    return ownerOf;
  };
}

export default function useLootRealmInfo(
  suspense = false
) {
  const contract = useLootRealmContract();

  const shouldFetch = !!contract;

  const result = useSWR(
    shouldFetch ? ["LootRealmInfo"] : null,
    getLootRealmInfo(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
