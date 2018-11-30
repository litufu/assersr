// 关系对照表
const relationshipMap = {

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

export default relationshipMap;