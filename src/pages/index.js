import * as React from "react"

// styles
// styles
const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  color: "#663399",
  marginTop: 0,
  marginBottom: 15,
  maxWidth: 1500,
}
const headingAccentStyles = {
  color: "#663399",

}
const paragraphStyles = {
  marginTop:21,
  paddingLeft:18,
  marginBottom: 25,
}
const subtitleStyles = {
  marginTop:25,
  paddingLeft:18,
  marginBottom: 35,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 100,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 1000,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}


const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Mortgage Application Count by DemToRepubCounty, FHFA LowIncomeArea, State, Race, Year",
    url: "https://public.tableau.com/app/profile/brian.rochford/viz/DemToRepubCountyLowIncomeStateRaceYear/ItemCountbyFHFALowIncomeAreaFlagDemToRepubCountyStateRaceandYear?publish=yes",
    description:
      "Item count line chart by State over time. Dimensions to filter include demToRepubCountyFlip, Low Income Area, Year, Race, State ",
    color: "#E95800",
  },
  {
    text: "Mortgage Application Count by RepubToDemCounty, FHFA LowIncomeArea, State, Race, Year",
    url: "https://public.tableau.com/app/profile/brian.rochford/viz/RepubToDemCountyLowIncomeStateRaceYear/ItemCountbyFHFALowIncomeAreaFlagRepubToDemCountyStateRaceandYear?publish=yes",
    description:
      "Item count line chart by State over time. Dimensions to filter include repubToDemCountyFlip, Low Income Area, Year, Race, State",
    color: "#1099A8",
  },
  {
    text: "Approval Rates by County in DemToRepub Flip States",
    url: "https://public.tableau.com/app/profile/brian.rochford/viz/MapOptionsDemToRepubFlipStateLowIncomeStatePopulationYear/CountyMapbyApprovalRatesandPopulationGreaterthan44000in2019populationDemToRepubFlipState?publish=yes",
    description: "Map has paramater control for total population, and dimension options for low income areas, year, demToRepubFlipState",
    color: "#BC027F",
  },
  {
    text: "Approval Rates by County in RepubToDem Flip States",
    url: "https://public.tableau.com/app/profile/brian.rochford/viz/MapOptionsRepubToDemFlipStateLowIncomeStatePopulationYear/CountyMapbyApprovalRatesandPopulationGreaterthan44000in2019populationDemToRepubFlipState2#2",
    description: "Map has paramater control for total population, and dimension options for low income areas, year, repubToDemFlipState",
    color: "#BC027F",
  },
  {
    text: "Code Glossary Book",
    url: "https://docs.google.com/document/d/1wTHueSJ9YGJQ2onokbuhqsd9ee_88npSZE4-ynwOru4/edit",
    description:
      "Interpretting each column, the possible values they may have, and their purpose in the study (if applicable)",
    color: "#0D96F2",
  },
  {
    text: "Dataset",
    url: "https://drive.google.com/drive/folders/1XIW_dvrKchUXyvQOobIoiWTdZmyZxu6G",
    description:
      "Purchasing Single Family Home Mortgage applications from 2014-2021 in 24 states that at some point in time went through political change at the Congressional District Level.",
    color: "#8EB814",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>2014-2021 Mortgage, Population, Social and Governance Indicators Dataset
        <br />
        <span style={headingAccentStyles}></span>
        
        <p>Data Source: Recursions HMDA Analyzer</p>
      </h1>
        <p style={paragraphStyles}>Created by Brian Rochford, Dr.Chang, Dr.Wang, Dr.Yan</p>
      
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}

          >
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage
