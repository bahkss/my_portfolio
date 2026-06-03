import profile from "./assets/profile.png";
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
            {/* ✅ CHANGE 2: EXPERIENCE SCROLL */}
            <p
              style={{ cursor: "pointer" }}
              onClick={() =>
                document
                  .getElementById("experience")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Experience
            </p>

            {/* ✅ CHANGE 3: PROJECTS SCROLL */}
            <p
              style={{ cursor: "pointer" }}
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Projects
            </p>

            {/* ✅ CHANGE 4: SKILLS SCROLL */}
            <p
              style={{ cursor: "pointer" }}
              onClick={() =>
                document
                  .getElementById("skills")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Skills
            </p>

            <a href="#contact" style={{ textDecoration: "none" }}>
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
            </a>
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

            <a
              href="/resume_bahriah.pdf"
              download
              style={{
                textDecoration: "none",
              }}
            >
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
            </a>
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
            {/* GITHUB */}
            <a
              href="https://github.com/bahkss"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: "#11111a",
                  border: "1px solid #1f1f30",
                  padding: "12px 18px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                GitHub
              </div>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/bahriah-kamardi-617730255/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: "#11111a",
                  border: "1px solid #1f1f30",
                  padding: "12px 18px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                LinkedIn
              </div>
            </a>

            {/* EMAIL */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bahriahkamardi@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: "#11111a",
                  border: "1px solid #1f1f30",
                  padding: "12px 18px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Email
              </div>
            </a>
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
              src={profile}
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
          id="skills"
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
            id="skills"
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
              "GitHub",
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

        {/* EXPERIENCE */}
        <div
          id="experience"
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
            Experience
          </h2>

          <p
            style={{
              color: "#b4b4c7",
              lineHeight: "1.9",
              fontSize: "15px",
            }}
          >
            Internship Software Developer – Cat Tech Enterprise<br /><br />
            March 2025 – September 2025 <br />
            Gained practical knowledge by developing Frontend for mobile application using React Native Expo. <br />
            Assists with IOT hardware troubleshooting consists of Raspberry Pi, ESP8266 and others. <br />
            Assists in debugging web application using Laravel Framework. 
          </p>
        </div>

        <div
          id="projects"
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
            Projects
          </h2>

          <p
            style={{
              color: "#b4b4c7",
              lineHeight: "1.9",
              fontSize: "15px",
            }}
          >
            Medical AI Chatbot Mobile Application Developer – Final Year’s Project<br /><br />
            Develop Frontend for mobile application using React Native Expo.<br /> 
            Develop Backend using FastAPI, Python, and RESTFUL API for language and symptom paramater.<br /> 
            Gained knowledge by deploying backend server using Gcloud and Render .<br />
            Preprocessing Dataset JSON format for dataset for symptom matching-retrieval .<br />
            Integration of Gemini AI API for reasoning and firebase for database storage 
          </p>
        </div>

        {/* CONTACT */}
        <div
          id="contact"
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
            Contact
          </h2>

          <p
            style={{
              color: "#b4b4c7",
              lineHeight: "1.9",
              fontSize: "15px",
            }}
          >
            Email: bahriahkamardi@gmail.com
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;
