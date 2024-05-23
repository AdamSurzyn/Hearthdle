import { CardCommonAttributes } from "../types/searchTypes";
import {
  CardMetaData,
  StringObj,
  CardWithNames,
  CardsComparison,
} from "../types/utils";

export const pickRandomCard = (cardsCollection: CardCommonAttributes[]) => {
  if (cardsCollection) {
    const CardsCollectionLength = cardsCollection.length;
    const randomCardsCollectionIndex = Math.floor(
      Math.random() * CardsCollectionLength
    );
    return cardsCollection[randomCardsCollectionIndex];
  }
  return null;
};

export const replaceIdWithName = (
  card: CardCommonAttributes | null
): CardWithNames | void => {
  const cardTypes: CardMetaData = {
    3: "Hero",
    4: "Minion",
    5: "Spell",
    7: "Weapon",
    10: "HeroPower",
    39: "Location",
    40: "Reward",
  };

  const cardSets: CardMetaData = {
    1897: "Whizbang's Workshop",
    1941: "Event",
    1892: "Showdown in the Badlands",
    1858: "TITANS",
    1809: "Festival of Legends",
    1898: "Caverns of Time",
    1776: "March of the Lich King",
    1869: "Path of Arthas",
    1691: "Murder at Castle Nathria",
    1646: "Classic Cards",
    1658: "Voyage to the Sunken City",
    1626: "Fractured in Alterac Valley",
    1578: "United in Stormwind",
    1525: "Forged in the Barrens",
    1466: "Madness at the Darkmoon Faire",
    1443: "Scholomance Academy",
    1414: "Ashes of Outland",
    1463: "Demon Hunter Initiate",
    1403: "Galakrond’s Awakening",
    1347: "Descent of Dragons",
    1158: "Saviors of Uldum",
    1130: "Rise of Shadows",
    1129: "Rastakhan’s Rumble",
    1127: "The Boomsday Project",
    1125: "The Witchwood",
    1004: "Kobolds and Catacombs",
    1001: "Knights of the Frozen Throne",
    27: "Journey to Un’Goro",
    25: "Mean Streets of Gadgetzan",
    23: "One Night in Karazhan",
    21: "Whispers of the Old Gods",
    20: "League of Explorers",
    15: "The Grand Tournament",
    14: "Blackrock Mountain",
    13: "Goblins vs Gnomes",
    12: "Curse of Naxxramas",
    1635: "Legacy",
    1637: "Core",
  };

  const cardClasses: CardMetaData = {
    1: "Death Knight",
    14: "Demon Hunter",
    2: "Druid",
    3: "Hunter",
    4: "Mage",
    5: "Paladin",
    6: "Priest",
    7: "Rogue",
    8: "Shaman",
    9: "Warlock",
    10: "Warrior",
    12: "Neutral",
  };

  //Change type
  // ! iterateAndSwapIdToName(cardTypes, card, "cardTypeId", "cardType");

  //Change class
  // ! iterateAndSwapIdToName(cardClasses, card, "classId", "class");

  //Change set
  // ! iterateAndSwapIdToName(cardSets, card, "cardSetId", "cardSet");
  //TODO make iterateAndSwapIdToName work!

  if (!card) {
    return;
  }
  for (const [id, name] of Object.entries(cardSets)) {
    if (card.cardSetId === parseInt(id)) {
      card.cardSet = name;
    }
  }
  for (const [id, name] of Object.entries(cardClasses)) {
    if (card.classId === parseInt(id)) {
      card.class = name;
    }
  }
  for (const [id, name] of Object.entries(cardTypes)) {
    if (card.cardTypeId === parseInt(id)) {
      card.cardType = name;
    }
  }
  const newCard: CardWithNames = {
    manaCost: card.manaCost,
    className: card.class,
    cardSet: card.cardSet,
    cardType: card.cardType,
  };
  return newCard;
};

// const iterateAndSwapIdToName = (
//   obj: StringObj,
//   card: CardCommonAttributes | null,
//   propWithId: keyof CardCommonAttributes,
//   propWithName: CardCommonAttributes
// ) => {
//   if (!card) {
//     return;
//   }

//   for (const [id, name] of Object.entries(obj)) {
//     if (card[propWithId] === parseInt(id)) {
//       card[propWithName] = name;
//!       card[propWithName] is of type never!
//     }
//   }
// };

export const compareCardAttributes = (
  correctCard: CardWithNames | null,
  chosenCard: CardWithNames | null
) => {
  let cardsComparisonOutcome: CardsComparison = {
    class: false,
    type: false,
    manaCost: "lower",
    set: false,
  };

  if (!correctCard || !chosenCard) {
    return;
  }

  const comparisonMapping = {
    className: "class",
    cardType: "type",
    manaCost: "manaCost",
    cardSet: "set",
  };

  for (const [cardProp, outcomeProp] of Object.entries(comparisonMapping)) {
    const correctValue = correctCard[cardProp as keyof CardWithNames];
    const chosenValue = chosenCard[cardProp as keyof CardWithNames];

    if (cardProp === "manaCost") {
      if (correctValue !== undefined && chosenValue !== undefined) {
        if (correctValue === chosenValue) {
          cardsComparisonOutcome.manaCost = true;
        } else if (correctValue < chosenValue) {
          cardsComparisonOutcome.manaCost = "lower";
        } else {
          cardsComparisonOutcome.manaCost = "higher";
        }
      }
    } else {
      if (correctValue && chosenValue && correctValue === chosenValue) {
        cardsComparisonOutcome[outcomeProp as keyof CardsComparison] = true;
      }
    }
  }

  return cardsComparisonOutcome;
};
