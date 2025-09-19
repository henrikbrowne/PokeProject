"use client"

import { Heading, Mark, useHighlight } from "@chakra-ui/react"
import { Fragment } from "react"

const PoweredByAi = () => {
  const chunks = useHighlight({
    text: "Powered by AI - made by developers, for developers",
    query: ["AI", "Developed","developers"],
  })

  return (
    <Heading size="3xl" maxW="240ch">
      {chunks.map((chunk, index) => {
        return chunk.match ? (
          <Mark
            key={index}
            css={{
              fontStyle: "italic",
              color: "red.500",
              position: "relative",
            }}
          >
            {chunk.text}
            <img
              style={{ position: "absolute", left: 0 }}
              src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61c4dc7572d22f05ba26fd34_hero-underline.svg"
              loading="lazy"
              alt=""
            />
          </Mark>
        ) : (
          <Fragment key={index}>{chunk.text}</Fragment>
        )
      })}
    </Heading>
  )
}

export default PoweredByAi
