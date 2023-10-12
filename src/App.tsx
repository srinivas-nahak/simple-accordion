import { useState } from "react";
import "./App.css";

function App() {
  const [selected, setSelected] = useState<number | undefined>(undefined);

  const accordionContent = [
    {
      title: "Accordion 1",
      content:
        "In a RESTful API design, each HTTP method has a specific meaning and purpose, and adhering to these semantics can make your API more self-explanatory and consistent. Here's a basic guideline:",
    },
    {
      title: "Accordion 2",
      content:
        "In a RESTful API design, each HTTP method has a specific meaning and purpose, and adhering to these semantics can make your API more self-explanatory and consistent. Here's a basic guideline:",
    },
    {
      title: "Accordion 3",
      content:
        "In a RESTful API design, each HTTP method has a specific meaning and purpose, and adhering to these semantics can make your API more self-explanatory and consistent. Here's a basic guideline:",
    },
  ];

  const activeStyle = { height: "auto" };
  const inactiveStyle = { height: "0" };

  const getStyle = (index: number) => {
    if (index !== undefined && index === selected) {
      return {
        transform: "scaleY(1)",
        //maxHeight: "999px",
        //transition: "all 0.5s cubic-bezier(0, 1, 0, 1)",
      };
    }

    return {
      transform: "scaleY(0)",
      maxHeight: "0px",
      transition: "all 0.5s cubic-bezier(0, 1, 0, 1)",
    };
  };

  return (
    <>
      {accordionContent.map((accordion, index) => {
        return (
          <div key={accordion.title} className="accordion-container">
            <p
              onClick={() => {
                setSelected((prevSelectedIndex) => {
                  if (prevSelectedIndex === index) {
                    return undefined;
                  }
                  return index;
                });
              }}
            >
              {accordion.title}
            </p>
            <small style={getStyle(index)}>{accordion.content}</small>
          </div>
        );
      })}
    </>
  );
}

export default App;
