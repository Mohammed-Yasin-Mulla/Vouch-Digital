import { useEffect } from "react";

export default function Home() {
  
  // redirecting the page to view-clients page on load
  useEffect(() => {
    window.open('/view-clients', '_self')
  }, [])
  

}