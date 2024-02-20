import Image from "next/image";

//I'm gonna create a function grouping a programming concepts to link into their header on the (right side).So that everytime they click on a concept if leads to the header 

export default function FunctionList() {
    const conceptDetail = {
        Functions :{
            header: "Functions",
            Paragraph: "Functions are blocks of reuseable code that can be called or invoked to perform a specific task",
            imageSrc: "/image/Functions.jpg ",
            alt: "Functions Image",
        },
        Arrays :{
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
  return (
    <>
      <Image src={conceptDetail.Functions.imageSrc} alt={conceptDetail.Functions.imageSrc} width={100} height={100} />
      <h2>{conceptDetail.Functions.header}</h2>
      <p>{conceptDetail.Functions.Paragraph}</p>

      <Image src={conceptDetail.Arrays.imageSrc} alt={conceptDetail.Arrays.imageSrc} width={100} height={100} />
      <h2>{conceptDetail.Arrays.header}</h2>
      <p>{conceptDetail.Arrays.Paragraph}</p>

      <Image src={conceptDetail.Loops.imageSrc} alt={conceptDetail.Loops.imageSrc} width={100} height={100} />
      <h2>{conceptDetail.Loops.header}</h2>
      <p>{conceptDetail.Loops.Paragraph}</p>

      <Image src={conceptDetail.Variables.imageSrc} alt={conceptDetail.Variables.imageSrc} width={100} height={100} />
      <h2>{conceptDetail.Variables.header}</h2>
      <p>{conceptDetail.Variables.Paragraph}</p>
    </>
  );
}