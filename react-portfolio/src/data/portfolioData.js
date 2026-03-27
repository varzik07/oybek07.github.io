export const portfolioData = {
  hero: {
    name: "Oybek Valiyev",
    roles: [
      "AI Engineer",
      "Medical Imaging Researcher",
      "Deep Learning Specialist",
      "Software Engineer"
    ],
    description: "Specializing in Medical Imaging, Deep Learning, and Computer Vision to build intelligent healthcare platforms.",
    image: "/oybek_rasm.jpg",
    resumeUrl: "/ValiyevOybek.pdf"
  },
  about: {
    title: "About Me",
    description: "Hello! I am Oybek Valiyev, an AI Engineer and Researcher with a deep passion for Medical Imaging, Deep Learning, and Computer Vision. Currently based in South Korea, I work as a Researcher at the Kumoh National Institute of Technology, where I lead AI-related projects focusing on healthcare applications. My research aims to bridge the gap between advanced artificial intelligence and practical medical diagnostics, specifically through the development of precision medicine platforms and patient prognosis prediction models.",
    stats: [
      { label: "Years Experience", value: "4+" },
      { label: "Projects Completed", value: "10+" },
      { label: "Publications", value: "2" }
    ]
  },
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Programming & Data",
        skills: ["Python", "C", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
      },
      {
        name: "Machine Learning & DL",
        skills: ["PyTorch", "Scikit-Learn", "CNNs", "Vision Transformers", "GANs", "Diffusion Models"]
      },
      {
        name: "Medical Imaging",
        skills: ["SimpleITK", "NiBabel", "TorchIO", "Radiomics"]
      },
      {
        name: "LLM & MLOps",
        skills: ["RAG", "LangChain", "Docker", "Git", "FastAPI", "Gradio"]
      }
    ]
  },
  experience: [
    {
      role: "Researcher",
      company: "Kumoh National Institute of Technology",
      period: "Sep 2024 - Present",
      location: "South Korea",
      description: "Executing and leading AI-related projects in medical imaging and environmental monitoring. Leading research on Radiogenomics-based Patient Profile Data Integration."
    },
    {
      role: "Project Manager",
      company: "Soft Brains",
      period: "Mar 2022 - Jul 2024",
      location: "Tashkent, Uzbekistan",
      description: "Oversaw full lifecycle development of the 'Ani-beolsseo' Android Shopping Mall and 'Creade Value' integrated platform."
    },
    {
      role: "Tech Specialized Translator",
      company: "Fergana Korean International University",
      period: "Jan 2020 - Feb 2022",
      location: "Uzbekistan",
      description: "Provided teaching assistance and translation for Computer Science majors covering ML/DL, Data Structures, and Networks."
    }
  ],
  education: [
    {
      degree: "M.S. in Software Engineering",
      institution: "Kumoh National Institute of Technology",
      period: "2024 - 2026",
      gpa: "4.4 / 4.5"
    },
    {
      degree: "B.S. in Economics",
      institution: "Chonnam National University",
      period: "2015 - 2017",
      gpa: "3.2 / 4.5"
    }
  ],
  projects: [
    {
      title: "Radiogenomics-Driven Hierarchical Multimodal Stacking for ADPKD Triage",
      category: "Deep Learning / Medical Imaging",
      description: "Fused 3D MRI radiomic features with clinical profiles using a two-stage hierarchical stacking framework on ADPKD patients.",
      fullDescription: "Fused 3D MRI radiomic features with clinical profiles using a two-stage hierarchical stacking framework on ADPKD patients. Applied nested cross-validation with OOF probabilistic meta-features to prevent data leakage across multi-institutional cohorts.\n\nStatus: 2025 - Present (MICCAI — Under Review).",
      tech: ["PyTorch", "3D MRI", "Radiomics", "Stacking Ensemble"],
      liveLink: "",
      githubLink: "",
      image: ""
    },
    {
      title: "Multimodal Deep Learning for ADPKD Classification in Precision Medicine",
      category: "Deep Learning / Medical Imaging",
      description: "Precision Medicine Multimodal Deep Learning Model for ADPKD Classification.",
      fullDescription: "Autosomal Dominant Polycystic Kidney Disease (ADPKD) is a common genetic disorder leading to kidney failure, affecting millions globally. This study presents a non-invasive approach to diagnose genetic mutations using T2-weighted MR images and patient clinical data, advancing precision medicine. \n\nThe Multimodal Model, employing a 3D ResNet-152 and Multilayer Perceptron (MLP), achieved the highest performance with 73.9% accuracy and a 0.754 F1-score. These results demonstrate the effectiveness of integrating multiple data modalities for enhanced classification of ADPKD genetic mutations.",
      tech: ["PyTorch", "3D ResNet-152", "Multi-modal", "SimpleITK"],
      liveLink: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003241210",
      githubLink: "",
      image: ["/adpkd_architecture.png", "/adpkd_preprocess.png"]
    },
    {
      title: "Development of an automated model of neurological prognosis prediction in patients with post-cardiac arrest brain injury using artificial intelligence",
      category: "Healthcare AI",
      description: "Automated Neurological Prognosis Prediction Model for Post-Cardiac Arrest Brain Injury Patients.",
      fullDescription: "Ongoing project.\n\n▸ Performing full 3D medical image preprocessing pipeline: brain extraction, resampling, intensity normalization, and spatial registration on Brain CT and MRI volumes.\n▸ Applying knowledge distillation to transfer CT-based representations into MRI-guided segmentation models, reducing dependency on scarce paired data.\n▸ Training and optimizing MedNeXt v1 for 3D brain segmentation; automating Gray/White Matter Ratio (GWR) computation from segmented volumes to predict neurological outcomes in post-cardiac arrest patients.",
      tech: ["Deep Learning", "Transformers", "MedNeXt v1", "Knowledge Distillation"],
      liveLink: "",
      githubLink: "",
      image: "/neurological_prognosis.png"
    },
    {
      title: "Development of a Deep Learning-Based Environmental Monitoring Model to Maintain Temperature and Humidity Stability (±0.1°C / ±1%RH) in Manufacturing Environments",
      category: "MLOps / Time-series",
      description: "Developed model for manufacturing temperature & humidity stability (±0.1℃ / ±1%RH).",
      fullDescription: "Development of Deep Learning-Based Environmental Monitoring Model to Maintain Temperature and Humidity Stability (±0.1℃/±1%RH) in Manufacturing Environments.\n\nPresented at the KICS 2024 Fall Conference. Developed a deep learning-based environmental monitoring model for manufacturing temperature & humidity stability.",
      tech: ["Python", "Deep Learning", "MLOps", "Time-series"],
      liveLink: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12034660&width=1536",
      githubLink: "",
      image: ""
    }
  ],
  contact: {
    email: "oybek07valiyev@gmail.com",
    github: "oybek07",
    linkedin: "oybek-valiyev",
    phone: "010-7532-0407",
    location: "Gumi, South Korea"
  }
};
