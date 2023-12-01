/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */



AddModel({
	Name: "BraProto",
	Folder: "Chastity",
	Parent: "BraCyber",
	TopLevel: false,
	Restraint: true,
	Categories: ["Restraints", "ChastityBra", "Metal", "SciFi"],
	Layers: ToLayerMap([
		{ Name: "BraProto", Layer: "BindChest", Pri: 14.2-100,
			Invariant: true,
			InheritColor: "Steel",
		},
		{ Name: "BraProtoLining", Layer: "BindChest", Pri: 14.1-100,
			Invariant: true,
			InheritColor: "Lining",
		},
		{ Name: "BraProtoLiningMid", Layer: "StrapsUnderbust", Pri: 14-100,
			Invariant: true,
			InheritColor: "Lining",
		},
		{ Name: "BraProtoCups", Layer: "BindChest", Pri: 14-100,
			Invariant: true,
			TieToLayer: "BraProto",
			NoOverride: true,
			InheritColor: "Cups",
		},
		{ Name: "BraProtoDisplay", Layer: "BindChest", Pri: 14.1-100,
			Invariant: true,
			TieToLayer: "BraProto",
			NoOverride: true,
			InheritColor: "Display",
		},
		{ Name: "BraProtoLock", Layer: "BindChest", Pri: 14.2,
			Invariant: true,
			TieToLayer: "BraProto",
			NoOverride: true,
			InheritColor: "Lock",
			LockLayer: true,
		},
	])
});

AddModel({
	Name: "BraCyber",
	Folder: "Chastity",
	Parent: "BraCyber",
	TopLevel: true,
	Restraint: true,
	Categories: ["Restraints", "ChastityBra", "Metal", "SciFi"],
	Layers: ToLayerMap([
		{ Name: "BraCyber", Layer: "BindChest", Pri: 15.1,
			Invariant: true,
			InheritColor: "Steel",
		},
		{ Name: "BraCyberLining", Layer: "BindChest", Pri: 15,
			Invariant: true,
			TieToLayer: "BraCyber",
			NoOverride: true,
			InheritColor: "Lining",
		},
		{ Name: "BraCyberDisplay", Layer: "BindChest", Pri: 15,
			Invariant: true,
			TieToLayer: "BraCyber",
			NoOverride: true,
			InheritColor: "Display",
		},
		{ Name: "BraCyberLock", Layer: "BindChest", Pri: 15.1,
			Invariant: true,
			TieToLayer: "BraCyber",
			NoOverride: true,
			InheritColor: "Lock",
			LockLayer: true,
		},
	])
});

AddModel({
	Name: "ChastityBra",
	Folder: "Chastity",
	Parent: "ChastityBra",
	TopLevel: true,
	Restraint: true,
	Categories: ["Restraints", "ChastityBra", "Metal"],
	Layers: ToLayerMap([
		{ Name: "BraCups", Layer: "BindChestLower", Pri: -40.1,
			Invariant: true,
			InheritColor: "Steel",
		},
		{ Name: "BraLining", Layer: "BindChestLower", Pri: -40,
			Invariant: true,
			TieToLayer: "BraCups",
			NoOverride: true,
			InheritColor: "Lining",
		},
		{ Name: "BraChain", Layer: "BindChestLower", Pri: -25,
			Invariant: true,
			NoOverride: true,
			InheritColor: "Chain",
		},
		{ Name: "BraLock", Layer: "BindChestLower", Pri: -39,
			Invariant: true,
			TieToLayer: "BraCups",
			NoOverride: true,
			InheritColor: "Lock",
			LockLayer: true,
		},
	])
});


AddModel({
	Name: "HeartBelt",
	Folder: "Chastity",
	Parent: "HeartBelt",
	TopLevel: true,
	Restraint: true,
	Categories: ["Restraints", "ChastityBelt", "Metal"],
	//AddPose: ["CrotchStrap"],
	Layers: ToLayerMap([
		{ Name: "Belt", Layer: "ChastityBelt", Pri: -40.1,
			SwapLayerPose: {Kneel: "ChastityBeltLower", KneelClosed: "ChastityBeltLower"},
			PrependLayerPrefix: {ChastityOption: "Option_"},
			Invariant: true,
			//DisplacementInvariant: true,
			//DisplacementSprite: "CrotchRopeSquish",
			//DisplaceLayers: ToMap(["RibbonTorso"]),
			InheritColor: "Steel",
		},
		{ Name: "BeltLining", Layer: "ChastityBelt", Pri: -40,
			SwapLayerPose: {Kneel: "ChastityBeltLower", KneelClosed: "ChastityBeltLower"},
			PrependLayerPrefix: {ChastityOption: "Option_"},
			Invariant: true,
			DisplacementInvariant: true,
			NoOverride: true,
			TieToLayer: "Belt",
			InheritColor: "Lining",
		},
		{ Name: "BeltLock", Layer: "ChastityBelt", Pri: -39.9,
			SwapLayerPose: {Kneel: "ChastityBeltLower", KneelClosed: "ChastityBeltLower"},
			PrependLayerPrefix: {ChastityOption: "Option_"},
			Invariant: true,
			DisplacementInvariant: true,
			InheritColor: "Lock",
		},
		{ Name: "BeltStrap", Layer: "ChastityBelt", Pri: -45.1,
			SwapLayerPose: {Kneel: "ChastityBeltLower", KneelClosed: "ChastityBeltLower"},
			PrependLayerPrefix: {ChastityOption: "Option_"},
			Invariant: true,
			InheritColor: "Steel",
		},
		{ Name: "BeltStrapLining", Layer: "ChastityBelt", Pri: -45,
			SwapLayerPose: {Kneel: "ChastityBeltLower", KneelClosed: "ChastityBeltLower"},
			PrependLayerPrefix: {ChastityOption: "Option_"},
			Invariant: true,
			NoOverride: true,
			TieToLayer: "BeltStrap",
			InheritColor: "Lining",
		},
	])
});


