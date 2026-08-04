import { useState, useEffect } from "react";

export interface Loc {
  lat: number;
  lng: number;
  city: string;
  country: string;
}

const WATERLOO: Loc = {
  lat: 43.4723,
  lng: -80.5449,
  city: "Waterloo",
  country: "Canada",
};

export function useLocation() {
  const [loc, setLoc] = useState<Loc | null>(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((d) => {
        if (d.latitude && d.longitude) {
          setLoc({
            lat: d.latitude,
            lng: d.longitude,
            city: d.city || d.region || "",
            country: d.country_name || "",
          });
        }
      })
      .catch(() => {});
  }, []);

  return { user: loc, waterloo: WATERLOO };
}
