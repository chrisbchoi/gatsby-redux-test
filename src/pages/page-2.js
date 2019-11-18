import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { toggleDarkMode } from "../state/stuff"

const SecondPage = ({ isDarkMode }) => (
  <Layout>
    <SEO title='Page two' />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>

    <span style={isDarkMode ? { background: "black", color: "white" } : null}>
      Dark Mode
      {isDarkMode ? "on" : "off"}
    </span>

    <Link to='/'>Go back to the homepage</Link>
  </Layout>
)

export default connect(
  state => ({ isDarkMode: state.app.isDarkMode }),
  null
)(SecondPage)
