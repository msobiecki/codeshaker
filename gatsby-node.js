exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const contentData = {
    id: 1,
    title: "CODESHAKER",
    lead: "Digital solutions for your business",
  }
  actions.createNode({
    ...contentData,
    id: createNodeId(contentData.id),
    internal: {
      type: "Content",
      contentDigest: createContentDigest(contentData),
    },
  })

  const folioData = [
    {
      id: 1,
      name: "Public bike share system",
      description:
        "System for renting city bikes and monitoring their location on the map",
      image: "images/folio_one.jpg",
      client: "",
      technologies: ["AngularJS, Ruby on Rails, SocketIO, PostgreSQL"],
      realisationYear: 2016,
    },
    {
      id: 2,
      name: "Quiz generator system for teachers and educators",
      description:
        "A system for creating quizzes and tests to verify students' knowledge",
      image: "images/folio_two.jpg",
      client: "",
      technologies: ["AngularJS, Ruby on Rails, SocketIO, PostgreSQL"],
      realisationYear: 2016,
    },
    {
      id: 3,
      name: "Reuse requirements system",
      description:
        "A system supporting the topic of reuse requirements between projects",
      image: "images/folio_three.jpg",
      client: "",
      technologies: ["ReactJS, NodeJS, PostgreSQL"],
      realisationYear: 2020,
    },
    {
      id: 4,
      name: "",
      description:
        "A application for managing and monitoring the filling level of smart bines",
      image: "images/folio_four.jpg",
      client: "",
      technologies: ["ReactJS, Firebase"],
      realisationYear: 2019,
    },
    {
      id: 4,
      name: "",
      description:
        "A set of applications for work related to marking objects in photos",
      image: "images/folio_five.jpg",
      client: "",
      technologies: ["ReactJS"],
      realisationYear: 2019,
    },
    {
      id: 5,
      name: "",
      description:
        "Application to classify photos for use in artificial intelligence",
      image: "images/folio_six.jpg",
      client: "",
      technologies: ["ReactJS, Firebase"],
      realisationYear: 2020,
    },
    {
      id: 6,
      name: "",
      description: "Application to support data warehouse",
      image: "images/folio_seven.jpg",
      client: "",
      technologies: ["ReactJS"],
      realisationYear: 2020,
    },
  ]

  folioData.forEach((folio) => {
    actions.createNode({
      ...folio,
      id: createNodeId(folio.id),
      internal: {
        type: "Folio",
        contentDigest: createContentDigest(folio),
      },
    })
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
