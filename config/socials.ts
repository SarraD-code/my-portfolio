import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@SarraD-code",
    icon: Icons.gitHub,
    link: "https://github.com/SarraD-code",
  },
  {
    name: "LinkedIn",
    username: "Sarra Drine",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/sarra-drine",
  },
  {
    name: "Gmail",
    username: "sarra.drine2",
    icon: Icons.gmail,
    link: "mailto:sarra.drine2@gmail.com",
  },
];
