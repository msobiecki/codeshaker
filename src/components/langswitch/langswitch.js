import React from "react"
import { useIntl, changeLocale } from "gatsby-plugin-intl"

import { Switchbox, Switch } from "./langswitch.style"

const LangSwitch = () => {
  const intl = useIntl()

  return (
    <Switchbox>
      {intl.locale !== "pl" ? (
        <Switch
          onClick={() => {
            changeLocale("pl")
          }}
        >
          PL
        </Switch>
      ) : (
        ""
      )}
      {intl.locale !== "en" ? (
        <Switch
          onClick={() => {
            changeLocale("en")
          }}
        >
          EN
        </Switch>
      ) : (
        ""
      )}
    </Switchbox>
  )
}

export default LangSwitch
