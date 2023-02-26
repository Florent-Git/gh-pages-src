import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

export function DownloadResume() {
    const data = useStaticQuery(graphql`
        query GetPDFFiles {
            allFile(filter: { extension: { eq: "pdf" } }) {
                edges {
                    node {
                        publicURL
                        name
                    }
                }
            }
        }
    `);

    console.log(data.allFile.edges[0].node);

    return (
        <>
            <a className="cursor-pointer p-3 bg-primary-light dark:bg-primary-dark rounded-xl text-onPrimary-light dark:text-onPrimary-dark" href={data.allFile.edges[0].node.publicURL} download>Download my CV</a>
        </>
    )
}