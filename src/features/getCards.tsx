import clientToken from "./hsToken";

export const allCards = async () => {
  try {
    const access_token = await clientToken();
    console.log(access_token);
    const response = await fetch(
      "https://eu.api.blizzard.com/hearthstone/cards?locale=en_US&rarity=legendary&pageSize=850",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    return response.json();
  } catch (error) {
    throw new Error(`An error occured ${(error as Error).message}`);
  }
};
