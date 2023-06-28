import React, { useEffect } from "react";
import { SlAvatar, SlSpinner } from "@shoelace-style/shoelace/dist/react";
import styles from "./Profile.module.css";
import { QUERY_USER } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const Profile = () => {
  const { loading, data: userData } = useQuery(QUERY_USER);

  let profilePicUrl =
    userData?.user.profilePicUrl ||
    "https://images.unsplash.com/photo-1568162603664-fcd658421851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2162&q=80";

  let bannerUrl =
    userData?.user.bannerUrl ||
    "https://images.unsplash.com/photo-1642067958050-bfba120a57e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2348&q=80";

  let name =
    userData?.user.firstName || userData?.user.lastName
      ? `${userData.user.firstName} ${userData.user.lastName}`.trim()
      : "Cornelius Smatterhorne";

  let bio =
    userData?.user.bio ||
    `As a bear, I must admit that I have an unabashed and somewhat unhealthy obsession with honey. Oh, the sweet, golden nectar that entices my senses! The mere thought of that sticky, delectable substance sends shivers of delight down my furry spine. Whether it's the delicate floral notes or the rich, indulgent texture, honey holds an irresistible allure for me. I find myself daydreaming about vast fields of blooming flowers, their nectar transforming into the liquid gold that I crave. My heart races at the sight of a beehive, and I can't help but feel an insatiable desire to sample its precious contents. Yes, it's true, my devotion to honey knows no bounds. I gladly wander through forests, endure stings, and brave the wrath of bees, all for that sweet ambrosia that brings me immense joy. Alas, I must admit that my love for honey may be a bit excessive, but can you blame me? It's a weakness that I cannot resist, for in every taste, I find a momentary escape into pure bliss.`;

  console.log(userData);
  return loading ? (
    <div className={styles.pageSpinner}>
      <SlSpinner
        style={{
          fontSize: "4rem",
          "--indicator-color": "var(--secondary)",
          "--track-width": "6px",
        }}
      />
    </div>
  ) : (
    <div>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${bannerUrl})` }}
      ></div>
      <div className={styles.info}>
        <div className={styles.avatarWrapper}>
          <SlAvatar
            className={styles.avatar}
            label="User avatar"
            image={profilePicUrl}
          />
        </div>
        <div className={styles.infoText}>
          <h1>{name}</h1>
        </div>
      </div>
      <pre className={styles.bio}>{bio}</pre>
      <pre>{JSON.stringify(userData.user.email)}</pre>
    </div>
  );
};

export default Profile;