AddModel({
	Name: "CyberBelt",
	Folder: "Chastity",
	Parent: "CyberBelt",
	TopLevel: true,
	Restraint: true,
	Categories: ["Restraints", "ChastityBelt", "Metal", "SciFi"],
	Layers: ToLayerMap([
		{ Name: "Cyber", Layer: "ChastityBelt", Pri: -40,
			SwapLayerPose: {Kneel: "ChastityBeltLower", KneelClosed: "ChastityBeltLower"},
			PrependLayerPrefix: {ChastityOption: "Option_"},
			Invariant: true,
			//DisplacementInvariant: true,
			//DisplacementSprite: "CrotchRopeSquish",
			//DisplaceLayers: ToMap(["RibbonTorso"]),
			InheritColor: "Steel",
		},
		{ Name: "CyberLining", Layer: "ChastityBelt", Pri: -40.1,
			SwapLayerPose: {Kneel: "ChastityBeltLower", KneelClosed: "ChastityBeltLower"},
			PrependLayerPrefix: {ChastityOption: "Option_"},
			Invariant: true,
			DisplacementInvariant: true,
			NoOverride: true,
			TieToLayer: "Cyber",
			InheritColor: "Lining",
		},
		{ Name: "CyberDisplay", Layer: "ChastityBelt", Pri: -40.1,
			SwapLayerPose: {Kneel: "ChastityBeltLower", KneelClosed: "ChastityBeltLower"},
			PrependLayerPrefix: {ChastityOption: "Option_"},
			Invariant: true,
			DisplacementInvariant: true,
			NoOverride: true,
			TieToLayer: "Cyber",
			InheritColor: "Display",
		},
		{ Name: "CyberPlug", Layer: "ChastityBelt", Pri: -40.1,
			SwapLayerPose: {Kneel: "ChastityBeltLower", KneelClosed: "ChastityBeltLower"},
			PrependLayerPrefix: {ChastityOption: "Option_"},
			Invariant: true,
			DisplacementInvariant: true,
			NoOverride: true,
			TieToLayer: "Cyber",
			InheritColor: "Plug",
		},
		{ Name: "CyberLock", Layer: "ChastityBelt", Pri: -40,
			SwapLayerPose: {Kneel: "ChastityBeltLower", KneelClosed: "ChastityBeltLower"},
			PrependLayerPrefix: {ChastityOption: "Option_"},
			Invariant: true,
			DisplacementInvariant: true,
			InheritColor: "Lock",
			LockLayer: true,
		},
	])
});

AddModel({
	Name: "ProtoBelt",
	Folder: "Chastity",
	Parent: "CyberBelt",
	TopLevel: false,
	Restraint: true,
	Categories: ["Restraints", "ChastityBelt", "Metal", "SciFi"],
	//AddPose: ["CrotchStrap"],
	Layers: ToLayerMap([
		{ Name: "Proto", Layer: "ChastityBelt", Pri: 40.1,
			SwapLayerPose: {Kneel: "ChastityBeltLower", KneelClosed: "ChastityBeltLower"},
			PrependLayerPrefix: {ChastityOption: "Option_"},
			Invariant: true,
			//DisplacementInvariant: true,
			//DisplacementSprite: "CrotchRopeSquish",
			//DisplaceLayers: ToMap(["RibbonTorso"]),
			InheritColor: "Steel",
		},
		{ Name: "ProtoLining", Layer: "ChastityBelt", Pri: 40,
			SwapLayerPose: {Kneel: "ChastityBeltLower", KneelClosed: "ChastityBeltLower"},
			PrependLayerPrefix: {ChastityOption: "Option_"},
			Invariant: true,
			DisplacementInvariant: true,
			NoOverride: true,
			TieToLayer: "Proto",
			InheritColor: "Lining",
		},
		{ Name: "ProtoDisplay", Layer: "ChastityBelt", Pri: 40,
			SwapLayerPose: {Kneel: "ChastityBeltLower", KneelClosed: "ChastityBeltLower"},
			PrependLayerPrefix: {ChastityOption: "Option_"},
			Invariant: true,
			DisplacementInvariant: true,
			NoOverride: true,
			TieToLayer: "Proto",
			InheritColor: "Display",
		},
		{ Name: "ProtoPlug", Layer: "ChastityBelt", Pri: 40,
			SwapLayerPose: {Kneel: "ChastityBeltLower", KneelClosed: "ChastityBeltLower"},
			PrependLayerPrefix: {ChastityOption: "Option_"},
			Invariant: true,
			DisplacementInvariant: true,
			NoOverride: true,
			TieToLayer: "Proto",
			InheritColor: "Plug",
		},
		{ Name: "ProtoLock", Layer: "ChastityBelt", Pri: 40.1,
			SwapLayerPose: {Kneel: "ChastityBeltLower", KneelClosed: "ChastityBeltLower"},
			PrependLayerPrefix: {ChastityOption: "Option_"},
			Invariant: true,
			DisplacementInvariant: true,
			InheritColor: "Lock",
			LockLayer: true,
		},
	])
});
