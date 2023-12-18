import { useEffect, useState } from "react";

export default function Home() {
  const [message, setmessage] = useState("Loading...");
  const [people, setpeople] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/home");
        const data = await response.json();
        setmessage(data.message);
        console.log(data.people);
        setpeople(data.people);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div>{message}</div>
      {people.map((p, index) => {
        return <div key={index}>{p}</div>;
      })}
    </>
  );
}
