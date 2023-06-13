import { graphql, useStaticQuery } from 'gatsby';
import { ImageObject } from '../../node_modules/gatsby-theme-portfolio-minimal/src/types';

interface PhotoQuerySectionResult {
    allImageSharp: {
        nodes:{
            id: string;
            fixed: {
                originalName: string;
            };
        }[];
    };
}

export const useLocalDataSource = (): PhotoQuerySectionResult => {
    return useStaticQuery(graphql`
        query PhotoQuery {
            allImageSharp {
                nodes {
                  id
                  fixed {
                    originalName
                  }
                  gatsbyImageData(height: 220, width: 220, sizes: "inside")
                }
              }
        }
    `);
};
