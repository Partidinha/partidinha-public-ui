"use client";

import { useEffect } from "react";

export function AeoWidgetLoader() {
  useEffect(() => {
    import("aeo.js/widget").then(({ AeoWidget }) => {
      new AeoWidget({
        config: {
          title: "Partidinha: Bot no seu WhatsApp",
          url: "https://partidinha.com",
          widget: {
            enabled: true,
            position: "bottom-right",
          },
        },
      });
    });
  }, []);

  return null;
}
