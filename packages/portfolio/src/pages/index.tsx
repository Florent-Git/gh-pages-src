import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { InConstructionComponent } from "../components/in-construction-component/in-construction-component"

const IndexPage: React.FC<PageProps> = () => {
    return (
        <InConstructionComponent/>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
