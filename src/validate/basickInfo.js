
const validateBasicInfo=(name,gender,birthday,birthplace)=>{
  const rxName =/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
  if(!rxName.test(name)){
    throw new Error('你的姓名错误')
  }
  if(gender!=='male' && gender !== 'female'){
      throw new Error('你的性别未选择')
  }
  if(birthday.calendar!=='lunar' && birthday.calendar!=='gregorian'){
      throw new Error('你未选择日历类别')
  }
  if(isNaN(Date.parse(birthday.date))){
  　　  throw new Error('你的生日选择错误')
  }
  if (birthplace.province!=null && birthplace.province !="" && isNaN(birthplace.province)){
      throw new Error('你未选择所在省')
  }
  if (birthplace.city!=null && birthplace.city !="" && isNaN(birthplace.city)){
    throw new Error('你未选择所在市')
  }
  if (birthplace.area==null && birthplace.area =="" && isNaN(birthplace.area)){
    throw new Error('你未选择所在区')
  }
  if (birthplace.street==null && birthplace.street =="" && isNaN(birthplace.street)){
    throw new Error('你未选择所在乡镇')
  }
  if (birthplace.village==null && birthplace.village =="" && isNaN(birthplace.village)){
    throw new Error('你未选择所在村')
  }
}

export default validateBasicInfo
