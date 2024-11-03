"use strict";

let KinkyDungeonBones = {

};

let KDPatronAdventurers = [
];

let KDPatronCustomEnemies = new Map([
	["Wolfgirl", [
		{name: "Yanen Mian", color: "#63ab3f", prisoner: false, free: true, customPlayLine: "", customIntro: "ei hey!", customSprite: ""},
		{name: "Naho Kuroneko", color: "#ffac33",
			prisoner: true, free: true, customPlayLine: "",
			customIntro: "Oh hello! Do you want to help me try my new collection?", customSprite: ""},
		{name: "Seika", color: "#00ffff", prisoner: true, free: true,
			customPlayLine: "", customIntro: "Finally...! Something interesting!", customSprite: ""},
		{name: "Yen", color: "#2b962d", prisoner: true, free: true, customPlayLine: "Yen", customIntro: "Howdy.", customSprite: ""},
		{name: "Miny", color: "#9c2a70", prisoner: false, free: true, customPlayLine: "", customIntro: "You should join my pack!", customSprite: ""},
		{name: "Sivasa", color: "#8888ff", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Alexandra", color: "#6241e1", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Nekora", color: "#42a459", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Emeia", color: "#00A7FF", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Goldie", color: "#f8c53a", prisoner: true, free: true, customPlayLine: "", customIntro: "Hey cutie, I'm Goldie. Why don't we play a little?", customSprite: ""},
		{name: "Dana", color: "#4444ff", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Loral", color: "#ab1d1d", prisoner: true, free: true, customPlayLine: "", customIntro: "Are you a good girl?", customSprite: ""},
		{name: "Yami", color: "#88ff88", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Animi", color: "#ff9999", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Ladica", color: "#44ff44", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "FlameTail", color: "#ff5555", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Nobu", color: "#00FFFF", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "NobIngridu", color: "#4EB85D", prisoner: false, free: true, customPlayLine: "", customIntro: "Hey hey people, it's ya girl, Ingrid!", customSprite: ""},
		{name: "Moranql", color: "#ff5555", prisoner: true, free: false, customPlayLine: "", customIntro: "0x0", customSprite: ""},
		{name: "Harumi", color: "#F223D4", prisoner: true, free: true, customPlayLine: "", customIntro: "This is an uncivilized place, I have some things to give you...", customSprite: ""},
		{name: "Joelle", color: "#4f60b8", prisoner: true, free: false, customPlayLine: "", customIntro: "Bork!", customSprite: ""},
		{name: "Gery", color: "#63ab3f", prisoner: true, free: true, customPlayLine: "", customIntro: "Heo :3", customSprite: ""},
		{name: "Gery", color: "#00ff00", prisoner: true, free: true, customPlayLine: "", customIntro: "I'll make you mine!", customSprite: ""},
	],
	],
	["WolfInstructor", [
		{name: "Ladica, the Stoneclaw", color: "#4CBB17", prisoner: false, free: true, customPlayLine: "", customIntro: "Ready for yer spanking?", customSprite: ""},
		{name: "Acapelle", color: "#ad2f45", prisoner: false, free: true, customPlayLine: "", customIntro: "Hi! I'm Acapelle. To what do I owe the pleasure?", customSprite: ""},
	],
	],
	["Necromancer", [
		{name: "Yuri The Shy Necromancer", color: "#8138FF", prisoner: false, free: true, customPlayLine: "",
			customOutfit: "Yuri", customStyle: "Yuri",
			customIntro: "Ple-please rise m-my skeletons", customSprite: ""},
	],
	],
	["ElementalLeather", [
		{name: "Jaina", color: "#FF00DC", prisoner: true, free: true, customPlayLine: "",
			customOutfit: "Hilda", customStyle: "Hilda",
			customIntro: "Let’s have some fun~", customSprite: "Hilda"},
		{name: "Timyang", color: "#2257e9", prisoner: true, free: true, customPlayLine: "", customIntro: "I'm Timyang, do you have anything to do with me?", customSprite: ""},
	],
	],
	["WolfgirlPet", [
		{name: "Demetria", color: "#c9d4fd", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Sayaron", color: "#841ee1", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Arii", color: "#ff88ff", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Aleiza", color: "#32d8ff", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Dana", color: "#000B77", prisoner: true, free: true, customPlayLine: "", customIntro: "*stands there... MENACINGLY*", customSprite: ""},
	],
	],
	["Nurse", [
		{name: "Rena", color: "#a452ff", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Str Nurse", color: "#ffffff", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Fableite", color: "#999999", prisoner: false, free: true, customPlayLine: "", customIntro: "Care for an Examination?", customSprite: ""},
	],
	],
	["RopeKraken", [
		{name: "Yandere Harem", color: "#ffffff", prisoner: true, free: true, customPlayLine: "", customIntro: "It's krakening time", customSprite: ""},
	],
	],
	["ShadowGhast", [
		{name: "Erma", color: "#23ddee", prisoner: false, free: true, customPlayLine: "", customIntro: "You haven't come across my pet Raven, have you?", customSprite: ""},
	],
	],
	["ElementalLatex", [
		{name: "Samsy", color: "#2f847f", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Athena", color: "#7e52cc", prisoner: false, free: true, customPlayLine: "Athena", customIntro: "Hey there cutie", customSprite: ""},
		{name: "Brunhilda", color: "#44ff44", prisoner: true, free: true,
			customPlayLine: "Athena", customIntro: "Aren't you lovely, let's make you latex shiny! <3", customSprite: ""},
	],
	],
	["ElementalRubber", [
		{name: "Amelisia", color: "#ff5500", prisoner: true, free: true,
			customPlayLine: "", customIntro: "I'd love to hear your moans through your gags.", customSprite: ""},
		{name: "Athena", color: "#7e52cc", prisoner: false, free: true, customPlayLine: "Athena", customIntro: "Hey there cutie!", customSprite: ""},
	],
	],
	["Dragon", [
		{name: "Garss", color: "#ff8888", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["Conjurer", [
		{name: "Stela", color: "#9c2767", prisoner: false, free: true, customPlayLine: "Selly", customIntro: "I am Stela. But to you, sweetie? Call me Mistress.", customSprite: "Selly",
			pets: {
				"Frog": [
					{name: "Parov", color: "#781d4f", prisoner: false, free: true, customPlayLine: "", customIntro: "Glorp glorpy glorp.", customSprite: "Parov"},
				]
			},
		},
		{name: "Viola", color: "#8c46e8", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: "Viola",
			customStyle: "Viola", customOutfit: "Viola",
			pets: {
				"Frog": [
					{name: "Leff", color: "#88ff88", prisoner: false, free: true, customPlayLine: "", customIntro: "Glorp glorpy glorp.", customSprite: ""},
				]
			},
		},
		{name: "Lucy", color: "#79009d", prisoner: false, free: true, customPlayLine: "", customIntro: "Come here so I can tie you up and cuddle you~", customSprite: "",
			pets: {
				"Frog": [
					{name: "Fred", color: "#88ff88", prisoner: false, free: true, customPlayLine: "", customIntro: "Glorp glorpy glorp.", customSprite: ""},
				]
			},
		},
		{name: "Warren Rabbit", color: "#8888ff", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: "",
			pets: {
				"Frog": [
					{name: "Fred", color: "#8888ff", prisoner: false, free: true, customPlayLine: "", customIntro: "Glorp glorpy glorp.", customSprite: ""},
				]
			},
		},
		{name: "Kathy", color: "#aaff88", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: "",
			pets: {
				"Frog": [
					{name: "Fred", color: "#88ff88", prisoner: false, free: true, customPlayLine: "", customIntro: "Glorp glorpy glorp.", customSprite: ""},
				]
			},
		},
	],
	],
	["DragonShadow", [
		{name: "Gwen", color: "#7b43ef", prisoner: false, free: true, customPlayLine: "DragonShadowGwen", customIntro: "", customSprite: ""},
		{name: "Melody", color: "#d99bff", prisoner: true, free: true,
			customPlayLine: "", customIntro: "Let's summon that beautiful voice, shall we?", customSprite: ""},
	],
	],
	["WolfApprentice", [
		{name: "The_Goo", color: "#53f124", prisoner: true, free: true,
			customPlayLine: "", customIntro: "I was a coyote in my past life.", customSprite: ""},
		{name: "Ayami", color: "#967bb6", prisoner: true, free: true,
			customPlayLine: "", customIntro: "Hey cutie!", customSprite: ""},
	],
	],
	["WolfExecutive", [
		{name: "Treve", color: "#999999", prisoner: true, free: true,
			customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["Adventurer_Brat_Fighter", [
		{name: "Rook", color: "#ff5555", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: "Rook"},
	],
	],
	["DragonLeaderDuelist", [
		{name: "Kaitlyn", color: "#ff5555", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["Rat", [
		{name: "Derek", color: "#ffffff",
			prisoner: true, free: true, customPlayLine: "",
			customIntro: "*squeak*", customSprite: ""},
	],
	],
	["NinjaStalker", [
		{name: "Alisa", color: "#575699", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: "Alisa"},
		{name: "Rai", color: "#5D6396", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: "Rai"},
	],
	],
	["Ninja", [
		{name: "Rai", color: "#5D6396", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: "Rai2"},
		{name: "Alisa", color: "#575699", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: "Alisa"},
		{name: "Rizo", color: "#ff5555", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: "Alisa"},
		{name: "Rizo", color: "#ff5555", prisoner: true, free: true, customPlayLine: "", customIntro: "Another day, another hunt.", customSprite: "Alisa"},
	],
	],
	["SlimeAdv", [
		{name: "Garry", color: "#a52a2a", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Rena", color: "#C8C8FF", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Rappy The Toy", color: "#C759FF", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Yolana", color: "#92e8c0", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Druppy", color: "#e76bf2", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Robyn", color: "#ba7cfc", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["DollsmithDoll", [
		{name: "Crystal", color: "#e76bf2", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "zjc", color: "#ffffff", prisoner: false, free: true,
			customPlayLine: "", customIntro: "See you next floor... Mmmmm!", customSprite: ""},
	],
	],
	["SmallSlime", [
		{name: "Chuangpi", color: "#F0FFFF", prisoner: false, free: true,
			customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Miaowu~Miaowu~", color: "#f7a1e5", prisoner: false, free: true, customPlayLine: "", customIntro: "miao~", customSprite: ""},
		{name: "Sand", color: "#ffd270", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Sasheen", color: "#ad2f45", prisoner: false, free: true, customPlayLine: "", customIntro: "Hai!", customSprite: ""},
		{name: "Ty", color: "#ff5555", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Freya", color: "#c93fab", prisoner: false, free: true, customPlayLine: "", customIntro: "*giggle*", customSprite: ""},
		{name: "Akanit", color: "#e9225d", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Perfiano", color: "#ffff00", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["WitchRope", [
		{name: "Kamikaze roper", color: "#ffae70", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Lami", color: "#7d1dff", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Mameli", color: "#63ab3f", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["Miner", [
		{name: "Dwarf (but not short)", color: "#e92222", prisoner: true, free: true, customPlayLine: "",
			customIntro: "ROCK AND STONE!",
		},
		{name: "Nova", color: "#3b7d4f", prisoner: false, free: true, customPlayLine: "",
			customIntro: "We're gonna have a blast~!",
		},
	],
	],
	["MaidforceStalker", [
		{name: "Chandra", color: "#340000", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Tromva", color: "#3dccab", prisoner: true, free: true, customPlayLine: "", customIntro: "Wow!", customSprite: ""},
		{name: "Sanhua", color: "#444444", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["ApprenticeSlime", [
		{name: "Gabrielle", color: "#e7cf1a", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["Alchemist", [
		{name: "Morgan", color: "#6241e1", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Daiseng", color: "#ff9900", prisoner: false, free: true, customPlayLine: "", customIntro: "Do I look like a taxi driver to you?", customSprite: ""},
		{name: "Matt", color: "#ff0000", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Luplus Falmele", color: "#22ffff",
			prisoner: true, free: true,
			customPlayLine: "", customIntro: "Latex can last for hundreds of years, so why can't we?", customSprite: ""},
	],
	],
	["AlchemistPet", [
		{name: "Vixen", color: "#a632ec", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["Dressmaker", [
		{name: "Maelith", color: "#3E6B3A", prisoner: true, free: true,
			customPlayLine: "", customIntro: "You look bored, love... Let me fix that.", customSprite: ""},
		{name: "Rayne", color: "#ff9900", prisoner: true, free: true,
			customPlayLine: "", customIntro: "Look at all these cute ribbons and frills!", customSprite: ""},
		{name: "A Lazy Dressmaker", color: "#fad6ff", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Melissa", color: "#853cff", prisoner: true, free: true, customPlayLine: "Melissa",
			customStyle: "Melissa", customOutfit: "Melissa", customOutfitBound: "MelissaBound",
			customIntro: "My name's Melissa! I know I'm pretty, but try not to stare too much~", customSprite: "Melissa"},
		{name: "Alice", color: "#ee99ee", prisoner: true, free: true, customPlayLine: "", customIntro: "Hello, I am a dressmaker and the name's Alice! Need a new dress?", customSprite: ""},
		{name: "Monika", color: "#49dc20", prisoner: true, free: true, customPlayLine: "", customIntro: "Whatcha doing?", customSprite: ""},
	],
	],
	["Demon", [
		{name: "PumpkinMB", color: "#3ea2c9", prisoner: true, free: true,
			customPlayLine: "", customIntro: "Just because my name is pumpkin doesn't mean my name shouldn't be blue!", customSprite: ""},
	],
	],
	["Maidforce", [
		{name: "Handcuffed Girl", color: "#ce6cf4", prisoner: true, free: false, customPlayLine: "",
			customIntro: "It felt as if I was chained for eternity!", customSprite: ""},
		{name: "Handcuffed Girl", color: "#ffa1fd", prisoner: true, free: false, customPlayLine: "",
			customIntro: "Would you like to play with me, hun?", customSprite: ""},
		{name: "Arianna", color: "#3fc968", prisoner: true, free: true, customPlayLine: "",
			customIntro: "Lets negotiate, you surrender and I let you live!", customSprite: ""},
		{name: "Terra", color: "#00ff00", prisoner: true, free: true, customPlayLine: "",
			customIntro: "", customSprite: ""},
		{name: "Cuffed Girl", color: "#e347f1", prisoner: true, free: true, customPlayLine: "", customIntro: "Would you like to play with me?", customSprite: ""},
		{name: "Meer", color: "#ff8888", prisoner: true, free: true, customPlayLine: "", customIntro: "Maids!", customSprite: ""},
		{name: "Taesjha", color: "#ff9ffd", prisoner: true, free: false,
			customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Robin", color: "#e846c5", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Lillian", color: "#ff77aa", prisoner: false, free: true, customPlayLine: "", customIntro: "Well met, traveler!", customSprite: ""},
		{name: "Kishi Masami", color: "#9a43b5", prisoner: true, free: true, customPlayLine: "", customIntro: "Lakad Matatag, Normalin Normalin!", customSprite: ""},
		{name: "Ping", color: "#ff9900", prisoner: true, free: true,
			customPlayLine: "", customIntro: "I will catch you.", customSprite: ""},
		{name: "Ester", color: "#97edca", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Rest", color: "#999999", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Zelenes", color: "#2244ff", prisoner: true, free: false, customPlayLine: "", customIntro: "Please help me.", customSprite: ""},
		{name: "Rika Mercury", color: "#92e8e5", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Maidlinmo", color: "#ff5555", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "April", color: "#4444ff", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Aika", color: "#be52e6", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Kiera", color: "#310051", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Lam", color: "#ffff22", prisoner: true, free: true, customPlayLine: "", customIntro: "Lam, at your service!", customSprite: ""},
		{name: "Taesjha", color: "#ff8888", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Weixz", color: "#ff4422", prisoner: false, free: true, customPlayLine: "", customIntro: "Hello.", customSprite: ""},
		{name: "ping", color: "#dd9922", prisoner: true, free: true, customPlayLine: "", customIntro: "I'm gonna catch you!", customSprite: ""},
		{name: "Lilly", color: "#b39dfc", prisoner: true, free: true, customPlayLine: "", customIntro: "D-don't mess up the ~ah~ f-floors please. I'm b-being punished ~ugh~ enough by the h-head maid a-already", customSprite: ""},
		{name: "Akura", color: "#e64539", prisoner: true, free: false, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Shiroka", color: "#ffffff", prisoner: false, free: true,
			customPlayLine: "", customIntro: "I didn't wish to become what I am now at first, but the restraints were so captivating...", customSprite: ""},
		{name: "KCl", color: "#00ffff", prisoner: false, free: true, customPlayLine: "", customIntro: "I don't taste salty~", customSprite: ""},
	],
	],
	["MaidforceHead", [
		{name: "FrostLunar", color: "#0055ff", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Marine", color: "#4477ff", prisoner: true, free: true, customPlayLine: "", customIntro: "Hi! I'm Marine Kelley. 'Miss Marine', to you.", customSprite: ""},
	],
	],
	["WitchFlame", [
		{name: "Myrtrice", color: "#d30000", prisoner: false, free: true, customPlayLine: "Myrtrice",
			customStyle: "Myrtrice", customOutfit: "Myrtrice",
			customIntro: "All creatures are made to bow to me.", customSprite: "Myrtrice"},
		{name: "Myrtrice", color: "#d30000", prisoner: false, free: true, customPlayLine: "Myrtrice",
			customStyle: "Myrtrice", customOutfit: "Myrtrice",
			customIntro: "All creatures are made to bow to me.", customSprite: "Myrtrice2"},
	],
	],
	["DragonGirlShadow", [
		{name: "Nara", color: "#5F54FF", prisoner: true, free: true, customPlayLine: "",
			customStyle: "Nara", customOutfit: "Nara", customSprite: "Nara"
		},
		{name: "Krifath", color: "#6633cc", prisoner: true, free: true,
			customPlayLine: "", customIntro: "I used to be an adventurer like you, then I took an arrow in the knee.",
		},
		{name: "Krifath", color: "#6633cc", prisoner: true, free: true,
			customPlayLine: "", customIntro: "I used to be an adventurer like you, then I took an arrow in the knee.",
		},
	],
	],
	["DragonIce", [
		{name: "Wynn", color: "#31d4ac", prisoner: false, free: true, customPlayLine: "",
			customIntro: "Wynn of the Dragonheart Order, Pleased to meet you!",
		}
	],
	],
	["WitchIce", [
		{name: "Verina", color: "#44ff66", prisoner: true, free: false, customPlayLine: "", customIntro: "Have you seen my girlfriend around here?", customSprite: ""},
	],
	],
	["WitchShock", [
		{name: "Persephone", color: "#ff8888", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["WitchShibari", [
		{name: "Jenasine", color: "#Jenasine", prisoner: true, free: false, customPlayLine: "", customIntro: "I'm usually a lot better at this...", customSprite: ""},
	],
	],
	["WitchEarth", [
		{name: "Persephone", color: "#ff8888", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["WitchSlime", [
		{name: "Kathy Narlato", color: "#4e3da9", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Claire", color: "#55ff55", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Luna", color: "#872eff", prisoner: true, free: true, customPlayLine: "", customIntro: "Hi I'm Luna.", customSprite: ""},
	],
	],
	["WitchWater", [
		{name: "Marine", color: "#4fa4b8", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Ari", color: "#00ffff", prisoner: true, free: true, customPlayLine: "", customIntro: "Have you ever thought about learning Water magic? It's quite fascinating!", customSprite: ""},
	],
	],
	["ElementalEarth", [
		{name: "Entombment", color: "#ffae70", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["BanditPet", [
		{name: "Lazuli", color: "#a423d6", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Liz", color: "#d480bb", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Jinxy", color: "#7d27a5", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Genna", color: "#42bfe8", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["Bandit", [
		{name: "Lysannah", color: "#2fefe5", prisoner: true, free: true,
			customPlayLine: "", customIntro: "Well hey there, pretty~", customSprite: ""},
	],
	],
	["BanditChief", [
		{name: "Betruger", color: "#ba26e7", prisoner: true, free: true,
			customPlayLine: "", customIntro: "Hi! Are you ok?", customSprite: ""},
	],
	],
	["Wizard", [
		{name: "Draziw", color: "#3adcd4", prisoner: true, free: true,
			customPlayLine: "", customIntro: "The price of truth is reading between the lies, and lockpicks. Could you spare any?", customSprite: ""},
		{name: "Draziw", color: "#ff9ffd", prisoner: true, free: true,
			customPlayLine: "", customIntro: "Hay.... Oh its you again.... What do you want?", customSprite: ""},
	],
	],
	["BanditHunter", [
		{name: "Luka", color: "#e13b6c", prisoner: true, free: true, customPlayLine: "", customIntro: "Something seems missing... A gag!", customSprite: ""},
	],
	],
	["ElfRanger", [
		{name: "Valeria", color: "#ebaaf4", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Aello", color: "#ffae70", prisoner: true, free: true,
			customPlayLine: "ElfSmug", customIntro: "... Can I help you traveler?", customSprite: ""},
	],
	],
	["Elf", [
		{name: "Ferahla", color: "#44ff44", prisoner: true, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
		{name: "Clockheart", color: "#80fc7c", prisoner: true, free: true, customPlayLine: "", customIntro: "I hope no one locks me into a straitjacket~", customSprite: ""},
	],
	],
	["Dollsmith", [
		{name: "Kiera", color: "#310051", prisoner: false, free: true, customPlayLine: "", customIntro: "", customSprite: ""},
	],
	],
	["Dollmaker", [
		{name: "Latex Doll Maker", color: "#ffa8f8", prisoner: true, free: false, customPlayLine: "",
			customIntro: "Thank you. It's been quite a long time, can I follow you?", customSprite: ""},
	],
	],
	["MeleeCleric", [
		{name: "Odilaria", color: "#ff9900", prisoner: true, free: false,
			customPlayLine: "", customIntro: "Oh, a pet!", customSprite: ""},
	],
	],
	["Mummy", [
		{name: "Skarne", color: "#ff0549", prisoner: false, free: true,
			customPlayLine: "", customIntro: "I've been watching you~", customSprite: ""},
	],
	],
	["MummyPet", [
		{name: "Béatrice", color: "#db72c4", prisoner: true, free: false,
			customPlayLine: "", customIntro: "I.. I thought I was being a good girl...", customSprite: ""},
	],
	],

]);


let KDPatronsSpecial = {
	"Anonymous ": 2,
	"cyberjoel": 2,
	"finn ": 2,
	"Samantha Lear": 2,
	"Private ": 2,
	"Chet Vargas": 2,
	"Siegfried Kübler": 2,
	"Song": 2,
	"The-Fisher-King": 2,
	"Churro": 2,
	"Laioken ": 2,
	"Wyatt Wintersoul": 1,
	"Dex♪ ": 1,
	"Anthony Royle": 1,
	"Shogo ": 1,
	"Gamefan ": 1,
	"Blox ": 1,
	"Jerome Peterson": 1,
	"selly-grim ": 1,
	"Alexis Octavia": 1,
	"Noxgarm ": 1,
	"Slacker": 1,
	"Hellgete ": 1,
	"Flame ": 1,
	"WATA ": 1,
	"FrenzyFlame": 1,
	"Kieraakari ": 1,
	"Loudest_Quiet_Person": 1,
	"Rest": 1,
	"atetete ": 1,
	"Mechio ": 1,
	"Dazman1234 ": 1,
	"Thefabulousglaceon": 1,
	"Rika": 1,
	"0xA4C1B842": 1,
	"LukeB ": 1,
	"devan ": 1,
	"Physicsphail": 1,
	"Miro": 1,
	"Loony ": 1,
	"WhiteSniper": 1,
	"Thatguu": 1,
	"Somprad ": 1,
	"Geng114514 ": 1,
	"John  Toenniessen": 1,
	"Cat Hawke": 1,
	"Míša": 1,
	"RappyTheToy ": 1,
	"Diablo200": 1,
	"Cerb ": 1,
	"isaiah lewis": 1,
	"Mellenia": 1,
	"LordFabricator": 1,
	"Zero K": 1,
	"Dakra ": 1,
	"Victor ": 1,
	"damit damit": 1,
	"nnm711 ": 1,
	"Dragokahn": 1,
	"Meekohi": 1,
	"Phoenix ": 1,
	"zipidyzap ": 1,
	"Cera": 1,
	"CuvyanTaylor ": 1,
	"anton allison": 1,
	"Shrimpy ": 1,
	"Tatsuya Shiba": 1,
	"Snekus ": 1,
	"nuzzels": 1,
	"Minescence ": 1,
	"HanQing Zhao": 1,
	"James Kirkman": 1,
	"OTKTamashii ": 1,
	"darklink11 ": 1,
	"Hannes": 1,
	"Arentios ": 1,
	"Nymjii": 1,
	"Linex": 1,
	"Mister Mythe": 1,
	"CMDR Salen": 1,
	"bl ah": 1,
	"Salmon": 1,
	"Trinan": 1,
	"sqrt10pi": 1,
	"hopefast ": 1,
	"jeepk36": 1,
	"Shakymunch": 1,
	"Samsy": 1,
	"Pyros51 ": 1,
	"Aussie895": 1,
	"Hungvipbcsok": 1,
	"hideki hirose": 1,
	"Girador ": 1,
	"Traynfreek ": 1,
	"GRASS": 1,
	"Heavy Blues": 1,
	"Pyron ": 1,
	"Kritsanapong Jarutatpimol": 1,
	"Hanqing Zhao": 1,
	"Yagami Yami": 1,
	"Wossa ": 1,
	"FlameTail": 1,
	"火披薩 水": 1,
	"Sewdah nim": 1,
	"Crimson": 1,
	"X27": 1,
	"Nyarlato": 1,
	"Nightkin": 1,
	"Sylicix": 1,
	"Null Fame": 1,
	"AdventCirno ": 1,
	"Sera The Crocsune": 1,
	"Masaki Hara": 1,
	"Eric Rothman": 1,
	"영승 박": 1,
	"Claire Stephens": 1,
	"koch ": 1,
	"Joecoolzx": 1,
	"森 韩": 1,
	"ComradeArmtyom ": 1,
	"Hjake2 ": 1,
	"Chen yu": 1,
	"Sinohisaki": 1,
	"linlizheng ": 1,
	"john1304": 1,
	"Zora": 1,
	"suddys ": 1,
	"Robert Gomez": 1,
	"亦斌 陳": 1,
	"Feltenix": 1,
	"Aika ": 1,
	"sCaREaGle": 1,
	"Mike Salot": 1,
	"Roger Gamer": 1,
};

let KDPatrons = [
	"Anonymous",
	"finn",
	"Samantha L.",
	"Private",
	"Chet V.",
	"Siegfried K.",
	"Song",
	"Churro",
	"Laioken",
	"selly-grim",
	"Kieraakari",
	"Dex♪",
	"Slacker",
	"Rika",
	"Mechio",
	"Dragokahn",
	"sqrt10pi",
	"Anthony R.",
	"Cera",
	"Shogo",
	"Jerome P.",
	"WhiteSniper",
	"WATA",
	"Cat H.",
	"Minescence",
	"Heavy B.",
	"Gamefan",
	"Loreley",
	"Loudest_Quiet_Person",
	"Blox",
	"atetete",
	"Est D.",
	"RappyTheToy(Patreon)",
	"Diablo200",
	"devan",
	"Snekus",
	"Miro",
	"LordFabricator",
	"Flame",
	"Loony",
	"Physicsphail",
	"Approver",
	"Linex",
	"Meekohi",
	"zipidyzap",
	"0xA4C1B842",
	"Thatguu",
	"Geng114514",
	"Dazman1234",
	"Thefabulousglaceon",
	"Victor",
	"damit d.",
	"John  .",
	"LukeB",
	"Noxgarm",
	"Míša",
	"Shrimpy",
	"hopefast",
	"Mellenia",
	"Mister M.",
	"Somprad",
	"HanQing Z.",
	"Nymjii",
	"Samsy",
	"darklink11",
	"Fun H.",
	"Zero K.",
	"Dakra",
	"Tatsuya S.",
	"GRASS",
	"CuvyanTaylor",
	"Joecoolzx",
	"Girador",
	"SilentNobushi",
	"Safyra K.",
	"Feltenix",
	"Sera T.",
	"hideki h.",
	"anton a.",
	"Pyros51",
	"Zora",
	"Yukke112262",
	"IHAVEDNA",
	"GoldLinaric",
	"Pixie",
	"海星",
	"aliveyuu",
	"Louriel B.",
	"Nyarlato",
	"Nightkin",
	"Knocksinna",
	"Aika",
	"Uriahjs 0.",
	"Traynfreek",
	"Pyron",
	"Yagami Y.",
	"Wossa",
	"Tyson B.",
	"Paul ..",
	"Bastien P.",
	"luke h.",
	"Lord L.",
	"The_rogue1",
	"mebsu",
	"Robert G.",
	"AdventCirno",
	"Masaki H.",
	"Eric R.",
	"영승 박.",
	"Hungvipbcsok",
	"Sinohisaki",
	"SaiZaro",
	"Mike S.",
	"MoNone",
	"Lizzy T.",
	"OTL_OTL",
	"Samuel P.",
	"crimmsonblade",
	"ComradeArmtyom",
	"Lazulilly",
	"nubbs99",
	"Yuichiro S.",
	"Robert B.",
	"john1304",
	"Mikhail P.",
	"Told K.",
	"CorruptNightmare",
	"James M.",
	"bl a.",
	"FrostLunar",
	"Rizomind",
	"Eric",
	"Takuan",
	"Sean m.",
	"Hotohari",
	"NDW",
	"Benedito W.",
	"Jioshi",
	"Metablaze",
	"ganster g.",
	"Learko",
	"Matt L.",
	"Remi",
	"mzklopyu ..",
	"CMDR S.",
	"Derp",
	"Ahni J.",
	"wangjunkai",
	"Korith",
	"Bob B.",
	"Hard L.",
	"HiddenLayers",
	"fdnbgonds",
	"Raven W.",
	"speedometerenthusiast",
	"Sydney S.",
	"Ardmagar",
	"andwa",
	"BlitzAceRush",
	"Diana",
	"wanjianta",
	"reghtrehgtr",
	"Shenshi",
	"Zhenyu G.",
	"Sabine B.",
	"Feyro",
	"weakwind",
	"Jarick",
	"RedaReinhart",
	"SoymilkCandle",
	"Yupos",
	"Blooddawn",
	"Kevin S.",
	"DefinitelyNotSnek",
	"Pizzasgood",
	"OTO",
	"Zach",
	"Alan A.",
	"B.C.",
	"Fieldofbunnys",
	"amzta17212",
	"世龙 何.",
	"Glurak B.",
	"Jonathan W.",
	"tiamatdragon00",
	"Jacob C.",
	"beatsomeone",
	"coefficient",
	"Nunmina",
	"brandon w.",
	"Tiger9099",
	"Amon",
	"Ingwer",
	"PlayingFlunky5",
	"Naomi",
	"Ainrave",
	"Chiaro",
	"snake9831",
	"拘束",
	"MikaDai",
	"黑色白蔷薇",
	"绯月妖殇",
	"ororo",
	"Hirosin",
	"zztophatzztophat",
	"Mashiro",
	"TOKIMAKI",
	"ma. B.",
	"vindicator1229",
	"Kevin C.",
	"chickenking",
	"Climhazzard",
	"Jaso239",
	"orchidpyy",
	"Raven N.",
	"Suneo H.",
	"Smog47",
	"nicholas k.",
	"dorahira",
	"Mina",
	"altheerr4086",
	"HIBIKI",
	"森 韩.",
	"K4cyk",
	"Waljos",
	"DG",
	"LBridge666",
	"LenSal",
	"Jordan D.",
	"John D.",
	"SkyRoseKNA5500",
	"Joshua S.",
	"Argent",
	"Wyrmaiden",
	"1339378915",
	"Samuel A.",
	"toast",
	"Valadeya",
	"Imperial金曜",
	"Kevin W.",
	"Trolo",
	"Namrair",
	"Elifer",
	"Dominique M.",
	"Juan C.",
	"Robert",
	"Midnigh R.",
	"Valslov",
	"Daniel",
	"Skuta K.",
	"Sabertooth e.",
	"Sadlat50",
	"DrWeeDStaar420",
	"Lami",
	"Michal R.",
	"朱文清",
	"Balababa",
	"Victoria D.",
	"Spatchadoo",
	"jiazhou l.",
	"john h.",
	"Radek K.",
	"Sage_Anima",
	"孟璟 李.",
	"Jennie M.",
	"Strania",
	"Jeremy",
	"mantra",
	"凉茶没有毒",
	"R W.",
	"Ilya G.",
	"Cory E.",
	"875601227",
	"pyrite",
	"FROST1997",
	"Error 4.",
	"Wepon",
	"JamesWang",
	"Mick",
	"Anritheknight",
	"Doll",
	"kim l.",
	"Nia",
	"Kurami-",
	"Chief_K",
	"photometrik",
	"DazedDitz",
	"曾 啊.",
	"雄星 赤.",
	"Phillip T.",
	"Hohrenda",
	"Tyrrandae",
	"Chris",
	"nobody",
	"Cormag81",
	"Ninja",
	"yumengling",
	"Mosawer",
	"陆风 钱.",
	"许可凡",
	"Estwing",
	"リューズ I.",
	"永恒虚妄",
	"Johnathan M.",
	"Foxtail35",
	"aabac",
	"Moss M.",
	"从玄 贺.",
	"Frostyflak3",
	"Becky D.",
	"Joseph S.",
	"V G.",
	"MorganoCaster",
	"Emmanuel",
	"hayiya",
	"alice",
	"ewhac",
	"彥均 林.",
	"Mirin",
	"saitama",
	"brain",
	"IHadPotential",
	"xing j.",
	"Misssu",
	"radeonfw",
	"Celia",
	"Nirual86 ..",
	"SKYWALKER6666",
	"breadman",
	"雪樱 赤.",
	"Arshia Y.",
	"Taoheo",
	"Doidoxyz",
	"Benjamin O.",
	"n00dles",
	"Samuel M.",
	"Pihiatua",
	"flightaceturbo",
	"MechaMarshmallow",
	"Valaurelius",
	"Taco J.",
	"danthe67man32",
	"YeSpoon",
	"Naltraz",
	"Pengzeus",
	"ShiokazeNeko",
	"Celescia",
	"Roro",
	"MB1811",
	"Marres",
	"Kimaros",
	"Yohan",
	"John3174",
	"Lysandia",
	"ass h.",
	"Ploxis",
	"Cysticoscuro",
	"Ryujin",
	"nick",
	"Corentin P.",
	"Oleksandr K.",
	"Draco R.",
	"BrepperSpray",
	"凌云 普.",
	"nick y.",
	"嘉锐 蔡.",
	"wang",
	"bobapple",
	"strangeapple",
	"AWSL N.",
	"Robyn",
	"PyriteStar",
	"Fryt12",
	"Tyler T.",
	"Sambath",
	"DB",
	"u2mk",
	"Dominic A.",
	"Aerin",
	"DaveGeneric",
	"Never M.",
	"jdsoc76",
	"ragnum",
	"上将 零.",
	"Flint L.",
	"Ross",
	"Drew F.",
	"John",
	"Maclupus",
	"1542262",
	"CLUBT",
	"RaTheBird",
	"Amalaxi999",
	"now t.",
	"Mark O.",
	"ANARCHY",
	"Colton M.",
	"Salwadorx",
	"승원 장.",
	"Hevensdragon ..",
	"D.G.",
	"Clarity",
	"SuicideByTaco",
	"Lonnie H.",
	"bluelion319",
	"PatreonPat",
	"Quinn",
	"cherry",
	"Fun P.",
	"Cyril g.",
	"Ryan P.",
	"TSCSwald",
	"SD",
	"Mxtian",
	"Japan M.",
	"crank",
	"Flora",
	"jlol1945",
	"Micheal M.",
	"琉璃 瀬.",
	"PR_Lowell",
	"Shadow56",
	"Justin R.",
	"EEkumbookum",
	"YamiHikariOblivion Y.",
	"Splattershot J.",
	"Coconut-Chan",
	"jearldster",
	"Legionnaires",
	"Two G.",
	"Synaptic S.",
	"Chuggle",
	"ekilliox",
	"龙烨 高.",
	"Dimonnn1212",
	"John M.",
	"opensesame",
	"Vile M.",
	"Crociraffe",
	"CyLian",
	"Anton M.",
	"axelY",
	"Ruffian",
	"Dylan",
	"SiHolaEstas",
	"DIdNothing",
	"ssm-1",
	"ChickenRider",
	"Julz",
	"Jaime A.",
	"Bearzalot",
	"R M.",
	"spellbook",
	"[NoyE]",
	"chrisander b.",
	"wolfenstein1010",
	"Eric",
	"Puffy ..",
	"Gery",
	"EGGS",
	"SD",
	"Ancsa-Molnár D.",
	"Antinomy",
	"AA",
	"Seifonor",
	"Dracooo",
	"till s.",
	"Dgony",
	"RomaSaber",
	"Rubikon",
	"Yeppie5",
	"Kenryu",
	"Se D.",
	"Raphfish",
	"Blackbeard1806",
	"Menapfeast",
	"Floboo",
	"Neykio M.",
	"thepyrodj",
	"忆上官 真.",
	"Titan",
	"divcis23 s.",
	"xAvitaLT",
	"Yar",
	"Anonymouse257",
	"Nathalie",
	"Adali G.",
	"Ace",
	"ViniJones",
	"Skele L.",
	"Shadow1317",
	"Starman",
	"Ikani",
	"Balloons250",
	"Ted S.",
	"Madison H.",
	"OptimusRaven",
	"芳 王.",
	"Christopher K.",
	"BattlebrotherAlex",
	"canosawa",
	"Wilhelm F.",
	"Fafnir G.",
	"Raxacoricofallapatorius",
	"Aura M.",
	"SVD63Ninja",
	"SirHalNova",
	"清宇 鍾.",
	"咸鱼",
	"Arleen H.",
	"Epilogue_krr",
	"nocturnal",
	"West",
	"党 泽.",
	"Object 1.",
	"Eevee",
	"OneFox",
	"wPzJQfpF",
	"Mandiow",
	"xiaofeisha",
	"JellyBULLET",
	"Mellow D.",
	"EvilSebas",
	"bob b.",
	"KOTA",
	"Crimsonknight",
	"ToastyKarasu",
	"Rylee",
	"NeroTiiK",
	"MasterOfBeings",
	"林朔 樊.",
	"Christian J.",
	"Tom",
	"TekokiMaster",
	"Yamatokc",
	"XLT0007",
	"sharbee",
	"Bladeetro",
	"FlyIN_ 1.",
	"eternaleclipse",
	"Panpakapan!",
	"Diode I.",
	"momo",
	"Asu P.",
	"Arkitect10",
	"Odilaria",
	"mian w.",
	"Harbinger d.",
	"hime",
	"Wiboeo",
	"长萌",
	"ragingptero",
	"OREO",
	"inori",
	"Elena N.",
	"Your H.",
	"mike j.",
	"underwaterhelp",
	"Rouges T.",
	"CJ B.",
	"Joshua",
	"Imerlith",
	"Jonathan",
	"René M.",
	"Dinin",
	"AloyTheDeer",
	"Alex",
	"QQQdev",
	"Sigma",
	"ぱっち 嘘.",
	"Jordan B.",
	"Abrissgurke",
	"ArQu",
	"musasi64",
	"Paul C.",
	"LINREAR_ALGEBRAX",
	"Stareyespup",
	"Jack H.",
	"Dragonlord2000",
	"twlight908",
	"myhiddenuser67",
	"whitegive",
	"BeyondObscurity",
	"Marc L.",
	"ch0561",
	"Thomas C.",
	"darrian p.",
	"Proskillz12356",
	"Inters B.",
	"Katra",
	"Escaperobe",
	"Annika",
	"Phipas",
	"Apflu L.",
	"Ghostsalad",
	"Richard",
	"Sumeroda",
	"Antoine R.",
	"Toby",
	"Derh",
	"DarbSup",
	"aruba1",
	"Orari C.",
	"Derpinstion",
	"ko y.",
	"Travis B.",
	"aaaaaaa",
	"Shadow f.",
	"J",
	"Danny",
	"blazingdonkey",
	"Eclipse_Corp.",
	"Jason E.",
	"EmPTyID",
	"Lunix V.",
	"SilversoulFan",
	"sleepy",
	"boobufestu",
	"OddEssay",
	"corering",
	"Jh00",
	"greatwulf",
	"My W.",
	"Albraiky H.",
	"Chaudawg",
	"Michael K.",
	"Doc",
	"Dylan",
	"Brady M.",
	"Collin",
	"罗素的茶壶",
	"AbbiRP",
	"Rene",
	"Trenchy t.",
	"其亮 刘.",
	"ObedientCat",
	"SanguineEnigma",
	"MyssleDissle",
	"Haar",
	"Eason",
	"Melody",
	"asdfghjkl",
	"Bill M.",
	"mick l.",
	"Asteria T.",
	"Red__bayberry",
	"RS",
	"博皓 张.",
	"Chufeng Z.",
	"S c.",
	"Corbin C.",
	"qqeqqqeq",
	"Daniel H.",
	"Sahale42",
	"a_lurker",
	"RupertRamHorn",
	"云昊阳 刘.",
	"Roil",
	"OuuGuu",
	"Johnson",
	"Jason B.",
	"JohnnySasaki22",
	"sjsjsjs s.",
	"Fisher",
	"TrollGaming9996",
	"Mount83",
	"Sarlen A.",
	"Opossum B.",
	"Neptune",
	"carnassire",
	"omdik",
];

/**
 * @param Enemy
 * @param e
 * @param chanceBoost
 */
function KDProcessCustomPatron(Enemy: enemy, e: entity, chanceBoost: number, makePersistent: boolean): any {
	let chance = 0.05 + (chanceBoost || 0); // Lower chance if 'subordinate'
	if (!e.CustomName && KDPatronCustomEnemies.get(Enemy.name) && KDRandom() < chance) {
		let customs: any[] = KDPatronCustomEnemies.get(Enemy.name).filter((element) => {
			return (element.prisoner && KDEnemyHasFlag(e, "imprisoned")) || (element.free && !KDEnemyHasFlag(e, "imprisoned"));
		});
		if (customs.length > 0) {
			let custom = customs[Math.floor(customs.length * KDRandom())];
			e.CustomName = custom.name;
			e.CustomNameColor = custom.color;
			e.CustomSprite = custom.customSprite;
			if (custom.customPlayLine) {
				e.playLine = custom.customPlayLine;
			}
			if (custom.customStyle) {
				e.style = custom.customStyle;
			}
			if (custom.customOutfit) {
				e.outfit = custom.customOutfit;
			}
			if (custom.customOutfitBound) {
				e.outfitBound = custom.customOutfitBound;
			}
			if (custom.customIntro) {
				e.intro = custom.customIntro;
			}
			if (makePersistent) KDGetPersistentNPC(e.id, e);
			return custom;
		}
	}
	return undefined;
}


/**
 * @param pets
 * @param e
 * @param index
 */
function KDProcessCustomPatronPet(pets: any[], e: entity, index: number): any {
	if (pets) {
		let customs = pets[e.Enemy.name];
		if (customs?.length > 0 && index < customs.length) {
			let custom = customs[index];
			e.CustomName = custom.name;
			e.CustomNameColor = custom.color;
			e.CustomSprite = custom.customSprite;
			if (custom.customPlayLine) {
				e.playLine = custom.customPlayLine;
			}
			if (custom.customStyle) {
				e.style = custom.customStyle;
			}
			if (custom.customOutfit) {
				e.outfit = custom.customOutfit;
			}
			if (custom.customOutfitBound) {
				e.outfitBound = custom.customOutfitBound;
			}
			if (custom.customIntro) {
				e.intro = custom.customIntro;
			}
			return custom;
		}
	}
	return undefined;
}
