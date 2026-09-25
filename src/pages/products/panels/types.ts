export interface PanelProduct {
  id?: string;
  name: string;
  image: string;
  fuelType?: string;
  cpcbNorm?: string;
  cooling?: string;
  phase?: string;
  rating?: number | string;
  ratingCount?: number | string;
  description?: string;
  technicalSpecs?: string;
  category?: string;
  brochurePdf?: string;
}

export interface PanelsCMSData {
  panels?: PanelProduct[];
  heroHeadingPart1?: string;
  heroHeadingPart2?: string;
  heroSub?: string;
  heroBg?: string;
  sectionTitle?: string;
  sectionDesc?: string;
  whyChooseTitle?: string;
  whyChooseCard1Title?: string;
  whyChooseCard1Desc?: string;
  whyChooseCard2Title?: string;
  whyChooseCard2Desc?: string;
  whyChooseCard3Title?: string;
  whyChooseCard3Desc?: string;
  whyChooseCard4Title?: string;
  whyChooseCard4Desc?: string;
  whyChooseCard5Title?: string;
  whyChooseCard5Desc?: string;
  whyChooseCard6Title?: string;
  whyChooseCard6Desc?: string;
  certTitle?: string;
  cert1Title?: string;
  cert2Title?: string;
  cert3Title?: string;
  helpTitle?: string;
  helpSub?: string;
  helpBtnText?: string;
}
