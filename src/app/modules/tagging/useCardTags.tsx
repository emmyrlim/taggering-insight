import { useQuery } from "@tanstack/react-query";

export function useCardTags() {
  const { data: card, isLoading } = useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const response = await fetch("https://api.scryfall.com/cards/random");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      return data;
    },
  });

  return { card, isLoading };
}
