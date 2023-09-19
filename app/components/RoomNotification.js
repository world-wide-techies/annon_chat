"use client";

import { useState, useEffect } from "react";

export default function NotificationComponent() {
  const [visible, setVisible] = useState(true);

  const message = "Someone joined the chat!";

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    visible && (
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 p-2 mx-auto bg-green-500 text-slate-100 font-lexend text-xs lg:text-base text-clip max-w-full rounded drop-shadow-2xl">
        {message}
      </div>
    )
  );
}
