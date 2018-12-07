{
    "一夫一妻",
    "一夫多妻和一妻多夫",
}

// createFamily
mutation{
    createFamily(name:"李土福" relationship:"husband"){
      id
    }
  }

  mutation{
    createFamily(name:"斯柯达积分" relationship:"husband"){
      id
    }
  }

  mutation{
    createFamily(name:"殷丽" relationship:"mother"){
      id
    }
  }

  mutation{
    createFamily(name:"李天诏" relationship:"son" spouseId:"cjpe09boy0bah080167j13dng"){
      id
    }
  }

  mutation{
    createFamily(name:"刷卡打飞机" relationship:"son" spouseId:"cjpe09kg60baq0801t5pw9rwx"){
      id
    }
  }

