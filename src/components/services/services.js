import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useWindowWidth } from "@react-hook/window-size"

import { Breakpoints } from "../../assets/variables"

import { Box, Column, Title, Items, Item, NativeLink } from "./services.style"

const Services = () => {
  const windowWidth = useWindowWidth()

  const data = [
    {
      title: "Services",
      column: 0,
      items: [{ text: "IT Outsourcing" }],
    },
    {
      title: "My scope",
      column: 0,
      items: [
        { text: "Creating web applications, mobile applications and APIs." },
      ],
    },
    {
      title: "Customers",
      column: 1,
      items: [
        {
          text:
            "Still empty. But this is a place to promote your business that we will implement.",
        },
      ],
    },
    {
      title: "Contact",
      column: 2,
      items: [
        {
          text: "CODESHAKER MICHAŁ SOBIECKI",
        },
        {
          text: "kontakt@codeshaker.pl",
          link: "mailto:kontakt@codeshaker.pl",
        },
        {
          text: "+48 506 500 145",
          link: "tel:+48506500145",
        },
      ],
    },
  ]

  return (
    <Box>
      {Object.values(
        data.reduce((currentState, service) => {
          if (!currentState[service.column]) currentState[service.column] = []
          currentState[service.column].push(service)
          return currentState
        }, {})
      ).map((column, columnIndex) => (
        <Column key={columnIndex}>
          {column.map((service, serviceIndex) => (
            <Fragment key={`${columnIndex}-${serviceIndex}`}>
              <Title
                initial={
                  windowWidth < Breakpoints.lg
                    ? { opacity: 0, scale: 0 }
                    : { opacity: 0, translateX: 25 }
                }
                animate={
                  windowWidth < Breakpoints.lg
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 1, translateX: 0 }
                }
                transition={{
                  duration: 0.4,
                  delay: 1.2 + columnIndex * 0.5 + serviceIndex * 0.25,
                }}
              >
                {service.title}
              </Title>
              <Items>
                {service.items.map((item, itemIndex) => (
                  <Item
                    key={`${columnIndex}-${serviceIndex}-${itemIndex}`}
                    initial={
                      windowWidth < Breakpoints.lg
                        ? { opacity: 0, scale: 0 }
                        : { opacity: 0, translateX: 25 }
                    }
                    animate={
                      windowWidth < Breakpoints.lg
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 1, translateX: 0 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: 1.4 + columnIndex * 0.5 + serviceIndex * 0.25,
                    }}
                  >
                    {item.link ? (
                      <NativeLink type={item.type} href={item.link}>
                        {item.text}
                      </NativeLink>
                    ) : (
                      item.text
                    )}
                  </Item>
                ))}
              </Items>
            </Fragment>
          ))}
        </Column>
      ))}
    </Box>
  )
}

export default Services

Services.propTypes = {}
