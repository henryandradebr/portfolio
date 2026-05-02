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
    username: "@henryandradebr",
    icon: Icons.gitHub,
    link: "https://github.com/henryandradebr",
  },
  {
    name: "LinkedIn",
    username: "Henrique Andrade",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/namanbarkiya",
  },
  // {
  //   name: "Twitter",
  //   username: "@henryandradebr",
  //   icon: Icons.twitter,
  //   link: "https://twitter.com/henryandradebr",
  // },
  {
    name: "Gmail",
    username: "naman.henryandradebr",
    icon: Icons.gmail,
    link: "mailto:naman.henriquenascandrade@gmail.com",
  },
];
