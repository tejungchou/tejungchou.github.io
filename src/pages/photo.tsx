import React from 'react';
import { Animation } from '../../node_modules/gatsby-theme-portfolio-minimal/src/components/Animation';
import { Section } from 'gatsby-theme-portfolio-minimal';
import { StaticImage } from "gatsby-plugin-image";
import { PageSection } from '../../node_modules/gatsby-theme-portfolio-minimal/src/types';

export default function PhotoPage(props: PageSection): React.ReactElement {
    const wrap = {
        'display': 'flex',
        'flex-direction': 'row',
        // 'flex-wrap': 'wrap',
        'text-align': 'center',
        'overflow-x': 'scroll'
    }
    const photoStyle = {
        'padding': '5px',
        'min-width': '250px',
        'min-height':'250px',
    };
    return (
        <Animation type="fadeUp">
            <Section anchor={props.sectionId} heading={props.heading}>
                <p>
                    <div className="wrap" style={wrap}>
                        <div className='photo-style' style={photoStyle}>
                            <StaticImage 
                                className="photo-photo"
                                src='./images/2.jpg'
                                layout='constrained'
                                alt="myPhoto"
                                width={250}
                                height={250}
                            />
                        </div>
                        <div className='photo-style' style={photoStyle}>
                            <StaticImage 
                                className="photo-photo"
                                src='./images/3.jpg'
                                layout='constrained'
                                alt="myPhoto"
                                width={250}
                                height={250}
                            />
                        </div>
                        <div className='photo-style' style={photoStyle}>
                            <StaticImage 
                                className="photo-photo"
                                src='./images/4.jpg'
                                layout='constrained'
                                alt="myPhoto"
                                width={250}
                                height={250}
                            />
                        </div>
                        <div className='photo-style' style={photoStyle}>
                            <StaticImage 
                                className="photo-photo"
                                src='./images/5.jpg'
                                layout='constrained'
                                alt="myPhoto"
                                width={250}
                                height={250}
                            />
                        </div>
                        <div className='photo-style' style={photoStyle}>
                            <StaticImage 
                                className="photo-photo"
                                src='./images/6.jpg'
                                layout='constrained'
                                alt="myPhoto"
                                width={250}
                                height={250}
                            />
                        </div>
                        <div className='photo-style' style={photoStyle}>
                            <StaticImage 
                                className="photo-photo"
                                src='./images/7.jpg'
                                layout='constrained'
                                alt="myPhoto"
                                width={250}
                                height={250}
                            />
                        </div>
                        <div className='photo-style' style={photoStyle}>
                            <StaticImage 
                                className="photo-photo"
                                src='./images/8.jpg'
                                layout='constrained'
                                alt="myPhoto"
                                width={250}
                                height={250}
                            />
                        </div>
                        <div className='photo-style' style={photoStyle}>
                            <StaticImage 
                                className="photo-photo"
                                src='./images/9.jpg'
                                layout='constrained'
                                alt="myPhoto"
                                width={250}
                                height={250}
                            />
                        </div>
                        <div className='photo-style' style={photoStyle}>
                            <StaticImage 
                                className="photo-photo"
                                src='./images/10.jpg'
                                layout='constrained'
                                alt="myPhoto"
                                width={250}
                                height={250}
                            />
                        </div>
                    </div>
                </p> 
            </Section>
        </Animation>
    );
}