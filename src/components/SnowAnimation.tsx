import React from "react";
import {Box} from "@chakra-ui/react";

import styles from "./SnowAnimation.module.css";

interface Props {
  particles: number;
}

const SnowAnimation = ({particles}: Props) => (
  <Box aria-hidden="true" className={styles.snowflakes}>
    {Array(particles)
      .fill("")
      .map((_, idx) => (
        <div key={idx} className={styles.snowflake}>
          {idx % 2 ? "❅" : "❆"}
        </div>
      ))}
  </Box>
);

export default SnowAnimation;
