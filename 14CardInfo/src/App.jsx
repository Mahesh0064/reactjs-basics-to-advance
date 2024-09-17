import Card from "./components/Card";
import React from "react";

const App = () => {
  const handlePrimaryClick = () => {
    alert("Primary button clicked!");
  };

  const handleSecondaryClick = () => {
    alert("Secondary button clicked!");
  };

  // const cardInfo = [
  //   {
  //     title: "Mahesh Kumar",
  //     description: " full stack developer",
  //     imageUrl:
  //       "https://cmsimages.shoppersstop.com/Gift_Card_web_spykar_e11adaaf1e/Gift_Card_web_spykar_e11adaaf1e.png",
  //   },
  //   {
  //     title: "Mahesh Kumar",
  //     description: " full stack developer",
  //     imageUrl:
  //       "https://cmsimages.shoppersstop.com/Gift_Card_web_spykar_e11adaaf1e/Gift_Card_web_spykar_e11adaaf1e.png",
  //   },
  //   {
  //     title: "Mahesh Kumar",
  //     description: " full stack developer",
  //     imageUrl:
  //       "https://cmsimages.shoppersstop.com/Gift_Card_web_spykar_e11adaaf1e/Gift_Card_web_spykar_e11adaaf1e.png",
  //   },
  //   {
  //     title: "Mahesh Kumar",
  //     description: " full stack developer",
  //     imageUrl:
  //       "https://cmsimages.shoppersstop.com/Gift_Card_web_spykar_e11adaaf1e/Gift_Card_web_spykar_e11adaaf1e.png",
  //   },
  //   {
  //     title: "Mahesh Kumar",
  //     description: " full stack developer",
  //     imageUrl:
  //       "https://cmsimages.shoppersstop.com/Gift_Card_web_spykar_e11adaaf1e/Gift_Card_web_spykar_e11adaaf1e.png",
  //   },
  //   {
  //     title: "Mahesh Kumar",
  //     description: " full stack developer",
  //     imageUrl:
  //       "https://cmsimages.shoppersstop.com/Gift_Card_web_spykar_e11adaaf1e/Gift_Card_web_spykar_e11adaaf1e.png",
  //   },
  // ];

  return (
    <div>
      <Card
        title="Beautiful Mountain"
        description="This is a stunning view of the mountains during sunset."
        imageUrl="https://cmsimages.shoppersstop.com/Gift_Card_web_spykar_e11adaaf1e/Gift_Card_web_spykar_e11adaaf1e.png"
        onPrimaryClick={handlePrimaryClick}
        onSecondaryClick={handleSecondaryClick}
      />
      <Card
        title="Beautiful Mountain"
        description="This is a stunning view of the mountains during sunset."
        imageUrl="https://cmsimages.shoppersstop.com/Gift_Card_web_spykar_e11adaaf1e/Gift_Card_web_spykar_e11adaaf1e.png"
        onPrimaryClick={handlePrimaryClick}
        onSecondaryClick={handleSecondaryClick}
      />
      <Card
        title="Beautiful Mountain"
        description="This is a stunning view of the mountains during sunset."
        imageUrl="https://cmsimages.shoppersstop.com/Gift_Card_web_spykar_e11adaaf1e/Gift_Card_web_spykar_e11adaaf1e.png"
        onPrimaryClick={handlePrimaryClick}
        onSecondaryClick={handleSecondaryClick}
      />
      <Card
        title="Beautiful Mountain"
        description="This is a stunning view of the mountains during sunset."
        imageUrl="https://cmsimages.shoppersstop.com/Gift_Card_web_spykar_e11adaaf1e/Gift_Card_web_spykar_e11adaaf1e.png"
        onPrimaryClick={handlePrimaryClick}
        onSecondaryClick={handleSecondaryClick}
      />
      <Card
        title="Beautiful Mountain"
        description="This is a stunning view of the mountains during sunset."
        imageUrl="https://cmsimages.shoppersstop.com/Gift_Card_web_spykar_e11adaaf1e/Gift_Card_web_spykar_e11adaaf1e.png"
        onPrimaryClick={handlePrimaryClick}
        onSecondaryClick={handleSecondaryClick}
      />
      <Card
        title="Beautiful Mountain"
        description="This is a stunning view of the mountains during sunset."
        imageUrl="https://cmsimages.shoppersstop.com/Gift_Card_web_spykar_e11adaaf1e/Gift_Card_web_spykar_e11adaaf1e.png"
        onPrimaryClick={handlePrimaryClick}
        onSecondaryClick={handleSecondaryClick}
      />
      <Card
        title="Beautiful Mountain"
        description="This is a stunning view of the mountains during sunset."
        imageUrl="https://cmsimages.shoppersstop.com/Gift_Card_web_spykar_e11adaaf1e/Gift_Card_web_spykar_e11adaaf1e.png"
        onPrimaryClick={handlePrimaryClick}
        onSecondaryClick={handleSecondaryClick}
      />
      <Card
        title="Beautiful Mountain"
        description="This is a stunning view of the mountains during sunset."
        imageUrl="https://cmsimages.shoppersstop.com/Gift_Card_web_spykar_e11adaaf1e/Gift_Card_web_spykar_e11adaaf1e.png"
        onPrimaryClick={handlePrimaryClick}
        onSecondaryClick={handleSecondaryClick}
      />
    </div>
  );
};

export default App;
