import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { HomeIcon, SearchIcon } from "@/components/icons";

const NAV_ITEMS = [
  { label: null, icon: true, href: "/" },
  { label: "Beratung", icon: false, href: "/beratung/" },
  { label: "Diagnostik", icon: false, href: "/diagnostik/" },
  { label: "Forschung", icon: false, href: "/forschung/" },
  { label: "Lehre & Fortbildung", icon: false, href: "/lehre-und-fortbildung/" },
  { label: "Institut", icon: false, href: "/institut/" },
  { label: "Kontakt", icon: false, href: "/kontakt/" },
] as const;

const STICKY_THRESHOLD = 93;
const NAV_HEIGHT = 60;

interface NavBarProps {
  activeHref?: string;
}

export default function NavBar({ activeHref = "/" }: NavBarProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsSticky(window.scrollY > STICKY_THRESHOLD);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isSticky && (
        <div style={{ height: `${NAV_HEIGHT}px` }} aria-hidden="true" />
      )}
      <nav
        className={cn("hidden md:flex w-full")}
        style={{
          backgroundColor: "rgb(0, 81, 158)",
          height: `${NAV_HEIGHT}px`,
          ...(isSticky
            ? { position: "fixed", top: 0, left: 0, right: 0, zIndex: 980 }
            : {}),
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            paddingLeft: "20px",
            paddingRight: "20px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          {/* Left: nav items */}
          <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? activeHref === "/"
                  : activeHref.startsWith(item.href);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: `${NAV_HEIGHT}px`,
                    padding: "0 20px",
                    color: "#ffffff",
                    fontFamily: "Lato, sans-serif",
                    fontSize: "15px",
                    fontWeight: 700,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    backgroundColor: isActive ? "rgba(0,0,0,0.15)" : "transparent",
                    transition: "background-color 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                        "rgba(255,255,255,0.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                        "transparent";
                    }
                  }}
                >
                  {item.icon ? (
                    <HomeIcon width={16} height={16} fill="white" color="white" />
                  ) : (
                    item.label
                  )}
                </a>
              );
            })}
          </div>

          {/* Right: search */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", height: "100%" }}>
            <SearchIcon width={16} height={16} color="rgba(255,255,255,0.7)" stroke="rgba(255,255,255,0.7)" />
            <input
              type="text"
              placeholder="SUCHE"
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "rgba(255,255,255,0.7)",
                fontFamily: "Lato, sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                width: "120px",
              }}
              className="placeholder:text-white/70 placeholder:[letter-spacing:0.1em]"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
