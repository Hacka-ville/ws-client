import React from "react";
import { Button } from "@mantine/core";
import { TwitterIcon } from "@mantine/ds";

export const TwitterButton = (props) => {
  return (
    <Button
      component="a"
      leftIcon={<TwitterIcon size={16} color="#00ACEE" />}
      variant="default"
      {...props}
    />
  );
};
