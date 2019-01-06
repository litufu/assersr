

export const validateBasicInfo=(name,gender,birthday,birthplace,residence)=>{
  checkName(name)
  checkGender(gender)
  checkCalendar(birthday.calendar)
  checkDate(birthday.date)
  checkPlaceCode(birthplace.province,'所在省')
  checkPlaceCode(birthplace.city,'所在市')
  checkPlaceCode(birthplace.area,'所在区')
  checkPlaceCode(birthplace.street,'所在乡镇')
  checkPlaceCode(birthplace.village,'所在村')
  checkPlaceCode(residence.province,'所在省')
  checkPlaceCode(residence.city,'所在市')
  checkPlaceCode(residence.area,'所在区')
  checkPlaceCode(residence.street,'所在乡镇')
  checkPlaceCode(residence.village,'所在村')
}

export const checkCompanyName = (companyName)=>{
  const rxName =/^[（()）\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
  if(!rxName.test(companyName)){
    throw new Error('公司名称错误')
  }
}

export const checkName = (name)=>{
  const rxName =/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
  if(!rxName.test(name)){
    throw new Error('你的姓名错误')
  }
}

export const checkGender = (gender)=>{
  if(gender!=='male' && gender !== 'female'){
    throw new Error('你的性别未选择')
  }
}

export  const checkCalendar = (calendar)=>{
  if(calendar!=='lunar' && calendar!=='gregorian'){
    throw new Error('你未选择日历类别')
  }
}

export const checkDate= (date)=>{
  if(isNaN(Date.parse(date))){
     throw new Error('日期错误')
  }
}

export const checkPlaceCode=(input,inputName)=>{
  if(!/^\d+$/.test(input)){
    throw new Error(`你未输入${inputName}`)
    }
}

export const checkHasInput=(input,inputName)=>{
  if (input==null && input === "" && isNaN(input)){
    throw new Error(`你未输入${inputName}`)
  }
}

export const checkUsername = (username)=>{
  const uPattern = /^[a-zA-Z0-9_-]{4,16}$/
  const usernameTest = uPattern.test(username)
  if (!usernameTest) throw new Error(`${username}格式不符合要求`)
}

export const checkPassword = (password)=>{
  const pPattern = /^.*(?=.{6,20})(?=.*\d)(?=.*[a-zA-Z]).*$/;
  const curPasswordTest = pPattern.test(password)
  if (!curPasswordTest) throw new Error("密码格式错误")
}

export const checkRelationship = (relationship)=>{
  const relationships = ["father","mother","son","daughter","oldbrother","youngbrother","oldsister","youngsister","sister","brother","wife","husband"]
  if(!~relationships.indexOf(relationship)){
    throw new Error("关系输入错误")
  }
}

export const checkId = (id)=>{
  const idPatter = /^[0-9a-zA-Z]*$/g
  const idTest = idPatter.test(id)
  if (!idTest) throw new Error("id格式错误")
}

export const checkStatus = (status)=>{
  const statuses = ["0","1","2","3"]
  if(!~statuses.indexOf(status)){
    throw new Error("status输入错误")
  }
}

export const checkCnEnNum=(name)=>{
  // 检查中文英文和数字
  const rxName =/^[a-zA-Z0-9\u4E00-\u9FA5\uf900-\ufa2d·s]+$/
  if(!rxName.test(name)){
    throw new Error("格式输入错误")
  }
}

export const checkNum = (str)=>{
  if(!/^\d+$/.test(str)){
    throw new Error("数字输入错误")
    }
}

export const checkScore = (str)=>{
  const pattern = /^[0-9]+(.[0-9]{1,2})?$/
  if(!pattern.test(str)){
    throw new Error("分数格式错误")
  }
}