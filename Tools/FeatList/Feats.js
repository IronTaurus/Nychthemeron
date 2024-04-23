console.log("Feats.js loaded.");
export function getFeats(types, requirement) {
  console.log("chosen attribute is: " + types);
  const Attributes = [
    {
      //AGI Quick Reactions I
      Title: "Quick Reactions I",
      Id: "QckReact1",
      Types: ["Agility"],
      Description: "Your base initiative is increased by 2.",
      Requirements: [{ type: "Agility", value: 1, color: "#1bf740" }],
      Cost: "5",
    },
    {
      //AGI Quick Reactions II
      Title: "Quick Reactions II",
      Id: "QckReact2",
      Types: ["Agility"],
      Description: "Your base initiative is increased by 2.",
      Requirements: [{ type: "Agility", value: 3, color: "#1bf740" }],
      Cost: "5",
    },
    {
      //AGI Quick Reactions III
      Title: "Quick Reactions III",
      Id: "QckReact3",
      Types: ["Agility"],
      Description: "Your base initiative is increased by 2.",
      Requirements: [{ type: "Agility", value: 5, color: "#1bf740" }],
      Cost: "5",
    },
    //AGI High Alert
    {
      Title: "High Alert",
      Id: "HighAlert",
      Types: ["Agility"],
      Description:
        "For the first round only, your initative is increased by 6. (Usable: once/combat)",
      Requirements: [{ type: "Agility", value: 2, color: "#1bf740" }],
      Cost: "10",
    },
    //AGI Light-footed I
    {
      Title: "Light-footed I",
      Id: "LightFoot1",
      Types: ["Agility"],
      Description:
        "If you do not have an Eclipse card in your deck add one. \n The maximum number of Eclipses in your deck is 1. \n Eclipses are always considered as a Success during Acrobatic checks.",
      Requirements: [{ type: "Agility", value: 1, color: "#1bf740" }],
      Cost: "5",
    },
    //AGI Light-footed II
    {
      Title: "Light-footed II",
      Id: "LightFoot2",
      Types: ["Agility"],
      Description:
        "Draw an additional card during a Acrobatic check. (Usable: once/action)",
      Requirements: [{ type: "Agility", value: 1, color: "#1bf740" }],
      Cost: "10",
    },
    //AGI Light-footed III
    {
      Title: "Light-footed III",
      Id: "LightFoot3",
      Types: ["Agility"],
      Description:
        "Draw an additional card during a Acrobatic check. (Usable: once/action)",
      Requirements: [{ type: "Agility", value: 1, color: "#1bf740" }],
      Cost: "15",
    },
    //AGI Nimble Feet
    {
      Title: "Nimble Feet",
      Id: "NimbleFeet",
      Types: ["Agility"],
      Description:
        "When using a movement action you may ignore and move over minor obstacles and terrain.",
      Requirements: [{ type: "Agility", value: 2, color: "#1bf740" }],
      Cost: "10",
    },
    //AGI Crimson Blood
    {
      Title: "Crimson Blood",
      Id: "CrimsonBlood",
      Types: ["Agility"],
      Description:
        "The maximum number of Eclipses are increased by 1. \nAdd one Eclipse card to your Action deck.",
      Requirements: [{ type: "Agility", value: 4, color: "#1bf740" }],
      Cost: "15",
    },
    {
      //BOD Orcish Strength I
      Title: "Orcish Strength I",
      Id: "OrcStr1",
      Types: ["Body"],
      Description:
        "Add an Eclipse Card to your Action Deck. (The maximum number of Eclipses in your deck is 1) In addition to its other effects, Eclipses are always considered as a Success during a Strength check.",
      Requirements: [{ type: "Body", value: 1, color: "#F75A1B" }],
      Cost: "5",
    },
    {
      //BOD Orcish Strength II
      Title: "Orcish Strength II",
      Id: "OrcStr2",
      Types: ["Body"],
      Description:
        "Draw an additional card during a Strength check. (Usable: once/action)",
      Requirements: [{ type: "Body", value: 2, color: "#F75A1B" }],
      Cost: "10",
    },
    {
      //BOD Orcish Strength III
      Title: "Orcish Strength III",
      Id: "OrcStr3",
      Types: ["Body"],
      Description:
        "In addition to its other effects, Eclipses are considered a Critical Success during Strength Checks. You may draw an additional card during a Strength check then remove 1 card of your choice. (Usable once/action)",
      Requirements: [{ type: "Body", value: 4, color: "#F75A1B" }],
      Cost: "15",
    },
    {
      //BOD Steel Body I
      Title: "Steel Body I",
      Id: "SteelBdy1",
      Types: ["Body"],
      Description:
        "Whenever you are hit by a physical attack you may ignore any negative conditions that would affect you by that attack. (Usable once/combat)",
      Requirements: [{ type: "Body", value: 2, color: "#F75A1B" }],
      Cost: "10",
    },
    {
      //BOD Steel Body II
      Title: "Steel Body II",
      Id: "SteelBdy2",
      Types: ["Body"],
      Description:
        "In addition to its other effects, Steel Body now also halves the damage taken by the attack rounded down.",
      Requirements: [{ type: "Body", value: 3, color: "#F75A1B" }],
      Cost: "10",
    },
    {
      //BOD Resilient I
      Title: "Resilient I",
      Id: "Resilient1",
      Types: ["Body"],
      Description: "Increase your maximum health by 10.",
      Requirements: [{ type: "Body", value: 1, color: "#F75A1B" }],
      Cost: "5",
    },
    {
      //BOD Resilient II
      Title: "Resilient II",
      Id: "Resilient2",
      Types: ["Body"],
      Description: "Increase your maximum health by 15.",
      Requirements: [{ type: "Body", value: 3, color: "#F75A1B" }],
      Cost: "10",
    },
    {
      //BOD Resilient III
      Title: "Resilient III",
      Id: "Resilient3",
      Types: ["Body"],
      Description: "Increase your maximum health by 15.",
      Requirements: [{ type: "Body", value: 5, color: "#F75A1B" }],
      Cost: "15",
    },
    {
      //BOD Resilient IV
      Title: "Resilient IV",
      Id: "Resilient4",
      Types: ["Body"],
      Description:
        "Increase your maximum health by 2 for each point in Body you have.",
      Requirements: [{ type: "Body", value: 6, color: "#F75A1B" }],
      Cost: "15",
    },
    {
      //BOD NaturalArmour
      Title: "Natural Armour",
      Id: "NaturalArm",
      Types: ["Body"],
      Description:
        "While you don't have any Armour equipped you have Armour 2.",
      Requirements: [{ type: "Body", value: 2, color: "#F75A1B" }],
      Cost: "10",
    },
    //MND Insight I
    {
      Title: "Insight I",
      Id: "Insight1",
      Types: ["Mind"],
      Description:
        "Add an Eclipse Card to your Action Deck. (The maximum number of Eclipses in your deck is 1) In addition to its other effects, Eclipses are always considered as a Success during a  check.",
      Requirements: [{ type: "Mind", value: 1, color: "#5db8d9" }],
      Cost: "5",
    },
    //MND Insight II
    {
      Title: "Insight II",
      Id: "Insight2",
      Types: ["Mind"],
      Description:
        "Draw an additional card when you read a person. (Usable: once/action)",
      Requirements: [{ type: "Mind", value: 2, color: "#5db8d9" }],
      Cost: "10",
    },
    //MND Insight III
    {
      Title: "Insight III",
      Id: "Insight3",
      Types: ["Mind"],
      Description:
        "In addition to its other effects, Eclipses are considered a Critical Success while you read a person. You may draw an additional card when you read a person then remove 1 card of your choice. (Usable once/action)",
      Requirements: [{ type: "Mind", value: 4, color: "#5db8d9" }],
      Cost: "15",
    },
    {
      //MND StrongWill I
      Title: "Strong Will I",
      Id: "StrongWill1",
      Types: ["Mind"],
      Description:
        "Whenever you are attacked by a spell you may ignore any negative conditions that would affect you by that spell.(Usable: once/combat",
      Requirements: [{ type: "Mind", value: 2, color: "#5db8d9" }],
      Cost: "10",
    },
    {
      //MND StrongWill II
      Title: "Strong Will II",
      Id: "StrongWill2",
      Types: ["Mind"],
      Description:
        "In addition to its other effects Strong Will now also halves the damage you take by the attack rounded down.",
      Requirements: [{ type: "Mind", value: 4, color: "#5db8d9" }],
      Cost: "10",
    },
    {
      //MND KnwHistory I
      Title: "Knowledge: History I",
      Id: "KnwHistory1",
      Types: ["Mind"],
      Description:
        "If you do not have an Eclipse card in your deck add one. \n The maximum number of Eclipses in your deck is 1. \n Eclipses are always considered as a Success during Know History checks.",
      Requirements: [{ type: "Mind", value: 1, color: "#5db8d9" }],
      Cost: "5",
    },
    {
      //MND KnwHistory II
      Title: "Knowledge: History II",
      Id: "KnwHistory2",
      Types: ["Mind"],
      Description:
        "You may draw an additional card during Know History checks. (Usable: once/action)",
      Requirements: [{ type: "Mind", value: 2, color: "#5db8d9" }],
      Cost: "10",
    },
    {
      //MND KnwHistory III
      Title: "Knowledge: History III",
      Id: "KnwHistory3",
      Types: ["Mind"],
      Description:
        "In addition to its other effects, Eclipses are considered a Critical Success during Know History Checks. \n You may draw 1 additional card during Know History checks then remove 1 card of your choice. (Usable: once/action)",
      Requirements: [{ type: "Mind", value: 3, color: "#5db8d9" }],
      Cost: "15",
    },
    {
      //MSC KnwReligion I
      Title: "Knowledge: Religion I",
      Id: "KnwReligion1",
      Types: ["Mystic"],
      Description:
        "If you do not have an Eclipse card in your deck add one. \n The maximum number of Eclipses in your deck is 1. \n Eclipses are always considered as a Success during Religion checks.",
      Requirements: [{ type: "Mystic", value: 1, color: "#d44ecb" }],
      Cost: "5",
    },
    {
      //MSC KnwReligion II
      Title: "Knowledge: Religion II",
      Id: "KnwReligion2",
      Types: ["Mystic"],
      Description:
        "You may draw an additional card during Know Religion checks. (Usable: once/action)",
      Requirements: [{ type: "Mystic", value: 1, color: "#d44ecb" }],
      Cost: "5",
    },
    {
      //MSC Trained Spirit I
      Title: "Trained Spirit I",
      Id: "TrainedSpirit1",
      Types: ["Mystic"],
      Description: "Your max Spirit is increased by 15.",
      Requirements: [{ type: "Mystic", value: 1, color: "#d44ecb" }],
      Cost: "5",
    },
    {
      //MSC Trained Spirit II
      Title: "Trained Spirit II",
      Id: "TrainedSpirit2",
      Types: ["Mystic"],
      Description: "Your max Spirit is increased by 20.",
      Requirements: [{ type: "Mystic", value: 3, color: "#d44ecb" }],
      Cost: "10",
    },
    //MSC Trained Spirit III
    {
      Title: "Trained Spirit III",
      Id: "TrainedSpirit3",
      Types: ["Mystic"],
      Description: "Your max Spirit is increased by 25.",
      Requirements: [{ type: "Mystic", value: 5, color: "#d44ecb" }],
      Cost: "15",
    },
    //MSC Crimson Spirit
    {
      Title: "Crimson Spirit",
      Id: "CrimsonSpirit",
      Types: ["Mystic"],
      Description:
        "The maximum number of Eclipses are increased by 1. \nAdd one Eclipse card to your Action deck.",
      Requirements: [{ type: "Mystic", value: 4, color: "#d44ecb" }],
      Cost: "15",
    },
    {
      //PRS Performer I
      Title: "Performer I",
      Id: "Performer1",
      Types: ["Presence"],
      Description:
        "If you do not have an Eclipse card in your deck add one. \nThe maximum number of Eclipses in your deck is 1. \nEclipses are always considered as a Success during Performance checks.",
      Requirements: [{ type: "Presence", value: 1, color: "#ebff65" }],
      Cost: "5",
    },
    {
      //PRS Performer II
      Title: "Performer II",
      Id: "Performer2",
      Types: ["Presence"],
      Description:
        "You may draw an additional card in the act of a Performance. (Usable: once/action)",
      Requirements: [{ type: "Presence", value: 3, color: "#ebff65" }],
      Cost: "10",
    },
    {
      //PRS Performer III
      Title: "Performer III",
      Id: "Performer3",
      Types: ["Presence"],
      Description:
        "In addition to its other effects, Eclipses are considered a Critical Success during Performance Checks.\nYou may draw 1 additional card in the act of Performance then remove 1 card of your choice.(Usable: once/action)",
      Requirements: [{ type: "Presence", value: 5, color: "#ebff65" }],
      Cost: "15",
    },
    //PRS-MND Talk With Animals
    {
      Title: "Talk With Animals",
      Id: "TalkWithAnimals",
      Types: ["Presence", "Mind"],
      Description:
        "You are able to understand and communicate with animals of the chosen type.",
      Requirements: [
        { type: "Presence", value: 1, color: "#ebff65" },
        { type: "Mind", value: 1, color: "#5db8d9" },
      ],
      Cost: "10",
    },
    //PRS-MSC Sense: Soul I
    {
      Title: "Sense: Soul I",
      Id: "SenseSoul1",
      Types: ["Presence", "Mystic"],
      Description:
        "By concentrating you are able to sense if there are any lingering souls in the vicinity of you equal to 10 x Presence in meters.  A 10 minutes ritual enables you to see the souls for up to 5 x Mystic in minutes or for as long as you uphold the ritual but during this effect you are also seen by all souls or spirits.",
      Requirements: [
        { type: "Presence", value: 2, color: "#ebff65" },
        { type: "Mystic", value: 2, color: "#d44ecb" },
      ],
      Cost: "10",
    },
    //PRS-MSC Sense: Soul II
    {
      Title: "Sense: Soul II",
      Id: "SenseSoul2",
      Types: ["Presence", "Mystic"],
      Description:
        "In addition to its other effects the ritual of Sense: Soul enables you to also communicate with the lingering souls. \nThe range of which you can sense souls is increased to 20 x Presence meters and you are able to sense if the souls are hostile or not at half of that distance",
      Requirements: [
        { type: "Presence", value: 3, color: "#ebff65" },
        { type: "Mystic", value: 3, color: "#d44ecb" },
      ],
      Cost: "10",
    },
    //PRS-MSC Sense: Soul III
    {
      Title: "Sense: Soul III",
      Id: "SenseSoul3",
      Types: ["Presence", "Mystic"],
      Description:
        "In addition to its other effects the ritual of Sense: Soul enables you to physically interact with lingering souls or spirits and you can also see the souls in the living but not interact with. \nThe duration of the ritual effect is increased to 10 x Mystic in minutes. \nWhile under the effect of Sense: Soul you may at any time choose to become invisible to any spirit or soul.",
      Requirements: [
        { type: "Presence", value: 4, color: "#ebff65" },
        { type: "Mystic", value: 4, color: "#d44ecb" },
      ],
      Cost: "15",
    },
    //PRS-MSC Sense: Divine I
    {
      Title: "Sense: Divine I",
      Id: "SenseDivine1",
      Types: ["Presence", "Mystic"],
      Description:
        "You are able to sense the presence of a divine entity. You may distinguish Arcane magic from Divine magic.",
      Requirements: [
        { type: "Presence", value: 2, color: "#ebff65" },
        { type: "Mystic", value: 2, color: "#d44ecb" },
      ],
      Cost: "5",
    },
    //PRS-MSC Sense: Divine II
    {
      Title: "Sense: Divine II",
      Id: "SenseDivine2",
      Types: ["Presence", "Mystic"],
      Description:
        "In addition to its other effects Sense: Divine now also allows you to distinguish what portfolio the divine presence or magic belongs to. \nBy making a 10 min ritual you are able to hide yourself and an area around you from detection or scrying magic of a divine nature, the area is equal to your Presence x 2 in diameters. The effect of the ritual last for your Mystic x 10 in minutes or for as long as you uphold the ritual.",
      Requirements: [
        { type: "Presence", value: 3, color: "#ebff65" },
        { type: "Mystic", value: 3, color: "#d44ecb" },
      ],
      Cost: "10",
    },
    //PRS-MSC Sense: Divine III
    {
      Title: "Sense: Divine III",
      Id: "SenseDivine3",
      Types: ["Presence", "Mystic"],
      Description:
        "In addition to its other effects Sense: Divine now lets you distinguish exactly which divine entity of the presence or magic. \nThe effect of the ritual's multiplier is increased to 5 for Mystic and 20 for Presence.",
      Requirements: [
        { type: "Presence", value: 4, color: "#ebff65" },
        { type: "Mystic", value: 4, color: "#d44ecb" },
      ],
      Cost: "15",
    },
    //BSC Weapon Expertise
    {
      Title: "Weapon Expertise",
      Id: "WeaponExp",
      Types: ["Basic"],
      Description:
        "Choose a Weapon type (for example: One-Handed Sword, Two-Handed Axe, Bow, etc). You are not affected by the penalty of the chosen weapon.",
      Requirements: [{ type: "Basic", value: 3, color: "#9b9b9b" }],
      Cost: "5",
    },
    //BSC Armour Expertise
    {
      Title: "Armour Expertise",
      Id: "ArmourExp",
      Types: ["Basic"],
      Description:
        "Choose a Armour type (for example: Heavy, Medium, Light). You are not affected by the penalty of the chosen armour. \nYou are able to do minor maintainance and repairs (with the required materials) to the chosen armour.",
      Requirements: [{ type: "Basic", value: 3, color: "#9b9b9b" }],
      Cost: "5",
    },
  ];

  // const sortByRequirement = Attributes.filter((req) =>
  //   req.Requirements.some((r) => requirement.some((cost) => r.value == cost))
  // );

  const sortByType = Attributes.filter((typ) =>
    typ.Types.some((t) => types.some((fType) => t === fType))
  );

  // const f = Attributes.filter((atr) =>
  //   atr.Types.some((type) => type === options)
  // );
  return sortByType;
}
