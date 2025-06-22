import { useCardTags } from "./useCardTags";

export function TagList() {
  const { card, isLoading } = useCardTags();

  return <div>{!isLoading ? card.name : ""}</div>;
}
