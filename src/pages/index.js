import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

import Layout from "../components/layout"

import SEO from "../components/seo"

import { toggleDarkMode } from "../state/stuff"

const IndexPage = ({ isDarkMode, dispatch }) => (
  <Layout>
    <SEO title='Home' />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <button
      style={isDarkMode ? { background: "black", color: "white" } : null}
      onClick={() => dispatch(toggleDarkMode(!isDarkMode))}>
      Dark Mode
      {isDarkMode ? "on" : "off"}
    </button>

    <Link to='/page-2/'>Go to page 2</Link>
  </Layout>
)

export default connect(
  state => ({ isDarkMode: state.app.isDarkMode }),
  null
)(IndexPage)
