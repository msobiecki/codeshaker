exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const contentData = {
    id: 1,
    title: "CODESHAKER",
    lead: "Digital solutions for your business",
    footer: {
      title: "CODESHAKER",
      subtitle: "Michał Sobiecki",
      emoji: "📧",
      lead: "Write to me",
      email: "kontakt@codeshaker.pl",
      phone: "+48506500145",
      linkedin: "https://www.linkedin.com/company/codeshakerpl",
      facebook: "https://www.facebook.com/CODESHAKERpl",
    },
  }
  actions.createNode({
    ...contentData,
    id: createNodeId(contentData.id),
    internal: {
      type: "Content",
      contentDigest: createContentDigest(contentData),
    },
  })

  // const servicesData = [
  //   { id: 1, title: "Services", items: [{ text: "IT Outsourcing" }] },
  //   {
  //     id: 2,
  //     title: "My scope",
  //     items: [
  //       { text: "Creating web applications, mobile applications and APIs." },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Customers",
  //     items: [
  //       {
  //         text:
  //           "Still empty. But this is a place to promote your business that we will implement.",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: "Contact",
  //     items: [
  //       { text: "CODESHAKER MICHAŁ SOBIECKI" },
  //       {
  //         type: "mailto",
  //         link: "kontakt@codeshaker.pl",
  //         text: "kontakt@codeshaker.pl",
  //       },
  //       { type: "tel", link: "+48506500145", text: "+48 506 500 145" },
  //     ],
  //   },
  // ]

  // servicesData.forEach((service) => {
  //   actions.createNode({
  //     id: createNodeId(service.id),
  //     title: service.title,
  //     children: [...service.items],
  //     internal: {
  //       type: "Service",
  //       contentDigest: createContentDigest(service),
  //     },
  //   })
  // })
}
