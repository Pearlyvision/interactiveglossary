//I'm gonna create a function grouping a programming concepts to link into their header on the (right side).So that everytime they click on a concept if leads to the header 
import React, { useState } from "react";
// let react display what you want to be shown
import Image from "next/image";
//add to glossary the meaning of object : creating the idea of representing the components as
export default function FunctionList() {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const conceptDetail = {
        Functions: {
            header: "Functions",
            Paragraph: "Functions are blocks of reuseable code that can be called or invoked to perform a specific task",
            imageSrc: "/image/Functions.jpg",
            alt: "Functions Image",
        },
        Arrays: {
            header: "Arrays",
            Paragraph: "Are used to store multiple values in a single variable.",
            imageSrc: "/image/Arrays.jpg",
            alt: "Arrays Image",
        },
        Loops: {
            header: "Loops",
            Paragraph: "Loops are used to repeatedly execute a block of code",
            imageSrc: "/image/Loops.jpg",
            alt: "Loops Image",
        },
        Variables: {
            header: "Variables",
            Paragraph: "Arrays are used to store multiple values in a single variable",
            imageSrc: "/image/Variables.jpg",
            alt: "Variables Image",
        }
    }

    const handleButtonClick = (component) => {
        setSelectedComponent(component);
    };

    return (
        <>
            <div>
                <button onClick={() => handleButtonClick("Functions")}>Functions</button>
                <button onClick={() => handleButtonClick("Arrays")}>Arrays</button>
                <button onClick={() => handleButtonClick("Loops")}>Loops</button>
                <button onClick={() => handleButtonClick("Variables")}>Variables</button>
            </div>

            {selectedComponent && conceptDetail[selectedComponent] && (
                <div>
                    <Image src={conceptDetail[selectedComponent].imageSrc} alt={conceptDetail[selectedComponent].alt} width={100} height={100} />
                    <h2>{conceptDetail[selectedComponent].header}</h2>
                    <p>{conceptDetail[selectedComponent].Paragraph}</p>
                </div>
            )}
        </>
    );
}