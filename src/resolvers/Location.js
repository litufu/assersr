export const Location = {
    province:(parent, args, ctx) => ctx.db.location({ id: parent.id }).province(),
    city:(parent, args, ctx) => ctx.db.location({ id: parent.id }).city(),
    area:(parent, args, ctx) => ctx.db.location({ id: parent.id }).area(),
    street:(parent, args, ctx) => ctx.db.location({ id: parent.id }).street(),
    village:(parent, args, ctx) => ctx.db.location({ id: parent.id }).village(),
    schools:(parent, args, ctx) => ctx.db.location({ id: parent.id }).schools(),
    companies:(parent, args, ctx) => ctx.db.location({ id: parent.id }).companies(),
    universities:(parent, args, ctx) => ctx.db.location({ id: parent.id }).universities(),
    people:(parent, args, ctx) => ctx.db.location({ id: parent.id }).people(),
    name:async (parent, args, ctx) => {
        const province = await ctx.db.location({ id: parent.id }).province()
        const provinceName = province ? province.name : ""
        const city = await ctx.db.location({ id: parent.id }).city()
        const cityName = city ? city.name : ""
        const area = await ctx.db.location({ id: parent.id }).area()
        const areaName = area ? area.name : "" 
        const street = await ctx.db.location({ id: parent.id }).street()
        const streetName = street ? street.name : ""
        const village = await ctx.db.location({ id: parent.id }).village()
        const villageName = village ? village.name : ""
        const name = provinceName + cityName + areaName + streetName + villageName
        return name
    },
  }
  