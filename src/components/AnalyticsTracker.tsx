"use client";

import { useEffect, useRef } from "react";
import { trackVisitor } from "@/actions/cms";

export default function AnalyticsTracker() {
  const tracked = useRef(false);

  useEffect(() => {
    if (!tracked.current) {
      trackVisitor();
      tracked.current = true;
    }
  }, []);

  return null;
}
