export const PartnerCondition = {
    partners: (parent, args, ctx) => ctx.db.partnerCondition({ id: parent.id }).partners(),
    passedPartners: (parent, args, ctx) => ctx.db.partnerCondition({ id: parent.id }).passedPartners(),
    project: (parent, args, ctx) => ctx.db.partnerCondition({ id: parent.id }).project(),
  }
  