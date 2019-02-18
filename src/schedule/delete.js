import { prisma } from '../generated/prisma-client'

const deleteMessages = async ()=>{
    await prisma.deleteManyGroupMessages()
    await prisma.deleteManyMessages()
}

deleteMessages()
