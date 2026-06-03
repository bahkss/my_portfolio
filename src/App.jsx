
function App() {
  return (
    <div
      style={{
        backgroundColor: "#050510",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          width: "100%",
          background:
            "linear-gradient(to right, #5b21b6, #7c3aed, #9333ea)",
          textAlign: "center",
          padding: "10px",
          fontSize: "13px",
          boxSizing: "border-box",
        }}
      >
        🚀 Currently open to work opportunities in Software
        Engineering & Mobile Development
      </div>

      {/* NAVBAR */}
      <div
        style={{
          width: "100%",
          padding: "20px 5%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #1b1b2d",
          boxSizing: "border-box",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            margin: 0,
            color: "white",
          }}
        >
          <span style={{ color: "#9333ea" }}>{"</>"}</span> Bahriah
        </h2>

        <div
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
            flexWrap: "wrap",
            fontSize: "14px",
            color: "#d4d4d8",
          }}
        >
          <p>About</p>
          <p>Experience</p>
          <p>Projects</p>
          <p>Skills</p>

          <button
            style={{
              backgroundColor: "#7c3aed",
              color: "white",
              border: "none",
              padding: "10px 22px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Contact
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "80px 5%",
          flexWrap: "wrap",
          gap: "60px",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            maxWidth: "550px",
          }}
        >
          <p
            style={{
              color: "#9333ea",
              fontSize: "24px",
              marginBottom: "10px",
            }}
          >
            Hi, I'm
          </p>

          <h1
            style={{
              fontSize: "clamp(45px, 8vw, 85px)",
              margin: 0,
            }}
          >
            Bahriah
          </h1>

          <h2
            style={{
              color: "#a855f7",
              fontSize: "clamp(22px, 4vw, 38px)",
              marginTop: "15px",
            }}
          >
            Software Engineering Student
          </h2>

          <p
            style={{
              color: "#b4b4c7",
              lineHeight: "1.8",
              fontSize: "16px",
              marginTop: "25px",
            }}
          >
            I build mobile apps, AI-powered systems and backend
            applications that solve real-world problems.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginTop: "35px",
            }}
          >
            <button
              style={{
                backgroundColor: "#7c3aed",
                color: "white",
                border: "none",
                padding: "15px 28px",
                borderRadius: "12px",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              View Projects
            </button>

            <button
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "1px solid #2d2d3f",
                padding: "15px 28px",
                borderRadius: "12px",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              Download Resume
            </button>
          </div>

          {/* SOCIALS */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "35px",
              flexWrap: "wrap",
            }}
          >
            {["GitHub", "LinkedIn", "Email"].map((item) => (
              <div
                key={item}
                style={{
                  backgroundColor: "#11111a",
                  border: "1px solid #1f1f30",
                  padding: "12px 18px",
                  borderRadius: "10px",
                  fontSize: "14px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div
          style={{
            flex: 1,
            minWidth: "280px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "420px",
              height: "500px",
              borderRadius: "30px",
              overflow: "hidden",
              border: "1px solid #7c3aed",
              backgroundColor: "#111",
              boxShadow: "0 0 40px rgba(124,58,237,0.25)",
            }}
          >
            <img
              src="https://via.placeholder.com/420x500"
              alt="profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* ABOUT + SKILLS */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          padding: "0 5% 80px 5%",
          flexWrap: "wrap",
        }}
      >
        {/* ABOUT CARD */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            backgroundColor: "#0d0d18",
            border: "1px solid #1f1f30",
            borderRadius: "20px",
            padding: "35px",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              color: "#a855f7",
              marginBottom: "20px",
            }}
          >
            About Me
          </h2>

          <p
            style={{
              color: "#b4b4c7",
              lineHeight: "1.9",
              fontSize: "15px",
            }}
          >
            I'm a Software Engineering student passionate about
            building innovative solutions using React Native,
            FastAPI, AI systems and modern backend technologies.
          </p>
        </div>

        {/* SKILLS CARD */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            backgroundColor: "#0d0d18",
            border: "1px solid #1f1f30",
            borderRadius: "20px",
            padding: "35px",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              color: "#a855f7",
              marginBottom: "20px",
            }}
          >
            Skills
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
            }}
          >
            {[
              "React",
              "React Native",
              "JavaScript",
              "FastAPI",
              "Python",
              "Firebase",
              "MySQL",
              "Git",
            ].map((skill) => (
              <div
                key={skill}
                style={{
                  backgroundColor: "#141424",
                  border: "1px solid #26263b",
                  padding: "12px 18px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  color: "#e4e4e7",
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
