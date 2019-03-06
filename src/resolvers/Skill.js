export const Skill = {
    persons:(parent, args, ctx) => ctx.db.skill({ id: parent.id }).persons(),
  }