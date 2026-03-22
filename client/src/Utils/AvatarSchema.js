const avatarSchema = {
        "seed": {
            "type": "string"
        },
        "flip": {
            "type": "boolean",
            "default": false
        },
        "rotate": {
            "type": "integer",
            "minimum": 0,
            "maximum": 360,
            "default": 0
        },
        "scale": {
            "type": "integer",
            "minimum": 0,
            "maximum": 200,
            "default": 100
        },
        "radius": {
            "type": "integer",
            "minimum": 0,
            "maximum": 50,
            "default": 0
        },
        "size": {
            "type": "integer",
            "minimum": 1
        },
        "backgroundColor": {
            "type": "array",
            "items": {
                "type": "string",
                "pattern": "^(transparent|[a-fA-F0-9]{6})$"
            },
            "default": [
                "65c9ff"
            ]
        },
        "backgroundType": {
            "type": "array",
            "items": {
                "type": "string",
                "enum": [
                    "solid",
                    "gradientLinear"
                ]
            },
            "default": [
                "solid"
            ]
        },
        "backgroundRotation": {
            "type": "array",
            "items": {
                "type": "integer",
                "minimum": -360,
                "maximum": 360
            },
            "default": [
                0,
                360
            ]
        },
        "translateX": {
            "type": "integer",
            "minimum": -100,
            "maximum": 100,
            "default": 0
        },
        "translateY": {
            "type": "integer",
            "minimum": -100,
            "maximum": 100,
            "default": 0
        },
        "clip": {
            "type": "boolean",
            "default": true
        },
        "randomizeIds": {
            "type": "boolean",
            "default": false
        },
        "accessories": {
            "type": "array",
            "items": {
                "type": "string",
                "enum": [
                    "kurt",
                    "prescription01",
                    "prescription02",
                    "round",
                    "sunglasses",
                    "wayfarers",
                    "eyepatch"
                ]
            },
            "default": [
                "kurt",
                "prescription01",
                "prescription02",
                "round",
                "sunglasses",
                "wayfarers",
                "eyepatch"
            ]
        },
        "accessoriesColor": {
            "type": "array",
            "items": {
                "type": "string",
                "pattern": "^(transparent|[a-fA-F0-9]{6})$"
            },
            "default": [
                "262e33",
                "65c9ff",
                "5199e4",
                "25557c",
                "e6e6e6",
                "929598",
                "3c4f5c",
                "b1e2ff",
                "a7ffc4",
                "ffdeb5",
                "ffafb9",
                "ffffb1",
                "ff488e",
                "ff5c5c",
                "ffffff"
            ]
        },
        "accessoriesProbability": {
            "type": "integer",
            "minimum": 0,
            "maximum": 100,
            "default": 10
        },
        "base": {
            "type": "array",
            "items": {
                "type": "string",
                "enum": [
                    "default"
                ]
            },
            "default": [
                "default"
            ]
        },
        "clothesColor": {
            "type": "array",
            "items": {
                "type": "string",
                "pattern": "^(transparent|[a-fA-F0-9]{6})$"
            },
            "default": [
                "262e33",
                "65c9ff",
                "5199e4",
                "25557c",
                "e6e6e6",
                "929598",
                "3c4f5c",
                "b1e2ff",
                "a7ffc4",
                "ffafb9",
                "ffffb1",
                "ff488e",
                "ff5c5c",
                "ffffff"
            ]
        },
        "clothing": {
            "type": "array",
            "items": {
                "type": "string",
                "enum": [
                    "blazerAndShirt",
                    "blazerAndSweater",
                    "collarAndSweater",
                    "graphicShirt",
                    "hoodie",
                    "overall",
                    "shirtCrewNeck",
                    "shirtScoopNeck",
                    "shirtVNeck"
                ]
            },
            "default": [
                "blazerAndShirt",
                "blazerAndSweater",
                "collarAndSweater",
                "graphicShirt",
                "hoodie",
                "overall",
                "shirtCrewNeck",
                "shirtScoopNeck",
                "shirtVNeck"
            ]
        },
        "clothingGraphic": {
            "type": "array",
            "items": {
                "type": "string",
                "enum": [
                    "bat",
                    "bear",
                    "cumbia",
                    "deer",
                    "diamond",
                    "hola",
                    "pizza",
                    "resist",
                    "skull",
                    "skullOutline"
                ]
            },
            "default": [
                "bat",
                "bear",
                "cumbia",
                "deer",
                "diamond",
                "hola",
                "pizza",
                "resist",
                "skull",
                "skullOutline"
            ]
        },
        "eyebrows": {
            "type": "array",
            "items": {
                "type": "string",
                "enum": [
                    "angryNatural",
                    "defaultNatural",
                    "flatNatural",
                    "frownNatural",
                    "raisedExcitedNatural",
                    "sadConcernedNatural",
                    "unibrowNatural",
                    "upDownNatural",
                    "angry",
                    "default",
                    "raisedExcited",
                    "sadConcerned",
                    "upDown"
                ]
            },
            "default": [
                "angryNatural",
                "defaultNatural",
                "flatNatural",
                "frownNatural",
                "raisedExcitedNatural",
                "sadConcernedNatural",
                "unibrowNatural",
                "upDownNatural",
                "angry",
                "default",
                "raisedExcited",
                "sadConcerned",
                "upDown"
            ]
        },
        "eyes": {
            "type": "array",
            "items": {
                "type": "string",
                "enum": [
                    "closed",
                    "cry",
                    "default",
                    "eyeRoll",
                    "happy",
                    "hearts",
                    "side",
                    "squint",
                    "surprised",
                    "winkWacky",
                    "wink",
                    "xDizzy"
                ]
            },
            "default": [
                "closed",
                "cry",
                "default",
                "eyeRoll",
                "happy",
                "hearts",
                "side",
                "squint",
                "surprised",
                "winkWacky",
                "wink",
                "xDizzy"
            ]
        },
        "facialHair": {
            "type": "array",
            "items": {
                "type": "string",
                "enum": [
                    "beardLight",
                    "beardMajestic",
                    "beardMedium",
                    "moustacheFancy",
                    "moustacheMagnum"
                ]
            },
            "default": [
                "beardLight",
                "beardMajestic",
                "beardMedium",
                "moustacheFancy",
                "moustacheMagnum"
            ]
        },
        "facialHairColor": {
            "type": "array",
            "items": {
                "type": "string",
                "pattern": "^(transparent|[a-fA-F0-9]{6})$"
            },
            "default": [
                "a55728",
                "2c1b18",
                "b58143",
                "d6b370",
                "724133",
                "4a312c",
                "f59797",
                "ecdcbf",
                "c93305",
                "e8e1e1"
            ]
        },
        "facialHairProbability": {
            "type": "integer",
            "minimum": 0,
            "maximum": 100,
            "default": 10
        },
        "hairColor": {
            "type": "array",
            "items": {
                "type": "string",
                "pattern": "^(transparent|[a-fA-F0-9]{6})$"
            },
            "default": [
                "a55728",
                "2c1b18",
                "b58143",
                "d6b370",
                "724133",
                "4a312c",
                "f59797",
                "ecdcbf",
                "c93305",
                "e8e1e1"
            ]
        },
        "hatColor": {
            "type": "array",
            "items": {
                "type": "string",
                "pattern": "^(transparent|[a-fA-F0-9]{6})$"
            },
            "default": [
                "262e33",
                "65c9ff",
                "5199e4",
                "25557c",
                "e6e6e6",
                "929598",
                "3c4f5c",
                "b1e2ff",
                "a7ffc4",
                "ffdeb5",
                "ffafb9",
                "ffffb1",
                "ff488e",
                "ff5c5c",
                "ffffff"
            ]
        },
        "mouth": {
            "type": "array",
            "items": {
                "type": "string",
                "enum": [
                    "concerned",
                    "default",
                    "disbelief",
                    "eating",
                    "grimace",
                    "sad",
                    "screamOpen",
                    "serious",
                    "smile",
                    "tongue",
                    "twinkle",
                    "vomit"
                ]
            },
            "default": [
                "concerned",
                "default",
                "disbelief",
                "eating",
                "grimace",
                "sad",
                "screamOpen",
                "serious",
                "smile",
                "tongue",
                "twinkle",
                "vomit"
            ]
        },
        "nose": {
            "type": "array",
            "items": {
                "type": "string",
                "enum": [
                    "default"
                ]
            },
            "default": [
                "default"
            ]
        },
        "skinColor": {
            "type": "array",
            "items": {
                "type": "string",
                "pattern": "^(transparent|[a-fA-F0-9]{6})$"
            },
            "default": [
                "614335",
                "d08b5b",
                "ae5d29",
                "edb98a",
                "ffdbb4",
                "fd9841",
                "f8d25c"
            ]
        },
        "style": {
            "type": "array",
            "items": {
                "type": "string",
                "enum": [
                    "circle",
                    "default"
                ]
            },
            "default": [
                "default"
            ]
        },
        "top": {
            "type": "array",
            "items": {
                "type": "string",
                "enum": [
                    "hat",
                    "hijab",
                    "turban",
                    "winterHat1",
                    "winterHat02",
                    "winterHat03",
                    "winterHat04",
                    "bob",
                    "bun",
                    "curly",
                    "curvy",
                    "dreads",
                    "frida",
                    "fro",
                    "froBand",
                    "longButNotTooLong",
                    "miaWallace",
                    "shavedSides",
                    "straight02",
                    "straight01",
                    "straightAndStrand",
                    "dreads01",
                    "dreads02",
                    "frizzle",
                    "shaggy",
                    "shaggyMullet",
                    "shortCurly",
                    "shortFlat",
                    "shortRound",
                    "shortWaved",
                    "sides",
                    "theCaesar",
                    "theCaesarAndSidePart",
                    "bigHair"
                ]
            },
            "default": [
                "hat",
                "hijab",
                "turban",
                "winterHat1",
                "winterHat02",
                "winterHat03",
                "winterHat04",
                "bob",
                "bun",
                "curly",
                "curvy",
                "dreads",
                "frida",
                "fro",
                "froBand",
                "longButNotTooLong",
                "miaWallace",
                "shavedSides",
                "straight02",
                "straight01",
                "straightAndStrand",
                "dreads01",
                "dreads02",
                "frizzle",
                "shaggy",
                "shaggyMullet",
                "shortCurly",
                "shortFlat",
                "shortRound",
                "shortWaved",
                "sides",
                "theCaesar",
                "theCaesarAndSidePart",
                "bigHair"
            ]
        },
        "topProbability": {
            "type": "integer",
            "minimum": 0,
            "maximum": 100,
            "default": 100
        }
};

export default avatarSchema;