import React from "react";
import { centeredPageStyles } from "../styles";

export const meta = {
    title: "About",
    tags: ["Next.js", "MDX"],
    layout: "page",
    publishDate: "2011-01-01",
    modifiedDate: false,
    seoDescription: "This is an about page."
};

function About() {
    return (
      <div className="centered-container">
        ÖMER ENGİN ÖZ QUALITY TECHNOLOGY, QUALITY SOFTWARE, QUALITY LIFE
        INFO@OENGINOZ.COM FULL-STACK DEVELOPER He is experienced to write, set
        up and manage High Available systems. He likes to play with technologic
        tools, (not just software) also Arduino, Raspberry PI, esp 8266 etc. He
        likes best practices at all things. Technology is easy-peasy for him. Do
        not separate him from technology. Please approach him friendly.
        <style jsx>{centeredPageStyles}</style>
      </div>
    );
}

export default About;
