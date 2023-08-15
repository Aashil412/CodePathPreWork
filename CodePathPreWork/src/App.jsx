import "./App.css";
import { useRoutes } from "react-router-dom";
import { supabase } from './client';
import { useState, useEffect } from "react";
import Card from "./components/card";

function App() {
  // let elements = useRoutes([
  // { path: "/", element: <ShowCreators /> },
  // { path: '/new', element: <AddCreator /> },
  // { path: '/edit/:id', element: <EditCreator /> },
  // {path: '/:id', element: <ViewCreator/>}
  // ]);

  const [data, setData] = useState({});
  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase.from('creators').select('*');
      
      if (error) {
        console.log(error);
      }
      setData(data);
    } 
    fetchCreator();
  },[])
  
  return (
    <>
      <Card creators={data} />
     
    </>
  );
}

export default App;
