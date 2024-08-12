/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */


AddModel({
	Name: "Body",
	Group: "Body",
	TopLevel: true,
	Protected: true,
	Categories: ["Body"],
	Folder: "Body",
	AddPose: ["Body"],
	Layers: ToLayerMap([
		{ Name: "Head", Layer: "Head", Pri: 0,
			MorphPoses: {AnimalEars: "NoEar", HideEars: "NoEar"},
			AppendPose: {FaceCoverGag: "", FaceBigGag: "BigGag", FaceGag: "Gag"},
		},
		{ Name: "ArmRight", Layer: "ArmRight", Pri: 0,
			HideWhenOverridden: true,
			InheritColor: "Torso",
			Poses: ToMapSubtract(ARMPOSES, [...HIDEARMPOSES]),
			GlobalDefaultOverride: ToMap(["Front", "Crossed"]),
		},
		{ Name: "ArmLeft", Layer: "ArmLeft", Pri: 0,
			HideWhenOverridden: true,
			InheritColor: "Torso",
			Poses: ToMapSubtract(ARMPOSES, [...HIDEARMPOSES]),
			GlobalDefaultOverride: ToMap(["Front", "Crossed"]),
			ErasePoses: ["HideHands"],
			EraseLayers: {RightHand: true},
			EraseSprite: "HideBoxtieHand",
			EraseInvariant: true,
		},
		{ Name: "ShoulderRight", Layer: "ShoulderRight", Pri: 0,
			HideWhenOverridden: true,
			InheritColor: "Torso",
			Poses: ToMap([...SHOULDERPOSES]),
		},
		{ Name: "ShoulderLeft", Layer: "ShoulderLeft", Pri: 0,
			HideWhenOverridden: true,
			InheritColor: "Torso",
			Poses: ToMap([...SHOULDERPOSES]),
		},
		{ Name: "ForeArmRight", Layer: "ForeArmRight", Pri: 0,
			HideWhenOverridden: true,
			InheritColor: "Torso",
			Poses: ToMap(FOREARMPOSES),
			GlobalDefaultOverride: ToMap(["Front", "Crossed"]),
			SwapLayerPose: {Crossed: "CrossArmRight"},
		},
		{ Name: "ForeArmLeft", Layer: "ForeArmLeft", Pri: 0,
			HideWhenOverridden: true,
			InheritColor: "Torso",
			Poses: ToMap(FOREARMPOSES),
			GlobalDefaultOverride: ToMap(["Front", "Crossed"]),
			SwapLayerPose: {Crossed: "CrossArmLeft"},
		},
		{ Name: "HandRight", Layer: "HandRight", Pri: 0,
			HideWhenOverridden: true,
			InheritColor: "Torso",
			Poses: ToMap(HANDRIGHTPOSES),
			GlobalDefaultOverride: ToMap(["Front"]),
			HidePoses: ToMap(["HideHands", "EncaseHandRight"]),
		},
		{ Name: "HandLeft", Layer: "HandLeft", Pri: 0,
			HideWhenOverridden: true,
			InheritColor: "Torso",
			Poses: ToMap(HANDLEFTPOSES),
			GlobalDefaultOverride: ToMap(["Front"]),
			HidePoses: ToMap(["HideHands", "EncaseHandLeft",]),

		},
		{ Name: "ForeHandRight", Layer: "ForeHandRight", Pri: 0,
			HideWhenOverridden: true,
			Sprite: "HandRight",
			InheritColor: "Torso",
			Poses: ToMap(FOREHANDRIGHTPOSES),
			GlobalDefaultOverride: ToMap(["Front"]),
			HidePoses: ToMap(["HideHands", "EncaseHandRight"]),
		},
		{ Name: "ForeHandLeft", Layer: "ForeHandLeft", Pri: 0,
			HideWhenOverridden: true,
			Sprite: "HandLeft",
			InheritColor: "Torso",
			Poses: ToMap(FOREHANDLEFTPOSES),
			GlobalDefaultOverride: ToMap(["Front"]),
			HidePoses: ToMap(["HideHands", "EncaseHandLeft"]),
		},
		{ Name: "LegLeft", Layer: "LegLeft", Pri: 0,
			HideWhenOverridden: true,
			InheritColor: "Torso",
			Poses: ToMap(LEGPOSES),
			GlobalDefaultOverride: ToMap(["Hogtie", "KneelClosed"]),
		},
		{ Name: "Torso", Layer: "Torso", Pri: 0,
			//AppendPose: {CrotchStrap: "Chastity"},
			InheritColor: "Torso",
			MorphPoses: {Closed: "Closed", Spread: "Spread", Hogtie: "Closed"},
			EraseLayers: {BustierPoses: true},
			EraseSprite: "EraseCorset",
			EraseInvariant: true,
			//EraseMorph: {EncaseTorsoLower: "Encase"},
		},
		{ Name: "Chest", Layer: "Chest", Pri: 0,
			HideWhenOverridden: true,
			InheritColor: "Torso",
			//DisplaceAmount: 50,
			//DisplacementSprite: "BustHuge",
			//DisplacementInvariant: true,
			//DisplaceLayers: {BustSize: true},
		},
		/*{ Name: "FootRight", Layer: "FootRight", Pri: 0,
			InheritColor: "Torso",
			Poses: ToMap(FOOTRIGHTPOSES),
		},*/
		{ Name: "FootRightKneel", Sprite: "FootRight", Layer: "FootRightKneel", Pri: 0,
			HideWhenOverridden: true,
			InheritColor: "Torso",
			HidePoses: ToMap(["FeetLinked", "FeetCovered"]),
			Poses: ToMap(["Kneel"]),
		},
		/*{ Name: "FootLeft", Layer: "FootLeft", Pri: 0,
			InheritColor: "Torso",
			Poses: ToMap(FOOTLEFTPOSES),
			GlobalDefaultOverride: ToMap(["Hogtie", "KneelClosed"]),
		},*/
		{ Name: "FootLeftHogtie", Layer: "FootLeftHogtie", Pri: 0,
			HideWhenOverridden: true,
			InheritColor: "Torso",
			Poses: ToMap(["Hogtie"]),
			MorphPoses: {Hogtie: ""},
		},
		{ Name: "LegRight", Layer: "LegRight", Pri: 0,
			HideWhenOverridden: true,
			InheritColor: "Torso",
			Poses: ToMap(LEGPOSES),
			GlobalDefaultOverride: ToMap(["Hogtie", "KneelClosed"]),
		},
		{ Name: "Butt", Layer: "Butt", Pri: 0,
			//HideWhenOverridden: true,
			InheritColor: "Torso",
			Poses: ToMap(KNEELPOSES),
			EraseLayers: {BustierPoses2: true},
			EraseSprite: "EraseCorsetKneel",
			EraseInvariant: true,
			//EraseMorph: {EncaseTorsoLower: "Encase"},
		},
		{ Name: "Butt2", Layer: "Butt", Pri: 0,
			//HideWhenOverridden: true,
			InheritColor: "Torso",
			Poses: ToMap(KNEELPOSES),
			EraseLayers: {ButtSleeves: true},
			EraseSprite: "ButtSleeves",
			EraseInvariant: true,
			Invariant: true,
			//EraseMorph: {EncaseTorsoLower: "Encase"},
		},



		{ Name: "Nipples", Layer: "Nipples", Pri: 0,
			HideWhenOverridden: true,
			InheritColor: "Nipples",
			Invariant: true,
			HidePoses: {HideNipples: true},
		},
	])
});
