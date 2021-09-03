import useSWR from "swr";
import type { LOOT } from "../contracts/types";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import useLootContract from "./useLootContract";

function getLootSpecs(contract: LOOT, id: number) {
  return async (_: string, id: number) => {
    const handStat = await contract.getHand(id);

    return handStat;
  };
}

export default function useLootSpecs(
  id: number,
  suspense = false
) {
  const contract = useLootContract();

  const shouldFetch =
    typeof id === "number" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["LootSpecs", id] : null,
    getLootSpecs(contract, id),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
