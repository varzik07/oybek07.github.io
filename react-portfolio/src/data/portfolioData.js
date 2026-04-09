export const portfolioData = {
  hero: {
    name: "Oybek Valiyev",
    roles: [
      "AI Engineer",
      "Medical Imaging Researcher",
      "Deep Learning Specialist",
      "Software Engineer"
    ],
    description: "AI Engineer & Researcher | Specializing in Medical Imaging, Deep Learning, and Computer Vision. Currently based in South Korea, leading AI-related projects in healthcare at Kumoh National Institute of Technology.",
    image: "oybek_rasm.jpg",
    resumeUrl: "ValiyevOybek.pdf"
  },
  about: {
    title: "About Me",
    description: "Hello! I am Oybek Valiyev, an AI Engineer and Researcher with a deep passion for Medical Imaging, Deep Learning, and Computer Vision. Currently based in South Korea, I work as a **연구원 (Researcher)** at the **국립금오공과대학교 AI & Pattern Lab**, where I lead AI-related projects focusing on healthcare applications. My research aims to bridge the gap between advanced artificial intelligence and practical medical diagnostics, specifically through the development of precision medicine platforms and patient prognosis prediction models. Recent achievements include a KCI publication, a patent application, and ongoing work for MICCAI 2026.",
    stats: [
      { label: "Years Experience", value: "4+" },
      { label: "Projects Completed", value: "10+" },
      { label: "Publications", value: "4+" }
    ]
  },
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Programming & Data",
        skills: ["Python", "C", "Pandas", "NumPy", "Matplotlib", "Seaborn", "OpenCV(cv2)"]
      },
      {
        name: "Machine Learning & DL",
        skills: ["PyTorch", "Scikit-Learn", "CNNs", "Vision Transformers", "GANs", "Diffusion Models", "Transfer Learning"]
      },
      {
        name: "Medical Imaging",
        skills: ["SimpleITK", "NiBabel", "TorchIO", "Radiomics"]
      },
      {
        name: "LLM & MLOps",
        skills: ["RAG", "LangChain", "LangGraph", "Docker", "Git/GitHub", "Slurm", "FastAPI", "Gradio"]
      }
    ]
  },
  experience: [
    {
      role: "연구원 (Researcher)",
      company: "국립금오공과대학교 AI & Pattern Lab",
      period: "2024.09 - 현재",
      location: "South Korea",
      description: "의료 AI 및 Radiogenomics 기반 정밀의료 프로젝트 3건 수행. ADPKD 분류 및 심정지 환자 예후 예측 딥러닝 모델 개발. 연구 성과: KCI 논문 1편, 학회 논문 2편 게재, 특허 1건 출원, MICCAI 2026 논문 심사 진행 중."
    },
    {
      role: "Project Manager",
      company: "Soft Brains (Tashkent)",
      period: "2022.03 - 2024.07",
      location: "Tashkent, Uzbekistan",
      description: "Android 쇼핑몰 앱 '아니벌써' 및 'Creade Value' 통합 플랫폼 개발 총괄. team of 8 members."
    },
    {
      role: "Tech Specialized Translator",
      company: "페르가나한국 국제대학교",
      period: "2020.01 - 2022.02",
      location: "Uzbekistan",
      description: "ML/DL, 데이터 구조, 네트워크 등 컴퓨터공학 전공 강의 통역 및 전공 교재 한국어↔우즈베크어 번역/편집."
    }
  ],
  education: [
    {
      degree: "M.S. in Software Engineering",
      institution: "국립금오공과대학교 (Kumoh National Institute of Technology)",
      period: "2024 - 2026 (예정)",
      gpa: "4.4 / 4.5"
    },
    {
      degree: "B.S. in Economics",
      institution: "전남대학교 (Chonnam National University)",
      period: "2015 - 2017",
      gpa: "3.5 / 4.5"
    }
  ],
  projects: [
    {
      title: "Radiogenomics-Driven Hierarchical Multimodal Stacking for Non-Invasive Triage of ADPKD",
      category: "Deep Learning / Medical Imaging",
      description: "Fused 3D MRI radiomic features with clinical profiles using a two-stage hierarchical stacking framework on ADPKD patients.",
      fullDescription: "Fused 3D MRI radiomic features with clinical profiles using a two-stage hierarchical stacking framework on ADPKD patients. Applied nested cross-validation with OOF probabilistic meta-features to prevent data leakage across multi-institutional cohorts.\n\nStatus: 2025 - Present (MICCAI 2026 — Under Review).",
      tech: ["PyTorch", "3D MRI", "Radiomics", "Stacking Ensemble"],
      liveLink: "",
      githubLink: "",
      image: ""
    },
    {
      title: "인공지능을 이용한 심정지 후 뇌 손상 환자의 신경학적 예후 예측 자동화 모델 개발",
      category: "Healthcare AI",
      description: "Development of AI models for neurological prognosis post-cardiac arrest brain injury using brain CT/MRI volumes.",
      fullDescription: "▸ Performing full 3D medical image preprocessing pipeline: brain extraction, resampling, intensity normalization, and spatial registration on Brain CT and MRI volumes.\n▸ Applying knowledge distillation to transfer CT-based representations into MRI-guided segmentation models.\n▸ Training and optimizing MedNeXt v1 for 3D brain segmentation; automating Gray/White Matter Ratio (GWR) computation to predict neurological outcomes.",
      tech: ["Deep Learning", "Transformers", "MedNeXt v1", "Knowledge Distillation"],
      liveLink: "",
      githubLink: "",
      image: "neurological_prognosis.png"
    },
    {
      title: "정밀의료를 위한 멀티모달 딥러닝 기반 ADPKD 분류 모델",
      category: "Deep Learning / Medical Imaging",
      description: "Precision Medicine Multimodal Deep Learning Model for ADPKD Classification (KCI Publication & Patent).",
      fullDescription: "Employing a 3D ResNet-152 and Multilayer Perceptron (MLP), achieved 73.9% accuracy and 0.754 F1-score for diagnosing genetic mutations using T2-weighted MR images and patient clinical data.",
      tech: ["PyTorch", "3D ResNet-152", "Multi-modal", "SimpleITK"],
      liveLink: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003241210",
      githubLink: "",
      image: ["adpkd_architecture.png", "adpkd_preprocess.png"]
    },
    {
      title: "제조환경 온·습도 안정성 유지 딥러닝 기반 환경 모니터링 모델 개발",
      category: "MLOps / Time-series",
      description: "Developed model for manufacturing temperature & humidity stability (±0.1℃ / ±1%RH). (KICS 2024).",
      fullDescription: "Presented at the KICS 2024 Fall Conference. Developed a deep learning-based environmental monitoring model to maintain temperature and humidity stability (±0.1℃/±1%RH) in manufacturing environments.",
      tech: ["Python", "Deep Learning", "MLOps", "Time-series"],
      liveLink: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12034660&width=1536",
      githubLink: "",
      image: ""
    }
  ],
  contact: {
    email: "oybek07valiyev@gmail.com",
    github: "varzik07",
    linkedin: "oybek-valiyev",
    phone: "010-7532-0407",
    location: "Gumi, South Korea"
  }
};
