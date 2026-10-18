import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { NightMargin } from "@/components/vn/NightMargin";
import "./styles.css";

function InstallApp() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    const base = import.meta.env.BASE_URL;
    navigator.serviceWorker.register(`${base}sw.js`).catch(() => {});
  }, []);
  return null;
}

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <>
      <InstallApp />
      <NightMargin />
    </>,
  );
}
