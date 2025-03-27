const serverData = [
  {
    name: "Resume", // server
    data: [
      {
        name: "Education", // channel
        channels: [
          {
            title: "Waseda University", //message
            specificTitle: "Master of Science (Applied Mathematics)",
            date: "2025 - (expected)",
            details: ["Recipient of MEXT Scholarship"],
            link: "./icons/waseda_logo.jpg"
          },
          {
            title: "Curtin University",
            specificTitle: "Bachelor of Science (Actuarial Science)",
            date: "2022 - 2024",
            details: [
              "GPA: 3.96/4.0",
              "Curtin Excellence Scholarship",
              "Summer Vacation Scholarship recipient",
              "Financial Modelling World Cup - Microsoft Excel Collegiate Challenge finalist",
              "Coursework: Statistical modelling, machine learning, financial engineering, quantitative finance"
            ],
            link: "/icons/curtin_logo.jpg"
          },
          {
            title: "Willetton Senior High School",
            date: "2015 - 2021",
            details: [
              "ATAR: 99.35",
              "High distinctions in various mathematics competitions (AMC, ICAS, WA Mathematics Olympiad)"
            ],
            link: "/icons/willetton_logo.jpg"
          }
        ]
      },
      {
        name: "Experience",
        channels: [
          {
            title: "Macquarie",
            specificTitle: "Market Risk Intern - Value at Risk Team",
            date: "Dec 2024 - Feb 2025",
            details: [
              "Responsible for running daily value at risk reports",
              "Liaised with analysts to identify, fix and changelog spurious positions",
              "Suggested and implemented improvements to financial models with Python"
            ],
            link: "/icons/macquarie_logo.jpg"
          },
          {
            title: "Department of Communities",
            specificTitle: "Data Support Officer",
            date: "Apr 2024 – Nov 2024",
            details: [
              "Developed financial lease models for reports, following AASB16 standards",
              "Performed reconciliation and identified errors in financial systems",
              "Created dashboards using SQL, PowerBI, and Power Query"
            ],
            link: "/icons/doc_logo.jpg"
          },
          {
            title: "Curtin University",
            specificTitle: "Research Intern",
            date: "Oct 2023 – Mar 2024",
            details: [
              "Conducted research on 'New digital finance techniques for cryptocurrency markets'",
              "Implemented an LSTM deep learning model in TensorFlow for portfolio optimisation",
              "Conducted risk analysis of portfolios consisting of cryptocurrencies and stocks"
            ],
            link: "/icons/eecms_logo.jpg"
          },
          {
            title: "EY",
            specificTitle: "Data and Analytics Consultant Intern",
            date: "Jun 2023 – Jul 2023",
            details: [
              "Identified areas of risk using Excel/SQL and presented findings in Power BI",
              "Developed optimisation methods for multinational mining clients"
            ],
            link: "/icons/ey_logo.jpg"
          },
          {
            title: "Freelance Tutor",
            specificTitle: "Freelance Tutor",
            date: "Feb 2022 – present",
            details: [
              "Provided academic support to students in various subjects, focusing on mathematics, science, and Japanese language"
            ],
            link: "/icons/tutor_logo.png"
          },
          {
            title: "Perth-Japan Community Volunteer",
            specificTitle: "Volunteer",
            date: "Aug 2022 – present",
            details: [
              "Assisted exchange students in gaining confidence in conversational English",
              "Helped with venue setup and engaged with visitors at the Perth Japan Festival"
            ],
            link: "/icons/perth_japan_logo.jpg"
          }
        ]
      },
      {
        name: "Projects",
        channels: [
          {
            title: "Financial Engineering Trading Strategy",
            specificTitle: "Lead Developer",
            date: "2024",
            details: [
              "Developed derivative trading strategies in R",
              "Performed future stock price simulations using geometric Brownian motion",
              "Conducted risk analysis on simulated returns and returns from realized data"
            ]
          },
          {
            title: "AutoMPG Dataset Linear Regression Analysis",
            specificTitle: "Lead Analyst",
            date: "2024",
            details: [
              "Performed exploratory data analysis in R",
              "Created linear regression models and visualized data",
              "Achieved an R-squared value of 0.8985 for the final model"
            ]
          },
          {
            title: "Live Member Count Scraper",
            specificTitle: "Developer",
            date: "2023",
            details: [
              "Created a Python script using BeautifulSoup4 and Selenium to scrape the live member count of a local gym"
            ]
          }
        ]
      },
      {
        name: "Skills and Interests",
        channels: [
          {
            title: "Coding",
            details: [
              "Python (Proficiency with Pandas, TensorFlow)",
              "R",
              "HTML/CSS/JS (React)",
              "SQL",
              "Power Query"
            ]
          },
          {
            title: "Software",
            details: [
              "Microsoft Office", 
              "Power BI", 
              "Visual Studio Code"
            ]
          },
          {
            title: "Languages",
            details: ["Conversational Japanese, passed JLPT N1"]
          },
          {
            title: "Interests",
            details: [
              "Technology", 
              "English Premier League", 
              "Calisthenics", 
              "Stocks", 
              "Machine Learning",
              "Web development"
            ]
          },
          {
            title: "Other",
            details: [
              "Completed course on Machine Learning Specialisation", 
              "Participant in Amazon’s Machine Learning Summer School"
            ]
          }
        ]
      }
    ]
  },

  {
    name: "Home", //server
    data: [
      {
        name: "Welcome", //channel
        channels: [
          {
            title: "Welcome", //message
            details: [
              "Welcome to my website! This is my personal portfolio where you can stalk me and find out about my background. I am currently studying a master's in applied mathematics in Japan and completed my bachelor's in actuarial science in Australia. Feel free to reach out :)"
            ]
          },
          {
            title: "About",
            details: [
              "Currently: 🇦🇺",
              "Research interests: stochastic processes/time series, machine learning"
            ]
          },
          {
            title: "Contact",
            details: [
              "Currently: 🇦🇺",
              "Research interests: stochastic processes/time series, machine learning"
            ]
          }
        ]
      }
    ]
  }
];

export default serverData;
