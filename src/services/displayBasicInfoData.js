const getBasicInfoData=(name,gender,birthday,birthplace)=>{
  let data
  if(birthplace.village){
    data = {
      name,
      gender,
      birthdaycalendar:birthday.calendar,
      birthday:birthday.date,
      birthplace:{
        create:{
          province:{connect:{code:birthplace.province}},
          city:{connect:{code:birthplace.city}},
          area:{connect:{code:birthplace.area}},
          street:{connect:{code:birthplace.street}},
          village:{connect:{code:birthplace.village}},
        }
      },
      birthProvince:{connect:{code:birthplace.province}} ,
      birthCity:{connect:{code:birthplace.city}},
      birthArea:{connect:{code:birthplace.area}},
      birthStreet:{connect:{code:birthplace.street}},
      birthVillage:{connect:{code:birthplace.village}},
    }
  }else if(birthplace.street){
    data = {
      name,
      gender,
      birthdaycalendar:birthday.calendar,
      birthday:birthday.date,
      birthplace:{
        create:{
          province:{connect:{code:birthplace.province}},
          city:{connect:{code:birthplace.city}},
          area:{connect:{code:birthplace.area}},
          street:{connect:{code:birthplace.street}},
        }
      },
      birthProvince:{connect:{code:birthplace.province}} ,
      birthCity:{connect:{code:birthplace.city}},
      birthArea:{connect:{code:birthplace.area}},
      birthStreet:{connect:{code:birthplace.street}},
    }
  }else if(birthplace.area){
    data = {
      name,
      gender,
      birthdaycalendar:birthday.calendar,
      birthday:birthday.date,
      birthplace:{
        create:{
          province:{connect:{code:birthplace.province}},
          city:{connect:{code:birthplace.city}},
          area:{connect:{code:birthplace.area}},
        }
      },
      birthProvince:{connect:{code:birthplace.province}} ,
      birthCity:{connect:{code:birthplace.city}},
      birthArea:{connect:{code:birthplace.area}},
    }
  }else if(birthplace.city){
    data = {
      name,
      gender,
      birthdaycalendar:birthday.calendar,
      birthday:birthday.date,
      birthplace:{
        create:{
          province:{connect:{code:birthplace.province}},
          city:{connect:{code:birthplace.city}},
        }
      },
      birthProvince:{connect:{code:birthplace.province}} ,
      birthCity:{connect:{code:birthplace.city}},
    }
  }else if(birthplace.province){
    data = {
      name,
      gender,
      birthdaycalendar:birthday.calendar,
      birthday:birthday.date,
      birthplace:{
        create:{
          province:{connect:{code:birthplace.province}},
        }
      },
      birthProvince:{connect:{code:birthplace.province}} ,
    }
  }else{
    data = {
      name,
      gender,
      birthdaycalendar:birthday.calendar,
      birthday:birthday.date,
    }
  }
  return data
}

export default getBasicInfoData
