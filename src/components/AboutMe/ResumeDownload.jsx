'use client';

import { useState } from 'react';

export default function ResumeDownload() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const showPopup = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const optionSelected = (option) => {
    console.log(option); // Log untuk menunjukkan opsi yang dipilih
    closePopup();
  };

  return (
    <div className="text-center">
      {/* Tombol untuk menampilkan popup */}
      <button
        type="button"
        onClick={showPopup}
        className='font-semibold text-white bg-gradient-to-r from-cyan-700 via-8yan-700 to-cyan-900 hover:bg-gradient-to-br rounded-lg text-sm p-2 md:px-5 md:py-2.5 text-center mt-3 '
      >
        Download My Resume .pdf
      </button>

      {/* Popup */}
      {isPopupVisible && (
        <div id="myPopup" className="popup fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg relative">
            <span
              className="absolute top-2 right-4 text-2xl cursor-pointer"
              onClick={closePopup}
            >
              &times;
            </span>
            <p className="text-center mb-5">Select one of the options:</p>

            {/* Opsi Download dalam Bahasa Inggris */}
            <a href="/asset/file/cv_ismail_en.pdf" download="cv_ismail_en.pdf">
              <button
                type="button"
                onClick={() => optionSelected('English Resume')}
                className="mt-5 font-semibold text-white bg-gradient-to-r from-cyan-700 via-8yan-700 to-cyan-900 hover:bg-gradient-to-br rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
              >
                Download in English
              </button>
            </a>

            {/* Opsi Download dalam Bahasa Indonesia */}
            <a href="/asset/file/cv_ismail_id.pdf" download="cv_ismail_id.pdf">
              <button
                type="button"
                onClick={() => optionSelected('Indonesian Resume')}
                className="mt-5 font-semibold text-white bg-gradient-to-r from-cyan-700 via-8yan-700 to-cyan-900 hover:bg-gradient-to-br rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
              >
                Download in Indonesian
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
