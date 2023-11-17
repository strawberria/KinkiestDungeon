"use strict";
/**
 * @type {enemy[]}
 */
let KinkyDungeonEnemies = [
	// Prisoners
	{name: "PrisonerBandit", tags: KDMapInit(["prisoner", "bandit", "human", "peaceful", "noshop"]), faction: "Prisoner", immobile: true, lowpriority: true, evasion: -100, armor: 0, followRange: 100, AI: "wander", regen: 0.1,
		visionRadius: 0, maxhp: 12, minLevel:0, weight:-1000, movePoints: 1000, attackPoints: 0, attack: "", attackRange: 0, specialdialogue: "PrisonerBandit",
		Behavior: {noPlay: true},
		terrainTags: {}, floors:KDMapInit([])},
	{name: "FactoryDoll", bound: "FactoryDoll", playLine: "Gagged", tags: KDMapInit(["prisoner", "dollmakerconvert", "doll", "human", "minor", "peaceful", "noshop"]),
		faction: "Prisoner", lowpriority: true, evasion: -100, armor: 1, followRange: 100, AI: "wander", regen: 0.1,
		visionRadius: 0, maxhp: 12, minLevel:0, weight:-10, movePoints: 4, attackPoints: 0, attack: "", attackRange: 0, events: [
			{trigger: "tick", type: "secretToy"},
		],
		Behavior: {noPlay: true},
		terrainTags: {"bellowsDoll": 20}, allFloors: true},
	{name: "DollmakerTarget", bound: "FactoryDoll", playLine: "Gagged", tags: KDMapInit(["prisoner", "escapeddoll", "doll", "human", "minor", "peaceful", "noshop"]),
		faction: "Prisoner", lowpriority: true, evasion: -100, armor: 0, followRange: 100, AI: "wander", regen: 0.01, events: [
			{trigger: "tick", type: "secretToy"},
		],
		visionRadius: 0, maxhp: 8, minLevel:0, weight:-10, movePoints: 4, attackPoints: 0, attack: "", attackRange: 0,
		Behavior: {noPlay: true},
		ondeath: [{type: "dollID"}],
		terrainTags: {}, allFloors: true},



	// Easy mode rescuer
	{name: "ShopkeeperRescue", tags: KDMapInit(["human", "peaceful", "alwayshelp", "noshop", "opendoors"]), faction: "Prisoner", lowpriority: true, armor: 2, followRange: 100, AI: "guard",
		visionRadius: 0, maxhp: 120, regen: 10, minLevel:0, weight:-1000, movePoints: 2, attackPoints: 0, attack: "", attackRange: 0, specialdialogue: "ShopkeeperRescueChatter",
		Behavior: {noPlay: true},
		noDisplace: true, keys: true,
		events: [
			{type: "ShopkeeperRescueAI", trigger: "afterEnemyTick"},
		],
		terrainTags: {}, floors:KDMapInit([])},

	// Easy mode NPC
	{name: "ShopkeeperStart", tags: KDMapInit(["human", "peaceful", "alwayshelp", "noshop", "opendoors"]), faction: "Prisoner", lowpriority: true, armor: 2, followRange: 100, AI: "guard",
		visionRadius: 0, maxhp: 120, regen: 10, minLevel:0, weight:-1000, movePoints: 2, attackPoints: 0, attack: "", attackRange: 0, specialdialogue: "ShopkeeperStart",
		Behavior: {noPlay: true},
		noDisplace: true, keys: true,
		terrainTags: {}, floors:KDMapInit([])},

	// Quest NPC
	{name: "DressmakerQuest", tags: KDMapInit(["dressmaker", "human", "peaceful", "noshop"]), faction: "Prisoner", lowpriority: true, armor: 0, followRange: 100, AI: "hunt", regen: 0.1,
		visionRadius: 0, maxhp: 12, minLevel:0, weight:-1000, movePoints: 4, attackPoints: 0, attack: "", attackRange: 0, specialdialogue: "DressmakerQuest",
		Behavior: {noPlay: true},
		terrainTags: {}, floors:KDMapInit([])},
	{name: "ApprenticeQuest", tags: KDMapInit(["apprentice", "human", "peaceful", "noshop"]), faction: "Prisoner", lowpriority: true, armor: 0, followRange: 100, AI: "hunt", regen: 0.1,
		visionRadius: 0, maxhp: 12, minLevel:0, weight:-1000, movePoints: 4, attackPoints: 0, attack: "", attackRange: 0, specialdialogue: "ApprenticeQuest",
		Behavior: {noPlay: true},
		terrainTags: {}, floors:KDMapInit([])},
	{name: "BlacksmithQuest", tags: KDMapInit(["human", "peaceful", "alwayshelp", "noshop"]), faction: "Prisoner", lowpriority: true, armor: 0, followRange: 100, AI: "hunt", regen: 0.1,
		visionRadius: 0, maxhp: 12, minLevel:0, weight:-1000, movePoints: 4, attackPoints: 0, attack: "", attackRange: 0, specialdialogue: "BlacksmithShop", data: {"shop": "BlacksmithShop"},
		Behavior: {noPlay: true},
		terrainTags: {}, floors:KDMapInit([])},
	{name: "DragonheartQuest", tags: KDMapInit(["dragon", "peaceful", "alwayshelp", "noshop"]), faction: "Prisoner", lowpriority: true, armor: 0, followRange: 100, AI: "hunt", regen: 0.1,
		visionRadius: 0, maxhp: 12, minLevel:0, weight:-1000, movePoints: 4, attackPoints: 0, attack: "", attackRange: 0, specialdialogue: "DragonheartQuest",
		Behavior: {noPlay: true},
		terrainTags: {}, floors:KDMapInit([])},
	{name: "MaidforceQuest", tags: KDMapInit(["maid", "peaceful", "alwayshelp", "noshop"]), faction: "Prisoner", lowpriority: true, armor: 0, followRange: 100, AI: "hunt", regen: 0.1,
		visionRadius: 0, maxhp: 12, minLevel:0, weight:-1000, movePoints: 4, attackPoints: 0, attack: "", attackRange: 0, specialdialogue: "MaidforceQuest",
		Behavior: {noPlay: true},
		terrainTags: {}, floors:KDMapInit([])},
	{name: "DragonLeaderDuelist", faction: "Enemy", bound: "DragonLeader", color: "#F92900",
		tags: KDMapInit(["opendoors", "fire", "leashing", "noshop", "dragon", "melee", "elite",
			"dragonRestraints", "unflinching", "handcuffer", "leatherRestraints", "leatherRestraintsHeavy", "fireimmune"]),
		stamina: 7,
		sprintspeed: 1.25,
		ignorechance: 0, armor: 0, followRange: 1, AI: "hunt", focusPlayer: true,
		specialCD: 3, specialAttack: "Dash", specialRemove: "BindLockWill", specialCDonAttack: true, specialAttackPoints: 1, specialRange: 3, specialMinrange: 1.5, dashThrough: true, specialsfx: "Miss",
		visionRadius: 7, maxhp: 28, minLevel:0, weight:-1000, movePoints: 2, attackPoints: 2, attack: "MeleeBindLockWill", attackWidth: 1, attackRange: 1, power: 4, dmgType: "crush", fullBoundBonus: 2,
		terrainTags: {}, shrines: ["Leather"], allFloors: true,
		dropTable: [], factionrep: {"Dragon": 0.015}, ondeath: [{type: "removeQuest", quest: "DragonheartQuest"}]},
	{name: "BanditQuest", tags: KDMapInit(["bandit", "peaceful", "alwayshelp", "noshop"]), faction: "Prisoner", lowpriority: true, armor: 0, followRange: 100, AI: "hunt", regen: 0.1,
		visionRadius: 0, maxhp: 12, minLevel:0, weight:-1000, movePoints: 4, attackPoints: 0, attack: "", attackRange: 0, specialdialogue: "BanditQuest",
		Behavior: {noPlay: true},
		terrainTags: {}, floors:KDMapInit([])},
	// End Quest NPC

	{name: "ChainWall", tags: KDMapInit(["construct", "flying", "poisonmmune", "soulimmune", "player", "noknockback", "melee", "temporary", "notalk", "nonvulnerable", "nobrain", "nosignal", "immobile"]),
		faction: "Witch", immobile: true, spellResist: 0, lowpriority: true, evasion: -100, armor: 3, followRange: 100, AI: "wander", regen: -0.25,
		visionRadius: 0, maxhp: 5, minLevel:0, weight:-1000, movePoints: 1000, attackPoints: 0, attack: "", attackRange: 0,
		terrainTags: {}, floors:KDMapInit([])},

	{name: "ForceField", tags: KDMapInit(["construct", "flying", "poisonmmune", "soulimmune", "player", "noknockback", "melee", "temporary", "notalk", "nonvulnerable", "nobrain", "nosignal", "immobile"]),
		faction: "Enemy", immobile: true, spellResist: 3, lowpriority: true, evasion: -100, armor: 0, followRange: 100, AI: "wander", regen: -0.6,
		visionRadius: 0, maxhp: 12, minLevel:0, weight:-1000, movePoints: 1000, attackPoints: 0, attack: "", attackRange: 0,

		terrainTags: {}, floors:KDMapInit([])},


	// Door lock, trap
	{name: "DoorLock",
		tags: KDMapInit(["construct", "soulimmune", "melee", "noknockback", "unstoppable", "temporary", "nonvulnerable", "nobrain", "nosignal", "immobile", "poisonimmune",
			"soulimmune",
		]), faction: "KinkyConstruct", immobile: true, lowpriority: true, spellResist: 1.5, evasion: -100, armor: 3, followRange: 100, AI: "wander", regen: -1.0,
		visionRadius: 0, maxhp: 30, minLevel:0, weight:-1000, movePoints: 1000, attackPoints: 0, attack: "", attackRange: 0,
		terrainTags: {}, floors:KDMapInit([]),
		events: [
			{trigger: "duringDamageEnemy", type: "damageThreshold", power: 1, chance: 1.0},
		],
	},

	{name: "EarthenMonolith", tags: KDMapInit(["construct", "poisonimmune", "soulimmune", "player", "playerinstakill", "noknockback", "melee", "temporary", "notalk", "immobile", "summonedRock", "fireresist", "nonvulnerable", "nobrain", "nosignal"]), immobile: true, spellResist: 1.0, faction: "Rock", lowpriority: true, evasion: -100, armor: 2.5, followRange: 100, AI: "wander", regen: -0.25,
		visionRadius: 0, maxhp: 5, minLevel:0, weight:-1000, movePoints: 1000, attackPoints: 0, attack: "", attackRange: 0,
		terrainTags: {}, floors:KDMapInit([])},

	{name: "Wall", tags: KDMapInit(["construct", "player", "playerinstakill", "noknockback", "melee", "temporary", "notalk", "nonvulnerable", "immobile", "nobrain", "nosignal"]),
		immobile: true, spellResist: 4, allied: true, lowpriority: true, evasion: -100, armor: 1, followRange: 100, AI: "wander", regen: -1.0,
		Resistance: {
			profile: ["construct"],
		},
		visionRadius: 0, maxhp: 15, minLevel:0, weight:-1000, movePoints: 1000, attackPoints: 0, attack: "", attackRange: 0,
		terrainTags: {}, floors:KDMapInit([])},
	{name: "WallDoor", tags: KDMapInit(["construct", "player", "playerinstakill", "noknockback", "melee", "temporary", "notalk", "nonvulnerable", "immobile", "nobrain", "nosignal"]),
		immobile: true, spellResist: 4, allied: true, lowpriority: true, evasion: -100, armor: 2.5, followRange: 100, AI: "wander", regen: -0.8,
		Resistance: {
			profile: ["construct"],
		},
		visionRadius: 0, maxhp: 25, minLevel:0, weight:-1000, movePoints: 1000, attackPoints: 0, attack: "", attackRange: 0,
		terrainTags: {}, floors:KDMapInit([])},
	{name: "StaticSphere", tags: KDMapInit(["construct", "flying", "poisonimmune", "soulimmune", "player", "playerinstakill", "noknockback", "melee", "electricImmune", "nowet", "immobile", "temporary", "notalk", "nonvulnerable", "nobrain", "nosignal"]), immobile: true, spellResist: 4, allied: true, lowpriority: true, evasion: -100, armor: 1, followRange: 100, AI: "wander",
		visionRadius: 0, maxhp: 20, minLevel:0, weight:-1000, movePoints: 1000, attackPoints: 0, attack: "", attackRange: 0,
		terrainTags: {}, floors:KDMapInit([]),
		events: [
			{type: "CastSpellNearbyEnemy", trigger: "afterEnemyTick", spell: "StaticSphereStrike", aoe: 1.5, player: false},
			{type: "ApplyConductionAoE", trigger: "afterEnemyTick", aoe: 1.5},
			{trigger: "getLights", type: "enemyTorch", power: 5, color: "#ffffff"},
		],
	},
	{name: "Decoy", tags: KDMapInit(["construct", "nosignal", "poisonimmune", "soulimmune", "player", "temporary", "notalk"]), noblockplayer: true, allied: true, evasion: 2, armor: 0, followRange: 100, AI: "wander", triggersTraps: true,
		visionRadius: 0, maxhp: 12, minLevel:0, weight:-1000, movePoints: 2, attackPoints: 0, attack: "", attackRange: 0,
		terrainTags: {}, floors:KDMapInit([])},
	{name: "Ally", tags: KDMapInit(["ghost", "flying", "player", "melee"]), keepLevel: true, allied: true, armor: 0, followRange: 1, AI: "hunt", evasion: 0.33, accuracy: 1.5,
		visionRadius: 20, playerBlindSight: 100, maxhp: 8, minLevel:0, weight:-1000, movePoints: 1, attackPoints: 1, attack: "MeleeWill", attackRange: 1, attackWidth: 3, power: 1, dmgType: "slash", CountLimit: true,
		stamina: 4,
		nonDirectional: true,
		terrainTags: {}, floors:KDMapInit([])},
	{name: "AllyDoll", bound: "AllyDoll", color: "#9c2a70", tags: KDMapInit(["human", "player", "gagged", "blindfold", "melee", "glueimmune", "tickleweakness", "nohelp"]), allied: true, armor: 0, followRange: 1, AI: "hunt",
		visionRadius: 20, playerBlindSight: 100, maxhp: 8, regen: -0.1, minLevel:0, weight:-1000, movePoints: 2, attackPoints: 2, attack: "MeleeWill", attackRange: 1, attackWidth: 1, power: 1.5, dmgType: "glue", events: [
			{trigger: "tick", type: "secretToy"},
		],
		stamina: 2,
		nonDirectional: true,
		terrainTags: {}, floors:KDMapInit([])},
	{name: "PetChastity", bound: "AllyDoll", color: "#8888ff", tags: KDMapInit(["human", "player", "gagged", "blindfold", "melee", "charmresist", "soulweakness", "tickleweakness", "nohelp"]), armor: 1.0, followRange: 1, AI: "hunt",
		visionRadius: 6, maxhp: 8, minLevel:0, weight:-1000, movePoints: 3, attackPoints: 2, attack: "MeleeWill", attackRange: 1, attackWidth: 1, power: 2, dmgType: "charm", events: [
			{trigger: "tick", type: "secretToy"},
		],
		stamina: 10,
		sprintspeed: 3.0,
		nonDirectional: true,
		terrainTags: {}, floors:KDMapInit([])},
	{name: "Pet", color: "#8888ff", tags: KDMapInit(["human", "player", "gagged", "melee", "tickleweakness", "nohelp"]), allied: true, armor: 0, followRange: 4, AI: "hunt",
		events: [
			{trigger: "calcManaPool", type: "PetManaRegen", power: 0.01, dist: 1.5},
			{trigger: "tick", type: "secretToy"},
		],
		stamina: 4,
		nonDirectional: true,
		visionRadius: 20, playerBlindSight: 100, maxhp: 10, minLevel:0, weight:-1000, movePoints: 1, attackPoints: 2, attack: "", attackRange: 0, power: 1.5, dmgType: "tickle", focusPlayer: true,
		terrainTags: {}, floors:KDMapInit([])},
	{name: "PetDisplay", color: "#8888ff", tags: KDMapInit(["human", "player", "gagged", "melee", "meleeresist", "nohelp"]), immobile: true, allied: true, armor: 1.5, followRange: 4, AI: "hunt",
		events: [
			{trigger: "calcManaPool", type: "PetManaRegen", power: 0.04, dist: 3.99},
			{trigger: "tick", type: "DisplayAura", power: 0.5, dist: 3.99},
			{trigger: "tick", type: "secretToy"},
		],
		nonDirectional: true,
		evasion: -9,
		visionRadius: 0, playerBlindSight: 100, maxhp: 15, minLevel:0, weight:-1000, movePoints: 9999, attackPoints: 2, attack: "", attackRange: 0, power: 1.5, dmgType: "tickle", focusPlayer: true,
		terrainTags: {}, floors:KDMapInit([])},
	{name: "PlayerGag", tags: KDMapInit(["construct", "nosignal", "poisonresist", "soulimmune", "player", "melee", "temporary", "notalk"]), noblockplayer: true, allied: true, armor: 0, followRange: 1, AI: "guard", accuracy: 1.5, noTargetSilenced: true,
		visionRadius: 20, playerBlindSight: 100, maxhp: 4, minLevel:0, weight:-1000, movePoints: 1, attackPoints: 1, attack: "MeleeWillSilenceSuicideStun",
		nonDirectional: true,
		silenceTime: 9, stunTime: 1, attackRange: 1, attackWidth: 1, power: 3.5, dmgType: "grope",
		terrainTags: {}, floors:KDMapInit([])},
	{name: "ShadowWarrior", tags: KDMapInit(["ghost", "player", "flying", "melee", "tickleimmune", "glueimmune", "temporary", "notalk"]), noblockplayer: true, allied: true, armor: 0, followRange: 1, AI: "hunt", evasion: 1,
		spells: ["AllyShadowStrike"], spellCooldownMult: 1, spellCooldownMod: 0,
		visionRadius: 20, playerBlindSight: 100, maxhp: 11, minLevel:0, weight:-1000, movePoints: 1, attackPoints: 1, attack: "Spell", attackRange: 0, power: 1,
		stamina: 4,
		nonDirectional: true,
		terrainTags: {}, floors:KDMapInit([])},

	{name: "FireElemental", color: "#FF6200", tags: KDMapInit(["elemental", "flying", "fire", "player", "ranged", "charmimmune", "fireimmune", "coldweakness", "acidweakness", "icesevereweakness", "stunweakness", "nohelp"]), keepLevel: true, allied: true, armor: 0, kite: 1.5, followRange: 3, playerFollowRange: 1, AI: "hunt",
		spells: ["AllyFirebolt"], spellCooldownMult: 1, spellCooldownMod: 0,  castWhileMoving: true, spellRdy: true, evasion: 0.5, CountLimit: true,
		visionRadius: 20, playerBlindSight: 100, maxhp: 8, minLevel:0, weight:-1000, movePoints: 1, attackPoints: 1, attack: "Spell", attackRange: 0, power: 1,
		terrainTags: {}, floors:KDMapInit([]),
		stamina: 3,
		nonDirectional: true,
		events: [
			{trigger: "afterEnemyTick", type: "createEffectTile", kind: "Ember", time: 3, power: 2, chance: 0.2, aoe: 1.5},
			{trigger: "getLights", type: "enemyTorch", power: 5.5, color: "#ff8933"},
		],
	},
	{name: "WaterMote", color: "#73efe8", tags: KDMapInit(["elemental", "flying", "water", "player", "melee", "charmimmune", "fireresist", "iceweakness", "acidimmune", "electricsevereweakness", "nohelp"]), keepLevel: true, allied: true, armor: 0, followRange: 1, playerFollowRange: 1, AI: "hunt",
		evasion: 1.0, CountLimit: true, specialAttack: "Stun", specialCD: 7,
		stamina: 4,
		nonDirectional: true,
		visionRadius: 20, playerBlindSight: 100, maxhp: 8, minLevel:0, weight:-1000, movePoints: 1, attackPoints: 2, attack: "MeleeWill", attackRange: 1, attackWidth: 1, power: 2, stunTime: 3, dmgType: "acid",
		terrainTags: {}, floors:KDMapInit([]),
		events: [{trigger: "afterEnemyTick", type: "createWater", power: 1, chance: 0.5, aoe: 0.5}],},
	{name: "EarthMote", color: "#e64539", tags: KDMapInit(["elemental", "flying", "earth", "player", "melee", "charmimmune", "fireresist", "electricresist", "tickleresist", "nohelp"]), keepLevel: true, allied: true, followRange: 1, playerFollowRange: 1, AI: "hunt",
		evasion: -0.4, armor: 2.0, spellResist: 0.5, CountLimit: true,
		stamina: 4,
		nonDirectional: true,
		visionRadius: 20, playerBlindSight: 100, maxhp: 12, minLevel:0, weight:-1000, movePoints: 1, attackPoints: 4, attack: "MeleeWillSlow", attackRange: 1, attackWidth: 1, power: 6, dmgType: "crush",
		terrainTags: {}, floors:KDMapInit([]),
		events: [{trigger: "death", type: "createEffectTile", kind: "Cracked", power: 1, chance: 1, aoe: 0.5, time: 40, variance: 10}],},
	{name: "AirMote", color: "#ffffff", tags: KDMapInit(["elemental", "flying", "air", "nowet", "player", "ranged", "charmimmune", "fireweakness", "electricresist", "stunimmune", "painresist", "tickleweakness", "groperesist", "nohelp"]), keepLevel: true, allied: true, followRange: 3, kite: 1.5, playerFollowRange: 1, AI: "hunt",
		spells: ["AllyWindBlast"], spellCooldownMult: 1, spellCooldownMod: 0, spellRdy: true, evasion: 1.0, CountLimit: true, castWhileMoving: true,
		stamina: 4,
		nonDirectional: true,
		visionRadius: 20, playerBlindSight: 100, maxhp: 8, minLevel:0, weight:-1000, movePoints: 1, attackPoints: 1, attack: "Spell", attackRange: 0, power: 1,
		terrainTags: {}, floors:KDMapInit([])},

	{name: "Golem", tags: KDMapInit(["construct", "nosignal", "poisonimmune", "soulimmune", "player", "melee", "fireresist", "unstoppable", "tickleresist", "groperesist", "electricresist", "notalk"]),
		keepLevel: true, allied: true, armor: 2.0, spellResist: 0.4, followRange: 1, AI: "hunt",
		visionRadius: 20, playerBlindSight: 100, maxhp: 18, minLevel:0, weight:-1000, movePoints: 2, attackPoints: 3, attack: "MeleeWill", attackRange: 1, attackWidth: 1, power: 4.5, accuracy: 0.7, CountLimit: true,
		stamina: 4,
		nonDirectional: true, dmgType: "crush",
		terrainTags: {}, floors:KDMapInit([])},
	{name: "StormCrystal", tags: KDMapInit(["construct", "nosignal", "flying", "poisonimmune", "soulimmune", "player", "ranged", "unstoppable", "meleeresist", "tickleimmune", "electricimmune", "soulimmune", "temporary", "notalk", "nonvulnerable", "immobile", "nobrain", "nosignal"]), immobile: true, noblockplayer: true, allied: true, armor: 1.5, followRange: 1, AI: "wander", evasion: -10,
		spells: ["AllyCrackle"], spellCooldownMult: 1, spellCooldownMod: 0, castWhileMoving: true,
		nonDirectional: true, noFlip: true,
		visionRadius: 6, maxhp: 30, regen: -1, minLevel:0, weight:-1000, movePoints: 1000, attackPoints: 1, attack: "Spell", attackRange: 0, power: 1,
		terrainTags: {}, floors:KDMapInit([]),
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 8, color: "#8888ff"},
		],
	},


	{name: "HolyConstruct", nonHumanoid: true, faction: "Angel", clusterWith: "angel", color: "#ffffaa", tags: KDMapInit(["opendoors", "minor", "holy", "construct", "nosignal", "ranged", "soulimmune", "meleeresist", "unstoppable", "celestialRopes", "coldsevereweakness", "flying"]),
		cohesion: 0.7, cohesionRange: 10,
		spellResist: 3,
		nonDirectional: true,
		followLeashedOnly: true, ignorechance: 0, armor: 0.5, followRange: 3, AI: "hunt", buffallies: true,
		spells: ["OrbHeal", "CelestialBolt"], spellCooldownMult: 2, spellCooldownMod: 0, tilesMinRange: 1, stopToCast: true, kite: 1.5, kiteChance: 0.9,
		visionRadius: 10, maxhp: 7, minLevel: 0, weight: -1, movePoints: 3, attackPoints: 4, attack: "SpellMeleeBlindBind", blindTime: 3, attackWidth: 8, attackRange: 1, power: 4, dmgType: "fire",
		terrainTags: {"goddessRage":7, "willPleased":2, "willFriendly":2, "angel": 6}, shrines: ["Will"], allFloors: true, dropTable: [{name: "Ectoplasm", weight: 9}, {name: "ElfCrystal", weight: 3}],
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 3, color: "#ffff44"}
		],
	},

	{name: "Angel", bound: "Angel", faction: "Angel", color:"#ffffaa", tags: KDMapInit(["angel", "flying", "ranged", "divineRestraints", "coldweakness", "meleeresist", "unflinching"]),
		followRange: 0, AI: "hunt", evasion: 0.25, attackWhileMoving: true,
		Behavior: {
			noPlay: true,
		},
		armor: 2.5, spellResist: 2.5,
		spells: ["HeatBolt", "WitchElectrify", "EnemyCorona"], spellCooldownMult: 0, spellCooldownMod: 4, castWhileMoving: true, noSpellsLowSP: true, spellRdy: true,
		visionRadius: 10, maxhp: 25, minLevel: 4, movePoints: 1.7, attackPoints: 3, attack: "SpellMeleeBindLock", attackRange: 1, attackWidth: 3, power: 2, fullBoundBonus: 4, dmgType: "tickle",
		attackLock: "Blue",
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 6, color: "#ffff44"},
		],
		terrainTags: {"goddessRage": 0.4, "increasingWeight": 0.2, "goddessAnger": 0.6, "angel": 3,}, allFloors: true, weight: -0.5,
		dropTable: [{name: "MagicSword", weight: 1, ignoreInInventory: true}, {name: "MagicSpear", weight: 1, ignoreInInventory: true}, {name: "MagicAxe", weight: 1, ignoreInInventory: true}, {name: "MagicFlail", weight: 1, ignoreInInventory: true}, {name: "MagicHammer", weight: 1, ignoreInInventory: true}],
		rep: {"Will": -1, "Elements": -1, "Conjure": -1, "Illusion": -1}},

	{name: "BlindZombie", bound: "Zombie", playLine: "Zombie", clusterWith: "zombie", tags: KDMapInit(["ignoretiedup", "minor", "zombie", "melee", "fireweakness", "ribbonRestraints", "meleeweakness"]),
		evasion: -1, ignorechance: 0.33, armor: 0, followRange: 1, AI: "wander",
		visionRadius: 2.5, maxhp: 8, minLevel:0, weight:14, movePoints: 3, attackPoints: 4, attack: "MeleeBind", attackWidth: 1, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 1,
		terrainTags: {"increasingWeight":-1.5}, floors:KDMapInit(["grv"]), dropTable: [], difficulty: 0.9},
	{name: "FastZombie", bound: "Zombie", playLine: "Zombie", clusterWith: "zombie", tags: KDMapInit(["ignoretiedup", "zombie", "melee", "fireweakness", "ribbonRestraints", "meleeweakness"]),
		evasion: -1, ignorechance: 0.33, armor: 1, followRange: 1, AI: "hunt",
		stamina: 3,
		visionRadius: 5, maxhp: 10, minLevel:0, weight:9, movePoints: 3, attackPoints: 4, attack: "MeleeBind", attackWidth: 1, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 1,
		terrainTags: {"secondhalf":10, "lastthird":14}, floors:KDMapInit(["grv"]), dropTable: [{name: "Gold", amountMin: 5, amountMax: 10, weight: 10}]},
	{name: "SummonedZombie", bound: "Zombie", playLine: "Zombie", regen: -0.7, clusterWith: "zombie", tags: KDMapInit(["ignoretiedup", "zombie", "melee", "fireweakness", "ribbonRestraints", "meleeweakness", "temporary"]),
		evasion: -1, ignorechance: 0.33, armor: 1.5, followRange: 1, AI: "hunt",
		visionRadius: 5, maxhp: 10, minLevel:0, weight:-1000, movePoints: 3, attackPoints: 3, attack: "MeleeBind", attackWidth: 1, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 1,
		terrainTags: {"secondhalf":10, "lastthird":14}, floors:KDMapInit([])},
	{name: "MageZombie", bound: "MageZombie", playLine: "Zombie", clusterWith: "zombie", tags: KDMapInit(["leashing", "zombie", "ranged", "fireweakness", "ribbonRestraints", "meleeweakness", "hunter"]),
		spellResist: 0.5, evasion: -1, armor: 1, followRange: 2, AI: "hunt",
		spells: ["ZombieOrb", "ZombieOrbIce"], spellCooldownMult: 1, spellCooldownMod: 0, castWhileMoving: true, projectileAttack: true,
		visionRadius: 6, maxhp: 11, minLevel:2, weight:14, movePoints: 3, attackPoints: 4, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 2,
		attackLock: "Purple",
		terrainTags: {}, floors:KDMapInit(["grv", "tmb"]), dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 10}]},
	{name: "TalismanZombie", bound: "TalismanZombie", playLine: "Zombie", clusterWith: "zombie", tags: KDMapInit(["leashing", "zombie", "ranged", "fireweakness", "ribbonRestraints", "meleeweakness", "hunter"]),
		spellResist: 0.5, evasion: -1, armor: 1, followRange: 3, AI: "hunt",
		spells: ["ZombieOrb", "ZombieBuff", "OrbHeal", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 90, spellCooldownMult: 1, spellCooldownMod: 0, castWhileMoving: true, buffallies: true, kite: 1.5, projectileAttack: true,
		visionRadius: 6, maxhp: 20, minLevel:3, weight:14, movePoints: 3, attackPoints: 4, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 2,
		attackLock: "Purple",
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 3, color: "#ffff44"},
		],
		terrainTags: {"mummy": 3}, floors:KDMapInit(["grv", "tmb"]), dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 10}]},
	{name: "SamuraiZombie", bound: "SamuraiZombie", playLine: "Zombie", clusterWith: "zombie", tags: KDMapInit(["leashing", "zombie", "melee", "elite", "fireweakness", "unflinching", "ropeRestraints", "ropeRestraints2", "meleeweakness", "hunter"]),
		evasion: -1, armor: 2.5, followRange: 1, AI: "hunt",
		stunTime: 2, specialCD: 6, specialAttack: "Stun", specialRemove: "BindLock", specialPower: 5, specialDamage: "pain",
		attackLock: "White",
		stamina: 2,
		specialCDonAttack: false, visionRadius: 6, maxhp: 20, minLevel:4, weight:9, movePoints: 3, attackPoints: 3, attack: "MeleeBindLock", attackWidth: 1, attackRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 3, specialWidth: 5, specialRange: 1,
		terrainTags: {"secondhalf":5, "lastthird":5}, shrines: ["Will"], floors:KDMapInit(["grv", "tmb"]), dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}, {name: "Sword", weight: 3.5, ignoreInInventory: true},]},
	{name: "NawashiZombie", bound: "NawashiZombie", playLine: "Zombie", clusterWith: "zombie", tags: KDMapInit(["leashing", "zombie", "melee", "elite", "fireweakness", "unflinching", "ropeRestraints", "ropeRestraints2", "meleeweakness", "hunter"]),
		evasion: -1, armor: 0, followRange: 1, AI: "hunt",
		visionRadius: 8, maxhp: 11, minLevel:0, weight:2, movePoints: 2, attackPoints: 2, attack: "MeleeBind", attackWidth: 1, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 2, difficulty: 1.4,
		terrainTags: {"secondhalf":1, "lastthird":2}, shrines: [], floors:KDMapInit(["grv", "tmb"]), dropTable: [{name: "Gold", amountMin: 5, amountMax: 15, weight: 10}, {name: "Rope", weight: 3.5, ignoreInInventory: true}, {name: "Scissors", weight: 0.5, ignoreInInventory: true},]},

	{name: "Ninja", playLine: "Hunter", faction: "Bountyhunter", bound: "Ninja", clusterWith: "human", color: "#814BB7", tags: KDMapInit(["leashing", "antiMagic", "opendoors", "human", "guardCall", "imprisonable", "bountyhunter", "ninja", "melee", "ropeRestraints", "ropeRestraints2", "jailer", "unarmedresist", "slashresist", "glueweakness", "chainweakness", "search"]), followLeashedOnly: true, blindSight: 5, followRange: 1, AI: "hunt", projectileAttack: true,
		stunTime: 4, specialCD: 6, specialCharges: 6, specialAttack: "Stun", specialRemove: "BindLock", specialCDonAttack: true, strictAttackLOS: true, focusPlayer: true,
		Sound: {
			baseAmount: 0.5,
			moveAmount: 4,
			decay: 1.5,
		},
		stamina: 8,
		attackLock: "White",
		visionRadius: 7, maxhp: 12, minLevel:4, weight:5, movePoints: 1, attackPoints: 3, attack: "MeleeBindLock", attackWidth: 1, attackRange: 1, power: 1.5, dmgType: "crush", fullBoundBonus: 1.5, specialWidth: 1, specialAttackPoints: 3, specialRange: 4, specialMinrange: 1.5, //specialFollow: 3,
		terrainTags: {"secondhalf":3, "lastthird":7, "ropeAnger": 2, "bountyhunter": 8, "rope": 5}, shrines: ["Illusion", "Rope"], floors:KDMapInit(["cat", "tmb", "tmp", "cry"]),
		dropTable: [{name: "Gold", amountMin: 5, amountMax: 10, weight: 10}]},
	{name: "Deputy", playLine: "Officer", color: "#1451f1", faction: "Bountyhunter", bound: "Deputy", clusterWith: "human", tags: KDMapInit(["leashing", "antiMagic", "opendoors", "imprisonable", "human", "police", "guardCall", "bountyhunter", "handcuffer", "steelCuffs", "police", "melee", "search", "jail", "jailer"]),
		followLeashedOnly: true, blindSight: 5, followRange: 1, AI: "hunt", projectileAttack: true,
		armor: 0.8,
		stamina: 1,
		stunTime: 5, specialCD: 11, specialCharges: 4, specialAttack: "Stun", specialRemove: "BindLock", specialCDonAttack: true, strictAttackLOS: true, specialWidth: 2, specialAttackPoints: 4, specialRange: 5, specialMinrange: 1.5, //specialFollow: 3,
		visionRadius: 8, maxhp: 12, minLevel:2, weight:1, movePoints: 1.5, attackPoints: 3, attack: "MeleeBindLock", attackWidth: 1, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 3,
		attackLock: "White",
		terrainTags: {"secondhalf":2, "lastthird":4, "leatherAnger": 2, "metalAnger": 2, "bountyhunter": 8, "metal": 2, "NoPolice": -10000}, shrines: ["Leather", "Metal"], floors:KDMapInit(["grv", "jng", "lib", "cry"]),
		dropTable: [{name: "Donut", weight: 1}]},
	{name: "NinjaStalker", playLine: "Hunter", faction: "Bountyhunter", bound: "NinjaStalker", clusterWith: "human", color: "#814BB7", tags: KDMapInit(["leashing", "antiMagic", "opendoors", "ninja", "human", "bountyhunter", "melee", "ropeRestraints", "ropeRestraints2", "unarmedresist", "slashresist", "glueweakness", "chainweakness", "search"]), blindSight: 5, followRange: 1, AI: "ambush", stealth: 1, noReveal: true,
		ambushRadius: 1.9, wanderTillSees: true, visionRadius: 7, maxhp: 12, minLevel:4, weight:4, movePoints: 1, attackPoints: 3, focusPlayer: true,
		Sound: {
			baseAmount: 0.25,
			moveAmount: 3,
			decay: 1.5,
		},
		stamina: 8,
		attackLock: "White",
		attack: "MeleeBindLock", attackWidth: 1, attackRange: 1, power: 3, dmgType: "crush", fullBoundBonus: 2, specialWidth: 1, specialAttackPoints: 3, specialRange: 4, specialMinrange: 1.5, //specialFollow: 3,
		terrainTags: {"secondhalf":3, "lastthird":7, "ropeAnger": 2, "bountyhunter": 8, "rope": 5}, shrines: ["Illusion", "Rope"], floors:KDMapInit(["cat", "tmb", "tmp", "cry"]),
		dropTable: [{name: "Gold", amountMin: 5, amountMax: 10, weight: 10}]},
	{name: "Nawashi", playLine: "Hunter", faction: "Bountyhunter", bound: "Nawashi", clusterWith: "construct", color: "#5261ff", tags: KDMapInit(["leashing", "antiMagic", "opendoors", "guardCall", "human", "bountyhunter", "elite", "melee", "ropeRestraints", "ropeRestraints2", "ropeRestraintsWrist", "ropeAuxiliary", "jail", "jailer", "ropeRestraintsHogtie"]),
		spells: ["RopeAttack"], spellCooldownMult: 1, spellCooldownMod: 0, castWhileMoving: true, stealth: 2, noReveal: true, focusPlayer: true,
		followLeashedOnly: true, blindSight: 10, followRange: 1, kite: 3, AI: "hunt", evasion: 0.5, dontKiteWhenDisabled: true,
		stamina: 6,
		visionRadius: 7, maxhp: 22, minLevel:8, weight:1, movePoints: 1.5, attackPoints: 2, attack: "SpellMeleeBind", attackWidth: 1, attackRange: 1, power: 2, dmgType: "crush", fullBoundBonus: 1, specialWidth: 1, specialAttackPoints: 3, specialRange: 4, specialMinrange: 1.5, //specialFollow: 3,
		terrainTags: {"secondhalf":1, "lastthird":2, "ropeAnger": 1, "ropeRage": 1, "bountyhunter": 4, "rope": 5}, shrines: ["Rope"], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 20, amountMax: 30, weight: 10}, {name: "Scissors", ignoreInInventory: true, weight: 10}, {name: "EnchKnife", ignoreInInventory: true, weight: 1}, {name: "Rope", weight: 100, ignoreInInventory: true},]},

	{name: "Maidforce", faction: "Maidforce", bound: "Maid", clusterWith: "maid", playLine: "SubMaid", color: "#814BB7", tags: KDMapInit(["leashing", "submissive", "tickleweakness", "imprisonable", "opendoors", "human", "minor", "maid", "melee", "ropeRestraints", "ropeRestraints2", "handcuffer", "maidVibeRestraintsLimited", "maidRestraintsLight", "jail", "jailer", "search"]), blindSight: 3, followRange: 1, AI: "hunt",
		stealth: 3.5, noReveal: true, bindOnDisableSpecial: true, bindOnDisable: true, hitsfx: "Tickle", events: [
			{trigger: "tick", type: "secretToy"},
		],
		Sound: {
			baseAmount: 1,
			moveAmount: 5,
			decay: 1.5,
		},
		stamina: 4,
		smartBind: true,
		attackLock: "White",
		specialCD: 3, specialAttack: "BindLock", specialCDonAttack: true,
		visionRadius: 6, maxhp: 8, minLevel:0, weight:-2, movePoints: 2, attackPoints: 2, attack: "MeleeWill", attackWidth: 1, attackRange: 1, power: 2, dmgType: "tickle", fullBoundBonus: 2,
		terrainTags: {"secondhalf":1, "lastthird":1, "illusionAnger": 22, "illusionRage": 12, "increasingWeight":-1, "maid": 25}, shrines: ["Illusion"], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 5, amountMax: 10, weight: 10}]},
	{name: "MaidforcePara", faction: "Maidforce", bound: "MaidforcePara", clusterWith: "maid", playLine: "DomMaid", color: "#814BB7", tags: KDMapInit(["leashing", "antiMagic", "ballGagRestraints", "opendoors", "imprisonable", "tickleweakness", "guardCall", "human", "miniboss", "maid", "ranged", "ropeRestraints", "ropeRestraints2", "handcuffer", "maidVibeRestraintsLimited", "maidRestraintsLight", "jail", "jailer", "hunter"]), followLeashedOnly: true, blindSight: 5, followRange: 4, AI: "hunt", guardChance: 0.6, projectileAttack: true,
		spells: ["ParasolBuff", "Hairpin", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 90, spellCooldownMult: 1, spellCooldownMod: 0, buffallies: true, kite: 2.5, events: [
			{trigger: "tick", type: "secretToy"},
		],
		Sound: {
			baseAmount: 0.5,
			moveAmount: 4,
			decay: 1.5,
		},
		stamina: 4,
		stealth: 2.5, disarm: 0.5, spellRdy: true, armor: 0.4,
		attackLock: "White",
		visionRadius: 8, maxhp: 10, minLevel:0, weight:-2, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, power: 2, dmgType: "grope",
		terrainTags: {"secondhalf":1, "lastthird":1, "illusionAnger": 17, "illusionRage": 11, "maid": 16}, shrines: ["Illusion"], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}, ]},
	{name: "MaidforceStalker", faction: "Maidforce", bound: "MaidforceStalker", clusterWith: "maid", playLine: "DomMaid", color: "#814BB7",
		tags: KDMapInit(["leashing", "opendoors", "human", "maid", "melee", "maidRestraints", "handcuffer", "maidVibeRestraintsLimited", "unarmedresist", "antiMagic", "tickleweakness", "slashresist", "glueweakness", "chainweakness", "jail", "jailer", "hunter"]),
		followLeashedOnly: true, blindSight: 5, followRange: 1, AI: "hunt", guardChance: 0.6, projectileAttack: true, evasion: 0.33, events: [
			{trigger: "tick", type: "secretToy"},
		],
		stamina: 8,
		Sound: {
			baseAmount: 0.5,
			moveAmount: 3,
			decay: 1.5,
		},
		spells: ["FlashBomb", "MirrorImage"], spellCooldownMult: 1, spellCooldownMod: 0, kite: 2, dontKiteWhenDisabled: true, castWhileMoving: true,
		stealth: 1.5,
		attackLock: "White",
		visionRadius: 7, maxhp: 12, minLevel:4, weight:-2, movePoints: 1, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, tilesMinRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 1,
		terrainTags: {"secondhalf":1, "lastthird":1, "illusionAnger": 15, "illusionRage": 10, "increasingWeight":0.5, "maid": 15}, shrines: ["Illusion"], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}, {name: "PotionInvisibility", weight: 3}]},
	{name: "MaidforceStalkerImage", faction: "Maidforce", color: "#814BB7", tags: KDMapInit(["ghost", "maid", "melee"]), followLeashedOnly: true, blindSight: 12, followRange: 2, AI: "hunt", guardChance: 0.6, projectileAttack: true, evasion: -10,
		kite: 2, dontKiteWhenDisabled: true,
		stealth: 1.5,
		stamina: 4,
		visionRadius: 7, maxhp: 1, minLevel:0, weight:-10, movePoints: 1.25, attackPoints: 2, attack: "MeleeWill", attackWidth: 1, attackRange: 1, tilesMinRange: 1, power: 1, dmgType: "grope",
		terrainTags: {}, shrines: ["Illusion"], floors:KDMapInit([]),},
	{name: "MaidforceMafia", faction: "Maidforce", bound: "MaidforceMafia", clusterWith: "maid", color: "#814BB7", playLine: "GunnerMaid", tags: KDMapInit(["leashing", "gun", "opendoors", "imprisonable", "tickleweakness", "human", "elite", "maid", "ranged", "maidRestraints", "handcuffer", "maidVibeRestraintsLimited", "jail", "jailer", "hunter"]), followLeashedOnly: true, followRange: 4, AI: "hunt", guardChance: 0.6, projectileAttack: true, evasion: -0.25,
		spells: ["RubberBullets"],  spellCooldownMult: 1, spellCooldownMod: 0, kite: 3, noKiteWhenHarmless: true, noSpellsWhenHarmless: true, armor: 0.8,
		events: [
			{trigger: "tick", type: "secretToy"},
			// It's supposed to be the light of the cigar
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#ffaa00"},
		],
		specialAttack: "Stun", specialRemove: "BindLock", specialCD: 10,
		visionRadius: 7.5, maxhp: 14, minLevel:4, weight:-7, movePoints: 2.5, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, tilesMinRange: 1, power: 1, dmgType: "pain", fullBoundBonus: 3,
		stamina: 5, sprintspeed: 2.0,
		terrainTags: {"secondhalf":1, "lastthird":1, "open": 2, "illusionAnger": 12, "illusionRage": 5, "latexAnger": 4, "maid": 15}, shrines: ["Illusion"], allFloors: true,
		attackLock: "White",
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}]},
	{name: "MaidforceMini", faction: "Maidforce", bound: "MaidforceMini", clusterWith: "maid", color: "#814BB7", playLine: "GunnerMaid",
		tags: KDMapInit(["leashing", "opendoors", "imprisonable", "tickleweakness", "human", "elite", "maid", "ranged", "maidRestraintsLight", "handcuffer", "gun", "jail", "jailer", "hunter"]),
		followLeashedOnly: true, followRange: 12, AI: "hunt", guardChance: 0.7, projectileAttack: true, evasion: -1.0,
		spells: ["Minigun", "MinigunWindup"],  spellCooldownMult: 1, spellCooldownMod: 0, noKiteWhenHarmless: true, noSpellsWhenHarmless: true, armor: 1.0, stopToCast: true,
		events: [
			{trigger: "tick", type: "secretToy"},
		],
		sneakThreshold: 3, kite: 3.5, kiteChance: 0.75,
		visionRadius: 8, maxhp: 10, minLevel:3, weight:-6, movePoints: 3.2, attackPoints: 4, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, tilesMinRange: 1, power: 1, dmgType: "pain", fullBoundBonus: 4,
		terrainTags: {"secondhalf":2, "lastthird":-1, "open": 8, "illusionAnger": 9, "illusionPleased": 9, "illusionFriendly": 5, "illusionRage": 3, "latexAnger": 3, "maid": 10}, shrines: ["Illusion"], allFloors: true,
		weightMult: 0.5,
		attackLock: "White",
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}]},
	{name: "MaidforceHead", faction: "Maidforce", bound: "MaidforceHead", clusterWith: "maid", color: "#814BB7", playLine: "HeadMaid", tags: KDMapInit(["leashing", "antiMagic", "guardCall", "tickleweakness", "opendoors", "human", "maid", "unflinching", "boss", "ranged", "maidRestraintsNonChastity", "maidVibeRestraints", "handcuffer", "jailer", "hunter"]), followLeashedOnly: true, followRange: 3.5, AI: "hunt", guardChance: 0.6, projectileAttack: true,
		spells: ["AmpuleGreen", "Hairpin", "RestrainingDevice"], spellCooldownMult: 1, spellCooldownMod: 0, hitsfx: "Tickle", disarm: 1, ignoreStaminaForBinds: true, sneakThreshold: 1, focusPlayer: true,
		useLock: "Red", kite: 2.5, armor: 1.5,
		RestraintFilter: {
			ignoreInitialTag: ["maidVibeRestraints"],
		},
		stamina: 4,
		Sound: {
			baseAmount: 0.5,
			moveAmount: 4,
			decay: 1.5,
		},
		RemoteControl: {
			remote: 5, remoteAmount: 4,
		}, bypass: true, noLeashUnlessExhausted: true, evasion: 0.15, //-15 weight
		events: [
			{trigger: "afterEnemyTick", type: "maidforceHeadAura", dist: 1.5},
		],
		visionRadius: 8, maxhp: 28, minLevel:6, weight:-14, movePoints: 2, attackPoints: 2, attack: "SpellMeleeBindLockAllVibe", attackWidth: 3, attackRange: 1, tilesMinRange: 1, power: 1.5, dmgType: "tickle", fullBoundBonus: 1,
		terrainTags: {"secondhalf":1, "lastthird":1, "open": 4, "illusionAnger": 10, "illusionRage": 4, "maid": 10}, shrines: ["Illusion"], allFloors: true, attackLock: "Red",
		dropTable: [{name: "Gold", amountMin: 30, amountMax: 40, weight: 20}, {name: "EnchKnife", ignoreInInventory: true, weight: 1}]},

	{name: "Skeleton", nonHumanoid: true, bound: "Skeleton", playLine: "Skeleton", clusterWith: "skeleton", tags: KDMapInit(["nosub", "leashing", "skeleton", "gagged", "melee", "ropeRestraints", "leatherRestraints", "clothRestraints", "coldresist", "crushweakness", "search"]), ignorechance: 0, armor: 0, followRange: 1, AI: "hunt",
		visionRadius: 4, maxhp: 5, minLevel:0, weight:8, movePoints: 2, attackPoints: 3, attack: "MeleeBind", attackWidth: 1, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 1.0,
		evasion: -0.1,
		stamina: 3,
		terrainTags: {"secondhalf":4, "increasingWeight":-0.5}, shrines: ["Leather"], floors:KDMapInit(["cat", "tmb"]), dropTable: [{name: "Gold", amountMin: 5, amountMax: 10, weight: 10}]},
	{name: "SummonedSkeleton", nonHumanoid: true, bound: "Skeleton", playLine: "Skeleton", clusterWith: "skeleton", tags: KDMapInit(["nosub", "leashing", "skeleton", "gagged", "melee", "coldresist", "ropeRestraints", "leatherRestraints", "clothRestraints", "crushweakness"]), ignorechance: 0, armor: 0, followRange: 1, AI: "guard",
		visionRadius: 5, maxhp: 5, minLevel:0, weight:8, movePoints: 2, attackPoints: 3, attack: "MeleeBind", attackWidth: 1, attackRange: 1, power: 0.5, dmgType: "grope", fullBoundBonus: 0.5,
		evasion: -0.1,
		stamina: 3,
		terrainTags: {"lastthird":-8}, shrines: [], floors:KDMapInit([])},
	{name: "LesserSkeleton", nonHumanoid: true, bound: "Skeleton", playLine: "Skeleton", noChaseUnrestrained: true, clusterWith: "skeleton", tags: KDMapInit(["nosub", "leashing", "ignorenoSP", "skeleton", "gagged", "melee", "coldresist", "crushweakness"]), ignorechance: 0, armor: 0, followRange: 1, AI: "wander", evasion: -2,
		visionRadius: 1, maxhp: 2.5, minLevel:0, weight:10, movePoints: 2, attackPoints: 3, attack: "MeleeWillSlow", attackWidth: 1, attackRange: 1, power: 0.5, dmgType: "grope", fullBoundBonus: 0.5,
		stamina: 3,
		terrainTags: {"secondhalf":-8, "lastthird":-8, "increasingWeight":-1}, floors:KDMapInit(["cat", "tmb"])},
	{name: "GreaterSkeleton", nonHumanoid: true, bound: "GreaterSkeleton", playLine: "Skeleton", clusterWith: "skeleton", tags: KDMapInit(["nosub", "leashing", "skeleton", "gagged", "melee", "unflinching", "elite", "coldresist", "crushweakness", "hunter"]),
		stamina: 4,
		ignorechance: 0, armor: 2, followRange: 1.5, AI: "hunt", guardChance: 0.6, disarm: 0.5,
		visionRadius: 4, maxhp: 10, minLevel:9, weight:5, movePoints: 3, attackPoints: 3, attack: "MeleeWillSlow", attackWidth: 3, attackRange: 1, power: 5, dmgType: "crush", fullBoundBonus: 0,
		evasion: -0.4,
		terrainTags: {"secondhalf":4, "lastthird":6, "increasingWeight":0.5}, floors:KDMapInit(["cat", "tmb", "tmp"]), dropTable: [{name: "PotionStamina", weight: 3}, {name: "Gold", amountMin: 15, amountMax: 20, weight: 10}, {name: "Hammer", weight: 50, ignoreInInventory: true}]},
	{name: "HeavySkeleton", nonHumanoid: true, bound: "HeavySkeleton", playLine: "Skeleton", clusterWith: "skeleton", color: "#aaaaaa", tags: KDMapInit(["nosub", "leashing", "skeleton", "gagged", "melee", "unflinching", "elite", "coldresist", "crushweakness", "hunter", "obsidianRestraints"]),
		stamina: 4,
		ignorechance: 0, armor: 3, followRange: 1.5, AI: "hunt", guardChance: 0.6, disarm: 0.5,
		visionRadius: 6, maxhp: 16, minLevel:15, weight:4, movePoints: 3, attackPoints: 3, attack: "MeleeWillSlowBind", attackWidth: 3.6, attackRange: 1, power: 5, dmgType: "crush", fullBoundBonus: 3,
		evasion: -0.4,
		terrainTags: {"secondhalf":1, "lastthird":4, "increasingWeight":1}, floors:KDMapInit(["cat", "tmb", "tmp"]),
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}, {name: "Axe", weight: 50, ignoreInInventory: true}]},

	{name: "Ghost", color: "#FFFFFF", faction: "Ghost", clusterWith: "ghost", tags: KDMapInit(["illusionTrap", "ghost", "flying", "spooky", "melee", "minor", "glueimmune", "chainimmune"]),
		ethereal: true, ignorechance: 0, armor: 0, followRange: 1, AI: "hunt", guardChance: 0.6, hitsfx: "Tickle",
		visionRadius: 6, blindSight: 3, evasion: 9.0, alwaysEvade: true, maxhp: 1, minLevel:0, weight:1, movePoints: 1.5,
		attackPoints: 2, attack: "MeleeSuicideEffectWill", attackWidth: 1, attackRange: 1, power: 1, dmgType: "tickle", suicideOnEffect: true, fullBoundBonus: 1,
		effect: {
			effect: {name: "GhostHaunt", count: 1},
		},
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#ffffff"},
		],
		terrainTags: {"ghost" : 4.9}, shrines: ["Illusion"], allFloors: true,
		dropTable: [{name: "Ectoplasm", weight: 1}]},
	{name: "TickleTerror", faction: "Ghost", color: "#FFFFFF", tags: KDMapInit(["illusionTrap", "chestTrap", "ignorenoSP", "comfyRestraints", "spooky", "ghost", "flying", "melee", "glueimmune", "chainimmune", "meleeresist"]), ethereal: true, ignorechance: 0, armor: 0, followRange: 1, AI: "hunt",  noAlert: true, hitsfx: "Tickle",
		visionRadius: 8, blindSight: 8, evasion: 0.5, maxhp: 12, minLevel:4, weight:0.1, movePoints: 2, attackPoints: 2, attack: "MeleeWillBind", attackWidth: 3, attackRange: 1, power: 3, dmgType: "tickle", fullBoundBonus: 3,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#ffffff"},
		],
		terrainTags: {"ghost" : 1.9, "increasingWeight": 0.2, "chestTrap": 50, revenge: 50, "goddessRage": 4}, shrines: ["Illusion"], allFloors: true,
		dropTable: [{name: "Ectoplasm", weight: 1}]},
	{name: "HugHorror", faction: "Ghost", color: "#FFFFFF", tags: KDMapInit(["illusionTrap", "chestTrap", "ignorenoSP", "ghostRestraints", "spooky", "ghost", "flying", "melee", "glueimmune", "chainimmune", "meleeresist"]), ethereal: true, ignorechance: 0, armor: 0, followRange: 1, AI: "hunt",  noAlert: true,
		spells: ["GhostAttack"], spellCooldownMult: 1, spellCooldownMod: 0, castWhileMoving: true,
		stunTime: 4, specialCD: 20, specialAttack: "Stun", specialPower: 4,
		visionRadius: 8, blindSight: 8, evasion: 0.2, maxhp: 20, minLevel:4, weight:0.1, movePoints: 3, attackPoints: 2, attack: "MeleeWillSpell", attackWidth: 3, attackRange: 1, power: 1, dmgType: "crush", fullBoundBonus: 2,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#ffffff"},
		],
		terrainTags: {"ghost" : 1.9, "increasingWeight": 0.2, "chestTrap": 50, revenge: 50, "goddessRage": 4}, shrines: ["Illusion"], allFloors: true,
		dropTable: [{name: "Ectoplasm", weight: 1}]},
	{name: "GreedyGhast", faction: "Ghost", color: "#FFFFFF", tags: KDMapInit(["illusionTrap", "chestTrap", "ignorenoSP", "ghost", "flying", "melee", "spooky", "glueimmune", "chainimmune", "meleeresist"]), ethereal: true, ignorechance: 0, armor: 0, followRange: 1, AI: "hunt",  noAlert: true,
		visionRadius: 6, blindSight: 4, evasion: 0.5, maxhp: 7, minLevel:2, weight:0.1, movePoints: 2, attackPoints: 2, attack: "MeleeWill", attackWidth: 3, attackRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 3,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#ffffff"},
		],
		terrainTags: {"ghost" : 1.9, "increasingWeight": 0.05, "chestTrap": 100, revenge: 50, "goddessRage": 5}, shrines: ["Illusion"], allFloors: true,
		dropTable: [{name: "Ectoplasm", weight: 1}]},

	{name: "OrbGuardian", faction: "Ghost", alwaysHostile: true, clusterWith: "ghost", tags: KDMapInit(["divine", "melee", "flying", "glueimmune", "chainimmune"]), ethereal: true, ignorechance: 0, armor: 0, followRange: 1, AI: "hunt",
		spells: ["ShadowStrike"], spellCooldownMult: 1, spellCooldownMod: 0,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 5, color: "#440099"},
		],
		visionRadius: 100, blindSight: 100, evasion: 0.5, alwaysEvade: true, maxhp: 12, minLevel:0, weight:-10, movePoints: 2, attackPoints: 1, attack: "Spell", attackWidth: 3,
		attackRange: 1, power: 4, dmgType: "cold", fullBoundBonus: 0,
		terrainTags: {}, shrines: [], floors:KDMapInit([]),
		dropTable: [{name: "Ectoplasm", weight: 1}]},



	{name: "TickleHand", hidetimerbar: true, faction: "Witch", clusterWith: "ghost", color: "#FFFFFF", tags: KDMapInit(["ignorenoSP", "ghost", "flying", "melee", "glueimmune", "chainimmune"]),
		ethereal: true, ignorechance: 0, armor: 0, followRange: 1, AI: "hunt",  regen: -0.1, noAlert: true, hitsfx: "Tickle",
		visionRadius: 10, blindSight: 3, evasion: 9.0, alwaysEvade: true, maxhp: 1, minLevel:0, weight:-1000, movePoints: 2, attackPoints: 1, attack: "MeleeWill", attackWidth: 3, attackRange: 1, power: 3, dmgType: "tickle", fullBoundBonus: 0,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#ffffff"},
		],
		terrainTags: {}, shrines: [], allFloors: true},
	{name: "TickleHandSlave", faction: "Witch", color: "#FFFFFF", tags: KDMapInit(["ignorenoSP", "ghost", "flying", "melee", "glueimmune", "chainimmune"]),
		ethereal: true, ignorechance: 0, armor: 0, followRange: 1, AI: "hunt",
		master: {type: "ConjurerTickler", range: 3, dependent: true}, noAlert: true, hitsfx: "Tickle",
		visionRadius: 10, blindSight: 3, evasion: 9.0, alwaysEvade: true, maxhp: 1, minLevel:0, weight:-1000, movePoints: 2, attackPoints: 1, attack: "MeleeWill", attackWidth: 3, attackRange: 1, power: 3, dmgType: "tickle", fullBoundBonus: 0,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#ffffff"},
		],
		terrainTags: {}, shrines: [], allFloors: true,
		Reputation: {
			noRepLoss: true,
		},
		dropTable: [{name: "Ectoplasm", weight: 1}]},
	{name: "Frog", faction: "Witch", clusterWith: "beast", color: "#00FF44",
		tags: KDMapInit(["summoned", "beast", "ranged", "pierceweakness", "electricsevereweakness", "acidresist"]),
		followLeashedOnly: true, armor: 1, followRange: 1, AI: "hunt",
		pullTowardSelf: true, pullDist: 3, master: {type: "Conjurer", range: 3}, projectileAttack: true, projectileTargeting: true,
		evasion: -0.4,
		stamina: 4,
		visionRadius: 8, maxhp: 19, minLevel:0, weight:0, movePoints: 1.5, attackPoints: 2, attack: "MeleePullWill", attackRange: 4, attackWidth: 1, power: 4, strictAttackLOS: true, dmgType: "tickle",
		terrainTags: {}, floors:KDMapInit([])},
	{name: "Conjurer", faction: "Witch", clusterWith: "construct", bound: "Conjurer", playLine: "Witch",
		tags: KDMapInit(["leashing", "opendoors", "antiMagic", "conjurer", "magicchain", "closedoors", "witch", "ranged", "boss", "elite", "unflinching", "dressRestraints", "latexRestraints", "handcuffer"]),
		followRange: 1,
		events: [
			{trigger: "death", type: "frogDies"},
		],
		stamina: 2,
		summon: [{enemy: "Frog", range: 2.5, count: 1, strict: true}],
		spells: ["SummonTickleHand", "EnemyCM1"], unlockCommandLevel: 2, unlockCommandCD: 9, spellCooldownMult: 2, spellCooldownMod: 1, AI: "guard",
		visionRadius: 8, maxhp: 24, minLevel:7, weight:-25, movePoints: 3, spellRdy: true,
		spellResist: 1.5, attackLock: "Purple",
		attackPoints: 4, attack: "MeleeLockAllWillSpellBind", attackWidth: 1, attackRange: 1, power: 3, dmgType: "tickle",
		terrainTags: {"secondhalf":16, "lastthird":5, "boss": -80, "open": 20, "passage": -60, "conjureAnger": 20, "conjureRage": 70, "increasingWeight":0.5, "witch": 30},
		allFloors: true, shrines: ["Conjure"],
		dropTable: [{name: "MagicSword", weight: 1, ignoreInInventory: true}, {name: "MagicSpear", weight: 1, ignoreInInventory: true}, {name: "MagicAxe", weight: 1, ignoreInInventory: true}, {name: "MagicFlail", weight: 1, ignoreInInventory: true}, {name: "MagicHammer", weight: 1, ignoreInInventory: true}, {name: "BlueKey", weight: 2}]},
	{name: "ConjurerTickler", faction: "Witch", clusterWith: "construct", bound: "ConjurerTickler", playLine: "Witch",
		tags: KDMapInit(["leashing", "opendoors", "antiMagic", "conjurer", "magicchain", "closedoors", "witch", "ranged", "boss", "elite", "unflinching", "dressRestraints", "latexRestraints", "handcuffer"]),
		followRange: 1,
		summon: [{enemy: "TickleHandSlave", range: 2.5, count: 3, strict: true}],
		spells: ["SummonBookChain", "EnemyCM1"], unlockCommandLevel: 2, unlockCommandCD: 9, spellCooldownMult: 2, spellCooldownMod: 1, AI: "guard",
		visionRadius: 8, maxhp: 24, minLevel:6, weight:-31, movePoints: 3, spellRdy: true,
		spellResist: 1.5, attackLock: "Purple",
		stamina: 2,
		attackPoints: 4, attack: "MeleeLockAllWillSpellBind", attackWidth: 1, attackRange: 1, power: 3, dmgType: "tickle",
		terrainTags: {"secondhalf":16, "lastthird":5, "boss": -80, "open": 20, "passage": -60, "conjureAnger": 20, "conjureRage": 70, "increasingWeight":0.5, "witch": 30},
		allFloors: true, shrines: ["Conjure"],
		dropTable: [{name: "MagicSword", weight: 1, ignoreInInventory: true}, {name: "MagicSpear", weight: 1, ignoreInInventory: true}, {name: "MagicAxe", weight: 1, ignoreInInventory: true}, {name: "MagicFlail", weight: 1, ignoreInInventory: true}, {name: "MagicHammer", weight: 1, ignoreInInventory: true}, {name: "BlueKey", weight: 2}]},

	{name: "BookChain", hidetimerbar: true, clusterWith: "book", tags: KDMapInit(["fireweakness", "chainimmune", "ignorenoSP", "book", "flying", "minor", "ranged", "slashsevereweakness", "acidweakness", "piercesevereweakness"]), followLeashedOnly: true, armor: 0, followRange: 3, AI: "hunt", guardChance: 0.6, noAlert: true,
		spells: ["MagicChain"], spellCooldownMult: 1, spellCooldownMod: 1, sneakthreshold: 0.95, kite: 1.5, difficulty: 0.05, noSpellLeashing: true,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#aaaaaa"},
		],
		nonDirectional: true,
		spellResist: 2.0,
		dropTable: [{name: "BondageTome", weight: 0.5, ignoreInInventory: true}],
		visionRadius: 6, maxhp: 5, minLevel:0, weight:20, movePoints: 5, attackPoints: 2, attack: "Spell", attackRange: 1, attackWidth: 1, power: 6,
		terrainTags: {"open": 100, "passage": -7, "witch": 2}, floors:KDMapInit(["lib"])},
	{name: "BookCelestial", hidetimerbar: true, clusterWith: "book", tags: KDMapInit(["fireresist", "stunimmune", "ignorenoSP", "book", "flying", "minor", "ranged", "slashsevereweakness", "acidweakness", "piercesevereweakness"]), followLeashedOnly: true, armor: 0, followRange: 3, AI: "hunt", guardChance: 0.6, noAlert: true,
		spells: ["EnemyCorona", "OrbHeal"], spellCooldownMult: 1, spellCooldownMod: 1, sneakthreshold: 0.95, difficulty: 0.05, noSpellLeashing: true,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#ffff44"},
		],
		nonDirectional: true,
		spellResist: 2.0,
		dropTable: [{name: "BondageTome", weight: 0.5, ignoreInInventory: true}],
		visionRadius: 6, maxhp: 5, minLevel:6, weight:18, movePoints: 5, attackPoints: 2, attack: "Spell", attackRange: 1, attackWidth: 1, power: 6,
		terrainTags: {"open": 100, "passage": -7, "elf": 2}, floors:KDMapInit(["lib"])},
	{name: "BookNature", hidetimerbar: true, clusterWith: "book", tags: KDMapInit(["unstoppable", "fireweakness", "ignorenoSP", "book", "flying", "minor", "ranged", "slashsevereweakness", "acidweakness", "piercesevereweakness"]), followLeashedOnly: true, armor: 0, followRange: 3, AI: "hunt", guardChance: 0.6, noAlert: true,
		spells: ["Entangle", "OrbHeal"], spellCooldownMult: 1, spellCooldownMod: 1, sneakthreshold: 0.95, difficulty: 0.05, noSpellLeashing: true,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#88ff88"},
		],
		nonDirectional: true,
		spellResist: 2.0,
		dropTable: [{name: "BondageTome", weight: 0.5, ignoreInInventory: true}],
		visionRadius: 6, maxhp: 5, minLevel:0, weight:18, movePoints: 5, attackPoints: 2, attack: "Spell", attackRange: 1, attackWidth: 1, power: 6,
		terrainTags: {"open": 100, "passage": -7, "elf": 2}, floors:KDMapInit(["lib"])},
	{name: "BookElectric", hidetimerbar: true, clusterWith: "book", tags: KDMapInit(["fireweakness", "electricimmune", "ignorenoSP", "book", "flying", "minor", "ranged", "slashsevereweakness", "acidweakness", "piercesevereweakness"]), followLeashedOnly: true, armor: 0, followRange: 3, AI: "hunt", guardChance: 0.6, noAlert: true,
		spells: ["AreaElectrify"], spellCooldownMult: 1, spellCooldownMod: 1, sneakthreshold: 0.95, difficulty: 0.05, noSpellLeashing: true,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#8888ff"},
		],
		nonDirectional: true,
		spellResist: 2.0,
		dropTable: [{name: "ArcaneTome", weight: 0.5, ignoreInInventory: true}],
		visionRadius: 6, maxhp: 5, minLevel:3, weight:18, movePoints: 5, attackPoints: 2, attack: "Spell", attackRange: 1, attackWidth: 1, power: 6,
		terrainTags: {"open": 100, "passage": -7, "elemental": 2}, floors:KDMapInit(["lib"])},
	{name: "BookSlime", hidetimerbar: true, clusterWith: "book", tags: KDMapInit(["fireweakness", "glueimmune", "ignorenoSP", "book", "flying", "minor", "ranged", "slashsevereweakness", "acidweakness", "piercesevereweakness"]), followLeashedOnly: true, armor: 0, followRange: 3, AI: "hunt", guardChance: 0.6, noAlert: true,
		spells: ["WitchSlimeBall", "WitchSlimeBall", "WitchSlime"], spellCooldownMult: 1, spellCooldownMod: 0, sneakthreshold: 0.95, difficulty: 0.05, noSpellLeashing: true,
		spellResist: 2.0,
		visionRadius: 6, maxhp: 5, minLevel:2, weight:18, movePoints: 5, attackPoints: 2, attack: "Spell", attackRange: 1, attackWidth: 1, power: 6,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#ff00ff"},
		],
		nonDirectional: true,
		dropTable: [{name: "ArcaneTome", weight: 0.5, ignoreInInventory: true}],
		terrainTags: {"open": 100, "passage": -7, "alchemist": 2}, floors:KDMapInit(["lib"])},
	{name: "BookIce", hidetimerbar: true, clusterWith: "book", tags: KDMapInit(["fireweakness", "iceimmune", "ignorenoSP", "book", "flying", "minor", "ranged", "slashsevereweakness", "acidweakness", "piercesevereweakness"]), followLeashedOnly: true, armor: 0, followRange: 3, AI: "hunt", guardChance: 0.6, noAlert: true,
		spells: ["IceSlowPrepare", "IceDragonBreathPrepare"], spellCooldownMult: 1, spellCooldownMod: 4, sneakthreshold: 0.95, difficulty: 0.05, noSpellLeashing: true,
		spellResist: 2.0,
		visionRadius: 6, maxhp: 5, minLevel:4, weight:18, movePoints: 5, attackPoints: 2, attack: "Spell", attackRange: 1, attackWidth: 1, power: 6,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#44aaff"},
		],
		nonDirectional: true,
		dropTable: [{name: "ArcaneTome", weight: 0.5, ignoreInInventory: true}],
		terrainTags: {"open": 100, "passage": -7, "elemental": 2}, floors:KDMapInit(["lib"])},
	{name: "BookForbidden", hidetimerbar: true, clusterWith: "book", tags: KDMapInit(["fireweakness", "coldimmune", "ignorenoSP", "book", "flying", "minor", "ranged", "slashsevereweakness", "acidweakness", "piercesevereweakness"]), followLeashedOnly: true, armor: 0, followRange: 3, AI: "hunt", guardChance: 0.6, noAlert: true,
		spells: ["SoulCrystalBind"], spellCooldownMult: 1, spellCooldownMod: 3, sneakthreshold: 0.95, difficulty: 0.05, noSpellLeashing: true,
		spellResist: 2.0,
		visionRadius: 6, maxhp: 5, minLevel:5, weight:15, movePoints: 5, attackPoints: 2, attack: "Spell", attackRange: 1, attackWidth: 1, power: 6,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#ff5577"},
		],
		nonDirectional: true,
		dropTable: [{name: "BondageTome", weight: 0.5, ignoreInInventory: true}],
		terrainTags: {"open": 100, "passage": -8, "witch": 2}, floors:KDMapInit(["lib", "tmp"])},
	{name: "BookArcane", hidetimerbar: true, clusterWith: "book", tags: KDMapInit(["fireweakness", "coldimmune", "ignorenoSP", "book", "flying", "minor", "ranged", "slashsevereweakness", "acidweakness", "piercesevereweakness"]), followLeashedOnly: true, armor: 0, followRange: 3, AI: "hunt", guardChance: 0.6, noAlert: true,
		spells: ["MummyBolt"], spellCooldownMult: 1, spellCooldownMod: 3, sneakthreshold: 0.95, difficulty: 0.05, noSpellLeashing: true,
		spellResist: 2.0,
		visionRadius: 6, maxhp: 5, minLevel:0, weight:15, movePoints: 5, attackPoints: 2, attack: "Spell", attackRange: 1, attackWidth: 1, power: 6,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#00ff00"},
		],
		dropTable: [{name: "ArcaneTome", weight: 0.5, ignoreInInventory: true}],
		nonDirectional: true,
		terrainTags: {"open": 100, "passage": -8, "mummy": 2}, floors:KDMapInit(["lib", "tmp"])},

	{name: "AnimatedArmor", blockVisionWhileStationary: true,
		tags: KDMapInit(["mimicBlock", "removeDoorSpawn", "ignoreharmless", "leashing", "construct", "nosignal",
			"poisonimmune", "soulimmune", "minor", "melee", "acidweakness", "shackleRestraints", "shackleGag", "slashresist", "crushweakness"]),
		evasion: -0.5, ignorechance: 1.0, armor: 3, followRange: 1, AI: "ambush", difficulty: 0.05, guardChance: 0,
		cueSfx: {
			Block: "Clang",
			Resist: "Clang",
			Damage: "ArmorHit",
		},
		GFX: {
			lighting: true,
		},
		Sound: {
			baseAmount: 0.0,
			moveAmount: 10,
		},
		Resistance: {
			profile: ["construct"],
		},
		useLock: "White",
		visionRadius: 100, ambushRadius: 1.9, blindSight: 100, maxhp: 20, minLevel:0, weight:0, movePoints: 2, attackPoints: 3, attack: "MeleeBind",
		attackWidth: 1, attackRange: 1, power: 4, dmgType: "crush", fullBoundBonus: 4,
		terrainTags: {"secondhalf":4, "lastthird":7, "passage": 70, "adjChest": 58, "door": 50, "rubble": 15}, floors:KDMapInit(["cat"]), shrines: ["Metal"],
		dropTable: [{name: "Gold", amountMin: 5, amountMax: 10, weight: 10}, {name: "Sword", weight: 1, ignoreInInventory: true}]},
	{name: "Mimic", blockVisionWhileStationary: true, tags: KDMapInit(["removeDoorSpawn", "ignoreharmless", "ignorenoSP", "construct", "nosignal", "poisonresist", "soulresist", "minor", "melee", "trap", "shackleGag", "crushweakness", "meleeresist", "fireweakness", "electricresist", "chainweakness"]),
		evasion: -0.5, ignorechance: 1.0, armor: 1, followRange: 1, AI: "ambush", bypass: true, difficulty: 0.15, guardChance: 0,
		nonDirectional: true,
		useLock: "White",
		GFX: {
			lighting: true,
		},
		stamina: 10,
		visionRadius: 100, ambushRadius: 1.9, blindSight: 100, maxhp: 20, minLevel:2, weight:-1, movePoints: 1.5, attackPoints: 2, attack: "MeleeBind", attackWidth: 1, attackRange: 1, power: 3, dmgType: "tickle", fullBoundBonus: 1,
		terrainTags: {"rubble": 100, "adjChest": 15, "passage": 14, "illusionRage": 2, "illusionAnger": 2}, allFloors: true, shrines: ["Illusion"],
		dropTable: [{name: "RedKey", weight: 1}, {name: "Gold", amountMin: 10, amountMax: 40, weight: 6}, {name: "ScrollArms", weight: 1}, {name: "ScrollVerbal", weight: 1}, {name: "ScrollLegs", weight: 1}]},

	{name: "VinePlant", faction: "Plant", clusterWith: "plant", color: "#00FF00", blockVisionWhileStationary: true, tags: KDMapInit(["nature", "removeDoorSpawn", "ignorenoSP", "plant", "minor", "melee", "glueresist", "slashweakness", "coldweakness", "firesevereweakness", "unarmedresist", "crushresist", "vineRestraints"]),
		ignorechance: 1.0, armor: 0, followRange: 1, AI: "ambush", specialCD: 99, specialAttack: "Stun", specialAttackPoints: 1, specialRemove: "Bind", difficulty: 0.05, guardChance: 0,
		evasion: -0.5,
		GFX: {
			lighting: true,
		},
		stamina: 3,
		nonDirectional: true,
		visionRadius: 3, ambushRadius: 1.9, blindSight: 5, maxhp: 10, minLevel:2, weight:25, movePoints: 1.5, attackPoints: 2, attack: "MeleeBind", attackWidth: 1, attackRange: 1, power: 2, dmgType: "crush", fullBoundBonus: 3,
		terrainTags: {"passage": -50, "adjChest": 8, "door": 12, "elf": 5, "nature": 5}, floors:KDMapInit(["jng"]), shrines: ["Rope", "Will"]},
	{name: "Bramble", faction: "Plant", clusterWith: "plant", color: "#00FF00", hitsfx: "DealDamage",
		sneakThreshold: 0.01,
		nonDirectional: true,
		GFX: {
			lighting: true,
		},
		tags: KDMapInit(["removeDoorSpawn", "immobile", "nature", "plant", "minor", "melee", "glueresist", "slashweakness", "coldweakness", "firesevereweakness", "unarmedresist", "crushresist"]),
		evasion: -9, ignorechance: 1.0, armor: 1.5, followRange: 1, AI: "wander", specialCD: 2, specialAttack: "Slow", specialAttackPoints: 1,
		visionRadius: 1.5, blindSight: 1.5, maxhp: 16, minLevel:0, weight:-80, movePoints: 99999, attackPoints: 1, attack: "MeleeWill", attackWidth: 8, attackRange: 1, power: 1, dmgType: "pain",
		terrainTags: {"passage": -50, "adjChest": -50, "door": -50, "open": 140, "elf": 10}, floors:KDMapInit(["jng"]), shrines: ["Rope", "Will"]},

	{name: "Alchemist", faction: "Alchemist", clusterWith: "alchemist", playLine: "Alchemist", bound: "Alchemist", color: "#50a968",
		tags: KDMapInit(["opendoors", "leashing", "imprisonable", "guardCall", "human", "alchemist", "ranged", "leatherRestraints", "handcuffer",
			"leatherRestraintsHeavy", "jail", "jailer", "latexGag", "search"]),
		ignorechance: 0, armor: 0, followRange: 2, AI: "hunt",
		spells: ["AmpuleBlue", "AmpuleGreen", "AmpuleYellow", "AmpuleRed"], spellCooldownMult: 1, spellCooldownMod: 4, kite: 1.5, projectileAttack: true,
		attackLock: "White",
		Resistance: {
			profile: ["alchemist"],
		},
		stamina: 4,
		visionRadius: 6, maxhp: 8, minLevel:0, weight:0.1, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 2,
		terrainTags: {"secondhalf":1, "thirdhalf":1, "latexAnger": 12, "latexRage": 5, "latexPleased": 12, "latexFriendly": 5, "alchemist": 15}, shrines: ["Latex"], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 5, amountMax: 10, weight: 10}, {name: "Gunpowder", amount: 1, weight: 10}]},
	{name: "Alkahestor", faction: "Alchemist", clusterWith: "alchemist", playLine: "Alchemist", bound: "Alkahestor", color: "#92b9e8",
		tags: KDMapInit(["opendoors", "antiMagic", "leashing", "guardCall", "human", "alchemist", "ranged", "miniboss", "expRestraints", "latexRestraints", "handcuffer", "jailer", "latexGag", "search"]),
		ignorechance: 0, armor: 1, followRange: 2, AI: "hunt",
		spells: ["AmpuleBlue", "SummonLatexElemental"], spellCooldownMult: 1, spellCooldownMod: 4, kite: 1.5, projectileAttack: true,
		attackLock: "Red",
		stamina: 4,
		Resistance: {
			profile: ["alchemist"],
		},
		visionRadius: 6, maxhp: 16, minLevel:4, weight:-1, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, power: 1.5, dmgType: "grope", fullBoundBonus: 2.5,
		terrainTags: {"secondhalf":1, "thirdhalf":1, "latexAnger": 4, "latexRage": 4, "latexPleased": 3, "latexFriendly": 5, "alchemist": 10}, shrines: ["Latex"], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}, {name: "Gunpowder", amount: 3, weight: 10}]},
	{name: "ElementalLatex", faction: "Elemental", hidetimerbar: true, playLine: "Elemental", clusterWith: "alchemist", bound: "ElementalLatex", squeeze: true,
		tags: KDMapInit(["opendoors", "latexTrap", "elemental", "slashweakness", "melee", "glueimmune", "coldweakness", "electricresist", "pierceweakness", "acidweakness", "latexRestraints", "latexGag", "leashing", "search", "doortrap"]),
		armor: 0, followRange: 1, AI: "hunt", spellResist: 1.5,
		stamina: 6,
		visionRadius: 7, maxhp: 20, minLevel:4, weight:-3, movePoints: 2, attackPoints: 2, attack: "MeleeWillBind", attackWidth: 3, attackRange: 1, tilesMinRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 3,
		terrainTags: {"secondhalf":2, "thirdhalf":1, "latexAnger": 4, "latexRage": 4, "latexPleased": 2, "latexFriendly": 3, "temple": 4, "doortrap":2, revenge: 5, "alchemist": 5, "witch": 5}, allFloors: true, shrines: ["Latex", "Elements"],
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 10, noSummon: true}, {name: "EarthRune", weight: 1, noSummon: true}]},
	{name: "GlueTechnician", faction: "Alchemist", clusterWith: "alchemist", playLine: "Alchemist", bound: "GlueTechnician", color: "#ffee43",
		tags: KDMapInit(["opendoors", "leashing", "human", "alchemist", "ranged", "unflinching", "elite", "expRestraints", "leatherRestraints", "leatherRestraintsHeavy", "latexGag", "handcuffer", "jail", "jailer", "hunter"]),
		ignorechance: 0, armor: 1.5, followRange: 2, AI: "hunt",
		spells: ["AmpuleYellow", "GlueBomb"], spellCooldownMult: 0.7, spellCooldownMod: 0, projectileAttack: true,
		attackLock: "White",
		stamina: 4,
		Resistance: {
			profile: ["alchemist"],
		},
		visionRadius: 7.5, maxhp: 12, minLevel:2, weight:0, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLockSlow", attackWidth: 2.5, attackRange: 1, power: 2, dmgType: "tickle", fullBoundBonus: 2,
		terrainTags: {"secondhalf":0.5, "thirdhalf":1, "latexAnger": 5, "latexRage": 5, "latexPleased": 2, "latexFriendly": 2, "alchemist": 10}, shrines: ["Latex"], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 15, weight: 10}, {name: "Gunpowder", amount: 2, weight: 10}]},

	{name: "SlimeEnthusiast", faction: "Alchemist", clusterWith: "alchemist", playLine: "Alchemist", bound: "SlimeEnthusiast",
		tags: KDMapInit(["opendoors", "leashing", "human", "alchemist", "ranged", "unflinching", "elite", "leatherRestraints", "leatherRestraintsHeavy", "latexGag", "handcuffer", "jail", "jailer", "hunter"]),
		ignorechance: 0, armor: 1.5, followRange: 2, AI: "hunt",
		spells: ["RedSlime"], spellCooldownMult: 1, spellCooldownMod: 1, projectileAttack: true,
		attackLock: "White",
		stamina: 4,
		Resistance: {
			profile: ["alchemist"],
		},
		visionRadius: 6, maxhp: 12, minLevel:2, weight:0, movePoints: 3, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 2.5, attackRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 2,
		terrainTags: {"secondhalf":0.5, "thirdhalf":1, "latexAnger": 5, "latexRage": 5, "latexPleased": 2, "latexFriendly": 2, "alchemist": 10}, shrines: ["Latex"], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 15, weight: 10}, {name: "Gunpowder", amount: 2, weight: 10}]},
	{name: "RedSlime", faction: "Alchemist", clusterWith: "alchemist", color: "#FF0000", hidetimerbar: true, tags: KDMapInit(["ignoretiedup", "ignoregagged", "experiment", "slime", "melee", "minor", "ballGagRestraints", "meleeresist", "chainimmune", "electricresist", "iceweakness"]),
		squeeze: true, followRange: 1, AI: "hunt",  sneakThreshold: 1, hitsfx: "", armor: 0,
		spells: ["RedSlime"], spellCooldownMult: 1, spellCooldownMod: 1, evasion: 1,
		regen: 0.3,
		nonDirectional: true,
		stamina: 2,
		visionRadius: 4.5, maxhp: 3.2, minLevel: 5, weight:10, movePoints: 2, attackPoints: 3, attack: "SpellMeleeSlowBindSuicide", suicideOnSpell: true, suicideOnAdd: true, attackWidth: 1, attackRange: 1, power: 1, dmgType: "crush",
		terrainTags: {}, floors:KDMapInit(["tmp"]), shrines: ["Latex"]},
	{name: "LabAssistant", faction: "Alchemist", clusterWith: "alchemist", playLine: "Apprentice", bound: "LabAssistant", color: "#92b9e8",
		tags: KDMapInit(["opendoors", "leashing", "human", "alchemist", "ranged", "minor", "latexGag", "jail", "jailer", "hunter"]),
		ignorechance: 0, followRange: 4.5, AI: "hunt",
		difficulty: 0.3,
		spells: ["AmpuleBlue", "LatexBubble"], spellCooldownMult: 1, spellCooldownMod: 1, kite: 2.5, projectileAttack: true, noKiteWhenHarmless: true,
		attackLock: "White",
		stamina: 3,
		Resistance: {
			profile: ["alchemist"],
		},
		visionRadius: 6, maxhp: 6, minLevel:0, weight:1, movePoints: 2.5, attackPoints: 3, attack: "SpellMeleeBlindLock", attackWidth: 1, attackRange: 1, power: 1, dmgType: "acid", fullBoundBonus: 1, blindTime: 3,
		terrainTags: {"secondhalf":2, "thirdhalf":-4, "latexAnger": 4, "latexRage": 4, "latexPleased": 2, "latexFriendly": 2, "alchemist": 40}, shrines: ["Latex"], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 5, amountMax: 10, weight: 10}, {name: "Gunpowder", amount: 1, weight: 7}]},

	{name: "SummonedDrone", playLine: "Robot",
		tags: KDMapInit(["oldrobot", "ignoreharmless", "doortrap", "robot", "flying", "acidweakness", "soulresist", "minor", "melee",
			"electricsevereweakness", "coldresist", "iceresist", "slashresist", "crushsevereweakness", "pierceweakness", "hitechCables", "cableGag", "temporary"]),
		evasion: 0.2, armor: 1.5, followRange: 3.5, AI: "hunt",
		spells: ["EncaseBoltDrone"], spellCooldownMult: 2, spellCooldownMod: 0, projectileTargeting: true,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 3, color: "#ffff00"},
		],
		stamina: 2,
		cueSfx: {
			Block: "Clang",
			Resist: "SoftShield",
			Damage: "RobotHit",
		},
		Sound: {
			baseAmount: 3.5,
			moveAmount: 3.5,
			alertAmount: 12,
		},
		visionRadius: 14, sneakThreshold: 0.5, maxhp: 5, minLevel:0, weight:-1000, kite: 1.5, movePoints: 1.5, attackPoints: 3, attack: "Spell", attackWidth: 1, attackRange: 1, power: 1, dmgType: "glue", fullBoundBonus: 1,
		terrainTags: {}, floors:KDMapInit([])},
	{name: "SummonedCaptureDrone", playLine: "Robot",
		tags: KDMapInit(["leashing", "oldrobot", "ignoreharmless", "doortrap", "robot", "flying", "acidweakness", "soulresist", "minor", "melee",
			"electricsevereweakness", "coldresist", "iceresist", "slashresist", "crushsevereweakness", "pierceweakness", "hitechCables", "cableGag", "temporary"]),
		evasion: 0.15, armor: 2.0, followRange: 1, AI: "hunt",
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 3, color: "#ffff00"},
		],
		stamina: 4,
		Sound: {
			baseAmount: 3.5,
			moveAmount: 3.5,
			alertAmount: 12,
		},
		cueSfx: {
			Block: "Clang",
			Resist: "SoftShield",
			Damage: "RobotHit",
		},
		visionRadius: 15, sneakThreshold: 0.5, maxhp: 6, minLevel:0, weight:-1000, movePoints: 1.35, attackPoints: 2, attack: "MeleeBind", attackWidth: 1.5, attackRange: 1, power: 1, dmgType: "chain", fullBoundBonus: 1.5,
		ondeath: [{type: "spellOnSelf", spell: "RubberSlime"}],
		terrainTags: {}, floors:KDMapInit([])},
	{name: "OldDrone", faction: "Enemy", clusterWith: "robot", playLine: "Robot", noChaseUnrestrained: true,
		color: "#ff3367",
		tags: KDMapInit(["oldrobot", "ignoreharmless", "doortrap", "robot", "flying", "acidweakness", "soulresist", "minor", "melee",
			"electricsevereweakness", "coldresist", "iceresist", "slashresist", "crushsevereweakness", "pierceweakness", "hitechCables", "cableGag", "jail", "search"]),
		AI: "hunt", difficulty: 0.05,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 3, color: "#ffff00"},
		],
		stamina: 2,
		Sound: {
			baseAmount: 5,
			moveAmount: 5,
			alertAmount: 12,
		},
		cueSfx: {
			Block: "Clang",
			Resist: "SoftShield",
			Damage: "RobotHit",
		},
		RestraintFilter: {
			unlimitedRestraints: true,
		},
		armor: 1.5, maxhp: 5, movePoints: 1.1,
		visionRadius: 7, followRange: 1, projectileAttack: true, useLock: "White", followLeashedOnly: true,
		bindOnDisable: true, suicideOnAdd: true,
		attack: "MeleeBindSuicideWill", attackPoints: 2, attackWidth: 1, attackRange: 1, power: 2, dmgType: "electric", multiBind: 2, fullBoundBonus: 4,
		minLevel:0, weight:15, terrainTags: {"oldrobot": 10}, shrines: ["Metal"], floors:KDMapInit(["bel"]),
		dropTable: [{name: "Nothing", weight: 19}, {name: "AncientPowerSourceSpent", weight: 1, noSummon: true}]},
	{name: "OldTapeDrone", faction: "Enemy", clusterWith: "robot", playLine: "Robot", noChaseUnrestrained: true,
		color: "#ff3367",
		tags: KDMapInit(["oldrobot", "leashing", "doortrap", "robot", "flying", "acidweakness", "soulresist", "melee",
			"electricsevereweakness", "coldresist", "iceresist", "slashresist", "crushweakness", "autoTape", "jail", "search"]),
		AI: "patrol",
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 3, color: "#ffff00"},
		],
		stamina: 2,
		cueSfx: {
			Block: "Clang",
			Resist: "SoftShield",
			Damage: "RobotHit",
		},
		RestraintFilter: {
			unlimitedRestraints: true,
		},
		Sound: {
			baseAmount: 6,
			moveAmount: 6,
			alertAmount: 12,
		},
		armor: 2.0, maxhp: 9, movePoints: 1.75,
		visionRadius: 7, followRange: 1,
		evasion: -0.1,
		attack: "MeleeBind", attackPoints: 2, attackWidth: 1, attackRange: 1, power: 2, dmgType: "glue", fullBoundBonus: 1,
		minLevel:2, weight:15, terrainTags: {"notapebot": -1000, "oldrobot": 10, "tapePref": 10, "tapeOptout": -15}, shrines: ["Metal"], floors:KDMapInit(["bel"]),
		dropTable: [{name: "Gold", amountMin: 7, amountMax: 15, weight: 10, noSummon: true}, {name: "AncientPowerSourceSpent", weight: 1, noSummon: true}]},

	{name: "RubberTurret", faction: "Enemy", clusterWith: "robot", playLine: "Robot", noChaseUnrestrained: true,
		nonDirectional: true,
		color: "#ff3367",
		tags: KDMapInit(["oldrobot", "turret", "basicturret", "immobile", "ignoreharmless", "mimicBlock", "doortrap", "robot", "acidweakness", "soulresist", "minor", "ranged",
			"electricsevereweakness", "coldresist", "iceresist", "slashresist", "crushsevereweakness", "pierceweakness"]),
		AI: "hunt", difficulty: 0.2,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 4.5, color: "#ff5555"},
		],
		spells: ["EncaseBolt"], spellCooldownMult: 1, spellCooldownMod: 0, projectileTargeting: true,
		cueSfx: {
			Block: "Clang",
			Resist: "SoftShield",
			Damage: "RobotHit",
		},
		Sound: {
			baseAmount: 0,
			moveAmount: 0,
			alertAmount: 12,
		},
		RestraintFilter: {
			unlimitedRestraints: true,
		},
		armor: 2.0, maxhp: 20, movePoints: 9999, immobile: true,
		visionRadius: 6.5, followRange: 999,
		sneakThreshold: 1,
		evasion: -9,
		attack: "SpellMeleeWill", attackPoints: 2, attackWidth: 1, attackRange: 1, power: 2, dmgType: "electric",
		minLevel:0, weight:-50, terrainTags: {"oldrobot": 7, "oldrobotturret": 50, "oldrobotturretspawn": 150, open: 50, "latexOptout": -50}, shrines: ["Latex"], floors:KDMapInit(["bel"]),
		ondeath: [{type: "spellOnSelf", spell: "RubberSlime"}],
		dropTable: [{name: "AncientPowerSourceSpent", weight: 9, noSummon: true}, {name: "AncientPowerSource", weight: 1, noSummon: true}]},

	{name: "RubberSilo", faction: "Enemy", clusterWith: "robot", playLine: "Robot", noChaseUnrestrained: true,
		color: "#ff3367",
		nonDirectional: true,
		tags: KDMapInit(["oldrobot", "turret", "immobile", "ignoreharmless", "mimicBlock", "doortrap", "robot", "acidweakness", "soulresist", "minor", "ranged",
			"electricsevereweakness", "coldresist", "iceresist", "slashresist", "crushsevereweakness", "pierceweakness"]),
		AI: "hunt", difficulty: 0.2,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 4.5, color: "#ff5555"},
		],
		spells: ["RubberMissile"], spellCooldownMult: 1, spellCooldownMod: 0, projectileTargeting: true,
		cueSfx: {
			Block: "Clang",
			Resist: "SoftShield",
			Damage: "RobotHit",
		},
		Sound: {
			baseAmount: 0,
			moveAmount: 0,
			alertAmount: 12,
		},
		RestraintFilter: {
			unlimitedRestraints: true,
		},
		armor: 2.0, maxhp: 20, movePoints: 9999, immobile: true,
		visionRadius: 8.5, followRange: 999,
		sneakThreshold: 1,
		evasion: -9,
		attack: "SpellMeleeWill", attackPoints: 2, attackWidth: 1, attackRange: 1, power: 2, dmgType: "electric",
		minLevel: 7, weight:-50, terrainTags: {"oldrobot": 7, "oldrobotturret": 30, oldrobotturretspawn: 100, open: 50, "latexOptout": -24}, shrines: ["Latex"], floors:KDMapInit(["bel"]),
		ondeath: [{type: "spellOnSelf", spell: "RubberSlime"}],
		dropTable: [{name: "AncientPowerSourceSpent", weight: 8, noSummon: true}, {name: "AncientPowerSource", weight: 2, noSummon: true}]},

	{name: "Drone", faction: "AncientRobot", clusterWith: "robot", playLine: "Robot", noChaseUnrestrained: true, color: "#ff7755",
		tags: KDMapInit(["ignoreharmless", "doortrap", "robot", "flying", "acidweakness", "soulresist", "minor", "melee", "electricsevereweakness", "coldresist", "iceresist",
			"slashresist", "crushsevereweakness", "pierceweakness", "hitechCables", "cableGag", "jail", "search"]),
		AI: "patrol", difficulty: 0.3,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 3, color: "#ff0000"},
		],
		stamina: 8,
		sprintspeed: 1.8,
		cueSfx: {
			Block: "Clang",
			Resist: "SoftShield",
			Damage: "RobotHit",
		},
		Sound: {
			baseAmount: 4,
			moveAmount: 4,
			alertAmount: 12,
		},
		RestraintFilter: {
			unlimitedRestraints: true,
		},
		//summon: [
		//{enemy: "Drone", range: 2, count: 2, chance: 0.7, strict: true},],
		armor: 2, maxhp: 5, movePoints: 1.8,
		visionRadius: 6, followRange: 1, projectileAttack: true, useLock: "Red",
		bindOnDisable: true, suicideOnAdd: true,
		evasion: 0.15,
		specialCD: 30, specialAttack: "Stun", specialRemove: "Bind", specialCDonAttack: true, specialAttackPoints: 3, specialRange: 7, specialWidth: 1.5, specialMinrange: 3, specialsfx: "Laser", stunTime: 5,
		attack: "MeleeBindSuicideWill", attackPoints: 2, attackWidth: 1, attackRange: 1, power: 3, dmgType: "electric", multiBind: 2, fullBoundBonus: 6,
		minLevel:0, weight:-4, terrainTags: {"secondhalf":0.5, "thirdhalf":0.5, "increasingWeight":0.25, "metalAnger": 4, "metalRage": 2, "metalPleased": 4, "metalFriendly": 4, "robot": 40}, shrines: ["Metal"], allFloors: true,
		dropTable: [{name: "Nothing", weight: 19}, {name: "AncientPowerSourceSpent", weight: 1, noSummon: true}]},


	{name: "Cyborg", faction: "AncientRobot",
		playLine: "Cyborg",
		bound: "Cyborg", color: "#5a71bc",
		tags: KDMapInit(["leashing", "opendoors", "closedoors", "jail", "jailer", "melee", "unflinching", "elite", "robot", "cyborg", "cyberdollrestraints", "cyberdollheavy", "controlharness", "handcuffer", "antiMagic",
			"electricweakness", "coldresist", "iceresist", "slashresist", "pierceresist"]),
		noDisplace: true, disarm: 0.5,
		armor: 2,
		keys: true, followRange: 1, AI: "guard", visionRadius: 7, maxhp: 10, minLevel: 0, weight:-100, movePoints: 1, attackPoints: 2, evasion: -0.2, focusPlayer: true,
		attack: "MeleeBindLockWillStun", attackWidth: 3, attackRange: 1, power: 4, dmgType: "electric", stunTime: 1, attackLock: "Red",
		stamina: 3,
		sprintspeed: 2.0,
		RemoteControl: {
			punishRemote: 4,
			punishRemoteChance: 0.2,
		},
		Sound: {
			baseAmount: 3.5,
			alertAmount: 8,
		},
		RestraintFilter: {
			requiredItems: ["CyberDollJacket"],
		},
		events: [
			{trigger: "defeat", type: "delete", chance: 1.0},
			{trigger: "tick", type: "secretToy"},
		],
		terrainTags: {"jailGuard": 100, "robot": 50,}, allFloors: true, dropTable: [{name: "RedKey", weight: 1}]},


	{name: "CaptureBot", faction: "AncientRobot", clusterWith: "robot", playLine: "Robot", color: "#2a319c",
		tags: KDMapInit(["leashing", "jailer", "doortrap", "robot", "acidweakness", "melee", "electricsevereweakness", "coldresist", "soulresist", "guardCall", "iceresist", "slashresist", "crushsevereweakness", "pierceweakness", "hitechCables", "cableGag", "controlHarness", "opendoors", "closedoors", "search"]),
		AI: "patrol",
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 4.5, color: "#ff0000"},
		],
		cueSfx: {
			Block: "Clang",
			Resist: "SoftShield",
			Damage: "RobotHit",
		},
		stamina: 2,
		Sound: {
			baseAmount: 3,
			moveAmount: 8,
			alertAmount: 12,
		},
		armor: 2.5, maxhp: 10, movePoints: 2,
		evasion: -0.2,
		visionRadius: 6, followRange: 1, projectileAttack: true, useLock: "Red",
		RemoteControl: {
			punishRemote: 4,
			punishRemoteChance: 0.25,
		},
		attack: "MeleeBind", attackPoints: 4, attackWidth: 3, attackRange: 1, power: 3, dmgType: "crush", multiBind: 2, fullBoundBonus: 2,
		minLevel:3, weight:-6, terrainTags: {"nocablebot": -1000, "secondhalf":1, "thirdhalf":1, "increasingWeight":0.5, "metalAnger": 6, "metalRage": 4, "metalPleased": 6, "metalFriendly": 4, "robot": 20, "tapePref": -4, "tapeOptout": 3}, shrines: ["Metal"], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 10, noSummon: true}, {name: "AncientPowerSourceSpent", weight: 1, noSummon: true}]},
	{name: "ForcefieldBot", faction: "AncientRobot", clusterWith: "robot", playLine: "Robot", color: "#2a319c",
		tags: KDMapInit(["leashing", "jailer", "doortrap", "robot", "acidweakness", "melee", "elite", "electricsevereweakness", "coldresist", "soulresist", "guardCall", "iceresist", "slashresist", "crushsevereweakness", "pierceweakness", "hitechCables", "cableGag", "controlHarness", "opendoors", "closedoors", "search"]),
		AI: "patrol",
		spells: ["SummonForceFields"], spellCooldownMult: 1, spellCooldownMod: 0, castWhileMoving: true,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 4.5, color: "#ff0000"},
		],
		stamina: 2,
		cueSfx: {
			Block: "Clang",
			Resist: "SoftShield",
			Damage: "RobotHit",
		},
		Sound: {
			baseAmount: 4,
			moveAmount: 8,
			alertAmount: 12,
		},
		armor: 2.5, maxhp: 14, movePoints: 3,
		evasion: -0.35,
		visionRadius: 6, followRange: 1, projectileAttack: true, useLock: "Red",
		RemoteControl: {
			punishRemote: 4,
			punishRemoteChance: 0.25,
		},
		attack: "SpellMeleeBind", attackPoints: 4, attackWidth: 1, attackRange: 1, power: 3, dmgType: "electric", multiBind: 1, fullBoundBonus: 4,
		minLevel:6, weight:-6,
		terrainTags: {"secondhalf":1, "thirdhalf":1, "increasingWeight":0.5, "metalAnger": 5, "metalRage": 3, "metalPleased": 5, "metalFriendly": 3, "robot": 17}, shrines: ["Metal"], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 10, noSummon: true}, {name: "AncientPowerSourceSpent", weight: 1, noSummon: true}]},
	{name: "TapeBot", faction: "AncientRobot", clusterWith: "robot", playLine: "Robot", color: "#00eeee",
		tags: KDMapInit(["leashing", "jailer", "doortrap", "robot", "acidweakness", "melee", "electricsevereweakness", "coldresist", "soulresist", "guardCall", "iceresist", "slashresist", "crushsevereweakness", "pierceweakness", "autoTape", "opendoors", "closedoors", "search"]),
		AI: "patrol",
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 4, color: "#00eeee"},
		],
		cueSfx: {
			Block: "Clang",
			Resist: "SoftShield",
			Damage: "RobotHit",
		},
		stamina: 2,
		Sound: {
			baseAmount: 3,
			moveAmount: 8,
			alertAmount: 12,
		},
		armor: 2.5, maxhp: 10, movePoints: 1.7,
		evasion: -0.2,
		visionRadius: 6, followRange: 3.5, projectileAttack: true, useLock: "Red",
		RemoteControl: {
			punishRemote: 4,
			punishRemoteChance: 0.25,
		},
		attack: "MeleeBind", attackPoints: 3, attackWidth: 1, attackRange: 3.5, power: 3, dmgType: "glue", multiBind: 1, fullBoundBonus: 2,
		minLevel:2, weight:-8, terrainTags: {"notapebot": -1000, "secondhalf":1, "thirdhalf":1, "increasingWeight":0.5, "metalAnger": 6, "metalRage": 4, "metalPleased": 6, "metalFriendly": 4, "robot": 20, "tape": 5, "tapePref": 6, "tapeOptout": -30}, shrines: ["Metal"], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 10, noSummon: true}, {name: "AncientPowerSourceSpent", weight: 1, noSummon: true}]},
	{name: "BotMissile", faction: "AncientRobot", clusterWith: "robot", playLine: "Robot", color: "#2a319c",
		tags: KDMapInit(["leashing", "robot", "ranged", "miniboss", "acidweakness", "electricsevereweakness",
			"unflinching", "coldresist", "soulresist", "iceresist", "slashresist", "crushsevereweakness", "pierceweakness", "hitechCables", "cableGag", "controlHarness", "search", "dollRoomBoss"]),
		AI: "guard", spellRdy: true, bypass: true,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 5.5, color: "#ff0000"},
		],
		spells: ["RubberMissile"], spellCooldownMult: 0.7, spellCooldownMod: 0, castWhileMoving: true, followLeashedOnly: true,
		cueSfx: {
			Block: "Clang",
			Resist: "SoftShield",
			Damage: "RobotHit",
		},
		Sound: {
			baseAmount: 5,
			moveAmount: 10,
			alertAmount: 12,
		},
		armor: 4, maxhp: 20, movePoints: 4,
		evasion: -0.5,
		visionRadius: 9, followRange: 3.5, projectileAttack: true, useLock: "Red",
		RemoteControl: {
			punishRemote: 6,
			punishRemoteChance: 0.5,
		},
		attack: "SpellMeleeBind", attackPoints: 2, attackWidth: 1, attackRange: 3.5, power: 1, dmgType: "crush", multiBind: 1, fullBoundBonus: 3,
		minLevel:7, weight:-106, terrainTags: {"nolatexbot": -1000,"thirdhalf":1, "increasingWeight":0.5, "open": 100, "metalAnger": 44, "metalRage": 13, "metalPleased": 44, "latex": 5, "metalFriendly": 13, "robot": 7}, shrines: ["Metal"], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 20, amountMax: 30, weight: 5, noSummon: true}, {name: "AncientPowerSource", weight: 1, noSummon: true}]},
	{name: "EnforcerBot", faction: "AncientRobot", clusterWith: "robot", playLine: "Robot", color: "#2a319c",
		tags: KDMapInit(["leashing", "robot", "ranged", "miniboss", "acidweakness", "electricsevereweakness", "unflinching", "coldresist", "soulresist", "iceresist", "slashresist", "crushsevereweakness", "pierceweakness", "hitechCables", "cableGag", "controlHarness", "search"]),
		AI: "guard", spellRdy: true, bypass: true,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 5.5, color: "#ff0000"},
		],
		spells: ["RobotBolt"], spellCooldownMult: 1, spellCooldownMod: 0, castWhileMoving: true, followLeashedOnly: true,
		cueSfx: {
			Block: "Clang",
			Resist: "SoftShield",
			Damage: "RobotHit",
		},
		Sound: {
			baseAmount: 5,
			moveAmount: 10,
			alertAmount: 12,
		},
		summon: [
			{enemy: "Drone", range: 2, count: 2, chance: 0.25, strict: true},],
		armor: 5, maxhp: 24, movePoints: 4,
		evasion: -0.5,
		visionRadius: 9, followRange: 3.5, projectileAttack: true, useLock: "Red",
		RemoteControl: {
			punishRemote: 6,
			punishRemoteChance: 0.5,
		},
		attack: "SpellMeleeBind", attackPoints: 2, attackWidth: 1, attackRange: 3.5, power: 1, dmgType: "crush", multiBind: 1, fullBoundBonus: 3,
		minLevel:9, weight:-106, terrainTags: {"nocablebot": -1000, "thirdhalf":1, "increasingWeight":0.5, "open": 100, "metalAnger": 44, "metalRage": 13, "metalPleased": 44, "metalFriendly": 13, "robot": 7}, shrines: ["Metal"], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 20, amountMax: 30, weight: 5, noSummon: true}, {name: "AncientPowerSource", weight: 1, noSummon: true}]},

	{name: "AlchemistPet", faction: "Alchemist", clusterWith: "alchemist", bound: "AlchemistPet", playLine: "Gagged", color: "#007C59", tags: KDMapInit(["opendoors", "submissive", "noshop", "gagged", "imprisonable", "ignorenoSP", "alchemist", "ranged", "glueweakness", "electricresist", "ticklesevereweakness", "iceresist", "charmweakness", "stunweakness", "search"]),
		ignorechance: 0, armor: 1, followRange: 1.5, AI: "hunt",
		master: {type: "Alchemist", range: 2, loose: true, aggressive: true}, sneakThreshold: 1, blindSight: 2, projectileAttack: true, strictAttackLOS: true, events: [
			{trigger: "tick", type: "secretToy"},
		],
		stamina: 7,
		specialCD: 11, specialAttack: "DashStun", specialRemove: "Will", specialCDonAttack: true, specialAttackPoints: 2, specialRange: 4, specialMinrange: 1.5, specialsfx: "HeavySwing", stunTime: 4, stunOnSpecialCD: 4,
		visionRadius: 6, maxhp: 10, minLevel:3, weight:0, movePoints: 1, attackPoints: 2, attack: "MeleeWill", attackWidth: 1, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 2,
		terrainTags: {"latexAnger": 2, "latexRage": 2, "alchemist": 7}, shrines: ["Latex"], allFloors: true,
		dropTable: []},
	{name: "WolfgirlPet", faction: "Nevermere", clusterWith: "nevermere", bound: "WolfgirlPet", playLine: "Gagged", color: "#009C79", tags: KDMapInit(["opendoors", "wolfSub", "nevermere", "submissive", "noshop", "gagged", "wolfPet", "alwaysAlert", "imprisonable", "wolfgirl", "minor", "ignorenoSP", "ranged", "glueweakness", "electricresist", "ticklesevereweakness", "iceresist", "charmweakness", "stunweakness", "search"]),
		ignorechance: 0, armor: 1, followRange: 2, AI: "hunt",  cohesion: 0.9,
		master: {type: "Wolfgirl", range: 2, loose: true, aggressive: true}, sneakThreshold: 1, blindSight: 2, projectileAttack: true, strictAttackLOS: true, difficulty: 0.5, events: [
			{trigger: "tick", type: "secretToy"},
		],
		stamina: 7,
		specialCD: 11, specialAttack: "DashStun", specialRemove: "Will", specialCDonAttack: true, specialAttackPoints: 2, specialRange: 4, specialMinrange: 1.5, specialsfx: "HeavySwing", stunTime: 4, stunOnSpecialCD: 4,
		visionRadius: 6, maxhp: 10, minLevel:0, weight:0.1, movePoints: 1, attackPoints: 2, attack: "MeleeWill", attackWidth: 1, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 2,
		terrainTags: {"metalAnger": 3, "metalRage": 3, "metalPleased": 2, "metalFriendly": 2, "nevermere": 2}, shrines: ["Metal"], allFloors: true,
		dropTable: []},
	{name: "WolfGuard", faction: "Nevermere", clusterWith: "nevermere", bound: "WolfGuard", color: "#00dCa9", playLine: "Gagged", tags: KDMapInit(["opendoors", "wolfSub", "nevermere", "submissive", "noshop", "gagged", "wolfPet", "autoTape", "alwaysAlert", "leashing", "wolfLeash", "imprisonable", "wolfgirl", "ranged", "glueweakness", "electricresist", "ticklesevereweakness", "iceresist", "charmweakness", "stunweakness", "search"]),
		ignorechance: 0, armor: 2.5, followRange: 2, AI: "hunt",  cohesion: 0.5, events: [
			{trigger: "tick", type: "secretToy"},
		],
		attackLock: "White",
		master: {type: "Wolfgirl", range: 2, loose: true, aggressive: true}, sneakThreshold: 1, blindSight: 2, projectileAttack: true, strictAttackLOS: true,
		specialCD: 9, specialAttack: "DashWill", specialRemove: "Bind", specialCDonAttack: true, specialAttackPoints: 2, specialRange: 4, specialMinrange: 1.5, specialsfx: "HeavySwing", stunTime: 4, stunOnSpecialCD: 4, specialDamage: "crush",
		visionRadius: 6, maxhp: 14, minLevel:6, weight:0, movePoints: 1, attackPoints: 3, attack: "MeleeBind", attackWidth: 1, attackRange: 3, projectileTargeting: true, power: 2, dmgType: "electric", fullBoundBonus: 2,
		terrainTags: {"metalAnger": 1.5, "metalRage": 8, "metalPleased": 4, "metalFriendly": 4, "nevermere": 1}, shrines: ["Metal"], allFloors: true,
		dropTable: [{name: "Nothing", weight: 10}, {name: "EscortDrone", weight: 0.5, ignoreInInventory: true}, {name: "VibeWand", weight: 100, ignoreInInventory: true},]},
	{name: "WolfInstructor", faction: "Nevermere", clusterWith: "nevermere", bound: "Wolfgirl", playLine: "Wolfgirl", color: "#00EFAB", tags: KDMapInit(["leashing", "nevermere", "antiMagic", "imprisonable", "trainer", "controlHarness", "wolfgirl", "jailer", "opendoors", "unflinching", "closedoors", "wolfGear", "handcuffer", "melee", "unflinching", "iceresist", "electricresist", "charmweakness", "stunweakness", "ticklesevereweakness", "jail", "jailer", "hunter"]),
		followRange: 3, kite: 2.5,
		summon: [
			{enemy: "WolfgirlPet", range: 2, count: 1, chance: 1.0, strict: true},
			{enemy: "WolfgirlPet", range: 2, count: 1, chance: 0.5, strict: true},
		],
		stamina: 5,
		spells: ["NevermereBoost"], spellCooldownMult: 1, spellCooldownMod: 5, buffallies: true,
		AI: "hunt",  visionRadius: 10, maxhp: 9, minLevel:6, weight:-2, movePoints: 2, evasion: 0.3,
		RemoteControl: {
			punishRemote: 4,
			punishRemoteChance: 0.25,
		},
		attackPoints: 3, attack: "MeleeBindLockWillSpell", attackWidth: 1, attackRange: 1, tilesMinRange: 1, power: 3, dmgType: "pain",
		attackLock: "White",
		terrainTags: {"secondhalf":4, "lastthird":4, "metalAnger": 4, "metalRage": 4, "metalPleased": 9, "metalFriendly": 4, "nevermere": 9}, allFloors: true, shrines: ["Metal"],
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}]
	},
	{name: "WolfExecutive", faction: "Nevermere", clusterWith: "nevermere", bound: "WolfExecutive", color: "#00EFAB", playLine: "Wolfgirl",
		tags: KDMapInit(["leashing", "nevermere", "trainer", "wolfgirl", "jailer", "opendoors", "unflinching", "closedoors", "antiMagic", "wolfGear", "controlHarness", "wolfRestraints", "wolfRestraintsHeavy", "melee",
			"boss", "unstoppable", "iceresist", "electricresist", "charmweakness", "stunweakness", "ticklesevereweakness", "jailer", "hunter"]),
		followRange: 4.5, kite: 2.5,
		summon: [
			{enemy: "WolfGuard", range: 2, count: 2, chance: 1.0, strict: true},
			{enemy: "WolfShieldDrone", range: 2, count: 1, chance: 0.5, strict: true},
		],
		spells: ["NevermereBoost", "SummonWolfDrone", "SummonWolfTapeDrone", "EnemyBlast"], spellCooldownMult: 0.5, spellCooldownMod: 0, buffallies: true, projectileTargeting: true,
		stamina: 5,
		AI: "hunt",  visionRadius: 10, maxhp: 30, minLevel:5, weight:-30, movePoints: 1.2, evasion: 0.2, bindOnDisable: true,
		smartBind: true,
		RemoteControl: {
			punishRemote: 5,
			punishRemoteChance: 0.35,
		},
		attackPoints: 4, attack: "MeleeWillBindLockAllSpell", multiBind: 2, attackWidth: 3, attackRange: 1, tilesMinRange: 1, power: 3, fullBoundBonus: 3, dmgType: "charm", attackLock: "Blue",
		terrainTags: {"secondhalf":5, "lastthird":5, "boss": -30, "open": 10, "passage": -40, "metalAnger": 2, "metalRage": 2, "metalPleased": 5, "metalFriendly": 5, "increasingWeight":0.5, "nevermere": 30},
		allFloors: true, shrines: ["Metal"],
		dropTable: [{name: "Gold", amountMin: 35, amountMax: 50, weight: 10}, {name: "Blaster", weight: 100, ignoreInInventory: true},]
	},

	{name: "Wolfgirl", faction: "Nevermere", clusterWith: "nevermere", bound: "Wolfgirl", color: "#00EFAB", playLine: "Wolfgirl",
		tags: KDMapInit(["leashing", "nevermere", "imprisonable", "trainer", "wolfgirl", "jailer", "opendoors", "unflinching", "closedoors", "wolfRestraints", "melee", "miniboss", "unflinching", "glueweakness", "ticklesevereweakness", "iceresist", "electricresist", "charmweakness", "stunweakness", "unflinching", "jail", "jailer", "hunter"]), followRange: 1,
		summon: [
			{enemy: "WolfgirlPet", range: 2, count: 1, chance: 0.7, strict: true},],
		spells: ["RestrainingDevice"], spellCooldownMult: 1, spellCooldownMod: 1, AI: "hunt",  visionRadius: 10, maxhp: 20, minLevel:0, weight:-6, movePoints: 2, disarm: 0.5, armor: 1.5,
		RemoteControl: {
			punishRemote: 4,
			punishRemoteChance: 0.25,
		},
		stamina: 6,
		attackPoints: 3, attack: "MeleeBindLockAllWillSpell", attackWidth: 3, attackRange: 1, tilesMinRange: 1, power: 4, dmgType: "grope", attackLock: "Red",
		terrainTags: {"secondhalf":3, "lastthird":5, "metalAnger": 7, "metalRage": 2, "metalPleased": 9, "metalFriendly": 6, "nevermere": 7}, allFloors: true, shrines: ["Metal"],
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}, {name: "EscortDrone", weight: 1.0, ignoreInInventory: true}]
	},

	{name: "WolfOperative", faction: "Nevermere", clusterWith: "nevermere", bound: "WolfOperative", color: "#00EFAB", playLine: "Hunter",
		tags: KDMapInit(["leashing", "bountyhunter", "nevermere", "imprisonable", "trainer", "wolfgirl", "jailer", "antiMagic", "opendoors", "imprisonable", "unflinching", "closedoors", "wolfRestraints", "melee", "elite", "unflinching", "glueweakness", "ticklesevereweakness", "iceresist", "electricresist", "charmweakness", "stunweakness", "unflinching", "jail", "jailer", "hunter"]), followRange: 1,
		spells: ["EnemyBlast"], spellCooldownMult: 0.75, spellCooldownMod: 0, AI: "hunt",  visionRadius: 10, maxhp: 18, minLevel:5, weight:-3, movePoints: 1.7, disarm: 0.5, stealth: 3.5, armor: 0.5,
		RemoteControl: {
			punishRemote: 3,
			punishRemoteChance: 0.2,
		},
		stamina: 7,
		Sound: {
			baseAmount: 1,
			moveAmount: 4,
		},
		bindOnDisable: true, projectileTargeting: true, cohesion: 0.1,
		smartBind: true,
		attackPoints: 2, attack: "MeleeBindLockAllWillSpell", attackWidth: 1, attackRange: 1, tilesMinRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 2,
		attackLock: "White",
		terrainTags: {"secondhalf":1, "lastthird":2, "metalAnger": 5, "metalRage": 5, "metalPleased": 15, "metalFriendly": 10, "nevermere": 13, "bountyhunter": 3}, allFloors: true, shrines: ["Metal"],
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 19}, {name: "Blaster", ignoreInInventory: true, weight: 0.5}]},

	{name: "WolfApprentice", faction: "Nevermere", clusterWith: "nevermere", bound: "Wolfgirl", color: "#00EFAB", playLine: "Wolfgirl",
		tags: KDMapInit(["leashing", "imprisonable", "nevermere", "trainer", "wolfgirl", "jailer", "opendoors", "unflinching", "closedoors", "wolfRestraints", "melee", "elite", "unflinching", "glueweakness", "ticklesevereweakness", "iceresist", "electricresist", "charmweakness", "stunweakness", "unflinching", "jail", "jailer", "hunter"]),
		spells: ["SummonWolfDrone"], spellCooldownMult: 1, spellCooldownMod: 0, AI: "hunt",  visionRadius: 10, maxhp: 9, minLevel:0, weight:1, movePoints: 2.5, events: [
			{trigger: "tick", type: "secretToy"},
		],
		armor: 0.5,
		RemoteControl: {
			punishRemote: 3,
			punishRemoteChance: 0.15,
		},
		stamina: 2,
		attackLock: "White",
		followRange: 1, kite: 2.5, dontKiteWhenDisabled: true, castWhileMoving: true,
		attackPoints: 3, attack: "MeleeBindLockWillSpell", attackWidth: 1, attackRange: 1, tilesMinRange: 1, power: 2, dmgType: "grope", sneakThreshold: 2.5,
		terrainTags: {"secondhalf":1, "lastthird":2, "metalAnger": 12, "metalRage": 6, "metalPleased": 5, "metalFriendly": 10, "nevermere": 15}, allFloors: true, shrines: ["Metal"],
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}, {name: "EscortDrone", weight: 0.25, ignoreInInventory: true}]},

	{name: "WolfDrone", faction: "Nevermere", clusterWith: "nevermere", color: "#00EFAB", playLine: "Robot",
		tags: KDMapInit(["ignoreharmless", "robot", "nevermere", "wolfdrone", "flying", "acidweakness", "soulresist", "minor", "ranged", "electricsevereweakness", "wolfPet", "coldresist", "iceresist", "slashresist", "crushsevereweakness", "pierceweakness", "hitechCables", "cableGag", "search"]),
		followRange: 2.5, kite: 1.5,
		Sound: {
			baseAmount: 5,
			moveAmount: 8,
			alertAmount: 12,
		},
		spells: ["WolfCrackle"], spellCooldownMult: 1, spellCooldownMod: 1, AI: "hunt",  visionRadius: 9, maxhp: 5, armor: 1, minLevel:0, weight:-1000, movePoints: 1,
		attackPoints: 3, attack: "Spell", attackWidth: 1, attackRange: 1, tilesMinRange: 1, power: 1, dmgType: "grope",
		terrainTags: {}, allFloors: true, shrines: ["Metal"],
	},
	{name: "WolfShieldDrone", faction: "Nevermere", clusterWith: "nevermere", color: "#00EFAB", playLine: "Robot",
		tags: KDMapInit(["ignoreharmless", "robot", "wolfdrone", "nevermere", "flying", "acidweakness", "soulresist", "minor", "ranged", "electricsevereweakness", "wolfPet", "coldresist", "iceresist", "slashresist", "crushsevereweakness", "pierceweakness", "search"]),
		followRange: 3.9, kite: 2.5, difficulty: 0.2,
		evasion: -0.2,
		Sound: {
			baseAmount: 4.5,
			moveAmount: 4.5,
			alertAmount: 12,
		},
		AI: "hunt",  visionRadius: 9, maxhp: 8, minLevel:0, weight:-4, movePoints: 1.5, cohesion: 1.0, armor: 1.5, spellResist: 1.5,
		attackPoints: 3, attack: "", attackWidth: 1, attackRange: 1, tilesMinRange: 1, power: 1, dmgType: "grope",
		terrainTags: {"metalAnger": 4, "metalRage": 4, "nevermere": 8}, allFloors: true, shrines: ["Metal"],
		events: [
			{trigger: "afterEnemyTick", type: "wolfShieldDroneAura", power: 1.5, dist: 4.5},
		],
	},
	{name: "WolfTapeDrones", faction: "Nevermere", clusterWith: "nevermere", color: "#00eeee", playLine: "Robot",
		tags: KDMapInit(["ignoreharmless", "robot", "wolfdrone", "leashing", "nevermere", "flying", "acidweakness", "soulresist", "minor", "ranged", "fireweakness", "electricsevereweakness", "wolfPet", "coldresist", "iceresist", "slashresist", "crushsevereweakness", "pierceweakness", "autoTape", "search"]),
		followRange: 1, difficulty: 0.5,
		Sound: {
			baseAmount: 4,
			moveAmount: 7,
			alertAmount: 12,
		},
		AI: "hunt",  visionRadius: 9, maxhp: 7, minLevel:0, weight:-3, movePoints: 1, cohesion: 1.0, armor: 1, spellResist: -0.5, evasion: 0.5,
		attackPoints: 2, attack: "MeleeBind", attackWidth: 2.5, attackRange: 1, tilesMinRange: 1, power: 1, dmgType: "glue", fullBoundBonus: 1,
		terrainTags: {"metalPleased": 4, "metalFriendly": 8, "nevermere": 13, "tapeOptout": -30, "tape": 5, "tapePref": 2}, allFloors: true, shrines: ["Metal"],
	},


	{name: "BanditGuard", faction: "Bandit", clusterWith: "bandit", playLine: "Bandit", bound: "Bandit", tags: KDMapInit(["opendoors", "closedoors", "leashing", "cacheguard", "bandit", "minor", "melee", "leatherRestraints", "leatherRestraintsHeavy", "clothRestraints", "chainweakness", "glueweakness", "jail", "jailer", "search"]),
		cohesion: 0.9, armor: 1, followRange: 1, AI: "hunt",
		master: {type: "BanditChief", range: 2, loose: true, aggressive: true},
		spells: ["BanditBola"], spellCooldownMult: 1, spellCooldownMod: 6, noSpellLeashing: true, difficulty: 0.9, miscastmsg: "KDBanditMiscast", miscastsfx: "Miss",
		visionRadius: 7, maxhp: 11, minLevel:9, weight:20, movePoints: 1.5, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 2,
		attackLock: "White",
		stamina: 4,
		terrainTags: {"BanditEnemy": 10, "increasingWeight":-1, "BanditWanted": 10, "BanditHated": 5}, shrines: ["Leather"], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 5, amountMax: 20, weight: 24}, {name: "Rope", weight: 100.5, ignoreInInventory: true},]},
	{name: "Miner", faction: "Bandit", clusterWith: "human", playLine: "Bandit", bound: "Miner", tags: KDMapInit(["opendoors", "closedoors", "leashing", "bandit", "human", "miner", "imprisonable", "melee", "leatherRestraints", "leatherRestraintsHeavy", "clothRestraints", "chainweakness", "glueweakness", "search"]),
		cohesion: 0.9, armor: 2.0, followRange: 1, AI: "hunt",
		spells: ["MinerBomb"], spellCooldownMult: 1, spellCooldownMod: 3, noSpellLeashing: true, miscastmsg: "KDBanditMiscast", miscastsfx: "Miss",
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 5.5, color: "#ffdd00"},
		],
		attackLock: "White",
		stamina: 5,
		visionRadius: 5, maxhp: 10, minLevel:0, weight:12, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, power: 2, dmgType: "pain", fullBoundBonus: 2,
		terrainTags: {"increasingWeight": 1}, shrines: [], floors:KDMapInit(["cry"]), noOverrideFloor: true,
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 21}, {name: "Pickaxe", ignoreInInventory: true, weight: 100}, {name: "Bomb", weight: 9}]},
	{name: "Bandit", faction: "Bandit", clusterWith: "bandit", playLine: "Bandit", bound: "Bandit", tags: KDMapInit(["opendoors", "closedoors", "leashing", "cacheguard", "imprisonable", "bandit", "minor", "melee", "leatherRestraints", "leatherRestraintsHeavy", "clothRestraints", "chainweakness", "glueweakness", "jail", "jailer", "search"]),
		cohesion: 0.9, armor: 0, followRange: 1, AI: "hunt",
		spells: ["BanditBola"], spellCooldownMult: 1, spellCooldownMod: 8, noSpellLeashing: true, difficulty: 0.9, miscastmsg: "KDBanditMiscast", miscastsfx: "Miss",
		visionRadius: 6, maxhp: 9, minLevel:0, maxLevel: 9, weight:23, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 2,
		terrainTags: {"thirdhalf":-4, "increasingWeight":-1, "BanditEnemy": -7, "BanditWanted": -6, "BanditHated": -5}, shrines: ["Leather"], floors:KDMapInit(["jng", "cry"]),
		attackLock: "White",
		stamina: 3,
		dropTable: [{name: "Gold", amountMin: 5, amountMax: 15, weight: 24}, {name: "Rope", weight: 3.5, ignoreInInventory: true},]},
	{name: "BanditChief", faction: "Bandit", clusterWith: "bandit", playLine: "Bandit", bound: "BanditChief", tags: KDMapInit(["opendoors", "cacheguard", "antiMagic", "closedoors", "leashing", "bandit", "miniboss", "banditleader", "melee", "unflinching", "ballGagRestraints", "handcuffer", "leatherRestraints", "leatherRestraintsHeavy", "clothRestraints", "chainweakness", "glueweakness", "jail", "jailer", "hunter"]),
		cohesion: 0.9, armor: 2.0, followRange: 1, AI: "hunt",
		summon: [
			{enemy: "BanditPet", range: 3, count: 1, chance: 1.0, strict: true},],
		stamina: 4,
		spells: ["BanditBola"], spellCooldownMult: 1, spellCooldownMod: 4, noSpellLeashing: true, miscastmsg: "KDBanditMiscast", miscastsfx: "Miss",
		visionRadius: 8, maxhp: 18, minLevel:0, weight:-11, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 3.6, attackRange: 1, power: 4, dmgType: "grope", fullBoundBonus: 2,
		terrainTags: {"secondhalf":16, "lastthird":5, "open": 10, "passage": -10, "increasingWeight":1}, shrines: ["Leather"], floors:KDMapInit(["jng", "cry", "tmp"]),
		factionrep: {"Maidforce": 0.005},
		dropTable: [{name: "Gold", amountMin: 20, amountMax: 30, weight: 10}, {name: "Knife", ignoreInInventory: true, weight: 2}, {name: "Rope", weight: 100, ignoreInInventory: true},]},
	{name: "BanditPet", faction: "Bandit", clusterWith: "human", playLine: "Gagged", bound: "BanditPet", tags: KDMapInit(["opendoors", "submissive", "noshop", "gagged", "imprisonable", "cacheguard", "closedoors", "leashing", "bandit", "melee", "minor", "ballGagRestraints", "ropeRestraints", "tickleweakness", "chainweakness", "glueweakness", "jail", "search"]),
		cohesion: 0.9, armor: 0, followRange: 1, AI: "hunt",
		master: {type: "BanditChief", range: 2, loose: true, aggressive: true}, difficulty: 0.7, events: [
			{trigger: "tick", type: "secretToy"},
		],
		stamina: 6,
		visionRadius: 6, maxhp: 6, minLevel:0, weight:13, movePoints: 1.25, attackPoints: 3, attack: "MeleeBindLockWill", attackWidth: 1, attackRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 2,
		terrainTags: {"thirdhalf":-1, "increasingWeight":-1}, shrines: ["Leather"], floors:KDMapInit(["jng", "cry"]),
		dropTable: [{name: "Gold", amountMin: 1, amountMax: 5, weight: 10}, {name: "Feather", weight: 50, ignoreInInventory: true}]},
	{name: "BanditHunter", faction: "Bandit", bound: "BanditHunter", playLine: "Bandit", tags: KDMapInit(["opendoors", "closedoors", "leashing", "bandit", "imprisonable", "melee", "elite", "leatherRestraints", "leatherRestraintsHeavy", "clothRestraints", "chainweakness", "glueweakness", "jail", "jailer", "hunter"]),
		ignorechance: 0, armor: 0.5, followRange: 1.5, AI: "hunt", guardChance: 0.6, stealth: 1,
		spells: ["BanditBola"], spellCooldownMult: 1, spellCooldownMod: 3, noSpellLeashing: true, projectileTargeting: true, focusPlayer: true, miscastmsg: "KDBanditMiscast", miscastsfx: "Miss",
		visionRadius: 7, maxhp: 9, minLevel:0, weight:4 , movePoints: 2, attackPoints: 2, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, power: 3, dmgType: "grope", fullBoundBonus: 2,
		attackLock: "White",
		stamina: 5,
		terrainTags: {"secondhalf":7, "thirdhalf":5}, shrines: ["Leather"], floors:KDMapInit(["jng", "cry", "tmp"]),
		Sound: {
			baseAmount: 1,
		},
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}, {name: "Rope", weight: 8, ignoreInInventory: true},]},
	{name: "BanditGrappler", faction: "Bandit", clusterWith: "bandit", playLine: "Bandit", bound: "BanditGrappler", color: "#ddcaaa",
		tags: KDMapInit(["opendoors", "closedoors", "leashing", "bandit", "imprisonable", "melee", "cacheguard", "elite", "unflinching", "chainRestraints", "handcuffer","leatherRestraintsHeavy", "clothRestraints", "chainweakness", "glueweakness", "jail", "jailer", "hunter"]),
		ignorechance: 0, armor: 2.0, followRange: 1, AI: "hunt",
		specialCD: 10, specialAttack: "Pull", specialCDonAttack: true, specialAttackPoints: 2, specialRange: 4, specialsfx: "Chain", specialWidth: 1, specialRemove: "BindLock", pullDist: 3, pullTowardSelf: true,
		visionRadius: 7, maxhp: 10, minLevel:3, weight:4, movePoints: 3, attackPoints: 2, attack: "MeleeBindLock", attackWidth: 2, attackRange: 1, power: 3, dmgType: "grope", fullBoundBonus: 2,
		attackLock: "White",
		stamina: 3,
		terrainTags: {"secondhalf":10, "thirdhalf":1}, shrines: ["Leather", "Metal"], floors:KDMapInit(["jng", "cry", "tmp"]),
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}]},

	{name: "SlimeMold", clusterWith: "mold", faction: "Mold", color: "#FF00FF", tags: KDMapInit(["ignoretiedup", "doortrap", "mold", "minor", "melee", "moldRestraints", "fireweakness", "glueresist", "acidweakness"]),
		squeeze: true, ignorechance: 0.75, followRange: 1, AI: "hunt",  sneakThreshold: 1,
		nonDirectional: true,
		visionRadius: 5, maxhp: 1, minLevel: 0, weight:-15, movePoints: 1.5, attackPoints: 2, attack: "MeleeBindSuicide", suicideOnAdd: true, attackWidth: 1, attackRange: 1, power: 1, dmgType: "glue", fullBoundBonus: 1,
		terrainTags: {"increasingWeight":-2, "mold": 25}, allFloors: true, shrines: ["Latex"]},
	{name: "SlimeMoldLeaper", clusterWith: "mold", faction: "Mold", color: "#FF00FF", tags: KDMapInit(["ignoretiedup", "doortrap", "mold", "minor", "melee", "moldRestraints", "fireweakness", "glueresist", "acidweakness"]),
		squeeze: true, ignorechance: 0.75, followRange: 1, AI: "hunt",  sneakThreshold: 1,
		nonDirectional: true,
		specialCD: 5, specialAttack: "Dash", specialRemove: "Bind", specialCDonAttack: true, specialAttackPoints: 1, specialRange: 3, specialMinrange: 1.5, specialsfx: "Miss",
		visionRadius: 9, maxhp: 1, minLevel: 3, weight:-5, movePoints: 1, attackPoints: 2, attack: "MeleeBindSuicide", suicideOnAdd: true, attackWidth: 1, attackRange: 1, power: 1, dmgType: "glue", fullBoundBonus: 2,
		terrainTags: {"increasingWeight":-1, "mold": 25}, allFloors: true, shrines: ["Latex"]},

	{name: "SlimeMoldSpawner", clusterWith: "mold", faction: "Mold", color: "#FF00FF", tags: KDMapInit(["mold", "immobile", "spawner", "melee", "moldRestraints", "meleeresist", "fireweakness", "glueresist", "acidweakness"]),
		immobile: true, squeeze: true, followRange: 1, AI: "hunt",  sneakThreshold: 1, enemyCountSpellLimit: 40,
		evasion: -9,
		Sound: {
			baseAmount: 10,
			moveAmount: 10,
		},
		spells: ["SummonSlimeMold"], spellCooldownMult: 1, spellCooldownMod: 0, castWhileMoving: true,
		visionRadius: 30, blindSight: 30, maxhp: 12, minLevel: 0, weight:-15, movePoints: 1000, attackPoints: 0, attack: "Spell", attackRange: 0, attackWidth: 1, power: 1, dmgType: "acid", fullBoundBonus: 5,
		terrainTags: {"increasingWeight":0, "mold": 25, "maid": 15.25}, allFloors: true, shrines: ["Latex"], ondeath: [{type: "summon", enemy: "SlimeMold", range: 2.5, count: 4, strict: true}],
		factionrep: {"Maidforce": 0.005},
	},



	{name: "SlimeAdv", faction: "Slime", clusterWith: "slime", bound: "SlimeAdv", playLine: "Gagged", color: "#FF00FF",
		tags: KDMapInit([
			"ignoretiedup", "latexTrap", "slime", "melee", "slimeRestraints", "electricweakness", "acidresist", "iceweakness", "ticklesevereweakness", "charmweakness",
			"submissive", "noshop", "gagged", "imprisonable", "rescueslime",
		]),
		Sound: {
			baseAmount: 4,
			moveAmount: 4,
		},
		nonDirectional: true,
		ignorechance: 0, armor: 1, followRange: 1.5, AI: "hunt",  cohesion: 0.45, sneakThreshold: 1,
		evasion: -0.25,
		master: {type: "WitchSlime", range: 2, loose: true, aggressive: true},
		visionRadius: 4.5, blindSight: 2.5, maxhp: 10, minLevel:2, weight:2, movePoints: 1.7,
		attackPoints: 3, attack: "MeleeBindSlow", attackWidth: 1, attackRange: 1, power: 1, dmgType: "glue", fullBoundBonus: 2,
		terrainTags: {"latexAnger": 3, "latexRage": 3, "alchemist": 2, "slimeBonus": 2, "slime": 5, "slimeOptOut": -2, "slimePref": 2, "jungle": 8, revenge: 10}, shrines: ["Latex"], allFloors: true,
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Slime", aoe: 1.5, power: 1, chance: 1.0, duration: 20},
		],},

	{name: "SmallSlime", clusterWith: "slime", faction: "Slime", color: "#FF00FF", tags: KDMapInit(["ignoretiedup", "latexTrap", "minor", "slime", "melee", "slimeRestraints", "meleeresist", "chainimmune", "electricweakness", "acidresist", "iceweakness"]), squeeze: true, ignorechance: 0.75, followRange: 1, AI: "hunt",  sneakThreshold: 1,
		visionRadius: 3, blindSight: 2.5, maxhp: 3, minLevel: 0, maxLevel: 5, weight:8, movePoints: 1.5, attackPoints: 2, attack: "MeleeBindSuicideWill", suicideOnAdd: true, attackWidth: 1, attackRange: 1, power: 1, dmgType: "glue", fullBoundBonus: 2,
		Animations: ["squishy"],
		Sound: {
			baseAmount: 0,
		},
		terrainTags: {"increasingWeight":-1, "slime": 4, "slimeOptOut": -2, "slimePref": 2, "jungle": 20, "alchemist": 4}, allFloors: true, shrines: ["Latex"],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Slime", aoe: 1.5, power: 1, chance: 1.0, duration: 20},
		],},
	{name: "SmallSlimeLeaper", clusterWith: "slime", faction: "Slime", color: "#FF00FF", tags: KDMapInit(["ignoretiedup", "latexTrap", "minor", "slime", "melee", "slimeRestraints", "meleeresist", "chainimmune", "electricweakness", "acidresist", "iceweakness"]), squeeze: true, ignorechance: 0.75, followRange: 1, AI: "hunt",  sneakThreshold: 1,
		visionRadius: 4.5, blindSight: 2.5, maxhp: 3, minLevel: 5, weight:8, movePoints: 1.5, attackPoints: 2, attack: "MeleeBindSuicideWill", suicideOnAdd: true, attackWidth: 1, attackRange: 1, power: 1, dmgType: "glue", fullBoundBonus: 2,
		Animations: ["squishy"],
		Sound: {
			baseAmount: 0,
			moveAmount: 7,
		},
		specialCD: 5, specialAttack: "Dash", specialRemove: "BindSuicideWill", specialCDonAttack: true, specialAttackPoints: 1, specialRange: 4.5, specialMinrange: 1.5, specialsfx: "Miss",
		terrainTags: {"increasingWeight":-1, "slime": 4, "slimeOptOut": -2, "slimePref": 2, "jungle": 20, "alchemist": 4}, allFloors: true, shrines: ["Latex"],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Slime", aoe: 1.5, power: 1, chance: 1.0, duration: 20},
		],},
	{name: "FastSlime", clusterWith: "slime", faction: "Slime", color: "#FF00FF", tags: KDMapInit(["ignoretiedup", "latexTrap", "slime", "melee", "slimeRestraints", "meleeresist", "chainimmune", "electricweakness", "acidresist", "iceweakness"]), squeeze: true, evasion: 0.3, followRange: 1, AI: "hunt",  sneakThreshold: 1,
		visionRadius: 4.5, blindSight: 2.5, maxhp: 3, minLevel: 9, weight:3, movePoints: 1, attackPoints: 3, attack: "MeleeBindSuicideWill", suicideOnAdd: true, attackWidth: 1, attackRange: 3, power: 2, dmgType: "glue", fullBoundBonus: 2,
		Animations: ["squishy"],
		Sound: {
			baseAmount: 0,
		},
		terrainTags: {"increasingWeight":1, "slime": 2.5, "slimeOptOut": -1.2, "slimePref": 1.2, "jungle": 8, "alchemist": 4}, allFloors: true, shrines: ["Latex"],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Slime", aoe: 1.5, power: 1, chance: 1.0, duration: 20},
		],},
	{name: "BigSlime", clusterWith: "slime", faction: "Slime", color: "#FF00FF", tags: KDMapInit(["ignoretiedup", "slime", "latexTrap", "elite", "melee", "slimeRestraints", "meleeresist", "chainimmune", "electricweakness", "acidresist", "iceweakness"]),
		squeeze: true, evasion: -0.3, followRange: 1, AI: "hunt",  sneakThreshold: 1,
		Animations: ["squishy"],
		Sound: {
			baseAmount: 0,
		},
		visionRadius: 4.5, blindSight: 2.5, maxhp: 12, minLevel: 9, weight:2, movePoints: 3, attackPoints: 3, attack: "MeleeBind", attackWidth: 3, attackRange: 1, power: 4, dmgType: "glue", fullBoundBonus: 2, disarm: 0.5,
		terrainTags: {"slime": 1.5, "alchemist": 3, "slimeOptOut": -1, "slimePref": 1}, allFloors: true, shrines: ["Latex"], ondeath: [{type: "summon", enemy: "SmallSlime", range: 2.5, count: 4, strict: true, lifetime: 50}],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Slime", aoe: 1.5, power: 3, chance: 1.0, duration: 20},
			{trigger: "afterEnemyTick", type: "createEffectTile", kind: "Slime", time: 25, power: 2, chance: 0.3, aoe: 0.5}
		],
	},
	{name: "LatexCube", faction: "Latex", color: "#aa00cc",
		tags: KDMapInit(["ignoretiedup", "unstoppable", "slime", "latex", "latexTrap", "elite", "slashweakness", "melee", "chainimmune", "glueresist", "coldweakness", "electricresist", "pierceweakness", "acidweakness", "latexRestraints", "latexEncaseRandom"]),
		Animations: ["squishyAmbush"],
		GFX: {
			AmbushSprite: "LatexCubeHidden",
		},
		RestraintFilter: {
			unlimitedRestraints: true,
		},
		Sound: {
			baseAmount: 0,
			moveAmount: 3,
		},
		stamina: 3,
		nonDirectional: true,
		squeeze: true, evasion: -1, followRange: 1, AI: "ambush", sneakThreshold: 3, ambushRadius: 1.5,
		visionRadius: 7.0, blindSight: 2.5, maxhp: 18, minLevel: 6, weight:1, movePoints: 4, attackPoints: 3, attack: "MeleeBind", attackWidth: 3, attackRange: 1, power: 4, dmgType: "glue", fullBoundBonus: 2, disarm: 0.7,
		terrainTags: {"slime": 2.5, "plant": 2, "passage": 20, "open": -10, "slimeOptOut": -0.9, "slimePref": 1}, allFloors: true, shrines: ["Latex"],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Slime", aoe: 1.5, power: 3, chance: 1.0, duration: 20},
			{trigger: "afterEnemyTick", type: "createEffectTile", kind: "LatexThin", time: 25, power: 2, chance: 0.5, aoe: 0.5},
		],
		dropTable: [{name: "Gold", amountMin: 20, amountMax: 30, weight: 1}, {name: "StaffGlue", weight: 130, ignoreInInventory: true}],
	},
	{name: "LatexCubeSmall", faction: "Latex", color: "#aa00cc",
		tags: KDMapInit(["ignoretiedup", "unstoppable", "slime", "latex", "latexTrap", "minor", "melee", "chainimmune", "glueresist", "coldweakness", "electricresist", "pierceweakness", "acidweakness", "latexRestraints", "latexEncaseRandom"]),
		Animations: ["squishyAmbush"],
		GFX: {
			AmbushSprite: "LatexCubeSmallHidden",
		},
		stamina: 3,
		nonDirectional: true,
		RestraintFilter: {
			unlimitedRestraints: true,
		},
		Sound: {
			baseAmount: 0,
			moveAmount: 2,
		},
		difficulty: 0.3,
		squeeze: true, evasion: -0.5, followRange: 1, AI: "ambush", sneakThreshold: 3, ambushRadius: 1.5,
		visionRadius: 7.0, blindSight: 2.5, maxhp: 7, minLevel: 0, weight:1, movePoints: 2, attackPoints: 3, attack: "MeleeBindSuicide", attackWidth: 1, attackRange: 1, power: 2, dmgType: "glue", fullBoundBonus: 1, disarm: 0.2,
		suicideOnAdd: true, focusPlayer: true, multiBind: 3,
		terrainTags: {"slime": 3.5, "plant": 3, "passage": 30, "open": -10, "slimeOptOut": -1, "slimePref": 1}, allFloors: true, shrines: ["Latex"],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Slime", aoe: 1.5, power: 3, chance: 1.0, duration: 20},
			{trigger: "afterEnemyTick", type: "createEffectTile", kind: "LatexThin", time: 25, power: 2, chance: 0.5, aoe: 0.5},
		],
		dropTable: [{name: "Nothing", weight: 10}, {name: "StaffGlue", weight: 3, ignoreInInventory: true}],
	},
	{name: "LatexCubeMetal", faction: "Latex", color: "#aa00cc",
		tags: KDMapInit(["ignoretiedup", "unstoppable", "metal", "metalTrap", "minor", "melee", "construct", "nosignal", "poisonimmune", "soulimmune", "chainimmune", "glueresist", "acidweakness", "metallatexRestraints", "mithrilRestraints", "liquidMetalRestraintsRandom"]),
		Animations: ["squishyAmbush"],
		GFX: {
			AmbushSprite: "LatexCubeSmallHidden",
		},
		nonDirectional: true,
		RestraintFilter: {
			unlimitedRestraints: true,
		},
		Sound: {
			baseAmount: 0,
			moveAmount: 4,
		},
		difficulty: 0.4,
		squeeze: true, evasion: -0.5, followRange: 1, AI: "ambush", sneakThreshold: 3, ambushRadius: 1.5,
		visionRadius: 7.0, blindSight: 2.5, maxhp: 8, armor: 1.5, minLevel: 0, weight:0.1, movePoints: 2.4, attackPoints: 3, attack: "MeleeBindSuicide", attackWidth: 1, attackRange: 1, power: 2, dmgType: "crush", fullBoundBonus: 1, disarm: 0.35,
		suicideOnAdd: true, focusPlayer: true, multiBind: 3,
		terrainTags: {"metal": 3.5, "demon": 3, "magic": 3, "passage": 10, "open": -50, "slimeOptOut": -3, "slimePref": 0.1}, allFloors: true, shrines: ["Latex"],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "StarryTrail", aoe: 1.5, power: 3, chance: 1.0, duration: 20},
			{trigger: "afterEnemyTick", type: "createEffectTile", kind: "StarryTrail", time: 25, power: 2, chance: 0.5, aoe: 0.5},
		],
		dropTable: [{name: "Nothing", weight: 10}, {name: "StaffChain", weight: 3, ignoreInInventory: true}, {name: "StaffBind", weight: 0.5, ignoreInInventory: true}],
	},

	{name: "Barricade", faction: "Door",
		lowpriority: true,
		nonDirectional: true, noFlip: true,
		/*cueSfx: {
			Block: "Clang",
			Resist: "Clang",
			Damage: "ArmorHit",
		},*/
		Sound: {
			baseAmount: 0,
			moveAmount: 0,
		},
		GFX: {
			lighting: true,
		},
		tags: KDMapInit(["obstacledoor", "scenery", "minor", "inactive", "nonvulnerable", "unstoppable", "immobile", "nobrain", "nosignal", "poisonimmune", "harmless", "temporary",
			"soulimmune", "pierceresist", "electricresist", "crushweakness", "unarmedresist", "glueresist", "tickleresist", "groperesist", "painresist", "charmimmune",
		]), spellResist: 0, sneakThreshold: 0.01,
		evasion: -9, ignorechance: 1.0, armor: 0, followRange: 1, AI: "ambush", ambushRadius: 0, difficulty: -0.05,
		visionRadius: 0, maxhp: 8, minLevel:0, weight:-1, movePoints: 99999, attackPoints: 4, attack: "", attackWidth: 8, attackRange: 3, power: 1, dmgType: "souldrain",
		terrainTags: {"obstacle": 2, "obstacletile": 5, "increasingWeight":-0.5,}, allFloors: true, shrines: [],
		events: [
			{trigger: "enemyMove", type: "damageOnMove", power: 1, mult: 0.25},
		],
	},

	{name: "BarricadeVine", faction: "Plant",
		lowpriority: true,
		nonDirectional: true, noFlip: true,
		/*cueSfx: {
			Block: "Clang",
			Resist: "Clang",
			Damage: "ArmorHit",
		},*/
		Sound: {
			baseAmount: 0,
			moveAmount: 0,
		},
		GFX: {
			lighting: true,
		},
		tags: KDMapInit(["obstacledoor", "scenery", "minor", "inactive", "nonvulnerable", "unstoppable", "immobile", "nobrain", "nosignal", "poisonimmune", "harmless", "plant", "vine", "temporary",
			"soulimmune", "slashweakness", "fireweakness", "crushresist", "tickleresist", "groperesist", "painresist", "charmimmune",
		]), spellResist: 0, sneakThreshold: 0.01,
		evasion: -9, ignorechance: 1.0, armor: 0, followRange: 1, AI: "ambush", ambushRadius: 0, difficulty: -0.05, regen: 0.05,
		visionRadius: 0, maxhp: 12, minLevel:0, weight:-1, movePoints: 99999, attackPoints: 4, attack: "", attackWidth: 8, attackRange: 3, power: 1, dmgType: "grope",
		terrainTags: {"obstacle": 2, "obstacletile": 5, "increasingWeight":-0.5,}, allFloors: true, shrines: [],
		events: [
			{trigger: "afterPlayerAttack", type: "spellReflect", spell: "Vineexp", time: 2},
			{trigger: "hit", type: "spellReflect", spell: "Vineexp", time: 2},
		],
	},

	{name: "BarricadeConcrete", faction: "Door",
		lowpriority: true,
		nonDirectional: true, noFlip: true,
		cueSfx: {
			Block: "Clang",
			Resist: "Clang",
			Damage: "ArmorHit",
		},
		Sound: {
			baseAmount: 0,
			moveAmount: 0,
		},
		GFX: {
			lighting: true,
		},
		tags: KDMapInit(["obstacledoor", "scenery", "minor", "inactive", "nonvulnerable", "unstoppable", "immobile", "nobrain", "nosignal", "poisonimmune", "harmless", "temporary",
			"soulimmune", "pierceresist", "electricresist", "crushweakness", "unarmedresist", "glueresist", "tickleresist", "groperesist", "painresist", "charmimmune",
		]), spellResist: 0, sneakThreshold: 0.01,
		evasion: -9, ignorechance: 1.0, armor: 1, followRange: 1, AI: "ambush", ambushRadius: 0, difficulty: -0.05,
		visionRadius: 0, maxhp: 10, minLevel:0, weight:-1, movePoints: 99999, attackPoints: 4, attack: "", attackWidth: 8, attackRange: 3, power: 1, dmgType: "souldrain",
		terrainTags: {"obstacle": 4, "obstacletile": 8, "increasingWeight":-1,}, allFloors: true, shrines: [],
		events: [
			{trigger: "enemyMove", type: "damageOnMove", power: 1, mult: 0.25},
		],
	},


	{name: "BarricadeBlastDoor", faction: "Door", color: "#ff9944",
		lowpriority: true,
		nonDirectional: true, noFlip: true,
		cueSfx: {
			Block: "Clang",
			Resist: "Clang",
			Damage: "ArmorHit",
		},
		Sound: {
			baseAmount: 0,
			moveAmount: 0,
		},
		GFX: {
			lighting: true,
		},
		tags: KDMapInit(["obstacledoor", "scenery", "minor", "inactive", "nonvulnerable", "unstoppable", "immobile", "nobrain", "nosignal", "poisonimmune", "harmless", "temporary",
			"soulimmune", "slashresist", "pierceresist", "electricimmune", "unarmedresist", "chainimmune", "glueresist", "tickleresist", "groperesist", "painresist", "charmimmune",
		]), spellResist: 0, sneakThreshold: 0.01, immobile: true,
		evasion: -9, ignorechance: 1.0, armor: 2, followRange: 1, AI: "ambush", ambushRadius: 0, difficulty: -0.05, blockVision: true,
		visionRadius: 0, maxhp: 11, minLevel:0, weight:-1, movePoints: 99999, attackPoints: 4, attack: "", attackWidth: 8, attackRange: 3, power: 1, dmgType: "souldrain",
		terrainTags: {"obstacle": 4, "obstacletile": 14, "increasingWeight":-1,}, floors:KDMapInit(["bel"]), shrines: [],
		events: [
			{trigger: "enemyMove", type: "removeIfRobot"},
			{trigger: "afterPlayerAttack", type: "tauntMsg", msg: "KDDoorAccessDenied", power: 3},
		],
	},

	{name: "BarricadeMetal", faction: "Door",
		lowpriority: true,
		nonDirectional: true, noFlip: true,
		cueSfx: {
			Block: "Clang",
			Resist: "Clang",
			Damage: "ArmorHit",
		},
		Sound: {
			baseAmount: 0,
			moveAmount: 0,
		},
		GFX: {
			lighting: true,
		},
		Resistance: {
			profile: ["construct"],
		},
		tags: KDMapInit(["obstacledoor", "scenery", "minor", "inactive", "nonvulnerable", "unstoppable", "immobile", "nobrain", "nosignal", "poisonimmune", "harmless", "temporary",
			"soulimmune", "electricimmune", "acidweakness", "meleeresist", "glueresist", "tickleresist", "groperesist", "painresist", "charmimmune",
		]), spellResist: 0, sneakThreshold: 0.01,
		evasion: -9, ignorechance: 1.0, armor: 2, followRange: 1, AI: "ambush", ambushRadius: 0, difficulty: -0.05,
		visionRadius: 0, maxhp: 8, minLevel:0, weight:-1, movePoints: 99999, attackPoints: 4, attack: "", attackWidth: 8, attackRange: 3, power: 1, dmgType: "souldrain",
		terrainTags: {"obstacle": 4, "obstacletile": 8, "increasingWeight":-1,}, allFloors: true, shrines: [],
		events: [
			{trigger: "enemyMove", type: "damageOnMove", power: 1, mult: 0.25},
		],
	},
	{name: "BarricadeShadowMetal", faction: "Door",
		lowpriority: true,
		nonDirectional: true, noFlip: true,
		cueSfx: {
			Block: "Clang",
			Resist: "Clang",
			Damage: "ArmorHit",
		},
		Sound: {
			baseAmount: 0,
			moveAmount: 0,
		},
		GFX: {
			lighting: true,
		},
		Resistance: {
			profile: ["construct"],
		},
		ondeath: [{type: "spellOnSelf", spell: "ShadowGrasp"}],
		tags: KDMapInit(["obstacledoor", "scenery", "minor", "inactive", "nonvulnerable", "unstoppable", "immobile", "nobrain", "nosignal", "poisonimmune", "harmless", "temporary",
			"soulimmune", "electricimmune", "acidweakness", "meleeresist", "glueresist", "tickleimmune", "coldimmune", "gropeimmune", "painimmune", "charmimmune",
		]), spellResist: 1, sneakThreshold: 0.01,
		evasion: -9, ignorechance: 1.0, armor: 1, followRange: 1, AI: "ambush", ambushRadius: 0, difficulty: -0.05,
		visionRadius: 0, maxhp: 10, minLevel:0, weight:-10, movePoints: 99999, attackPoints: 4, attack: "", attackWidth: 8, attackRange: 3, power: 1, dmgType: "souldrain",
		terrainTags: {"obstacle": 4, "obstacletile": 8, "shadow":8,}, allFloors: true, shrines: [],
		events: [
			{trigger: "enemyMove", type: "damageOnMove", power: 1, mult: 0.25},
		],
	},

	{name: "BarricadeRobot", faction: "Door",
		lowpriority: true,
		nonDirectional: true, noFlip: true,
		cueSfx: {
			Block: "Clang",
			Resist: "Clang",
			Damage: "ArmorHit",
		},
		Sound: {
			baseAmount: 0,
			moveAmount: 0,
		},
		tags: KDMapInit(["obstacledoor", "scenery", "minor", "inactive", "nonvulnerable", "unstoppable", "immobile", "nobrain", "nosignal", "poisonimmune", "harmless", "temporary",
			"soulimmune", "pierceresist", "electricresist", "crushweakness", "unarmedresist", "glueresist", "acidweakness", "tickleresist", "groperesist", "painresist", "charmimmune",
		]), spellResist: 1, sneakThreshold: 0.01,
		evasion: -9, ignorechance: 1.0, armor: 1, followRange: 1, AI: "ambush", ambushRadius: 0, difficulty: -0.05,
		visionRadius: 0, maxhp: 10, minLevel:0, weight:-10, movePoints: 99999, attackPoints: 4, attack: "", attackWidth: 8, attackRange: 3, power: 1, dmgType: "souldrain",
		terrainTags: {"obstacle": 4, "obstacletile": 8, "increasingWeight":-1,}, allFloors: true, shrines: [],
		events: [
			{trigger: "enemyMove", type: "damageOnMove", power: 1, mult: 0.25},
		],
	},

	{name: "BarricadeMagic", faction: "Door",
		lowpriority: true,
		nonDirectional: true, noFlip: true,
		cueSfx: {
			Block: "Shield",
			Resist: "Shield",
			Damage: "Shield",
		},
		Sound: {
			baseAmount: 0,
			moveAmount: 0,
		},
		Resistance: {
			profile: ["construct"],
		},
		tags: KDMapInit(["obstacledoor", "scenery", "minor", "inactive", "nonvulnerable", "unstoppable", "immobile", "nobrain", "nosignal", "poisonimmune", "harmless", "temporary",
			"soulimmune", "pierceresist", "electricresist", "crushweakness", "unarmedresist", "glueresist", "acidweakness", "tickleresist", "groperesist", "painresist", "charmimmune",
		]), spellResist: 3, sneakThreshold: 0.01,
		evasion: -9, ignorechance: 1.0, armor: 0, followRange: 1, AI: "ambush", ambushRadius: 0, difficulty: -0.05, regen: 1,
		visionRadius: 0, maxhp: 6, minLevel:0, weight:-10, movePoints: 99999, attackPoints: 4, attack: "", attackWidth: 8, attackRange: 3, power: 1, dmgType: "souldrain",
		terrainTags: {"obstacle": 4, "obstacletile": 8, "increasingWeight":-1,}, allFloors: true, shrines: [],
		events: [
			{trigger: "enemyMove", type: "damageOnMove", power: 1, mult: 0.25},
		],
	},

	{name: "BarricadeShadow", faction: "Ghost", color: "#8800ff",
		lowpriority: true,
		nonDirectional: true, noFlip: true,
		cueSfx: {
			Block: "Shield",
			Resist: "Shield",
			Damage: "Shield",
		},
		Sound: {
			baseAmount: 0,
			moveAmount: 0,
		},
		tags: KDMapInit(["obstacledoor", "shadow", "scenery", "minor", "inactive", "nonvulnerable", "unstoppable", "immobile", "nobrain", "nosignal", "poisonimmune", "temporary",
			"soulimmune", "meleeresist", "fireweakness", "glueresist", "coldimmune", "tickleresist", "groperesist", "painresist", "charmimmune", "shadowHands", "ghost",
		]), spellResist: 1, sneakThreshold: 0.01,
		evasion: -1, ignorechance: 1.0, armor: 0, followRange: 1, AI: "ambush", ambushRadius: 0, difficulty: -0.05, regen: 0.25,
		visionRadius: 0, maxhp: 7, minLevel:0, weight:-15, movePoints: 99999, attackPoints: 4, attack: "MeleeBindWillSuicide", attackWidth: 8, attackRange: 1, power: 2, dmgType: "cold",
		terrainTags: {"obstacle": 4, "obstacletile": 8, "shadow": 18}, allFloors: true, shrines: [],
		events: [
			{trigger: "enemyMove", type: "damageOnMove", power: 1, mult: 0.25},
		],
	},


	{name: "BarricadeAir", faction: "Elemental", color: "#ffffff",
		lowpriority: true,
		nonDirectional: true, noFlip: true,
		effect: {
			effect: {name: "PushAway", damage: "stun", power: 1, dist: 1},
		},
		Sound: {
			baseAmount: 4.5,
			moveAmount: 0,
		},
		Resistance: {
			profile: ["construct"],
		},
		tags: KDMapInit(["scenery", "minor", "inactive", "nonvulnerable", "unstoppable", "immobile", "nobrain", "nosignal", "air", "temporary",
			"poisonimmune", "soulimmune", "meleeresist", "pierceimmune", "stunweakness", "glueweakness", "tickleresist", "groperesist", "painresist", "charmimmune",
		]),
		spellResist: 0, armor: 0,
		sneakThreshold: 0.01,
		evasion: 1.5, ignorechance: 1.0, followRange: 1, AI: "ambush", ambushRadius: 0, difficulty: -0.05, regen: 0.75,
		visionRadius: 0, maxhp: 8, minLevel:0, weight:-10, movePoints: 99999, attackPoints: 4, attack: "MeleeEffect", attackWidth: 8, attackRange: 1, power: 2, dmgType: "stun",
		terrainTags: {}, allFloors: false, shrines: ["Elements"],
		events: [
			{trigger: "afterEnemyTick", type: "requireNearbyEnemyTag", power: 1.25, dist: 4.5, tags: ["air"]},
		],
	},
	{name: "BarricadeElectric", faction: "Elemental", color: "#ffff00",
		lowpriority: true,
		nonDirectional: true, noFlip: true,
		effect: {
			effect: {name: "Shock", time: 2, power: 2.5},
		},
		Sound: {
			baseAmount: 3,
			moveAmount: 0,
		},
		Resistance: {
			profile: ["construct"],
		},
		tags: KDMapInit(["scenery", "minor", "inactive", "nonvulnerable", "unstoppable", "immobile", "nobrain", "nosignal", "electric", "temporary",
			"poisonimmune", "soulimmune", "electricresist", "crushweakness", "acidweakness", "iceweakness", "glueweakness", "tickleresist", "groperesist", "painresist", "charmimmune",
		]),
		spellResist: 0, armor: 2,
		sneakThreshold: 0.01,
		evasion: -9, ignorechance: 1.0, followRange: 3.5, AI: "ambush", ambushRadius: 0, difficulty: -0.05, regen: 0.05,
		visionRadius: 3.5, maxhp: 15, minLevel:0, weight:-10, movePoints: 99999, attackPoints: 4, attack: "MeleeEffect", attackWidth: 1.25, attackRange: 3.5, power: 2.5, dmgType: "electric",
		terrainTags: {}, allFloors: false, shrines: ["Elements"],
		events: [
			{trigger: "afterEnemyTick", type: "requireNearbyEnemyTag", power: 0.5, dist: 4.5, tags: ["electric"]},
		],
	},


	{name: "BarricadeFire", faction: "Elemental", color: "#ffff00",
		lowpriority: true,
		nonDirectional: true, noFlip: true,
		Sound: {
			baseAmount: 1,
			moveAmount: 0,
		},
		Resistance: {
			profile: ["construct"],
		},
		tags: KDMapInit(["scenery", "minor", "inactive", "nonvulnerable", "unstoppable", "immobile", "nobrain", "nosignal", "fire", "temporary",
			"poisonimmune", "soulimmune", "fireimmune", "pierceresist", "acidsevereweakness", "iceweakness", "glueweakness", "tickleresist", "groperesist", "painresist", "charmimmune",
		]),
		spellResist: 1, armor: 2,
		sneakThreshold: 0.01,
		evasion: -9, ignorechance: 1.0, followRange: 3.5, AI: "ambush", ambushRadius: 0, difficulty: -0.05, regen: 0.05,
		visionRadius: 3.5, maxhp: 15, minLevel:0, weight:-10, movePoints: 99999, attackPoints: 4, attack: "", attackWidth: 1.25, attackRange: 1, power: 1, dmgType: "fire",
		terrainTags: {}, allFloors: false, shrines: ["Elements"],
		events: [
			{trigger: "afterEnemyTick", type: "requireNearbyEnemyTag", power: 0.5, dist: 5.5, tags: ["fire"]},
			{trigger: "afterPlayerAttack", type: "spellReflect", spell: "Fireexp", time: 1},
			{trigger: "hit", type: "spellReflect", spell: "Fireexp", time: 1},
		],
	},


	{name: "BarricadeEarth", faction: "Elemental", color: "#ff8933",
		lowpriority: true,
		nonDirectional: true, noFlip: true,
		Sound: {
			baseAmount: 0,
			moveAmount: 0,
		},
		Resistance: {
			profile: ["construct"],
		},
		tags: KDMapInit(["scenery", "minor", "inactive", "nonvulnerable", "unstoppable", "immobile", "nobrain", "nosignal", "earth", "temporary",
			"poisonimmune", "soulimmune", "crushweakness", "meleeresist", "chainweakness", "stunweakness", "tickleresist", "groperesist", "painresist", "charmimmune",
		]),
		spellResist: 0, armor: 1,
		sneakThreshold: 0.01,
		evasion: -9, ignorechance: 1.0, followRange: 2.5, AI: "ambush", ambushRadius: 0, difficulty: -0.05, regen: 0.05,
		spells: ["GravityPullEarth"], spellCooldownMult: 1.3, spellCooldownMod: 0, stopToCast: true, castWhileMoving: true, selfCast: {GravityPullEarth: true},
		visionRadius: 2.5, maxhp: 12, minLevel:0, weight:-10, movePoints: 99999, attackPoints: 4, attack: "Spell", attackWidth: 8, attackRange: 1, power: 3, dmgType: "crush",
		terrainTags: {}, allFloors: false, shrines: ["Elements"],
		events: [
			{trigger: "afterEnemyTick", type: "requireNearbyEnemyTag", power: 0.5, dist: 4.5, tags: ["earth", "gravity"]},
		],
	},

	{name: "BarricadeIce", faction: "Elemental", color: "#8899ff",
		lowpriority: true,
		nonDirectional: true, noFlip: true,
		Sound: {
			baseAmount: 0,
			moveAmount: 0,
		},
		Resistance: {
			profile: ["construct"],
		},
		tags: KDMapInit(["scenery", "minor", "inactive", "nonvulnerable", "unstoppable", "immobile", "nobrain", "nosignal", "ice", "temporary",
			"poisonimmune", "soulimmune", "crushweakness", "iceimmune", "fireweakness", "stunweakness", "tickleresist", "groperesist", "painresist", "charmimmune",
		]),
		spellResist: 0, armor: 1,
		sneakThreshold: 0.01,
		evasion: -9, ignorechance: 1.0, followRange: 2.5, AI: "ambush", ambushRadius: 0, difficulty: -0.05, regen: 0.05,
		visionRadius: 2.5, maxhp: 12, minLevel:0, weight:-10, movePoints: 99999, attackPoints: 4, attack: "", attackWidth: 8, attackRange: 1, power: 3, dmgType: "ice",
		terrainTags: {}, allFloors: false, shrines: ["Elements"],
		events: [
			{trigger: "afterEnemyTick", type: "createIce", power: 1, chance: 1.0, aoe: 2.5},
			{trigger: "afterEnemyTick", type: "requireNearbyEnemyTag", power: 0.5, dist: 4.5, tags: ["ice"]},
		],
	},

	{name: "BarricadeWater", faction: "Elemental", color: "#4fa4b8",
		lowpriority: true,
		nonDirectional: true, noFlip: true,
		Sound: {
			baseAmount: 0,
			moveAmount: 0,
		},
		Resistance: {
			profile: ["construct"],
		},
		tags: KDMapInit(["scenery", "minor", "inactive", "nonvulnerable", "unstoppable", "immobile", "nobrain", "nosignal", "water", "temporary",
			"poisonweakness", "iceweakness", "soulimmune", "fireresist", "meleeresist", "pierceimmune", "acidimmune", "glueweakness", "tickleresist", "groperesist", "painresist", "charmimmune",
		]),
		spellResist: 0, armor: 0,
		sneakThreshold: 0.01,
		evasion: 1.5, ignorechance: 1.0, followRange: 1, AI: "ambush", ambushRadius: 0, difficulty: -0.05, regen: 2,
		visionRadius: 0, maxhp: 5, minLevel:0, weight:-10, movePoints: 99999, attackPoints: 4, attack: "", attackWidth: 8, attackRange: 1, power: 2, dmgType: "stun",
		terrainTags: {}, allFloors: false, shrines: ["Elements"],
		events: [
			{trigger: "afterEnemyTick", type: "bubbleBarrier", power: 2, chance: 1.0, aoe: 1.5, always: true,},
			{trigger: "afterEnemyTick", type: "requireNearbyEnemyTag", power: 2.5, dist: 4.5, tags: ["water"]},
		],
	},

	{name: "StoneDoor", faction: "Door", blockVision: true,
		lowpriority: true,
		cueSfx: {
			Block: "Clang",
			Resist: "Clang",
			Damage: "ArmorHit",
		},
		Sound: {
			baseAmount: 0,
		},
		GFX: {
			lighting: true,
		},
		tags: KDMapInit(["obstacledoor", "scenery", "minor", "inactive", "nonvulnerable", "unstoppable", "immobile", "nobrain", "nosignal", "poisonimmune", "harmless",
			"soulimmune", "slashresist", "pierceresist", "electricresist", "crushweakness", "unarmedresist", "chainimmune", "glueresist", "acidresist", "tickleresist", "groperesist", "painresist", "charmimmune",
		]), spellResist: 0, sneakThreshold: 0.01,
		evasion: -9, ignorechance: 1.0, armor: 3, followRange: 1, AI: "ambush", ambushRadius: 0, difficulty: -0.05, immobile: true,
		visionRadius: 0, maxhp: 10, minLevel:0, weight:-4, movePoints: 99999, attackPoints: 4, attack: "", attackWidth: 8, attackRange: 3, power: 1, dmgType: "souldrain",
		terrainTags: {"obstacle": 10, "obstacletile": 50}, allFloors: true, shrines: [],
		events: [
			{trigger: "duringDamageEnemy", type: "damageThreshold", power: 1, chance: 1.0},
		],
	},
	{name: "SteelDoor", faction: "Door", blockVision: true,
		lowpriority: true,
		cueSfx: {
			Block: "Clang",
			Resist: "Clang",
			Damage: "ArmorHit",
		},
		Sound: {
			baseAmount: 0,
		},
		GFX: {
			lighting: true,
		},
		tags: KDMapInit(["obstacledoor", "steeldoor", "scenery", "minor", "inactive", "nonvulnerable", "unstoppable", "immobile", "nobrain", "nosignal", "poisonimmune", "harmless",
			"soulimmune", "slashresist", "pierceresist", "electricimmune", "unarmedresist", "chainimmune", "glueresist", "tickleresist", "groperesist", "painresist", "charmimmune",
		]), spellResist: 1, sneakThreshold: 0.01,
		evasion: -9, ignorechance: 1.0, armor: 5, followRange: 1, AI: "ambush", ambushRadius: 0, difficulty: -0.05, immobile: true,
		visionRadius: 0, maxhp: 15, minLevel:9, weight:-4, movePoints: 99999, attackPoints: 4, attack: "", attackWidth: 8, attackRange: 3, power: 1, dmgType: "souldrain",
		terrainTags: {"obstacle": 10, "obstacletile": 30}, allFloors: true, shrines: [],
		events: [
			{trigger: "duringDamageEnemy", type: "damageThreshold", power: 1, chance: 1.0},
		],
	},
	{name: "DollDoor", faction: "Door", blockVision: true,
		lowpriority: true,
		cueSfx: {
			Block: "Clang",
			Resist: "Clang",
			Damage: "ArmorHit",
		},
		Sound: {
			baseAmount: 0,
		},
		GFX: {
			lighting: true,
		},
		tags: KDMapInit(["dolldoor", "scenery", "minor", "inactive", "nonvulnerable", "unstoppable", "immobile", "nobrain", "nosignal", "poisonimmune", "harmless",
			"soulimmune", "slashresist", "pierceresist", "electricimmune", "unarmedresist", "chainimmune", "glueresist", "tickleresist", "groperesist", "painresist", "charmimmune",
		]), spellResist: 5, armor: 5, sneakThreshold: 0.01,
		evasion: -9, ignorechance: 1.0, followRange: 1, AI: "ambush", ambushRadius: 0, difficulty: -0.05, immobile: true,
		visionRadius: 0, maxhp: 60, minLevel:0, weight:-100, movePoints: 99999, attackPoints: 4, attack: "", attackWidth: 8, attackRange: 3, power: 1, dmgType: "souldrain",
		terrainTags: {dolldoor: 200}, allFloors: true, shrines: [],
		events: [
			{trigger: "duringDamageEnemy", type: "damageThreshold", power: 1, chance: 1.0},
		],
	},

	{name: "GiantMushroom", faction: "Natural", clusterWith: "mushroom", tags: KDMapInit(["mushroom", "scenery", "nonvulnerable", "minor", "inactive", "harmless", "immobile", "unstoppable", "soulimmune", "slashweakness", "fireweakness", "glueresist", "poisonimmune", "coldweakness"]), spellResist: 0.33, sneakThreshold: 0.01,
		lowpriority: true,
		evasion: -9, ignorechance: 1.0, armor: 0, followRange: 1, AI: "ambush", ambushRadius: 0, difficulty: -0.05, immobile: true,
		visionRadius: 0, maxhp: 1, minLevel:0, weight:5, movePoints: 99999, attackPoints: 4, attack: "", attackWidth: 8, attackRange: 3, power: 1, dmgType: "souldrain",
		terrainTags: {}, floors:KDMapInit(["cry", "jng"]), shrines: ["Will"], ondeath: [{type: "spellOnSelf", spell: "Spores"}],
		Sound: {
			baseAmount: 0.5,
		},
		GFX: {
			lighting: true,
		},
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Slime", aoe: 1.5, power: 1, chance: 1.0},
		],},
	{name: "Toad", faction: "Beast", clusterWith: "beast", color: "#00FF44", tags: KDMapInit(["ignorenoSP", "beast", "soulresist", "ranged", "pierceweakness", "electricsevereweakness", "acidresist"]), followLeashedOnly: true, armor: 1, followRange: 1, AI: "hunt",
		pullTowardSelf: true, pullDist: 3, master: {type: "GiantMushroom", range: 3}, projectileAttack: true, projectileTargeting: true,
		evasion: -0.4,
		visionRadius: 5, maxhp: 16, minLevel:0, weight:7, movePoints: 2, attackPoints: 3, attack: "MeleePullWill", attackRange: 5, attackWidth: 1, power: 2, strictAttackLOS: true, dmgType: "tickle",
		terrainTags: {"increasingWeight":2, "secondhalf":3, }, floors:KDMapInit(["cry"]), dropTable: [{name: "Nothing", weight: 12}, {name: "WaterRune", weight: 3}]},
	{name: "Mushy", faction: "Mushy", clusterWith: "mushroom", color: "#4fa4b8", difficulty: 0.2,
		tags: KDMapInit(["leashing", "mushroom", "soulresist", "mushy", "melee", "minor", "slashweakness", "fireweakness", "glueresist", "poisonimmune", "coldweakness", "ropeMagicStrong", "ropeAuxiliary", "ropeRestraintsHogtie", "clothRestraints", "tapeRestraints"]),
		Animations: ["squishy"],
		squeeze: true, evasion: -0.5, followRange: 1, AI: "patrol", regen: 0.1,
		visionRadius: 5, maxhp: 8, minLevel: 4, weight:14, movePoints: 4, attackPoints: 2, attack: "MeleeBindBlindWill", blindTime: 2, attackWidth: 3, attackRange: 1, power: 2, dmgType: "poison", fullBoundBonus: 2,
		terrainTags: {"mushy": 10}, floors:KDMapInit(["cry"]), shrines: [], ondeath: [{type: "spellOnSelf", spell: "Spores"}],
		dropTable: [{name: "Gold", amountMin: 5, amountMax: 10, weight: 10}],
		attackLock: "White",
		stamina: 4,
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Slime", aoe: 1.5, power: 1, chance: 1.0},
		],},
	{name: "MushyHappy", clusterWith: "mushroom", color: "#4fa4b8", difficulty: 0.1,
		tags: KDMapInit(["ignorenoSP", "mushroom", "soulresist", "mushy", "melee", "minor", "slashweakness", "fireweakness", "glueresist", "poisonimmune", "coldweakness"]),
		Animations: ["squishy"],
		squeeze: true, evasion: -0.5, followRange: 1, AI: "hunt", regen: 0.1,
		spells: ["SporesHappy"], spellCooldownMult: 1, spellCooldownMod: 0, stopToCast: true, castWhileMoving: true,
		visionRadius: 5, maxhp: 8, minLevel: 7, weight:14, movePoints: 4, attackPoints: 2, attack: "SpellMeleeWillBlind", blindTime: 2, attackWidth: 1, attackRange: 1, power: 4, dmgType: "tickle", hitsfx: "Tickle",
		terrainTags: {"mushy": 10}, floors:KDMapInit(["cry"]), shrines: [], ondeath: [{type: "spellOnSelf", spell: "Spores"}],
		dropTable: [{name: "Gold", amountMin: 5, amountMax: 10, weight: 10}],
		stamina: 4,
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Slime", aoe: 1.5, power: 1, chance: 1.0},
			{trigger: "getLights", type: "enemyTorch", power: 4.5, color: "#ff44aa"},
		],},
	{name: "MushySick", clusterWith: "mushroom", color: "#4fa4b8", difficulty: 0.1,
		tags: KDMapInit(["ignorenoSP", "mushroom", "soulresist", "mushy", "melee", "minor", "slashweakness", "fireweakness", "glueresist", "poisonimmune", "coldweakness"]),
		Animations: ["squishy"],
		squeeze: true, evasion: -0.5, followRange: 1, AI: "hunt",
		spells: ["SporesSick"], spellCooldownMult: 1, spellCooldownMod: 0, stopToCast: true, castWhileMoving: true,
		visionRadius: 5, maxhp: 8, minLevel: 0, weight:4, movePoints: 4, attackPoints: 2, attack: "SpellMeleeWillBlind", blindTime: 2, attackWidth: 1, attackRange: 1, power: 2, dmgType: "crush",
		terrainTags: {"mushy": 17}, floors:KDMapInit(["cry", "cat"]), shrines: ["Will"], ondeath: [{type: "spellOnSelf", spell: "Spores"}],
		dropTable: [{name: "Gold", amountMin: 5, amountMax: 10, weight: 10}],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Slime", aoe: 1.5, power: 1, chance: 1.0},
			{trigger: "getLights", type: "enemyTorch", power: 4.5, color: "#00ff00"},
		],},

	{name: "Dragon", faction: "Dragon", playLine: "Adventurer_Brat_Fighter", clusterWith: "dragon", bound: "Dragon", color: "#F92900", tags: KDMapInit(["opendoors", "fire", "guardCall", "jailer", "leashing", "imprisonable", "minor", "dragon", "melee", "dragonRestraints", "handcuffer", "leatherRestraints", "fireresist", "jail", "jailer", "search"]), cohesion: 0.75,
		followLeashedOnly: true, ignorechance: 0, armor: 1, followRange: 1, AI: "hunt", guardChance: 0.6, master: {type: "DragonLeader", range: 4, loose: true, aggressive: true}, difficulty: 0.5,
		visionRadius: 6, maxhp: 9, minLevel:0, weight:-1, movePoints: 2, attackPoints: 2, attack: "MeleeBindLock", attackWidth: 1, attackRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 1, maxLevel: 7,
		terrainTags: {"secondhalf":2, "leatherAnger":3, "dragon": 30, "fire": 4}, shrines: ["Leather"], allFloors: true,
		attackLock: "White",
		stamina: 5,
		dropTable: [{name: "Gold", amountMin: 5, amountMax: 10, weight: 15}]},
	{name: "DragonShield", faction: "Dragon", clusterWith: "dragon", bound: "DragonShield", color: "#F92900", tags: KDMapInit(["opendoors", "guardCall", "fire", "imprisonable", "leashing", "dragon", "melee", "dragonRestraints", "handcuffer", "leatherRestraints", "fireresist", "jail", "jailer", "search"]), cohesion: 0.75,
		stunTime: 2, specialCD: 6, specialAttack: "Stun", specialRemove: "BindLock", specialPower: 6, specialDamage: "pain",
		spells: ["ArmorUpArea"], spellCooldownMult: 1, spellCooldownMod: 5, buffallies: true,
		followLeashedOnly: true, ignorechance: 0, armor: 1, followRange: 1, AI: "hunt", guardChance: 0.6, master: {type: "DragonLeader", range: 4, loose: true, aggressive: true},
		visionRadius: 7, maxhp: 13, minLevel:4, weight:-1, movePoints: 2, attackPoints: 2, attack: "SpellMeleeBindLock", attackWidth: 3, attackRange: 1, tilesMinRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 1,
		terrainTags: {"secondhalf":1, "thirdhalf":1, "leatherAnger":3, "leatherRage":4, "dragon": 25, "fire": 4}, shrines: ["Leather"], allFloors: true,
		attackLock: "White",
		stamina: 5,
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 15}]},
	{name: "DragonIce", faction: "Dragon", clusterWith: "dragon", bound: "DragonIce", color: "#aaaaff", tags: KDMapInit(["opendoors", "ice", "leashing", "dragon", "melee", "elite", "dragonRestraints", "handcuffer", "leatherRestraints", "iceimmune", "fireweakness", "crushweakness", "jail", "jailer", "hunter"]), cohesion: 0.75,
		followLeashedOnly: true, ignorechance: 0, armor: 2.0, followRange: 1, AI: "hunt", guardChance: 0.6, master: {type: "DragonLeader", range: 4, loose: true, aggressive: true},
		spells: ["IceDragonBreathPrepare"], spellCooldownMult: 1, spellCooldownMod: 3, spellRdy: true,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 3, color: "#00ffff"},
		],
		visionRadius: 7, maxhp: 14, minLevel:4, weight:-2, movePoints: 2, attackPoints: 2, attack: "SpellMeleeBindLockAll", attackWidth: 1, attackRange: 1, power: 3, dmgType: "grope", fullBoundBonus: 1,
		attackLock: "Purple",
		stamina: 5,
		terrainTags: {"secondhalf":2, "thirdhalf":2, "dragon": 16, "ice": 4}, shrines: ["Leather", "Elements"], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 20, amountMax: 30, weight: 12}, {name: "IceRune", weight: 3}, {name: "IceBreaker", weight: 0.1, ignoreInInventory: true}]},
	{name: "DragonPoison", faction: "Dragon", clusterWith: "dragon", bound: "DragonPoison", color: "#44ff77", tags: KDMapInit(["opendoors", "nature", "leashing", "imprisonable", "dragon", "melee", "elite", "dragonRestraints", "handcuffer", "leatherRestraints", "unflinching", "fireresist", "jail", "jailer", "hunter"]), cohesion: 0.75,
		followLeashedOnly: true, ignorechance: 0, armor: 0.5, followRange: 1, AI: "hunt", guardChance: 0.6, master: {type: "DragonLeader", range: 4, loose: true, aggressive: true},
		spells: ["PoisonDragonBlast", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 90, spellCooldownMult: 1, spellCooldownMod: -1, tilesMinRange: 2, stopToCast: true, spellRdy: true,
		visionRadius: 7, maxhp: 11, minLevel:6, weight:-2, movePoints: 3, attackPoints: 4, attack: "SpellMeleeStunWillLock", stunTime: 1, attackWidth: 3, attackRange: 2, power: 3, dmgType: "grope", fullBoundBonus: 2,
		terrainTags: {"secondhalf":2, "thirdhalf":2, "dragon": 16, "nature": 4}, shrines: ["Leather", "Will"], allFloors: true,
		attackLock: "Purple",
		stamina: 5,
		dropTable: [{name: "Gold", amountMin: 20, amountMax: 30, weight: 12}, {name: "Pick", weight: 4}, {name: "PotionStamina", weight: 3}]},
	{name: "DragonCrystal", faction: "Dragon", clusterWith: "dragon", bound: "DragonCrystal", color: "#ff00aa", tags: KDMapInit(["opendoors", "chaos", "crystal", "leashing", "dragon", "melee", "elite", "dragonRestraints", "handcuffer", "leatherRestraints", "leatherRestraintsHeavy", "pierceweakness", "electricresist", "crushweakness", "fireresist", "jail", "jailer", "hunter"]), cohesion: 0.75,
		followLeashedOnly: true, ignorechance: 0, armor: 1.5, followRange: 1, AI: "hunt", guardChance: 0.6, master: {type: "DragonLeader", range: 4, loose: true, aggressive: true},
		spells: ["SummonCrystals"], spellCooldownMult: 1, spellCooldownMod: 2, castWhileMoving: true, spellRdy: true,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 4.5, color: "#ff44aa"},
		],
		visionRadius: 7, maxhp: 10, minLevel:7, weight:-1, movePoints: 1.5, attackPoints: 2, attack: "SpellMeleeBindLockWill", stunTime: 1, attackWidth: 1, attackRange: 1, power: 3, dmgType: "crush", fullBoundBonus: 2,
		terrainTags: {"secondhalf":1, "thirdhalf":2, "crystalline": 10, "dragon": 13}, shrines: ["Leather", "Conjure"], allFloors: true,
		attackLock: "White",
		stamina: 5,
		dropTable: [{name: "Gold", amountMin: 20, amountMax: 30, weight: 15}, {name: "EarthRune", weight: 3}]},
	{name: "DragonShadow", faction: "Dragon", clusterWith: "dragon", bound: "DragonShadow", color: "#4400ff",
		tags: KDMapInit(["opendoors", "shadow", "chaos", "leashing", "dragon", "melee", "elite", "dragonRestraints", "handcuffer", "shadowRestraints", "coldimmune", "fireresist", "jail", "jailer", "hunter"]),
		cohesion: 0.75,
		followLeashedOnly: true, ignorechance: 0, armor: 0.5, followRange: 1, AI: "hunt", guardChance: 0.6, master: {type: "DragonLeader", range: 4, loose: true, aggressive: true},
		spells: ["ShadowOrb"],  spellCooldownMult: 1, spellCooldownMod: 0, pullTowardSelf: true, pullDist: 3, disarm: 0.4,
		specialCD: 7, specialAttack: "Pull", specialCDonAttack: true, specialAttackPoints: 2, specialRange: 4, specialsfx: "MagicSlash",
		visionRadius: 7, maxhp: 15, minLevel:9, weight:-1, movePoints: 2, attackPoints: 2, attack: "SpellMeleeWillLock", stunTime: 3, attackWidth: 1, attackRange: 1, power: 3, dmgType: "grope", fullBoundBonus: 2,
		terrainTags: {"secondhalf":1, "thirdhalf":2, "dragon": 13, "shadow": 4}, shrines: ["Leather", "Conjure"], allFloors: true,
		attackLock: "Purple",
		stamina: 5,
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}, {name: "Knife", ignoreInInventory: true, weight: 4}]},
	{name: "DragonLeader", faction: "Dragon", clusterWith: "dragon", bound: "DragonLeader", color: "#F92900", tags: KDMapInit(["opendoors", "antiMagic", "fire", "leashing", "dragon", "melee", "boss", "dragonRestraints", "unflinching", "handcuffer", "leatherRestraints", "leatherRestraintsHeavy", "jailer", "fireimmune"]),
		ignorechance: 0, armor: 1, followRange: 1, AI: "patrol", focusPlayer: true,
		summon: [
			{enemy: "Dragon", range: 2, count: 2, chance: 0.4, strict: true},
			{enemy: "DragonIce", range: 3, count: 1, chance: 0.25, strict: true},
			{enemy: "DragonPoison", range: 3, count: 1, chance: 0.25, strict: true},
			{enemy: "DragonCrystal", range: 3, count: 1, chance: 0.25, strict: true},
			{enemy: "DragonShadow", range: 3, count: 1, chance: 0.25, strict: true},],
		specialCD: 5, specialAttack: "Dash", specialRemove: "BindLockWill", specialCDonAttack: true, specialAttackPoints: 1, specialRange: 3, specialMinrange: 1.5, specialsfx: "Miss",
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 3, color: "#ff5555"},
		],
		stamina: 8,
		sprintspeed: 1.25,
		visionRadius: 8, maxhp: 18, minLevel:4, weight:-11, movePoints: 2, attackPoints: 2, attack: "MeleeBindLockWill", attackWidth: 1, attackRange: 1, power: 4, dmgType: "crush", fullBoundBonus: 2,
		terrainTags: {"secondhalf":2, "thirdhalf":4, "open": 10, "fire": 4, "leatherAnger":6, "leatherRage":30, "boss": -55, "increasingWeight":0.5, "dragon": 5}, shrines: ["Leather"], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 30, amountMax: 40, weight: 10}, {name: "Sword", ignoreInInventory: true, weight: 100}, {name: "EnchKnife", ignoreInInventory: true, weight: 1}]},

	{name: "Adventurer_Brat_Fighter", clusterWith: "adventurer", bound: "Adventurer_Brat", color: "#ffffff",
		playLine: "Adventurer_Brat_Fighter",
		tags: KDMapInit(["opendoors", "elite", "imprisonable", "leashing", "adventurer", "human", "melee", "ropeRestraints", "ropeRestraintsHogtie", "charmweakness", "jail", "jailer", "brat", "search"]), cohesion: 0.9,
		stunTime: 2, specialCD: 5, specialAttack: "Stun", specialRemove: "BindLock", specialPower: 6, specialDamage: "pain",
		evasion: -0.5,
		spells: ["RopeEngulfWeak", "WitchRope"], spellCooldownMult: 2, spellCooldownMod: 1, buffallies: true,
		followLeashedOnly: true, ignorechance: 0, armor: 3, followRange: 1, AI: "hunt", guardChance: 0.0,
		visionRadius: 8, maxhp: 20, minLevel:2, weight:1, movePoints: 2.0, attackPoints: 2, attack: "SpellMeleeWillBindLock",
		attackWidth: 1, attackRange: 1, tilesMinRange: 1, power: 3, dmgType: "pain", fullBoundBonus: 1,
		stamina: 5,
		events: [
			{trigger: "tick", type: "AdventurerAssignFaction", dist: 4.0, tags: ["Adventurer", "Bandit", "Nevermere", "Bountyhunter", "Dragon"]},
		],
		terrainTags: {"adventurer": 10, "lair": -10, "brat": 50}, shrines: ["Rope"], allFloors: true, // Adventurers don't appear in lairs
		dropTable: [{name: "Gold", amountMin: 20, amountMax: 40, weight: 15}, {name: "Axe", ignoreInInventory: true, weight: 100}, {name: "MagicAxe", ignoreInInventory: true, weight: 1}, {name: "Breastplate", ignoreInInventory: true, weight: 200}]},

	{name: "Adventurer_Dom_Fighter", clusterWith: "adventurer", bound: "Adventurer_Dom", color: "#ffffff",
		playLine: "Adventurer_Dom_Fighter",
		Resistance: {
			profile: ["catgirl"],
		},
		tags: KDMapInit(["opendoors", "elite", "imprisonable", "leashing", "adventurer", "human", "melee", "latexRestraints", "soulweakness", "jail", "jailer", "dom", "search"]), cohesion: 0.9,
		stunTime: 2, specialCD: 7, specialAttack: "Dash", specialRemove: "WillBindLock", specialPower: 6, specialDamage: "pain",
		specialAttackPoints: 1, specialRange: 3.5, specialMinrange: 2.4, specialsfx: "Miss", castWhileMoving: true, dashThruWalls: true, dashThrough: true,
		bindOnDisable: true,
		smartBind: true,
		evasion: 0.4, disarm: 0.4,
		followLeashedOnly: true, ignorechance: 0, armor: 1.5, followRange: 1, AI: "hunt", guardChance: 0.0,
		visionRadius: 8, maxhp: 17, minLevel:5, weight:1, movePoints: 1.4, attackPoints: 2, attack: "MeleeWillBindLock",
		attackWidth: 1, attackRange: 2.5, tilesMinRange: 1, power: 2, dmgType: "pain", fullBoundBonus: 2,
		stamina: 7,
		events: [
			{trigger: "tick", type: "AdventurerAssignFaction", dist: 4.0, tags: ["Adventurer", "Bandit", "Maidforce", "Bountyhunter", "Bast"]},
		],
		terrainTags: {"adventurer": 10, "lair": -10, "dom": 50}, shrines: ["Latex"], allFloors: true, // Adventurers don't appear in lairs
		dropTable: [{name: "Gold", amountMin: 20, amountMax: 40, weight: 15}, {name: "Foil", ignoreInInventory: true, weight: 100}, {name: "Rapier", ignoreInInventory: true, weight: 100}, {name: "Dirk", ignoreInInventory: true, weight: 100}, {name: "Bracers", ignoreInInventory: true, weight: 200}]},

	{name: "Adventurer_Switch_Fighter", clusterWith: "adventurer", bound: "Adventurer_Switch", color: "#ffffff",
		playLine: "Adventurer_Switch_Fighter",
		armor: 1.0,
		tags: KDMapInit(["opendoors", "elite", "imprisonable", "leashing", "adventurer", "human", "melee", "mithrilRestraints", "gropeweakness", "jail", "jailer", "switch", "search"]), cohesion: 0.9,
		specialCD: 6, specialAttack: "Bind", specialRemove: "Lock", specialCDonAttack: true, strictAttackLOS: true, specialDamage: "chain",
		specialRange: 4, projectileTargeting: true, specialWidth: 1, ignoreStaminaForBinds: true,
		evasion: 0.2, kite: 1.5,
		spells: ["ArmorUpArea"], spellCooldownMult: 2, spellCooldownMod: 1, buffallies: true,
		followLeashedOnly: true, ignorechance: 0, spellResist: 1.5, followRange: 2.5, AI: "hunt", guardChance: 0.0,
		visionRadius: 8, maxhp: 15, minLevel:3, weight:1, movePoints: 2.4, attackPoints: 3, attack: "SpellMeleeWillBindLock",
		attackWidth: 3, attackRange: 1, tilesMinRange: 1, power: 3, dmgType: "chain", fullBoundBonus: 1,
		stamina: 3,
		events: [
			{trigger: "tick", type: "AdventurerAssignFaction", dist: 4.0, tags: ["Adventurer", "Bandit", "Nevermere", "Bountyhunter", "Alchemist"]},
		],
		terrainTags: {"adventurer": 10, "lair": -10, "switch": 50}, shrines: ["Metal"], allFloors: true, // Adventurers don't appear in lairs
		dropTable: [{name: "Gold", amountMin: 20, amountMax: 40, weight: 15}, {name: "ManaOrb", weight: 30}, {name: "PotionStamina", weight: 10}, {name: "LeatherBoots", ignoreInInventory: true, weight: 200}]},

	{name: "Adventurer_Sub_Fighter", clusterWith: "adventurer", bound: "Adventurer_Sub", color: "#ffffff",
		playLine: "Adventurer_Sub_Fighter",
		tags: KDMapInit(["opendoors", "elite", "imprisonable", "leashing", "adventurer", "human", "melee", "leatherRestraints", "leatherRestraintsHeavy", "painweakness", "jail", "jailer", "sub", "search"]), cohesion: 0.9,
		stunTime: 2, specialCD: 10, specialAttack: "StunDash", specialRemove: "WillBindLock", specialPower: 6, specialDamage: "cold",
		specialAttackPoints: 3, specialRange: 6,
		evasion: -0.1, disarm: 0.2,
		stamina: 4,
		spells: ["ShadowOrb"], spellCooldownMult: 2, spellCooldownMod: 1,
		followLeashedOnly: true, ignorechance: 0, spellResist: 2.0, followRange: 1, AI: "hunt", guardChance: 0.0,
		visionRadius: 8, maxhp: 30, minLevel:6, weight:1, movePoints: 1.8, attackPoints: 2, attack: "SpellMeleeWillBindLock",
		attackWidth: 1, attackRange: 1, tilesMinRange: 1, power: 3, dmgType: "grope", fullBoundBonus: 1,
		events: [
			{trigger: "tick", type: "AdventurerAssignFaction", dist: 4.0, tags: ["Adventurer", "Bandit", "Nevermere", "Bountyhunter", "Elf"]},
		],
		terrainTags: {"adventurer": 10, "lair": -10, "sub": 50}, shrines: ["Leather"], allFloors: true, // Adventurers don't appear in lairs
		dropTable: [{name: "Gold", amountMin: 20, amountMax: 40, weight: 15}, {name: "Spear", ignoreInInventory: true, weight: 100}, {name: "MagicSpear", ignoreInInventory: true, weight: 1}, {name: "ElfCrystal", weight: 5}]},

	{name: "ElementalFire", faction: "Elemental", playLine: "Elemental", clusterWith: "fire", bound: "ElementalFire", color: "#FF6200", tags: KDMapInit(["opendoors", "imprisonable", "fire", "guardCall", "elemental", "fireimmune", "ranged", "coldweakness", "icesevereweakness", "obsidianRestraints", "shackleRestraints", "leashing", "jail", "jailer", "search"]),
		armor: 0.5, kite: 1.5, followRange: 3, AI: "hunt",
		spells: ["HeatBolt"], spellCooldownMult: 1, spellCooldownMod: 1, followLeashedOnly: true, stopToCast: true, spellRdy: true, projectileTargeting: true,
		visionRadius: 7, maxhp: 8, minLevel:0, weight:-1, movePoints: 1.5, attackPoints: 3, attack: "SpellMeleeWillBindLock", attackWidth: 1, attackRange: 1, power: 2, dmgType: "pain", fullBoundBonus: 2,
		terrainTags: {"secondhalf":2, "thirdhalf":1, "open": 1, "elementsAnger": 12, "elementsRage": 6, "temple": 5, "elemental": 6}, allFloors: true, shrines: ["Elements", "Metal"],
		attackLock: "White",
		RestraintFilter: {
			bonusRestraints: 1,
			requiredItems: ["ObsidianArmCuffs"],
		},
		dropTable: [{name: "Gold", amountMin: 5, amountMax: 10, weight: 10}, {name: "Gunpowder", weight: 1}],
		events: [
			{trigger: "afterEnemyTick", type: "createEffectTile", kind: "Ember", time: 3, power: 2, chance: 0.2, aoe: 1.5},
			{trigger: "getLights", type: "enemyTorch", power: 5.5, color: "#ff8933"}],
	},
	/*{name: "KeeperFire", faction: "Elemental", playLine: "Elemental", clusterWith: "fire", bound: "ElementalFire", color: "#FF6200",
		tags: KDMapInit(["opendoors", "miniboss",
			"imprisonable", "fire", "guardCall", "elemental", "fireimmune", "ranged", "coldweakness", "icesevereweakness", "obsidianRestraints", "shackleRestraints", "leashing", "jail", "jailer", "search"]),
		armor: 0.5, kite: 1.5, followRange: 3, AI: "hunt",
		spells: ["FlameDash"], spellCooldownMult: 1, spellCooldownMod: 0, followLeashedOnly: true, stopToCast: true, spellRdy: true, projectileTargeting: true,
		visionRadius: 6.5, maxhp: 8, minLevel:0, weight:-1, movePoints: 1.5, attackPoints: 2, attack: "SpellMeleeWillBindLockEffect", attackWidth: 1.5, attackRange: 1, power: 2, dmgType: "pain", fullBoundBonus: 2,
		terrainTags: {"secondhalf":2, "thirdhalf":1, "open": 1, "elementsAnger": 12, "elementsRage": 6, "temple": 5, "elemental": 6}, allFloors: true, shrines: ["Elements", "Metal"],
		attackLock: "Purple",
		RestraintFilter: {
			bonusRestraints: 1,
			requiredItems: ["ObsidianArmCuffs", "ObsidianAnkleCuffs", "ObsidianLegCuffs"],
		},
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}, {name: "Gunpowder", amount: 3, weight: 5}],
		events: [
			{trigger: "afterEnemyTick", type: "createEffectTile", kind: "Ember", time: 3, power: 2, chance: 0.2, aoe: 1.5},
			{trigger: "getLights", type: "enemyTorch", power: 5.5, color: "#ff8933"},
			{trigger: "hit", type: "castSpell", time: 3, spell: "FlameKeeperBlade", color: "#ff8933"},
			{trigger: "miss", type: "castSpell", time: 3, spell: "FlameKeeperBlade", color: "#ff8933"},
		],
	},*/
	{name: "ElementalIce", faction: "Elemental", playLine: "Elemental", clusterWith: "ice", bound: "ElementalIce", color: "#aaaaff", tags: KDMapInit(["opendoors", "antiMagic", "imprisonable", "elemental", "guardCall", "ice", "ranged", "firesevereweakness", "crushweakness", "coldresist", "iceimmune", "iceRestraints", "leashing", "jail", "jailer", "search"]),
		armor: 1.5, kite: 1.5, followRange: 3, AI: "hunt",
		spells: ["IceSlowPrepare"], spellCooldownMult: 1, spellCooldownMod: 1, followLeashedOnly: true, noSpellLeashing: true, spellRdy: true, projectileTargeting: true,
		visionRadius: 7, maxhp: 8, minLevel:3, weight:-2, movePoints: 1.5, attackPoints: 3, attack: "SpellMeleeWillBindLockAll", attackWidth: 1, attackRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 2, multiBind: 2,
		terrainTags: {"secondhalf":1, "thirdhalf":1, "open": 1, "elementsAnger": 8, "elementsRage": 3, "temple": 6, "elemental": 6, "ice": 4}, allFloors: true, shrines: ["Elements"], attackLock: "Purple",
		RestraintFilter: {
			unlimitedRestraints: true,
		},
		events: [
			{trigger: "afterEnemyTick", type: "createIce", power: 1, chance: 1.0, aoe: 1.0},
			{trigger: "getLights", type: "enemyTorch", power: 3.5, color: "#00ffff"},
		],
		dropTable: [{name: "Gold", amountMin: 5, amountMax: 10, weight: 10}, {name: "IceRune", weight: 1}, {name: "IceBreaker", weight: 0.1, ignoreInInventory: true}]},
	{name: "ElementalWater", faction: "Elemental", playLine: "Elemental", clusterWith: "ice", bound: "ElementalWater", color: "#57ff88", tags: KDMapInit(["opendoors", "antiMagic", "water", "elemental", "ranged", "fireresist", "acidimmune", "electricsevereweakness", "latexRestraints", "ropeRestraints", "elite", "leashing", "jail", "jailer", "hunter"]),
		armor: 0, kite: 1.5, followRange: 3, AI: "hunt", guardChance: 0.6, evasion: 0.25, summon: [{enemy: "ElementalIce", range: 2.5, count: 1, chance: 0.6, strict: true}],
		specialCD: 5, specialAttack: "PullWill", specialCDonAttack: true, specialAttackPoints: 4, specialRange: 4, specialWidth: 3, specialMinrange: 1.5, specialsfx: "Song", hitsfx: "Song", tilesMinRangeSpecial: 2,
		visionRadius: 7, maxhp: 12, minLevel:3, weight:-2, movePoints: 1.5, followLeashedOnly: true, projectileTargeting: true,
		attackPoints: 3, attack: "MeleeBindLockAll", attackWidth: 3, attackRange: 1, power: 5, dmgType: "charm", pullTowardSelf: true, pullDist: 2, pullMsg: true,
		attackLock: "Purple",
		stamina: 5,
		RestraintFilter: {
			bonusRestraints: 1,
			requiredItems: ["LatexArmbinder", "LatexStraitjacket", "LatexBoxbinder"],
		},
		terrainTags: {"secondhalf":1, "thirdhalf":1, "open": 1, "elementsAnger": 8, "elementsRage": 3, "illusionAnger": 2, "latexAnger": 2, "temple": 5, "elemental": 4, "water": 4}, allFloors: true, shrines: ["Elements"],
		events: [{trigger: "afterEnemyTick", type: "createWater", power: 2, chance: 1.0, aoe: 0.5}],
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}, {name: "WaterRune", weight: 2}]},
	{name: "ElementalEarth", faction: "Elemental", playLine: "Elemental", clusterWith: "elemental", bound: "ElementalEarth", color: "#C1703A",
		tags: KDMapInit(["opendoors", "flying", "imprisonable", "elemental", "fireresist", "melee", "nofreeze", "earth", "miniboss", "electricimmune", "guardCall", "unflinching", "iceweakness", "unarmedresist", "slashresist", "pierceresist", "obsidianRestraints", "shackleRestraints", "leashing", "magicresist", "jail", "jailer", "hunter"]),
		armor: 2.0, followRange: 1, AI: "hunt",
		specialCD: 15, specialAttack: "Dash", specialRemove: "BindWill", specialCDonAttack: true, specialAttackPoints: 1, specialRange: 4, specialMinrange: 1.5, specialsfx: "Miss", castWhileMoving: true, dashThruWalls: true,
		spells: ["ArmorUp", "Earthfield",], spellCooldownMult: 1, spellCooldownMod: 14, followLeashedOnly: true, spellRdy: true,
		attackLock: "White",
		stamina: 4,
		RestraintFilter: {
			bonusRestraints: 2,
			requiredItems: ["LatexArmbinder", "LatexStraitjacket", "LatexBoxbinder"],
		},
		visionRadius: 7, maxhp: 16, minLevel:4, weight:-2, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLockWill", attackWidth: 3, attackRange: 1, power: 2, dmgType: "plush", fullBoundBonus: 2,
		terrainTags: {"secondhalf":1, "thirdhalf":2, "elementsAnger": 12, "elementsRage": 6, "temple": 6, "elemental": 4, "earth": 4}, allFloors: true, shrines: ["Elements", "Metal"],
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}, {name: "EarthRune", weight: 3}],
		events: [{trigger: "afterEnemyTick", type: "createEffectTile", kind: "Cracked", time: 10, power: 2, chance: 0.3, aoe: 0.5}],
	},
	{name: "KeeperEarth", faction: "Elemental", playLine: "Elemental", clusterWith: "elemental", bound: "ElementalEarth", color: "#C1703A",
		tags: KDMapInit(["opendoors", "flying", "imprisonable", "elemental", "fireresist", "melee", "nofreeze", "earth", "elite", "electricimmune", "guardCall", "unflinching", "iceweakness", "unarmedresist", "slashresist", "pierceresist", "obsidianRestraints", "shackleRestraints", "leashing", "magicresist", "jail", "jailer", "hunter"]),
		armor: 2.0, followRange: 3.5, AI: "hunt",
		effect: {
			effect: {name: "PushAway", damage: "crush", power: 1, dist: 2, msg: "KDKeeperKick"},
		},
		castWhileMoving: true, dontKiteWhenDisabled: true,
		specialCD: 15, specialAttack: "SlowEffect", specialRemove: "Bind", specialCDonAttack: true, specialWidth: 3, specialAttackPoints: 2, specialsfx: "HeavySwing",
		spells: ["WitchBoulder", "GravityPullEarth", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 30, specialDamage: "crush", spellCooldownMult: 1, spellCooldownMod: 0, followLeashedOnly: true,
		attackLock: "White",
		stamina: 4,
		RestraintFilter: {
			bonusRestraints: 2,
			requiredItems: ["LatexArmbinder", "LatexStraitjacket", "LatexBoxbinder"],
		},
		visionRadius: 8, kite: 1.5, maxhp: 10, minLevel:5, weight:-1, movePoints: 2.4, attackPoints: 3, attack: "SpellMeleeBindLockWill", attackWidth: 1.5, attackRange: 1, power: 2, dmgType: "plush", fullBoundBonus: 2,
		terrainTags: {"secondhalf":4, "thirdhalf":2, "elementsAnger": 8, "elementsRage": 9, "temple": 5, "elemental": 2, "earth": 3}, allFloors: true, shrines: ["Elements", "Metal"],
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}, {name: "EarthRune", weight: 5}],
		events: [{trigger: "afterEnemyTick", type: "createEffectTile", kind: "Cracked", time: 10, power: 2, chance: 0.3, aoe: 0.5}],
	},
	{name: "ElementalAir", faction: "Elemental", playLine: "Elemental", clusterWith: "electric", bound: "ElementalAir", color: "#88aaff", tags: KDMapInit(["opendoors", "air", "electric", "nofreeze", "elemental", "melee", "elite", "fireweakness", "electricresist", "coldweakness", "latexRestraints", "ropeRestraints", "leashing", "jail", "jailer", "hunter"]),
		armor: -1, followRange: 1, AI: "hunt", guardChance: 0.6, evasion: 0.5,
		specialCD: 5, specialAttack: "Dash", specialRemove: "Bind", specialCDonAttack: true, specialAttackPoints: 1, specialRange: 3, specialMinrange: 1.5, specialsfx: "Miss", castWhileMoving: true, dashThruWalls: true, dashThrough: true,
		spells: ["AreaElectrify"], spellCooldownMult: 1, spellCooldownMod: 3, followLeashedOnly: true, disarm: 1, noSpellLeashing: true, spellRdy: true, noChannel: true,
		attackLock: "White",
		RestraintFilter: {
			bonusRestraints: 2,
			requiredItems: ["ObsidianArmCuffs"],
		},
		stamina: 10,
		visionRadius: 7, maxhp: 12, minLevel:7, weight:-2, movePoints: 1.25, attackPoints: 2, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 3,
		terrainTags: {"secondhalf":1, "thirdhalf":2, "elementsAnger": 12, "elementsRage": 6, "temple": 5, "elemental": 4, "electric": 4, "air": 4}, allFloors: true, shrines: ["Elements", "Latex"],
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}]},

	{name: "Dryad", faction: "Elf", clusterWith: "nature", bound: "Dryad", playLine: "Dryad", color: "#67ff44", tags: KDMapInit(["opendoors", "nature", "elf", "leashing", "plant", "ranged", "vineRestraints", "slashweakness", "pierceweakness", "fireweakness", "search"]), cohesion: 0.0,
		followLeashedOnly: true, ignorechance: 0, armor: 0, followRange: 3, AI: "hunt",
		specialCD: 15, specialAttack: "Stun", specialRemove: "Bind", specialCDonAttack: true, specialAttackPoints: 2, specialRange: 4, specialWidth: 2, specialMinrange: 1.5, specialsfx: "Song", tilesMinRangeSpecial: 2, stunTime: 4,
		specialDamage: "charm", spellRdy: true,
		stamina: 3,
		spells: ["PoisonDragonBlast", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 90, spellCooldownMult: 1, spellCooldownMod: -2, tilesMinRange: 1, stopToCast: true, kite: 1.5,
		visionRadius: 6, maxhp: 10, minLevel:2, weight:-3, movePoints: 1.5, attackPoints: 3, attack: "SpellMeleeBind", attackWidth: 3, attackRange: 1, power: 2, dmgType: "tickle", fullBoundBonus: 2, hitsfx: "Tickle",
		terrainTags: {"secondhalf":1, "thirdhalf":2, "willAnger": 11, "willRage": -6, "elf": 5, "nature": 4}, shrines: ["Will"], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 12}, {name: "EarthRune", weight: 4}]},
	{name: "JungleDryad", faction: "Enemy", clusterWith: "nature", bound: "JungleDryad", playLine: "Dryad", color: "#67ff44", tags: KDMapInit(["opendoors", "nature", "elf", "leashing", "plant", "ranged", "vineRestraints", "slashweakness", "pierceweakness", "fireweakness", "search"]), cohesion: 0.0,
		followLeashedOnly: true, ignorechance: 0, armor: 0, followRange: 3, AI: "hunt",
		spellRdy: true,
		stamina: 3,
		spells: ["PoisonDragonBlast", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 90, spellCooldownMult: 1, spellCooldownMod: -2, tilesMinRange: 1, stopToCast: true, kite: 1.5,
		visionRadius: 6, maxhp: 10, minLevel:7, weight:5, movePoints: 1, attackPoints: 3, attack: "SpellMeleeBind", attackWidth: 3, attackRange: 1, power: 2, dmgType: "tickle", fullBoundBonus: 2, hitsfx: "Tickle",
		terrainTags: {"secondhalf":3, "thirdhalf":4}, shrines: ["Will"], floors:KDMapInit(["jng"]), noOverrideFloor: true,
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 12}, {name: "EarthRune", weight: 4}]},

	{name: "ElfRanger", faction: "Elf", clusterWith: "nature", bound: "ElfRanger", playLine: "Elf", color: "#67ff44", tags: KDMapInit(["opendoors", "guardCall", "leashing", "elf", "imprisonable", "ranged", "elite", "mithrilRope", "pierceweakness", "iceweakness", "chainresist", "jail", "jailer", "hunter"]), cohesion: 0.0,
		followLeashedOnly: true, ignorechance: 0, armor: 0.5, followRange: 3, AI: "hunt",  stealth: 3, focusPlayer: true,
		spellResist: 1.0,
		stamina: 5,
		spells: ["ElfArrow"], miscastmsg: "KDBanditMiscast", miscastsfx: "Miss", spellCooldownMult: 1, spellCooldownMod: 0, stopToCast: true, castWhileMoving: true, kite: 1.5, projectileAttack: true,
		visionRadius: 9, maxhp: 13, minLevel:3, weight:-0.5, movePoints: 1, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 3, attackRange: 1, tilesMinRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 2,
		attackLock: "White",
		terrainTags: {"secondhalf":1, "thirdhalf":1, "willAnger": 5, "willRage": 8, "temple": 5, "elf": 12}, shrines: ["Will"], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 12}, {name: "ElfCrystal", weight: 3}]},
	{name: "Elf", faction: "Elf", clusterWith: "elf", bound: "Elf", playLine: "Elf", color: "#67ff44", tags: KDMapInit(["opendoors", "antiMagic", "guardCall", "religious", "jailer", "leashing", "elf", "imprisonable", "ranged", "elite", "mithrilRestraints", "pierceweakness", "iceweakness", "chainresist", "jail", "jailer", "hunter"]), cohesion: 0.7,
		followLeashedOnly: true, ignorechance: 0, armor: 0, followRange: 3, AI: "hunt", guardChance: 0.6, buffallies: true, spellRdy: true,
		spellResist: 2.0,
		stamina: 2,
		spells: ["Entangle", "OrbHeal", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 16, spellCooldownMult: 1, spellCooldownMod: 0, stopToCast: true, castWhileMoving: true, kite: 1.5,
		visionRadius: 9, maxhp: 16, minLevel:7, weight:-3, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 3, attackRange: 1, tilesMinRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 1,
		attackLock: "Purple",
		terrainTags: {"secondhalf":1, "thirdhalf":1, "willAnger": 4, "willRage": 6, "temple": 5, "elf": 8}, shrines: ["Will"], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 9}, {name: "ElfCrystal", weight: 4}],
		ondeath: [
			{type: "summon", enemy: "Bramble", range: 0.5, count: 1, strict: true}
		],
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 4, color: "#ffffff"}
		],
	},

	{name: "OrbOfLight", clusterWith: "nature", color: "#ffff00", tags: KDMapInit(["opendoors", "ignorenoSP", "nosignal", "nature", "ghost", "ranged", "soulimmune", "unstoppable", "coldsevereweakness", "flying"]), cohesion: 1.0, cohesionRange: 10,
		followLeashedOnly: true, ignorechance: 0, armor: 0, followRange: 3, AI: "hunt",  buffallies: true, spellRdy: true, sneakthreshold: 0.95,
		spellResist: 2.0,
		evasion: -0.5,
		nonDirectional: true,
		spells: ["OrbHeal"], spellCooldownMult: 1, spellCooldownMod: 0, tilesMinRange: 1, stopToCast: true, kite: 1.5, kiteChance: 0.9,
		visionRadius: 10, blindSight: 10, maxhp: 10, minLevel:3, weight:1.5, movePoints: 3, attackPoints: 4, attack: "SpellMeleeBlindWill", blindTime: 3, attackWidth: 8, attackRange: 1, power: 6, dmgType: "fire",
		terrainTags: {"willAnger":4, "willRage":4, "magical": 4, "elf": 6}, shrines: ["Will"], allFloors: true, dropTable: [{name: "Ectoplasm", weight: 9}, {name: "ElfCrystal", weight: 3}],
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 3, color: "#ffff44"}
		],
	},

	{name: "Monolith", clusterWith: "chaos", color: "#ff5277",
		tags: KDMapInit(["opendoors", "ignorenoSP", "construct", "nosignal", "poisonimmune", "soulimmune", "temple", "minor", "chaos", "ranged", "slashimmune", "unarmedresist", "pierceimmune", "fireresist", "unstoppable", "tickleresist", "groperesist", "electricresist", "flying"]),
		cohesion: 0, cohesionRange: 10, difficulty: 0.3,
		evasion: -2.0,
		nonDirectional: true,
		followLeashedOnly: true, ignorechance: 0, armor: 1.5, spellResist: 0.5, followRange: 2.5, AI: "guard", buffallies: true, spellRdy: false, sneakthreshold: 0.95,
		spells: ["MonolithBeam"], spellCooldownMult: 1, spellCooldownMod: 0, stopToCast: true, kite: 1.5, kiteChance: 0.9,
		visionRadius: 5, blindSight: 5, maxhp: 7, minLevel:10, weight:4, movePoints: 4, attackPoints: 4, attack: "Spell", attackWidth: 8, attackRange: 1, power: 3, dmgType: "fire",
		terrainTags: {"open": 25, "temple": 6}, shrines: [], floors:KDMapInit(["tmp", "tmb", "cry"]), dropTable: [{name: "EarthRune", weight: 7}, {name: "ElfCrystal", weight: 3}],
	},

	{name: "Pixie", clusterWith: "nature", tags: KDMapInit(["ignorenoSP", "fairy", "soulresist", "chaos", "melee", "minor", "magicweakness", "flying"]), followRange: 1, AI: "hunt",  squeeze: true, ethereal: true, cohesion: 1.0,
		summon: [
			{enemy: "Pixie", range: 3, count: 2, chance: 0.2, strict: true},],
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 3.5, color: "#ffffff"}
		],
		difficulty: 0.2,
		spells: ["EnemyFlash"],  spellCooldownMult: 1, spellCooldownMod: 14, castWhileMoving: true,
		visionRadius: 6, blindSight: 4, maxhp: 1, evasion: 1.0, minLevel:0, weight:0.1, movePoints: 1.25, attackPoints: 2, attack: "MeleeWillSpell", attackWidth: 1, attackRange: 1, power: 2, dmgType: "charm",
		terrainTags: {"willAnger": 2, "willRage": 3, "elf": 0.4}, shrines: ["Will"], allFloors: true},

	{name: "ChaoticCrystal", faction: "Natural", clusterWith: "chaos", color: "#ff00aa", immobile: true, hitsfx: "Evil", tags: KDMapInit(["crystal", "chaos", "minor", "inactive", "melee", "crushweakness", "soulimmune"]),
		evasion: -9, ignorechance: 1.0, armor: 1, followRange: 1, AI: "wander", sneakThreshold: 0.01,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#ff44aa"}
		],
		nonDirectional: true,
		visionRadius: 1.5, blindSight: 1.5, maxhp: 8, minLevel:0, weight:0, movePoints: 99999, attackPoints: 1, attack: "MeleeWill", attackWidth: 8, attackRange: 1, power: 1, dmgType: "drain",
		terrainTags: {"passage": -999, "door": -99, "crystalline": 45}, floors:KDMapInit(["cry"]), shrines: []},
	{name: "ChaoticCrystalActive", faction: "Natural", clusterWith: "chaos", immobile: true, color: "#ff00aa", hitsfx: "Evil", tags: KDMapInit(["crystal", "active", "chaos", "melee", "crushweakness", "crystalRestraints", "soulimmune"]),
		evasion: -9, ignorechance: 1.0, armor: 1, followRange: 1, AI: "wander", sneakThreshold: 0.01,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 5.5, color: "#ff44aa"}
		],
		nonDirectional: true,
		visionRadius: 5, blindSight: 5, maxhp: 16, minLevel:0, weight:0, movePoints: 99999, attackPoints: 4, attack: "MeleeWillBind", attackWidth: 8, attackRange: 2, power: 2, dmgType: "drain", fullBoundBonus: 2,
		terrainTags: {"passage": -999, "door": -99, "crystalline": 5, "open": 45}, floors:KDMapInit(["cry"]), shrines: []},

	{name: "Statue", faction: "Natural", tags: KDMapInit(["mimicBlock", "statue", "minor", "melee", "unflinching", "crushweakness", "harmless", "pierceweakness", "chainresist", "soulimmune"]), immobile: true, spellResist: 0.33, sneakThreshold: 0.01,
		evasion: -9, ignorechance: 1.0, armor: 2, followRange: 1, AI: "ambush", ambushRadius: 0,
		GFX: {
			lighting: true,
		},
		visionRadius: 0, maxhp: 8, minLevel:0, weight:30, movePoints: 99999, attackPoints: 4, attack: "", attackWidth: 8, attackRange: 3, power: 4, dmgType: "souldrain",
		terrainTags: {"passage": -999, "temple": 82, "open": 10}, floors:KDMapInit(["tmp"]), shrines: []},
	{name: "StatueGag", tags: KDMapInit(["ignoregagged", "mimicBlock", "statue", "minor", "melee", "unflinching", "ballGagRestraintsMagic", "crushweakness", "pierceweakness", "chainresist", "soulimmune"]), spellResist: 0.33, sneakThreshold: 0.01,
		evasion: -9, ignorechance: 1.0, armor: 2, followRange: 1, AI: "ambush", ambushRadius: 1.5, difficulty: 0.2,
		RestraintFilter: {
			unlimitedRestraints: true,
		},
		nonDirectional: true,
		GFX: {
			lighting: true,
		},
		visionRadius: 8, maxhp: 12, minLevel:0, weight:10, movePoints: 2, attackPoints: 2, attack: "MeleeBindWill", attackWidth: 1, attackRange: 1, power: 4, dmgType: "grope",
		terrainTags: {"passage": -999, "temple": 72, "open": 10}, floors:KDMapInit(["tmp"]), shrines: ["Latex"]},
	{name: "StatueDart", tags: KDMapInit(["mimicBlock", "statue", "minor", "melee", "unflinching", "crushweakness", "pierceweakness", "chainresist", "soulimmune"]), immobile: true, spellResist: 0.33, sneakThreshold: 0.01,
		spells: ["SleepDart"], spellCooldownMult: 1, spellCooldownMod: 20, stopToCast: true, castWhileMoving: true, projectileAttack: true,
		evasion: -9, ignorechance: 1.0, armor: 2, followRange: 1, AI: "ambush", ambushRadius: 1.5,
		nonDirectional: true,
		GFX: {
			lighting: true,
		},
		visionRadius: 4, maxhp: 8, minLevel:0, weight:25, movePoints: 99999, attackPoints: 4, attack: "Spell", attackWidth: 8, attackRange: 3, power: 4, dmgType: "souldrain",
		terrainTags: {"passage": -999, "temple": 72, "open": 15}, floors:KDMapInit(["tmp"]), shrines: []},

	{name: "SoulCrystal", clusterWith: "chaos", color: "#880000", immobile: true, hitsfx: "Evil", tags: KDMapInit(["crystal", "soul", "minor", "unstoppable", "ranged", "crushweakness", "soulimmune", "flying"]), spellResist: 0.33, sneakThreshold: 0.01,
		evasion: -9, ignorechance: 1.0, armor: 1.5, followRange: 1, AI: "wander",
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#ff0000"}
		],
		nonDirectional: true,
		visionRadius: 100, maxhp: 20, minLevel:0, weight:-99, movePoints: 99999, attackPoints: 4, attack: "MeleeWill", attackWidth: 2.5, attackRange: 3, power: 4, dmgType: "souldrain",
		terrainTags: {"passage": -999, "temple": 20, "open": 125}, floors:KDMapInit(["tmp"]), shrines: ["Conjure"],
		dropTable: [{name: "AncientPowerSourceSpent", weight: 9}, {name: "AncientPowerSource", weight: 1}]},
	{name: "SoulCrystalActive", clusterWith: "chaos", color: "#880000", immobile: true, hitsfx: "Evil", tags: KDMapInit(["crystal", "soul", "active", "unstoppable", "miniboss", "ranged", "crushweakness", "soulimmune", "flying"]), spellResist: 0.33,
		evasion: -9, ignorechance: 1.0, armor: 1.5, followRange: 1, AI: "wander",
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 5.5, color: "#ff0000"}
		],
		nonDirectional: true,
		spells: ["SoulCrystalBind"], spellCooldownMult: 1, spellCooldownMod: 0, followLeashedOnly: true, stopToCast: true, castWhileMoving: true, sneakThreshold: 0.01,
		visionRadius: 100, maxhp: 20, minLevel:0, weight:-99, movePoints: 99999, attackPoints: 4, attack: "SpellMeleeWill", attackWidth: 2.5, attackRange: 3, power: 4, dmgType: "souldrain",
		terrainTags: {"passage": -999, "temple": 10, "open": 115}, floors:KDMapInit(["tmp"]), shrines: ["Conjure"],
		dropTable: [{name: "AncientPowerSource", weight: 10}]},




	{name: "ShadowHand", faction: "Ghost", clusterWith: "ghost", color: "#880044", tags: KDMapInit(["opendoors", "shadow", "shadowHandEnemy", "shadowTrap", "ghost", "soulimmune", "fireweakness", "melee", "shadowimmune", "glueimmune", "chainimmune", "shadowHands", "poisonimmune", "meleeresist", "flying"]),
		ignorechance: 0, armor: 0, followRange: 1, AI: "huntshadow", noAlert: true, hitsfx: "Evil", ignoreflag: ["ShadowHand"], failAttackflag: ["ShadowHand"], failAttackflagDuration: 2,
		visionRadius: 10, blindSight: 4, evasion: 0.4, maxhp: 6, minLevel: 0, weight:-5, movePoints: 1, attackPoints: 2, attack: "MeleeWillBind", attackWidth: 1, attackRange: 1, power: 1.0, dmgType: "grope", fullBoundBonus: 4,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 0, color: "#880044"},
			{trigger: "beforeDamage", type: "shadowEngulf", power: 0, color: "#880044"},
			{trigger: "afterEnemyTick", type: "shadowDebuff", power: -0.5},
		],
		terrainTags: {"trap": 100, revenge: 10}, shrines: [], allFloors: true},

	{name: "ShadowGhast", faction: "Ghost", clusterWith: "ghost", color: "#880044", tags: KDMapInit(["opendoors", "shadow", "shadowHandEnemy", "shadowTrap", "ghost", "soulimmune", "fireweakness", "melee", "shadowimmune", "glueimmune", "chainimmune", "shadowHands", "poisonimmune", "meleeresist", "flying"]),
		ignorechance: 0, armor: 0, followRange: 1, AI: "huntshadow", hitsfx: "Evil", ignoreflag: ["ShadowHand"], failAttackflag: ["ShadowHand"], failAttackflagDuration: 2,
		visionRadius: 10, blindSight: 5, evasion: 0.15, maxhp: 14, minLevel: 0, weight:-4, movePoints: 4, attackPoints: 3, attack: "SpellMeleeWillBindSlow", attackWidth: 1, attackRange: 3, power: 2.0, dmgType: "cold", fullBoundBonus: 2,
		projectileAttack: true,
		spells: ["SummonShadowHand"], spellCooldownMult: 2, spellCooldownMod: 0, castWhileMoving: true, followLeashedOnly: true,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 0, color: "#880044"},
			{trigger: "beforeDamage", type: "shadowEngulf", power: 0, color: "#880044"},
			{trigger: "afterEnemyTick", type: "shadowDebuff", power: -0.5},
		],
		terrainTags: {"shadowcreature" : 20, "increasingWeight": 0.1, "trap": 10, revenge: 10, "goddessRage": 1}, shrines: [], allFloors: true,
		dropTable: [{name: "Ectoplasm", weight: 1}]},

	{name: "CorruptedAdventurer", faction: "Ghost", clusterWith: "ghost", bound: "CorruptedAdventurer", playLine: "Elemental", color: "#880044",
		tags: KDMapInit(["shadowHandEnemy", "shadow", "shadowTrap", "ghost", "soulresist", "fireweakness", "melee", "shadowresist", "glueresist", "chainresist", "shadowHands", "opendoors"]),
		followRange: 1, ignoreflag: ["ShadowDommed"], failAttackflag: ["ShadowDommed"],
		spells: ["ShadowBolt"], spellCooldownMult: 1, spellCooldownMod: 0,
		AI: "huntshadow",  visionRadius: 10, maxhp: 20, minLevel: 3, weight:-1, movePoints: 4, disarm: 0.33,
		events: [
			{trigger: "afterEnemyTick", type: "shadowDebuff", power: -0.5},
			{trigger: "afterEnemyTick", type: "shadowDommeRefresh"},
			{trigger: "beforeDamage", type: "shadowDomme", power: 0, color: "#880044"},
		],
		attackPoints: 4, attack: "MeleeBindWillSpellLock", attackWidth: 3, attackRange: 1, tilesMinRange: 1, power: 3, dmgType: "cold", multiBind: 2,
		attackLock: "White",
		terrainTags: {"shadowcreature" : 9, revenge: 3, "increasingWeight": 0.1, "goddessRage": 3}, shrines: [], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}, {name: "Ectoplasm", weight: 10}]
	},

	{name: "ChainBeing", clusterWith: "elemental", bound: "ChainBeing", playLine: "Elemental", color: "#c7a9fa",
		tags: KDMapInit(["construct", "shadow", "metalTrap", "soulresist", "fireweakness", "melee", "shadowresist", "glueresist", "chainimmune", "obsidianRestraints", "chainRestraintsMagic", "leashing"]),
		armor: 1.5, kite: 1.5, followRange: 3, AI: "hunt",
		spells: ["ObsidianBolt"], spellCooldownMult: 1, spellCooldownMod: 1, followLeashedOnly: true, stopToCast: true, spellRdy: true, projectileTargeting: true,
		visionRadius: 10, maxhp: 11, minLevel: 0, weight:-10, movePoints: 2,
		attackPoints: 4, attack: "MeleeBindLockAllSpell", attackWidth: 1, attackRange: 1, tilesMinRange: 1, power: 2, dmgType: "soul", fullBoundBonus: 2.5,
		attackLock: "White",
		stamina: 3,
		terrainTags: {"shadowcreature" : 6, revenge: 6, "increasingWeight": 0.1, "metalAnger": 10, "metalPleased": 10, }, shrines: ["Metal"], allFloors: true,
		events: [
			{trigger: "afterEnemyTick", type: "createEffectTile", kind: "Chains", time: 5, power: 1, chance: 0.5, aoe: 0.5},
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Chains", aoe: 1.5, power: 1, chance: 1.0},
		],
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}]
	},


	{name: "DemonEye", clusterWith: "demon", bound: "Demon", faction: "Observer", playLine: "Elemental", color: "#ff5577",
		tags: KDMapInit(["opendoors", "chaos", "observer", "demon", "melee", "miniboss", "obsidianRestraints", "electricresist", "fireresist", "coldresist", "soulweakness", "charmweakness"]),
		armor: 2, spellResist: 2, followRange: 0, AI: "hunt", disarm: 0.33,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 4, color: "#ff5555"},
		],
		effect: {
			effect: {name: "TheShadowCurse", power: 4, count: 1},
		},
		spells: ["GravityPull", "ShadowGraspMulti"], spellCooldownMult: 1.4, spellCooldownMod: 0, followLeashedOnly: true, castWhileMoving: true, spellRdy: true, projectileTargeting: true,

		Magic: {
			castCooldownUnique: {
				ShadowGraspMulti: 12,
			},
			priority: {
				ShadowGraspMulti: 10,
			},
		},
		nonDirectional: true,
		stamina: 4,
		visionRadius: 15, blindSight: 4, maxhp: 30, minLevel: 0, weight:-10, movePoints: 4, regen: 0.04, keys: true,
		attackPoints: 4, attack: "SpellMeleeBindLockAllWillEffect", attackWidth: 3, attackRange: 1, power: 5, dmgType: "cold", fullBoundBonus: 5, multiBind: 4,
		attackLock: "Purple",
		terrainTags: {}, shrines: [], floors:KDMapInit([]),
		dropTable: [{name: "ManaOrb", weight: 10}]
	},
	{name: "Observer", faction: "Observer", color: "#ff5577", clusterWith: "demon", tags: KDMapInit(["chaos", "shadow", "melee", "minor", "soulimmune", "meleeresist", "flying"]),
		squeeze: true, followRange: 1, AI: "hunt",  sneakThreshold: 1, hitsfx: "", ethereal: true,
		spells: ["ObserverBeam"], spellCooldownMult: 1, spellCooldownMod: 1, evasion: 0.4, sneakthreshold: 3.5,
		events: [
			{trigger: "enemyCast", type: "RandomRespawn"},
		],
		nonDirectional: true,
		visionRadius: 4.5, maxhp: 3, minLevel: 0, weight:-100, movePoints: 3, attackPoints: 3,
		attack: "Spell", suicideOnSpell: true, attackWidth: 1, attackRange: 1, power: 1, dmgType: "soul",
		terrainTags: {}, floors:KDMapInit([]), shrines: []},

	{name: "DemonStar", clusterWith: "demon", bound: "Demon", playLine: "Elemental", color: "#9ea7de",
		tags: KDMapInit(["opendoors", "order", "leashing", "demon", "melee", "miniboss", "mithrilRestraints", "electricresist", "fireresist", "coldresist", "soulweakness", "charmweakness", "jail", "jailer", "hunter"]),
		armor: 1.5, followRange: 0, AI: "hunt",
		spells: ["BoundByFate"], spellCooldownMult: 1, spellCooldownMod: 0, followLeashedOnly: true, stopToCast: true, spellRdy: true, projectileTargeting: true,
		visionRadius: 10, maxhp: 16, minLevel: 0, weight:-10, movePoints: 4,
		attackPoints: 3, attack: "MeleeBindLockSpell", attackWidth: 1, attackRange: 1, tilesMinRange: 1, power: 4, dmgType: "cold", fullBoundBonus: 2, multiBind: 2,
		attackLock: "Purple",
		stamina: 5,
		terrainTags: {"demon" : 15, "increasingWeight": 0.1, "goddessRage": 10, "goddessPleased": 10, }, shrines: [], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 25, amountMax: 35, weight: 10}]
	},

	{name: "DemonMoon", clusterWith: "demon", bound: "Demon", playLine: "Elemental", color: "#9ea7de",
		tags: KDMapInit(["opendoors", "order", "leashing", "demon", "melee", "miniboss", "mithrilRestraints", "electricresist", "fireresist", "coldresist", "soulweakness", "charmweakness", "jail", "jailer", "hunter"]),
		armor: 1.5, followRange: 0, AI: "hunt",
		spells: ["CrushingFate"], spellCooldownMult: 1, spellCooldownMod: 0, followLeashedOnly: true, stopToCast: true, spellRdy: true, projectileTargeting: true,
		visionRadius: 10, maxhp: 16, minLevel: 0, weight:-10, movePoints: 4,
		attackPoints: 3, attack: "MeleeBindLockSpell", attackWidth: 1, attackRange: 1, tilesMinRange: 1, power: 4, dmgType: "cold", fullBoundBonus: 2, multiBind: 2,
		attackLock: "Purple",
		stamina: 5,
		terrainTags: {"demon" : 15, "increasingWeight": 0.1, "goddessRage": 10, "goddessPleased": 10, }, shrines: [], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 25, amountMax: 35, weight: 10}]
	},
	{name: "DemonVoid", clusterWith: "demon", bound: "Demon", playLine: "Elemental", color: "#9ea7de",
		tags: KDMapInit(["opendoors", "order", "leashing", "demon", "melee", "miniboss", "obsidianRestraints", "electricresist", "fireresist", "coldresist", "soulweakness", "charmweakness", "jail", "jailer", "hunter"]),
		armor: 1.5, followRange: 0, AI: "hunt",
		spells: ["GravityPull"], spellCooldownMult: 1, spellCooldownMod: 0, followLeashedOnly: true, castWhileMoving: true, spellRdy: true, projectileTargeting: true,
		visionRadius: 10, maxhp: 18, minLevel: 0, weight:-10, movePoints: 2.5,
		attackPoints: 2, attack: "MeleeBindLockSpell", attackWidth: 1.5, attackRange: 1, tilesMinRange: 1, power: 2, dmgType: "cold", fullBoundBonus: 2,
		attackLock: "Purple",
		stamina: 9, sprintspeed: 1.7,
		terrainTags: {"demon" : 15, "increasingWeight": 0.1, "goddessRage": 10, "goddessPleased": 10, }, shrines: [], allFloors: true,
		dropTable: [{name: "Gold", amountMin: 25, amountMax: 35, weight: 10}]
	},

	{name: "Gag", faction: "KinkyConstruct", clusterWith: "construct",
		tags: KDMapInit(["leatherTrap", "ropeTrap", "ignoregagged", "construct", "nosignal", "poisonresist", "soulimmune", "melee", "ballGagRestraints", "gagSpell", "minor", "chainresist", "doortrap", "flying"]),
		ignorechance: 0.75, followRange: 1, AI: "hunt",  ignoreflag: ["FA_Gag"], failAttackflag: ["FA_Gag"], squeeze: true, ignoreStaminaForBinds: true,
		Attack: {
			mustBindorFail: true,
		},
		Resistance: {
			profile: ["construct"],
		},
		RestraintFilter: {
			unlimitedRestraints: true,
			levelBonus: 4,
		},
		specialCD: 8, specialAttack: "Dash", specialRemove: "BindSuicide", specialCDonAttack: true, specialAttackPoints: 1, specialRange: 4.5, specialMinrange: 1.5, dashThrough: true, specialsfx: "Miss",
		visionRadius: 3, visionSummoned: 12, maxhp: 4, minLevel: 0, weight:0, movePoints: 1, attackPoints: 2, attack: "MeleeBindSuicide", focusPlayer: true,
		suicideOnAdd: true, attackWidth: 1, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 1,
		terrainTags: {"trap": 50, revenge: 50, gag: -40}, allFloors: true, shrines: [], summonTags: ["gag"],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Belts", aoe: 1.5, power: 1, chance: 1.0},
		],
	},
	{name: "AnimLegbinder", faction: "KinkyConstruct", clusterWith: "construct",
		tags: KDMapInit(["leatherTrap", "ignoreharmless", "construct", "nosignal", "poisonresist", "soulimmune", "melee", "legbinderSpell", "minor", "chainresist", "doortrap", "flying",
			"backup_harness", "harnessSpell",
		]),
		ignorechance: 0.75, followRange: 1, AI: "hunt",  ignoreflag: ["FA_Legb"], failAttackflag: ["FA_Legb"], squeeze: true, ignoreStaminaForBinds: true,
		Attack: {
			mustBindorFail: true,
		},
		Resistance: {
			profile: ["construct"],
		},
		RestraintFilter: {
			unlimitedRestraints: true,
			levelBonus: 4,
		},
		visionRadius: 6, visionSummoned: 12, maxhp: 10, minLevel: 5, weight:0, movePoints: 2, attackPoints: 3, attack: "MeleeBindSuicide", focusPlayer: true,
		suicideOnAdd: true, attackWidth: 3, attackRange: 1, power: 3, dmgType: "grope", fullBoundBonus: 1,
		terrainTags: {"trap": 30, revenge: 30, legbinder: -25}, allFloors: true, shrines: [], summonTags: ["legbinder"],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Belts", aoe: 1.5, power: 1, chance: 1.0},
		],
	},
	{name: "AnimArmbinder", faction: "KinkyConstruct", clusterWith: "construct",
		tags: KDMapInit(["leatherTrap", "ignoreharmless", "construct", "nosignal", "poisonresist", "soulimmune", "melee", "armbinderSpell", "minor", "chainresist", "doortrap", "flying",
			"backup_harness", "harnessSpell",
		]),
		ignorechance: 0.75, followRange: 1, AI: "hunt",  ignoreflag: ["FA_Armb"], failAttackflag: ["FA_Armb"], squeeze: true, ignoreStaminaForBinds: true,
		Attack: {
			mustBindorFail: true,
		},
		Resistance: {
			profile: ["construct"],
		},
		RestraintFilter: {
			unlimitedRestraints: true,
			levelBonus: 4,
		},
		visionRadius: 6, visionSummoned: 12, maxhp: 8, minLevel: 3, weight:0, movePoints: 1.5, attackPoints: 3, attack: "MeleeBindSuicide", focusPlayer: true,
		suicideOnAdd: true, attackWidth: 3, attackRange: 1, power: 3, dmgType: "grope", fullBoundBonus: 1,
		terrainTags: {"trap": 30, revenge: 30, armbinder: -25}, allFloors: true, shrines: [], summonTags: ["armbinder"],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Belts", aoe: 1.5, power: 1, chance: 1.0},
		],
	},
	{name: "AnimHarness", faction: "KinkyConstruct", clusterWith: "construct",
		tags: KDMapInit(["leatherTrap", "ignoreharmless", "construct", "nosignal", "poisonresist", "soulimmune", "melee", "harnessSpell", "binderharnessSpell", "minor", "chainresist", "doortrap", "flying"]),
		ignorechance: 0.75, followRange: 1, AI: "hunt",  ignoreflag: ["FA_Harness"], failAttackflag: ["FA_Harness"], squeeze: true, ignoreStaminaForBinds: true,
		Attack: {
			mustBindorFail: true,
		},
		Resistance: {
			profile: ["construct"],
		},
		RestraintFilter: {
			unlimitedRestraints: true,
			levelBonus: 4,
		},
		visionRadius: 6, visionSummoned: 12, maxhp: 6, minLevel: 0, weight:0, movePoints: 1.5, attackPoints: 2, attack: "MeleeBindSuicide", focusPlayer: true,
		suicideOnAdd: true, attackWidth: 1, attackRange: 1, power: 2, dmgType: "crush", fullBoundBonus: 1,
		terrainTags: {"trap": 25, revenge: 25, harness: -20}, allFloors: true, shrines: [], summonTags: ["harness"],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Belts", aoe: 1.5, power: 1, chance: 1.0},
		],
	},
	{name: "AnimBlindfold", faction: "KinkyConstruct", clusterWith: "construct",
		tags: KDMapInit(["leatherTrap", "ropeTrap", "ignoreharmless", "construct", "nosignal", "poisonresist", "soulimmune", "melee", "blindfoldSpell", "minor", "chainresist", "doortrap", "flying"]),
		ignorechance: 0.75, followRange: 1, AI: "hunt",  ignoreflag: ["FA_BF"], failAttackflag: ["FA_BF"], squeeze: true, ignoreStaminaForBinds: true,
		Attack: {
			mustBindorFail: true,
		},
		Resistance: {
			profile: ["construct"],
		},
		RestraintFilter: {
			unlimitedRestraints: true,
			levelBonus: 4,
		},
		specialCD: 8, specialAttack: "Dash", specialRemove: "BindSuicide", specialCDonAttack: true, specialAttackPoints: 1, specialRange: 4.5, specialMinrange: 1.5, dashThrough: true, specialsfx: "Miss",
		visionRadius: 9, visionSummoned: 12, maxhp: 4, minLevel: 4, weight:0, movePoints: 1, attackPoints: 2, attack: "MeleeBindSuicide", focusPlayer: true,
		suicideOnAdd: true, attackWidth: 1, attackRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 1,
		terrainTags: {"trap": 25, revenge: 25, blindfold: -20}, allFloors: true, shrines: [], summonTags: ["blindfold"],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Belts", aoe: 1.5, power: 1, chance: 1.0},
		],
	},
	{name: "AnimStraitjacket", faction: "KinkyConstruct", clusterWith: "construct",
		tags: KDMapInit(["leatherTrap", "ignoreharmless", "construct", "nosignal", "poisonresist", "soulimmune", "melee", "jacketSpell", "minor", "chainresist", "doortrap", "flying",
			"backup_harness", "harnessSpell",
		]),
		ignorechance: 0.75, followRange: 1, AI: "hunt",  ignoreflag: ["FA_Jacket"], failAttackflag: ["FA_Jacket"], squeeze: true, ignoreStaminaForBinds: true,
		Attack: {
			mustBindorFail: true,
		},
		Resistance: {
			profile: ["construct"],
		},
		RestraintFilter: {
			unlimitedRestraints: true,
			levelBonus: 4,
		},
		visionRadius: 9, visionSummoned: 12, maxhp: 12, minLevel: 7, weight:0, movePoints: 1.5, attackPoints: 3, attack: "MeleeBindSuicide", focusPlayer: true,
		suicideOnAdd: true, attackWidth: 1, attackRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 1,
		terrainTags: {"trap": 20, revenge: 20, "leatherRage": 5, jacket: -20}, allFloors: true, shrines: [], summonTags: ["jacket"],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Belts", aoe: 1.5, power: 1, chance: 1.0},
		],
	},
	{name: "Cuffs", faction: "KinkyConstruct", clusterWith: "construct",
		tags: KDMapInit(["metalTrap", "doortrap", "ignoreharmless", "construct", "nosignal", "poisonimmune", "soulimmune", "melee", "cuffsSpell", "minor", "chainresist", "meleeresist", "glueweakness", "iceweakness", "flying"]), ignorechance: 0.75,
		armor: 1, followRange: 1, AI: "hunt",  ignoreflag: ["FA_Cuffs"], failAttackflag: ["FA_Cuffs"], squeeze: true, ignoreStaminaForBinds: true,
		Attack: {
			mustBindorFail: true,
		},
		Resistance: {
			profile: ["construct"],
		},
		RestraintFilter: {
			unlimitedRestraints: true,
			levelBonus: 4,
		},
		specialCD: 8, specialAttack: "Dash", specialRemove: "BindSuicide", specialCDonAttack: true, specialAttackPoints: 1, specialRange: 4.5, specialMinrange: 1.5, dashThrough: true, specialsfx: "Miss",
		visionRadius: 4, visionSummoned: 12, maxhp: 2, minLevel: 0, weight:0, movePoints: 1, attackPoints: 2, attack: "MeleeBindSuicide", suicideOnAdd: true, attackWidth: 1, attackRange: 1, power: 1, dmgType: "charm", fullBoundBonus: 1,
		terrainTags: {"doortrap": 6, revenge: 50, "trap": 50, cuffs: -40}, allFloors: true, shrines: ["Metal"], summonTags: ["cuffs"],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Chains", aoe: 1.5, power: 1, chance: 1.0},
		],
	},
	{name: "AnimChastity", arousalMode: true, faction: "KinkyConstruct", clusterWith: "construct",
		tags: KDMapInit(["metalTrap", "ignoreharmless", "doortrap", "construct", "nosignal", "poisonimmune", "soulimmune", "melee", "chastitySpell", "minor", "chainresist", "meleeresist", "glueweakness", "iceweakness", "flying"]), ignorechance: 0.75,
		armor: 2, followRange: 1, AI: "hunt",  ignoreflag: ["FA_Chastity"], failAttackflag: ["FA_Chastity"], squeeze: true, ignoreStaminaForBinds: true,
		Attack: {
			mustBindorFail: true,
		},
		Resistance: {
			profile: ["construct"],
		},
		RestraintFilter: {
			unlimitedRestraints: true,
			levelBonus: 4,
		},
		visionRadius: 6, visionSummoned: 12, maxhp: 5, minLevel: 2, weight:0, movePoints: 1.5, attackPoints: 3, attack: "MeleeBindSuicide", suicideOnAdd: true, attackWidth: 3, attackRange: 1, power: 2, dmgType: "charm", fullBoundBonus: 1,
		terrainTags: {"doortrap": 6, revenge: 35, "trap": 35, chastity: -25}, allFloors: true, shrines: ["Metal"], summonTagsMulti: ["chastity"],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Chains", aoe: 1.5, power: 1, chance: 1.0},
		],
	},
	{name: "AnimYoke", arousalMode: true, faction: "KinkyConstruct", clusterWith: "construct",
		tags: KDMapInit(["metalTrap", "ignoreharmless", "doortrap", "construct", "nosignal", "poisonimmune", "soulimmune", "melee", "yokeSpell", "minor", "chainresist", "meleeresist", "glueweakness", "iceweakness", "flying"]), ignorechance: 0.75,
		armor: 2, followRange: 1, AI: "hunt",  ignoreflag: ["FA_Yoke"], failAttackflag: ["FA_Yoke"], squeeze: true, ignoreStaminaForBinds: true,
		Attack: {
			mustBindorFail: true,
		},
		Resistance: {
			profile: ["construct"],
		},
		RestraintFilter: {
			unlimitedRestraints: true,
			levelBonus: 4,
		},
		visionRadius: 6, visionSummoned: 12, maxhp: 5, minLevel: 4, weight:0, movePoints: 1.5, attackPoints: 3, attack: "MeleeBindSuicide", suicideOnAdd: true, attackWidth: 3, attackRange: 1, power: 2, dmgType: "charm", fullBoundBonus: 1,
		terrainTags: {"doortrap": 6, revenge: 35, "trap": 35, yoke: -30}, allFloors: true, shrines: ["Metal"], summonTags: ["yoke"],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Chains", aoe: 1.5, power: 1, chance: 1.0},
		],
	},
	{name: "Lock", faction: "KinkyConstruct", clusterWith: "construct", color: "#bbbbbb",
		tags: KDMapInit(["metalTrap", "leatherTrap", "ignorenoSP", "lock", "construct", "nosignal", "poisonimmune", "soulimmune", "melee", "minor", "chainresist", "meleeresist", "glueweakness", "iceweakness", "doortrap", "flying"]), difficulty: 0.2,
		ignorechance: 0.75, armor: 1, followRange: 1, AI: "hunt",  ignoreflag: ["FA_Lock"], failAttackflag: ["FA_Lock"], squeeze: true, suicideOnLock: true,
		Attack: {
			mustBindorFail: true,
		},
		Resistance: {
			profile: ["construct"],
		},
		nonDirectional: true,
		specialCD: 8, specialAttack: "MeleeDash", specialRemove: "SuicideMeleeBindLockWill", specialCDonAttack: true, specialAttackPoints: 1, specialRange: 4.5, specialMinrange: 1.5, dashThrough: true, specialsfx: "Miss",
		visionRadius: 3, visionSummoned: 12, maxhp: 4, minLevel: 0, weight:0, movePoints: 1, attackPoints: 3, attack: "SuicideMeleeBindLockWill", attackWidth: 3, tilesMinRange: 1, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 2,
		terrainTags: {"secondhalf":1, "lastthird":1, revenge: 60, "doortrap": 5, "trap": 100}, allFloors: true, shrines: ["Metal"],
		maxLevel: 3,
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Chains", aoe: 1.5, power: 1, chance: 1.0},
		],
	},
	{name: "LockMaster", faction: "KinkyConstruct", clusterWith: "construct", color: "#bbbbbb",
		tags: KDMapInit(["metalTrap", "leatherTrap",
			"lock", "construct", "nosignal", "poisonimmune", "soulimmune", "melee", "minor",
			"chainresist", "meleeresist", "glueweakness", "iceweakness", "doortrap", "flying"]),
		Resistance: {
			profile: ["construct"],
		},
		difficulty: 0.5,
		armor: 2, spellResist: 2, followRange: 2.5, AI: "hunt",
		squeeze: true,
		nonDirectional: true, kite: 1.5,
		spells: ["LockBullet"], castWhileMoving: true, projectileTargeting: true,
		spellCooldownMod: 0, spellCooldownMult: 1,
		visionRadius: 5.5, visionSummoned: 12, maxhp: 10, minLevel: 3, weight:0, movePoints: 2,
		stamina: 5,
		sprintspeed: 2.0,
		attackLock: "Purple",
		attackPoints: 3, attack: "SpellMeleeLockWill", attackWidth: 1, tilesMinRange: 1, attackRange: 1, power: 1, dmgType: "soul", fullBoundBonus: 2,
		terrainTags: {"secondhalf":2, "lastthird":2, "doortrap": 8, revenge: 50, "trap": 100}, allFloors: true, shrines: ["Metal"],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Chains", aoe: 1.5, power: 1, chance: 1.0},
		],
	},
	{name: "Feathers", faction: "KinkyConstruct", clusterWith: "construct", tags: KDMapInit(["ignorenoSP", "construct", "nosignal", "poisonresist", "soulimmune", "melee", "chainRestraints", "minor", "firesevereweakness", "meleeresist", "doortrap", "flying"]), ignorechance: 0.75, armor: -1, followRange: 1, AI: "hunt",  ignoreflag: ["feathers"], failAttackflag: ["feathers"], squeeze: true,
		visionRadius: 5, visionSummoned: 12, maxhp: 3, minLevel: 0, weight:-2, movePoints: 2, attackPoints: 2, attack: "MeleeWill",
		nonDirectional: true,
		Resistance: {
			profile: ["construct"],
		},
		attackWidth: 3, tilesMinRange: 1, attackRange: 1, power: 1, dmgType: "tickle", ondeath: [{type: "spellOnSelf", spell: "Feathers"}],
		terrainTags: {"secondhalf":2, "lastthird":-1, "increasingLevel": -1.5, revenge: 7, "doortrap": 8}, allFloors: true, shrines: [], difficulty: 0.7, hitsfx: "Tickle",},
	{name: "Scarves", faction: "KinkyConstruct", clusterWith: "construct", tags: KDMapInit(["ignoreharmless", "construct", "nosignal", "flying", "poisonresist", "soulimmune", "melee", "scarfRestraints", "minor", "firesevereweakness", "acidweakness", "slashweakness", "meleeresist", "doortrap"]), ignorechance: 0.75, armor: 0, followRange: 1, AI: "hunt",  ignoreflag: ["scarves"], failAttackflag: ["scarves"], squeeze: true,
		visionRadius: 3, visionSummoned: 12, maxhp: 1, minLevel: 0, maxLevel: 3, weight:1, movePoints: 1.5, attackPoints: 2, attack: "MeleeBind", attackWidth: 1, attackRange: 1, power: 1, dmgType: "plush", fullBoundBonus: 1,
		Attack: {
			mustBindorFail: true,
		},
		Resistance: {
			profile: ["construct"],
		},
		stamina: 6,
		nonDirectional: true,
		terrainTags: {"secondhalf":-1, "lastthird":-2, "increasingLevel": -2, revenge: 12, "doortrap": 6, "ribbon": 3}, allFloors: true, shrines: [], difficulty: 0.4},
	{name: "Ribbons", faction: "KinkyConstruct", color: "#f135a4", clusterWith: "dressmaker", tags: KDMapInit(["ropeTrap", "ignoreharmless", "construct", "ribbon", "nosignal", "ribbon", "melee", "magicRibbons", "minor", "meleeresist", "doortrap", "flying"]), ignorechance: 0.75, armor: 0, followRange: 1, AI: "hunt",  ignoreflag: ["ribbons"], failAttackflag: ["ribbons"], squeeze: true,
		visionRadius:5, visionSummoned: 12, maxhp: 6, minLevel: 0, weight:0, movePoints: 1.25, attackPoints: 3, attack: "MeleeBind", attackWidth: 1, attackRange: 1, power: 1, dmgType: "chain", fullBoundBonus: 1,
		Resistance: {
			profile: ["rope", "construct"],
		},
		nonDirectional: true,
		Attack: {
			mustBindorFail: true,
		},
		terrainTags: { "dressmaker": 7, "conjureAnger": 4, "ribbon": 3, revenge: 4}, allFloors: true, shrines: ["Conjure", "Rope"], difficulty: 0.2, ondeath: [{type: "spellOnSelf", spell: "RibbonBurst"}]},
	{name: "RopeSnake", faction: "KinkyConstruct", clusterWith: "construct", color: "#ffae70", tags: KDMapInit(["ropeTrap", "ignoreharmless", "construct", "nosignal", "melee", "ropeRestraints", "minor", "doortrap"]), ignorechance: 0.75, followRange: 1, AI: "wander", squeeze: true,
		Resistance: {
			profile: ["rope", "construct"],
		},
		ignoreflag: ["ropesnake"], failAttackflag: ["ropesnake"],
		Attack: {
			mustBindorFail: true,
		},
		stamina: 6,
		visionRadius: 3, maxhp: 4, minLevel: 0, weight:3, movePoints: 1.5, attackPoints: 3, attack: "MeleeBindSuicideWill", suicideOnAdd: true, attackWidth: 1, attackRange: 1, power: 1, dmgType: "chain", fullBoundBonus: 1,
		terrainTags: {"increasingWeight":-3, revenge: 40, "trap": 40}, allFloors: true, shrines: ["Rope"],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Ropes", aoe: 1.5, power: 1, chance: 1.0},
		],
	},
	{name: "UnforseenRope", faction: "KinkyConstruct", clusterWith: "construct", color: "#ffae70", tags: KDMapInit(["ignoreharmless", "construct", "nosignal", "melee", "ropeRestraints", "ropeRestraints2", "minor", "search"]), ignorechance: 0.75, followRange: 1, AI: "hunt",  stealth: 2.5, squeeze: true,
		ignoreflag: ["ropesnake"], failAttackflag: ["ropesnake"],
		Resistance: {
			profile: ["rope", "construct"],
		},
		stamina: 6,
		visionRadius: 10, blindSight: 8, maxhp: 4, minLevel: 0, weight:0, movePoints: 1, attackPoints: 2, attack: "MeleeBindSuicideWill", suicideOnAdd: true, attackWidth: 1, attackRange: 1, power: 1, dmgType: "chain", fullBoundBonus: 1,
		terrainTags: {"secondhalf":1, "lastthird":3, revenge: 20, "trap": 20}, allFloors: true, shrines: ["Rope"],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Ropes", aoe: 1.5, power: 1, chance: 1.0},
			{trigger: "death", type: "RandomRespawn", chance: 0.33},
		],
	},
	{name: "LearnedRope", faction: "KinkyConstruct", clusterWith: "construct", color: "#ffae70", tags: KDMapInit(["ignoreharmless", "construct", "nosignal", "melee", "ropeRestraints", "ropeRestraints2", "search"]), ignorechance: 0.75, followRange: 1, AI: "hunt",  squeeze: true, disarm: 0.5,
		ignoreflag: ["ropesnake"], failAttackflag: ["ropesnake"],
		Attack: {
			mustBindorFail: true,
		},
		stamina: 6,
		Resistance: {
			profile: ["rope", "construct"],
		},
		specialCD: 8, specialAttack: "Dash", specialRemove: "BindSuicide", specialCDonAttack: true, specialAttackPoints: 1, specialRange: 4.5, specialMinrange: 1.5, dashThrough: true, specialsfx: "Miss",
		visionRadius: 5, maxhp: 8, minLevel: 2, weight:1, movePoints: 1, attackPoints: 3, attack: "MeleeBindSuicideWill", suicideOnAdd: true, attackWidth: 1, attackRange: 2.5, power: 2, multiBind: 2, dmgType: "chain", fullBoundBonus: 2,
		terrainTags: {"trap": 30, revenge: 30}, allFloors: true, shrines: ["Rope"],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Ropes", aoe: 1.5, power: 1, chance: 1.0},
		],
	},
	{name: "MonsterRope", faction: "KinkyConstruct", clusterWith: "construct", color: "#ffae70", tags: KDMapInit(["ropeTrap", "ignoreharmless", "doortrap", "construct", "nosignal", "melee", "unstoppable", "ropeRestraintsHogtie", "ropeRestraints", "ropeRestraints2", "elite", "hunter"]),
		ignorechance: 0.75, followRange: 1, AI: "guard",
		armor: 2.0,
		ignoreflag: ["ropesnake"], failAttackflag: ["ropesnake"], disarm: 0.5, ignoreStaminaForBinds: true,
		Resistance: {
			profile: ["rope", "construct"],
		},
		stamina: 2,
		visionRadius: 6, maxhp: 20, minLevel: 3, weight:0, movePoints: 3, attackPoints: 3, attack: "MeleeBindSuicideWill", suicideOnAdd: true, attackWidth: 3, attackRange: 1, power: 5, multiBind: 6, dmgType: "chain", fullBoundBonus: 6,
		terrainTags: {"secondhalf":1, "lastthird":4, "increasingWeight":2, "trap": 20, revenge: 20}, allFloors: true, shrines: ["Rope"],
		ondeath: [
			{type: "summon", enemy: "RopeSnake", range: 2.5, count: 3, strict: true, lifetime: 30},
			{type: "summon", enemy: "LearnedRope", range: 2.5, count: 1, strict: true, lifetime: 30},
		],
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Ropes", aoe: 1.5, power: 1, chance: 1.0},
		],
	},

	{name: "ElementalRope", faction: "Elemental", playLine: "Elemental", clusterWith: "elemental", bound: "ElementalRope", squeeze: true, color: "#ffae70",
		tags: KDMapInit(["opendoors", "elemental", "rope", "melee", "chainresist", "jail", "jailer", "unarmedresist", "ropeRestraints", "ropeRestraints2", "ballGagRestraints", "leashing", "search", "doortrap"]),
		armor: 0, followRange: 1, AI: "hunt",
		Resistance: {
			profile: ["rope"],
		},
		stamina: 6,
		RestraintFilter: {
			unlimitedRestraints: true,
		},
		visionRadius: 6, maxhp: 14, minLevel:0, weight:-2, movePoints: 1.5, attackPoints: 3, attack: "MeleeBind", attackWidth: 3, attackRange: 1, tilesMinRange: 1, power: 2.5, dmgType: "chain", fullBoundBonus: 2.5,
		terrainTags: {"secondhalf":2, "thirdhalf":1, "ropeAnger": 4, "ropeRage": 4, "temple": 8, "doortrap": 4, revenge: 5, "elemental": 3, "witch": 5, "rope": 4}, allFloors: true, shrines: ["Rope", "Elements"],
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 10, noSummon: true}, {name: "Knife", ignoreInInventory: true, weight: 3, noSummon: true}],
		events: [
			{trigger: "afterEnemyTick", type: "createEffectTile", kind: "Ropes", time: 5, power: 1, chance: 0.5, aoe: 0.5},
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Ropes", aoe: 1.5, power: 1, chance: 1.0},
		],
	},

	{name: "ElementalLeather", faction: "Elemental", playLine: "Elemental", clusterWith: "elemental", bound: "ElementalLeather", squeeze: true, color: "#9999a0",
		tags: KDMapInit(["opendoors", "elemental", "leather", "melee", "chainresist", "crushresist", "jail", "antiMagic", "jailer", "leatherRestraints", "leatherRestraintsHeavy", "ballGagRestraints", "leashing", "search", "doortrap"]),
		armor: 1, followRange: 1, AI: "hunt", guardChance: 0.6, kite: 1.5,
		RestraintFilter: {
			unlimitedRestraints: true,
		},
		stamina: 3,
		visionRadius: 6, maxhp: 10, minLevel:0, weight:-2, movePoints: 1.5, attackPoints: 3, attack: "MeleeBindLock", attackWidth: 1, attackRange: 2.5, tilesMinRange: 1, power: 2.5, dmgType: "pain", fullBoundBonus: 2.5, projectileTargeting: true,
		terrainTags: {"secondhalf":2, "thirdhalf":1, "leatherAnger": 4, "leatherRage": 4, "temple": 8, "doortrap": 5, revenge: 5, "elemental": 3, "witch": 5, "leather": 4}, allFloors: true, shrines: ["Leather", "Elements"],
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 10, noSummon: true}, {name: "EarthRune", weight: 2, noSummon: true}],
		events: [
			{trigger: "afterEnemyTick", type: "createEffectTile", kind: "Belts", time: 5, power: 1, chance: 0.5, aoe: 0.5},
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Belts", aoe: 1.5, power: 1, chance: 1.0},
		],
	},


	{name: "RopeKraken", faction: "KinkyConstruct", clusterWith: "construct", tags: KDMapInit(["construct", "nosignal", "melee", "boss", "elite", "unflinching", "hunter"]),
		Awareness: {
			chaseradius: 15,
		},
		Resistance: {
			profile: ["rope", "construct"],
		},
		evasion: -1.4, armor: 1.5,
		ignorechance: 0.75, followRange: 1, AI: "hunt",  summon: [{enemy: "RopeMinion", range: 2.5, count: 4, strict: true}],
		spells: ["RopeEngulf", "SummonRopeTentacle"], spellCooldownMult: 1, spellCooldownMod: 0, ignoreflag: ["kraken"], disarm: 0.25,
		visionRadius: 9, maxhp: 40, minLevel: 3, weight:-31, movePoints: 4, attackPoints: 2, attack: "Spell", attackWidth: 1, attackRange: 1, power: 6, dmgType: "chain",
		terrainTags: {"secondhalf":12, "lastthird":5, "boss": -80, "open": 20, "passage": -60, "ropeAnger": 20, "ropeRage": 40, "increasingWeight":0.5}, allFloors: true, shrines: ["Rope"],
		events: [
			{trigger: "passout", type: "delete", chance: 1.0}, // All rope krakens vanish after you pass outevents: [
			{trigger: "spellCast", type: "ropeKrakenSummonTentacle"}, // Drain HP when casting
		],
		dropTable: [{name: "Scissors", ignoreInInventory: true, weight: 2}, {name: "Knife", ignoreInInventory: true, weight: 5}, {name: "EnchKnife", ignoreInInventory: true, weight: 2}, {name: "ElfCrystal", weight: 3}]},
	{name: "RopeMinion", faction: "KinkyConstruct", tags: KDMapInit(["construct", "nosignal", "melee", "fireweakness", "minor","krakententacle"]), ignorechance: 0.75, followRange: 1, AI: "hunt",  master: {type: "RopeKraken", range: 4}, ignoreflag: ["kraken"], dependent: true,
		visionRadius: 10,
		Awareness: {
			chaseradius: 15,
		},
		Resistance: {
			profile: ["rope", "construct"],
		},
		maxhp: 8, minLevel: 0, weight:-1000, movePoints: 1.5, attackPoints: 2, attack: "MeleePullWill", attackWidth: 1, attackRange: 1, power: 3, dmgType: "crush", noAlert: true,
		terrainTags: {}, allFloors: true, shrines: ["Rope"]},


	{name: "SlimeKraken", faction: "Slime", clusterWith: "slime", color: "#aa0088", tags: KDMapInit(["slime", "boss", "unflinching", "melee", "slimeRestraints", "meleeresist", "chainimmune", "electricweakness", "acidresist", "iceweakness", "hunter"]),
		Animations: ["squishy"],
		Awareness: {
			chaseradius: 15,
		},
		effect: {
			effect: {name: "SlimeEngulf", power: 4},
		},
		nonDirectional: true,
		regen: 0.1,
		evasion: -1.5,
		ignorechance: 0.75, followRange: 1, AI: "hunt",
		spells: ["SummonSlimeMinion"], spellCooldownMult: 1, spellCooldownMod: 0, ignoreflag: ["kraken"], disarm: 0.25,
		visionRadius: 7.5, maxhp: 30, minLevel: 3, weight:-31, movePoints: 4, attackPoints: 3, attack: "MeleeWillBindEffectSpell", attackWidth: 3, attackRange: 1.5, power: 6, dmgType: "glue",
		terrainTags: {"secondhalf":12, "lastthird":5, "boss": -40, "open": 20, "passage": -60, "alchemist": 20, "latexAnger": 20, "latexRage": 40, "increasingWeight":0.5}, allFloors: true, shrines: ["Rope"],
		events: [
			{trigger: "spellCast", type: "slimeKrakenSummonMinion"}, // Drain HP when casting
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "Slime", aoe: 1.5, power: 3, chance: 1.0, duration: 20},
			{trigger: "afterEnemyTick", type: "createEffectTile", kind: "Slime", time: 25, power: 3, chance: 1.0, aoe: 1.5}
		],
		ondeath: [{type: "spellOnSelf", spell: "WitchSlime"}],
		dropTable: [{name: "Gold", amountMin: 40, amountMax: 50, weight: 1}, {name: "Slimethrower", weight: 30, ignoreInInventory: true}, {name: "StaffDoll", weight: 40, ignoreInInventory: true}, {name: "StaffGlue", weight: 130, ignoreInInventory: true}]},

	{name: "SarcoKraken", faction: "KinkyConstruct", clusterWith: "construct", color: "#3b7d4f", tags: KDMapInit(["construct", "nosignal", "poisonresist", "soulimmune", "melee", "boss", "elite", "unflinching", "fireresist", "crushweakness", "chainweakness", "glueweakness", "hunter"]),
		armor: 3.0, spellResist: 1.5,
		evasion: -2.0,
		ignorechance: 0.75, followRange: 1, AI: "hunt",  summon: [{enemy: "SarcoMinion", range: 2.5, count: 3, strict: true}],
		spells: ["SarcoHex", "SummonSarcoTentacle"], spellCooldownMult: 1, spellCooldownMod: 0, ignoreflag: ["kraken"],
		events: [
			{trigger: "spellCast", type: "sarcoKrakenSummonTentacle"}, // Drain HP when casting
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "FabricGreen", aoe: 1.5, power: 1, chance: 1.0, duration: 20},
		],
		visionRadius: 10, maxhp: 34, minLevel: 0, weight:-11, movePoints: 4, attackPoints: 3, attack: "SpellMeleePull", attackWidth: 1.5, attackMinRange: 1.5, attackRange: 6, power: 4, pullDist: 4, pullTowardSelf: true, dmgType: "charm",
		terrainTags: {"secondhalf":16, "lastthird":5, "boss": -80, "open": 20, "passage": -60, "increasingWeight":1}, floors: KDMapInit(["tmb"]), shrines: [],
		dropTable: [{name: "Gold", amountMin: 40, amountMax: 50, weight: 12}],
	},
	{name: "SarcoMinion", faction: "KinkyConstruct", color: "#99ff99", tags: KDMapInit(["construct", "nosignal", "poisonresist", "soulimmune", "melee", "fireweakness", "minor", "slashweakness", "chainresist", "sarcotentacle", "mummyRestraints"]),
		ignorechance: 0.75, followRange: 1, AI: "hunt",  master: {type: "SarcoKraken", range: 7}, ignoreflag: ["kraken"], dependent: true, suicideOnAdd: true,
		visionRadius: 10, maxhp: 5, minLevel: 0, weight:-1000, movePoints: 1, attackPoints: 2, attack: "MeleeBindSuicide", attackWidth: 1, attackRange: 1, power: 2, fullBoundBonus: 2, dmgType: "chain", noAlert: true,
		events: [
			{trigger: "afterDamageEnemy", type: "bleedEffectTile", kind: "FabricGreen", aoe: 1.5, power: 1, chance: 1.0, duration: 20},
		],
		terrainTags: {}, allFloors: true, shrines: ["Rope"]},


	{name: "Dollsmith", faction: "Enemy", clusterWith: "smithdoll", bound: "FactoryDoll", playLine: "Robot", color: "#ff3388",
		tags: KDMapInit(["leashing", "dollsmith", "doll", "opendoors", "closedoors", "jail", "jailer", "melee", "elite", "antiMagic", "glueresist", "crushresist", "electricresist", "handcuffer", "iceweakness", "blacksteelrestraints", "blacksteelCuffs", "teasetoys"]),
		spellResist: 1.0, armor: 1.0,
		followLeashedOnly: true, followRange: 1,
		spells: ["RubberBolt"], spellCooldownMult: 2, spellCooldownMod: 0,
		Security: {
			level_key: 3,
			level_tech: 1,
		},
		Behavior: {
			thorough: 0.6,
			ensurePlayerTagArousal: ["ChastityUpper", "ChastityLower"],
		},
		stamina: 6,
		RestraintFilter: {
			bonusRestraints: 2,
			requiredItems: ["BlacksteelBelt", "BlacksteelBra"],
		},
		summon: [{enemy: "DollsmithDoll", range: 2.5, count: 1, strict: true}, {enemy: "DollsmithDoll", range: 2.5, count: 1, chance: 0.5, strict: true}],
		specialCD: 6, specialAttack: "WillBind", specialRemove: "Lock", specialExtraTags: ["redLatexBasic"], specialRemoveTags: ["blacksteelrestraints", "blacksteelCuffs", "leashing", "teasetoys"],
		specialAttackPoints: 2, specialWidth: 3, specialMsg: true, specialCondition: "canRestrainWithExtra", specialCDonAttack: true, specialIgnoreStam: true,
		attackLock: "Red",
		AI: "hunt", guardChance: 0.6, visionRadius: 7, maxhp: 14, minLevel:3, weight:15, movePoints: 2,
		attackPoints: 2, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 1.5,
		terrainTags: {"increasingWeight":1, "dollsmith": 5}, floors:KDMapInit(["bel"]), shrines: ["Metal", "Latex"],
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}]},

	{name: "Dollmaker", faction: "Enemy", clusterWith: "smithdoll", bound: "FactoryDoll", playLine: "Robot", color: "#ff88ff",
		tags: KDMapInit(["leashing", "dollsmith", "doll", "opendoors", "closedoors", "jail", "antiMagic", "jailer", "ranged", "miniboss", "antiMagic",
			"glueresist", "electricresist", "crushresist", "iceweakness", "blacksteelchastity", "latexEncase", "teasetoys"]),
		spellResist: 1.5, armor: 0.5,
		followLeashedOnly: true, followRange: 1.5, dontKiteWhenDisabled: true, kite: 4.5, noKiteWhenHarmless: true,
		spells: ["RubberBolt", "EncaseBolt", "DollConvert", "DollBoost", "EnemyCM1"],
		unlockCommandLevel: 2, unlockCommandCD: 30, spellCooldownMult: 1, spellCooldownMod: -1, buffallies: true, projectileTargeting: true, bypass: true,
		Security: {
			level_key: 3,
			level_tech: 1,
		},
		stamina: 2,
		Behavior: {
			thorough: 0.6,
			ensurePlayerTagArousal: ["ChastityUpper", "ChastityLower"],
		},
		RestraintFilter: {
			bonusRestraints: 2,
			requiredItems: ["BlacksteelBelt", "BlacksteelBra"],
		},
		useLock: "Purple",
		specialAttack: "WillBind", specialCD: 5, specialExtraTags: ["redLatexBasic"], specialRemoveTags: ["blacksteelchastity", "latexEncase", "leashing", "teasetoys"],
		specialAttackPoints: 2, specialWidth: 3, specialMsg: true, specialCondition: "canRestrainWithExtra", specialCDonAttack: true, specialIgnoreStam: true,
		AI: "hunt", guardChance: 0.6, visionRadius: 7, maxhp: 14, minLevel:5, weight:10, movePoints: 2.4,
		attackPoints: 3, attack: "SpellMeleeBindWill", attackWidth: 1, attackRange: 1, power: 4, dmgType: "glue",
		terrainTags: {"increasingWeight":1, "dollsmith": 5, "latexOptout": -9}, floors:KDMapInit(["bel"]), shrines: ["Metal", "Latex"],
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}, {name: "StaffDoll", ignoreInInventory: true, weight: 100}, ]},

	{name: "DollsmithDoll", faction: "Enemy", clusterWith: "dollsmith", bound: "EncasedFactoryDoll", playLine: "Gagged", color: "#ff3388",
		tags: KDMapInit(["opendoors", "doll", "smithdoll", "submissive", "noshop", "gagged", "alwaysAlert", "imprisonable", "minor", "ignorenoSP", "melee",
			"glueresist", "electricresist", "ticklesevereweakness", "chainresist", "charmweakness", "crushresist"]),
		ignorechance: 0, armor: 1, spellResist: 1.0, followRange: 1, AI: "hunt",  cohesion: 0.9, events: [
			{trigger: "tick", type: "secretToy"},
		],
		stamina: 4,
		master: {type: "Dollsmith", range: 2.5, loose: true, aggressive: true},
		sneakThreshold: 1, difficulty: 0.05,
		ignoreflag: ["dollSmithDoll"], failAttackflag: ["dollSmithDoll"],
		visionRadius: 7.5, maxhp: 8, minLevel:0, weight:-2, movePoints: 1.5,
		attackPoints: 3, attack: "MeleeWillSlow", attackWidth: 3, attackRange: 1, power: 2, dmgType: "charm",
		terrainTags: {"latexAnger": 3, "latexRage": 3, "metalAnger": 3, "metalRage": 3, "smithdoll": 40},
		shrines: ["Metal"], floors:KDMapInit(["bel"])},


	{name: "Rat", faction: "Beast", tags: KDMapInit(["ignorenoSP", "beast", "darkvision", "melee", "minor"]), followRange: 1, AI: "guard", squeeze: true,
		visionRadius: 4, maxhp: 1, evasion: 0.5, minLevel:0, weight:8, movePoints: 1.5, attackPoints: 2, attack: "MeleeWill", attackWidth: 1, attackRange: 1, power: 1, dmgType: "pain",
		terrainTags: {"rubble":20, "increasingWeight":-5}, floors:KDMapInit(["grv"])},
	{name: "Bat", faction: "Beast", tags: KDMapInit(["ignorenoSP", "beast", "darkvision", "melee", "minor", "chainresist", "flying"]), followRange: 1, AI: "guard", squeeze: true, ethereal: true,
		visionRadius: 4, maxhp: 1, evasion: 0.5, minLevel:0, weight:4, movePoints: 1, attackPoints: 1, attack: "MeleeWill", attackWidth: 1, attackRange: 1, power: 1, dmgType: "pain",
		terrainTags: {"rubble":20, "increasingWeight":-5}, floors:KDMapInit(["jng"])},

	{name: "Apprentice", faction: "Apprentice", color: "#9563ff", spellWhileParole: true, bound: "Apprentice", playLine: "Apprentice",
		tags: KDMapInit(["leashing", "opendoors", "rope", "binding", "human", "imprisonable", "closedoors", "apprentice", "ropeRestraints", "antiMagic", "ranged", "glueweakness", "chainweakness", "tickleweakness", "search", "jailer", "jail"]), followRange: 2,
		castWhileMoving: true, spells: ["RopeEngulfWeak", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 90, stopToCast: true, spellRdy: true, kite: 1.5, kiteChance: 0.9, cohesion: 1.0, followLeashedOnly: true,
		spellCooldownMult: 1, spellCooldownMod: 0, AI: "hunt", guardChance: 0.6, visionRadius: 5, maxhp: 8, minLevel:2, weight:10, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 1,
		terrainTags: {"secondhalf":3, "lastthird":3, "increasingWeight": -1, "apprentice": 4, "rope": 4, "magical": 4}, allFloors: true, shrines: ["Elements"],
		attackLock: "White",
		stamina: 2,
		dropTable: [{name: "RedKey", weight: 1}, {name: "Nothing", weight: 29}]},
	{name: "Apprentice2", faction: "Apprentice", color: "#ff1616", bound: "Apprentice2", playLine: "Apprentice",
		tags: KDMapInit(["leashing", "opendoors", "leather", "binding", "human", "imprisonable", "conjurer", "latexRestraints", "ropeRestraints", "closedoors", "apprentice", "ranged", "glueweakness", "chainweakness", "tickleweakness", "search"]), followRange: 2,
		castWhileMoving: true, spells: ["SummonSingleTickleHand", "SummonEnemyGag", "SummonLock", "SummonCuff", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 90, stopToCast: true, spellRdy: true, kite: 1.5, kiteChance: 0.9, cohesion: 1.0, followLeashedOnly: true,
		spellCooldownMult: 1, spellCooldownMod: 0, AI: "hunt", guardChance: 0.6, visionRadius: 5, maxhp: 8, minLevel:2, weight:6, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 1,
		terrainTags: {"secondhalf":3, "lastthird":3, "increasingWeight": -1, "apprentice": 4, "conjure": 4, "magical": 4}, allFloors: true, shrines: ["Conjure"],
		attackLock: "White",
		stamina: 2,
		dropTable: [{name: "RedKey", weight: 1}, {name: "Nothing", weight: 29}]},
	{name: "ApprenticeSlime", faction: "Apprentice", color: "#FF00FF", bound: "ApprenticeSlime", playLine: "Apprentice", tags: KDMapInit(["leashing", "opendoors", "binding", "human", "imprisonable", "conjurer", "latexRestraints", "closedoors", "apprentice", "ranged", "glueresist", "chainweakness", "tickleweakness", "search"]), followRange: 2,
		castWhileMoving: true, spells: ["SlimePuddle", "ManySlimes", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 90, stopToCast: true, spellRdy: true, kite: 1.5, kiteChance: 0.9, cohesion: 1.0, followLeashedOnly: true,
		spellCooldownMult: 1, spellCooldownMod: 0, AI: "hunt", guardChance: 0.6, visionRadius: 5, maxhp: 8, minLevel:2, weight:8, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 1,
		terrainTags: {"secondhalf":3, "lastthird":3, "increasingWeight": -1, "apprentice": 4, "slime": 4, "slimeOptOut": -2, "slimePref": 2, "magical": 4}, allFloors: true, shrines: ["Latex"],
		attackLock: "White",
		stamina: 2,
		dropTable: [{name: "RedKey", weight: 1}, {name: "Nothing", weight: 29}]},

	{name: "WitchRope", faction: "Witch", clusterWith: "apprentice", bound: "Witch", playLine: "Witch", tags: KDMapInit(["leashing", "guardCall", "jail", "rope", "jailer", "imprisonable", "opendoors", "ropeRestraints", "closedoors", "human", "witch", "ranged", "elite", "hunter"]), followRange: 2,
		castWhileMoving: true, spells: ["WitchRope", "RopeEngulfWeak", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 30, stopToCast: true, spellRdy: true, kite: 1.5, kiteChance: 0.9,
		spellCooldownMult: 1, spellCooldownMod: 0, AI: "hunt", guardChance: 0.6, visionRadius: 7, maxhp: 10, minLevel:0, weight:4, movePoints: 3, attackPoints: 2, attack: "SpellMeleeBind", attackWidth: 1, attackRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 3,
		terrainTags: {"secondhalf":1, "lastthird":2, "increasingWeight": -1, "ropeAnger": 6, "tech": -6, "rope": 6}, allFloors: true, shrines: ["Rope"], followLeashedOnly: true,
		stamina: 2,
		dropTable: [{name: "Gold", amountMin: 5, amountMax: 15, weight: 14, noSummon: true}]},

	{name: "WitchFlame", faction: "Witch", clusterWith: "elemental", bound: "WitchFlame", playLine: "Witch", color: "#d30000", tags: KDMapInit(["leashing", "guardCall", "jail", "jailer", "imprisonable", "opendoors", "handcuffer", "fire", "closedoors", "human", "witch", "ranged", "elite", "unflinching", "fireresist", "acidweakness", "iceweakness", "hunter"]), followRange: 2,
		castWhileMoving: true, spells: ["HeatBolt", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 30, stopToCast: true, spellRdy: true, kite: 1.5, kiteChance: 0.9,
		spellCooldownMult: 1, spellCooldownMod: 0, AI: "hunt", guardChance: 0.6, visionRadius: 7, maxhp: 11, minLevel:0, weight:2, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 3,
		terrainTags: {"secondhalf":1, "lastthird":2, "elementsAnger": 6, "tech": -6, "fire": 4}, allFloors: true, shrines: [], followLeashedOnly: true,
		attackLock: "White",
		stamina: 2,
		events: [{trigger: "getLights", type: "enemyTorch", power: 3.5, color: "#ff8933"}],
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 14, noSummon: true}],
	},
	{name: "WitchIce", faction: "Witch", clusterWith: "elemental", bound: "WitchIce", playLine: "Witch", color: "#73efe8", tags: KDMapInit(["leashing", "guardCall", "jail", "jailer", "imprisonable", "opendoors", "handcuffer", "ice", "closedoors", "human", "witch", "ranged", "elite", "unflinching", "crushweakness", "fireweakness", "acidresist", "iceresist", "slashresist", "hunter"]), followRange: 2,
		castWhileMoving: true, spells: ["WitchIcebolt", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 30, stopToCast: true, spellRdy: true, kite: 1.5, kiteChance: 0.9,
		spellCooldownMult: 1, spellCooldownMod: 0, AI: "hunt", guardChance: 0.6, visionRadius: 7, maxhp: 11, minLevel:2, weight:2, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 3,
		terrainTags: {"secondhalf":1, "lastthird":2, "elementsAnger": 6, "tech": -6, "ice": 6, "water": 2}, allFloors: true, shrines: [], followLeashedOnly: true,
		attackLock: "White",
		stamina: 2,
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 14, noSummon: true}],
	},
	{name: "WitchEarth", faction: "Witch", clusterWith: "elemental", bound: "WitchEarth", playLine: "Witch", color: "#f8c53a", tags: KDMapInit(["leashing", "guardCall", "jail", "jailer", "imprisonable", "opendoors", "handcuffer", "earth", "closedoors", "human", "witch", "ranged", "elite", "unflinching", "crushresist", "stunweakness", "iceweakness", "fireresist", "hunter", "slashresist", "pierceresist", "shackleRestraints"]), followRange: 1,
		castWhileMoving: true, spells: ["WitchBoulder", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 30, stopToCast: true, spellRdy: true,
		spellCooldownMult: 1, spellCooldownMod: 0, AI: "hunt", guardChance: 0.7, visionRadius: 7, maxhp: 14, minLevel:2, weight:2, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 3,
		terrainTags: {"secondhalf":1, "lastthird":2, "elementsAnger": 6, "tech": -6, "earth": 4}, allFloors: true, shrines: [], followLeashedOnly: true,
		attackLock: "White",
		stamina: 2,
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 14, noSummon: true}],
	},
	{name: "WitchWater", faction: "Witch", clusterWith: "elemental", bound: "WitchWater", playLine: "Witch", color: "#4572e3", tags: KDMapInit(["leashing", "guardCall", "jailer", "opendoors", "imprisonable", "handcuffer", "water", "closedoors", "human", "witch", "ranged", "elite", "unflinching", "fireresist", "acidresist", "electricsevereweakness", "pierceresist", "hunter", "latexRestraints"]), followRange: 1,
		castWhileMoving: true, spells: ["WitchWaterBall", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 30, stopToCast: true, spellRdy: true, evasion: 0.25,
		spellCooldownMult: 1, spellCooldownMod: 0, AI: "hunt", guardChance: 0.6, visionRadius: 7, maxhp: 11, minLevel:0, weight:2, movePoints: 3, attackPoints: 4, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 3,
		terrainTags: {"secondhalf":1, "lastthird":2, "elementsAnger": 6, "tech": -6, "water": 6, "ice": 2}, allFloors: true, shrines: [], followLeashedOnly: true,
		attackLock: "White",
		stamina: 2,
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 14, noSummon: true}],
	},



	{name: "WitchShock", faction: "Witch", clusterWith: "apprentice", bound: "Witch", playLine: "Witch", tags: KDMapInit(["leashing", "opendoors", "antiMagic", "handcuffer", "electric", "jail", "jailer", "closedoors", "human", "witch", "ranged", "miniboss", "unflinching", "electricresist", "glueweakness", "iceweakness", "hunter"]), followRange: 2,
		castWhileMoving: true, spells: ["WitchElectrify", "WitchElectricOrb", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 12, stopToCast: true, spellRdy: true, kite: 1.5, kiteChance: 0.9,
		spellCooldownMult: 1, spellCooldownMod: 0, AI: "hunt", guardChance: 0.6, visionRadius: 7, maxhp: 15, minLevel:3, weight:2, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 1, attackRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 3,
		terrainTags: {"secondhalf":2, "lastthird":1, "tech": -10, "electric": 6}, allFloors: true, shrines: [], followLeashedOnly: true,
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 14, noSummon: true}], attackLock: "White",
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#8888ff"},
			{trigger: "afterEnemyTick", type: "electrifyLocal", power: 1, chance: 0.5, aoe: 1.5}
		],
	},
	{name: "WitchMagnet", faction: "Witch", color: "#92e8c0", clusterWith: "apprentice", bound: "Witch", playLine: "Witch", tags: KDMapInit(["leashing", "opendoors", "antiMagic", "magnetCuffs", "electric", "metal", "jailer", "closedoors", "human", "witch", "ranged", "miniboss", "unflinching", "electricresist", "glueweakness", "iceweakness", "hunter"]),
		castWhileMoving: true, spells: ["AreaElectrify", "WitchElectricOrb", "EnemyCM1"], unlockCommandLevel: 2, unlockCommandCD: 10, stopToCast: true, spellRdy: true, followRange: 1,
		armor: 1,
		spellCooldownMult: 1, spellCooldownMod: -1, AI: "hunt", guardChance: 0.6, visionRadius: 8, maxhp: 24, minLevel:12, weight:1, movePoints: 2, attackPoints: 2, attack: "SpellMeleeBindLock",
		attackWidth: 1, attackRange: 1, power: 1, dmgType: "electric", fullBoundBonus: 1, noLeashUnlessExhausted: true, attackLock: "Purple",
		terrainTags: {"lastthird":1, "miniboss": -10, "tech": -10, "metalAnger": 4, "elementsAnger": 6, "increasingWeight": 0.5, "electric": 6}, allFloors: true, shrines: [], followLeashedOnly: true,
		dropTable: [{name: "BlueKey", weight: 3}, {name: "ScrollArms", weight: 1}, {name: "ScrollVerbal", weight: 1}, {name: "ScrollLegs", weight: 1}],
		RestraintFilter: {
			requiredItems: ["MagneticArmCuffs", "MagneticAnkleCuffs"],
		},
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#8888ff"},
			{trigger: "afterEnemyTick", type: "electrifyLocal", power: 1, aoe: 1.5},
		],
	},
	{name: "WitchChain", faction: "Witch", clusterWith: "bandit", bound: "WitchChain", playLine: "Witch", color: "#AAAAAA", tags: KDMapInit(["leashing", "opendoors", "antiMagic", "closedoors", "metal", "imprisonable", "jail", "jailer", "chainRestraints", "human", "witch", "melee", "miniboss", "unflinching", "electricweakness", "chainresist", "crushweakness", "meleeresist", "fireweakness", "hunter"]),
		followRange: 1, spells: ["WitchChainBolt", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 12, spellRdy: true,
		armor: 1,
		spellCooldownMult: 2, spellCooldownMod: 2, AI: "hunt", guardChance: 0.6, visionRadius: 6, maxhp: 18, minLevel:3, weight:2, movePoints: 3, disarm: 0.33,
		attackPoints: 3, attack: "MeleeLockAllBindSpell", attackWidth: 2.5, attackRange: 1, tilesMinRange: 1, power: 3, dmgType: "grope", fullBoundBonus: 3, multiBind: 2, attackLock: "Red",
		terrainTags: {"secondhalf":3, "lastthird":3, "tech": -10, "metal": 6}, allFloors: true, shrines: [],
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 14, noSummon: true}]},
	{name: "WitchMetal", faction: "Witch", clusterWith: "bandit", bound: "WitchChain", playLine: "Witch", color: "#AAAAAA",
		tags: KDMapInit(["leashing", "opendoors", "closedoors", "jailer", "chainRestraints", "shackleRestraints", "handcuffer", "human", "antiMagic", "witch", "metal", "melee", "elite", "miniboss", "unflinching", "chainresist", "electricweakness", "crushweakness", "meleeresist", "fireweakness", "hunter"]),
		armor: 2,
		followRange: 1, spells: ["ManyChains", "SummonChainWalls", "EnemyCM1"], unlockCommandLevel: 2, unlockCommandCD: 10, spellRdy: true,
		spellCooldownMult: 1, spellCooldownMod: 2, AI: "hunt", guardChance: 0.6, visionRadius: 6, maxhp: 28, minLevel:9, weight:1, movePoints: 3, disarm: 0.33,
		attackPoints: 3, attack: "MeleeLockAllBindSpell", attackWidth: 3, attackRange: 1, tilesMinRange: 1, power: 4, dmgType: "grope", fullBoundBonus: 4, multiBind: 3, attackLock: "Purple",
		terrainTags: {"lastthird":1, "miniboss": -10, "tech": -10, "metalAnger": 4, "metalFriendly": 6, "conjureAnger": 6, "increasingWeight": 0.5, "metal": 6}, allFloors: true, shrines: [],
		dropTable: [{name: "BlueKey", weight: 3}, {name: "ScrollArms", weight: 1}, {name: "ScrollVerbal", weight: 1}, {name: "ScrollLegs", weight: 1}],
	},
	{name: "WitchSlime", faction: "Witch", clusterWith: "slime", bound: "WitchSlime", playLine: "Witch",
		tags: KDMapInit(["leashing", "slimewalk", "slime", "opendoors", "closedoors", "witch", "jail", "jailer", "ranged", "miniboss", "antiMagic",
			"unflinching", "slimeRestraints", "glueimmune", "acidweakness", "electricweakness", "iceweakness", "hunter"]), squeeze: true,
		followLeashedOnly: true, kite: 1.5, kiteChance: 0.9, followRange: 4, castWhileMoving: true,
		spells: ["ManySlimes", "ManySlimes", "WitchSlimeBall", "WitchSlime", "ManySlimes", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 12, stopToCast: true, spellRdy: true,
		spellCooldownMult: 2, spellCooldownMod: -7, AI: "hunt", guardChance: 0.6, visionRadius: 8, maxhp: 13, minLevel:3, weight:2, movePoints: 3, attackPoints: 3, attack: "Spell", attackWidth: 1, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 1,
		attackLock: "Purple",
		terrainTags: {"secondhalf":2, "lastthird":1, "open": 4, "tech": -8, "slime": 4, "slimeOptOut": -2, "slimePref": 2}, allFloors: true, shrines: [],
		events: [
			{trigger: "afterEnemyTick", type: "createEffectTile", kind: "Slime", time: 12, power: 1, chance: 0.5, aoe: 0.5},
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#ff00ff"},
		],
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 14, noSummon: true}]},
	{name: "Necromancer", faction: "Enemy", clusterWith: "skeleton", bound: "Necromancer", playLine: "Necromancer",
		stamina: 2,
		tags: KDMapInit(["leashing", "guardCall", "opendoors", "jailer", "closedoors", "human", "witch", "antiMagic",
			"ranged", "miniboss", "unflinching", "meleeweakness", "hunter"]), followRange: 1, cohesion: 0.9,
		spells: ["SummonSkeleton", "SummonSkeletons", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 16, spellCooldownMult: 1, spellCooldownMod: 2, spellRdy: true,
		AI: "hunt", guardChance: 0.6, visionRadius: 6, maxhp: 20, minLevel: 2, weight:3, movePoints: 3, attackPoints: 3, attack: "MeleeLockAllWillSpellBind", attackWidth: 1, attackRange: 1, power: 5, dmgType: "grope",
		terrainTags: {"secondhalf":3, "lastthird":3, "miniboss": -7, "tech": -20}, shrines: [], floors:KDMapInit(["cat", "jng", "tmb", "tmp"]), attackLock: "White",
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 14, noSummon: true}]},

	{name: "HighWizard", clusterWith: "mushroom", bound: "HighWizard", faction: "Mushy", playLine: "Witch", color: "#a583ff", tags: KDMapInit(["leashing", "mushy", "imprisonable", "opendoors", "closedoors", "human", "ranged", "unflinching", "hunter"]), squeeze: true,
		stamina: 2,
		followLeashedOnly: true, kite: 1.5, kiteChance: 0.9, followRange: 4, castWhileMoving: true, spells: ["HighBolt", "Spores", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 12, stopToCast: true, spellRdy: true,
		spellCooldownMult: 2, spellCooldownMod: 1, AI: "hunt", guardChance: 0.6, visionRadius: 6, maxhp: 13, minLevel:4, weight:12, movePoints: 2, attackPoints: 2, attack: "Spell", attackWidth: 1, attackRange: 1, power: 1, dmgType: "tickle", fullBoundBonus: 1,
		terrainTags: {"secondhalf":2, "lastthird":1, "open": 4, "mushy": 5}, floors:KDMapInit(["cry"]), shrines: [],
		dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 9}]},
	{name: "Fungal", clusterWith: "mushroom", bound: "HighWizard", faction: "Mushy", playLine: "Fungal", color: "#a583ff", tags: KDMapInit(["leashing", "guardCall", "mushy", "jail", "jailer", "opendoors", "closedoors", "mushroom", "ranged", "unflinching", "hunter", "glueresist"]), squeeze: true,
		followLeashedOnly: true, kite: 1.5, kiteChance: 0.9, followRange: 4, castWhileMoving: true, spells: ["HighBolt", "CrystalPuff", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 30, stopToCast: true, spellRdy: true,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 4.5, color: "#892fcc"},
		],
		stamina: 2,
		spellCooldownMult: 1, spellCooldownMod: 1, AI: "hunt", guardChance: 0.6, visionRadius: 7, maxhp: 8, regen: 0.1, minLevel:3, weight:12, movePoints: 3, attackPoints: 3, attack: "SpellMeleeWillLockAll", attackWidth: 1, attackRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 2,
		attackLock: "Purple",
		terrainTags: {"secondhalf":2, "lastthird":1, "open": 4, "mushroom": 4, "mushy": 5}, floors:KDMapInit(["cry"]), shrines: [],
		dropTable: [{name: "Gold", amountMin: 5, amountMax: 0, weight: 8}]},


	{name: "Dressmaker", clusterWith: "construct", bound: "Dressmaker", playLine: "Dressmaker", faction: "Dressmaker", color: "#f135a4", tags: KDMapInit(["leashing", "antiMagic", "ribbon", "dressmaker", "imprisonable", "guardCall", "jail", "jailer", "conjurer", "acidweakness", "opendoors", "closedoors", "human", "ranged", "unflinching", "hunter", "dressRestraints"]),
		RestraintFilter: {
			requiredItems: ["BindingDress"],
		},
		stamina: 3,
		followLeashedOnly: true, kite: 1.5, kiteChance: 0.3, followRange: 4, castWhileMoving: true, spells: ["Ribbons", "Ribbons", "Ribbons", "RibbonBurst", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 90, stopToCast: true, spellRdy: true, noKiteWhenHarmless: true, noSpellsWhenHarmless: true,
		spellCooldownMult: 1, spellCooldownMod: 0, AI: "hunt", guardChance: 0.6, visionRadius: 7, maxhp: 13, minLevel:0, weight:-6, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLock", projectileTargeting: true,
		attackWidth: 1, attackRange: 1, power: 3, dmgType: "grope", fullBoundBonus: 3, focusPlayer: true, attackLock: "Purple",
		terrainTags: {"secondhalf":2, "lastthird":1, "open": 4, "dressmaker": 20, "conjureAnger": 5, "conjureRage": 4, "ropeAnger": 3, "ropeRage": 2}, allFloors: true, shrines: ["Conjure", "Rope"],
		dropTable: [{name: "Gold", amountMin: 5, amountMax: 15, weight: 14, noSummon: true}]},
	{name: "Nurse", clusterWith: "construct", bound: "Dressmaker", playLine: "Nurse", faction: "Dressmaker", color: "#f135a4",
		RestraintFilter: {
			requiredItems: ["AsylumJacket"],
		},
		stamina: 4,
		tags: KDMapInit(["leashing", "guardCall", "genericJailer", "dressmaker", "imprisonable", "leather", "jail", "jailer", "conjurer", "acidweakness", "opendoors", "closedoors", "human", "ranged", "unflinching", "hunter", "nurseRestraints"]),
		followLeashedOnly: true, kite: 1.5, kiteChance: 0.3, followRange: 4, castWhileMoving: true, spells: ["NurseBola", "NurseSyringe"], miscastmsg: "KDBanditMiscast", miscastsfx: "Miss", stopToCast: true, spellRdy: true, noKiteWhenHarmless: true, noSpellsWhenHarmless: true, dontKiteWhenDisabled: true,
		spellCooldownMult: 1, spellCooldownMod: 0, AI: "hunt", guardChance: 0.6, visionRadius: 7, maxhp: 11, minLevel:0, weight:-40, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindWillLock", projectileTargeting: true,
		attackWidth: 1, attackRange: 1, power: 3, dmgType: "charm", fullBoundBonus: 3, focusPlayer: true, attackLock: "White",
		terrainTags: {"secondhalf":2, "lastthird":1, "jailGuard": 50, "Guard": 50, "willAnger": 49, "willRage": 4, "ropeAnger": 3, "ropeRage": 2, "dressmaker": 50, "NoNurse": -10000}, allFloors: true, shrines: ["Will", "Rope"],
		events: [
			{trigger: "afterEnemyTick", type: "nurseAura", power: 0.1, dist: 2.59},
		],
		dropTable: [{name: "Gold", amountMin: 5, amountMax: 15, weight: 14, noSummon: true}]},



	{name: "Librarian", clusterWith: "construct", bound: "Librarian", playLine: "Librarian", faction: "Dressmaker", color: "#f135a4",
		tags: KDMapInit(["leashing", "ice", "metal", "rubber", "vine", "electric", "dressmaker", "miniboss", "jailer", "acidweakness", "antiMagic", "conjurer", "opendoors", "closedoors", "human", "ranged", "unflinching", "hunter", "lowWeightRibbons", "magicRibbonsHarsh", "gagSpell", "mittensSpell"]),
		followLeashedOnly: true, kite: 1.5, kiteChance: 0.3, followRange: 4, castWhileMoving: true, spells: [
			"SummonBookChain",
			"SummonBookSlime",
			"SummonBookIce",
			"SummonBookNature",
			"SummonBookForbidden",
			"SummonBookArcane",
			"SummonBookCelestial",
			"SummonBookElectric",
			"EnemyCM1"], unlockCommandLevel: 2, unlockCommandCD: 12, stopToCast: true, spellRdy: true, noKiteWhenHarmless: true, noSpellsWhenHarmless: true,
		evasion: -0.4,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 3, color: "#ffffff"},
		],
		spellCooldownMult: 0.7, spellCooldownMod: 0, AI: "hunt", guardChance: 0.6, visionRadius: 10, maxhp: 12, spellResist: 2.0, minLevel:0, weight: -12, movePoints: 2, attackPoints: 2, attack: "SpellMeleeBindLockAll", projectileAttack: true,
		attackWidth: 1, attackRange: 1, power: 3, dmgType: "grope", fullBoundBonus: 3, focusPlayer: true, attackLock: "Purple",
		terrainTags: {"secondhalf":2, "lastthird":1, "open": 10, "miniboss": -5, "dressmaker": 12, "elementsAnger": 7, "elementsRage": 5}, allFloors: true, shrines: ["Conjure", "Elements"],
		dropTable: [{name: "ScrollArms", weight: 2}, {name: "ScrollVerbal", weight: 2}, {name: "ScrollLegs", weight: 2}, {name: "ScrollPurity", weight: 1}]},

	{name: "MummyCursed", bound: "MummyCursed", nopickpocket: true, color: "#55ff55", playLine: "GaggedMummy", faction: "Bast", tags: KDMapInit(["mimicBlock", "gagged", "removeDoorSpawn", "ignoreharmless", "darkvision", "mummy", "melee", "elite", "mummyRestraints", "fireweakness", "meleeweakness", "charmweakness"]),
		evasion: -0.25, ignorechance: 1.0, armor: 0, followRange: 1, AI: "ambush", difficulty: 0.05, guardChance: 0, events: [
			{trigger: "tick", type: "secretToy"},
		],
		stamina: 2,
		Resistance: {
			profile: ["catgirl"],
		},
		GFX: {
			lighting: true,
		},
		visionRadius: 10, ambushRadius: 2.01, blindSight: 10, maxhp: 12, minLevel:0, weight:5, movePoints: 1, attackPoints: 2, attack: "MeleeBind", attackWidth: 1, attackRange: 1, power: 2, dmgType: "charm", fullBoundBonus: 1,
		terrainTags: {"secondhalf":5, "lastthird":5, "door": 50}, floors:KDMapInit(["tmb"]), shrines: ["Will"],
		dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 25}]},


	{name: "Mummy", clusterWith: "mummy", nopickpocket: true, bound: "Mummy", faction: "Bast", color: "#55ff55", tags: KDMapInit(["leashing", "religious", "antiMagic", "darkvision", "opendoors", "closedoors", "jail", "jailer", "mummy", "melee", "elite", "mummyRestraints", "fireweakness", "meleeweakness", "hunter"]), followLeashedOnly: true, followRange: 1,
		spells: ["MummyBolt", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 90, specialCD: 3, specialAttack: "BindLock", playLine: "Mummy", spellCooldownMult: 1, spellCooldownMod: 5, specialAttackPoints: 2, specialWidth: 3, spellRdy: true,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 3, color: "#00ff00"},
		],
		stamina: 4,
		Resistance: {
			profile: ["catgirl"],
		},
		attackLock: "Purple",
		AI: "hunt", guardChance: 0.6, visionRadius: 7, maxhp: 8, minLevel:3, weight:18, movePoints: 2, attackPoints: 1, attack: "SpellMeleeWill", attackWidth: 1, attackRange: 1, power: 2, fullBoundBonus: 1, dmgType: "crush",
		terrainTags: {"secondhalf":2, "lastthird":4, "open": 2, "increasingWeight":1, "mummy": 4}, floors:KDMapInit(["tmb"]), shrines: ["Will"], dropTable: [{name: "Gold", amountMin: 15, amountMax: 20, weight: 10}]},
	{name: "Cleric", clusterWith: "mummy", bound: "Cleric", faction: "Bast", playLine: "Mummy", color: "#00FF00", tags: KDMapInit(["leashing", "religious", "opendoors", "closedoors", "mummy", "ranged", "search", "fireweakness"]),
		followLeashedOnly: true, followRange: 4, attackThruBars: true,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#00ff00"},
		],
		stamina: 2,
		Resistance: {
			profile: ["catgirl"],
		},
		spells: ["ClericBeam", "EnemyCM1"], unlockCommandLevel: 1, unlockCommandCD: 90, spellCooldownMult: 1, spellCooldownMod: 0, stopToCast: true, kite: 1.5, kiteChance: 0.9,
		attackPoints: 3, attack: "Spell", attackWidth: 1, attackRange: 1, power: 3, dmgType: "fire",
		AI: "guard", visionRadius: 7, maxhp: 8, minLevel:0, weight:13, movePoints: 1.5, fullBoundBonus: 1,
		terrainTags: {"secondhalf":0, "lastthird":1, "passage": -99, "open": 4, "mummy": 5}, floors:KDMapInit(["tmb"]), shrines: ["Will"], dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 12}]},
	{name: "MeleeCleric", clusterWith: "mummy", bound: "MeleeCleric", playLine: "Mummy", faction: "Bast", tags: KDMapInit(["leashing", "darkvision", "opendoors", "closedoors", "mummy", "imprisonable", "melee", "kittyRestraints", "jail", "jailer", "search", "fireweakness"]),
		followRange: 1, blindSight: 2.5, specialCD: 5, specialAttack: "BindLock",
		armor: 1,
		stamina: 6,
		Resistance: {
			profile: ["catgirl"],
		},
		attackLock: "White",
		AI: "hunt", guardChance: 0.6, visionRadius: 6, maxhp: 8, minLevel:0, weight:15, movePoints: 1.5, attackPoints: 2, attack: "MeleeWill", attackWidth: 1, attackRange: 1, power: 2, fullBoundBonus: 2, dmgType: "grope",
		terrainTags: {"secondhalf":0, "lastthird":-2, "mummy": 6}, floors:KDMapInit(["tmb"]), shrines: ["Will"], dropTable: [{name: "Gold", amountMin: 10, amountMax: 20, weight: 12}]},

	{name: "Jailer", bound: "Jailer", tags: KDMapInit(["leashing", "opendoors", "closedoors", "antiMagic", "jail", "jailer", "genericJailer", "melee", "shackleRestraints", "guardCall", "jailRestraints"]), keys: true, followRange: 1, AI: "patrol",
		visionRadius: 6, maxhp: 12, minLevel: -1, weight:0, movePoints: 1, attackPoints: 3, attack: "MeleeBindLockWill", attackWidth: 1, attackRange: 1, power: 2, dmgType: "grope", fullBoundBonus: 2,
		stamina: 3,
		terrainTags: {"jailGuard": 15, "Guard": 1}, allFloors: true, disarm: 0.5, evasion: -0.5, focusPlayer: true, attackLock: "White",
		dropTable: [{name: "Pick", weight: 15}, {name: "RedKey", weight: 5}]},
	{name: "Chef", faction: "Jail", bound: "Jailer", tags: KDMapInit(["leashing", "ignoregagged", "opendoors", "closedoors", "melee", "ballGagRestraintsMagic"]), followRange: 1, AI: "hunt",
		visionRadius: 6, maxhp: 24, minLevel: -1, weight:-1000, movePoints: 1.4, armor: 1.5,
		stamina: 6,
		RestraintFilter: {
			unlimitedRestraints: true,
		},
		attackPoints: 2, attack: "MeleeBind", attackWidth: 2.5, attackRange: 1, power: 3, dmgType: "grope", fullBoundBonus: 2,
		terrainTags: {}, allFloors: true, disarm: 0.33, evasion: -0.5, focusPlayer: true,
		useLock: "Blue",
		dropTable: [{name: "Brownies", weight: 15}]},
	{name: "Guard", bound: "Guard", tags: KDMapInit(["leashing", "opendoors", "closedoors", "antiMagic", "miniboss", "jail", "jailer", "melee", "shackleRestraints", "jailRestraints", "guardCall"]), noDisplace: true, keys: true, followRange: 1, AI: "guard", visionRadius: 6, disarm: 0.5,
		maxhp: 12, minLevel: -1, weight:-1000, movePoints: 1, attackPoints: 3, attack: "MeleeBindLockWill", attackWidth: 1, attackRange: 1, power: 2, dmgType: "grope",
		fullBoundBonus: 2, evasion: -0.5, focusPlayer: true, attackLock: "White",
		stamina: 2,
		RemoteControl: {
			punishRemote: 3,
			punishRemoteChance: 0.15,
		},
		events: [
			{trigger: "defeat", type: "delete", chance: 1.0},
		],
		terrainTags: {"Guard": 1010}, allFloors: true, dropTable: [{name: "RedKey", weight: 1}]},
	{name: "GuardHeavy", bound: "GuardHeavy", tags: KDMapInit(["leashing", "opendoors", "closedoors", "antiMagic", "jail", "jailer", "melee", "unflinching", "hunter", "guardCall", "miniboss", "shackleRestraints", "handcuffer", "jailRestraints"]), noDisplace: true, disarm: 0.5,
		keys: true, followRange: 1, AI: "guard", visionRadius: 7, armor: 1.5, maxhp: 12, minLevel: 4, weight:-20, movePoints: 1, attackPoints: 2, evasion: -0.5, focusPlayer: true,
		attack: "MeleeBindLockWillStun", attackWidth: 3, attackRange: 1, power: 5, dmgType: "electric", stunTime: 1, attackLock: "Red",
		RemoteControl: {
			punishRemote: 4,
			punishRemoteChance: 0.2,
		},
		stamina: 3,
		events: [
			{trigger: "defeat", type: "delete", chance: 1.0},
		],
		terrainTags: {"jailGuard": 22, "increasingWeight": 1, "jailbreak": 28}, allFloors: true, dropTable: [{name: "RedKey", weight: 1}]},


	// Minibosses
	{name: "BanditMerchant", faction: "Bandit", clusterWith: "bandit", playLine: "Bandit", bound: "BanditChief",
		tags: KDMapInit([
			"opendoors", "cacheguard", "closedoors", "leashing", "bandit", "banditleader",
			"boss", "melee", "ranged", "caster", "antiMagic",
			"ballGagRestraints", "banditMagicRestraints","leatherRestraints", "leatherRestraintsHeavy", "chainweakness", "glueweakness", "jailer", "hunter"
		]), cohesion: 0.9, armor: -1, followRange: 1, AI: "hunt",
		spells: ["PoisonDagger", "BearTrap", "LustBomb"], spellCooldownMult: 1, spellCooldownMod: 0, noSpellLeashing: true,
		stamina: 2,
		summon: [
			{enemy: "BanditPet", range: 3, count: 2, chance: 1.0, strict: true},],
		visionRadius: 8, maxhp: 30, minLevel:3, weight:-20, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 3.6, attackRange: 1, power: 4, dmgType: "grope", fullBoundBonus: 2,
		terrainTags: {"boss": -5, "open": 10, "increasingWeight":1, "BanditEnemy": 11, "BanditWanted": 3, "BanditHated": 4}, shrines: ["Leather"], allFloors: true,
		factionrep: {"Bountyhunter": 0.02},
		dropTable: [{name: "Gold", amountMin: 80, amountMax: 100, weight: 10}]},



	// Bosses
	{name: "Fuuka1", playLine: "Fuuka", bound: "Fuuka", faction: "Boss", clusterWith: "zombie", tags: KDMapInit(["nosub", "leashing", "noshop", "zombie", "ranged", "mikoRestraints", "stageBoss", "boss", "nocapture", "unflinching"]),
		armor: 0, followRange: 3, AI: "guard",
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 3.5, color: "#ffffff"},
		],
		RestraintFilter: {
			unlimitedRestraints: true,
		},
		stamina: 4,
		unlockCommandLevel: 3, unlockCommandCD: 7,
		Magic: {
			castCooldownUnique: {
				FuukaOrb: 12,
			},
			priority: {
				FuukaOrb: 10,
			},
		},
		spells: ["ZombieOrb", "ManyOrbs", "SummonZombies", "EnemyCM_self"], spellCooldownMult: 0.25, spellCooldownMod: 0, castWhileMoving: true, buffallies: true, kite: 1.5, projectileAttack: true, accuracy: 0.7, noChannel: true,
		visionRadius: 8, maxhp: 80, minLevel:0, weight:-1000, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 3, attackRange: 1, power: 4, dmgType: "grope", fullBoundBonus: 4,
		attackLock: "White",
		terrainTags: {}, floors:KDMapInit([]), dropTable: [{name: "Scrolls", weight: 10}], ondeath: [{type: "dialogue", dialogue:"FuukaStage2", click: true}]},
	{name: "Fuuka2", playLine: "Fuuka", bound: "Fuuka", faction: "Boss", clusterWith: "zombie", tags: KDMapInit(["nosub", "leashing", "zombie", "ranged", "mikoRestraints", "stageBoss", "boss", "nocapture", "unflinching"]),
		armor: 0, followRange: 1, AI: "hunt",
		RestraintFilter: {
			unlimitedRestraints: true,
		},
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 7, color: "#ffffff"},
		],
		Magic: {
			castCooldownUnique: {
				FuukaOrbMulti: 12,
			},
			priority: {
				FuukaOrbMulti: 10,
			},
		},
		stamina: 6,
		unlockCommandLevel: 3, unlockCommandCD: 7,
		spells: ["ZombieOrb", "ManyOrbs", "SummonMikoGhosts", "SummonZombies", "EnemyCM_self", "FuukaOrbMulti"], spellCooldownMult: 0.25, spellCooldownMod: 0, castWhileMoving: true, buffallies: true, projectileAttack: true, accuracy: 0.85, noChannel: true,
		visionRadius: 12, maxhp: 45, minLevel:0, weight:-1000, movePoints: 1, attackPoints: 3, attack: "SpellMeleeBindLock", attackWidth: 3, attackRange: 1, power: 4, dmgType: "grope", fullBoundBonus: 4,
		attackLock: "Purple",
		terrainTags: {}, floors:KDMapInit([]), dropTable: [{name: "BlueKey", weight: 10}], ondeath: [{type: "dialogue", dialogue:"FuukaWin", click: true}]},

	{name: "MikoGhost", faction: "Ghost", color: "#FFFFFF", clusterWith: "ghost", tags: KDMapInit(["ignorenoSP", "flying", "ghost", "melee", "glueimmune", "chainimmune", "temporary"]), ethereal: true, ignorechance: 0, armor: 0, followRange: 1, AI: "hunt",
		specialCD: 7, specialAttack: "Slow",
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 2, color: "#ffffff"},
		],
		stamina: 2,
		visionRadius: 30, blindSight: 30, evasion: 9.0, alwaysEvade: true, maxhp: 1, regen: -0.051, minLevel:0, weight:-1000, movePoints: 2, attackPoints: 1, attack: "MeleeWill", attackWidth: 3, attackRange: 1, power: 1, dmgType: "grope", fullBoundBonus: 0,
		terrainTags: {}, shrines: ["Illusion"], floors:KDMapInit([]), dropTable: [{name: "Ectoplasm", chance: 0.6, weight: 10}],},

	{name: "DollmakerBoss1", playLine: "Dollmaker", bound: "DollmakerBoss", faction: "Boss", clusterWith: "dollsmith",
		tags: KDMapInit(["nosub", "leashing", "noshop", "dollsmith", "ranged",
			"glueresist", "electricresist", "crushresist", "iceweakness", "dollmakerrestraints", "controlharness", "cyberdollchastity", "teasetoys", "stageBoss", "boss", "nocapture", "unstoppable"]),
		spellResist: 2.0, armor: 0.5, followRange: 1.5, AI: "guard", kite: 4.5, noKiteWhenHarmless: true, dontKiteWhenDisabled: true,
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 3.5, color: "#ff88ff"},
			{trigger: "afterEnemyTick", type: "dollmakerMissiles", count: 2, time: 8, dist: 10, kind: "RubberMissile"},
		],
		RestraintFilter: {
			unlimitedRestraints: true,
		},
		stamina: 2,
		unlockCommandLevel: 3, unlockCommandCD: 14,
		spells: ["SummonDrones", "DollConvertMany", "DollBoost", "EnemyCM_self"],
		spellCooldownMult: 0.25, spellCooldownMod: 0, castWhileMoving: true, buffallies: true, projectileAttack: true, accuracy: 0.7, noChannel: true,
		visionRadius: 9, maxhp: 70, minLevel:0, weight:-1000, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLockAll", attackWidth: 3, attackRange: 1, power: 4, dmgType: "soul", fullBoundBonus: 4,
		terrainTags: {}, floors:KDMapInit([]),
		ondeath: [{type: "dialogue", dialogue:"DollmakerStage2", click: true}]},

	{name: "DollmakerBoss2", playLine: "Dollmaker", bound: "DollmakerBoss", faction: "Boss", clusterWith: "dollsmith",
		tags: KDMapInit(["nosub", "leashing", "noshop", "dollsmith", "ranged",
			"glueresist", "electricresist", "crushresist", "iceweakness", "dollmakerrestraints", "cyberdollchastity", "cyberdollrestraints", "controlharness", "teasetoys", "stageBoss", "boss", "nocapture", "unstoppable"]),
		spellResist: 2.0, armor: 0.5, followRange: 5.5, AI: "guard",
		events: [
			{trigger: "tick", type: "suicideWhenBound"},
			{trigger: "getLights", type: "enemyTorch", power: 3.5, color: "#ff88ff"},
			{trigger: "afterEnemyTick", type: "dollmakerMissiles", count: 2, time: 15, dist: 10, kind: "RubberNuke"},
		],
		stamina: 3,
		RestraintFilter: {
			unlimitedRestraints: true,
		},
		unlockCommandLevel: 3, unlockCommandCD: 14,
		spells: ["SummonCaptureDrones", "DollConvertMany", "DollBoost", "EnemyCM_self"],
		spellCooldownMult: 0.15, spellCooldownMod: 0, castWhileMoving: true, buffallies: true, kite: 2.5, accuracy: 0.85, noChannel: true,
		visionRadius: 20, blindSight: 7, maxhp: 60, minLevel:0, weight:-1000, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLockAll", attackWidth: 3, attackRange: 1, power: 4, dmgType: "soul", fullBoundBonus: 4,
		terrainTags: {}, floors:KDMapInit([]),
		ondeath: [{type: "dialogue", dialogue:"DollmakerStage3", click: true}]},

	{name: "DollmakerBoss3", playLine: "Dollmaker", bound: "DollmakerBoss", faction: "Boss", clusterWith: "dollsmith",
		tags: KDMapInit(["nosub", "leashing", "noshop", "dollsmith", "ranged",
			"glueresist", "electricresist", "crushresist", "iceweakness", "dollmakerrestraints", "cyberdollchastity", "cyberdollrestraints", "cyberdollheavy", "controlharness", "teasetoys", "stageBoss", "boss", "nocapture", "unstoppable"]),
		spellResist: 2.0, armor: 0.5, followRange: 1.5, AI: "guard",
		events: [
			{trigger: "getLights", type: "enemyTorch", power: 3.5, color: "#ff88ff"},
			{trigger: "afterEnemyTick", type: "dollmakerMissiles", count: 2, time: 9, dist: 10, kind: "RubberNuke"},
		],
		stamina: 5,
		RestraintFilter: {
			unlimitedRestraints: true,
		},
		unlockCommandLevel: 3, unlockCommandCD: 14,
		spells: ["DollConvertMany", "DollBoost", "EnemyCM_self", "ManyCables"],
		spellCooldownMult: 0.2, spellCooldownMod: 0, castWhileMoving: true, buffallies: true, projectileAttack: true, accuracy: 1.15, noChannel: true,
		visionRadius: 30, blindSight: 30, maxhp: 140, minLevel:0, weight:-1000, movePoints: 2, attackPoints: 3, attack: "SpellMeleeBindLockAll", attackWidth: 3, attackRange: 1, power: 4, dmgType: "soul", fullBoundBonus: 4,
		terrainTags: {}, floors:KDMapInit([]),
		ondeath: [{type: "dialogue", dialogue:"DollmakerWin", click: true}]},

	//region curse

	{name: "EpicenterCursed", faction: "Curse", color: "#880044",
		tags: KDMapInit(["opendoors", "epicenterCursed", "epicenter", "curseTrap", "ghost", "cursed", "soulimmune", "melee", "fireweakness", "shadowimmune", "glueimmune", "chainimmune", "shadowHands", "poisonimmune", "meleeresist", "flying"]),
		ignorechance: 0, armor: 0, followRange: 1, AI: "huntshadow", noAlert: true, hitsfx: "Evil",
		ethereal: true,
		spells: ["ManyShadowHands", "ManyObsidianBolts", "CursingCircle", "CursingCircle"], spellCooldownMult: 1.1, spellCooldownMod: 0, castWhileMoving: true,
		visionRadius: 15, blindSight: 8, evasion: -2, maxhp: 61.7, minLevel: 0, weight:0,
		movePoints: 4, attackPoints: 2, attack: "Spell",
		attackWidth: 1, attackRange: 1, power: 1.0, dmgType: "cold", fullBoundBonus: 4,
		regen: 0.02,
		stamina: 2,
		events: [
			{trigger: "tick", type: "DeleteCurse", tags: ["cursedCollar"]},
			{trigger: "tick", type: "EpicenterAssignHP"},
		],
		terrainTags: {"curseTrap": 10}, shrines: [], allFloors: true,
		dropTable: [{name: "ManaOrb", weight: 1}, {name: "DarkKatana", weight: 100, ignoreInInventory: true}, {name: "StaffDoll", weight: 100, ignoreInInventory: true}, {name: "StaffBind", weight: 100, ignoreInInventory: true}, {name: "MagicAxe", weight: 100, ignoreInInventory: true}],
	},
	{name: "EpicenterCursed2", faction: "Curse", color: "#a4affa",
		tags: KDMapInit(["opendoors", "epicenterCursed", "epicenter", "curseTrap", "ghost", "cursed", "soulimmune", "melee", "fireweakness", "shadowimmune", "glueimmune", "chainimmune", "shadowHands", "poisonimmune", "meleeresist", "flying"]),
		ignorechance: 0, armor: 0, followRange: 1, AI: "huntshadow", noAlert: true, hitsfx: "Evil",
		ethereal: true,
		spells: ["ManyShadowHands", "ManyMithrilBolts", "CursingCircle2", "CursingCircle2"], spellCooldownMult: 1.1, spellCooldownMod: 0, castWhileMoving: true,
		visionRadius: 15, blindSight: 8, evasion: -2, maxhp: 61.7, minLevel: 0, weight:0,
		movePoints: 4, attackPoints: 2, attack: "Spell",
		attackWidth: 1, attackRange: 1, power: 1.0, dmgType: "cold", fullBoundBonus: 4,
		regen: 0.02,
		stamina: 2,
		events: [
			{trigger: "tick", type: "DeleteCurse", tags: ["cursedCollar2"]},
			{trigger: "tick", type: "EpicenterAssignHP"},
		],
		terrainTags: {"curseTrap": 10}, shrines: [], allFloors: true,
		dropTable: [{name: "ManaOrb", weight: 1}, {name: "StaffStorm", weight: 100, ignoreInInventory: true}, {name: "StaffIncineration", weight: 100, ignoreInInventory: true}, {name: "StaffFrostbite", weight: 100, ignoreInInventory: true}, {name: "MagicSword", weight: 100, ignoreInInventory: true}],
	},
	//endregion
];


let KDOndeath = {
	"summon": (enemy, o) => {
		KinkyDungeonSummonEnemy(enemy.x, enemy.y, o.enemy, o.count, o.range, o.strict, o.lifetime, o.hidden, undefined, o.faction || KDGetFaction(enemy), o.hostile, o.minradius, o.startAware, undefined, o.hideTimer);
	},
	"dialogue": (enemy, o) => {
		KDStartDialog(o.dialogue, enemy.Enemy.name, o.click, enemy.personality, enemy);
	},
	"spellOnSelf": (enemy, o) => {
		let spell = KinkyDungeonFindSpell(o.spell, true);
		if (spell) KinkyDungeonCastSpell(enemy.x, enemy.y, spell, undefined, undefined, undefined, KDGetFaction(enemy));
	},
	"removeQuest": (enemy, o) => {
		KDRemoveQuest(o.quest);
	},
	"dollID": (enemy, o) => {
		if (KDistChebyshev(enemy.x - KinkyDungeonPlayerEntity.x, enemy.y - KinkyDungeonPlayerEntity.y) < 9) {
			if (!KinkyDungeonFlags.get("gotDollID")) {
				let dropped = {x:enemy.x, y:enemy.y, name: "DollID"};
				KDMapData.GroundItems.push(dropped);
				KinkyDungeonSetFlag("gotDollID", -1, 1);
			}
		}
	},
	"addQuest": (enemy, o) => {
		KDAddQuest(o.quest);
	},
};

/** @type {Record<string, SpecialCondition>} */
let KDSpecialConditions = {
	"canRestrainWithExtra": {
		resetCD: false,
		criteria: (enemy, AIData) => {
			let rThresh = enemy.Enemy.RestraintFilter?.powerThresh || KDDefaultRestraintThresh;
			return KDGetRestraintsEligible(
				{tags: KDGetTags(enemy, true)}, MiniGameKinkyDungeonLevel,
				KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint],
				enemy.Enemy.bypass,
					enemy.Enemy.useLock ? enemy.Enemy.useLock : "",
					!(enemy.Enemy.ignoreStaminaForBinds || (true && enemy.Enemy.specialIgnoreStam)) && !AIData.attack.includes("Suicide"),
					false,
					!(KinkyDungeonStatsChoice.has("TightRestraints") || enemy.Enemy.tags.miniboss || enemy.Enemy.tags.boss),
					KDGetExtraTags(enemy, true),
					false,
					{
						maxPower: rThresh + 0.01,
						looseLimit: true,
						onlyUnlimited: true,
						ignore: enemy.items,
					}, enemy
			).length > 0;
		}
	}
};
/**
 * @type {Record<string, KDSpecialEnemyBuff>}
 */
let KDSpecialBuffs = {
	"Armored": {
		filter: (enemy, types) => {
			return types.some((type) => {return ["HighValue", "NGP_Reg", "Hardmode_Reg"].includes(type);});
		},
		weight: (enemy, types) => {
			return 40;
		},
		apply: (enemy, types) => {
			KinkyDungeonApplyBuffToEntity(enemy, {
				id: "Armored",
				aura: "#ffffff",
				aurasprite: "Armored",
				noAuraColor: true,
				duration: 9999,
				power: 3,
				type: "Armor",
			});
		},
	},
	"Fast": {
		filter: (enemy, types) => {
			if (KDIsImmobile(enemy)) return false;
			return types.some((type) => {return ["HighValue", "NGP_Reg", "Hardmode_Reg"].includes(type);});
		},
		weight: (enemy, types) => {
			return 40;
		},
		apply: (enemy, types) => {
			KinkyDungeonApplyBuffToEntity(enemy, {
				id: "Fast",
				aura: "#ffffff",
				aurasprite: "Fast",
				noAuraColor: true,
				duration: 9999,
				power: 0.5,
				type: "MoveSpeed",
			});
		},
	},
	"Muscle": {
		filter: (enemy, types) => {
			if (!enemy.Enemy.attack?.includes("Melee") && !enemy.Enemy.specialAttack?.includes("Melee")) return false;
			return types.some((type) => {return ["HighValue", "NGP_Reg", "Hardmode_Reg"].includes(type);});
		},
		weight: (enemy, types) => {
			return 40;
		},
		apply: (enemy, types) => {
			KinkyDungeonApplyBuffToEntity(enemy, {
				id: "Muscle",
				aura: "#ffffff",
				aurasprite: "Muscle",
				noAuraColor: true,
				duration: 9999,
				power: enemy.Enemy.power*2,
				type: "AttackPower",
			});
			KinkyDungeonApplyBuffToEntity(enemy, {
				id: "Muscle2",
				duration: 9999,
				power: 1,
				type: "AttackWidth",
			});
		},
	},
	"EnergyShield": {
		filter: (enemy, types) => {
			return types.some((type) => {return ["HighValue", "NGP_Reg", "Hardmode_Reg"].includes(type);});
		},
		weight: (enemy, types) => {
			return 40;
		},
		apply: (enemy, types) => {
			KinkyDungeonApplyBuffToEntity(enemy, {
				id: "EnergyShield",
				aura: "#ffffff",
				aurasprite: "EnergyShield",
				duration: 9999,
				noAuraColor: true,
				power: 3,
				type: "SpellResist",
			});
		},
	},
	"HealingAura": {
		filter: (enemy, types) => {
			if (enemy.Enemy.tags?.robot || enemy.Enemy.tags?.construct || enemy.Enemy.tags?.nobrain) return false;
			return types.some((type) => {return ["HighValue", "NGP_Boss", "Hardmode_Boss", "Extreme"].includes(type);});
		},
		weight: (enemy, types) => {
			return 10 + (enemy.Enemy.shrines?.includes("Will") ? 20 : 0);
		},
		apply: (enemy, types) => {
			KinkyDungeonApplyBuffToEntity(enemy, {
				id: "HealingAuraSBuff",
				aura: "#ffffff",
				aurasprite: "HealingAura",
				duration: 9999,
				noAuraColor: true,
				power: 1,
				events: [
					{trigger: "afterEnemyTick", type: "nurseAura", power: 0.3, dist: 1.5},
				],
			});
		},
	},
	"Missiles": {
		filter: (enemy, types) => {
			return types.some((type) => {return ["HighValue", "NGP_Boss", "Hardmode_Boss", "Extreme"].includes(type);});
		},
		weight: (enemy, types) => {
			return 4 + (enemy.Enemy.shrines?.includes("Latex") || enemy.Enemy.tags?.robot ? 40 : 0);
		},
		apply: (enemy, types) => {
			let count = Math.min(4, Math.max(1, Math.ceil(KDGetEffLevel()/3)));
			if ((enemy.Enemy.tags?.boss)) count = 4;
			else if (enemy.Enemy.tags?.miniboss) count = Math.max(count, 3);
			else if (enemy.Enemy.tags?.elite) count = Math.max(count, 2);
			KinkyDungeonApplyBuffToEntity(enemy, {
				id: "Missiles",
				duration: 9999,
				power: count,
				aura: "#ffffff",
				aurasprite: "Missiles4",
				noAuraColor: true,
				events: [
					{trigger: "afterEnemyTick", count: count, type: "Missiles",
						time: 12 + ((enemy.Enemy.tags?.minor) ? 10 : (enemy.Enemy.tags?.elite || enemy.Enemy.tags?.miniboss || enemy.Enemy.tags?.boss) ? 0 : 5), spell: "RubberMissile"},
				],
			});
		},
	},
	"Airbender": {
		filter: (enemy, types) => {
			return types.some((type) => {return ["HighValue", "NGP_Boss", "Hardmode_Boss", "Extreme"].includes(type);});
		},
		weight: (enemy, types) => {
			return 4 + ((enemy.Enemy.kite || enemy.Enemy.tags?.ranged) ? 20 : 0);
		},
		apply: (enemy, types) => {
			let count = 2;
			KinkyDungeonApplyBuffToEntity(enemy, {
				id: "Airbender",
				duration: 9999,
				power: count,
				aura: "#ffffff",
				aurasprite: "Airbender1",
				noAuraColor: true,
				events: [
					{trigger: "afterEnemyTick", count: count, type: "Airbender", time: 4 + ((enemy.Enemy.tags?.minor) ? 4 : (enemy.Enemy.tags?.elite || enemy.Enemy.tags?.miniboss || enemy.Enemy.tags?.boss) ? 0 : 2), spell: "EnemyWindBlast"},
				],
			});
		},
	},
	"ElectrifyX": {
		filter: (enemy, types) => {
			return types.some((type) => {return ["HighValue", "NGP_Boss", "Hardmode_Boss"].includes(type);});
		},
		weight: (enemy, types) => {
			return 10 + (enemy.Enemy.shrines?.includes("Metal") ? 20 : 0) + ((enemy.Enemy.tags?.water) ? 20 : 0);
		},
		apply: (enemy, types) => {
			KinkyDungeonApplyBuffToEntity(enemy, {
				id: "ElectrifyX",
				duration: 9999,
				power: 1,
				events: [
					{trigger: "afterEnemyTick", type: "spellX", time: 4, spell: "WitchElectrify"},
				],
			});
		},
	},
	"FireexpX": {
		filter: (enemy, types) => {
			if (enemy.Enemy.tags?.water || enemy.Enemy.tags?.ice) return false;
			return types.some((type) => {return ["HighValue", "NGP_Boss", "Hardmode_Boss"].includes(type);});
		},
		weight: (enemy, types) => {
			return 10 + (enemy.Enemy.tags?.fire ? 20 : 0);
		},
		apply: (enemy, types) => {
			KinkyDungeonApplyBuffToEntity(enemy, {
				id: "FireexpX",
				duration: 9999,
				power: 1,
				events: [
					{trigger: "afterEnemyTick", type: "spellX", time: 3, spell: "Fireexp"},
				],
			});
		},
	},
	"VineexpX": {
		filter: (enemy, types) => {
			return types.some((type) => {return ["HighValue", "NGP_Boss", "Hardmode_Boss"].includes(type);});
		},
		weight: (enemy, types) => {
			return 10 + (enemy.Enemy.tags?.plant || enemy.Enemy.tags?.nature || enemy.Enemy.tags?.elf ? 20 : 0);
		},
		apply: (enemy, types) => {
			KinkyDungeonApplyBuffToEntity(enemy, {
				id: "VineexpX",
				duration: 9999,
				power: 1,
				events: [
					{trigger: "afterEnemyTick", type: "spellX", time: 3, spell: "Vineexp"},
				],
			});
		},
	},
	"BubbleexpX": {
		filter: (enemy, types) => {
			if (enemy.Enemy.tags?.fire) return false;
			return types.some((type) => {return ["HighValue", "NGP_Boss", "Hardmode_Boss"].includes(type);});
		},
		weight: (enemy, types) => {
			return 10 + ((enemy.Enemy.tags?.water) ? 20 : 0);
		},
		apply: (enemy, types) => {
			KinkyDungeonApplyBuffToEntity(enemy, {
				id: "BubbleexpX",
				duration: 9999,
				power: 1,
				events: [
					{trigger: "afterEnemyTick", type: "spellX", time: 6, spell: "Bubbleexp"},
				],
			});
		},
	},
	"IceexpX": {
		filter: (enemy, types) => {
			return types.some((type) => {return ["HighValue", "NGP_Boss", "Hardmode_Boss"].includes(type);});
		},
		weight: (enemy, types) => {
			return 10 + ((enemy.Enemy.tags?.ice) ? 20 : 0);
		},
		apply: (enemy, types) => {
			KinkyDungeonApplyBuffToEntity(enemy, {
				id: "IceexpX",
				duration: 9999,
				power: 1,
				events: [
					{trigger: "afterEnemyTick", type: "spellX", time: 6, spell: "Iceexp"},
				],
			});
		},
	},
	"BearTrapper": {
		filter: (enemy, types) => {
			if (KDIsImmobile(enemy)) return false;
			return types.some((type) => {return ["HighValue", "NGP_Boss", "Hardmode_Boss"].includes(type);});
		},
		weight: (enemy, types) => {
			return 10 + (enemy.Enemy.attack?.includes("Bind") ? 20 : 0);
		},
		apply: (enemy, types) => {
			KinkyDungeonApplyBuffToEntity(enemy, {
				id: "BearTrapper",
				duration: 9999,
				power: 1,
				events: [
					{trigger: "afterEnemyTick", type: "spellX", time: 8, spell: "BearTrap", always: true, count: 1},
				],
			});
		},
	},
};

/**
 *
 * @param {entity} enemy
 */
function KDEndEnemyAction(enemy) {
	if (KDEnemyAction[enemy.action]?.end) {
		KDEnemyAction[enemy.action].end(enemy);
	}
	enemy.action = "";
}
/**
 *
 * @param {entity} enemy
 */
function KDMaintainEnemyAction(enemy, delta) {
	if (!KDEnemyAction[enemy.action]?.maintain || !KDEnemyAction[enemy.action].maintain(enemy, delta)) {
		KDEndEnemyAction(enemy);
	}
}

/**
 * @type {Record<string, KDEnemyAction>}
 */
let KDEnemyAction = {
	"investigatesound": {
		holdleash: true,
		end: (enemy) => {
			// Reset position
			enemy.gx = enemy.x;
			enemy.gy = enemy.y;
		},
		maintain: (enemy, delta) => {
			// Stops investigating if alerted
			return !(enemy.idle || (KinkyDungeonAggressive(enemy) && enemy.aware) || enemy.attackPoints || KDistChebyshev(enemy.x - enemy.gx, enemy.y - enemy.gy) <= 1.5);
		},
		sprint: true,
	},
};