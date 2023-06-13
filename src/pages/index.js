import React from "react";
import {
  // AboutSection,
  // ArticlesSection,
  ContactSection,
  HeroSection,
  // InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import PhotoPage from "./photo.tsx";

export default function IndexPage() {
  return (
    <>
      <Seo title="Roger Chou's Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ProjectsSection sectionId="features" heading="Projects" />
        <PhotoPage sectionId="photography" heading="Photography" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        {/* <AboutSection sectionId="about" heading="About Portfolio Minimal" />  */}
        {/* <InterestsSection sectionId="details" heading="Details" /> */}
        <ContactSection sectionId="info" heading="Got Questions?" />
      </Page>
    </>
  );
}
