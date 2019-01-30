  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  const day = new Date().getDate() - 1

  const startTime = new Date(year, month, day, 0, 0, 0)
  const endTime = new Date(year,month,day+1,0,0,0)
  
  export const VisitCount = {
    userNum:(parent, args, ctx) => ctx.db.usersConnection().aggregate().count(),
    addNum:async (parent, args, ctx) => {
        const registerCounts =  await ctx.db.registerCounts({
            where:{
                AND:[
                    {createdAt_gte:startTime},
                    {createdAt_lt:endTime},
                ]
            }
        })
        return registerCounts.length
    },
    visits:async (parent, args, ctx) =>{
       
        const bootCounts = await ctx.db.bootCounts({
            where:{
                AND:[
                    {createdAt_gte:startTime},
                    {createdAt_lt:endTime},
                ]
            }
        })
        const result = {}
        for(let i=1;i<=48;i++) {
            const  end = startTime.getTime() + i/2*60*60*1000
            result[i] = bootCounts.filter(bootCount=>{
                const  createdAt = new Date(bootCount.createdAt).getTime()
           
                if(createdAt<end && createdAt>=(end-1/2*60*60*1000)){
                    return true
                }
                return false
            }).length
        }
        return JSON.stringify(result)
    } 
}