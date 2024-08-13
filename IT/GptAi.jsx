import React from 'react';
import Header from '../CoursesComponents/Header';
import Why from '../CoursesComponents/Why';
import Modules from '../CoursesComponents/Modules';
import Certificate from '../Homepage/Certificate';
import FAQ from '../CoursesComponents/FAQ';
import RelatedCourses from '../CoursesComponents/RelatedCourses';
import Trustus from '../CoursesComponents/Trustus';
import Councelor from '../CoursesComponents/Councelor';
import Projects from '../CoursesComponents/Projects';
import ScrollToTop from '../components/ScrollToTop';
import Program from '../CoursesComponents/ProgramHighlights';

const GPT = () => {
  return (
    <div>
      <main>
        <ScrollToTop />
        <Header pageId="GPTHeader" pageType="GPTpage" />
        {/* <DSHeader pageId="MDAHeader" /> */}
        <Why pageId="WhyGPT" pageType="Whygpt" />
        <Councelor />
         <Modules pageId="ChatGPT&Ai" />
        <Trustus />
        <Certificate />
        <Program />
        <Projects pageId="GPTinduspro" pageType="gptinduspro" />
        <FAQ pageId="GPTFAQ" pageType="GPTfaq" />
        <RelatedCourses pageId="GPTrelated" />
      </main>
    </div>
  );
};

export default GPT;
