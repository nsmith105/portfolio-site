import React from "react"
import Layout from "../components/layout"
import screenshot from "../public/firstLook.png"

export default () => (
    <Layout>
        <h1>Blog</h1>
        <p>
            This is my first blog post! Look at how skinny this website is!
        </p>
        <img src={screenshot} />
    </Layout>
)