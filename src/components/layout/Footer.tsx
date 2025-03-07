import Link from "next/link";

import { GithubIcon, InstagramIcon, LinkedInIcon } from "@/assets/icons";
import styles from "./footer.module.css";
import Image from "next/image";

export const Footer = () => {
  const socialMedias = [
    {
      id: "linkedin",
      icon: LinkedInIcon,
      path: "https://linkedin.com/in/klinger-matheus",
    },
    {
      id: "github",
      icon: GithubIcon,
      path: "https://github.com/klingermatheus",
    },
    {
      id: "instagram",
      icon: InstagramIcon,
      path: "https://instagram.com/klinger_matheus",
    },
  ] as const;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.message}>
          This website is developed by <b>Klinger Matheus</b>, in purpose to
          complete the <abbr title="Front End">FE</abbr> challenge provided by{" "}
          <strong>
            <Link href="https://myside.com.br/">MySide</Link>
          </strong>
          .
        </div>
        <div className={styles["social-media-container"]}>
          {socialMedias.map((socialMedia) => (
            <Link key={socialMedia.id} target="_blank" href={socialMedia.path}>
              <Image
                src={socialMedia.icon}
                alt={socialMedia.id}
                height={30}
                width={30}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
