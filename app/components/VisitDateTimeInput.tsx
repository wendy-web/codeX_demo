"use client";

import { useEffect, useState } from "react";

function formatDateTimeLocal(date: Date) {
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60_000);

  return localDate.toISOString().slice(0, 16);
}

function getTomorrowMorningVisitTime() {
  const tomorrowMorning = new Date();
  tomorrowMorning.setDate(tomorrowMorning.getDate() + 1);
  tomorrowMorning.setHours(9, 30, 0, 0);

  return formatDateTimeLocal(tomorrowMorning);
}

export default function VisitDateTimeInput() {
  const [visitDateTime, setVisitDateTime] = useState("");

  useEffect(() => {
    setVisitDateTime(getTomorrowMorningVisitTime());
  }, []);

  return (
    <input
      id="visitDate"
      name="visitDate"
      type="datetime-local"
      value={visitDateTime}
      onChange={(event) => setVisitDateTime(event.target.value)}
      required
    />
  );
}
