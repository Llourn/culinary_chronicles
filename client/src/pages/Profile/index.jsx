import React from "react";
import { SlAvatar } from "@shoelace-style/shoelace/dist/react";
import styles from "./Profile.module.css";

const Profile = () => {
  let avatarImage =
    "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80";

  let bannerImage =
    "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80";

  let name = "Cornelius Smatterhorne";

  let bio = `Born with a flair for the culinary arts and an unwavering passion for all things sweet, Cornelius Smatterhorne has carved his name in the annals of gastronomy as the infamous pastry chef extraordinaire. Renowned for his audacious creations and unorthodox methods, Smatterhorne has captured the world's imagination, tantalizing taste buds and pushing the boundaries of dessert craftsmanship.
  
From his early days in a humble bakery tucked away in a quaint countryside town, Cornelius demonstrated an innate talent for transforming simple ingredients into edible masterpieces. His insatiable curiosity led him to experiment with unconventional flavor combinations and innovative techniques, forever challenging the status quo of traditional pastry-making.
  
Word of his extraordinary talent quickly spread, and soon enough, Smatterhorne found himself in the kitchens of Michelin-starred restaurants and prestigious culinary institutions. With each dish he crafted, he dazzled patrons and critics alike, leaving a lasting impression on their palates and forever altering their perception of what desserts could be.
  
What truly sets Cornelius Smatterhorne apart is his fearless creativity and his refusal to conform to conventions. He fearlessly blends unexpected ingredients like lavender and saffron, marries savory and sweet in harmonious unions, and turns familiar treats into avant-garde delights. His mastery lies not only in the visual aesthetics of his creations but also in the way each bite evokes a symphony of flavors and textures, igniting a sensory journey that lingers long after the plate is empty.
  
Yet, alongside his culinary prowess, Smatterhorne has earned a reputation for his enigmatic persona. An eccentric figure with an air of mystery, he cloaks his process in secrecy, guarding his techniques and recipes with unwavering zeal. This aura of mystique only adds to the allure surrounding his work, leaving patrons and aspiring pastry chefs alike captivated and hungry for more.
  
Cornelius Smatterhorne's illustrious career has garnered him countless accolades and international acclaim. His desserts have graced the tables of heads of state, celebrities, and discerning food enthusiasts across the globe. Today, his name is whispered in revered tones, spoken with both reverence and a hint of awe, as his innovations continue to shape the very landscape of pastry-making.
  
As the infamous pastry chef, Cornelius Smatterhorne stands as an iconoclast, a visionary who defies expectations and elevates desserts to an art form. With his daring creations, he continues to inspire the next generation of pastry chefs, urging them to break free from tradition and embrace the uncharted realms of culinary possibility.`;
  return (
    <div>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></div>
      <div className={styles.info}>
        <div className={styles.avatarWrapper}>
          <SlAvatar
            className={styles.avatar}
            label="User avatar"
            image={avatarImage}
          />
        </div>
        <div className={styles.infoText}>
          <h1>{name}</h1>
        </div>
      </div>
      <pre className={styles.bio}>{bio}</pre>
    </div>
  );
};

export default Profile;
