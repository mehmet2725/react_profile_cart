import { useState, useEffect } from "react";
import "./App.css";
import ProfileCard from "./components/profileCard";

const stored = JSON.parse(localStorage.data || '{}');

export default function App() {
  const [userData, setUserData] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [theme, setTheme] = useState(stored.theme || 'light');
  document.body.className = theme;

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;

    localStorage.data = JSON.stringify({ theme: newTheme, });
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setUserData(data);
        setDataIsLoaded(true);
      } catch (error) {
        console.error("Veri yükleme hatası:", error);
      }
    };

    fetchUsers();
  }, []);

  if (!dataIsLoaded) {
    return (
      <div>
        <h1>Kişiler Yükleniyor Lütfen bekleyiniz...</h1>
      </div>
    );
  }

  return (
    <>
    <main className="page-container">
      <div className="topBar">
        <button className='theme-toggle' onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Moda Geç' : 'Light Moda Geç'}
        </button>
      </div>
      
      <h1>Kişi Listesi</h1>

      <div className="cards">
        <ProfileCard userData={userData} />
      </div>
    </main>
    </>
  );
}