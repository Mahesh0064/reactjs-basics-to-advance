import React, { useEffect, useState } from "react";

function GitHub() {
  const [data, setData] = useState([1000]);
  useEffect(() => {
    //https://github.com/Mahesh0064
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((respnse) => respnse.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  });
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      GitHub Followers :{data.followers}
      <img src={"./images/mahesh.jpeg"} alt="Git Picture" width={300} />
    </div>
  );
}

export default GitHub;
