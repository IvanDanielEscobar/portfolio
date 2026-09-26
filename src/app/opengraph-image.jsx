import { ImageResponse } from "next/og";

export const alt = "Ivan Daniel Escobar | Desarrollador de Software & Especialista en Redes GPON";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 70px",
          backgroundColor: "#07080c",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(16, 185, 129, 0.22) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(6, 182, 212, 0.18) 0%, transparent 45%)",
          color: "#f3f4f6",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "rgba(16, 185, 129, 0.15)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                fontWeight: "bold",
                color: "#34d399",
              }}
            >
              IE
            </div>
            <span
              style={{
                fontSize: "22px",
                fontWeight: "700",
                letterSpacing: "-0.5px",
                color: "#ffffff",
              }}
            >
              Ivan Daniel Escobar
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "999px",
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              fontSize: "14px",
              color: "#6ee7b7",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
              }}
            />
            <span>Disponible para nuevos proyectos</span>
          </div>
        </div>

        {/* Center content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "48px",
              fontWeight: "800",
              letterSpacing: "-1.5px",
              lineHeight: 1.15,
              color: "#ffffff",
              maxWidth: "1000px",
            }}
          >
            Desarrollador de Software & Especialista en Redes GPON
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#9ca3af",
              lineHeight: 1.4,
              maxWidth: "920px",
            }}
          >
            Ingeniería web Full Stack (Django, Flask, React, Next.js) y redes de fibra óptica de última milla. Soluciones Micro-SaaS, Fintech y E-Commerce.
          </div>
        </div>

        {/* Bottom tags and footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "24px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            {["Django", "Flask", "React 19", "Next.js", "PostgreSQL", "Docker", "Redes GPON"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#d1d5db",
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>

          <div
            style={{
              fontSize: "15px",
              color: "#34d399",
              fontWeight: "600",
            }}
          >
            ivanescobarportfolio.netlify.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
