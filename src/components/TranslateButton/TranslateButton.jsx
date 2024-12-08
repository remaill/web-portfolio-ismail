'use client'

import React, { useState, useEffect } from "react";
import translate from "google-translate-api-browser";

const TranslateButton = () => {
  const [language, setLanguage] = useState("en");

  const translatePage = (targetLang) => {
    const elements = document.querySelectorAll("[data-translate]");

    elements.forEach((el) => {
      const originalText = el.getAttribute("data-original-text") || el.textContent;

      if (!originalText) return;

      translate(originalText, { to: targetLang })
        .then((res) => {
          el.textContent = res.text;
        })
        .catch((err) => console.error("Translation Error:", err));
    });
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    translatePage(lang);
  };

  useEffect(() => {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((el) => {
      if (!el.getAttribute("data-original-text")) {
        el.setAttribute("data-original-text", el.textContent || "");
      }
    });
  }, []);

  return (
    <div className="p-4 text-center">
      <button
        onClick={() => handleLanguageChange("en")}
        className={`px-4 py-2 rounded ${
          language === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange("id")}
        className={`px-4 py-2 rounded ${
          language === "id" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        ID
      </button>
    </div>
  );
};

export default TranslateButton;