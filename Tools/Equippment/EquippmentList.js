console.log("EquippmentList.js loaded.");
export function getWeapons(types){
    const weapons = [
        {Title: "Dagger", Class: "Light", Type: "Melee", Size: 1, BaseDamage: 1, DamageType: ["P", "S"], Range: 1, MovementModifier: 0, InitativeModifier: 2, ReloadPenalty: null, Penalties: ["-2 Initative"]},
        {Title: "Long Sword", Class: "Medium", Type: "Melee", Size: 1, BaseDamage: 2, DamageType: ["P", "S"], Range: 1, MovementModifier: 0, InitativeModifier: 0, ReloadPenalty: null, Penalties: ["-2 Initative"]},
        {Title: "Hand Axe", Class: "Medium", Type: "Melee", Size: 1, BaseDamage: 3, DamageType: ["S"], Range: 1, MovementModifier: 0, InitativeModifier: -2, ReloadPenalty: null, Penalties: ["-2 Initative"]},
        {Title: "Battle Axe", Class: "Heavy", Type: "Melee", Size: 2, BaseDamage: 4, DamageType: ["S"], Range: 1, MovementModifier: 0, InitativeModifier: -2, ReloadPenalty: null, Penalties: ["-3 Initative"]},
        {Title: "Spear", Class: "Medium", Type: "Melee", Size: 2, BaseDamage: 4, DamageType: ["P"], Range: 2, MovementModifier: 0, InitativeModifier: -1, ReloadPenalty: null, Penalties: ["-2 Initative"]},
        {Title: "Short Bow", Class: "Light", Type: "Ranged", Size: 2, BaseDamage: 1, DamageType: ["P"], Range: 14, MovementModifier: 0, InitativeModifier: 1, ReloadPenalty: -2, Penalties: ["-2 Range", "-1 Initative"]},
        {Title: "Long Bow", Class: "Medium", Type: "Ranged", Size: 2, BaseDamage: 2, DamageType: ["P"], Range: 16, MovementModifier: 0, InitativeModifier: 0, ReloadPenalty: -3, Penalties: ["-2 Range", "-1 Initative"]},
        {Title: "Hand Crossbow", Class: "Light", Type: "Ranged", Size: 1, BaseDamage: 2, DamageType: ["P"], Range: 12, MovementModifier: 0, InitativeModifier: -1, ReloadPenalty: -5, Penalties: ["-1 Range", "-2 Initative"]},
        {Title: "Heavy Crossbow", Class: "Heavy", Type: "Ranged", Size: 2, BaseDamage: 3, DamageType: ["P"], Range: 17, MovementModifier: -1, InitativeModifier: -1, ReloadPenalty: -5, Penalties: ["-1 Range", "-2 Initative"]},
        {Title: "Small Focus", Class: "Light", Type: "Magic", Size: 1, BaseDamage: 0, DamageType: ["M"], Range: 8, MovementModifier: 0, InitativeModifier: 0, ReloadPenalty: null, Penalties: ["-4 Initative"]},
        {Title: "Large Focus", Class: "Medium", Type: "Magic", Size: 2, BaseDamage: 0, DamageType: ["M"], Range: 12, MovementModifier: 0, InitativeModifier: -1, ReloadPenalty: null, Penalties: ["-4 Initative"]},
    ]
    const sortByType = weapons.filter((typ) =>
        typ.Type.some((t) => types.some((wType) => t === wType))
      );

      return sortByType;
}

export function getArmor(types){
    const armors = [
        {Title: "Cloth", Class: "Light", Type: "Full Cover", Armor: 0, Resistance: [], MovementModifier: 0, InitativeModifier: 0, Discomforts: [], Penalties: []},
        {Title: "Padded", Class: "Medium", Type: "Full Cover", Armor: 1, Resistance: [], MovementModifier: 0, InitativeModifier: -1, Discomforts: [], Penalties: ["-1 Initiative"]},
        {Title: "Partial Plate", Class: "Medium", Type: "Partial Cover", Armor: 2, Resistance: [], MovementModifier: 0, InitativeModifier: -1, Discomforts: ["Sleeping Discomfort"], Penalties: ["-2 Initiative"]},
        {Title: "Half Plate", Class: "Heavy", Type: "Half Cover", Armor: 4, Resistance: [], MovementModifier: 0, InitativeModifier: -3, Discomforts: ["Sleeping Discomfort"], SkillPenalty: ["-1 to Climbing checks"], Penalties: ["-2 Initiative", "-1 to stealth checks", "-1 to climbing checks"]},
        {Title: "Full Plate", Class: "Heavy", Type: "Full Cover", Armor: 6, Resistance: [], MovementModifier: 0, InitativeModifier: -4, Discomforts: ["Sleeping Discomfort", "Slow Equip"], SkillPenalty: ["-1 to Climbing checks", "-1 to Stealth checks"], Penalties: ["-3 Initiative", "-1 to stealth checks", "-1 to climbing checks"]},
    ]
    const sortByType = weapons.filter((typ) =>
        typ.Class.some((t) => types.some((aType) => t === aType))
      );

      return sortByType;
}

export function getDiscomforts(name){
    const discomforts = [
        {Title: "Sleeping Discomfort", Description: "Sleeping with this armor 2 nights in a row will give 'Poor Rest' (-1 to Body and Agility checks)"},
        {Title: "Slow Equip", Description: "It takes 10 minutes to put on this armor."},

    ]

    const sortByType = discoforts.filter((typ) =>
        typ.Title.some((t) => name.some((cType) => t === cType))
      );

      return sortByType;
}
