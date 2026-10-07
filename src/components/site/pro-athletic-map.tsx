import { useEffect, useRef } from "react";

const LAT = 30.6468;
const LNG = 76.8203;

export function ProAthleticMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (mapRef.current || !containerRef.current) return;

    import("leaflet").then((L) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({ iconRetinaUrl: "", iconUrl: "", shadowUrl: "" });

      const map = L.map(containerRef.current!, {
        center: [LAT, LNG],
        zoom: 16,
        zoomControl: true,
        scrollWheelZoom: false,
      });
      mapRef.current = map;

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution: "&copy; OpenStreetMap &copy; CARTO",
        subdomains: "abcd",
        maxZoom: 20,
      }).addTo(map);

      const pinSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 60" width="48" height="60">
        <defs>
          <radialGradient id="pg" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#ff4040"/>
            <stop offset="100%" stop-color="#b91c1c"/>
          </radialGradient>
        </defs>
        <ellipse cx="24" cy="57" rx="7" ry="2.5" fill="rgba(0,0,0,0.4)"/>
        <path d="M24 2C15.16 2 8 9.16 8 18c0 12 16 38 16 38s16-26 16-38C40 9.16 32.84 2 24 2z"
              fill="url(#pg)" stroke="#7f1d1d" stroke-width="1.5"/>
        <circle cx="24" cy="18" r="9" fill="white" opacity="0.12"/>
        <g fill="white" transform="translate(24,18)">
          <rect x="-10" y="-2" width="20" height="4" rx="2"/>
          <rect x="-13" y="-5" width="5" height="10" rx="2"/>
          <rect x="8"   y="-5" width="5" height="10" rx="2"/>
        </g>
      </svg>`;

      const customIcon = L.divIcon({
        html: pinSvg,
        className: "",
        iconSize: [48, 60],
        iconAnchor: [24, 58],
        popupAnchor: [0, -62],
      });

      L.marker([LAT, LNG], { icon: customIcon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family:system-ui,sans-serif;min-width:190px;line-height:1.6">
            <strong style="font-size:13px;color:#ef4444">&#127947; Pro Athletic Gyms</strong><br/>
            <span style="font-size:12px;color:#ccc">VIP Road, Zirakpur</span><br/>
            <span style="font-size:11px;color:#999">Hollywood Plaza, SCO 9-10, Punjab 140603</span><br/>
            <a href="https://maps.google.com/?q=Pro+Athletic+Gyms+VIP+Road+Zirakpur"
               target="_blank" rel="noopener"
               style="font-size:11px;color:#ef4444;text-decoration:none;margin-top:6px;display:inline-block">
              Open in Google Maps &#8599;
            </a>
          </div>`,
          { maxWidth: 230 },
        )
        .openPopup();
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        crossOrigin=""
      />
      <div ref={containerRef} className="h-72 w-full lg:h-80" style={{ background: "#111" }} />
    </>
  );
}
