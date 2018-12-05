// 关系对照表
export const relationshipMap = {

    "father":["son","daughter"],
    "mother":["son","daughter"],
    "oldbrother":["youngsister","youngbrother"],
    "youngbrother":["oldsister","oldbrother"],
    "oldsister":["youngsister","youngbrother"],
    "youngsister":["oldsister","oldbrother"],
    "wife":["husband"],
    "husband":["wife"],
    "son":["father","mother"],
    "daughter":["father","mother"],
}

export const relationshipGenderMap = {
    "male":{
        "son":"father",
        "daughter":"father",
        "father":"son",
        "mother":"son",
        "oldbrother":"youngbrother",
        "youngbrother":"oldbrother",
        "youngsister":"oldbrother",
        "oldsister":"youngbrother",
        "wife":"husband",
        "sister":"brother",
        "brother":"brother"
    },
    "female":{
        "son":"mother",
        "daughter":"mother",
        "father":"daughter",
        "mother":"daughter",
        "oldbrother":"youngsister",
        "youngbrother":"oldsister",
        "youngsister":"oldsister",
        "oldsister":"youngsister",
        "husband":"wife",
        "sister":"sister",
        "brother":"sister"
    }
}

export const relationshipTOGender= {
    'son':"male",
    "daughter":"female",
    "father":"male",
    "mother":"female",
    "oldbrother":"male",
    "youngbrother":"male",
    "youngsister":"female",
    "oldsister":"female",
    "wife":"female",
    "husband":"male",
}


export const relationIntersection = {
    "father":{"wife":["mother"],"son":["oldbrother,youngbrother"],"daughter":["oldsister","youngsister"]},
    "mother":{"husband":["father"],"son":["oldbrother,youngbrother"],"daughter":["oldsister","youngsister"]},
    "oldbrother":{"father":["father"],"mother":["mother"],"oldbrother":["oldbrother"],"youngbrother":["oldbrother,youngbrother"],
        "oldsister":["oldsister"],"youngsister":["oldsister","youngsister"],
    },
    "youngbrother":{"father":["father"],"mother":["mother"],"oldbrother":["oldbrother,youngbrother"],"youngbrother":["youngbrother"],
        "oldsister":["oldsister","youngsister"],"youngsister":["youngsister"],
    },
    "oldsister":{"father":["father"],"mother":["mother"],"oldbrother":["oldbrother"],"youngbrother":["oldbrother,youngbrother"],
        "oldsister":["oldsister"],"youngsister":["oldsister","youngsister"],
    },
    "youngsister":{"father":["father"],"mother":["mother"],"oldbrother":["oldbrother,youngbrother"],"youngbrother":["youngbrother"],
        "oldsister":["oldsister","youngsister"],"youngsister":["youngsister"],
    },
    "wife":{"son":["son"],"daughter":["daughter"]},
    "husband":{"son":["son"],"daughter":["daughter"]},
    "son":{"father":["husband"],"mother":["wife"],"oldbrother":["son"],"youngbrother":["son"],"oldsister":["daughter"],"youngsister":["daughter"]},
    "daughter":{"father":["husband"],"mother":["wife"],"oldbrother":["son"],"youngbrother":["son"],"oldsister":["daughter"],"youngsister":["daughter"]},
}

export const relationIntersectionNew = {
    "father":{"wife":"mother","son":"brother","daughter":"sister"},
    "mother":{"husband":"father","son":"brother","daughter":"sister"},
    "oldbrother":{"father":"father","mother":"mother","oldbrother":"oldbrother","youngbrother":"brother",
        "oldsister":"oldsister","youngsister":"sister",
    },
    "youngbrother":{"father":"father","mother":"mother","oldbrother":"brother","youngbrother":"youngbrother",
        "oldsister":"sister","youngsister":"youngsister",
    },
    "oldsister":{"father":"father","mother":"mother","oldbrother":"oldbrother","youngbrother":"brother",
        "oldsister":"oldsister","youngsister":"sister",
    },
    "youngsister":{"father":"father","mother":"mother","oldbrother":"brother","youngbrother":"youngbrother",
        "oldsister":"sister","youngsister":"youngsister",
    },
    "wife":{"son":"son","daughter":"daughter"},
    "husband":{"son":"son","daughter":"daughter"},
    "son":{"father":"husband","mother":"wife","oldbrother":"son","youngbrother":"son","oldsister":"daughter","youngsister":"daughter"},
    "daughter":{"father":"husband","mother":"wife","oldbrother":"son","youngbrother":"son","oldsister":"daughter","youngsister":"daughter"},
}